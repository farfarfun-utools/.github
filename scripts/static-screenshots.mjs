import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import { launch } from '../utools-shots/cdp.mjs'
import { serve } from '../utools-shots/shared.mjs'

const root = process.cwd()
const name = JSON.parse(fs.readFileSync('package.json', 'utf8')).name
if (!['utools-funimage', 'utools-funvideo'].includes(name)) throw new Error(`Unsupported static plugin: ${name}`)
const out = path.join(root, 'docs/screenshots')
fs.mkdirSync(out, { recursive: true })
const server = await serve(path.join(root, 'utools/dist'))
const browser = await launch({ url: server.origin })
const { session } = browser
const errors = []
session.on('Runtime.exceptionThrown', event => errors.push(event.exceptionDetails.exception?.description || event.exceptionDetails.text))
session.on('Log.entryAdded', ({ entry }) => { if (entry.level === 'error') errors.push(entry.text) })

try {
  await session.send('Emulation.setTimezoneOverride', { timezoneId: 'Asia/Shanghai' })
  await session.send('Emulation.setEmulatedMedia', { features: [{ name: 'prefers-reduced-motion', value: 'reduce' }] })
  const bridge = name === 'utools-funimage'
    ? `window.funimage = { onFiles() {}, chooseFiles() { return [] }, chooseOutput() { return '/tmp' }, chooseOverlay() { return null }, addPaths() { return [] }, openOutput() { return '' }, saveImage() { return '/tmp/output.png' } };`
    : `window.funvideo = { onFiles(callback) { window.acceptDemoFiles = callback }, addFiles(paths) { return paths.map((file, index) => ({ path: file, name: file.split('/').pop(), size: (index + 2) * 1024 * 1024 })) }, chooseFiles() { return [] }, chooseOutput() { return '/tmp' }, chooseWatermark() { return null }, openOutput() { return '' } };`
  await session.send('Page.addScriptToEvaluateOnNewDocument', { source: bridge })
  await session.send('Emulation.setDeviceMetricsOverride', { width: 1280, height: 800, deviceScaleFactor: 2, mobile: false })
  await browser.navigate()
  await session.waitForExpression('document.readyState === "complete" && !!document.querySelector("#job-list")')

  if (name === 'utools-funimage') {
    await session.evaluate(`(async () => {
      const canvas = document.createElement('canvas'); canvas.width = 960; canvas.height = 600;
      const ctx = canvas.getContext('2d');
      ctx.fillStyle = '#dcebe6'; ctx.fillRect(0, 0, 960, 600);
      ctx.fillStyle = '#174d45'; ctx.fillRect(80, 70, 800, 460);
      ctx.fillStyle = '#ed7354'; ctx.fillRect(140, 130, 260, 320);
      ctx.fillStyle = '#f4f8f5'; ctx.fillRect(450, 130, 350, 150);
      ctx.fillStyle = '#5caa92'; ctx.fillRect(450, 310, 350, 140);
      const blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/png'));
      const transfer = new DataTransfer();
      transfer.items.add(new File([blob], '示例图片.png', { type: 'image/png' }));
      document.dispatchEvent(new DragEvent('drop', { dataTransfer: transfer, bubbles: true, cancelable: true }));
    })()`)
    await session.waitForExpression('document.querySelector("#preview-image").naturalWidth > 0')
  } else {
    await session.evaluate(`window.acceptDemoFiles(['/demo/旅行片段.mp4', '/demo/采访素材.mov'])`)
    await session.waitForExpression('document.querySelectorAll(".job").length === 2')
  }

  async function capture(file) {
    await session.evaluate('document.fonts.ready')
    assert.equal(await session.evaluate('document.documentElement.scrollWidth > innerWidth'), false, `${file}: horizontal overflow`)
    const result = await session.send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: true })
    fs.writeFileSync(path.join(out, `${file}.png`), Buffer.from(result.data, 'base64'))
    console.log(`${file}.png`)
  }

  await capture('home')
  await session.evaluate(`document.querySelector('#operation').value = '${name === 'utools-funimage' ? 'watermark' : 'crop'}'; document.querySelector('#operation').dispatchEvent(new Event('change'))`)
  if (name === 'utools-funimage') {
    await session.evaluate(`document.querySelector('#make-preview').click()`)
    await session.waitForExpression('!document.querySelector("#show-result").disabled')
  }
  await capture('tools')
  await session.evaluate(`document.querySelector('#open-settings').click()`)
  await capture('settings')
  await session.evaluate(`document.querySelector('#settings-dialog').close()`)
  await session.send('Emulation.setDeviceMetricsOverride', { width: 420, height: 780, deviceScaleFactor: 2, mobile: false })
  await capture('mobile')
  assert.deepEqual(errors, [], 'browser errors')
} finally {
  await browser.close()
  await server.close()
}
