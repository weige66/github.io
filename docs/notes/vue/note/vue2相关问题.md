---
title: vue2相关问题
createTime: 2024/12/28 23:48:55
permalink: /vue/vue2相关问题/
---

## vue事件总线
任意两个组件之间传值常用的事件总线

```js
// Bus:事件派发，监听和回调处理
class Bus {
    constructor() {
        this.callbacks = {}
    }
    $on(name,fn) {
        this.callbacks[name] = this.callbacks[name] || []
        this.callbacks[name].push(fn)
    }
    $emit(name,args) {
        if(this.callbacks[name]) {
            this.callbacks[name].forEach(cb => cb(args))
        }
    }
    $destroy(name) {
      if (this.callbacks[name]) {
        delete this.callbacks[name]
      }
    }
}

// main.js
Vue.prototype.$bus = new Bus()

```

## vue打包内存溢出
```shell
node --max_old_space_size=4096 node_modules/@vue/cli-service/bin/vue-cli-service.js build

```


## vue在使用xlsx库的时候报错
解决方法：
在vue.config.js或者webpack.config.js中配置

```js
 chainWebpack: (config) => {
   config.externals({ './cptable': 'var cptable' })
  },
```


配置好后重启一下项目即可。
