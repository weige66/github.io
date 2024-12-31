import{_ as n,c as a,e as l,o as e}from"./app-0O2wLXp2.js";const o={};function p(t,s){return e(),a("div",null,s[0]||(s[0]=[l(`<div class="language-js line-numbers-mode" data-ext="js" data-title="js"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="color:#C678DD;">function</span><span style="color:#61AFEF;"> forEachs</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">arr</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;">callback</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;">branch</span><span style="color:#56B6C2;"> =</span><span style="color:#98C379;"> &#39;children&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;">arrp</span><span style="color:#56B6C2;"> =</span><span style="color:#ABB2BF;"> {}) {</span></span>
<span class="line"><span style="color:#C678DD;">  if</span><span style="color:#ABB2BF;"> (</span><span style="color:#C678DD;">typeof</span><span style="color:#E06C75;"> callback</span><span style="color:#56B6C2;"> !==</span><span style="color:#98C379;"> &#39;function&#39;</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#C678DD;">    return</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span></span>
<span class="line"><span style="color:#61AFEF;">  _forEachs</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">arr</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">callback</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">branch</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">arrp</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">function</span><span style="color:#61AFEF;"> _forEachs</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">arr</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;">callback</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;">branch</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;">arrp</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#C678DD;">  for</span><span style="color:#ABB2BF;"> (</span><span style="color:#C678DD;">let</span><span style="color:#E06C75;"> i</span><span style="color:#56B6C2;"> =</span><span style="color:#D19A66;"> 0</span><span style="color:#ABB2BF;">; </span><span style="color:#E06C75;">i</span><span style="color:#56B6C2;"> &lt;</span><span style="color:#E5C07B;"> arr</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">length</span><span style="color:#ABB2BF;">; </span><span style="color:#E06C75;">i</span><span style="color:#56B6C2;">++</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#C678DD;">    const</span><span style="color:#E5C07B;"> item</span><span style="color:#56B6C2;"> =</span><span style="color:#E06C75;"> arr</span><span style="color:#ABB2BF;">[</span><span style="color:#E06C75;">i</span><span style="color:#ABB2BF;">];</span></span>
<span class="line"><span style="color:#61AFEF;">    callback</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">item</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">i</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">arr</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">arrp</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span></span>
<span class="line"><span style="color:#C678DD;">    if</span><span style="color:#ABB2BF;"> (</span><span style="color:#E06C75;">item</span><span style="color:#ABB2BF;">[</span><span style="color:#E06C75;">branch</span><span style="color:#ABB2BF;">] </span><span style="color:#56B6C2;">&amp;&amp;</span><span style="color:#E5C07B;"> Array</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">isArray</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">item</span><span style="color:#ABB2BF;">[</span><span style="color:#E06C75;">branch</span><span style="color:#ABB2BF;">])) {</span></span>
<span class="line"><span style="color:#61AFEF;">      _forEachs</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">item</span><span style="color:#ABB2BF;">[</span><span style="color:#E06C75;">branch</span><span style="color:#ABB2BF;">], </span><span style="color:#E06C75;">callback</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">branch</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">item</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1)]))}const r=n(o,[["render",p],["__file","index.html.vue"]]),i=JSON.parse(`{"path":"/article/y91hy7a0/","title":"js递归遍历多维数组","lang":"zh-CN","frontmatter":{"title":"js递归遍历多维数组","createTime":"2024/12/28 23:59:14","permalink":"/article/y91hy7a0/","tags":["js"],"head":[["meta",{"property":"og:url","content":"https://weige66.github.io/article/y91hy7a0/"}],["meta",{"property":"og:site_name","content":"zhengWei's Blog"}],["meta",{"property":"og:title","content":"js递归遍历多维数组"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-28T16:17:08.000Z"}],["meta",{"property":"article:tag","content":"js"}],["meta",{"property":"article:modified_time","content":"2024-12-28T16:17:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"js递归遍历多维数组\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-28T16:17:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"weiGe66\\",\\"url\\":\\"https://github.com/weiGe66\\",\\"email\\":\\"2361929296@qq.com\\"}]}"]]},"headers":[],"readingTime":{"minutes":0.24,"words":71},"git":{"updatedTime":1735402628000,"contributors":[{"name":"zhengwei","username":"zhengwei","email":"wangzhengwei@nstc.com.cn","commits":1,"avatar":"https://avatars.githubusercontent.com/zhengwei?v=4","url":"https://github.com/zhengwei"}]},"filePathRelative":"blog/js工具库/js递归遍历多维数组.md","categoryList":[{"id":"126ac9","sort":10005,"name":"blog"},{"id":"11dc35","sort":10011,"name":"js工具库"}],"bulletin":false}`);export{r as comp,i as data};
