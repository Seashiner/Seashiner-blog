module.exports = {
  title:'SeaShiner',
  description: "vuepress",
  head: [
    ['link', { rel: 'icon', href: '/sun.png' }]
  ],
  locales: {
    '/': {
      lang: 'zh-CN', 
    },
  },
  plugins: ['@vuepress/blog'],
  themeConfig: {
    logo: '/sun.png',
    lastUpdated: '上次更新',
    repo: 'Seashiner/Seashiner-blog',
    editLinks: true,
    editLinkText: '编辑文档',
    docsDir: 'docs',
    nav: [
      { text: '华山论剑', link: '/dev/' },
      { text: '曲艺杂谈', link: '/lifeshare/' },
      { text: '诗和远方', link: '/literary/' },
    ],

    sidebar: 'auto',
  }
}