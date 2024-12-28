---
title: js递归遍历多维数组
createTime: 2024/12/28 23:59:14
permalink: /article/y91hy7a0/
tags:
    - js
---


```js

function forEachs(arr, callback, branch = 'children', arrp = {}) {
  if (typeof callback !== 'function') {
    return;
  }
  
  _forEachs(arr, callback, branch, arrp);
}

function _forEachs(arr, callback, branch, arrp) {
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    callback(item, i, arr, arrp);
    
    if (item[branch] && Array.isArray(item[branch])) {
      _forEachs(item[branch], callback, branch, item);
    }
  }
}
```