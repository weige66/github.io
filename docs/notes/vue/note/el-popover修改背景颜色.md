---
title: el-popover修改背景颜色
createTime: 2024/12/28 23:30:01
permalink: /notes/vue/el-popover修改背景颜色/
---

```css
.el-popover.title-pop{
  background-color: #303133;
  min-width: auto;
  color: $--color-white;
  padding: 6px;
}

.title-pop[x-placement^=left] .popper__arrow::after {
  border-left-color: #303133;
}

.title-pop[x-placement^=right] .popper__arrow::after {
  border-right-color: #303133;
}

.title-pop[x-placement^=bottom] .popper__arrow::after {
  border-bottom-color: #303133;
}

.title-pop[x-placement^=top] .popper__arrow::after {
  border-top-color: #303133;
}

```