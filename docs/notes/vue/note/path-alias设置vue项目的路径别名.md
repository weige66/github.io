---
title: path-alias设置vue项目的路径别名
createTime: 2024/12/28 23:53:29
permalink: /notes/vue/path-alias设置vue项目的路径别名/
---

## 1. 在vscode插件商店下载path-alias插件
在settings.json 系统配置文件中添加如下代码
```js
"pathAlias.aliasMap": {
    // 路径别名
    "@": "${cwd}/src"
  },
```
## 2.在vue项目的根目录添加jsconfig.json或tsconfig.json文件
在文件中配置如下代码
```js
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "@/*": ["src/*"],
      "_c/*": ["src/components/*"]
    }
  },
  "include": ["src/*"],
  "exclude": ["node_modules", "dist"]
}

```