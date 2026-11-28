<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)"
            srcset="https://farfarfun.com/brand/png/lockup-on-dark/utools-256.png">
    <img src="https://farfarfun.com/brand/png/lockup/utools-256.png"
         height="80" alt="farfarfun-utools">
  </picture>
</p>

## 🧩 farfarfun-utools

[farfarfun](https://github.com/farfarfun) 的 **uTools 插件**产品线，由主组织孵化成熟后独立为子组织。各插件遵循统一的设计原则：

- **本地优先** — 按需使用本地存储或 uTools 的 `dbStorage`，无需注册账号，也无需自建服务端
- **主搜索框集成** — 可在 uTools 主输入框中直接检索并回车获取结果，无需先打开插件界面
- **统一构建前端** — 各插件由 Vite 构建；按功能选用 Vue 3/TypeScript 或原生 JavaScript

---

## 📦 插件总览

| 插件 | 用途 | 技术栈 |
|------|------|--------|
| <img src="https://farfarfun.com/brand/png/mark/funchat-64.png" alt="" width="40"> [utools-funchat](https://github.com/farfarfun-utools/utools-funchat) | **[言来语往](https://farfarfun.github.io/packages/utools-funchat/)** — 多角色 AI 对话、图片生成、角色市场、话题回溯与一键导出 | ![Vue](https://img.shields.io/badge/Vue-3-42b883?style=flat-square) ![TS](https://img.shields.io/badge/TypeScript-3178c6?style=flat-square) |
| <img src="https://farfarfun.com/brand/png/mark/fundoc-64.png" alt="" width="40"> [utools-fundoc](https://github.com/farfarfun-utools/utools-fundoc) | **[落笔成章](https://farfarfun.github.io/packages/utools-fundoc/)** — Markdown 文档， 本地管理文档，支持 LaTeX 公式、多级目录与跨设备同步 | ![Vue](https://img.shields.io/badge/Vue-3-42b883?style=flat-square) ![TS](https://img.shields.io/badge/TypeScript-3178c6?style=flat-square) |
| <img src="https://farfarfun.com/brand/png/mark/funlink-64.png" alt="" width="40"> [utools-funlink](https://github.com/farfarfun-utools/utools-funlink) | **[一链即达](https://farfarfun.github.io/packages/utools-funlink/)** — 网址收藏与导航， 支持二级分类与拖拽排序、收集箱、废纸篓、站内搜索占位符与指定浏览器打开 | ![Vue](https://img.shields.io/badge/Vue-3-42b883?style=flat-square) ![JS](https://img.shields.io/badge/JavaScript-d97706?style=flat-square) |
| <img src="https://farfarfun.com/brand/png/mark/funotp-64.png" alt="" width="40"> [utools-funotp](https://github.com/farfarfun-utools/utools-funotp) | **[密钥随行](https://farfarfun.github.io/packages/utools-funotp/)** — 两步验证码， 本地离线生成 TOTP / HOTP，兼容 Google Authenticator，并支持扫码导入与 WebDav 备份 | ![Vue](https://img.shields.io/badge/Vue-3-42b883?style=flat-square) ![TS](https://img.shields.io/badge/TypeScript-3178c6?style=flat-square) |
| <img src="https://farfarfun.com/brand/png/mark/funcalendar-64.png" alt="" width="40"> [utools-funcalendar](https://github.com/farfarfun-utools/utools-funcalendar) | **[时光常伴](https://farfarfun.github.io/packages/utools-funcalendar/)** — 离线阳历、农历、节气与每日黄历宜忌，支持按嫁娶、搬家、开市等事项择吉 | ![Vue](https://img.shields.io/badge/Vue-3-42b883?style=flat-square) ![TS](https://img.shields.io/badge/TypeScript-3178c6?style=flat-square) |
| <img src="https://farfarfun.com/brand/png/mark/funqr-64.png" alt="" width="40"> [utools-funqr](https://github.com/farfarfun-utools/utools-funqr) | **[码上生花](https://farfarfun.github.io/packages/utools-funqr/)** — 离线二维码与文本互转，配色、渐变、码点与 Logo 美化，导出 PNG / SVG | ![Vue](https://img.shields.io/badge/Vue-3-42b883?style=flat-square) ![TS](https://img.shields.io/badge/TypeScript-3178c6?style=flat-square) |
| <img src="https://farfarfun.com/brand/png/mark/funcalc-64.png" alt="" width="40"> [utools-funcalc](https://github.com/farfarfun-utools/utools-funcalc) | **[算有所得](https://farfarfun.github.io/packages/utools-funcalc/)** — 主搜索框即时计算，支持变量、矩阵、LaTeX 排版与持久化历史的离线笔记本 | ![Vue](https://img.shields.io/badge/Vue-3-42b883?style=flat-square) ![TS](https://img.shields.io/badge/TypeScript-3178c6?style=flat-square) |
| <img src="https://farfarfun.com/brand/png/mark/funvideo-64.png" alt="" width="40"> [utools-funvideo](https://github.com/farfarfun-utools/utools-funvideo) | **[视频工坊](https://farfarfun.github.io/packages/utools-funvideo/)** — 本地批量压缩、裁剪、抽帧、制作视频缩略图拼图与处理音频 | ![Vite](https://img.shields.io/badge/Vite-646cff?style=flat-square) ![JS](https://img.shields.io/badge/JavaScript-d97706?style=flat-square) ![FFmpeg](https://img.shields.io/badge/FFmpeg-007808?style=flat-square) |
| <img src="https://farfarfun.com/brand/png/mark/funimage-64.png" alt="" width="40"> [utools-funimage](https://github.com/farfarfun-utools/utools-funimage) | **[图片工坊](https://farfarfun.github.io/packages/utools-funimage/)** — 本地批量压缩、编辑、预览图片，可调整队列顺序后拼图或合并为 PDF、GIF | ![Vite](https://img.shields.io/badge/Vite-646cff?style=flat-square) ![JS](https://img.shields.io/badge/JavaScript-d97706?style=flat-square) ![Canvas](https://img.shields.io/badge/Canvas-0f766e?style=flat-square) |
| <img src="https://farfarfun.com/brand/png/mark/funjson-64.png" alt="" width="40"> [utools-funjson](https://github.com/farfarfun-utools/utools-funjson) | **[JSON工坊](https://github.com/farfarfun-utools/utools-funjson)** — 离线 JSON 五视图工作台，支持编辑/树形/递归嵌套表格/栏列/语义对比、JSONPath 查询、智能修复与多语言类型生成 | ![Vue](https://img.shields.io/badge/Vue-3-42b883?style=flat-square) ![TS](https://img.shields.io/badge/TypeScript-3178c6?style=flat-square) |
| <img src="https://farfarfun.com/brand/png/mark/fundata-64.png" alt="" width="40"> [utools-fundata](https://github.com/farfarfun-utools/utools-fundata) | **[数形万变](https://farfarfun.github.io/packages/utools-fundata/)** — 离线 15 合 1 开发者数据工具箱，支持 10 格式互转、SQL、Protobuf、编解码、JWT、哈希/HMAC、UUID、时间戳、Cron、正则、色值、进制、字节、文本对比与批处理 | ![Vue](https://img.shields.io/badge/Vue-3-42b883?style=flat-square) ![TS](https://img.shields.io/badge/TypeScript-3178c6?style=flat-square) |
| <img src="https://farfarfun.com/brand/png/mark/funcolor-64.png" alt="" width="40"> [utools-funcolor](https://github.com/farfarfun-utools/utools-funcolor) | **[拾色生花](https://github.com/farfarfun-utools/utools-funcolor)** — 离线颜色助手与配色工作室，支持屏幕/图片吸管取色与主色板提取、13 格式转换、OKLCH 色阶、配色方案、CSS 渐变、WCAG 对比度、色盲模拟与传统色库 | ![Vue](https://img.shields.io/badge/Vue-3-42b883?style=flat-square) ![TS](https://img.shields.io/badge/TypeScript-3178c6?style=flat-square) |
| <img src="https://farfarfun.com/brand/png/mark/funmeme-64.png" alt="" width="40"> [utools-funmeme](https://github.com/farfarfun-utools/utools-funmeme) | **[趣图生花](https://github.com/farfarfun-utools/utools-funmeme)** — 表情包检索与梗图制作工坊，支持公开接口斗图、手绘梗图加字、8 款文字大字报表情与 Emoji/颜文字贴纸库 | ![Vue](https://img.shields.io/badge/Vue-3-42b883?style=flat-square) ![TS](https://img.shields.io/badge/TypeScript-3178c6?style=flat-square) |
| <img src="https://farfarfun.com/brand/png/mark/funtime-64.png" alt="" width="40"> [utools-funtime](https://github.com/farfarfun-utools/utools-funtime) | **[分秒必争](https://github.com/farfarfun-utools/utools-funtime)** — 离线时间助手，支持多任务倒计时与番茄钟、毫秒秒表、置顶桌面悬浮小窗、28 城世界时钟与跨时区会议推演 | ![Vue](https://img.shields.io/badge/Vue-3-42b883?style=flat-square) ![TS](https://img.shields.io/badge/TypeScript-3178c6?style=flat-square) |
| <img src="https://farfarfun.com/brand/png/mark/funsecret-64.png" alt="" width="40"> [utools-funsecret](https://github.com/farfarfun-utools/utools-funsecret) | **[密藏随行](https://farfarfun.github.io/packages/utools-funsecret/)** — 基于原生 `funsecret` 命令行的本地多级分类加密密钥管理，支持分类树、主框快捷复制、剪贴板自动清空与 SQLite/MySQL/PG 同步 | ![Vue](https://img.shields.io/badge/Vue-3-42b883?style=flat-square) ![TS](https://img.shields.io/badge/TypeScript-3178c6?style=flat-square) ![Rust](https://img.shields.io/badge/funsecret-Rust_CLI-dea584?style=flat-square) |
| [utools-plugins](https://github.com/farfarfun-utools/utools-plugins) | **插件总索引** — 汇总本组织全部插件的导航表与安装方式，可由此入口选择插件 | — |

各插件提供对应的 AI/MCP 工具；工具清单、调用行为和数据边界见各插件 README。第三方 Agent 需由用户开启 uTools MCP 服务。

---

## 🚀 安装

从各插件的 GitHub Release 下载 `.upxs` 导入 uTools。开发版先运行仓库根目录的 `sh build.sh`，再在开发者工具中载入 `utools/plugin.json`；构建方式和环境要求以各仓库说明为准。

## 🔐 关于隐私

- `utools-funqr` 的二维码生成与识别完全在本机完成，不上传图片或文本、不保存内容历史，仅保存主题偏好

- `utools-funcalendar` 的历法、节气和宜忌查询完全离线，运行时不请求外部资源；仅在本机保存主题偏好，黄历宜忌仅作民俗参考
- `utools-funotp` 在本机计算验证码。开启 uTools 数据同步后，明文密钥可随账号同步；手动执行 WebDAV 备份也会将明文备份上传到配置的服务器
- `utools-funlink` 将书签保存在 uTools 数据库中，开启 uTools 数据同步后可随账号同步。抓取图标和检查链接会访问对应网站，手动 WebDAV 备份会将书签上传到配置的服务器
- `utools-funchat` 需自行配置大模型 API Key，对话请求由本机直接发往所指定的服务商
- `utools-funvideo` 与 `utools-funimage` 在本机处理文件，不上传视频或图片，也不保存文件历史
- `utools-funjson` 默认完全离线在本地解析、编辑、嵌套表格浏览、对比与生成多语言类型；多标签页与历史快照保存在本机，仅在手动触发外部 AI 修复时向所配置服务商发送请求
- `utools-fundata` 的格式互转、编解码、JWT 验签签发、Protobuf/SQL 格式化、哈希/UUID、正则、Cron 与单位换算完全在本机离线完成，不联网也不上传数据
- `utools-funcolor` 的屏幕取色、图片主色板提取、色值转换、色阶配色、渐变与对比度/色盲模拟完全在本机离线完成，不联网也不上传图片；仅在本机保存收藏夹、取色历史与主题偏好
- `utools-funmeme` 的梗图加字、文字表情生成、内置模板与 Emoji/颜文字库完全在本机离线完成；仅在用户手动触发「联网拉取」时访问所选公开接口（Imgflip/GIPHY/Tenor/自定义 HTTPS 接口），可选 API Key 仅存本机
- `utools-funtime` 的倒计时、番茄钟、秒表、桌面悬浮小窗、世界时钟与时间推算完全在本机离线完成，不联网也不上传数据
- `utools-funsecret` 所有密钥仅保存在本机 `funsecret` 数据库（默认 `~/.secret/.funsecret.db`，权限 `0600`），绝不写入 uTools 云同步数据库；仅在用户手动触发外部数据库 `save`/`load` 时连接指定目标库

## 🗂️ 其他 farfarfun 组织

farfarfun 的新项目默认在主组织孵化，当某一方向的仓库数量与功能完整度达到一定规模后，即毕业并独立为子组织；规划阶段已确定为独立产品线的，则直接建立子组织。

| 组织 | 产物 |
|------|------|
| [farfarfun](https://github.com/farfarfun) | 通用 Python 工具链，含 `far*` 基础库与 `fun*` 领域库 |
| [farfarfun-drive](https://github.com/farfarfun-drive) | 网盘与云存储，含统一接口框架与各网盘驱动 |
| [farfarfun-skill](https://github.com/farfarfun-skill) | 自研 AI Agent Skill，覆盖项目治理、服务规范与开发规范 |
| [farfarfun-skills](https://github.com/farfarfun-skills) | Skill 聚合镜像，每小时与上游同步并镜像至 Gitee |

## 📞 联系

- 📧 **Email**: farfarfun@qq.com
- 🐙 **GitHub**: [@farfarfun](https://github.com/farfarfun)

---

<div align="center">

**🎯 让 uTools 更顺手 🎯**

</div>
