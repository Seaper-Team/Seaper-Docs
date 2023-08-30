import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Seaper",
  titleTemplate: ':title - Seaper 文档',
  description: "Seaper User Documents & APIDoc",
  head: [['link', { rel: 'icon', href: 'public/favicon.ico' }]],
  lang: 'zh-CN',
  lastUpdated: true,
  cleanUrls: true,
  themeConfig: {
    siteTitle: 'Seaper 文档',
    logo: '/public/icon.png',
    nav: [
      { text: '主页', link: '/' },
      { text: '帮助文档', link: '/userdoc/' },
      { text: 'API', link: '/apidoc/' },
      { text: 'Seaper 源代码', link: 'https://github.com/Seaper-Team' }
    ],
    sidebar: {
      '/userdoc/': [
        {
          text: '使用文档',
          items: [
            { text: '🛌 首页', link: '/userdoc/' }
          ]
        }
      ],
      '/apidoc/': [
        {
          text: '🤖 API 文档',
          items: [
            { text: '🛌 首页', link: '/apidoc/' },
            { 
              text: '🇨🇳 国际化', 
              items: [
                { text: '初始化国际化', link: '/apidoc/lang/init' }
              ]
            }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Seaper-Team/Seaper-Docs' }
    ],
    footer: {
      message: '以 Apache License 2.0 协议开源',
      copyright: '🌟 Powered By Xiaoyi311 🌟'
    }
  },
  markdown: {
    lineNumbers: true
  }
})
