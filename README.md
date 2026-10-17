# .github

farfarfun-utools 组织的 Community Health Files 仓库：承载组织主页，以及各插件仓库共用的
可复用工作流。不含插件代码。

## 组织主页

[`profile/README.md`](profile/README.md) 会自动渲染到
[组织主页](https://github.com/farfarfun-utools)。要改主页展示的内容，直接编辑该文件并提交。

新增插件时需要同步两处：本仓库 `profile/README.md` 的「插件总览」表，以及
[`utools-plugins`](https://github.com/farfarfun-utools/utools-plugins) 的索引表。
两处都是手工维护的，不会自动跟随仓库变化。

## 可复用工作流

### `screenshots.yml`

重跑插件仓库的 `scripts/screenshots.mjs` 刷新 `docs/screenshots/`，**图真的变了才提交回分支**。
插件仓库这样调用：

```yaml
name: Screenshots

on:
  push:
    tags: ['v*']
  workflow_dispatch:

# 必须在这里给：被调用的工作流只能缩小、不能放大调用方给的权限。
permissions:
  contents: write

concurrency:
  group: screenshots
  cancel-in-progress: false

jobs:
  screenshots:
    uses: farfarfun-utools/.github/.github/workflows/screenshots.yml@master
```

入参都有默认值，一般不用传：

| 入参 | 默认 | 说明 |
| --- | --- | --- |
| `node-version` | `22` | 跑工具链的 Node。插件本身跑在 uTools 内置的 Chromium 里，与此无关。 |
| `pnpm-version` | 空 | 留空表示按 `package.json#packageManager` 取。**没有 `packageManager` 字段的仓库必须显式传**（`utools-funlink` 就是这种）。 |
| `branch` | `master` | 把截图提交回哪个分支。 |

前提：插件仓库里要有 `pnpm screenshots` 这个脚本，产物落在 `docs/screenshots/`，
并且**产出必须是可重复的** —— 否则界面没动也会天天多一条「只有像素变了」的提交。
现有实现的做法是把 `Date.now()` 冻在固定时刻、关掉 CSS 过渡、把倒计时这类随时间
变的动画单独钉到固定进度。

## 关于 farfarfun-utools

[farfarfun](https://github.com/farfarfun) 的 uTools 插件产品线：本地优先、集成 uTools
主搜索框、统一 Vue 3 + Vite 技术栈。

- 🏠 组织主页：<https://github.com/farfarfun-utools>
- 📧 联系：farfarfun@qq.com
