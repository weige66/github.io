import { defineThemeConfig } from 'vuepress-theme-plume'
import { enNavbar, zhNavbar } from './navbar'
import { enNotes, zhNotes } from './notes'

/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({
  logo: 'https://avatars.githubusercontent.com/u/60763435?v=4',

  appearance: true,

  social: [
    { icon: 'github', link: '/' },
  ],

  locales: {
    '/': {
      profile: {
        avatar: 'https://avatars.githubusercontent.com/u/60763435?v=4',
        name: 'weiGe Blog',
        description: 'weiGe的个人博客',
        circle: true,
        // location: '',
        // organization: '',
      },

      navbar: zhNavbar,
      notes: zhNotes,
    },
    '/en/': {
      profile: {
        avatar: 'https://avatars.githubusercontent.com/u/60763435?v=4',
        name: 'weiGe Blog',
        description: 'weiGe的个人博客',
        circle: true,
        // location: '',
        // organization: '',
      },

      navbar: enNavbar,
      notes: enNotes,
    },
  },
})
