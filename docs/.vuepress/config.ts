import { defineUserConfig } from 'vuepress'
import { path } from '@vuepress/utils'
import type { DefaultThemeOptions } from 'vuepress'

import { navbar, sidebar } from './configs'

export default defineUserConfig<DefaultThemeOptions>({
  // 站点配置
  base: '/Front-End/',

  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'Azzzzzz的浩瀚宇宙🥕',
      description: 'Azzzzzz的浩瀚宇宙🥕'
    }
  },
  
  // 主题和它的配置
  theme: '@vuepress/theme-default',
  themeConfig: {
    repo: 'https://github.com/frylstar/front-end',
    logo: null,
    editLinkText: '在 GitHub 上编辑此页',
    lastUpdatedText: '上次更新',
    navbar: navbar.zh,
    displayAllHeaders: true,
    sidebar: sidebar.zh,
    // docsDir: 'docs',
  },
})