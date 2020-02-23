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
  themeConfig: {
    logo: '/sun.png',
    lastUpdated: '上次更新',
    repo: 'Seashiner/Seashiner-blog',
    editLinks: true,
    editLinkText: '编辑文档',
    docsDir: 'docs',
    nav: [
      { text: '首页', link: '/' },
      {
        text: '华山论剑',
        ariaLabel: '华山论剑',
        items: [
          { text: 'Html/CSS', link: '/html/' },
          { text: 'JS', link: '/JS/' },
          { text: 'VUE', link: '/VUE/' },
        ]
      },
      { text: '说学逗唱', link: '/lifeshare/' },
    ],

    sidebar: 'auto',
  }
}