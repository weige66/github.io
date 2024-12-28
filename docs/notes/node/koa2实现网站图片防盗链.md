---
title: koa2实现网站图片防盗链
createTime: 2024/12/28 23:40:07
permalink: /notes/node/koa2实现网站图片防盗链/
---

```js
// 图片防盗链处理的中间件
const url = require('url');
const path = require('path');

module.exports = () => {
  return async (ctx, next) => {
    const extArr = ['.jpg', '.jpeg', '.png', '.gif'];
    const imgURl = path.extname(ctx.request.url);
    if (!extArr.includes(imgURl)) {
      await next();
    } else {
      const originHost = ctx.request.header.host
      let refererHost = ctx.request.header.referer
      if (refererHost) {
        refererHost = url.parse(refererHost).host;
      }
      // 别人在盗用你的图片
      if (refererHost && refererHost !== originHost) {
        ctx.redirect('/404.jpg')
      } else {
        await next();
      }
    }

  }

}

```