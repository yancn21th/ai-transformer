# AI Agent 新时代 Design

## Goal

在当前工作区创建一个用于教学的 VitePress 课程站，面向 5 章以内的课程讲义场景。

## Scope

- 使用 VitePress 作为站点框架
- 首页为课程入口页，而不是普通文档首页
- 正文采用标准文档阅读布局
- 初始包含课程说明页和 5 个章节页
- 第二部分首页视觉和入口结构由 Stitch MCP 辅助生成或提供参考

## Information Architecture

- `docs/index.md`: 课程首页
- `docs/guide.md`: 课程说明
- `docs/chapter-1.md` 到 `docs/chapter-5.md`: 章节内容
- `docs/.vitepress/config.mts`: VitePress 配置
- `docs/.vitepress/theme/custom.css`: 首页与品牌样式

## UX Decisions

- 首页突出站点名称“AI Agent 新时代”与课程定位
- 首页包含课程说明入口、开始学习入口和章节总览
- 正文页面显示顶部导航与左侧章节侧边栏
- 章节页面统一采用“学习目标 / 核心内容 / 实践 / 小结”模板

## Technical Decisions

- 使用 `vitepress` 最新稳定版作为开发依赖
- 使用 `npm` 作为包管理器
- 使用自定义 CSS 扩展默认主题，不引入额外 UI 框架
- Stitch MCP 用于生成首页结构参考，不作为运行时依赖

## Validation

- `npm run docs:build` 成功
- `npm run docs:dev -- --host 0.0.0.0` 可启动本地站点