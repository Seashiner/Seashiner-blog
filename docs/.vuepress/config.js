module.exports = {
  title:'SeaShiner',
  head: [
    ['link', { rel: 'icon', href: '/sun.png' }]
  ],
  base:'/Seashiner-blog/',
  locales: {
    '/': {
      lang: 'zh-CN', 
    },
  },
  themeConfig: {
    lastUpdated: '上次更新',
    repo: 'Seashiner/Seashiner-blog',
    editLinks: true,
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