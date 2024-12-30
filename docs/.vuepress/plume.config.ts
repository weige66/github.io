import { defineThemeConfig } from 'vuepress-theme-plume'
import { zhNavbar } from './navbar'
import {  zhNotes } from './notes'

/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({
  logo: '/images/logo.png',

  appearance: true,

  social: [
    { icon: 'github', link: 'https://github.com/weiGe66' },
    { icon: 'juejin', link: 'https://juejin.cn/user/1169536105056071' }
  ],
  navbarSocialInclude: ['github', 'juejin'],
  locales: {
    '/': {
      profile: {
        avatar: '/images/logo.png',
        name: "zhengWei's Blog",
        // description: 'weiGe的个人博客',
        circle: true,
        location: '武汉',
        // organization: '',
      },

      navbar: zhNavbar,
      notes: zhNotes,
    }
  },
})
