export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"zh-CN\",\"title\":\"\",\"description\":\"\",\"head\":[],\"locales\":{\"/\":{\"title\":\"weiGeBlog\",\"lang\":\"zh-CN\",\"description\":\"weiGe的个人博客\"},\"/en/\":{\"title\":\"weiGeBlog\",\"lang\":\"en-US\",\"description\":\"weiGe的个人博客\"}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
