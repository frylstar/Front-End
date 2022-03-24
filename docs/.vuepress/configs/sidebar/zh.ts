import type { SidebarConfig } from '@vuepress/theme-default'

export const zh: SidebarConfig = {
  '/carrot/': [
    '/carrot/README.md'
  ],
  '/css/': [
    '/css/README.md',
  ],
  '/javascript/': [
    '/javascript/README.md',
    '/javascript/utils.md',
    '/javascript/FAQ.md',
  ],
  '/interview/': [
    {
      text: 'haha',
      link: '/interview/README.md'
    },
    {
      text: '基础',
      link: '/interview/1-基础.md'
    },
    {
      text: '进阶',
      link: '/interview/2-进阶.md'
    },
    {
      text: '精选',
      link: '/interview/3-精选.md'
    },
    {
      text: '高频',
      link: '/interview/4-高频.md'
    },
    {
      text: '指南',
      link: '/interview/5-指南.md'
    },
  ],
  '/topic/': [
    {
      text: '面试指南',
      link: '/topic/README.md',
      children: [
        '/topic/html.md',
        '/topic/css.md',
        '/topic/js.md',
        '/topic/react.md',
        '/topic/vue.md',
        '/topic/webpack.md',
        '/topic/performance.md',
        '/topic/network.md',
        '/topic/complex.md',
      ],
    },
  ],
  '/operations/': [
    '/operations/README.md',
    '/operations/issue.md',
  ],
  '/further/': [
    '/further/README.md',
    '/further/booklist.md',
    '/further/compatibility.md',
  ],
}