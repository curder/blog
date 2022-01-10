import{r as t,o,c,b as s,a as e,F as l,d as n,e as r}from"./app.a3837e36.js";import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";const u={},k=["src"],d=s("h1",{id:"\u5D4C\u5957\u5173\u7CFB\u7684\u53EF\u91CD\u7528api\u8D44\u6E90-laravel5-5",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u5D4C\u5957\u5173\u7CFB\u7684\u53EF\u91CD\u7528api\u8D44\u6E90-laravel5-5","aria-hidden":"true"},"#"),n(" \u5D4C\u5957\u5173\u7CFB\u7684\u53EF\u91CD\u7528API\u8D44\u6E90 - Laravel5.5")],-1),b=n("\u672C\u6587\u539F\u5740\uFF1A"),m={href:"https://hackernoon.com/reusable-api-resource-with-nested-relationship-laravel-5-5-c654c7243869",target:"_blank",rel:"noopener noreferrer"},h=n("hackernoon.com"),g=n("\u4E24\u5929\u524D\uFF0C\u4F5C\u8005\u53D1\u8868\u4E86\u5BF9Laravel\u6700\u65B0\u7684API\u8D44\u6E90\u529F\u80FD\u7684\u7B2C\u4E00\u5370\u8C61"),v={href:"https://hackernoon.com/reusable-api-resource-with-nested-relationship-laravel-5-5-c654c7243869",target:"_blank",rel:"noopener noreferrer"},f=n("\u539F\u6587\u5730\u5740"),y=n(" && "),_={href:"/languages/laravel/api/first-impressions-on-laravel-api-resources.md",target:"_blank",rel:"noopener noreferrer"},w=n("\u8BD1\u6587\u5730\u5740"),x=n("\u3002"),R=r(`<p>\u4E0B\u9762\u5C06\u8FDB\u4E00\u6B65\u5728Transformation\u5C42\u4E2D\u4F7F\u7528\u66F4\u591A\u7684Laravel\u53CB\u597D\u7684\u65B9\u6CD5\u3002</p><h2 id="\u5B89\u88C5\u5E72\u51C0\u7684laravel-5-5\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u5E72\u51C0\u7684laravel-5-5\u9879\u76EE" aria-hidden="true">#</a> \u5B89\u88C5\u5E72\u51C0\u7684Laravel 5.5\u9879\u76EE</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">composer</span> create-project laravel/laravel responses dev-develop
<span class="token builtin class-name">cd</span> responses
<span class="token function">touch</span> database/database.sqlite
php artisan make:model Post -mfa
php artisan make:resource UsersWithPostsResource
php artisan make:resource PostsResource
php artisan make:controller UsersController --resource
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u66F4\u6539<code>.env</code>\u6587\u4EF6\u4EE5\u4F7F\u7528SQLite\u5E76\u5220\u9664\u6BCF\u4E2A\u5176\u4ED6\u6570\u636E\u5E93\u53D8\u91CF\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>DB_CONNECTION=sqlite
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="\u51C6\u5907\u6570\u636E\u5E93" tabindex="-1"><a class="header-anchor" href="#\u51C6\u5907\u6570\u636E\u5E93" aria-hidden="true">#</a> \u51C6\u5907\u6570\u636E\u5E93</h2><ul><li><code>posts</code>\u8FC1\u79FB<code>database/migrations/______create_posts_table.php</code></li></ul><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token class-name static-context">Schema</span><span class="token operator">::</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;posts&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">Blueprint</span> <span class="token variable">$table</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token variable">$table</span><span class="token operator">-&gt;</span><span class="token function">increments</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;id&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token variable">$table</span><span class="token operator">-&gt;</span><span class="token keyword type-declaration">string</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;title&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token variable">$table</span><span class="token operator">-&gt;</span><span class="token keyword type-declaration">string</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;body&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token variable">$table</span><span class="token operator">-&gt;</span><span class="token function">unsignedInteger</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;user_id&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token variable">$table</span><span class="token operator">-&gt;</span><span class="token function">timestamps</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ul><li>Post Factory <code>database/factories/PostFactory.php</code></li></ul><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">use</span> <span class="token package">Faker<span class="token punctuation">\\</span>Generator</span> <span class="token keyword">as</span> Faker<span class="token punctuation">;</span>

<span class="token variable">$factory</span><span class="token operator">-&gt;</span><span class="token function">define</span><span class="token punctuation">(</span><span class="token class-name class-name-fully-qualified static-context">App<span class="token punctuation">\\</span>Post</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">Faker</span> <span class="token variable">$faker</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>
        <span class="token string single-quoted-string">&#39;title&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$faker</span><span class="token operator">-&gt;</span><span class="token property">sentence</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;body&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$faker</span><span class="token operator">-&gt;</span><span class="token property">paragraph</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;user_id&#39;</span> <span class="token operator">=&gt;</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token function">factory</span><span class="token punctuation">(</span><span class="token class-name class-name-fully-qualified static-context"><span class="token punctuation">\\</span>App<span class="token punctuation">\\</span>User</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><ul><li>\u7528\u6237\u6709 Posts \u5173\u8054\u5173\u7CFB<code>app/User.php</code></li></ul><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">posts</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">hasMany</span><span class="token punctuation">(</span><span class="token class-name static-context">Post</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul><li>\u907F\u514D Posts \u4E0A\u7684\u5927\u91CF\u5206\u914D</li></ul><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">namespace</span> <span class="token package">App</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Database<span class="token punctuation">\\</span>Eloquent<span class="token punctuation">\\</span>Model</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">Post</span> <span class="token keyword">extends</span> <span class="token class-name">Model</span>
<span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token variable">$guarded</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><ul><li>\u586B\u5145\u6570\u636E\u5E93</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>php artisan migrate:fresh
php artisan tinker
factory<span class="token punctuation">(</span>App<span class="token punctuation">\\</span>Post::class<span class="token punctuation">)</span>-<span class="token operator">&gt;</span>times<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>-<span class="token operator">&gt;</span>create<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
factory<span class="token punctuation">(</span>App<span class="token punctuation">\\</span>Post::class<span class="token punctuation">)</span>-<span class="token operator">&gt;</span>times<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>-<span class="token operator">&gt;</span>create<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;user_id&#39;</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="\u91CD\u547D\u540D\u8D44\u6E90-\u4FEE\u590D\u9057\u7559\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u91CD\u547D\u540D\u8D44\u6E90-\u4FEE\u590D\u9057\u7559\u95EE\u9898" aria-hidden="true">#</a> \u91CD\u547D\u540D\u8D44\u6E90\uFF08\u4FEE\u590D\u9057\u7559\u95EE\u9898\uFF09</h2><p>\u4E0A\u4E00\u7BC7\u6587\u7AE0\u521B\u5EFA\u4E86\u4E00\u4E2A\u540D\u4E3A<code>UsersWithPostsResource</code>\u7684\u8D44\u6E90\u3002\u8BA9\u6211\u4EEC\u5C06\u5176\u91CD\u547D\u540D\u4E3A<code>UsersResource</code>\uFF0C\u5E76\u4E86\u89E3\u5982\u4F55\u5728\u4EE5\u4E0B\u6B65\u9AA4\u4E2D\u91CD\u7528\u5B83\u3002</p><h2 id="\u5728\u63A7\u5236\u5668\u4E2D\u4F7F\u7528api\u8D44\u6E90" tabindex="-1"><a class="header-anchor" href="#\u5728\u63A7\u5236\u5668\u4E2D\u4F7F\u7528api\u8D44\u6E90" aria-hidden="true">#</a> \u5728\u63A7\u5236\u5668\u4E2D\u4F7F\u7528API\u8D44\u6E90</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token doc-comment comment">/**
 * Display a listing of the resource.
 *
 * <span class="token keyword">@param</span> <span class="token class-name">User</span> <span class="token parameter">$user</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">\\</span>Illuminate<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Response</span>
 */</span>
<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">index</span><span class="token punctuation">(</span><span class="token class-name type-declaration">User</span> <span class="token variable">$user</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name static-context">UsersResource</span><span class="token operator">::</span><span class="token function">collection</span><span class="token punctuation">(</span><span class="token variable">$user</span><span class="token operator">-&gt;</span><span class="token function">with</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;posts&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">paginate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// \u5982\u679C\u4F60\u4E0D\u60F3\u5728\u4F60\u7684\u54CD\u5E94\u4E2D\u5305\u542B\u8FD9\u4E2A\u5173\u7CFB\uFF0C\u4E0D\u8981\u7528 with()</span>
    <span class="token comment">// return UsersResource::collection($user-&gt;paginate());</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u9759\u6001<code>collection</code>\u65B9\u6CD5\u5C06\u83B7\u53D6\u8981\u8F6C\u6362\u7684\u8BB0\u5F55\u96C6\u5408\uFF0C\u5E76\u786E\u4FDD\u4E3A\u6BCF\u6761\u8BB0\u5F55\u5B9E\u4F8B\u5316\u4E00\u4E2A\u65B0\u7684<code>UsersResource</code>\u3002</p><h2 id="usersresource-\u7C7B" tabindex="-1"><a class="header-anchor" href="#usersresource-\u7C7B" aria-hidden="true">#</a> UsersResource \u7C7B</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Resources</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Resources<span class="token punctuation">\\</span>Json<span class="token punctuation">\\</span>Resource</span><span class="token punctuation">;</span>
<span class="token keyword">class</span> <span class="token class-name-definition class-name">UsersResource</span> <span class="token keyword">extends</span> <span class="token class-name">Resource</span>
<span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * Transform the resource into an array.
     *
     * <span class="token keyword">@param</span>  <span class="token class-name"><span class="token punctuation">\\</span>Illuminate<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Request</span>
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">array</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">toArray</span><span class="token punctuation">(</span><span class="token variable">$request</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span>
            <span class="token string single-quoted-string">&#39;name&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">name</span><span class="token punctuation">,</span>
            <span class="token string single-quoted-string">&#39;email&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">email</span><span class="token punctuation">,</span>
            <span class="token string single-quoted-string">&#39;posts&#39;</span> <span class="token operator">=&gt;</span> <span class="token class-name static-context">PostsResource</span><span class="token operator">::</span><span class="token function">collection</span><span class="token punctuation">(</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">whenLoaded</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;posts&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>\u8FD9\u91CC\u6709\u4E24\u4E2A\u5173\u952E\u90E8\u5206\uFF1A\u5C5E\u6027\u8BBF\u95EE\u5668\u548C\u53EF\u9009\u7684\u5D4C\u5957\u8F6C\u6362</p><ul><li><p>\u5728<code>Resource</code>\u7C7B\u4E2D\uFF0C\u53EF\u4EE5\u901A\u8FC7<code>$this</code>\u76F4\u63A5\u8BBF\u95EE\u6A21\u578B\u5C5E\u6027\u3002\u8FD9\u4E2A\u9B54\u672F\u662F\u5728\u5305\u542B\u5728\u57FA\u672C<code>Resource</code>\u7C7B\u4E2D\u7684<code>DelegatesToResource</code> Trait \u4E2D\u5B8C\u6210\u7684\u3002</p></li><li><p>\u5982\u679C\u6570\u636E\u53EF\u7528\uFF08\u9884\u5148\u52A0\u8F7D\uFF09\uFF0C\u5219\u53EF\u4EE5\u8F6C\u6362\u5173\u7CFB\uFF0C\u6216\u8005\u5728\u5C1A\u672A\u52A0\u8F7D\u6570\u636E\u7684\u60C5\u51B5\u4E0B\u5FFD\u7565\u5B83\u3002\u8FD9\u5C06\u9632\u6B62N+1\u95EE\u9898\uFF0C\u540C\u65F6\u4ECD\u7136\u80FD\u591F\u5904\u7406\u5355\u4E2A\u8D44\u6E90\u7C7B\u7684\u4E0D\u540C\u60C5\u51B5\u3002\u5982\u679C\u5173\u7CFB\u4E0D\u53EF\u7528\uFF0C\u5219\u5C06\u88AB\u5FFD\u7565\uFF0C\u5426\u5219\u5305\u62EC\u5728\u5185\u3002</p></li></ul><h2 id="post-\u8D44\u6E90" tabindex="-1"><a class="header-anchor" href="#post-\u8D44\u6E90" aria-hidden="true">#</a> Post \u8D44\u6E90</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Resources</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Resources<span class="token punctuation">\\</span>Json<span class="token punctuation">\\</span>Resource</span><span class="token punctuation">;</span>
<span class="token keyword">class</span> <span class="token class-name-definition class-name">PostsResource</span> <span class="token keyword">extends</span> <span class="token class-name">Resource</span>
<span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * Transform the resource into an array.
     *
     * <span class="token keyword">@param</span>  <span class="token class-name"><span class="token punctuation">\\</span>Illuminate<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Request</span>
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">array</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">toArray</span><span class="token punctuation">(</span><span class="token variable">$request</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span>
            <span class="token string single-quoted-string">&#39;title&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">title</span><span class="token punctuation">,</span>
            <span class="token string single-quoted-string">&#39;body&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">body</span>
        <span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h2 id="\u7ED3\u8BBA" tabindex="-1"><a class="header-anchor" href="#\u7ED3\u8BBA" aria-hidden="true">#</a> \u7ED3\u8BBA</h2><p>\u4FDD\u6301\u7B80\u5355\uFF0C\u4E00\u6B65\u4E00\u4E2A\u811A\u5370\u3002</p><p>\u672C\u6587\u7684\u91CD\u70B9\u662F\u901A\u8FC7\u5B66\u4E60\u4F7F\u7528<code>Resource::collection</code>\u800C\u4E0D\u662F\u624B\u52A8\u5B9E\u4F8B\u5316\u7C7B\uFF0C\u5E76\u59D4\u6258\u7ED9\u63A7\u5236\u5668\u8D1F\u8D23\u7ED9\u4E88\uFF08\u6216\u4E0D\uFF09\u5173\u7CFB\u6570\u636E\u3002</p><p>\u901A\u8FC7\u4ECE\u63A7\u5236\u5668\u4E2D\u7B80\u5355\u5730\u5220\u9664<code>with(&#39;posts&#39;)</code>\uFF0CAPI\u5C06\u4E0D\u518D\u5728\u54CD\u5E94\u4E2D\u5305\u62EC\u6BCF\u4E2A\u7528\u6237\u7684\u5E16\u5B50\u3002</p><p>\u867D\u7136<code>Fractal</code>\u4F1A\u5728Transformer\u56FE\u5C42\u4E2D\u63D0\u4F9B<code>default</code>\u548C<code>available</code>\u7684\u5305\u542B\uFF0C\u4F46Laravel\u4E0A\u7684\u672C\u5730API\u8D44\u6E90\u5C06\u503E\u5411\u4E8E\u8BA9Controller\u5904\u7406\u8BE5\u903B\u8F91\u3002</p><p>\u6BD5\u7ADF\uFF0C\u7406\u89E3\u8BF7\u6C42\u662F\u63A7\u5236\u8005\u7684\u5DE5\u4F5C\u3002</p>`,33),q=n("\u5728\u4E0B\u4E00\u7BC7\u6587\u7AE0\u4E2D\uFF0C\u6211\u6253\u7B97\u4E3AAPI\u7684\u7528\u6237\u5B9E\u73B0\u4E00\u79CD\u8BF7\u6C42\u5305\u542B\u5173\u7CFB\u7684\u65B9\u5F0F\u3002\u8BF7\u8003\u8651\u5728"),$={href:"https://hackernoon.com",target:"_blank",rel:"noopener noreferrer"},P=n("Media"),A=n("\u4E0A\u5173\u6CE8\u66F4\u591A\u50CF\u8FD9\u6837\u7684\u6587\u7AE0\u3002");function I(p,U){const a=t("ExternalLinkIcon");return o(),c(l,null,[s("img",{src:p.$withBase("/images/languages/laravel/reusable-api-resource-with-nested-relationship-laravel-5-5/hero.png"),alt:""},null,8,k),d,s("blockquote",null,[s("p",null,[b,s("a",m,[h,e(a)])])]),s("p",null,[g,s("a",v,[f,e(a)]),y,s("a",_,[w,e(a)]),x]),R,s("p",null,[q,s("a",$,[P,e(a)]),A])],64)}var F=i(u,[["render",I]]);export{F as default};
