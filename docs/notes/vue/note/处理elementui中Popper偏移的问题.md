---
title: 处理elementui 中Popper偏移的问题
createTime: 2024/12/28 23:27:09
permalink: /notes/vue/处理elementui 中Popper偏移的问题/
---


# 处理方法
```
import Popper from 'element-ui/lib/utils/popper.js'

import Vue from 'vue'
import FilterPanel from './tableheaderFilterpanel.vue'

function hasClass(el, cls) {
  if (!el || !cls) return false
  if (cls.indexOf(' ') !== -1) throw new Error('className should not contain space.')
  if (el.classList) {
    return el.classList.contains(cls)
  } else {
    return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1
  }
}

function setPropsDefault(component, props) {
  let c_props = component.props
  Object.keys(props).forEach((key) => {
    c_props[key] = Object.assign({}, c_props[key], props[key])
  })
}
function setMethodsDefault(component, methods) {
  let c_methods = component.methods
  Object.keys(methods).forEach((key) => {
    c_methods[key] = methods[key]
  })
}

function repairPopper() {
  if (!Popper.prototype.repairR) {
    Popper.prototype.repairR = true

    let __getBoundaries = Popper.prototype._getBoundaries
    Popper.prototype._getBoundaries = function (data, padding, boundariesElement) {
      const boundaries = __getBoundaries.call(this, data, padding, boundariesElement)

      if (this._options.boundariesElement === 'viewport') {
        const root = window
        const body = root.document.body
        const html = root.document.documentElement
        let width = Math.max(body.scrollWidth, body.offsetWidth, html.clientWidth, html.scrollWidth, html.offsetWidth)
        let height = Math.max(
          body.scrollHeight,
          body.offsetHeight,
          html.clientHeight,
          html.scrollHeight,
          html.offsetHeight
        )

        boundaries.right = boundaries.right - root.document.documentElement.clientWidth + width
        boundaries.bottom = boundaries.bottom - root.document.documentElement.clientHeight + height
      }
      return boundaries
    }
  }
}

export default function (ElementUI) {
  repairPopper()

  // setPropsDefault(ElementUI.Table, {
  //   tooltipEffect: {
  //     default: 'light'
  //   }
  // })

  setPropsDefault(ElementUI.TableColumn, {
    filterPlacement: {
      default: 'bottom'
    }
  })

  setPropsDefault(ElementUI.Dropdown, {
    placement: {
      default: 'bottom'
    }
  })

  setPropsDefault(ElementUI.Dialog, {
    appendToBody: {
      default: true
    }
  })
  // 设置表头最小宽度,保证表头不换行
  setMethodsDefault(ElementUI.TableColumn, {
    setColumnWidth(column) {
      if (this.realWidth) {
        column.width = this.realWidth
      }
      if (this.realMinWidth) {
        column.minWidth = this.realMinWidth
      }
      if (!column.minWidth) {
        if (!column.width) {
          let label = column.label || ''
          let labels = label.match(/./gu) || []
          let labelW = 0
          labels.forEach((s) => (labelW += ASCII_W[s] || 14))

          let sortable = column.sortable ? 24 : 0
          let filters = column.filters ? 16 : 0
          column.minWidth = Math.max(80, labelW + 22 + sortable + filters)
        } else {
          column.minWidth = 80
        }
      }
      column.realWidth = column.width === undefined ? column.minWidth : column.width
      return column
    }
  })

  // 美化表头搜索
  if (ElementUI.Table.components.TableHeader) {
    setMethodsDefault(ElementUI.Table.components.TableHeader, {
      handleFilterClick(event, column) {
        event.stopPropagation()
        const target = event.target
        let cell = target.tagName === 'TH' ? target : target.parentNode
        if (hasClass(cell, 'noclick')) return
        cell = cell.querySelector('.el-table__column-filter-trigger') || cell
        const table = this.$parent

        let filterPanel = this.filterPanels[column.id]

        if (filterPanel && column.filterOpened) {
          filterPanel.showPopper = false
          return
        }

        if (!filterPanel) {
          filterPanel = new Vue(FilterPanel)
          this.filterPanels[column.id] = filterPanel
          if (column.filterPlacement) {
            filterPanel.placement = column.filterPlacement
          }
          filterPanel.table = table
          filterPanel.cell = cell
          filterPanel.column = column
          !this.$isServer && filterPanel.$mount(document.createElement('div'))
        }

        setTimeout(() => {
          filterPanel.showPopper = true
        }, 16)
      }
    })
  }
}

const ASCII_W = {
  ' ': 4.125,
  0: 8.21875,
  1: 8.21875,
  2: 8.21875,
  3: 8.21875,
  4: 8.21875,
  5: 8.21875,
  6: 8.21875,
  7: 8.21875,
  8: 8.21875,
  9: 8.21875,
  '!': 4.375,
  '"': 6.109375,
  '#': 8.9375,
  $: 8.21875,
  '%': 12.46875,
  '&': 12.1875,
  "'": 3.59375,
  '(': 4.6875,
  ')': 4.6875,
  '*': 6.375,
  '+': 10.390625,
  ',': 3.375,
  '-': 6.0625,
  '.': 3.375,
  '/': 5.984375,
  ':': 3.375,
  ';': 3.375,
  '<': 10.390625,
  '=': 10.390625,
  '>': 10.390625,
  '?': 6.765625,
  '@': 14.4375,
  A: 9.859375,
  B: 8.796875,
  C: 9.375,
  D: 10.671875,
  E: 7.703125,
  F: 7.4375,
  G: 10.421875,
  H: 10.828125,
  I: 4.125,
  J: 5.546875,
  K: 8.890625,
  L: 7.1875,
  M: 13.6875,
  N: 11.390625,
  O: 11.421875,
  P: 8.578125,
  Q: 11.421875,
  R: 9.140625,
  S: 8.09375,
  T: 8.03125,
  U: 10.453125,
  V: 9.46875,
  W: 14.25,
  X: 9.03125,
  Y: 8.453125,
  Z: 8.6875,
  '[': 4.6875,
  '\\': 5.828125,
  ']': 4.6875,
  '^': 10.390625,
  _: 6.28125,
  '`': 4.140625,
  a: 7.75,
  b: 8.953125,
  c: 7.03125,
  d: 8.96875,
  e: 7.953125,
  f: 4.859375,
  g: 8.96875,
  h: 8.625,
  i: 3.734375,
  j: 3.75,
  k: 7.625,
  l: 3.734375,
  m: 13.125,
  n: 8.640625,
  o: 8.90625,
  p: 8.953125,
  q: 8.96875,
  r: 5.40625,
  s: 6.546875,
  t: 5.21875,
  u: 8.640625,
  v: 7.359375,
  w: 11.0625,
  x: 7.109375,
  y: 7.421875,
  z: 6.890625,
  '{': 4.6875,
  '|': 3.78125,
  '}': 4.6875,
  '~': 10.390625
}

```

# 用法
```
import { repairEl } from './index.js'

// 
repairEl(ElementUI)
```