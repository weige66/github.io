import{_ as n,c as a,e,o as l}from"./app-0O2wLXp2.js";const i={};function p(t,s){return l(),a("div",null,s[0]||(s[0]=[e(`<div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#ABB2BF;">data() {</span></span>
<span class="line"><span style="color:#ABB2BF;">    return {</span></span>
<span class="line"><span style="color:#ABB2BF;">  	columnArr: [&#39;variety&#39;], //需要合并的项</span></span>
<span class="line"><span style="color:#ABB2BF;">      	spanArr: [], //临时组</span></span>
<span class="line"><span style="color:#ABB2BF;">      	spanData: [], // 组合的合并组</span></span>
<span class="line"><span style="color:#ABB2BF;">      	tableData: [],</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;"> methods: {</span></span>
<span class="line"><span style="color:#ABB2BF;">	init() {</span></span>
<span class="line"><span style="color:#ABB2BF;">		axios(xxx).then(({datat})=&gt; {</span></span>
<span class="line"><span style="color:#ABB2BF;">		 this.tableData = data.bizTypeVOS</span></span>
<span class="line"><span style="color:#ABB2BF;">      		this.getSpanData(this.tableData)</span></span>
<span class="line"><span style="color:#ABB2BF;">                }</span></span>
<span class="line"><span style="color:#ABB2BF;">         },</span></span>
<span class="line"><span style="color:#ABB2BF;">	// 计算需要合并的单元格</span></span>
<span class="line"><span style="color:#ABB2BF;">    getSpanData(data) {</span></span>
<span class="line"><span style="color:#ABB2BF;">      this.spanData = []</span></span>
<span class="line"><span style="color:#ABB2BF;">      this.columnArr.forEach(element =&gt; {</span></span>
<span class="line"><span style="color:#ABB2BF;">        let contactDot = 0</span></span>
<span class="line"><span style="color:#ABB2BF;">        this.spanArr = []</span></span>
<span class="line"><span style="color:#ABB2BF;">        data.forEach((item, index) =&gt; {</span></span>
<span class="line"><span style="color:#ABB2BF;">          if (index === 0) {</span></span>
<span class="line"><span style="color:#ABB2BF;">            this.spanArr.push(1)</span></span>
<span class="line"><span style="color:#ABB2BF;">          } else {</span></span>
<span class="line"><span style="color:#ABB2BF;">            if (item[element] === data[index - 1][element]) {</span></span>
<span class="line"><span style="color:#ABB2BF;">              this.spanArr[contactDot] += 1</span></span>
<span class="line"><span style="color:#ABB2BF;">              this.spanArr.push(0)</span></span>
<span class="line"><span style="color:#ABB2BF;">            } else {</span></span>
<span class="line"><span style="color:#ABB2BF;">              contactDot = index</span></span>
<span class="line"><span style="color:#ABB2BF;">              this.spanArr.push(1)</span></span>
<span class="line"><span style="color:#ABB2BF;">            }</span></span>
<span class="line"><span style="color:#ABB2BF;">          }</span></span>
<span class="line"><span style="color:#ABB2BF;">        })</span></span>
<span class="line"><span style="color:#ABB2BF;">        this.spanData.push(this.spanArr)</span></span>
<span class="line"><span style="color:#ABB2BF;">      })</span></span>
<span class="line"><span style="color:#ABB2BF;">    },</span></span>
<span class="line"><span style="color:#ABB2BF;">// 合并相同项</span></span>
<span class="line"><span style="color:#ABB2BF;">    spanMethod({ row, column, rowIndex, columnIndex }) {</span></span>
<span class="line"><span style="color:#ABB2BF;">      if (this.columnArr.includes(column.property)) {</span></span>
<span class="line"><span style="color:#ABB2BF;">        if (this.spanData[columnIndex][rowIndex]) {</span></span>
<span class="line"><span style="color:#ABB2BF;">          return {</span></span>
<span class="line"><span style="color:#ABB2BF;">            rowspan: this.spanData[columnIndex][rowIndex],</span></span>
<span class="line"><span style="color:#ABB2BF;">            colspan: 1</span></span>
<span class="line"><span style="color:#ABB2BF;">          }</span></span>
<span class="line"><span style="color:#ABB2BF;">        } else {</span></span>
<span class="line"><span style="color:#ABB2BF;">          return {</span></span>
<span class="line"><span style="color:#ABB2BF;">            rowspan: 0,</span></span>
<span class="line"><span style="color:#ABB2BF;">            colspan: 0</span></span>
<span class="line"><span style="color:#ABB2BF;">          }</span></span>
<span class="line"><span style="color:#ABB2BF;">        }</span></span>
<span class="line"><span style="color:#ABB2BF;">      }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1)]))}const o=n(i,[["render",p],["__file","index.html.vue"]]),r=JSON.parse(`{"path":"/notes/vue/el-table%E4%B8%AD%E5%90%88%E5%B9%B6%E7%9B%B8%E5%90%8C%E7%9A%84%E8%A1%8C/","title":"el-table中合并相同的行","lang":"zh-CN","frontmatter":{"title":"el-table中合并相同的行","createTime":"2024/12/28 23:47:14","permalink":"/notes/vue/el-table中合并相同的行/","head":[["meta",{"property":"og:url","content":"https://weige66.github.io/notes/vue/el-table%E4%B8%AD%E5%90%88%E5%B9%B6%E7%9B%B8%E5%90%8C%E7%9A%84%E8%A1%8C/"}],["meta",{"property":"og:site_name","content":"zhengWei's Blog"}],["meta",{"property":"og:title","content":"el-table中合并相同的行"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-28T16:17:08.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-28T16:17:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"el-table中合并相同的行\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-28T16:17:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"weiGe66\\",\\"url\\":\\"https://github.com/weiGe66\\",\\"email\\":\\"2361929296@qq.com\\"}]}"]]},"headers":[],"readingTime":{"minutes":0.47,"words":141},"git":{"updatedTime":1735402628000,"contributors":[{"name":"zhengwei","username":"zhengwei","email":"wangzhengwei@nstc.com.cn","commits":1,"avatar":"https://avatars.githubusercontent.com/zhengwei?v=4","url":"https://github.com/zhengwei"}]},"filePathRelative":"notes/vue/note/el-table中合并相同的行.md","categoryList":[{"id":"4358b5","sort":10000,"name":"notes"},{"id":"67cf80","sort":10001,"name":"vue"},{"id":"0b1ef0","sort":10002,"name":"note"}],"bulletin":false}`);export{o as comp,r as data};
