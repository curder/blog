import{r as p,o as e,c as t,b as n,a as o,F as c,d as s,e as l}from"./app.a3837e36.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";const i={},r=n("h1",{id:"javascript\u4E2D\u7684promise",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#javascript\u4E2D\u7684promise","aria-hidden":"true"},"#"),s(" Javascript\u4E2D\u7684Promise")],-1),k=n("h2",{id:"\u91CA\u4E49",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u91CA\u4E49","aria-hidden":"true"},"#"),s(" \u91CA\u4E49")],-1),d=n("p",null,"\u8BCD\u8BED\u672C\u610F\uFF1A\u8BB8\u8BFA\uFF1B\u5141\u8BFA\uFF1B\uFF08\u6709\uFF09\u53EF\u80FD",-1),m={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise",target:"_blank",rel:"noopener noreferrer"},b=s("MDN"),h=s("\uFF1APromise \u5BF9\u8C61\u7528\u4E8E\u8868\u793A\u4E00\u4E2A\u5F02\u6B65\u64CD\u4F5C\u7684\u6700\u7EC8\u72B6\u6001\uFF08\u5B8C\u6210\u6216\u5931\u8D25\uFF09\uFF0C\u4EE5\u53CA\u5176\u8FD4\u56DE\u7684\u503C\u3002"),f=l(`<ul><li>\u6309\u7167\u7528\u9014\u6765\u89E3\u91CA <ul><li>\u4E3B\u8981\u7528\u4E8E\u5F02\u6B65\u8BA1\u7B97</li><li>\u53EF\u4EE5\u5C06\u5F02\u6B65\u64CD\u4F5C\u961F\u5217\u5316\uFF0C\u6309\u7167\u671F\u671B\u7684\u987A\u5E8F\u6267\u884C\uFF0C\u8FD4\u56DE\u7B26\u5408\u9884\u671F\u7684\u7ED3\u679C</li><li>\u53EF\u4EE5\u5728\u5BF9\u8C61\u4E4B\u95F4\u4F20\u9012\u548C\u64CD\u4F5CPromise\uFF0C\u5E2E\u52A9\u6211\u4EEC\u5904\u7406\u961F\u5217</li></ul></li></ul><h2 id="promise\u89E3\u51B3\u4EC0\u4E48\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#promise\u89E3\u51B3\u4EC0\u4E48\u95EE\u9898" aria-hidden="true">#</a> Promise\u89E3\u51B3\u4EC0\u4E48\u95EE\u9898\uFF1F</h2><h3 id="javascript\u4E2D\u5305\u542B\u4E86\u5927\u91CF\u7684\u5F02\u6B65\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#javascript\u4E2D\u5305\u542B\u4E86\u5927\u91CF\u7684\u5F02\u6B65\u64CD\u4F5C" aria-hidden="true">#</a> Javascript\u4E2D\u5305\u542B\u4E86\u5927\u91CF\u7684\u5F02\u6B65\u64CD\u4F5C</h3><p>\u5728\u90A3\u4E2A\u7F51\u7EDC\u8FD8\u4E0D\u662F\u5F88\u53D1\u8FBE\u7684\u5E74\u4EE3\uFF0C\u6240\u6709\u7684\u524D\u540E\u53F0\u6821\u9A8C\u5DE5\u4F5C\u90FD\u9700\u8981\u63D0\u4EA4\u7ED9\u540E\u53F0\u53BB\u5B8C\u6210\uFF0C\u4E00\u65E6\u7528\u6237\u586B\u5199\u7684\u8868\u5355\u6709\u95EE\u9898\uFF0C\u5F80\u5F80\u610F\u5473\u7740\u91CD\u65B0\u586B\u5199\u5168\u90E8\u8868\u5355\u7684\u7ED3\u679C\uFF0C\u4ECE\u800C\u5BFC\u81F4\u5927\u91CF\u7684\u7528\u6237\u6D41\u5931\u3002\u4E3A\u4E86\u6539\u8FDB\u8FD9\u4E2A\u7528\u6237\u7684\u4F53\u9A8C\uFF0C\u4FBF\u4EA7\u751F\u7684Javascript\u3002</p><p>\u53EF\u4EE5\u8BF4\uFF0CJavascript\u8FD9\u95E8\u8BED\u8A00\u5C31\u662F\u4E3A\u68C0\u67E5\u8868\u5355\u800C\u751F\u3002</p><p>\u521B\u9020\u5B83\u7684\u9996\u8981\u76EE\u6807\u5C31\u662F\u64CD\u4F5CDOM\uFF0C\u80FD\u591F\u65B9\u4FBF\u7684\u4ECE\u8868\u5355\u4E2D\u8BFB\u53D6\u6570\u636E\uFF0C\u80FD\u591F\u63D0\u793A\u7528\u6237\u54EA\u513F\u586B\u5199\u6709\u95EE\u9898\uFF0C\u6240\u4EE5Javascript\u662F\u4E00\u95E8UI\u8BED\u8A00\uFF0C\u800CUI\u8BED\u8A00\u9020\u6210\u754C\u9762\u51BB\u7ED3\u662F\u5927\u5FCC\uFF0C\u6240\u4EE5Javascript\u4E2D\u5F88\u591A\u64CD\u4F5C\u90FD\u662F\u5F02\u6B65\u7684\u3002</p><h3 id="\u540C\u6B65\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u540C\u6B65\u64CD\u4F5C" aria-hidden="true">#</a> \u540C\u6B65\u64CD\u4F5C</h3><p>\u5047\u8BBE\u7528\u6237\u53BB\u5230\u4E00\u5BB6\u9910\u5385\u5403\u996D\uFF0C\u62DB\u547C\u670D\u52A1\u5458\u62FF\u83DC\u5355\u70B9\u83DC\uFF0C\u7136\u800C\u670D\u52A1\u5458\u544A\u77E5\uFF1A\u5BF9\u4E0D\u8D77\uFF0C\u6211\u662F<strong>\u540C\u6B65</strong>\u670D\u52A1\u5458\uFF0C\u6211\u8981\u670D\u52A1\u5B8C\u524D\u9762\u7684\u8FD9\u4E00\u684C\u5BA2\u6237\u624D\u80FD\u62DB\u547C\u4F60\u3002</p><p>\u4F5C\u4E3A\u7528\u6237\uFF0C\u660E\u660E\u90A3\u684C\u5BA2\u6237\u5DF2\u7ECF\u5403\u4E0A\u4E86\u83DC\uFF0C\u800C\u4F60\u53EA\u662F\u9700\u8981\u83DC\u5355\u8FD9\u4E2A\u7B80\u5355\u7684\u5C0F\u52A8\u4F5C\uFF0C\u670D\u52A1\u5458\u5374\u8981\u7B49\u5230\u522B\u4EBA\u5B8C\u6210\u4E00\u4E2A\u5927\u52A8\u4F5C\u5B8C\u6210\u4E4B\u540E\u624D\u80FD\u62DB\u547C\u4F60\u3002</p><p>\u5373\uFF1A\u987A\u5E8F\u7684\u4EA4\u4ED8\u7684\u5DE5\u4F5C <code>1 2 3 4</code>\uFF0C\u5FC5\u987B\u6309\u7167 <code>1 2 3 4</code>\u7684\u987A\u5E8F\u6267\u884C\u3002</p><h3 id="\u5F02\u6B65\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u5F02\u6B65\u64CD\u4F5C" aria-hidden="true">#</a> \u5F02\u6B65\u64CD\u4F5C</h3><p>\u5C06\u8017\u65F6\u5F88\u957F\u7684A\u4EA4\u4ED8\u7684\u5DE5\u4F5C\u4EA4\u7ED9\u7CFB\u7EDF\u4E4B\u540E\uFF0C\u5C31\u53BB\u7EE7\u7EED\u505AB\u4EA4\u4ED8\u7684\u5DE5\u4F5C\u3002\u7B49\u5230\u7CFB\u7EDF\u5B8C\u6210\u524D\u9762\u7684\u5DE5\u4F5C\u4E4B\u540E\uFF0C\u518D\u901A\u8FC7\u56DE\u8C03\u6216\u8005\u4E8B\u4EF6\uFF0C\u7EE7\u7EED\u505AA\u5269\u4E0B\u7684\u5DE5\u4F5C\u3002</p><p>\u4ECE\u89C2\u5BDF\u8005\u7684\u89D2\u5EA6\u770B\u6765\uFF0CAB\u5DE5\u4F5C\u7684\u5B8C\u6210\u987A\u5E8F\u548C\u4EA4\u4ED8\u4ED6\u4EEC\u7684\u65F6\u95F4\u987A\u5E8F\u65E0\u5173\uFF0C\u6240\u4EE5\u53EB\u505A\u201C\u5F02\u6B65\u201D\u3002</p><h3 id="\u5F02\u6B65\u64CD\u4F5C\u7684\u5E38\u89C1\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u5F02\u6B65\u64CD\u4F5C\u7684\u5E38\u89C1\u8BED\u6CD5" aria-hidden="true">#</a> \u5F02\u6B65\u64CD\u4F5C\u7684\u5E38\u89C1\u8BED\u6CD5</h3><ul><li>\u4E8B\u4EF6\u76D1\u542C\u548C\u76F8\u5E94</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;start&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> start<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u5F53\u7528\u6237\u70B9\u51FB\u4E86id\u4E3Astart\u7684\u5143\u7D20\uFF0C\u4F1A\u89E6\u53D1start\u51FD\u6570</span>

<span class="token keyword">function</span> <span class="token function">start</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u54CD\u5E94\u4E8B\u4EF6\uFF0C\u8FDB\u884C\u76F8\u5E94\u64CD\u4F5C</span>
<span class="token punctuation">}</span>

<span class="token comment">// jQuery\u7528\`.on()\`\u4E5F\u662F\u4E8B\u4EF6\u76D1\u542C</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;#start&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> start<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ul><li>\u56DE\u8C03</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>$<span class="token punctuation">.</span><span class="token function">ajax</span><span class="token punctuation">(</span><span class="token string">&#39;http://www.google.com.cn&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">result</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u8FD9\u91CC\u5C31\u662F\u6210\u529F\u7684\u56DE\u8C03\u5904\u7406\u51FD\u6570\u4E86</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u6216\u8005\u9875\u9762\u52A0\u8F7D\u5B8C\u6BD5\u540E\u56DE\u8C03</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u8FD9\u91CC\u4E5F\u662F\u56DE\u8C03\u5904\u7406\u51FD\u6570</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="promise\u8BE6\u89E3" tabindex="-1"><a class="header-anchor" href="#promise\u8BE6\u89E3" aria-hidden="true">#</a> Promise\u8BE6\u89E3</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span>
    <span class="token comment">/* \u6267\u884C\u5668 executor */</span>
    <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">resole<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u6570\u636E\u5904\u7406\u5B8C\u6210</span>
        <span class="token function">reject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u6570\u636E\u5904\u7406\u9519\u8BEF</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token constant">A</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u6210\u529F\uFF0C\u4E0B\u4E00\u6B65</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token constant">B</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5931\u8D25\uFF0C\u505A\u76F8\u5E94\u5904\u7406</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>Promise\u662F\u4E00\u4E2A\u4EE3\u7406\u5BF9\u8C61\uFF0C\u5B83\u548C\u539F\u5148\u8981\u519B\u884C\u7684\u64CD\u4F5C\u5E76\u65E0\u5173\u7CFB\u3002\u5B83\u901A\u8FC7\u5F15\u5165\u4E00\u4E2A\u56DE\u8C03\uFF0C\u907F\u514D\u66F4\u591A\u7684\u56DE\u8C03\u3002</p><h3 id="promise\u76843\u79CD\u72B6\u6001" tabindex="-1"><a class="header-anchor" href="#promise\u76843\u79CD\u72B6\u6001" aria-hidden="true">#</a> Promise\u76843\u79CD\u72B6\u6001</h3><ul><li><code>pending</code> [\u5F85\u5B9A] \u521D\u59CB\u5316\u72B6\u6001</li><li><code>fufilled</code> [\u5B9E\u73B0] \u64CD\u4F5C\u6210\u529F</li><li><code>rejected</code> [\u88AB\u5426\u51B3] \u64CD\u4F5C\u5931\u8D25</li></ul><p>\u5F53 promise \u72B6\u6001\u53D1\u751F\u6539\u53D8\u540E\uFF0C\u4F1A\u89E6\u53D1<code>.then()</code>\u91CC\u7684\u54CD\u5E94\u51FD\u6570\u5904\u7406\u540E\u7EED\u6B65\u9AA4\u3002</p><p>Promise \u72B6\u6001\u4E00\u7ECF\u6539\u53D8\uFF0C\u4E0D\u4F1A\u518D\u53D8\u3002</p><h3 id="\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a> \u793A\u4F8B</h3><h4 id="\u5B9A\u65F6\u6267\u884C\u7B80\u5355\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u65F6\u6267\u884C\u7B80\u5355\u793A\u4F8B" aria-hidden="true">#</a> \u5B9A\u65F6\u6267\u884C\u7B80\u5355\u793A\u4F8B</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;here we go&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span> <span class="token parameter">resolve</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">value</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> value <span class="token operator">+</span> <span class="token string">&#39; world&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u5728\u63A7\u5236\u53F0\u8F93\u51FA&quot;here we go&quot;\u76842\u79D2\u540E\u5728\u8F93\u51FA&quot;hello world&quot;</p><h4 id="\u5206\u4E24\u6B21\u987A\u5E8F\u6267\u884C" tabindex="-1"><a class="header-anchor" href="#\u5206\u4E24\u6B21\u987A\u5E8F\u6267\u884C" aria-hidden="true">#</a> \u5206\u4E24\u6B21\u987A\u5E8F\u6267\u884C</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;here we go&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span> <span class="token parameter">resolve</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span> <span class="token parameter">value</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span> <span class="token parameter">resolve</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token function">setTimeout</span><span class="token punctuation">(</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;world&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">value</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> value <span class="token operator">+</span> <span class="token string">&#39; world&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>\u5728\u63A7\u5236\u53F0\u8F93\u51FA&quot;here we go&quot;\u76842\u79D2\u540E\u5728\u8F93\u51FA&quot;hello&quot;\uFF0C\u518D\u8FC72\u79D2\u540E\u53C8\u4F1A\u8F93\u51FA&quot;world world&quot;</p><h4 id="\u5BF9\u5DF2\u5B8C\u6210\u7684promise\u6267\u884Cthen" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u5DF2\u5B8C\u6210\u7684promise\u6267\u884Cthen" aria-hidden="true">#</a> \u5BF9\u5DF2\u5B8C\u6210\u7684Promise\u6267\u884Cthen</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;here we go&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> promise <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span> <span class="token parameter">resolve</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;the promise fulfilled&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;hello world&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    promise<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">value</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>\u5728\u63A7\u5236\u53F0\u8F93\u51FA&quot;here we go&quot;\u76841\u79D2\u540E\u5728\u8F93\u51FA&quot;the promise fulfilled&quot;\uFF0C\u518D\u8FC72\u79D2\u540E\u53C8\u4F1A\u8F93\u51FA&quot;hello world&quot;</p><h3 id="then" tabindex="-1"><a class="header-anchor" href="#then" aria-hidden="true">#</a> <code>.then()</code></h3><ul><li><code>.then()</code> \u63A5\u53D7\u4E24\u4E2A\u51FD\u6570\u4F5C\u4E3A\u53C2\u6570\uFF0C\u5206\u522B\u4EE3\u8868<code>fulfilled</code>\u548C<code>rejected</code></li><li><code>.then()</code>\u8FD4\u56DE\u4E00\u4E2A\u65B0\u7684Promise\u793A\u4F8B\uFF0C\u6240\u4EE5\u5B83\u53EF\u4EE5\u94FE\u5F0F\u8C03\u7528</li><li>\u5F53\u524D\u9762\u7684 Promise \u72B6\u6001\u6539\u53D8\u65F6\uFF0C<code>.then()</code>\u6839\u636E\u5176\u6700\u7EC8\u72B6\u6001\uFF0C\u9009\u62E9\u7279\u5B9A\u7684\u54CD\u5E94\u51FD\u6570\u6267\u884C</li><li>\u72B6\u6001\u54CD\u5E94\u51FD\u6570\u53EF\u4EE5\u8FD4\u56DE\u65B0\u7684Promise\u6216\u8005\u5176\u4ED6\u503C\uFF0C\u5982\u679C\u8FD4\u56DE\u65B0\u7684Promise\uFF0C\u90A3\u4E48\u4E0B\u4E00\u7EA7\u7684<code>.then()</code>\u4F1A\u5728\u65B0\u7684Promise\u72B6\u6001\u6539\u53D8\u4E4B\u540E\u6267\u884C\uFF1B\u5982\u679C\u8FD4\u56DE\u5176\u4ED6\u4EFB\u4F55\u503C\uFF0C\u5219\u4F1A\u7ACB\u523B\u6267\u884C\u4E0B\u4E00\u7EA7<code>.then()</code></li></ul><h2 id="promise\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#promise\u51FD\u6570" aria-hidden="true">#</a> Promise\u51FD\u6570</h2><h3 id="promise-all" tabindex="-1"><a class="header-anchor" href="#promise-all" aria-hidden="true">#</a> <code>Promise.all()</code></h3><p>\u6279\u91CF\u6267\u884C\uFF0C<code>Promise.all([p1, p2, p3, ...])</code>\u7528\u4E8E\u5C06\u591A\u4E2APromise\u5B9E\u4F8B\u5305\u88C5\u6210\u4E00\u4E2A\u65B0\u7684Promise\u5B9E\u4F8B\uFF0C\u8FD4\u56DE\u7684\u5B9E\u4F8B\u662F\u666E\u901A\u7684Promise\uFF1B\u5B83\u63A5\u53D7\u4E00\u4E2A\u6570\u7EC4\u4F5C\u4E3A\u53C2\u6570\uFF0C\u6570\u7EC4\u91CC\u53EF\u4EE5\u662FPromise\u5BF9\u8C61\uFF0C\u4E5F\u53EF\u4EE5\u662F\u522B\u7684\u503C\uFF0C\u53EA\u6709Promise\u4F1A\u7B49\u5F85\u72B6\u6001\u6539\u53D8\u3002</p><p>\u5F53\u6240\u6709\u5B50Promise\u90FD\u5B8C\u6210\uFF0C\u8BE5Promise\u5B8C\u6210\uFF0C\u8FD4\u56DE\u503C\u662F\u5168\u90E8\u503C\u7684\u6570\u7EC4\uFF1B\u6709\u4EFB\u4F55\u4E00\u4E2A\u5931\u8D25\uFF0C\u8BE5Promise\u5931\u8D25\uFF0C\u8FD4\u56DE\u503C\u662F\u7B2C\u4E00\u4E2A\u5931\u8D25\u7684\u5B50Promise\u7684\u7ED3\u679C\u3002</p><h3 id="promise-resolve" tabindex="-1"><a class="header-anchor" href="#promise-resolve" aria-hidden="true">#</a> <code>Promise.resolve()</code></h3><p>\u8FD4\u56DE\u4E00\u4E2A<code>fulfilled</code>\u7684Promise\u5B9E\u4F8B\uFF0C\u6216\u539F\u59CBPromise\u5B9E\u4F8B\u3002</p><ul><li>\u53C2\u6570\u4E3A\u7A7A\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u72B6\u6001\u4E3Afulfilled\u7684Promise\u5B9E\u4F8B</li><li>\u53C2\u6570\u662F\u4E00\u4E2A\u8DDFPromise\u65E0\u5173\u7684\u503C\uFF0C\u540C\u4E0A\uFF0C\u4E0D\u8FC7fulfuilled\u54CD\u5E94\u51FD\u6570\u4F1A\u5F97\u5230\u8FD9\u4E2A\u53C2\u6570</li><li>\u53C2\u6570\u4E3APromise\u5B9E\u4F8B\uFF0C\u5219\u8FD4\u56DE\u8BE5\u5B9E\u4F8B\uFF0C\u4E0D\u505A\u4EFB\u4F55\u4FEE\u6539</li><li>\u53C2\u6570\u4E3Athenable\uFF0C\u7ACB\u523B\u6267\u884C\u5B83\u7684<code>.then()</code></li></ul><h3 id="promise-reject" tabindex="-1"><a class="header-anchor" href="#promise-reject" aria-hidden="true">#</a> <code>Promise.reject()</code></h3><p>\u8FD4\u56DE\u4E00\u4E2Arejected\u7684Promise\u5B9E\u4F8B\u3002</p><ul><li>\u53C2\u6570\u4E3A\u7A7A\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u72B6\u6001\u4E3Afulfilled\u7684Promise\u5B9E\u4F8B</li><li>\u53C2\u6570\u662F\u4E00\u4E2A\u8DDFPromise\u65E0\u5173\u7684\u503C\uFF0C\u540C\u4E0A\uFF0C\u4E0D\u8FC7fulfuilled\u54CD\u5E94\u51FD\u6570\u4F1A\u5F97\u5230\u8FD9\u4E2A\u53C2\u6570</li><li>\u53C2\u6570\u4E3APromise\u5B9E\u4F8B\uFF0C\u5219\u8FD4\u56DE\u8BE5\u5B9E\u4F8B\uFF0C\u4E0D\u505A\u4EFB\u4F55\u4FEE\u6539</li></ul><h3 id="promise-rece" tabindex="-1"><a class="header-anchor" href="#promise-rece" aria-hidden="true">#</a> <code>Promise.rece()</code></h3><p>\u7C7B\u4F3C<code>Promise.all()</code>\uFF0C\u533A\u522B\u5728\u4E8E\u5B83\u6709\u4EFB\u610F\u4E00\u4E2A\u5B8C\u6210\u5C31\u7B97\u5B8C\u6210\u3002</p>`,49);function g(v,P){const a=p("ExternalLinkIcon");return e(),t(c,null,[r,k,d,n("p",null,[n("a",m,[b,o(a)]),h]),f],64)}var x=u(i,[["render",g]]);export{x as default};
