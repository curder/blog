import{_ as n,e as s}from"./app.1203bebc.js";const a={},e=s(`<h1 id="\u6587\u4EF6\u538B\u7F29" tabindex="-1"><a class="header-anchor" href="#\u6587\u4EF6\u538B\u7F29" aria-hidden="true">#</a> \u6587\u4EF6\u538B\u7F29</h1><p>\u5728webpack\u914D\u7F6E\u8282\u70B9\u4E2D\uFF0C\u53EF\u4EE5\u901A\u8FC7<code>performance</code>\u914D\u7F6E\u53C2\u6570\u663E\u793A\u8B66\u544A\uFF0C\u5E76\u4E14\u901A\u8FC7\u63D2\u4EF6<code>babili-webpack-plugin</code>\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">performance</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">hints</span><span class="token operator">:</span> <span class="token string">&#39;warning&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">maxEntrypointSize</span><span class="token operator">:</span> <span class="token number">100000</span><span class="token punctuation">,</span> <span class="token comment">// bytes</span>
        <span class="token literal-property property">maxAssetSize</span><span class="token operator">:</span> <span class="token number">450000</span><span class="token punctuation">,</span> <span class="token comment">// bytes</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> config<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E0B\u8F7D\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4E0B\u8F7D\u63D2\u4EF6" aria-hidden="true">#</a> \u4E0B\u8F7D\u63D2\u4EF6</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> i babel-minify-webpack-plugin --save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6216\u8005\u4F7F\u7528<code>webpack -p</code>\u53C2\u6570\u8C03\u7528webpack\u81EA\u8EAB\u7684\u6587\u4EF6\u538B\u7F29\u547D\u4EE4\uFF0C\u4F46\u662F\u8FD9\u91CC\u63A8\u8350\u4F7F\u7528\u63D2\u4EF6\u3002</p><h2 id="\u914D\u7F6E\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u63D2\u4EF6" aria-hidden="true">#</a> \u914D\u7F6E\u63D2\u4EF6</h2><p>\u4FEE\u6539<code>webpack.config.js</code>\u6587\u4EF6\u5185\u5BB9\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> MinifyPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;babel-minify-webpack-plugin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// https://github.com/webpack-contrib/babel-minify-webpack-plugin</span>

<span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// ...</span>
        <span class="token keyword">new</span> <span class="token class-name">MinifyPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u6D4B\u8BD5" aria-hidden="true">#</a> \u6D4B\u8BD5</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> run build
<span class="token function">npm</span> run start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,11);function p(i,t){return e}var o=n(a,[["render",p],["__file","file-compression.html.vue"]]);export{o as default};