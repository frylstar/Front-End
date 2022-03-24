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