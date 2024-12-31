import{_ as n,c as a,e as l,o}from"./app-0O2wLXp2.js";const p={};function e(t,s){return o(),a("div",null,s[0]||(s[0]=[l(`<div class="language-js line-numbers-mode" data-ext="js" data-title="js"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">const</span><span style="color:#E5C07B;"> fs</span><span style="color:#56B6C2;"> =</span><span style="color:#61AFEF;"> require</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;fs&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#E5C07B;"> path</span><span style="color:#56B6C2;"> =</span><span style="color:#61AFEF;"> require</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;path&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#E5C07B;"> childProcess</span><span style="color:#56B6C2;"> =</span><span style="color:#61AFEF;"> require</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;child_process&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">function</span><span style="color:#61AFEF;"> getGitInfo</span><span style="color:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">  // 代码仓库的地址</span></span>
<span class="line"><span style="color:#C678DD;">  const</span><span style="color:#E5C07B;"> gitRemoteUrl</span><span style="color:#56B6C2;"> =</span><span style="color:#E5C07B;"> childProcess</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">execSync</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;git config --get remote.origin.url&#39;</span><span style="color:#ABB2BF;">).</span><span style="color:#61AFEF;">toString</span><span style="color:#ABB2BF;">().</span><span style="color:#61AFEF;">trim</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">  // git的分支信息</span></span>
<span class="line"><span style="color:#C678DD;">  const</span><span style="color:#E5C07B;"> gitBranch</span><span style="color:#56B6C2;"> =</span><span style="color:#E5C07B;"> process</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">env</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">GIT_BRANCH</span><span style="color:#56B6C2;"> ||</span><span style="color:#E5C07B;"> childProcess</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">execSync</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;git rev-parse --abbrev-ref HEAD&#39;</span><span style="color:#ABB2BF;">).</span><span style="color:#61AFEF;">toString</span><span style="color:#ABB2BF;">().</span><span style="color:#61AFEF;">trim</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">  // 最后提交ID</span></span>
<span class="line"><span style="color:#C678DD;">  const</span><span style="color:#E5C07B;"> lastCommitID</span><span style="color:#56B6C2;"> =</span><span style="color:#E5C07B;"> childProcess</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">execSync</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;git log -1 --format=%H&#39;</span><span style="color:#ABB2BF;">).</span><span style="color:#61AFEF;">toString</span><span style="color:#ABB2BF;">().</span><span style="color:#61AFEF;">trim</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">  // 最后提交信息</span></span>
<span class="line"><span style="color:#C678DD;">  const</span><span style="color:#E5C07B;"> lastCommitMessage</span><span style="color:#56B6C2;"> =</span><span style="color:#E5C07B;"> childProcess</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">execSync</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;git log -1 --format=%B&#39;</span><span style="color:#ABB2BF;">).</span><span style="color:#61AFEF;">toString</span><span style="color:#ABB2BF;">().</span><span style="color:#61AFEF;">trim</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">  // 构建人信息</span></span>
<span class="line"><span style="color:#C678DD;">  const</span><span style="color:#E5C07B;"> packagerName</span><span style="color:#56B6C2;"> =</span><span style="color:#E5C07B;"> childProcess</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">execSync</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;git config user.name&#39;</span><span style="color:#ABB2BF;">).</span><span style="color:#61AFEF;">toString</span><span style="color:#ABB2BF;">().</span><span style="color:#61AFEF;">trim</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">  // 构建时间</span></span>
<span class="line"><span style="color:#C678DD;">  const</span><span style="color:#E5C07B;"> buildDate</span><span style="color:#56B6C2;"> =</span><span style="color:#C678DD;"> new</span><span style="color:#61AFEF;"> Date</span><span style="color:#ABB2BF;">().</span><span style="color:#61AFEF;">toLocaleString</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">  // 构建类型</span></span>
<span class="line"><span style="color:#C678DD;">  const</span><span style="color:#E5C07B;"> packagerType</span><span style="color:#56B6C2;"> =</span><span style="color:#E5C07B;"> process</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">env</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">JENKINS_URL</span><span style="color:#C678DD;"> ?</span><span style="color:#98C379;"> &#39;jenkins&#39;</span><span style="color:#C678DD;"> :</span><span style="color:#98C379;"> &#39;manual&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">  // 记录打包信息</span></span>
<span class="line"><span style="color:#C678DD;">  let</span><span style="color:#E06C75;"> infoArr</span><span style="color:#56B6C2;"> =</span><span style="color:#ABB2BF;"> []</span></span>
<span class="line"><span style="color:#E5C07B;">  infoArr</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">push</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;代码仓库: &#39;</span><span style="color:#56B6C2;"> +</span><span style="color:#E06C75;"> gitRemoteUrl</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#E5C07B;">  infoArr</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">push</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;构建分支: &#39;</span><span style="color:#56B6C2;"> +</span><span style="color:#E06C75;"> gitBranch</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#E5C07B;">  infoArr</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">push</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;最后提交: &#39;</span><span style="color:#56B6C2;"> +</span><span style="color:#E06C75;"> lastCommitID</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#E5C07B;">  infoArr</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">push</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;最后提交: &#39;</span><span style="color:#56B6C2;"> +</span><span style="color:#E06C75;"> lastCommitMessage</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#E5C07B;">  infoArr</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">push</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;构建类型: &#39;</span><span style="color:#56B6C2;"> +</span><span style="color:#E06C75;"> packagerType</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#E5C07B;">  infoArr</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">push</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;构建作者: &#39;</span><span style="color:#56B6C2;"> +</span><span style="color:#E06C75;"> packagerName</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#E5C07B;">  infoArr</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">push</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;构建时间: &#39;</span><span style="color:#56B6C2;"> +</span><span style="color:#E06C75;"> buildDate</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#C678DD;">  let</span><span style="color:#E06C75;"> infoStr</span><span style="color:#56B6C2;"> =</span><span style="color:#E5C07B;"> infoArr</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">join</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;</span><span style="color:#56B6C2;">\\n</span><span style="color:#98C379;">&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#C678DD;">  if</span><span style="color:#ABB2BF;"> (</span><span style="color:#56B6C2;">!</span><span style="color:#E5C07B;">fs</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">existsSync</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">path</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">resolve</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;./public/json&#39;</span><span style="color:#ABB2BF;">))) {</span></span>
<span class="line"><span style="color:#E5C07B;">    fs</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">mkdirSync</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">path</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">resolve</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;./public/json&#39;</span><span style="color:#ABB2BF;">))</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#E5C07B;">  fs</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">writeFileSync</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">path</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">resolve</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;./public/json/gitinfo.json&#39;</span><span style="color:#ABB2BF;">), </span><span style="color:#E06C75;">infoStr</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&#39;utf8&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#E5C07B;">process</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">env</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">NODE_ENV</span><span style="color:#56B6C2;"> ===</span><span style="color:#98C379;"> &#39;production&#39;</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#61AFEF;">  getGitInfo</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;">} </span><span style="color:#C678DD;">else</span><span style="color:#C678DD;"> if</span><span style="color:#ABB2BF;"> (</span><span style="color:#E5C07B;">process</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">env</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">npm_lifecycle_script</span><span style="color:#56B6C2;"> &amp;&amp;</span><span style="color:#E5C07B;"> process</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">env</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">npm_lifecycle_script</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">includes</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;nstc-gitinfo&#39;</span><span style="color:#ABB2BF;">)) {</span></span>
<span class="line"><span style="color:#61AFEF;">  getGitInfo</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1)]))}const r=n(p,[["render",e],["__file","index.html.vue"]]),B=JSON.parse(`{"path":"/notes/js/%E6%9E%84%E5%BB%BA%E6%97%B6%E8%AE%B0%E5%BD%95git%E4%BF%A1%E6%81%AF%E5%B9%B6%E5%86%99%E5%85%A5json%E6%96%87%E4%BB%B6%E4%B8%AD/","title":"构建时记录git信息并写入json文件中","lang":"zh-CN","frontmatter":{"title":"构建时记录git信息并写入json文件中","createTime":"2024/12/28 23:50:33","permalink":"/notes/js/构建时记录git信息并写入json文件中/","head":[["meta",{"property":"og:url","content":"https://weige66.github.io/notes/js/%E6%9E%84%E5%BB%BA%E6%97%B6%E8%AE%B0%E5%BD%95git%E4%BF%A1%E6%81%AF%E5%B9%B6%E5%86%99%E5%85%A5json%E6%96%87%E4%BB%B6%E4%B8%AD/"}],["meta",{"property":"og:site_name","content":"zhengWei's Blog"}],["meta",{"property":"og:title","content":"构建时记录git信息并写入json文件中"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-28T16:17:08.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-28T16:17:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"构建时记录git信息并写入json文件中\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-28T16:17:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"weiGe66\\",\\"url\\":\\"https://github.com/weiGe66\\",\\"email\\":\\"2361929296@qq.com\\"}]}"]]},"headers":[],"readingTime":{"minutes":0.78,"words":235},"git":{"updatedTime":1735402628000,"contributors":[{"name":"zhengwei","username":"zhengwei","email":"wangzhengwei@nstc.com.cn","commits":1,"avatar":"https://avatars.githubusercontent.com/zhengwei?v=4","url":"https://github.com/zhengwei"}]},"filePathRelative":"notes/js/构建时记录git信息并写入json文件中.md","categoryList":[{"id":"4358b5","sort":10000,"name":"notes"},{"id":"8c3807","sort":10003,"name":"js"}],"bulletin":false}`);export{r as comp,B as data};
