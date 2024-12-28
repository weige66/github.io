---
title: sass快速实现媒体查询
createTime: 2024/12/28 23:58:26
permalink: /article/hlwe5rye/
tags:
    - css
    - sass
---

## 定义 mixin
```css
@mixin media-query($breakpoint) {
  @if $breakpoint == phone {
    @media (max-width: 767px) {
      @content;
    }
  } @else if $breakpoint == tablet {
    @media (min-width: 768px) and (max-width: 1023px) {
      @content;
    }
  } @else if $breakpoint == desktop {
    @media (min-width: 1024px) {
      @content;
    }
  }
}
```

## 使用 mixin

```css
.container {
  width: 100%;
  
  @include media-query(tablet) {
    width: 80%;
  }
  
  @include media-query(desktop) {
    width: 60%;
  }
}

```