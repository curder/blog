import{r as e,o as t,c as o,b as n,a as r,F as l,d as s,e as c}from"./app.a3837e36.js";import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";const u={},k=n("h1",{id:"\u914D\u7F6Eeslint\u5B9E\u73B0\u4EE3\u7801\u89C4\u8303\u81EA\u52A8\u6D4B\u8BD5",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u914D\u7F6Eeslint\u5B9E\u73B0\u4EE3\u7801\u89C4\u8303\u81EA\u52A8\u6D4B\u8BD5","aria-hidden":"true"},"#"),s(" \u914D\u7F6EESLint\u5B9E\u73B0\u4EE3\u7801\u89C4\u8303\u81EA\u52A8\u6D4B\u8BD5")],-1),b=s("ESLint\u662F\u4E00\u4E2A\u524D\u7AEFJS\u4EE3\u7801\u7684\u89C4\u8303\u96C6\uFF0C\u5177\u4F53"),d={href:"https://eslint.org/docs/rules/",target:"_blank",rel:"noopener noreferrer"},m=s("\u53C2\u8003\u8FD9\u91CC"),g=s("\u3002"),h=c(`<h2 id="package-json\u4E2D\u7684\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#package-json\u4E2D\u7684\u914D\u7F6E" aria-hidden="true">#</a> package.json\u4E2D\u7684\u914D\u7F6E</h2><p>\u5728\u524D\u7AEF\u9879\u76EE\uFF0C\u4E0D\u4EC5\u4EC5\u662Fwebpack\u9879\u76EE\u4E2D\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4E0B\u9762\u7684\u65B9\u5F0F\u5F15\u5165ESLint\u3002</p><h3 id="\u672C\u5730\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u672C\u5730\u5B89\u88C5" aria-hidden="true">#</a> \u672C\u5730\u5B89\u88C5</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> i eslint --save-dev
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a> \u914D\u7F6E</h3><ul><li>\u4FEE\u6539\u9879\u76EE\u7684<code>package.json</code>\u6587\u4EF6\u5185\u5BB9</li></ul><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;lintjs&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eslint app/ webpack.*.js --cache&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul><li>\u6DFB\u52A0<code>.eslintrc.js</code>\u914D\u7F6E\u6587\u4EF6</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">env</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">browser</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">commonjs</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">es6</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">node</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token string">&#39;eslint:recommended&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">parserOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">sourceType</span><span class="token operator">:</span> <span class="token string">&#39;module&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&#39;comma-dangle&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;always-multiline&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">indent</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token string-property property">&#39;linebreak-style&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;unix&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">quotes</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;single&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">semi</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;always&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token string-property property">&#39;no-unused-vars&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;warn&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token string-property property">&#39;no-console&#39;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> config<span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><blockquote><p>\u4E0A\u8FF0\u6587\u4EF6\u5185\u5BB9\u653E\u5728\u9879\u76EE\u6839\u76EE\u5F55\u4E0B\u7684<code>.eslintrc.js</code>\u4E2D\u3002</p></blockquote><h3 id="\u8FD0\u884C" tabindex="-1"><a class="header-anchor" href="#\u8FD0\u884C" aria-hidden="true">#</a> \u8FD0\u884C</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> run lintjs
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote><p>\u81EA\u52A8\u4FEE\u6B63\u4EE3\u7801\u7684\u89C4\u8303\u9519\u8BEF\u53EF\u4EE5\u4F7F\u7528<code>npm run lintjs -- --fix</code>\uFF0C\u4F46\u662FESLint\u7684\u7248\u672C<code>&gt;= 1.4.0</code>\u3002</p></blockquote><h2 id="eslint\u5728webpack\u4E2D\u7684\u5E94\u7528" tabindex="-1"><a class="header-anchor" href="#eslint\u5728webpack\u4E2D\u7684\u5E94\u7528" aria-hidden="true">#</a> ESLint\u5728webpack\u4E2D\u7684\u5E94\u7528</h2><h3 id="\u5B89\u88C5eslint-loader" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5eslint-loader" aria-hidden="true">#</a> \u5B89\u88C5<code>eslint-loader</code></h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> i eslint-loader --save-dev
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="\u914D\u7F6E-1" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E-1" aria-hidden="true">#</a> \u914D\u7F6E</h3><p>\u914D\u7F6E<code>webpack.config.js</code>\u6587\u4EF6\u5185\u5BB9\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">host</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">HOST</span><span class="token punctuation">,</span> <span class="token comment">// Defaults to \`localhost\`</span>
        <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">9000</span><span class="token punctuation">,</span> <span class="token comment">// Defaults to 8080</span>
        <span class="token literal-property property">overlay</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">errors</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token literal-property property">warnings</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// ...</span>
    <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                <span class="token literal-property property">enforce</span><span class="token operator">:</span> <span class="token string">&#39;pre&#39;</span><span class="token punctuation">,</span>

                <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;eslint-loader&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">emitWarning</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p>\u914D\u7F6E<code>modules</code>\u9009\u9879\u548C<code>devServer</code>\u4E0B\u7684<code>overlay</code>\u9009\u9879\uFF08\u5728\u6D4F\u89C8\u5668\u4E2D\u9650\u5236\u9519\u8BEF\u548C\u8B66\u544A\u4FE1\u606F\uFF09\u3002</p>`,20),y=["src"];function v(a,f){const p=e("ExternalLinkIcon");return t(),o(l,null,[k,n("p",null,[b,n("a",d,[m,r(p)]),g]),h,n("img",{src:a.$withBase("/images/languages/javascript/webpack2/configuring-eslint-to-implement-code-specification-autotest/configuring-eslint-to-implement-code-specification-autotest-use-eslint-loader-overlay-error-and-warning.png"),alt:""},null,8,y)],64)}var j=i(u,[["render",v]]);export{j as default};
