<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)"
            srcset="https://raw.githubusercontent.com/farfarfun/.github/master/brand/png/lockup-on-dark/utools-160.png">
    <img src="https://raw.githubusercontent.com/farfarfun/.github/master/brand/png/lockup/utools-160.png"
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
| <img src="https://raw.githubusercontent.com/farfarfun/.github/master/brand/png/mark/funchat-64.png" alt="" width="40"> [utools-funchat](https://github.com/farfarfun-utools/utools-funchat) | **[言来语往](https://farfarfun.github.io/packages/utools-funchat/)** — 多角色 AI 对话、图片生成、角色市场、话题回溯与一键导出 | ![Vue](https://img.shields.io/badge/Vue-3-42b883?style=flat-square) ![TS](https://img.shields.io/badge/TypeScript-3178c6?style=flat-square) |
| <img src="https://raw.githubusercontent.com/farfarfun/.github/master/brand/png/mark/fundoc-64.png" alt="" width="40"> [utools-fundoc](https://github.com/farfarfun-utools/utools-fundoc) | **[落笔成章](https://farfarfun.github.io/packages/utools-fundoc/)** — Markdown 文档， 本地管理文档，支持 LaTeX 公式、多级目录与跨设备同步 | ![Vue](https://img.shields.io/badge/Vue-3-42b883?style=flat-square) ![TS](https://img.shields.io/badge/TypeScript-3178c6?style=flat-square) |
| <img src="https://raw.githubusercontent.com/farfarfun/.github/master/brand/png/mark/funlink-64.png" alt="" width="40"> [utools-funlink](https://github.com/farfarfun-utools/utools-funlink) | **[一链即达](https://farfarfun.github.io/packages/utools-funlink/)** — 网址收藏与导航， 支持二级分类与拖拽排序、收集箱、废纸篓、站内搜索占位符与指定浏览器打开 | ![Vue](https://img.shields.io/badge/Vue-3-42b883?style=flat-square) |
| <img src="https://raw.githubusercontent.com/farfarfun/.github/master/brand/png/mark/funotp-64.png" alt="" width="40"> [utools-funotp](https://github.com/farfarfun-utools/utools-funotp) | **[密钥随行](https://farfarfun.github.io/packages/utools-funotp/)** — 两步验证码， 本地离线生成 TOTP / HOTP，兼容 Google Authenticator，并支持扫码导入与 WebDav 备份 | ![Vue](https://img.shields.io/badge/Vue-3-42b883?style=flat-square) ![TS](https://img.shields.io/badge/TypeScript-3178c6?style=flat-square) |
| <img src="https://raw.githubusercontent.com/farfarfun/.github/master/brand/png/mark/funcalendar-64.png" alt="" width="40"> [utools-funcalendar](https://github.com/farfarfun-utools/utools-funcalendar) | **[时光常伴](https://farfarfun.github.io/packages/utools-funcalendar/)** — 离线阳历、农历、节气与每日黄历宜忌，支持按嫁娶、搬家、开市等事项择吉 | ![Vue](https://img.shields.io/badge/Vue-3-42b883?style=flat-square) ![TS](https://img.shields.io/badge/TypeScript-3178c6?style=flat-square) |
| <img src="https://raw.githubusercontent.com/farfarfun/.github/master/brand/png/mark/funqr-64.png" alt="" width="40"> [utools-funqr](https://github.com/farfarfun-utools/utools-funqr) | **[码上生花](https://farfarfun.github.io/packages/utools-funqr/)** — 离线二维码与文本互转，配色、渐变、码点与 Logo 美化，导出 PNG / SVG | ![Vue](https://img.shields.io/badge/Vue-3-42b883?style=flat-square) ![TS](https://img.shields.io/badge/TypeScript-3178c6?style=flat-square) |
| <img src="https://raw.githubusercontent.com/farfarfun/.github/master/brand/png/mark/funcalc-64.png" alt="" width="40"> [utools-funcalc](https://github.com/farfarfun-utools/utools-funcalc) | **[算有所得](https://farfarfun.github.io/packages/utools-funcalc/)** — 支持变量、矩阵、LaTeX 排版与持久化历史的离线计算笔记本 | Vue 3 + TypeScript + mathjs + KaTeX |
| <img src="https://raw.githubusercontent.com/farfarfun/.github/master/brand/png/mark/funvideo-64.png" alt="" width="40"> [utools-funvideo](https://github.com/farfarfun-utools/utools-funvideo) | **[视频工坊](https://farfarfun.github.io/packages/utools-funvideo/)** — 本地批量压缩、裁剪、转换、抽帧与音频处理 | Vite + 原生 JavaScript + uTools FFmpeg 扩展 |
| <img src="https://raw.githubusercontent.com/farfarfun/.github/master/brand/png/mark/funimage-64.png" alt="" width="40"> [utools-funimage](https://github.com/farfarfun-utools/utools-funimage) | **[图片工坊](https://farfarfun.github.io/packages/utools-funimage/)** — 本地批量压缩、编辑、预览及合并图片 | Vite + 原生 JavaScript + Canvas |
| [utools-plugins](https://github.com/farfarfun-utools/utools-plugins) | **插件总索引** — 汇总本组织全部插件的导航表与安装方式，可由此入口选择插件 | — |

各插件提供对应的 AI/MCP 工具；工具清单、调用行为和数据边界见各插件 README。第三方 Agent 需由用户开启 uTools MCP 服务。

---

## 🚀 安装

从各插件的 GitHub Release 下载 `.upxs` 导入 uTools。开发版先运行仓库根目录的 `sh build.sh`，再在开发者工具中载入 `utools/plugin.json`；构建方式和环境要求以各仓库说明为准。

## 🔐 关于隐私

- `utools-funqr` 的二维码生成与识别完全在本机完成，不上传图片或文本、不保存内容历史，仅保存主题偏好

- `utools-funcalendar` 的历法、节气和宜忌查询完全离线，运行时不请求外部资源；仅在本机保存主题偏好，黄历宜忌仅作民俗参考
- `utools-funotp` 的验证码完全在本机依据 RFC 4226 / RFC 6238 计算，插件自身不访问任何第三方服务（WebDav 备份除外，需手动配置）
- `utools-funlink` 的书签数据仅保存在 uTools `dbStorage` 中，不会上传
- `utools-funchat` 需自行配置大模型 API Key，对话请求由本机直接发往所指定的服务商
- `utools-funvideo` 与 `utools-funimage` 在本机处理文件，不上传视频或图片，也不保存文件历史

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
