import{_ as n,c as a,e as l,o as e}from"./app-0O2wLXp2.js";const t={};function p(o,s){return e(),a("div",null,s[0]||(s[0]=[l(`<h2 id="节流" tabindex="-1"><a class="header-anchor" href="#节流"><span>节流</span></a></h2><p>当持续触发事件时，保证一定时间段内只调用一次事件处理函数。</p><div class="language-javascript line-numbers-mode" data-ext="javascript" data-title="javascript"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">let</span><span style="color:#E06C75;"> btn</span><span style="color:#56B6C2;"> =</span><span style="color:#E5C07B;"> document</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">querySelector</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;button&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#C678DD;">    function</span><span style="color:#61AFEF;"> ajax</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">param</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#E5C07B;">        console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">param</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#E5C07B;">    btn</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">addEventListener</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;click&#39;</span><span style="color:#ABB2BF;">,() </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#61AFEF;">            throttleAjax</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;节流!&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">    })</span></span>
<span class="line"><span style="color:#C678DD;">    function</span><span style="color:#61AFEF;"> Throttle</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">cb</span><span style="color:#ABB2BF;">,</span><span style="color:#E06C75;font-style:italic;">wait</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#C678DD;">        let</span><span style="color:#E06C75;"> flag</span><span style="color:#56B6C2;"> =</span><span style="color:#D19A66;"> true</span></span>
<span class="line"><span style="color:#C678DD;">        let</span><span style="color:#E06C75;"> that</span><span style="color:#56B6C2;"> =</span><span style="color:#E5C07B;"> this</span></span>
<span class="line"><span style="color:#C678DD;">        return</span><span style="color:#C678DD;"> function</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">param</span><span style="color:#ABB2BF;">){</span></span>
<span class="line"><span style="color:#C678DD;">            if</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">flag</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#E06C75;">                flag</span><span style="color:#56B6C2;"> =</span><span style="color:#D19A66;"> false</span></span>
<span class="line"><span style="color:#61AFEF;">                setTimeout</span><span style="color:#ABB2BF;">(() </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#E5C07B;">                    cb</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">call</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">that</span><span style="color:#ABB2BF;">,</span><span style="color:#E06C75;">param</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#E06C75;">                    flag</span><span style="color:#56B6C2;"> =</span><span style="color:#D19A66;"> true</span></span>
<span class="line"><span style="color:#ABB2BF;">                },</span><span style="color:#E06C75;">wait</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">            }</span></span>
<span class="line"><span style="color:#ABB2BF;">        }</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#C678DD;">let</span><span style="color:#E06C75;"> throttleAjax</span><span style="color:#56B6C2;"> =</span><span style="color:#61AFEF;"> Throttle</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">ajax</span><span style="color:#ABB2BF;">,</span><span style="color:#D19A66;">1000</span><span style="color:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3)]))}const r=n(t,[["render",p],["__file","index.html.vue"]]),i=JSON.parse(`{"path":"/article/7tctftx4/","title":"节流","lang":"zh-CN","frontmatter":{"title":"节流","createTime":"2024/12/28 23:08:35","permalink":"/article/7tctftx4/","tags":["js"],"description":"节流 当持续触发事件时，保证一定时间段内只调用一次事件处理函数。","head":[["meta",{"property":"og:url","content":"https://weige66.github.io/article/7tctftx4/"}],["meta",{"property":"og:site_name","content":"zhengWei's Blog"}],["meta",{"property":"og:title","content":"节流"}],["meta",{"property":"og:description","content":"节流 当持续触发事件时，保证一定时间段内只调用一次事件处理函数。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-28T16:17:08.000Z"}],["meta",{"property":"article:tag","content":"js"}],["meta",{"property":"article:modified_time","content":"2024-12-28T16:17:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"节流\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-28T16:17:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"weiGe66\\",\\"url\\":\\"https://github.com/weiGe66\\",\\"email\\":\\"2361929296@qq.com\\"}]}"]]},"headers":[],"readingTime":{"minutes":0.28,"words":85},"git":{"updatedTime":1735402628000,"contributors":[{"name":"zhengwei","username":"zhengwei","email":"wangzhengwei@nstc.com.cn","commits":1,"avatar":"https://avatars.githubusercontent.com/zhengwei?v=4","url":"https://github.com/zhengwei"}]},"autoDesc":true,"filePathRelative":"blog/js工具库/节流.md","categoryList":[{"id":"126ac9","sort":10005,"name":"blog"},{"id":"11dc35","sort":10011,"name":"js工具库"}],"bulletin":false}`);export{r as comp,i as data};
