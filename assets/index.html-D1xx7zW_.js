import{_ as n,c as s,e as a,o as t}from"./app-0O2wLXp2.js";const i={};function l(p,e){return t(),s("div",null,e[0]||(e[0]=[a(`<blockquote><p>通过substring截取字符串实现千分位</p></blockquote><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>function toThousand(money) {</span></span>
<span class="line"><span>  money= money.toString()</span></span>
<span class="line"><span>  let result = &#39;&#39;</span></span>
<span class="line"><span>  while (money.length &gt; 3) {</span></span>
<span class="line"><span>    result = &#39;,&#39; + money.substring(money.length - 3) + result</span></span>
<span class="line"><span>    money = money.substring(0, money.length - 3)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  result = money + result</span></span>
<span class="line"><span>  return result</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="方法二" tabindex="-1"><a class="header-anchor" href="#方法二"><span>方法二</span></a></h1><blockquote><p>通过正则实现</p></blockquote><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>const toThousand = (money) =&gt; {</span></span>
<span class="line"><span>  return money.replace(new RegExp(\`(?!^)(?=(\\\\d{3})+\${money.includes(&#39;.&#39;) ? &#39;\\\\.&#39; : &#39;$&#39;})\`, &#39;g&#39;), &#39;,&#39;)  </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>toThousand(&#39;123456789&#39;) // &#39;123,456,789&#39;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5)]))}const r=n(i,[["render",l],["__file","index.html.vue"]]),c=JSON.parse(`{"path":"/article/916pu1kl/","title":"金额千分位","lang":"zh-CN","frontmatter":{"title":"金额千分位","createTime":"2024/12/28 23:23:42","permalink":"/article/916pu1kl/","tags":["js"],"description":"通过substring截取字符串实现千分位 方法二 通过正则实现","head":[["meta",{"property":"og:url","content":"https://weige66.github.io/article/916pu1kl/"}],["meta",{"property":"og:site_name","content":"zhengWei's Blog"}],["meta",{"property":"og:title","content":"金额千分位"}],["meta",{"property":"og:description","content":"通过substring截取字符串实现千分位 方法二 通过正则实现"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-28T16:17:08.000Z"}],["meta",{"property":"article:tag","content":"js"}],["meta",{"property":"article:modified_time","content":"2024-12-28T16:17:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"金额千分位\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-28T16:17:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"weiGe66\\",\\"url\\":\\"https://github.com/weiGe66\\",\\"email\\":\\"2361929296@qq.com\\"}]}"]]},"headers":[],"readingTime":{"minutes":0.28,"words":84},"git":{"updatedTime":1735402628000,"contributors":[{"name":"zhengwei","username":"zhengwei","email":"wangzhengwei@nstc.com.cn","commits":1,"avatar":"https://avatars.githubusercontent.com/zhengwei?v=4","url":"https://github.com/zhengwei"}]},"autoDesc":true,"filePathRelative":"blog/js相关/金额千分位.md","categoryList":[{"id":"126ac9","sort":10005,"name":"blog"},{"id":"7f4df5","sort":10008,"name":"js相关"}],"bulletin":false}`);export{r as comp,c as data};
