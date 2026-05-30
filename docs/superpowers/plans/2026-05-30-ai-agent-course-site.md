# AI Agent 新时代 Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 在当前工作区搭建一个可运行的 VitePress 教学站点，并用 Stitch MCP 辅助首页入口设计。

**Architecture:** 使用 VitePress 文档站作为主体，首页通过自定义主题样式增强为课程门户页。课程正文保持 VitePress 默认阅读体验，首页结构参考通过 Stitch MCP 生成后转译为 Markdown 和 CSS。

**Tech Stack:** VitePress, npm, Markdown, CSS, Stitch MCP

---

## Chunk 1: Project Scaffold

### Task 1: 初始化 npm 与 VitePress

**Files:**
- Create: `package.json`
- Create: `package-lock.json`

- [ ] Step 1: 初始化 npm 项目
- [ ] Step 2: 安装 `vitepress` 开发依赖
- [ ] Step 3: 添加 `docs:dev` 与 `docs:build` 脚本
- [ ] Step 4: 运行 `npm run docs:build`，此时预期因文档未齐备而失败或提示缺页

### Task 2: 创建站点基础文件

**Files:**
- Create: `docs/.vitepress/config.mts`
- Create: `docs/index.md`
- Create: `docs/guide.md`
- Create: `docs/chapter-1.md`
- Create: `docs/chapter-2.md`
- Create: `docs/chapter-3.md`
- Create: `docs/chapter-4.md`
- Create: `docs/chapter-5.md`

- [ ] Step 1: 写入站点标题、导航和侧边栏配置
- [ ] Step 2: 写入课程说明页
- [ ] Step 3: 写入 5 个章节模板页
- [ ] Step 4: 运行 `npm run docs:build` 验证基础站点可构建

## Chunk 2: Stitch-Assisted Homepage

### Task 3: 生成首页结构参考

**Files:**
- Modify: `docs/index.md`
- Create: `docs/.vitepress/theme/custom.css`

- [ ] Step 1: 使用 Stitch MCP 创建设计项目
- [ ] Step 2: 使用 `generate_screen_from_text` 生成课程首页参考
- [ ] Step 3: 将结构要点转成 VitePress 首页内容与样式
- [ ] Step 4: 运行 `npm run docs:build` 再次验证

## Chunk 3: Final Verification

### Task 4: 端到端验证

**Files:**
- Modify: `README` if needed (not required for this task)

- [ ] Step 1: 运行 `npm run docs:build`
- [ ] Step 2: 如有必要运行 `npm run docs:dev -- --host 0.0.0.0`
- [ ] Step 3: 记录可用启动命令与当前已完成内容