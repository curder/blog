(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5718],{4143:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>t});const t={key:"v-286f6ba8",path:"/languages/laravel/livewire/how-to-use-lifecycle-hooks.html",title:"生命周期钩子",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"类钩子",slug:"类钩子",children:[]},{level:2,title:"Javascript 钩子",slug:"javascript-钩子",children:[]}],filePathRelative:"languages/laravel/livewire/how-to-use-lifecycle-hooks.md",git:{updatedTime:1639727659e3,contributors:[]}}},631:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>p});const t=(0,a(6252).uE)('<h1 id="生命周期钩子" tabindex="-1"><a class="header-anchor" href="#生命周期钩子" aria-hidden="true">#</a> 生命周期钩子</h1><h2 id="类钩子" tabindex="-1"><a class="header-anchor" href="#类钩子" aria-hidden="true">#</a> 类钩子</h2><p>每个 Livewire 组件都会经历一个生命周期。生命周期钩子允许您在组件生命周期的任何部分或在更新特定属性之前运行代码。</p><table><thead><tr><th>钩子</th><th>描述</th></tr></thead><tbody><tr><td>mount</td><td>在实例化组件之后，调用 <code>render()</code> 之前立即运行一次</td></tr><tr><td>hydrate</td><td>在组件组合后，执行动作之前或调用 <code>render()</code> 时立即在每个请求上运行</td></tr><tr><td>hydrateFoo</td><td>在组件组合后，执行动作之前或调用 <code>render()</code> 时立即在名为 <code>$foo</code> 的属性请求上运行</td></tr><tr><td>dehydrate</td><td>在每个请求上运行，在组件执行之前，但在调用 <code>render()</code> 之后</td></tr><tr><td>dehydrateFoo</td><td>在名为 <code>$foo</code> 的属性执行之前运行</td></tr><tr><td>updating</td><td>在对 Livewire 组件数据进行任何更新之前运行</td></tr><tr><td>updated</td><td>在对 Livewire 组件的数据进行任何更新之后运行</td></tr><tr><td>updatingFoo</td><td>在名为 <code>$foo</code> 的属性更新之前运行</td></tr><tr><td>updatedFoo</td><td>在名为 <code>$foo</code> 的属性更新之后运行</td></tr><tr><td>updatingFooBar</td><td>在更新 <code>$foo</code> 属性或多字属性（如 <code>$fooBar</code> 或 <code>$foo_bar</code>）上的嵌套属性栏之前运行</td></tr><tr><td>updatedFooBar</td><td>在更新 <code>$foo</code> 属性或多字属性（如 <code>$fooBar</code> 或 <code>$foo_bar</code>）上的嵌套属性栏之后运行</td></tr></tbody></table><blockquote><p><strong>注意</strong>：直接在 Livewire 组件类中改变属性不会触发任何更新/更新钩子操作。</p></blockquote><p>下面是对应钩子</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">class</span> <span class="token class-name-definition class-name">HelloWorld</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token variable">$foo</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">mount</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token comment">//</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">hydrateFoo</span><span class="token punctuation">(</span><span class="token variable">$value</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token comment">//</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">dehydrateFoo</span><span class="token punctuation">(</span><span class="token variable">$value</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token comment">//</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">hydrate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token comment">//</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">dehydrate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token comment">//</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">updating</span><span class="token punctuation">(</span><span class="token variable">$name</span><span class="token punctuation">,</span> <span class="token variable">$value</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token comment">//</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">updated</span><span class="token punctuation">(</span><span class="token variable">$name</span><span class="token punctuation">,</span> <span class="token variable">$value</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token comment">//</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">updatingFoo</span><span class="token punctuation">(</span><span class="token variable">$value</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token comment">//</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">updatedFoo</span><span class="token punctuation">(</span><span class="token variable">$value</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token comment">//</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">updatingFooBar</span><span class="token punctuation">(</span><span class="token variable">$value</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token comment">//</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">updatedFooBar</span><span class="token punctuation">(</span><span class="token variable">$value</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token comment">//</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br></div></div><h2 id="javascript-钩子" tabindex="-1"><a class="header-anchor" href="#javascript-钩子" aria-hidden="true">#</a> Javascript 钩子</h2><p>Livewire 有机会在某些事件期间执行 javascript。</p><table><thead><tr><th>钩子</th><th>描述</th></tr></thead><tbody><tr><td>component.initialized</td><td>当 Livewire 在页面上初始化组件时调用</td></tr><tr><td>element.initialized</td><td>当 Livewire 初始化单个元素时调用</td></tr><tr><td>element.updating</td><td>在网络往返后的 DOM 差异周期期间，在 Livewire 更新元素之前调用</td></tr><tr><td>element.updated</td><td>在网络往返后的 DOM 差异周期期间 Livewire 更新元素后调用</td></tr><tr><td>element.removed</td><td>在 Livewire 在其 DOM 差异循环期间移除元素后调用</td></tr><tr><td>message.sent</td><td>当 Livewire 更新触发通过 AJAX 发送到服务器的消息时调用</td></tr><tr><td>message.failed</td><td>如果由于某种原因消息发送失败则调用</td></tr><tr><td>message.received</td><td>当消息完成其路由时调用，但在 Livewire 更新 DOM 之前调用</td></tr><tr><td>message.processed</td><td>在 Livewire 收到服务器的响应之后但在任何 DOM 差异 / 修补发生之后调用</td></tr></tbody></table><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>\n    document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;DOMContentLoaded&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n        Livewire<span class="token punctuation">.</span><span class="token function">hook</span><span class="token punctuation">(</span><span class="token string">&#39;component.initialized&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">component</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n        Livewire<span class="token punctuation">.</span><span class="token function">hook</span><span class="token punctuation">(</span><span class="token string">&#39;element.initialized&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> component</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n        Livewire<span class="token punctuation">.</span><span class="token function">hook</span><span class="token punctuation">(</span><span class="token string">&#39;element.updating&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">fromEl<span class="token punctuation">,</span> toEl<span class="token punctuation">,</span> component</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n        Livewire<span class="token punctuation">.</span><span class="token function">hook</span><span class="token punctuation">(</span><span class="token string">&#39;element.updated&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> component</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n        Livewire<span class="token punctuation">.</span><span class="token function">hook</span><span class="token punctuation">(</span><span class="token string">&#39;element.removed&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> component</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n        Livewire<span class="token punctuation">.</span><span class="token function">hook</span><span class="token punctuation">(</span><span class="token string">&#39;message.sent&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">message<span class="token punctuation">,</span> component</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n        Livewire<span class="token punctuation">.</span><span class="token function">hook</span><span class="token punctuation">(</span><span class="token string">&#39;message.failed&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">message<span class="token punctuation">,</span> component</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n        Livewire<span class="token punctuation">.</span><span class="token function">hook</span><span class="token punctuation">(</span><span class="token string">&#39;message.received&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">message<span class="token punctuation">,</span> component</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n        Livewire<span class="token punctuation">.</span><span class="token function">hook</span><span class="token punctuation">(</span><span class="token string">&#39;message.processed&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">message<span class="token punctuation">,</span> component</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div>',11),p={render:function(n,s){return t}}}}]);