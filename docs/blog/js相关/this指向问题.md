---
title: this指向问题
createTime: 2024/12/28 23:15:07
permalink: /article/ahaydptj/
tags:
    - js
---


* 在函数体中，非显式或隐式地简单调用函数时，在严格模式下，函数内的`this`会被绑定到undefined上，非严格模式下则会被绑定到全局对象window/global上。
```js
    "use strict"
    function fn() {
      console.log(this);
    }
    console.log(this); // Window
    fn() // undefined
```
* 一般使用new方法调用的构造函数时，构造函数内的this会被绑定到新创建的对象上。
```js
function Fn() {
    this.value = '小明'
}
let cll = new Fn()
console.log(cll.value); // 小明

```
* 一般通过call/apply/bind方法显式调用时函数体内的this会被绑定到指定参数的对象上。
```js
let obj = {
    value: '大明',
    fn: function () {
        console.log(this.value);
    }
}
let der = { value: '大明' }
obj.fn.call(der) // 大明
obj.fn.apply(der) // 大明
obj.fn.bind(der)() // 大明
```
* 上下文调用函数时，函数体内部的this会被绑定到该对象上。
```js
let obj = {
    value: '大明',
    fn: function () {
        return this
    }
}
console.log(obj.fn()); // {value: '大明', fn: ƒ}
```
* 箭头函数中，this的指向是由外层作用域来决定的