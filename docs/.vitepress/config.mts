import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

export default withMermaid(defineConfig({
  lang: 'zh-CN',
  title: 'AI Agent 新时代',
  description: '面向教学场景的 AI Agent 课程讲义站点',
  appearance: 'dark',
  mermaid: {},
  themeConfig: {
    nav: [
      { text: '课程说明', link: '/guide' },
      { text: '开始学习', link: '/chapter-1' }
    ],
    sidebar: [
      {
        text: '课程内容',
        items: [
          { text: '课程说明', link: '/guide' },
          { text: '第 1 章 为什么是 AI Agent 新时代', link: '/chapter-1' },
          { text: '第 2 章 程序员分层与工程范式', link: '/chapter-2' },
          { text: '第 3 章 AI 时代的银弹', link: '/chapter-3' },
          { text: '第 4 章 RD 方法论与基础设施', link: '/chapter-4' },
          { text: '第 5 章 关键词、案例与延伸', link: '/chapter-5' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/' }
    ],
    outline: {
      level: [2, 3],
      label: '本页内容'
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    }
  }
}))