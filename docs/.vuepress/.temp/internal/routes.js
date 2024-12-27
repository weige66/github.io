export const redirects = JSON.parse("{\"/preview/custom-component.example.html\":\"/article/ehrdvux0/\",\"/preview/markdown.html\":\"/article/hf3ygf2t/\",\"/en/preview/custom-component.example.html\":\"/en/article/qvf9iyhg/\",\"/en/preview/markdown.html\":\"/en/article/puuu16qs/\",\"/notes/vue/\":\"/demo/\",\"/notes/vue/bar.html\":\"/demo/ay9br3w1/\",\"/notes/vue/foo.html\":\"/demo/8jjkfgwo/\",\"/en/notes/demo/\":\"/en/demo/\",\"/en/notes/demo/bar.html\":\"/en/demo/qbtty8k0/\",\"/en/notes/demo/foo.html\":\"/en/demo/j2y4iyx4/\"}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/zhengwei/myCode/weigeBlog/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"首页"} }],
  ["/blog/", { loader: () => import(/* webpackChunkName: "blog_index.html" */"/Users/zhengwei/myCode/weigeBlog/docs/.vuepress/.temp/pages/blog/index.html.js"), meta: {"title":""} }],
  ["/en/", { loader: () => import(/* webpackChunkName: "en_index.html" */"/Users/zhengwei/myCode/weigeBlog/docs/.vuepress/.temp/pages/en/index.html.js"), meta: {"title":""} }],
  ["/article/ehrdvux0/", { loader: () => import(/* webpackChunkName: "article_ehrdvux0_index.html" */"/Users/zhengwei/myCode/weigeBlog/docs/.vuepress/.temp/pages/article/ehrdvux0/index.html.js"), meta: {"title":"自定义组件"} }],
  ["/article/hf3ygf2t/", { loader: () => import(/* webpackChunkName: "article_hf3ygf2t_index.html" */"/Users/zhengwei/myCode/weigeBlog/docs/.vuepress/.temp/pages/article/hf3ygf2t/index.html.js"), meta: {"title":"Markdown"} }],
  ["/en/article/qvf9iyhg/", { loader: () => import(/* webpackChunkName: "en_article_qvf9iyhg_index.html" */"/Users/zhengwei/myCode/weigeBlog/docs/.vuepress/.temp/pages/en/article/qvf9iyhg/index.html.js"), meta: {"title":"Custom Component"} }],
  ["/en/article/puuu16qs/", { loader: () => import(/* webpackChunkName: "en_article_puuu16qs_index.html" */"/Users/zhengwei/myCode/weigeBlog/docs/.vuepress/.temp/pages/en/article/puuu16qs/index.html.js"), meta: {"title":"Markdown"} }],
  ["/demo/", { loader: () => import(/* webpackChunkName: "demo_index.html" */"/Users/zhengwei/myCode/weigeBlog/docs/.vuepress/.temp/pages/demo/index.html.js"), meta: {"title":"vue相关笔记"} }],
  ["/demo/ay9br3w1/", { loader: () => import(/* webpackChunkName: "demo_ay9br3w1_index.html" */"/Users/zhengwei/myCode/weigeBlog/docs/.vuepress/.temp/pages/demo/ay9br3w1/index.html.js"), meta: {"title":"bar"} }],
  ["/demo/8jjkfgwo/", { loader: () => import(/* webpackChunkName: "demo_8jjkfgwo_index.html" */"/Users/zhengwei/myCode/weigeBlog/docs/.vuepress/.temp/pages/demo/8jjkfgwo/index.html.js"), meta: {"title":"foo"} }],
  ["/en/demo/", { loader: () => import(/* webpackChunkName: "en_demo_index.html" */"/Users/zhengwei/myCode/weigeBlog/docs/.vuepress/.temp/pages/en/demo/index.html.js"), meta: {"title":"Demo"} }],
  ["/en/demo/qbtty8k0/", { loader: () => import(/* webpackChunkName: "en_demo_qbtty8k0_index.html" */"/Users/zhengwei/myCode/weigeBlog/docs/.vuepress/.temp/pages/en/demo/qbtty8k0/index.html.js"), meta: {"title":"bar"} }],
  ["/en/demo/j2y4iyx4/", { loader: () => import(/* webpackChunkName: "en_demo_j2y4iyx4_index.html" */"/Users/zhengwei/myCode/weigeBlog/docs/.vuepress/.temp/pages/en/demo/j2y4iyx4/index.html.js"), meta: {"title":"foo"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/zhengwei/myCode/weigeBlog/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/en/blog/", { loader: () => import(/* webpackChunkName: "en_blog_index.html" */"/Users/zhengwei/myCode/weigeBlog/docs/.vuepress/.temp/pages/en/blog/index.html.js"), meta: {"title":"Blog"} }],
  ["/en/blog/tags/", { loader: () => import(/* webpackChunkName: "en_blog_tags_index.html" */"/Users/zhengwei/myCode/weigeBlog/docs/.vuepress/.temp/pages/en/blog/tags/index.html.js"), meta: {"title":"Tags"} }],
  ["/en/blog/archives/", { loader: () => import(/* webpackChunkName: "en_blog_archives_index.html" */"/Users/zhengwei/myCode/weigeBlog/docs/.vuepress/.temp/pages/en/blog/archives/index.html.js"), meta: {"title":"Archives"} }],
  ["/en/blog/categories/", { loader: () => import(/* webpackChunkName: "en_blog_categories_index.html" */"/Users/zhengwei/myCode/weigeBlog/docs/.vuepress/.temp/pages/en/blog/categories/index.html.js"), meta: {"title":"Categories"} }],
  ["/blog/", { loader: () => import(/* webpackChunkName: "blog_index.html" */"/Users/zhengwei/myCode/weigeBlog/docs/.vuepress/.temp/pages/blog/index.html.js"), meta: {"title":"博客"} }],
  ["/blog/tags/", { loader: () => import(/* webpackChunkName: "blog_tags_index.html" */"/Users/zhengwei/myCode/weigeBlog/docs/.vuepress/.temp/pages/blog/tags/index.html.js"), meta: {"title":"标签"} }],
  ["/blog/archives/", { loader: () => import(/* webpackChunkName: "blog_archives_index.html" */"/Users/zhengwei/myCode/weigeBlog/docs/.vuepress/.temp/pages/blog/archives/index.html.js"), meta: {"title":"归档"} }],
  ["/blog/categories/", { loader: () => import(/* webpackChunkName: "blog_categories_index.html" */"/Users/zhengwei/myCode/weigeBlog/docs/.vuepress/.temp/pages/blog/categories/index.html.js"), meta: {"title":"分类"} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
