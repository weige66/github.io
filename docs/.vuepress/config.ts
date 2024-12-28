import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'


export default defineUserConfig({
  base: '/',
  lang: 'zh-CN',
  locales: {
    '/': {
      title: "",
      lang: 'zh-CN',
      description: "zhengWei's Blog",
    },
    // '/en/': {
    //   title: 'weiGeBlog',
    //   lang: 'en-US',
    //   description: 'weiGe的个人博客',
    // },
  },

  bundler: viteBundler(),



  theme: plumeTheme({
    // 添加您的部署域名
    // hostname: 'https://your_site_url',
    // your git repo url
    cache: false,
    docsRepo: '',

    docsDir: 'docs',
    blog: {
      include: ['blog/**/*.md'],
      exclude: ['.vuepress/', '**/README.md'],
      pagination: 10,
    },

    plugins: {
      git: true,
      /**
       * Shiki 代码高亮
       * @see https://theme-plume.vuejs.press/config/plugins/code-highlight/
       */
      shiki: {
          //  强烈建议预设代码块高亮语言，插件默认加载所有语言会产生不必要的时间开销
        languages: ['shell', 'bash', 'typescript', 'javascript'],
      },
      // // watermark: true,
      // watermark: {
      //   // enabled: false,  // boolean 类型控制是否全局启用
      //   enabled: page => true, // function 类型 过滤哪些页面启用水印
      //   delay: 500, // 添加水印的延时。以毫秒为单位。
      //   /**
      //    * 是否全屏水印，默认为 `true`，
      //    * 设置为 `false` 时，水印仅在 内容区域中显示。
      //    */
      //   fullPage: true,

      //   /** @see https://zhensherlock.github.io/watermark-js-plus/zh/config/ */
      //   watermarkOptions: {
      //     content: 'weiGe66',
      //     // ...
      //   }
      // },
      /**
       * 阅读时间
       * @see https://theme-plume.vuejs.press/config/plugins/reading-time/
       */
      readingTime: {
        wordPerMinute: 300
      },

      /**
       * markdown enhance
       * @see https://theme-plume.vuejs.press/config/plugins/markdown-enhance/
       */
      markdownEnhance: {
        demo: true,
        // include: true,
        
        // chart: true,
        // echarts: true,
        // mermaid: true,
        // flowchart: true,
      },

      /**
       *  markdown power
       * @see https://theme-plume.vuejs.press/config/plugin/markdown-power/
       */
      // markdownPower: {
      //   pdf: true,
      //   caniuse: true,
      //   plot: true,
      //   bilibili: true,
      //   youtube: true,
      //   icons: true,
      //   codepen: true,
      //   replit: true,
      //   codeSandbox: true,
      //   jsfiddle: true,
      //   repl: {
      //     go: true,
      //     rust: true,
      //     kotlin: true,
      //   },
      // },

      /**
       * 评论 comments
       * @see https://theme-plume.vuejs.press/guide/features/comments/
       */
      // comment: {
      //   provider: 'Giscus', // "Artalk" | "Giscus" | "Twikoo" | "Waline"
      //   comment: true,
      //   repo: '',
      //   repoId: '',
      //   category: '',
      //   categoryId: '',
      //   mapping: 'pathname',
      //   reactionsEnabled: true,
      //   inputPosition: 'top',
      // },
      // search: {

      // }
    },
  }),
})
