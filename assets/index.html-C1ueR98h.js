import{_ as s,c as a,e,o as l}from"./app-0O2wLXp2.js";const i={};function p(c,n){return l(),a("div",null,n[0]||(n[0]=[e(`<div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>import Popper from &#39;element-ui/lib/utils/popper.js&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import Vue from &#39;vue&#39;</span></span>
<span class="line"><span>import FilterPanel from &#39;./tableheaderFilterpanel.vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function hasClass(el, cls) {</span></span>
<span class="line"><span>  if (!el || !cls) return false</span></span>
<span class="line"><span>  if (cls.indexOf(&#39; &#39;) !== -1) throw new Error(&#39;className should not contain space.&#39;)</span></span>
<span class="line"><span>  if (el.classList) {</span></span>
<span class="line"><span>    return el.classList.contains(cls)</span></span>
<span class="line"><span>  } else {</span></span>
<span class="line"><span>    return (&#39; &#39; + el.className + &#39; &#39;).indexOf(&#39; &#39; + cls + &#39; &#39;) &gt; -1</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function setPropsDefault(component, props) {</span></span>
<span class="line"><span>  let c_props = component.props</span></span>
<span class="line"><span>  Object.keys(props).forEach((key) =&gt; {</span></span>
<span class="line"><span>    c_props[key] = Object.assign({}, c_props[key], props[key])</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>function setMethodsDefault(component, methods) {</span></span>
<span class="line"><span>  let c_methods = component.methods</span></span>
<span class="line"><span>  Object.keys(methods).forEach((key) =&gt; {</span></span>
<span class="line"><span>    c_methods[key] = methods[key]</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function repairPopper() {</span></span>
<span class="line"><span>  if (!Popper.prototype.repairR) {</span></span>
<span class="line"><span>    Popper.prototype.repairR = true</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    let __getBoundaries = Popper.prototype._getBoundaries</span></span>
<span class="line"><span>    Popper.prototype._getBoundaries = function (data, padding, boundariesElement) {</span></span>
<span class="line"><span>      const boundaries = __getBoundaries.call(this, data, padding, boundariesElement)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      if (this._options.boundariesElement === &#39;viewport&#39;) {</span></span>
<span class="line"><span>        const root = window</span></span>
<span class="line"><span>        const body = root.document.body</span></span>
<span class="line"><span>        const html = root.document.documentElement</span></span>
<span class="line"><span>        let width = Math.max(body.scrollWidth, body.offsetWidth, html.clientWidth, html.scrollWidth, html.offsetWidth)</span></span>
<span class="line"><span>        let height = Math.max(</span></span>
<span class="line"><span>          body.scrollHeight,</span></span>
<span class="line"><span>          body.offsetHeight,</span></span>
<span class="line"><span>          html.clientHeight,</span></span>
<span class="line"><span>          html.scrollHeight,</span></span>
<span class="line"><span>          html.offsetHeight</span></span>
<span class="line"><span>        )</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        boundaries.right = boundaries.right - root.document.documentElement.clientWidth + width</span></span>
<span class="line"><span>        boundaries.bottom = boundaries.bottom - root.document.documentElement.clientHeight + height</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      return boundaries</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default function (ElementUI) {</span></span>
<span class="line"><span>  repairPopper()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // setPropsDefault(ElementUI.Table, {</span></span>
<span class="line"><span>  //   tooltipEffect: {</span></span>
<span class="line"><span>  //     default: &#39;light&#39;</span></span>
<span class="line"><span>  //   }</span></span>
<span class="line"><span>  // })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  setPropsDefault(ElementUI.TableColumn, {</span></span>
<span class="line"><span>    filterPlacement: {</span></span>
<span class="line"><span>      default: &#39;bottom&#39;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  setPropsDefault(ElementUI.Dropdown, {</span></span>
<span class="line"><span>    placement: {</span></span>
<span class="line"><span>      default: &#39;bottom&#39;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  setPropsDefault(ElementUI.Dialog, {</span></span>
<span class="line"><span>    appendToBody: {</span></span>
<span class="line"><span>      default: true</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>  // 设置表头最小宽度,保证表头不换行</span></span>
<span class="line"><span>  setMethodsDefault(ElementUI.TableColumn, {</span></span>
<span class="line"><span>    setColumnWidth(column) {</span></span>
<span class="line"><span>      if (this.realWidth) {</span></span>
<span class="line"><span>        column.width = this.realWidth</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      if (this.realMinWidth) {</span></span>
<span class="line"><span>        column.minWidth = this.realMinWidth</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      if (!column.minWidth) {</span></span>
<span class="line"><span>        if (!column.width) {</span></span>
<span class="line"><span>          let label = column.label || &#39;&#39;</span></span>
<span class="line"><span>          let labels = label.match(/./gu) || []</span></span>
<span class="line"><span>          let labelW = 0</span></span>
<span class="line"><span>          labels.forEach((s) =&gt; (labelW += ASCII_W[s] || 14))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>          let sortable = column.sortable ? 24 : 0</span></span>
<span class="line"><span>          let filters = column.filters ? 16 : 0</span></span>
<span class="line"><span>          column.minWidth = Math.max(80, labelW + 22 + sortable + filters)</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>          column.minWidth = 80</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      column.realWidth = column.width === undefined ? column.minWidth : column.width</span></span>
<span class="line"><span>      return column</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 美化表头搜索</span></span>
<span class="line"><span>  if (ElementUI.Table.components.TableHeader) {</span></span>
<span class="line"><span>    setMethodsDefault(ElementUI.Table.components.TableHeader, {</span></span>
<span class="line"><span>      handleFilterClick(event, column) {</span></span>
<span class="line"><span>        event.stopPropagation()</span></span>
<span class="line"><span>        const target = event.target</span></span>
<span class="line"><span>        let cell = target.tagName === &#39;TH&#39; ? target : target.parentNode</span></span>
<span class="line"><span>        if (hasClass(cell, &#39;noclick&#39;)) return</span></span>
<span class="line"><span>        cell = cell.querySelector(&#39;.el-table__column-filter-trigger&#39;) || cell</span></span>
<span class="line"><span>        const table = this.$parent</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        let filterPanel = this.filterPanels[column.id]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if (filterPanel &amp;&amp; column.filterOpened) {</span></span>
<span class="line"><span>          filterPanel.showPopper = false</span></span>
<span class="line"><span>          return</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if (!filterPanel) {</span></span>
<span class="line"><span>          filterPanel = new Vue(FilterPanel)</span></span>
<span class="line"><span>          this.filterPanels[column.id] = filterPanel</span></span>
<span class="line"><span>          if (column.filterPlacement) {</span></span>
<span class="line"><span>            filterPanel.placement = column.filterPlacement</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>          filterPanel.table = table</span></span>
<span class="line"><span>          filterPanel.cell = cell</span></span>
<span class="line"><span>          filterPanel.column = column</span></span>
<span class="line"><span>          !this.$isServer &amp;&amp; filterPanel.$mount(document.createElement(&#39;div&#39;))</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        setTimeout(() =&gt; {</span></span>
<span class="line"><span>          filterPanel.showPopper = true</span></span>
<span class="line"><span>        }, 16)</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const ASCII_W = {</span></span>
<span class="line"><span>  &#39; &#39;: 4.125,</span></span>
<span class="line"><span>  0: 8.21875,</span></span>
<span class="line"><span>  1: 8.21875,</span></span>
<span class="line"><span>  2: 8.21875,</span></span>
<span class="line"><span>  3: 8.21875,</span></span>
<span class="line"><span>  4: 8.21875,</span></span>
<span class="line"><span>  5: 8.21875,</span></span>
<span class="line"><span>  6: 8.21875,</span></span>
<span class="line"><span>  7: 8.21875,</span></span>
<span class="line"><span>  8: 8.21875,</span></span>
<span class="line"><span>  9: 8.21875,</span></span>
<span class="line"><span>  &#39;!&#39;: 4.375,</span></span>
<span class="line"><span>  &#39;&quot;&#39;: 6.109375,</span></span>
<span class="line"><span>  &#39;#&#39;: 8.9375,</span></span>
<span class="line"><span>  $: 8.21875,</span></span>
<span class="line"><span>  &#39;%&#39;: 12.46875,</span></span>
<span class="line"><span>  &#39;&amp;&#39;: 12.1875,</span></span>
<span class="line"><span>  &quot;&#39;&quot;: 3.59375,</span></span>
<span class="line"><span>  &#39;(&#39;: 4.6875,</span></span>
<span class="line"><span>  &#39;)&#39;: 4.6875,</span></span>
<span class="line"><span>  &#39;*&#39;: 6.375,</span></span>
<span class="line"><span>  &#39;+&#39;: 10.390625,</span></span>
<span class="line"><span>  &#39;,&#39;: 3.375,</span></span>
<span class="line"><span>  &#39;-&#39;: 6.0625,</span></span>
<span class="line"><span>  &#39;.&#39;: 3.375,</span></span>
<span class="line"><span>  &#39;/&#39;: 5.984375,</span></span>
<span class="line"><span>  &#39;:&#39;: 3.375,</span></span>
<span class="line"><span>  &#39;;&#39;: 3.375,</span></span>
<span class="line"><span>  &#39;&lt;&#39;: 10.390625,</span></span>
<span class="line"><span>  &#39;=&#39;: 10.390625,</span></span>
<span class="line"><span>  &#39;&gt;&#39;: 10.390625,</span></span>
<span class="line"><span>  &#39;?&#39;: 6.765625,</span></span>
<span class="line"><span>  &#39;@&#39;: 14.4375,</span></span>
<span class="line"><span>  A: 9.859375,</span></span>
<span class="line"><span>  B: 8.796875,</span></span>
<span class="line"><span>  C: 9.375,</span></span>
<span class="line"><span>  D: 10.671875,</span></span>
<span class="line"><span>  E: 7.703125,</span></span>
<span class="line"><span>  F: 7.4375,</span></span>
<span class="line"><span>  G: 10.421875,</span></span>
<span class="line"><span>  H: 10.828125,</span></span>
<span class="line"><span>  I: 4.125,</span></span>
<span class="line"><span>  J: 5.546875,</span></span>
<span class="line"><span>  K: 8.890625,</span></span>
<span class="line"><span>  L: 7.1875,</span></span>
<span class="line"><span>  M: 13.6875,</span></span>
<span class="line"><span>  N: 11.390625,</span></span>
<span class="line"><span>  O: 11.421875,</span></span>
<span class="line"><span>  P: 8.578125,</span></span>
<span class="line"><span>  Q: 11.421875,</span></span>
<span class="line"><span>  R: 9.140625,</span></span>
<span class="line"><span>  S: 8.09375,</span></span>
<span class="line"><span>  T: 8.03125,</span></span>
<span class="line"><span>  U: 10.453125,</span></span>
<span class="line"><span>  V: 9.46875,</span></span>
<span class="line"><span>  W: 14.25,</span></span>
<span class="line"><span>  X: 9.03125,</span></span>
<span class="line"><span>  Y: 8.453125,</span></span>
<span class="line"><span>  Z: 8.6875,</span></span>
<span class="line"><span>  &#39;[&#39;: 4.6875,</span></span>
<span class="line"><span>  &#39;\\\\&#39;: 5.828125,</span></span>
<span class="line"><span>  &#39;]&#39;: 4.6875,</span></span>
<span class="line"><span>  &#39;^&#39;: 10.390625,</span></span>
<span class="line"><span>  _: 6.28125,</span></span>
<span class="line"><span>  &#39;\`&#39;: 4.140625,</span></span>
<span class="line"><span>  a: 7.75,</span></span>
<span class="line"><span>  b: 8.953125,</span></span>
<span class="line"><span>  c: 7.03125,</span></span>
<span class="line"><span>  d: 8.96875,</span></span>
<span class="line"><span>  e: 7.953125,</span></span>
<span class="line"><span>  f: 4.859375,</span></span>
<span class="line"><span>  g: 8.96875,</span></span>
<span class="line"><span>  h: 8.625,</span></span>
<span class="line"><span>  i: 3.734375,</span></span>
<span class="line"><span>  j: 3.75,</span></span>
<span class="line"><span>  k: 7.625,</span></span>
<span class="line"><span>  l: 3.734375,</span></span>
<span class="line"><span>  m: 13.125,</span></span>
<span class="line"><span>  n: 8.640625,</span></span>
<span class="line"><span>  o: 8.90625,</span></span>
<span class="line"><span>  p: 8.953125,</span></span>
<span class="line"><span>  q: 8.96875,</span></span>
<span class="line"><span>  r: 5.40625,</span></span>
<span class="line"><span>  s: 6.546875,</span></span>
<span class="line"><span>  t: 5.21875,</span></span>
<span class="line"><span>  u: 8.640625,</span></span>
<span class="line"><span>  v: 7.359375,</span></span>
<span class="line"><span>  w: 11.0625,</span></span>
<span class="line"><span>  x: 7.109375,</span></span>
<span class="line"><span>  y: 7.421875,</span></span>
<span class="line"><span>  z: 6.890625,</span></span>
<span class="line"><span>  &#39;{&#39;: 4.6875,</span></span>
<span class="line"><span>  &#39;|&#39;: 3.78125,</span></span>
<span class="line"><span>  &#39;}&#39;: 4.6875,</span></span>
<span class="line"><span>  &#39;~&#39;: 10.390625</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="用法" tabindex="-1"><a class="header-anchor" href="#用法"><span>用法</span></a></h1><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>import { repairEl } from &#39;./index.js&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// </span></span>
<span class="line"><span>repairEl(ElementUI)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3)]))}const v=s(i,[["render",p],["__file","index.html.vue"]]),r=JSON.parse(`{"path":"/notes/vue/%E5%A4%84%E7%90%86elementui%20%E4%B8%ADPopper%E5%81%8F%E7%A7%BB%E7%9A%84%E9%97%AE%E9%A2%98/","title":"处理elementui 中Popper偏移的问题","lang":"zh-CN","frontmatter":{"title":"处理elementui 中Popper偏移的问题","createTime":"2024/12/28 23:27:09","permalink":"/notes/vue/处理elementui 中Popper偏移的问题/","description":"用法","head":[["meta",{"property":"og:url","content":"https://weige66.github.io/notes/vue/%E5%A4%84%E7%90%86elementui%20%E4%B8%ADPopper%E5%81%8F%E7%A7%BB%E7%9A%84%E9%97%AE%E9%A2%98/"}],["meta",{"property":"og:site_name","content":"zhengWei's Blog"}],["meta",{"property":"og:title","content":"处理elementui 中Popper偏移的问题"}],["meta",{"property":"og:description","content":"用法"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-28T16:17:08.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-28T16:17:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"处理elementui 中Popper偏移的问题\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-28T16:17:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"weiGe66\\",\\"url\\":\\"https://github.com/weiGe66\\",\\"email\\":\\"2361929296@qq.com\\"}]}"]]},"headers":[],"readingTime":{"minutes":1.75,"words":525},"git":{"updatedTime":1735402628000,"contributors":[{"name":"zhengwei","username":"zhengwei","email":"wangzhengwei@nstc.com.cn","commits":1,"avatar":"https://avatars.githubusercontent.com/zhengwei?v=4","url":"https://github.com/zhengwei"}]},"autoDesc":true,"filePathRelative":"notes/vue/note/处理elementui中Popper偏移的问题.md","categoryList":[{"id":"4358b5","sort":10000,"name":"notes"},{"id":"67cf80","sort":10001,"name":"vue"},{"id":"0b1ef0","sort":10002,"name":"note"}],"bulletin":false}`);export{v as comp,r as data};
