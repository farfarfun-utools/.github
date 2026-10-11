## 🧩 farfarfun-utools

[farfarfun](https://github.com/farfarfun) 的 **uTools 插件**产品线。每个插件都遵循同一套取向：

- **本地优先** — 数据存在 uTools 的 `dbStorage` 里，不需要账号、不需要自建服务端
- **主搜索框集成** — 在 uTools 主输入框里直接搜索、回车就出结果，不必先进插件界面
- **Vue 3 + Vite** — 统一技术栈，Composition API 组织界面与业务状态

---

## 📦 插件总览

| 插件 | 用途 | 技术栈 |
|------|------|--------|
| [utools-funchat](https://github.com/farfarfun-utools/utools-funchat) | **AI 聊天** — 多角色 AI 好友、内置角色市场、话题回溯、一键导出 | ![Vue](https://img.shields.io/badge/Vue-3-42b883?style=flat-square) ![TS](https://img.shields.io/badge/TypeScript-3178c6?style=flat-square) |
| [utools-funlink](https://github.com/farfarfun-utools/utools-funlink) | **网址收藏与导航** — 二级分类与拖拽排序、收集箱、废纸篓、站内搜索占位符、指定浏览器打开 | ![Vue](https://img.shields.io/badge/Vue-3-42b883?style=flat-square) |
| [utools-funotp](https://github.com/farfarfun-utools/utools-funotp) | **两步验证码** — 本地离线生成 TOTP / HOTP，兼容 Google Authenticator，支持扫码导入与 WebDav 备份 | ![Vue](https://img.shields.io/badge/Vue-3-42b883?style=flat-square) ![TS](https://img.shields.io/badge/TypeScript-3178c6?style=flat-square) |
| [utools-plugins](https://github.com/farfarfun-utools/utools-plugins) | **插件总索引** — 本组织所有插件的导航表与安装方式，先在这里挑插件 | — |

---

## 🚀 安装

三个插件走同一套本地构建流程，用 uTools 的开发者模式载入：

```bash
git clone https://github.com/farfarfun-utools/utools-funotp.git
cd utools-funotp
pnpm install
sh build.sh          # 跑测试与校验，产物输出到 utools/
```

然后在 uTools 里打开「插件应用市场 → 开发者工具 → 新建项目」，载入 `utools/plugin.json`。
`build.sh` 任一步（测试、类型检查、ESLint、`plugin.json` 与 `preload.js` 校验）失败就会停下，
不会产出半成品。需要 Node.js ≥ 20 与 pnpm（`corepack enable` 即可，版本跟着
`package.json#packageManager` 走）。具体配置项以各插件自己的 README 为准。

## 🔐 关于隐私

- `utools-funotp` 的验证码完全由本机按 RFC 4226 / RFC 6238 计算，插件自身不访问任何第三方服务（WebDav 备份除外，需你手动配置）
- `utools-funlink` 的书签数据只存在 uTools `dbStorage`，不上传
- `utools-funchat` 需要你自己配置大模型 API Key，对话直接从本机发往你指定的服务商

## 🗂️ 其他 farfarfun 组织

| 组织 | 产物 |
|------|------|
| [farfarfun](https://github.com/farfarfun) | 通用 Python 工具链：`far*` 基础库 + `fun*` 领域库 |
| [farfarfun-fundrive](https://github.com/farfarfun-fundrive) | 网盘 / 云存储：统一接口框架 + 各网盘驱动 |
| [farfarfun-skill](https://github.com/farfarfun-skill) | 自研 AI Agent Skill（项目治理、服务规范、开发规范） |
| [farfarfun-skills](https://github.com/farfarfun-skills) | Skill 聚合镜像，每小时跟上游同步并镜像到 Gitee |

## 📞 联系

- 📧 **Email**: farfarfun@qq.com
- 🐙 **GitHub**: [@farfarfun](https://github.com/farfarfun)

---

<div align="center">

**🎯 让 uTools 更顺手 🎯**

</div>
