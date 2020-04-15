
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
  plugins: [
    '@vuepress/blog',
    [
      '@vuepress/register-components',
      {
        componentsDir: './components'
      }
    ],
    [
      '@vuepress-reco/vuepress-plugin-bgm-player',
      { 
        audios : [
          {
            name: '与我无关',
            artist: '阿冗',
            url: 'http://m8.music.126.net/20200415232526/e4d6d7e128a0c3c6350d0e3a66762c65/ymusic/025b/525d/040c/51958d1f13e76f9787173fe94bdca8fc.mp3',
            cover: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586973862348&di=d5ba04917f61162daecc2f292d67ee8b&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn%2Fw640h640%2F20180121%2Fc1d2-fyqtwzv4326360.jpg'
          }
        ],
        autoShrink : true,
      }
    ]
  ],
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