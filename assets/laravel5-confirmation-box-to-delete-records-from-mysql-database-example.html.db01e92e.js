import{_ as e,r as o,o as c,c as l,b as n,a as t,F as i,d as s,e as u}from"./app.b24ee918.js";const r={},k=n("h1",{id:"laravel5\u786E\u8BA4\u6846\u4ECE\u6570\u636E\u5E93\u793A\u4F8B\u4E2D\u5220\u9664\u8BB0\u5F55",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#laravel5\u786E\u8BA4\u6846\u4ECE\u6570\u636E\u5E93\u793A\u4F8B\u4E2D\u5220\u9664\u8BB0\u5F55","aria-hidden":"true"},"#"),s(" Laravel5\u786E\u8BA4\u6846\u4ECE\u6570\u636E\u5E93\u793A\u4F8B\u4E2D\u5220\u9664\u8BB0\u5F55")],-1),d=n("p",null,"\u6709\u65F6\u5019\u9700\u8981\u4E00\u4E2A\u786E\u8BA4\u6846\uFF0C\u4F8B\u5982\u63D0\u793A\u7528\u6237\u201C\u786E\u5B9A\u8981\u5220\u9664\u8FD9\u6761\u8BB0\u5F55?\u201D\uFF0C\u7136\u540E\u624D\u4ECE\u6570\u636E\u5E93\u4E2D\u5220\u9664\u8BB0\u5F55\uFF0C\u5982\u4F55\u901A\u8FC7\u4E00\u4E2A\u7B80\u5355\u7684\u4F8B\u5B50\u6765\u6574\u5408\u4ECE\u6570\u636E\u5E93\u4E2D\u5220\u9664\u8BB0\u5F55\u7684\u786E\u8BA4\u6846\u3002",-1),g=s("\u4E0B\u9762\u5728laravel\u4E2D\u4F7F\u7528"),v={href:"https://github.com/mistic100/Bootstrap-Confirmation",target:"_blank",rel:"noopener noreferrer"},m=s("Bootstrap Confirmation"),b=s("\u63D2\u4EF6\u3002"),h=u(`<p>\u90FD\u77E5\u9053\u5728\u4ECE\u6570\u636E\u5E93\u4E2D\u5220\u9664\u67D0\u4E9B\u4E1C\u897F\u4E4B\u524D\u786E\u8BA4\u8B66\u62A5\u5F88\u91CD\u8981\uFF0C\u5982\u679C\u6CA1\u6709\u4F7F\u7528\u4EFB\u4F55\u786E\u8BA4\uFF0C\u5E76\u4E14\u5982\u679C\u7528\u6237\u8BEF\u70B9\u51FB\u5220\u9664\u6309\u94AE\uFF0C\u53EF\u80FD\u4F1A\u5BFC\u81F4\u6570\u636E\u4E22\u5931\u3002</p><p>\u5728\u6B64\u4E4B\u524D\uFF0C\u4F7F\u7528bootstrap\u786E\u8BA4\u63D2\u4EF6\u5F00\u59CB\u6267\u884Claravel\u4E2D\u7684\u5220\u9664\u786E\u8BA4\u6846\u3002</p><h2 id="\u5347\u7EA7laravel\u9879\u76EE\u5E76\u7B80\u5355\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u5347\u7EA7laravel\u9879\u76EE\u5E76\u7B80\u5355\u914D\u7F6E" aria-hidden="true">#</a> \u5347\u7EA7Laravel\u9879\u76EE\u5E76\u7B80\u5355\u914D\u7F6E</h2><h3 id="\u4F7F\u7528composer\u521B\u5EFAlaravel\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528composer\u521B\u5EFAlaravel\u9879\u76EE" aria-hidden="true">#</a> \u4F7F\u7528composer\u521B\u5EFALaravel\u9879\u76EE</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">composer</span> create-project laravel/laravel laravel5-confirmation-box
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u914D\u7F6E\u6570\u636E\u5E93\u8FDE\u63A5\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u6570\u636E\u5E93\u8FDE\u63A5\u4FE1\u606F" aria-hidden="true">#</a> \u914D\u7F6E\u6570\u636E\u5E93\u8FDE\u63A5\u4FE1\u606F</h3><p>\u6F14\u793A\u4EE5<code>sqlite</code>\u6570\u636E\u5E93\u4E3A\u4F8B\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> laravel5-confirmation-box <span class="token operator">&amp;&amp;</span> <span class="token function">touch</span> database/database.sqlite
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u521B\u5EFA\u6570\u636E\u5E93\uFF0C\u7136\u540E\u66F4\u65B0\u9879\u76EE\u6839\u76EE\u5F55\u4E0B\u7684<code>.env</code>\u6587\u4EF6\u4E0A\u5982\u4E0B\u7684\u76F8\u5173\u884C\uFF1A</p><div class="language-dotenv ext-dotenv line-numbers-mode"><pre class="language-dotenv"><code>DB_CONNECTION=mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u73AF\u5883\u914D\u7F6E\u6587\u4EF6\u4E2D\u7684\u5176\u4ED6\u76F8\u5173<code>DB</code>\u8FDE\u63A5\u4FE1\u606F\u5168\u90E8\u5220\u9664\uFF0C\u66F4\u65B0\u4E0A\u9762\u7684\u884C\u6765\u5B8C\u6210\u6570\u636E\u5E93\u76F8\u5173\u8BBE\u7F6E\u3002</p><h2 id="artisan\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#artisan\u547D\u4EE4" aria-hidden="true">#</a> artisan\u547D\u4EE4</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">composer</span> require <span class="token string">&quot;laravelcollective/html&quot;</span> <span class="token comment"># \u5B89\u88C5Form\u63D2\u4EF6</span>

php artisan migrate
php artisan tinker
factory<span class="token punctuation">(</span>App<span class="token punctuation">\\</span>User::class, <span class="token number">10</span><span class="token punctuation">)</span>-<span class="token operator">&gt;</span>create<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u8FD9\u6837\u7684\u8BDD\u6570\u636E\u5E93\u5C31\u586B\u5145\u4E8610\u6761\u7528\u6237\u6570\u636E</p></blockquote><h2 id="\u6DFB\u52A0\u8DEF\u7531" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0\u8DEF\u7531" aria-hidden="true">#</a> \u6DFB\u52A0\u8DEF\u7531</h2><p>\u5728\u7B2C\u4E8C\u6B65\u4E2D\uFF0C\u6211\u4EEC\u5C06\u6DFB\u52A0\u6240\u9700\u7684\u8DEF\u7EBF\u6765\u6267\u884C\u4EFB\u52A1\u3002\u6240\u4EE5\u53EA\u9700\u8981\u5C06\u4EE5\u4E0B\u4EE3\u7801\u884C\u590D\u5236\u5230\u60A8\u7684<code>routes/web.php</code>\u6587\u4EF6\u4E2D\u5373\u53EF\u3002</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token class-name static-context">Route</span><span class="token operator">::</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;users&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;UsersController@index&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name static-context">Route</span><span class="token operator">::</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;users/{id}&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;as&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;users.destroy&#39;</span><span class="token punctuation">,</span><span class="token string single-quoted-string">&#39;uses&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;UsersController@destroy&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u521B\u5EFA\u63A7\u5236\u5668" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u63A7\u5236\u5668" aria-hidden="true">#</a> \u521B\u5EFA\u63A7\u5236\u5668</h2><p>\u73B0\u5728\u6211\u4EEC\u5C06\u521B\u5EFA\u4E00\u4E2A\u63A7\u5236\u5668\u6765\u901A\u8FC7\u4E0D\u540C\u7684\u65B9\u6CD5\u6267\u884C\u64CD\u4F5C\u4EFB\u52A1\u3002\u5728\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\uFF0C\u6211\u5C06\u4F7F\u7528\u4E24\u4E2A\u65B9\u6CD5<code>index()</code> \u548C <code>destroy()</code> \u5728\u8DEF\u5F84<code>app/Http/Controllers</code>\u76EE\u5F55\u4E2D\u521B\u5EFA\u4E00\u4E2A\u540D\u4E3A<code>UsersController.php</code>\u7684\u63A7\u5236\u5668\u6587\u4EF6\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>php artisan make:controller UsersController
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5185\u5BB9\u5927\u81F4\u5982\u4E0B\uFF1A</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Controllers</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Request</span><span class="token punctuation">;</span>
<span class="token keyword">class</span> <span class="token class-name-definition class-name">UsersController</span> <span class="token keyword">extends</span> <span class="token class-name">Controller</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">index</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Request</span> <span class="token variable">$request</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token variable">$users</span> <span class="token operator">=</span> <span class="token class-name class-name-fully-qualified static-context"><span class="token punctuation">\\</span>DB</span><span class="token operator">::</span><span class="token function">table</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;users&quot;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">paginate</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token function">view</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;users&#39;</span><span class="token punctuation">,</span><span class="token function">compact</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;users&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token operator">-&gt;</span><span class="token function">with</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;i&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token variable">$request</span><span class="token operator">-&gt;</span><span class="token function">input</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;page&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">destroy</span><span class="token punctuation">(</span><span class="token variable">$id</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name class-name-fully-qualified static-context"><span class="token punctuation">\\</span>DB</span><span class="token operator">::</span><span class="token function">table</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;users&quot;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token variable">$id</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token function">redirect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">back</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">with</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;success&#39;</span><span class="token punctuation">,</span><span class="token string single-quoted-string">&#39;Member deleted&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u521B\u5EFA\u4E00\u4E2A\u89C6\u56FE\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u4E00\u4E2A\u89C6\u56FE\u6587\u4EF6" aria-hidden="true">#</a> \u521B\u5EFA\u4E00\u4E2A\u89C6\u56FE\u6587\u4EF6</h2><p>\u521B\u5EFA\u4E00\u4E2A\u540D\u4E3A<code>users.blade.php</code>\u7684\u6587\u4EF6\u6765\u67E5\u770B\u8BB0\u5F55\u4EE5\u53CA\u4ECE\u54EA\u91CC\u5220\u9664\u7279\u5B9A\u8BB0\u5F55\u3002\u5728\u8FD9\u4E2A\u6587\u4EF6\u4E2D\uFF0C\u5C06\u4F7F\u7528\u6240\u9700\u7684\u5F15\u5BFC\u786E\u8BA4\u63D2\u4EF6\u6587\u4EF6\u3002</p><p><strong>resources/views/users.blade.php</strong></p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css<span class="token punctuation">&quot;</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.min.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.bootcss.com/bootstrap-confirmation/1.0.5/bootstrap-confirmation.min.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    @if ($message = Session::get(&#39;success&#39;))
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>alert alert-success<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>{{ $message }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    @endif
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>table</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>table table-bordered<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>No<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>Name<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>Email<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>280px<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Action<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span>
    @foreach ($users as $user)
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>{{ ++$i }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>{{ $user-&gt;name}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>{{ $user-&gt;email}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>
            {!! Form::open([&#39;method&#39; =&gt; &#39;DELETE&#39;,&#39;route&#39; =&gt; [&#39;users.destroy&#39;, $user-&gt;id],&#39;style&#39;=&gt;&#39;display:inline&#39;]) !!}
            {!! Form::button(&#39;Delete&#39;, [&#39;class&#39; =&gt; &#39;btn btn-danger&#39;,&#39;data-toggle&#39;=&gt;&#39;confirmation&#39;]) !!}
            {!! Form::close() !!}
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span>
    @endforeach
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>table</span><span class="token punctuation">&gt;</span></span>
    {!! $users-&gt;render() !!}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/javascript<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token function">$</span><span class="token punctuation">(</span>document<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ready</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;[data-toggle=confirmation]&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">confirmation</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">placement</span><span class="token operator">:</span> <span class="token string">&#39;right&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">rootSelector</span><span class="token operator">:</span> <span class="token string">&#39;[data-toggle=confirmation]&#39;</span><span class="token punctuation">,</span>
            <span class="token function-variable function">onConfirm</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">event<span class="token punctuation">,</span> element</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                element<span class="token punctuation">.</span><span class="token function">closest</span><span class="token punctuation">(</span><span class="token string">&#39;form&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">submit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>bootstrap.min.css</code> &gt;= 3.2</li><li><code>jQuery</code> &gt;= 1.9</li><li><code>bootstrap.min.js</code> &gt;= 3.2</li><li><code>bootstrap-confirmation.min.js</code></li></ul>`,27),f=["src"],q=s("\u66F4\u591A\u7684\u63D2\u4EF6\u53C2\u6570\u548C\u4E8B\u4EF6\u7684\u4F7F\u7528\u8BE6\u60C5"),_={href:"http://bootstrap-confirmation.js.org",target:"_blank",rel:"noopener noreferrer"},x=s("\u53C2\u8003\u8FD9\u91CC"),y=s("\u3002"),w=n("h2",{id:"\u53C2\u8003\u94FE\u63A5",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u53C2\u8003\u94FE\u63A5","aria-hidden":"true"},"#"),s(" \u53C2\u8003\u94FE\u63A5")],-1),C={href:"http://www.phpzone.in/laravel5-confirmation-box-deleting-record-mysql-database-example/",target:"_blank",rel:"noopener noreferrer"},$=s("Laravel5 confirmation box for deleting a record from mysql database example"),j={href:"https://github.com/mistic100/Bootstrap-Confirmation",target:"_blank",rel:"noopener noreferrer"},B=s("bootstrap-confirmation v1.0.7");function E(p,D){const a=o("ExternalLinkIcon");return c(),l(i,null,[k,d,n("p",null,[g,n("a",v,[m,t(a)]),b]),h,n("img",{src:p.$withBase("/images/languages/laravel/laravel5-confirmation-box-to-delete-records-from-mysql-database-example/laravel5-confirmation-box-to-delete-records-from-mysql-database-example.png"),alt:""},null,8,f),n("p",null,[q,n("a",_,[x,t(a)]),y]),w,n("ul",null,[n("li",null,[n("a",C,[$,t(a)])]),n("li",null,[n("a",j,[B,t(a)])])])],64)}var F=e(r,[["render",E],["__file","laravel5-confirmation-box-to-delete-records-from-mysql-database-example.html.vue"]]);export{F as default};