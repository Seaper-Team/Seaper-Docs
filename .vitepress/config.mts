import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Seaper",
  titleTemplate: ':title - Seaper 文档',
  description: "Seaper User Documents & APIDoc",
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  lang: 'zh-CN',
  lastUpdated: true,
  cleanUrls: true,
  srcDir: './docs',
  themeConfig: {
    siteTitle: 'Seaper 文档',
    logo: '/icon.png',
    nav: [
      { text: '主页', link: '/' },
      { text: '帮助文档', link: '/userdoc/' },
      { text: 'API', link: '/apidoc/' },
      { text: 'Seaper 源代码', link: 'https://github.com/Seaper-Team' }
    ],
    sidebar: {
      '/userdoc/': [
        {
          text: '🙋‍♂️ 使用文档',
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
                { text: '初始化国际化', link: '/apidoc/lang/init' },
                { text: '获取前端语言', link: '/apidoc/lang/get' },
                { text: '获取语言列表', link: '/apidoc/lang/list' }
              ]
            },
            { 
              text: '📊 仪表盘', 
              items: [
                { text: '系统信息', link: '/apidoc/overview/status' }
              ]
            },
            { 
              text: '🙋‍♂️ 用户操作', 
              items: [
                { text: '获取登录用户信息', link: '/apidoc/user/info' },
                { text: '初始化用户系统', link: '/apidoc/user/init-post' },
                { text: '是否初始化用户系统', link: '/apidoc/user/init-get' },
                {
                  text: '🔒 身份验证',
                  items: [
                    { text: '用户登录', link: '/apidoc/user/auth/login' },
                    { text: '用户登出', link: '/apidoc/user/auth/logout' },
                  ]
                }
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
