(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2438],{6864:(s,n,a)=>{"use strict";a.r(n),a.d(n,{data:()=>e});const e={key:"v-209002a0",path:"/languages/laravel/livewire/how-to-use-events.html",title:"Livewire 事件",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"事件发送",slug:"事件发送",children:[{level:3,title:"从模版",slug:"从模版",children:[]},{level:3,title:"从组件类",slug:"从组件类",children:[]},{level:3,title:"全局JS",slug:"全局js",children:[]}]},{level:2,title:"事件监听",slug:"事件监听",children:[{level:3,title:"组件监听",slug:"组件监听",children:[]},{level:3,title:"JS监听",slug:"js监听",children:[]}]},{level:2,title:"事件参数",slug:"事件参数",children:[{level:3,title:"在组件中接收参数",slug:"在组件中接收参数",children:[]},{level:3,title:"在JS中接收参数",slug:"在js中接收参数",children:[]}]},{level:2,title:"事件范围",slug:"事件范围",children:[{level:3,title:"对父侦听器的范围 emitUp",slug:"对父侦听器的范围-emitup",children:[]},{level:3,title:"按名称确定组件的范围 emitTo",slug:"按名称确定组件的范围-emitto",children:[]},{level:3,title:"自我界定 emitSelf",slug:"自我界定-emitself",children:[]}]},{level:2,title:"调度浏览器事件",slug:"调度浏览器事件",children:[]}],filePathRelative:"languages/laravel/livewire/how-to-use-events.md",git:{updatedTime:1628058202e3,contributors:[]}}},1:(s,n,a)=>{"use strict";a.r(n),a.d(n,{default:()=>i});var e=a(6252);const p=(0,e.uE)('<h1 id="livewire-事件" tabindex="-1"><a class="header-anchor" href="#livewire-事件" aria-hidden="true">#</a> Livewire 事件</h1><p>Livewire 组件可以通过全局事件系统相互通信。只要两个 Livewire 组件位于同一页面上，它们就可以使用事件和侦听器进行通信。</p><h2 id="事件发送" tabindex="-1"><a class="header-anchor" href="#事件发送" aria-hidden="true">#</a> 事件发送</h2><p>有多种方法可以从 Livewire 组件触发事件。</p><h3 id="从模版" tabindex="-1"><a class="header-anchor" href="#从模版" aria-hidden="true">#</a> 从模版</h3><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name"><span class="token namespace">wire:</span>click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>$emit(<span class="token punctuation">&#39;</span>postAdded<span class="token punctuation">&#39;</span>)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote><p>通过 <code>$emit()</code> 方法，可以发送事件</p></blockquote><h3 id="从组件类" tabindex="-1"><a class="header-anchor" href="#从组件类" aria-hidden="true">#</a> 从组件类</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;postAdded&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="全局js" tabindex="-1"><a class="header-anchor" href="#全局js" aria-hidden="true">#</a> 全局JS</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>\n    Livewire<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;postAdded&#39;</span><span class="token punctuation">)</span>\n<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="事件监听" tabindex="-1"><a class="header-anchor" href="#事件监听" aria-hidden="true">#</a> 事件监听</h2><h3 id="组件监听" tabindex="-1"><a class="header-anchor" href="#组件监听" aria-hidden="true">#</a> 组件监听</h3><h4 id="静态事件监听" tabindex="-1"><a class="header-anchor" href="#静态事件监听" aria-hidden="true">#</a> 静态事件监听</h4><p>事件侦听器在 <code>$listeners</code> Livewire 组件的属性中注册。</p><p>侦听器是一个 <code>键</code> -&gt; <code>值</code> 对，其中键是要侦听的事件，值是在组件上调用的方法。</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">class</span> <span class="token class-name-definition class-name">ShowPosts</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token variable">$postCount</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">protected</span> <span class="token variable">$listeners</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;postAdded&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;incrementPostCount&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">incrementPostCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">postCount</span> <span class="token operator">=</span> <span class="token class-name static-context">Post</span><span class="token operator">::</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="highlight-lines"><br><br><br><br><div class="highlight-line"> </div><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>当页面上的任何其他组件发出 <code>postAdded</code> 事件时，该组件将接收它并在自身上触发 <code>incrementPostCount</code> 方法。</p><blockquote><p><strong>注意</strong>：如果事件名称与调用的方法相同，则可以省略键。</p><p>例如：<code>protected $listeners = [&#39;postAdded&#39;];</code></p><p>将在发出事件 <code>postAdded</code> 时调用该方法 <code>postAdded</code>。</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">class</span> <span class="token class-name-definition class-name">ShowPosts</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span>\n<span class="token punctuation">{</span>\n   <span class="token keyword">public</span> <span class="token variable">$postCount</span><span class="token punctuation">;</span>\n\n   <span class="token keyword">protected</span> <span class="token variable">$listeners</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;postAdded&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n   <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">postAdded</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n   <span class="token punctuation">{</span>\n       <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">postCount</span> <span class="token operator">=</span> <span class="token class-name static-context">Post</span><span class="token operator">::</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n   <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div></blockquote><h4 id="动态的事件监听" tabindex="-1"><a class="header-anchor" href="#动态的事件监听" aria-hidden="true">#</a> 动态的事件监听</h4><p>如果需要动态命名事件侦听器，可以用该 <code>$listeners</code> 属性替换 <code>getListeners()</code> 组件上的受保护方法：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">class</span> <span class="token class-name-definition class-name">ShowPosts</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token variable">$postCount</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function-definition function">getListeners</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token comment">// 这里可以编写事件的处理逻辑</span>\n\n        <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;postAdded&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;incrementPostCount&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token comment">// ...</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h4 id="默认监听" tabindex="-1"><a class="header-anchor" href="#默认监听" aria-hidden="true">#</a> 默认监听</h4><p>当监听事件后不需要定义处理方法，可以使用 <code>$refresh</code> 替代。</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">class</span> <span class="token class-name-definition class-name">ShowPosts</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token variable">$postCount</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">protected</span> <span class="token variable">$listeners</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;postAdded&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;$refresh&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><blockquote><p>定义好上面的方法后，当 <code>postAdded</code> 事件被触发，组件将重新执行逻辑。</p></blockquote><h3 id="js监听" tabindex="-1"><a class="header-anchor" href="#js监听" aria-hidden="true">#</a> JS监听</h3><p>Livewire 允许您在 JavaScript 中注册事件侦听器，如下所示：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>\nLivewire<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;postAdded&#39;</span><span class="token punctuation">,</span> <span class="token parameter">postId</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;A post was added with the id of: &#39;</span> <span class="token operator">+</span> postId<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="事件参数" tabindex="-1"><a class="header-anchor" href="#事件参数" aria-hidden="true">#</a> 事件参数</h2><p>可以在发送事件时，带有事件发射的参数。</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;postAdded&#39;</span><span class="token punctuation">,</span> <span class="token variable">$post</span><span class="token operator">-&gt;</span><span class="token property">id</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="在组件中接收参数" tabindex="-1"><a class="header-anchor" href="#在组件中接收参数" aria-hidden="true">#</a> 在组件中接收参数</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">class</span> <span class="token class-name-definition class-name">ShowPosts</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token variable">$postCount</span><span class="token punctuation">;</span>\n    <span class="token keyword">public</span> <span class="token variable">$recentlyAddedPost</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">protected</span> <span class="token variable">$listeners</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;postAdded&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">postAdded</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Post</span> <span class="token variable">$post</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">postCount</span> <span class="token operator">=</span> <span class="token class-name static-context">Post</span><span class="token operator">::</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">recentlyAddedPost</span> <span class="token operator">=</span> <span class="token variable">$post</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><div class="highlight-line"> </div><br><br><br><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="在js中接收参数" tabindex="-1"><a class="header-anchor" href="#在js中接收参数" aria-hidden="true">#</a> 在JS中接收参数</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Livewire<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;postAdded&#39;</span><span class="token punctuation">,</span> <span class="token parameter">postId</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;A post was added with the id of: &#39;</span> <span class="token operator">+</span> postId<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="事件范围" tabindex="-1"><a class="header-anchor" href="#事件范围" aria-hidden="true">#</a> 事件范围</h2><h3 id="对父侦听器的范围-emitup" tabindex="-1"><a class="header-anchor" href="#对父侦听器的范围-emitup" aria-hidden="true">#</a> 对父侦听器的范围 emitUp</h3><p>在处理嵌套组件时，有时可能只想向父组件而不是子组件或兄弟组件发出事件。</p><p>在这些情况下，您可以使用该 <code>emitUp</code> 函数。</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">emitUp</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;postAdded&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name"><span class="token namespace">wire:</span>click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>$emitUp(<span class="token punctuation">&#39;</span>postAdded<span class="token punctuation">&#39;</span>)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="按名称确定组件的范围-emitto" tabindex="-1"><a class="header-anchor" href="#按名称确定组件的范围-emitto" aria-hidden="true">#</a> 按名称确定组件的范围 emitTo</h3><p>有时您可能只想向相同类型的其他组件发出事件。</p><p>在这些情况下，您可以使用 <code>emitTo</code> 函数。</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">emitTo</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;counter&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;postAdded&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>button wire<span class="token operator">:</span>click<span class="token operator">=</span><span class="token string">&quot;$emitTo(&#39;counter&#39;, &#39;postAdded&#39;)&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>现在，如果单击按钮，<code>postAdded</code> 事件将只发送到 <code>counter</code> 组件。</p><h3 id="自我界定-emitself" tabindex="-1"><a class="header-anchor" href="#自我界定-emitself" aria-hidden="true">#</a> 自我界定 emitSelf</h3><p>有时可能只想在触发事件的组件上发出事件。在这些情况下，您可以使用 <code>emitSelf</code> 函数。</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">emitSelf</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;postAdded&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>button wire<span class="token operator">:</span>click<span class="token operator">=</span><span class="token string">&quot;$emitSelf(&#39;postAdded&#39;)&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>现在，如果单击该按钮，<code>postAdded</code> 事件将仅被发射到当前组件的实例。</p><h2 id="调度浏览器事件" tabindex="-1"><a class="header-anchor" href="#调度浏览器事件" aria-hidden="true">#</a> 调度浏览器事件</h2><p>Livewire 允许触发浏览器窗口事件，如下所示：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">dispatchBrowserEvent</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;name-updated&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;newName&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$value</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>可以使用 JavaScript 侦听此窗口事件：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>\nwindow<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;name-updated&#39;</span><span class="token punctuation">,</span> <span class="token parameter">event</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;Name updated to: &#39;</span> <span class="token operator">+</span> event<span class="token punctuation">.</span>detail<span class="token punctuation">.</span>newName<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>\n</code></pre><div class="highlight-lines"><br><div class="highlight-line"> </div><br><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>',58),t={href:"https://github.com/alpinejs/alpine",target:"_blank",rel:"noopener noreferrer"},o=(0,e.Uk)("AlpineJS"),l=(0,e.Uk)(" 可以在 HTML 中轻松侦听这些窗口事件："),c=(0,e.uE)('<div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">x-data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ open: false }<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@name-updated.window</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>open = false<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token comment">&lt;!-- Modal with a Livewire name update form --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="highlight-lines"><div class="highlight-line"> </div><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>',1),i={render:function(s,n){const a=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.j4)(e.HY,null,[p,(0,e.Wm)("p",null,[(0,e.Wm)("a",t,[o,(0,e.Wm)(a)]),l]),c],64)}}}}]);