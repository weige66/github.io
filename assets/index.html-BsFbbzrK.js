import{_ as n,c as a,e,o as l}from"./app-0O2wLXp2.js";const o={};function p(t,s){return l(),a("div",null,s[0]||(s[0]=[e(`<div class="language-js line-numbers-mode" data-ext="js" data-title="js"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 自动注册路由</span></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#61AFEF;"> createRoutesFromFiles</span><span style="color:#56B6C2;"> =</span><span style="color:#ABB2BF;"> () </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">  // 使用 require.context 导入所有的路由配置文件</span></span>
<span class="line"><span style="color:#C678DD;">  const</span><span style="color:#E5C07B;"> files</span><span style="color:#56B6C2;"> =</span><span style="color:#E5C07B;"> require</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">context</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;../_docs&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">,</span><span style="color:#E06C75;"> /</span><span style="color:#56B6C2;">\\.</span><span style="color:#E06C75;">vue</span><span style="color:#C678DD;">$</span><span style="color:#E06C75;">/</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#C678DD;">  const</span><span style="color:#E5C07B;"> routes</span><span style="color:#56B6C2;"> =</span><span style="color:#ABB2BF;"> []</span></span>
<span class="line"><span style="color:#E5C07B;">  files</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">keys</span><span style="color:#ABB2BF;">().</span><span style="color:#61AFEF;">forEach</span><span style="color:#ABB2BF;">((</span><span style="color:#E06C75;font-style:italic;">filePath</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#C678DD;">    let</span><span style="color:#E06C75;"> path</span><span style="color:#56B6C2;"> =</span><span style="color:#98C379;"> &#39;/&#39;</span><span style="color:#56B6C2;"> +</span><span style="color:#E5C07B;"> filePath</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">replace</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">/</span><span style="color:#C678DD;">^</span><span style="color:#56B6C2;">\\.\\/</span><span style="color:#E06C75;">/</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&#39;&#39;</span><span style="color:#ABB2BF;">).</span><span style="color:#61AFEF;">replace</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">/</span><span style="color:#56B6C2;">\\.</span><span style="color:#E06C75;">vue</span><span style="color:#C678DD;">$</span><span style="color:#E06C75;">/</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&#39;&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#C678DD;">    const</span><span style="color:#E5C07B;"> component</span><span style="color:#56B6C2;"> =</span><span style="color:#61AFEF;"> files</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">filePath</span><span style="color:#ABB2BF;">).</span><span style="color:#E06C75;">default</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;">    routes</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">push</span><span style="color:#ABB2BF;">({</span></span>
<span class="line"><span style="color:#E06C75;">      path</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;">      component</span></span>
<span class="line"><span style="color:#ABB2BF;">    })</span></span>
<span class="line"><span style="color:#ABB2BF;">  })</span></span>
<span class="line"><span style="color:#C678DD;">  return</span><span style="color:#E06C75;"> routes</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h3><div class="language-js line-numbers-mode" data-ext="js" data-title="js"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">const</span><span style="color:#E5C07B;"> router</span><span style="color:#56B6C2;"> =</span><span style="color:#C678DD;"> new</span><span style="color:#61AFEF;"> Router</span><span style="color:#ABB2BF;">({</span></span>
<span class="line"><span style="color:#E06C75;">  mode</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;history&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;">  base</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;/&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;">  routes</span><span style="color:#ABB2BF;">: [</span></span>
<span class="line"><span style="color:#ABB2BF;">    ...</span><span style="color:#61AFEF;">createRoutesFromFiles</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;">  ]</span></span>
<span class="line"><span style="color:#ABB2BF;">})</span></span>
<span class="line"><span style="color:#C678DD;">export</span><span style="color:#C678DD;"> default</span><span style="color:#E06C75;"> router</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3)]))}const r=n(o,[["render",p],["__file","index.html.vue"]]),i=JSON.parse(`{"path":"/notes/vue/note/vue%E8%87%AA%E5%8A%A8%E6%B3%A8%E5%86%8C%E8%B7%AF%E7%94%B1/","title":"vue自动注册路由","lang":"zh-CN","frontmatter":{"title":"vue自动注册路由","createTime":"2024/12/28 23:56:15","permalink":"/notes/vue/note/vue自动注册路由/","description":"使用","head":[["meta",{"property":"og:url","content":"https://weige66.github.io/notes/vue/note/vue%E8%87%AA%E5%8A%A8%E6%B3%A8%E5%86%8C%E8%B7%AF%E7%94%B1/"}],["meta",{"property":"og:site_name","content":"zhengWei's Blog"}],["meta",{"property":"og:title","content":"vue自动注册路由"}],["meta",{"property":"og:description","content":"使用"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-28T16:17:08.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-28T16:17:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"vue自动注册路由\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-28T16:17:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"weiGe66\\",\\"url\\":\\"https://github.com/weiGe66\\",\\"email\\":\\"2361929296@qq.com\\"}]}"]]},"headers":[],"readingTime":{"minutes":0.32,"words":97},"git":{"updatedTime":1735402628000,"contributors":[{"name":"zhengwei","username":"zhengwei","email":"wangzhengwei@nstc.com.cn","commits":1,"avatar":"https://avatars.githubusercontent.com/zhengwei?v=4","url":"https://github.com/zhengwei"}]},"autoDesc":true,"filePathRelative":"notes/vue/note/vue自动注册路由.md","categoryList":[{"id":"4358b5","sort":10000,"name":"notes"},{"id":"67cf80","sort":10001,"name":"vue"},{"id":"0b1ef0","sort":10002,"name":"note"}],"bulletin":false}`);export{r as comp,i as data};