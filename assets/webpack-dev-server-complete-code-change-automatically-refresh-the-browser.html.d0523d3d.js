import{_ as t,r as o,o as p,c as r,b as n,a as c,F as i,e,d as s}from"./app.1203bebc.js";const l={},d=e(`<h1 id="webpack-dev-server\u5B8C\u6210\u4EE3\u7801\u66F4\u6539\u81EA\u52A8\u5237\u65B0" tabindex="-1"><a class="header-anchor" href="#webpack-dev-server\u5B8C\u6210\u4EE3\u7801\u66F4\u6539\u81EA\u52A8\u5237\u65B0" aria-hidden="true">#</a> webpack-dev-server\u5B8C\u6210\u4EE3\u7801\u66F4\u6539\u81EA\u52A8\u5237\u65B0</h1><p>\u5B89\u88C5\u597Dwebpack\u5E76\u914D\u7F6E\u547D\u4EE4\u4E4B\u540E\uFF0C\u53EF\u4EE5\u5F88\u65B9\u4FBF\u7684\u901A\u8FC7<code>npm run build</code>\u751F\u6210\u538B\u7F29\u4EE3\u7801\uFF0C\u4F46\u662F\u6BCF\u6B21\u5F53\u66F4\u65B0\u5B8C\u4EE3\u7801\u540E\uFF0C\u8981\u91CD\u590D\u6267\u884C\u547D\u4EE4\u624D\u80FD\u6B63\u5E38\u6784\u5EFA\u597D\u4EE3\u7801\u3002</p><p>\u90A3\u4E48\u53EF\u4E0D\u53EF\u4EE5\u5728\u6211\u4EEC\u66F4\u65B0\u5B8C\u4EE3\u7801\u540E\uFF0C\u81EA\u52A8\u7F16\u8BD1\u5E76\u4E14\u5237\u65B0\u6D4F\u89C8\u5668\u5462\uFF1F\u53EF\u4EE5\u901A\u8FC7<code>webpack-dev-server</code>\u8FD9\u4E2A\u8F6F\u4EF6\u5305\u5B9E\u73B0\u3002</p><h2 id="\u5B89\u88C5webpack-dev-server" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5webpack-dev-server" aria-hidden="true">#</a> \u5B89\u88C5webpack-dev-server</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> i webpack-dev-server --save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8FD9\u91CC\u9700\u8981\u6CE8\u610F\u7684\u662F\u4E0B\u8F7D\u7684webpack-dev-server\u7684\u7248\u672C\u4E0Ewebpack\u8981\u5339\u914D\uFF0C\u4F8B\u5982\uFF1A</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;webpack&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^2.7.0&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;webpack-dev-server&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^2.11.2&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6267\u884C\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u6267\u884C\u547D\u4EE4" aria-hidden="true">#</a> \u6267\u884C\u547D\u4EE4</h2><p>\u4FEE\u6539\u9879\u76EE<code>package.json</code>\u4E2D\u7684<code>scripts</code>\u4E2D\u6DFB\u52A0<code>&quot;start&quot;: &quot;webpack-dev-server --env development&quot;</code></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;echo \\&quot;Error: no test specified\\&quot; &amp;&amp; exit 1&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;start&quot;</span><span class="token operator">:</span> <span class="token string">&quot;webpack-dev-server --env development&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;webpack --env production&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u914D\u7F6E\u597D\u5FEB\u6377\u547D\u4EE4\u540E\uFF0C\u901A\u8FC7\u547D\u4EE4</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">npm</span> run start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u9ED8\u8BA4\u542F\u52A8\u7684\u662F<code>http://localhost:8080/</code>\uFF0C\u76D1\u542C\u6587\u4EF6\u53D8\u5316\uFF0C\u5E76\u81EA\u52A8\u6784\u5EFA\u548C\u5237\u65B0\u6D4F\u89C8\u5668\u3002</p><h2 id="\u914D\u7F6E-webpack-dev-server" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E-webpack-dev-server" aria-hidden="true">#</a> \u914D\u7F6E webpack-dev-server</h2>`,14),u=s("\u5B98\u65B9\u6587\u6863"),v={href:"https://webpack.js.org/configuration/dev-server/",target:"_blank",rel:"noopener noreferrer"},k=s("\u53C2\u8003\u8FD9\u91CC"),b=s("\u3002"),m=e(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">//...</span>
    <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">contentBase</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;dist&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">host</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">HOST</span><span class="token punctuation">,</span>
        <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">9000</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function h(g,_){const a=o("ExternalLinkIcon");return p(),r(i,null,[d,n("p",null,[u,n("a",v,[k,c(a)]),b]),m],64)}var w=t(l,[["render",h],["__file","webpack-dev-server-complete-code-change-automatically-refresh-the-browser.html.vue"]]);export{w as default};