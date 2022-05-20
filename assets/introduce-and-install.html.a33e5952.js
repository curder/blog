import{_ as t,r as o,o as i,c as p,b as n,a as c,F as l,d as s,e as d}from"./app.25d4da55.js";const r={},u=n("h1",{id:"webpack2\u4ECB\u7ECD\u4E0E\u5B89\u88C5",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#webpack2\u4ECB\u7ECD\u4E0E\u5B89\u88C5","aria-hidden":"true"},"#"),s(" webpack2\u4ECB\u7ECD\u4E0E\u5B89\u88C5")],-1),v=n("p",null,"WebPack\u53EF\u4EE5\u770B\u505A\u662F\u6A21\u5757\u6253\u5305\u673A\uFF1A\u5B83\u505A\u7684\u4E8B\u60C5\u662F\uFF0C\u5206\u6790\u9879\u76EE\u7ED3\u6784\uFF0C\u627E\u5230JavaScript\u6A21\u5757\u4EE5\u53CA\u5176\u5B83\u7684\u4E00\u4E9B\u6D4F\u89C8\u5668\u4E0D\u80FD\u76F4\u63A5\u8FD0\u884C\u7684\u62D3\u5C55\u8BED\u8A00\uFF08Sass\uFF0CTypeScript\u7B49\uFF09\uFF0C\u5E76\u5C06\u5176\u8F6C\u6362\u548C\u6253\u5305\u4E3A\u5408\u9002\u7684\u683C\u5F0F\u4F9B\u6D4F\u89C8\u5668\u4F7F\u7528\u3002",-1),k=["src"],b=n("h2",{id:"webpack2\u7684\u5B89\u88C5",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#webpack2\u7684\u5B89\u88C5","aria-hidden":"true"},"#"),s(" webpack2\u7684\u5B89\u88C5")],-1),m=s("\u5B89\u88C5webpack2\u4E4B\u524D\u9996\u5148\u8981\u5B89\u88C5"),h={href:"https://nodejs.org/zh-cn/",target:"_blank",rel:"noopener noreferrer"},g=s("NodeJs"),q=s("\uFF0C\u5728MacOSX\u4E0A\u63A8\u8350\u4F7F\u7528nvm\u7BA1\u7406NodeJS\u548CNPM\uFF0C\u6D4B\u8BD5\u5B89\u88C5\u7ED3\u679C\u53EF\u4EE5\u4F7F\u7528\uFF1A"),_=d(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">node</span> -v <span class="token comment"># \u67E5\u770BNodeJS\u7248\u672C</span>
v8.11.2

<span class="token function">npm</span> -v <span class="token comment"># \u67E5\u770Bnpm\u7248\u672C</span>
<span class="token number">5.6</span>.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u521D\u59CB\u5316\u4E00\u4E2A\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#\u521D\u59CB\u5316\u4E00\u4E2A\u9879\u76EE" aria-hidden="true">#</a> \u521D\u59CB\u5316\u4E00\u4E2A\u9879\u76EE</h3><p>\u5728\u4F7F\u7528webpack\u4E4B\u524D\uFF0C\u4F7F\u7528<code>npm</code>\u7684\u547D\u4EE4\u521D\u59CB\u5316\u4E00\u4E2A\u9879\u76EE\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> init -y
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u751F\u6210<code>package.json</code>\u6587\u4EF6\uFF0C\u5185\u5BB9\u5982\u4E0B\uFF1A</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;webpack2-study&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.0.0&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;main&quot;</span><span class="token operator">:</span> <span class="token string">&quot;index.js&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;echo \\&quot;Error: no test specified\\&quot; &amp;&amp; exit 1&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;keywords&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;license&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ISC&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6709\u4E86\u8FD9\u4E2A\u6587\u4EF6\uFF0C\u53EF\u4EE5\u4F7F\u7528\u4E0B\u9762\u7684\u547D\u4EE4\u5B89\u88C5webpack2.7.0\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> webpack@2 --save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>\u53C2\u6570 <code>\u2013save-dev</code> \u662F\u8981\u4FDD\u5B58\u5230package.json\u4E2D\u5728\u5F00\u53D1\u65F6\u4F7F\u7528\u8FD9\u4E2A\u5305\uFF0C\u800C\u751F\u4EA7\u73AF\u5883\u4E2D\u4E0D\u4F7F\u7528\u3002</p></blockquote><h3 id="\u751F\u6210\u538B\u7F29\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u751F\u6210\u538B\u7F29\u6587\u4EF6" aria-hidden="true">#</a> \u751F\u6210\u538B\u7F29\u6587\u4EF6</h3><p>\u65B0\u5EFA\u4E00\u4E2A\u6587\u4EF6<code>app/index.js</code>\uFF0C\u5185\u5BB9\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;hello world&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4F7F\u7528 webpack \u547D\u4EE4\u6253\u5305</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>./node_modules/.bin/webpack app/index.js dist/app.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8F93\u51FA\u5185\u5BB9\u7C7B\u4F3C\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Hash: 8e944c5824e00176c2f2
Version: webpack 2.7.0
Time: 63ms
    Asset     Size  Chunks             Chunk Names
bundle.js  2.66 kB       0  [emitted]  main
   [0] ./app/index.js 21 bytes {0} [built]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6253\u5F00\u76EE\u6807\u6587\u4EF6<code>dist/app.js</code>\u53EF\u4EE5\u770B\u5230\u5BF9\u5E94\u7684\u4EE3\u7801\u88ABwebpack\u5904\u7406\u3002</p>`,17);function x(a,f){const e=o("ExternalLinkIcon");return i(),p(l,null,[u,v,n("img",{src:a.$withBase("/images/languages/javascript/webpack2/introduce-and-install/what-is-webpack.png"),alt:""},null,8,k),b,n("p",null,[m,n("a",h,[g,c(e)]),q]),_],64)}var j=t(r,[["render",x],["__file","introduce-and-install.html.vue"]]);export{j as default};
