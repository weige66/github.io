---
title: 原生js实现一个装饰器
createTime: 2024/12/29 00:00:36
permalink: /article/5lfheece/
tags:
    - js
---

```js
// 装饰器函数
function decorator(func) {
  return function() {
    console.log('执行被装饰的函数之前');
    func.apply(this, arguments);
    console.log('执行被装饰的函数之后');
  }
}

// 需要被装饰的函数
function original() {
  console.log('这个函数被执行了');
}

// 使用装饰器装饰函数
var decorated = decorator(original);

// 执行装饰后的函数
decorated(); // 会在控制台输出："执行被装饰的函数之前"、"这个函数被执行了"、"执行被装饰的函数之后"

```