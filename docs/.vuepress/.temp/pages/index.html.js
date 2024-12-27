import comp from "/Users/zhengwei/myCode/weigeBlog/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"config\":[{\"type\":\"profile\",\"name\":\"pengzhanbo\",\"description\":\"即使慢，驰而不息，纵会落后，纵会失败，但必须能够到达他所向的目标。\",\"avatar\":\"/images/logo.png\"}],\"watermark\":true,\"pageLayout\":\"home\"},\"headers\":[],\"readingTime\":{\"minutes\":0.13,\"words\":38},\"git\":{},\"filePathRelative\":\"README.md\",\"categoryList\":[],\"bulletin\":false}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
