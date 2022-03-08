import type { NavbarConfig } from '@vuepress/theme-default'

export const zh: NavbarConfig = [
  {
    text: '青·Carrot🥕',
    link: '/carrot/',
    children: [
      {
        text: '小蜜蜂 🐝',
        children: [
          {
            text: '后花园 🌸',
            link: '/carrot/'
          }
        ]
      },
    ]
  },
  {
    text: 'CSS',
    link: '/css/'
  },
  {
    text: 'JavaScript',
    link: '/javascript/'
  },
  {
    text: '完整目录',
    children: [
      {
        text: '开发语言',
        children: [
          {
            text: 'HTML',
            link: '/html/'
          },
          {
            text: 'CSS',
            link: '/css/'
          },
          {
            text: 'JavaScript',
            link: '/javascript/'
          }
        ]
      },
      {
        text: '版本控制',
        children: [
          {
            text: 'Git',
            link: '/git/'
          },
        ]
      },
      {
        text: '笔记',
        children: [
          {
            text: '待定',
            link: '/change/'
          },
        ]
      },
      {
        text: '扩展阅读',
        link: '/further/',
        children: []
      },
    ]
  },
  {
    text: '了解更多',
    children: [
      {
        text: 'Home',
        link: 'https://frylstar.github.io/'
      },
    ],
  },
];