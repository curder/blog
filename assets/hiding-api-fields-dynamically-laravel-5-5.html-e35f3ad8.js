import{_ as i,M as t,p as u,q as r,R as n,t as s,N as a,V as o,a1 as c}from"./framework-ff09ffed.js";const d={},k=["src"],v=n("h1",{id:"动态的隐藏api字段-laravel5-5",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#动态的隐藏api字段-laravel5-5","aria-hidden":"true"},"#"),s(" 动态的隐藏API字段 - Laravel5.5")],-1),m={href:"https://hackernoon.com/hiding-api-fields-dynamically-laravel-5-5-82744f1dd15a",target:"_blank",rel:"noopener noreferrer"},b={href:"https://github.com/laravelbrasil/forum/issues/140",target:"_blank",rel:"noopener noreferrer"},h=n("code",null,"UsersResource",-1),g=c(`<div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Resources</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Resources<span class="token punctuation">\\</span>Json<span class="token punctuation">\\</span>Resource</span><span class="token punctuation">;</span>
<span class="token keyword">class</span> <span class="token class-name-definition class-name">UsersResource</span> <span class="token keyword">extends</span> <span class="token class-name">Resource</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">toArray</span><span class="token punctuation">(</span><span class="token variable">$request</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span>
            <span class="token string single-quoted-string">&#39;id&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">id</span><span class="token punctuation">,</span>
            <span class="token string single-quoted-string">&#39;name&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">name</span><span class="token punctuation">,</span>
            <span class="token string single-quoted-string">&#39;email&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">email</span>
        <span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因为一些原因你可能想在其他的地方重用这个资源类，但是需要隐藏<code>email</code>字段，本文是如何实现这一目标的一种方法。</p><p>如果你还不知道什么是API资源，可以看看作者以前的文章关于这个问题。</p>`,3),y=c(`<h2 id="建立项目" tabindex="-1"><a class="header-anchor" href="#建立项目" aria-hidden="true">#</a> 建立项目</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">composer</span> create-project --prefer-dist laravel/laravel api-fields
<span class="token builtin class-name">cd</span> api-fields
<span class="token function">touch</span> database/database.sqlite
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编辑<code>.env</code>文件以删除数据库设置并使用SQLite</p><div class="language-dotenv line-numbers-mode" data-ext="dotenv"><pre class="language-dotenv"><code>DB_CONNECTION=sqlite
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>继续设置项目</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan migrate
php artisan make:resource UsersResource
php artisan make:resource <span class="token parameter variable">--collection</span> UsersResourceCollection 
php artisan make:controller UsersController
php artisan tinker
factory<span class="token punctuation">(</span>App<span class="token punctuation">\\</span>User::class<span class="token punctuation">)</span>-<span class="token operator">&gt;</span>times<span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span>-<span class="token operator">&gt;</span>create<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
quit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="定义路由" tabindex="-1"><a class="header-anchor" href="#定义路由" aria-hidden="true">#</a> 定义路由</h2><p>确保在<code>api.php</code>文件中创建如下路由。</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token class-name static-context">Route</span><span class="token operator">::</span><span class="token function">apiResource</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;users&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;UsersController&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="定义控制器" tabindex="-1"><a class="header-anchor" href="#定义控制器" aria-hidden="true">#</a> 定义控制器</h2><p>控制器表示预期的目标。在这个例子中，我们假设在列表中，我们只想要所有用户的名字；而在单数据显示中，我们只想隐藏电子邮件地址。</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Controllers</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Resources<span class="token punctuation">\\</span>UsersResource</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>User</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">UsersController</span> <span class="token keyword">extends</span> <span class="token class-name">Controller</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">index</span><span class="token punctuation">(</span><span class="token class-name type-declaration">User</span> <span class="token variable">$user</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name static-context">UsersResource</span><span class="token operator">::</span><span class="token function">collection</span><span class="token punctuation">(</span><span class="token variable">$user</span><span class="token operator">-&gt;</span><span class="token function">paginate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">hide</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;id&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;email&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">show</span><span class="token punctuation">(</span><span class="token class-name type-declaration">User</span> <span class="token variable">$user</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name static-context">UsersResource</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token variable">$user</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">hide</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;id&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为了实现这一点，我们需要我们的<code>UsersResourceCollection</code>和我们的<code>UsersResource</code>知道如何处理<code>hide</code>的调用。</p><h2 id="定义usersresource类" tabindex="-1"><a class="header-anchor" href="#定义usersresource类" aria-hidden="true">#</a> 定义UsersResource类</h2><p>我们从<code>show</code>方法开始吧，<code>UsersResource::make</code>将返回<code>UsersResource</code>对象。</p><p>因此，我们应该公开一个<code>hide</code>的方法，存储所需要的键从响应中删除。</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Resources</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Resources<span class="token punctuation">\\</span>Json<span class="token punctuation">\\</span>Resource</span><span class="token punctuation">;</span>
<span class="token keyword">class</span> <span class="token class-name-definition class-name">UsersResource</span> <span class="token keyword">extends</span> <span class="token class-name">Resource</span>
<span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token variable">$withoutFields</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">toArray</span><span class="token punctuation">(</span><span class="token variable">$request</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">filterFields</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
            <span class="token string single-quoted-string">&#39;id&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">id</span><span class="token punctuation">,</span>
            <span class="token string single-quoted-string">&#39;name&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">name</span><span class="token punctuation">,</span>
            <span class="token string single-quoted-string">&#39;email&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">email</span>
        <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
 
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">hide</span><span class="token punctuation">(</span><span class="token keyword type-hint">array</span> <span class="token variable">$fields</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">withoutFields</span> <span class="token operator">=</span> <span class="token variable">$fields</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function-definition function">filterFields</span><span class="token punctuation">(</span><span class="token variable">$array</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">collect</span><span class="token punctuation">(</span><span class="token variable">$array</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">forget</span><span class="token punctuation">(</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">withoutFields</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">toArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>完成！在这一点上，我们应该能够访问<code>http://api.dev/api/users/1</code> 并选择一个没有<code>id</code>字段的响应。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Mr. Frederik Morar&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;email&quot;</span><span class="token operator">:</span> <span class="token string">&quot;darryl.wilkinson@example.org&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="usersresourcecollection-类" tabindex="-1"><a class="header-anchor" href="#usersresourcecollection-类" aria-hidden="true">#</a> UsersResourceCollection 类</h2><p>对于<code>index</code>方法中的项目集合，我们需要执行一些更改，具体如下：</p><ol><li><p>确保<code>UsersResource::collection</code>返回<code>UsersResourceCollection</code>的一个实例</p></li><li><p>在<code>UsersResourceCollection</code>上公开<code>hide</code>方法</p></li><li><p>将需要隐藏的字段传递给<code>UsersResource</code></p></li></ol><p>对于第1点，我们只需要重写<code>UsersResource</code>上的收集方法</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Resources</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Resources<span class="token punctuation">\\</span>Json<span class="token punctuation">\\</span>Resource</span><span class="token punctuation">;</span>
<span class="token keyword">class</span> <span class="token class-name-definition class-name">UsersResource</span> <span class="token keyword">extends</span> <span class="token class-name">Resource</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">function</span> <span class="token function-definition function">collection</span><span class="token punctuation">(</span><span class="token variable">$resource</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">tap</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">UsersResourceCollection</span><span class="token punctuation">(</span><span class="token variable">$resource</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">$collection</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token variable">$collection</span><span class="token operator">-&gt;</span><span class="token property">collects</span> <span class="token operator">=</span> <span class="token constant">__CLASS__</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    
    <span class="token keyword">protected</span> <span class="token variable">$withoutFields</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">toArray</span><span class="token punctuation">(</span><span class="token variable">$request</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">filterFields</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
            <span class="token string single-quoted-string">&#39;id&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">id</span><span class="token punctuation">,</span>
            <span class="token string single-quoted-string">&#39;name&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">name</span><span class="token punctuation">,</span>
            <span class="token string single-quoted-string">&#39;email&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">email</span>
        <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">hide</span><span class="token punctuation">(</span><span class="token keyword type-hint">array</span> <span class="token variable">$fields</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">withoutFields</span> <span class="token operator">=</span> <span class="token variable">$fields</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function-definition function">filterFields</span><span class="token punctuation">(</span><span class="token variable">$array</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">collect</span><span class="token punctuation">(</span><span class="token variable">$array</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">forget</span><span class="token punctuation">(</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">withoutFields</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">toArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于第2步和第3步我们需要改变<code>UsersResourceCollection</code>文件。</p><p>让我们公开<code>hide</code>方法，并使用隐藏字段处理集合。</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Resources</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Resources<span class="token punctuation">\\</span>Json<span class="token punctuation">\\</span>ResourceCollection</span><span class="token punctuation">;</span>
<span class="token keyword">class</span> <span class="token class-name-definition class-name">UsersResourceCollection</span> <span class="token keyword">extends</span> <span class="token class-name">ResourceCollection</span>
<span class="token punctuation">{</span>
  
    <span class="token keyword">protected</span> <span class="token variable">$withoutFields</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">toArray</span><span class="token punctuation">(</span><span class="token variable">$request</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">processCollection</span><span class="token punctuation">(</span><span class="token variable">$request</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">hide</span><span class="token punctuation">(</span><span class="token keyword type-hint">array</span> <span class="token variable">$fields</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">withoutFields</span> <span class="token operator">=</span> <span class="token variable">$fields</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  
    <span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function-definition function">processCollection</span><span class="token punctuation">(</span><span class="token variable">$request</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">collection</span><span class="token operator">-&gt;</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">UsersResource</span> <span class="token variable">$resource</span><span class="token punctuation">)</span> <span class="token keyword">use</span> <span class="token punctuation">(</span><span class="token variable">$request</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token variable">$resource</span><span class="token operator">-&gt;</span><span class="token function">hide</span><span class="token punctuation">(</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">withoutFields</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">toArray</span><span class="token punctuation">(</span><span class="token variable">$request</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>就是这样！现在，如果我们调用<code>http://api.dev/api/users</code>，我们可以看到没有<code>id</code>和<code>email</code>字段的响应，如指定的<code>UsersController</code>。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Mr. Frederik Morar&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Angel Daniel&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Brianne Mueller&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;links&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;first&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://lab.php71/api-fields-2/public/api/users?page=1&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;last&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://lab.php71/api-fields-2/public/api/users?page=7&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;prev&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
    <span class="token property">&quot;next&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://lab.php71/api-fields-2/public/api/users?page=2&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;meta&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;current_page&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;from&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;last_page&quot;</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
    <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://api-fields.lab.php71/api/users&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;per_page&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
    <span class="token property">&quot;to&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
    <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token number">20</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="结论" tabindex="-1"><a class="header-anchor" href="#结论" aria-hidden="true">#</a> 结论</h2><p>目标是通过允许隐藏另一个地方可能暴露的一些字段来使<code>Resource</code>类有一点灵活性。</p><p>这个实现的一个实际例子是不包括<code>avatar</code>字段属性的<code>/users</code>，但是当通过<code>/users/99</code>请求特定<code>avatar</code>字段时，我们可能希望将该头像包括在响应中。</p><p>我不建议重复使用 API 资源太多，因为它可能容易增加一层简单的复杂性。</p><p>这样说，因为实现的简单性在列表和特定记录的请求之间隐藏一些特定的字段似乎是一个合理的请求。</p><h2 id="下一步是什么" tabindex="-1"><a class="header-anchor" href="#下一步是什么" aria-hidden="true">#</a> 下一步是什么</h2>`,35),f=n("code",null,"hide",-1),w={href:"https://hackernoon.com/@deleugpn",target:"_blank",rel:"noopener noreferrer"};function q(l,$){const e=t("ExternalLinkIcon"),p=t("RouterLink");return u(),r("div",null,[n("img",{src:l.$withBase("/images/languages/laravel/hiding-api-fields-dynamically-laravel-5-5/hero.png"),alt:""},null,8,k),v,n("blockquote",null,[n("p",null,[s("本文原址："),n("a",m,[s("hackernoon.com"),a(e)])])]),n("p",null,[s("最近在"),n("a",b,[s("Laravel Brasil社区"),a(e)]),s("看到一个问题，结果比看起来更有趣。想象一下，你有一个"),h,s("与下面的实现。")]),g,n("ul",null,[n("li",null,[n("p",null,[a(p,{to:"/laravel/api/first-impressions-on-laravel-api-resources.html"},{default:o(()=>[s("对API资源的第一印象 - Laravel5.5")]),_:1})])]),n("li",null,[n("p",null,[a(p,{to:"/laravel/api/reusable-api-resource-with-nested-relationship-laravel-5-5.html"},{default:o(()=>[s("嵌套关系的可重用API资源 - Laravel5.5")]),_:1})])])]),y,n("p",null,[s("在下一篇文章中，我将尝试将"),f,s("方法提取为特征，并使其在所有API资源中都可重用。请"),n("a",w,[s("关注Medium"),a(e)]),s("，敬请期待！")])])}const _=i(d,[["render",q],["__file","hiding-api-fields-dynamically-laravel-5-5.html.vue"]]);export{_ as default};