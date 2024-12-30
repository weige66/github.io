import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

/* =================== locale: zh-CN ======================= */

export const zhNotes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [
    {
      dir: 'vue',
      link: '/vue',
      sidebar: 'auto'
    },
    {
      dir: 'js',
      link: '/js',
      sidebar: 'auto'
    },
    {
      dir: 'node',
      link: '/node',
      sidebar: 'auto'
    }
  ],
})

/* =================== locale: en-US ======================= */

// const enDemoNote = defineNoteConfig({
//   dir: 'demo',
//   link: '/demo',
//   sidebar: ['', 'foo', 'bar'],
// })

// export const enNotes = defineNotesConfig({
//   dir: 'en/notes',
//   link: '/en/',
//   notes: [enDemoNote],
// })

