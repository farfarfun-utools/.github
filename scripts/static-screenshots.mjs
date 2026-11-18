import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import { launch } from '../utools-shots/cdp.mjs'
import { serve } from '../utools-shots/shared.mjs'

const root = process.cwd()
const name = JSON.parse(fs.readFileSync('package.json', 'utf8')).name.replace(/^@farfarfun\//, '')
if (!['utools-funimage', 'utools-funvideo'].includes(name)) throw new Error(`Unsupported static plugin: ${name}`)
const { height } = JSON.parse(fs.readFileSync('utools/plugin.json', 'utf8')).pluginSetting
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
  await session.send('Emulation.setDeviceMetricsOverride', { width: 800, height, deviceScaleFactor: 2, mobile: false })
  await browser.navigate()
  await session.waitForExpression('document.readyState === "complete" && !!document.querySelector("#job-list")')

  if (name === 'utools-funimage') {
    const photos = [['rocket.jpg', '火箭升空.jpg'], ['astronaut.jpg', '航天员肖像.jpg']].map(([file, title]) => ({
      title,
      data: fs.readFileSync(new URL(`./fixtures/${file}`, import.meta.url)).toString('base64'),
    }))
    await session.evaluate(`(() => {
      const transfer = new DataTransfer();
      for (const { title, data } of ${JSON.stringify(photos)}) {
        const bytes = Uint8Array.from(atob(data), c => c.charCodeAt(0));
        transfer.items.add(new File([bytes], title, { type: 'image/jpeg' }));
      }
      document.dispatchEvent(new DragEvent('drop', { dataTransfer: transfer, bubbles: true, cancelable: true }));
    })()`)
    await session.waitForExpression('document.querySelector("#preview-image").naturalWidth > 0 && document.querySelector("#job-list").children.length === 2')
  } else {
    await session.evaluate(`window.acceptDemoFiles(['/demo/旅行片段.mp4', '/demo/采访素材.mov'])`)
    await session.waitForExpression('document.querySelectorAll(".job").length === 2')
  }

  async function capture(file) {
    await session.evaluate('document.fonts.ready')
    assert.equal(await session.evaluate('document.documentElement.scrollWidth > innerWidth'), false, `${file}: horizontal overflow`)
    const result = await session.send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: false })
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
  await session.send('Emulation.setDeviceMetricsOverride', { width: 375, height, deviceScaleFactor: 2, mobile: false })
  await session.send('Emulation.setEmulatedMedia', { features: [{ name: 'prefers-reduced-motion', value: 'reduce' }, { name: 'prefers-color-scheme', value: 'dark' }] })
  await capture('mobile')
  assert.deepEqual(errors, [], 'browser errors')
} finally {
  await browser.close()
  await server.close()
}
