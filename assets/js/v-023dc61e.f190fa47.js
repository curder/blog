(self.webpackChunkblog=self.webpackChunkblog||[]).push([[738],{8194:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>p});const p={key:"v-023dc61e",path:"/others/nine-nine-multiplication-table-in-eeach-programming-language.html",title:"九九乘法表",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:3,title:"JS",slug:"js",children:[]},{level:3,title:"PHP",slug:"php",children:[]},{level:3,title:"GoLang",slug:"golang",children:[]}],filePathRelative:"others/nine-nine-multiplication-table-in-eeach-programming-language.md",git:{updatedTime:1625565406e3,contributors:[]}}},2042:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>t});const p=(0,a(6252).uE)('<h1 id="九九乘法表" tabindex="-1"><a class="header-anchor" href="#九九乘法表" aria-hidden="true">#</a> 九九乘法表</h1><p>使用 for 循环在各语言中打印出九九乘法表。</p><h3 id="js" tabindex="-1"><a class="header-anchor" href="#js" aria-hidden="true">#</a> JS</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> x <span class="token operator">&lt;=</span> <span class="token number">9</span><span class="token punctuation">;</span> x<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> y <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> y <span class="token operator">&lt;=</span> x<span class="token punctuation">;</span> y<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        str <span class="token operator">+=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>y<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> * </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>x<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> = </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>y <span class="token operator">*</span> x<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    str <span class="token operator">+=</span> <span class="token string">&quot;\\n&quot;</span>\n<span class="token punctuation">}</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="php" tabindex="-1"><a class="header-anchor" href="#php" aria-hidden="true">#</a> PHP</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>\n\n<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token variable">$x</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token variable">$x</span> <span class="token operator">&lt;=</span> <span class="token number">9</span><span class="token punctuation">;</span> <span class="token operator">++</span><span class="token variable">$x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token variable">$y</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token variable">$y</span> <span class="token operator">&lt;=</span> <span class="token variable">$x</span><span class="token punctuation">;</span> <span class="token operator">++</span><span class="token variable">$y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">echo</span> <span class="token function">sprintf</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;%d * %d = %d  &#39;</span><span class="token punctuation">,</span> <span class="token variable">$y</span><span class="token punctuation">,</span> <span class="token variable">$x</span><span class="token punctuation">,</span> <span class="token variable">$x</span> <span class="token operator">*</span> <span class="token variable">$y</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;\\n&quot;</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="golang" tabindex="-1"><a class="header-anchor" href="#golang" aria-hidden="true">#</a> GoLang</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">for</span> x <span class="token operator">:=</span> <span class="token number">1</span><span class="token punctuation">;</span> x <span class="token operator">&lt;=</span> <span class="token number">9</span> <span class="token punctuation">;</span> x<span class="token operator">++</span>  <span class="token punctuation">{</span>\n    <span class="token keyword">for</span> y <span class="token operator">:=</span> <span class="token number">1</span><span class="token punctuation">;</span> y <span class="token operator">&lt;=</span> x <span class="token punctuation">;</span> y<span class="token operator">++</span>  <span class="token punctuation">{</span>\n        fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d * %d = %d &quot;</span> <span class="token punctuation">,</span> x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> x <span class="token operator">*</span> y <span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>',8),t={render:function(n,s){return p}}}}]);