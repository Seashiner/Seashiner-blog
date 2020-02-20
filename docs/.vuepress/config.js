module.exports = {
  title:'SeaShiner',
  head: [
    ['link', { rel: 'icon', href: '/sun.png' }]
  ],
  locales: {
    '/': {
      lang: 'zh-CN', 
    },
  },
  base:'/Seashiner-blog/',
  themeConfig: {
    lastUpdated: '上次更新',
    repo: 'Seashiner/Seashiner-blog',
    editLinks: true,
    editLinkText: '编辑文档',
    docsDir: 'docs',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      {
        text: 'Languages',
        ariaLabel: 'Language Menu',
        items: [
          { text: 'Chinese', link: '/language/chinese/' },
          { text: 'Japanese', link: '/language/japanese/' },
          { text: 'others', items: [
            { text: 'English', link: '/language/english/' },
            { text: 'French', link: '/language/french/' },
          ] },
        ]
      },
      { text: 'github', link: 'https://github.com/Seashiner/Seashiner-blog' },
    ],

    sidebar: [
      '/',
      '/guide/',
      '/language/chinese', 
      '/language/japanese', 
      '/language/english', 
      '/language/french', 
    ],
  }
}