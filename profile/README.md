<img src="https://raw.githubusercontent.com/farfarfun/.github/master/brand/png/icon/utools-128.png" alt="farfarfun-utools" width="72">

## 🧩 farfarfun-utools

[farfarfun](https://github.com/farfarfun) 的 **uTools 插件**产品线，由主组织孵化成熟后独立为子组织。各插件遵循统一的设计原则：

- **本地优先** — 数据存储于 uTools 的 `dbStorage`，无需注册账号，也无需自建服务端
- **主搜索框集成** — 可在 uTools 主输入框中直接检索并回车获取结果，无需先打开插件界面
- **Vue 3 + Vite** — 统一技术栈，采用 Composition API 组织界面与业务状态

---

## 📦 插件总览

| 插件 | 用途 | 技术栈 |
|------|------|--------|
| <img src="https://raw.githubusercontent.com/farfarfun/.github/master/brand/png/icon/funchat-64.png" alt="" width="32"> [utools-funchat](https://github.com/farfarfun-utools/utools-funchat) | **AI 聊天** — 支持多角色 AI 对话、内置角色市场、话题回溯与一键导出 | ![Vue](https://img.shields.io/badge/Vue-3-42b883?style=flat-square) ![TS](https://img.shields.io/badge/TypeScript-3178c6?style=flat-square) |
| <img src="https://raw.githubusercontent.com/farfarfun/.github/master/brand/png/icon/fundoc-64.png" alt="" width="32"> [utools-fundoc](https://github.com/farfarfun-utools/utools-fundoc) | **Markdown 文档** — 本地管理文档，支持 LaTeX 公式、多级目录与跨设备同步 | ![Vue](https://img.shields.io/badge/Vue-3-42b883?style=flat-square) ![TS](https://img.shields.io/badge/TypeScript-3178c6?style=flat-square) |
| <img src="https://raw.githubusercontent.com/farfarfun/.github/master/brand/png/icon/funlink-64.png" alt="" width="32"> [utools-funlink](https://github.com/farfarfun-utools/utools-funlink) | **网址收藏与导航** — 支持二级分类与拖拽排序、收集箱、废纸篓、站内搜索占位符与指定浏览器打开 | ![Vue](https://img.shields.io/badge/Vue-3-42b883?style=flat-square) |
| <img src="https://raw.githubusercontent.com/farfarfun/.github/master/brand/png/icon/funotp-64.png" alt="" width="32"> [utools-funotp](https://github.com/farfarfun-utools/utools-funotp) | **两步验证码** — 本地离线生成 TOTP / HOTP，兼容 Google Authenticator，并支持扫码导入与 WebDav 备份 | ![Vue](https://img.shields.io/badge/Vue-3-42b883?style=flat-square) ![TS](https://img.shields.io/badge/TypeScript-3178c6?style=flat-square) |
| [utools-plugins](https://github.com/farfarfun-utools/utools-plugins) | **插件总索引** — 汇总本组织全部插件的导航表与安装方式，可由此入口选择插件 | — |

---

## 🚀 安装

四个插件采用同一套本地构建流程，通过 uTools 开发者模式载入：

```bash
git clone https://github.com/farfarfun-utools/utools-funotp.git
cd utools-funotp
pnpm install
sh build.sh          # 执行测试与校验，产物输出至 utools/
```

随后在 uTools 中进入「插件应用市场 → 开发者工具 → 新建项目」，载入 `utools/plugin.json`。
`build.sh` 中任一环节（测试、类型检查、ESLint、`plugin.json` 与 `preload.js` 校验）失败即中断，
不会产出不完整的构建物。环境要求为 Node.js ≥ 20 与 pnpm（执行 `corepack enable` 即可，
版本由 `package.json#packageManager` 指定）。具体配置项请参见各插件的 README。

## 🔐 关于隐私

- `utools-funotp` 的验证码完全在本机依据 RFC 4226 / RFC 6238 计算，插件自身不访问任何第三方服务（WebDav 备份除外，需手动配置）
- `utools-funlink` 的书签数据仅保存在 uTools `dbStorage` 中，不会上传
- `utools-funchat` 需自行配置大模型 API Key，对话请求由本机直接发往所指定的服务商

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
