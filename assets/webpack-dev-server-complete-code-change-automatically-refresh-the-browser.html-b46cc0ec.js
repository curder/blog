import{_ as t,M as p,p as o,q as r,R as n,t as s,N as c,a1 as e}from"./framework-96b046e1.js";const i={},l=e(`<h1 id="webpack-dev-server完成代码更改自动刷新" tabindex="-1"><a class="header-anchor" href="#webpack-dev-server完成代码更改自动刷新" aria-hidden="true">#</a> webpack-dev-server完成代码更改自动刷新</h1><p>安装好webpack并配置命令之后，可以很方便的通过<code>npm run build</code>生成压缩代码，但是每次当更新完代码后，要重复执行命令才能正常构建好代码。</p><p>那么可不可以在我们更新完代码后，自动编译并且刷新浏览器呢？可以通过<code>webpack-dev-server</code>这个软件包实现。</p><h2 id="安装webpack-dev-server" tabindex="-1"><a class="header-anchor" href="#安装webpack-dev-server" aria-hidden="true">#</a> 安装webpack-dev-server</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i webpack-dev-server --save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这里需要注意的是下载的webpack-dev-server的版本与webpack要匹配，例如：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;webpack&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^2.7.0&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;webpack-dev-server&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^2.11.2&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="执行命令" tabindex="-1"><a class="header-anchor" href="#执行命令" aria-hidden="true">#</a> 执行命令</h2><p>修改项目<code>package.json</code>中的<code>scripts</code>中添加<code>&quot;start&quot;: &quot;webpack-dev-server --env development&quot;</code></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;echo \\&quot;Error: no test specified\\&quot; &amp;&amp; exit 1&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;start&quot;</span><span class="token operator">:</span> <span class="token string">&quot;webpack-dev-server --env development&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;webpack --env production&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置好快捷命令后，通过命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">npm</span> run start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>默认启动的是<code>http://localhost:8080/</code>，监听文件变化，并自动构建和刷新浏览器。</p><h2 id="配置-webpack-dev-server" tabindex="-1"><a class="header-anchor" href="#配置-webpack-dev-server" aria-hidden="true">#</a> 配置 webpack-dev-server</h2>`,14),d={href:"https://webpack.js.org/configuration/dev-server/",target:"_blank",rel:"noopener noreferrer"},u=e(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">//...</span>
    <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">contentBase</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;dist&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">host</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">HOST</span><span class="token punctuation">,</span>
        <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">9000</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function v(k,b){const a=p("ExternalLinkIcon");return o(),r("div",null,[l,n("p",null,[s("官方文档"),n("a",d,[s("参考这里"),c(a)]),s("。")]),u])}const h=t(i,[["render",v],["__file","webpack-dev-server-complete-code-change-automatically-refresh-the-browser.html.vue"]]);export{h as default};
