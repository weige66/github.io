---
title: vue自动注册路由
createTime: 2024/12/28 23:56:15
permalink: /notes/vue/note/vue自动注册路由/
---
```js

// 自动注册路由
const createRoutesFromFiles = () => {
  // 使用 require.context 导入所有的路由配置文件
  const files = require.context('../_docs', true, /\.vue$/)
  const routes = []
  files.keys().forEach((filePath) => {
    let path = '/' + filePath.replace(/^\.\//, '').replace(/\.vue$/, '')
    const component = files(filePath).default

    routes.push({
      path,
      component
    })
  })
  return routes
}
```
### 使用
```js
const router = new Router({
  mode: 'history',
  base: '/',
  routes: [
    ...createRoutesFromFiles()
  ]
})
export default router
```