---
title: npm
createTime: 2024/12/28 23:00:37
permalink: /article/gkpntq56/
# sticky: true # 置顶
# draft: true # 草稿
tags:
    - npm
---

# 一、切换下载源的几种方法
## npm 下载源查看

```shell
npm config list

```


### 方法一、切换为淘宝源

```shell

npm set registry https://registry.npm.taobao.org/

```

### 方法二、使用nrm管理npm源


全局安装nrm
```shell
npm install nrm -g

```

nrm切换淘宝镜像
```shell
nrm use taobao
```

使用nrm添加镜像地址 r_name 为镜像名字，r_url 为镜像地址
```shell
nrm add r_name r_url
```

删除nrm镜像和测试镜像

```shell

nrm del r_name

nrm test r_name
```

临时切换源

```shell
npm --registry https://registry.npmjs.org/ install 

```

# 二、npm发布相关指令

升级一个小版本

```shell
npm version patch  
```

在小版本后追加一个版本

```shell
npm version prerelease 
```

发布某个tag

```shell
npm publish --tag <xxx@1.0.0> 
```

将某个tag发布为正式版

```shell
npm dist-tag add xxx@1.0.0 latest 
```

废弃某个版本

```shell
npm deprecate xxx@1.0.0 '废弃'
```

# 三、package.json中个版本前缀之间的区别

### ~ 开头,只变更版本号第三位(0.0.X)

> 如项目使用的依赖是1.0.0,npm库中更新了1.0.1,1.2.0,
这时npm update升级的时候只会升到1.0.1版本,不会升到1.2.0
### ^开头,变更版本号第二位和第三位(0.X.X)
> 如项目使用的依赖是1.0.0,npm库中更新了1.0.1,1.2.0,2.0.0
这时npm update升级的时候只会升到1.201版本,不会升到2.0.0


### 精确的版本号：没有符号，表示固定当前版本

### latest 表示安装最新版
