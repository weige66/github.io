import{_ as n,c as a,e as l,o as e}from"./app-0O2wLXp2.js";const o={};function p(t,s){return e(),a("div",null,s[0]||(s[0]=[l(`<div class="language-js line-numbers-mode" data-ext="js" data-title="js"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#7F848E;font-style:italic;">// 图片防盗链处理的中间件</span></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#E5C07B;"> url</span><span style="color:#56B6C2;"> =</span><span style="color:#61AFEF;"> require</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;url&#39;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#E5C07B;"> path</span><span style="color:#56B6C2;"> =</span><span style="color:#61AFEF;"> require</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;path&#39;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;">module</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">exports</span><span style="color:#56B6C2;"> =</span><span style="color:#ABB2BF;"> () </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#C678DD;">  return</span><span style="color:#C678DD;"> async</span><span style="color:#ABB2BF;"> (</span><span style="color:#E06C75;font-style:italic;">ctx</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;">next</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#C678DD;">    const</span><span style="color:#E5C07B;"> extArr</span><span style="color:#56B6C2;"> =</span><span style="color:#ABB2BF;"> [</span><span style="color:#98C379;">&#39;.jpg&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&#39;.jpeg&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&#39;.png&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&#39;.gif&#39;</span><span style="color:#ABB2BF;">];</span></span>
<span class="line"><span style="color:#C678DD;">    const</span><span style="color:#E5C07B;"> imgURl</span><span style="color:#56B6C2;"> =</span><span style="color:#E5C07B;"> path</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">extname</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">ctx</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">request</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">url</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#C678DD;">    if</span><span style="color:#ABB2BF;"> (</span><span style="color:#56B6C2;">!</span><span style="color:#E5C07B;">extArr</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">includes</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">imgURl</span><span style="color:#ABB2BF;">)) {</span></span>
<span class="line"><span style="color:#C678DD;">      await</span><span style="color:#61AFEF;"> next</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;">    } </span><span style="color:#C678DD;">else</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#C678DD;">      const</span><span style="color:#E5C07B;"> originHost</span><span style="color:#56B6C2;"> =</span><span style="color:#E5C07B;"> ctx</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">request</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">header</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">host</span></span>
<span class="line"><span style="color:#C678DD;">      let</span><span style="color:#E06C75;"> refererHost</span><span style="color:#56B6C2;"> =</span><span style="color:#E5C07B;"> ctx</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">request</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">header</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">referer</span></span>
<span class="line"><span style="color:#C678DD;">      if</span><span style="color:#ABB2BF;"> (</span><span style="color:#E06C75;">refererHost</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#E06C75;">        refererHost</span><span style="color:#56B6C2;"> =</span><span style="color:#E5C07B;"> url</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">parse</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">refererHost</span><span style="color:#ABB2BF;">).</span><span style="color:#E06C75;">host</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">      }</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">      // 别人在盗用你的图片</span></span>
<span class="line"><span style="color:#C678DD;">      if</span><span style="color:#ABB2BF;"> (</span><span style="color:#E06C75;">refererHost</span><span style="color:#56B6C2;"> &amp;&amp;</span><span style="color:#E06C75;"> refererHost</span><span style="color:#56B6C2;"> !==</span><span style="color:#E06C75;"> originHost</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#E5C07B;">        ctx</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">redirect</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;/404.jpg&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">      } </span><span style="color:#C678DD;">else</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#C678DD;">        await</span><span style="color:#61AFEF;"> next</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;">      }</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1)]))}const c=n(o,[["render",p],["__file","index.html.vue"]]),B=JSON.parse(`{"path":"/notes/node/koa2%E5%AE%9E%E7%8E%B0%E7%BD%91%E7%AB%99%E5%9B%BE%E7%89%87%E9%98%B2%E7%9B%97%E9%93%BE/","title":"koa2实现网站图片防盗链","lang":"zh-CN","frontmatter":{"title":"koa2实现网站图片防盗链","createTime":"2024/12/28 23:40:07","permalink":"/notes/node/koa2实现网站图片防盗链/","head":[["meta",{"property":"og:url","content":"https://weige66.github.io/notes/node/koa2%E5%AE%9E%E7%8E%B0%E7%BD%91%E7%AB%99%E5%9B%BE%E7%89%87%E9%98%B2%E7%9B%97%E9%93%BE/"}],["meta",{"property":"og:site_name","content":"zhengWei's Blog"}],["meta",{"property":"og:title","content":"koa2实现网站图片防盗链"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-28T16:17:08.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-28T16:17:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"koa2实现网站图片防盗链\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-28T16:17:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"weiGe66\\",\\"url\\":\\"https://github.com/weiGe66\\",\\"email\\":\\"2361929296@qq.com\\"}]}"]]},"headers":[],"readingTime":{"minutes":0.34,"words":101},"git":{"updatedTime":1735402628000,"contributors":[{"name":"zhengwei","username":"zhengwei","email":"wangzhengwei@nstc.com.cn","commits":1,"avatar":"https://avatars.githubusercontent.com/zhengwei?v=4","url":"https://github.com/zhengwei"}]},"filePathRelative":"notes/node/koa2实现网站图片防盗链.md","categoryList":[{"id":"4358b5","sort":10000,"name":"notes"},{"id":"e067d0","sort":10004,"name":"node"}],"bulletin":false}`);export{c as comp,B as data};
