import{_ as e,M as t,p,q as o,R as n,t as s,N as c,a1 as i}from"./framework-96b046e1.js";const l={},u=n("h1",{id:"javascript中的promise",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#javascript中的promise","aria-hidden":"true"},"#"),s(" Javascript中的Promise")],-1),r=n("h2",{id:"释义",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#释义","aria-hidden":"true"},"#"),s(" 释义")],-1),d=n("p",null,"词语本意：许诺；允诺；（有）可能",-1),k={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise",target:"_blank",rel:"noopener noreferrer"},m=i(`<ul><li>按照用途来解释 <ul><li>主要用于异步计算</li><li>可以将异步操作队列化，按照期望的顺序执行，返回符合预期的结果</li><li>可以在对象之间传递和操作Promise，帮助我们处理队列</li></ul></li></ul><h2 id="promise解决什么问题" tabindex="-1"><a class="header-anchor" href="#promise解决什么问题" aria-hidden="true">#</a> Promise解决什么问题？</h2><h3 id="javascript中包含了大量的异步操作" tabindex="-1"><a class="header-anchor" href="#javascript中包含了大量的异步操作" aria-hidden="true">#</a> Javascript中包含了大量的异步操作</h3><p>在那个网络还不是很发达的年代，所有的前后台校验工作都需要提交给后台去完成，一旦用户填写的表单有问题，往往意味着重新填写全部表单的结果，从而导致大量的用户流失。为了改进这个用户的体验，便产生的Javascript。</p><p>可以说，Javascript这门语言就是为检查表单而生。</p><p>创造它的首要目标就是操作DOM，能够方便的从表单中读取数据，能够提示用户哪儿填写有问题，所以Javascript是一门UI语言，而UI语言造成界面冻结是大忌，所以Javascript中很多操作都是异步的。</p><h3 id="同步操作" tabindex="-1"><a class="header-anchor" href="#同步操作" aria-hidden="true">#</a> 同步操作</h3><p>假设用户去到一家餐厅吃饭，招呼服务员拿菜单点菜，然而服务员告知：对不起，我是<strong>同步</strong>服务员，我要服务完前面的这一桌客户才能招呼你。</p><p>作为用户，明明那桌客户已经吃上了菜，而你只是需要菜单这个简单的小动作，服务员却要等到别人完成一个大动作完成之后才能招呼你。</p><p>即：顺序的交付的工作 <code>1 2 3 4</code>，必须按照 <code>1 2 3 4</code>的顺序执行。</p><h3 id="异步操作" tabindex="-1"><a class="header-anchor" href="#异步操作" aria-hidden="true">#</a> 异步操作</h3><p>将耗时很长的A交付的工作交给系统之后，就去继续做B交付的工作。等到系统完成前面的工作之后，再通过回调或者事件，继续做A剩下的工作。</p><p>从观察者的角度看来，AB工作的完成顺序和交付他们的时间顺序无关，所以叫做“异步”。</p><h3 id="异步操作的常见语法" tabindex="-1"><a class="header-anchor" href="#异步操作的常见语法" aria-hidden="true">#</a> 异步操作的常见语法</h3><ul><li>事件监听和相应</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;start&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> start<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 当用户点击了id为start的元素，会触发start函数</span>

<span class="token keyword">function</span> <span class="token function">start</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 响应事件，进行相应操作</span>
<span class="token punctuation">}</span>

<span class="token comment">// jQuery用\`.on()\`也是事件监听</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;#start&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> start<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>回调</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>$<span class="token punctuation">.</span><span class="token function">ajax</span><span class="token punctuation">(</span><span class="token string">&#39;http://www.google.com.cn&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">result</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 这里就是成功的回调处理函数了</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 或者页面加载完毕后回调</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 这里也是回调处理函数</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="promise详解" tabindex="-1"><a class="header-anchor" href="#promise详解" aria-hidden="true">#</a> Promise详解</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span>
    <span class="token comment">/* 执行器 executor */</span>
    <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">resole<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 数据处理完成</span>
        <span class="token function">reject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 数据处理错误</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token constant">A</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 成功，下一步</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token constant">B</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 失败，做相应处理</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Promise是一个代理对象，它和原先要军行的操作并无关系。它通过引入一个回调，避免更多的回调。</p><h3 id="promise的3种状态" tabindex="-1"><a class="header-anchor" href="#promise的3种状态" aria-hidden="true">#</a> Promise的3种状态</h3><ul><li><code>pending</code> [待定] 初始化状态</li><li><code>fufilled</code> [实现] 操作成功</li><li><code>rejected</code> [被否决] 操作失败</li></ul><p>当 promise 状态发生改变后，会触发<code>.then()</code>里的响应函数处理后续步骤。</p><p>Promise 状态一经改变，不会再变。</p><h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h3><h4 id="定时执行简单示例" tabindex="-1"><a class="header-anchor" href="#定时执行简单示例" aria-hidden="true">#</a> 定时执行简单示例</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;here we go&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span> <span class="token parameter">resolve</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">value</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> value <span class="token operator">+</span> <span class="token string">&#39; world&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在控制台输出&quot;here we go&quot;的2秒后在输出&quot;hello world&quot;</p><h4 id="分两次顺序执行" tabindex="-1"><a class="header-anchor" href="#分两次顺序执行" aria-hidden="true">#</a> 分两次顺序执行</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;here we go&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在控制台输出&quot;here we go&quot;的2秒后在输出&quot;hello&quot;，再过2秒后又会输出&quot;world world&quot;</p><h4 id="对已完成的promise执行then" tabindex="-1"><a class="header-anchor" href="#对已完成的promise执行then" aria-hidden="true">#</a> 对已完成的Promise执行then</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;here we go&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在控制台输出&quot;here we go&quot;的1秒后在输出&quot;the promise fulfilled&quot;，再过2秒后又会输出&quot;hello world&quot;</p><h3 id="then" tabindex="-1"><a class="header-anchor" href="#then" aria-hidden="true">#</a> <code>.then()</code></h3><ul><li><code>.then()</code> 接受两个函数作为参数，分别代表<code>fulfilled</code>和<code>rejected</code></li><li><code>.then()</code>返回一个新的Promise示例，所以它可以链式调用</li><li>当前面的 Promise 状态改变时，<code>.then()</code>根据其最终状态，选择特定的响应函数执行</li><li>状态响应函数可以返回新的Promise或者其他值，如果返回新的Promise，那么下一级的<code>.then()</code>会在新的Promise状态改变之后执行；如果返回其他任何值，则会立刻执行下一级<code>.then()</code></li></ul><h2 id="promise函数" tabindex="-1"><a class="header-anchor" href="#promise函数" aria-hidden="true">#</a> Promise函数</h2><h3 id="promise-all" tabindex="-1"><a class="header-anchor" href="#promise-all" aria-hidden="true">#</a> <code>Promise.all()</code></h3><p>批量执行，<code>Promise.all([p1, p2, p3, ...])</code>用于将多个Promise实例包装成一个新的Promise实例，返回的实例是普通的Promise；它接受一个数组作为参数，数组里可以是Promise对象，也可以是别的值，只有Promise会等待状态改变。</p><p>当所有子Promise都完成，该Promise完成，返回值是全部值的数组；有任何一个失败，该Promise失败，返回值是第一个失败的子Promise的结果。</p><h3 id="promise-resolve" tabindex="-1"><a class="header-anchor" href="#promise-resolve" aria-hidden="true">#</a> <code>Promise.resolve()</code></h3><p>返回一个<code>fulfilled</code>的Promise实例，或原始Promise实例。</p><ul><li>参数为空，返回一个状态为fulfilled的Promise实例</li><li>参数是一个跟Promise无关的值，同上，不过fulfuilled响应函数会得到这个参数</li><li>参数为Promise实例，则返回该实例，不做任何修改</li><li>参数为thenable，立刻执行它的<code>.then()</code></li></ul><h3 id="promise-reject" tabindex="-1"><a class="header-anchor" href="#promise-reject" aria-hidden="true">#</a> <code>Promise.reject()</code></h3><p>返回一个rejected的Promise实例。</p><ul><li>参数为空，返回一个状态为fulfilled的Promise实例</li><li>参数是一个跟Promise无关的值，同上，不过fulfuilled响应函数会得到这个参数</li><li>参数为Promise实例，则返回该实例，不做任何修改</li></ul><h3 id="promise-rece" tabindex="-1"><a class="header-anchor" href="#promise-rece" aria-hidden="true">#</a> <code>Promise.rece()</code></h3><p>类似<code>Promise.all()</code>，区别在于它有任意一个完成就算完成。</p>`,49);function v(h,b){const a=t("ExternalLinkIcon");return p(),o("div",null,[u,r,d,n("p",null,[n("a",k,[s("MDN"),c(a)]),s("：Promise 对象用于表示一个异步操作的最终状态（完成或失败），以及其返回的值。")]),m])}const g=e(l,[["render",v],["__file","index.html.vue"]]);export{g as default};
