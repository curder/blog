import{_ as s,e as n}from"./app.25d4da55.js";const a={},e=n(`<h1 id="\u52A0\u8F7Dcss\u7684\u76F8\u5173\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u52A0\u8F7Dcss\u7684\u76F8\u5173\u914D\u7F6E" aria-hidden="true">#</a> \u52A0\u8F7DCSS\u7684\u76F8\u5173\u914D\u7F6E</h1><p>CSS\u76F8\u5173\u7684loader\u5305\u542B<code>css-loader</code>\u548C<code>style-loader</code>\u3002</p><p>\u5176\u4E2D<code>css-loader</code>\u4E3B\u8981\u662F\u5904\u7406<code>@import</code>\u548C<code>url()</code>\uFF0C\u5982\u679C<code>@import</code>\u52A0\u8F7D\u7684\u662F\u5916\u90E8\u8D44\u6E90\uFF0C\u90A3\u4E48\u5C31\u8DF3\u8FC7\uFF0C\u53EA\u5904\u7406\u672C\u5730\u8D44\u6E90\u3002 \u800C<code>style-loader</code>\u5904\u7406style\u6807\u7B7E\u3002</p><h2 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> i css-loader style-loader --save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a> \u914D\u7F6E</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token comment">// ...</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token string">&#39;style-loader&#39;</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u6CE8\u610F\u5728module\u4E2D\u914D\u7F6E\u7684<code>style-loader</code>\u548C<code>css-loader</code>\u7684\u5148\u540E\u987A\u5E8F\uFF0Cwebpack\u5728\u89E3\u6790\u65F6\uFF0C\u662F\u4ECE\u53F3\u5230\u5DE6\u89E3\u6790\u7684\u3002</p></blockquote><h2 id="\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u6D4B\u8BD5" aria-hidden="true">#</a> \u6D4B\u8BD5</h2><p>\u5728webpack\u914D\u7F6E\u7684\u5165\u53E3\u6587\u4EF6<code>app/index.css</code>\u4E2D\u5F15\u5165\u4E00\u4E2A<code>main.css</code>\u6587\u4EF6\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// ...</span>
<span class="token keyword">import</span> <span class="token string">&#39;./main.css&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7F16\u5199\u8FD9\u4E2Acss\u6587\u4EF6\uFF0C\u5185\u5BB9\u5982\u4E0B\uFF1A</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">body</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #eaeaea<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EF\u4EE5\u770B\u5230\u6211\u4EEC\u5728<code>main.css</code>\u4E2D\u7F16\u5199\u7684CSS\u6837\u5F0F\u4EE3\u7801\u88ABwebpack\u7F16\u8BD1\u6210<code>exports.push([module.i, &quot;body {\\n background-color: #eaeaea;\\n}\\n&quot;, &quot;&quot;]);</code>\uFF0C\u6700\u7EC8\u88AB\u5199\u5165\u5230HTML\u7684head\u4E2D\u5B9E\u73B0\u4F5C\u7528\u3002</p>`,14);function p(o,t){return e}var l=s(a,[["render",p],["__file","loading-css-related-configuration.html.vue"]]);export{l as default};
