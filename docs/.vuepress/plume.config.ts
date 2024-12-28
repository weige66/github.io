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

  locales: {
    '/': {
      profile: {
        avatar: '/images/logo.png',
        name: "zhengWei's Blog",
        // description: 'weiGe的个人博客',
        circle: true,
        // location: '',
        // organization: '',
      },

      navbar: zhNavbar,
      notes: zhNotes,
    },
    // '/en/': {
    //   profile: {
    //     avatar: 'https://avatars.githubusercontent.com/u/60763435?v=4',
    //     name: 'weiGe Blog',
    //     description: 'weiGe的个人博客',
    //     circle: true,
    //     // location: '',
    //     // organization: '',
    //   },

    //   navbar: enNavbar,
    //   notes: enNotes,
    // },
  },
})
