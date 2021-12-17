(self.webpackChunkblog=self.webpackChunkblog||[]).push([[8350],{7438:(s,n,a)=>{"use strict";a.r(n),a.d(n,{data:()=>e});const e={key:"v-60172d58",path:"/languages/laravel/api/reusable-api-resource-with-nested-relationship-laravel-5-5.html",title:"嵌套关系的可重用API资源 - Laravel5.5",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"安装干净的Laravel 5.5项目",slug:"安装干净的laravel-5-5项目",children:[]},{level:2,title:"准备数据库",slug:"准备数据库",children:[]},{level:2,title:"重命名资源（修复遗留问题）",slug:"重命名资源-修复遗留问题",children:[]},{level:2,title:"在控制器中使用API资源",slug:"在控制器中使用api资源",children:[]},{level:2,title:"UsersResource 类",slug:"usersresource-类",children:[]},{level:2,title:"Post 资源",slug:"post-资源",children:[]},{level:2,title:"结论",slug:"结论",children:[]}],filePathRelative:"languages/laravel/api/reusable-api-resource-with-nested-relationship-laravel-5-5.md",git:{updatedTime:1639727659e3,contributors:[]}}},3100:(s,n,a)=>{"use strict";a.r(n),a.d(n,{default:()=>y});var e=a(6252);const p=(0,e.Wm)("h1",{id:"嵌套关系的可重用api资源-laravel5-5",tabindex:"-1"},[(0,e.Wm)("a",{class:"header-anchor",href:"#嵌套关系的可重用api资源-laravel5-5","aria-hidden":"true"},"#"),(0,e.Uk)(" 嵌套关系的可重用API资源 - Laravel5.5")],-1),t=(0,e.Uk)("本文原址："),o={href:"https://hackernoon.com/reusable-api-resource-with-nested-relationship-laravel-5-5-c654c7243869",target:"_blank",rel:"noopener noreferrer"},l=(0,e.Uk)("hackernoon.com"),c=(0,e.Uk)("两天前，作者发表了对Laravel最新的API资源功能的第一印象"),r={href:"https://hackernoon.com/reusable-api-resource-with-nested-relationship-laravel-5-5-c654c7243869",target:"_blank",rel:"noopener noreferrer"},i=(0,e.Uk)("原文地址"),u=(0,e.Uk)(" && "),k={href:"/languages/laravel/api/first-impressions-on-laravel-api-resources.md",target:"_blank",rel:"noopener noreferrer"},b=(0,e.Uk)("译文地址"),d=(0,e.Uk)("。"),m=(0,e.uE)('<p>下面将进一步在Transformation层中使用更多的Laravel友好的方法。</p><h2 id="安装干净的laravel-5-5项目" tabindex="-1"><a class="header-anchor" href="#安装干净的laravel-5-5项目" aria-hidden="true">#</a> 安装干净的Laravel 5.5项目</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">composer</span> create-project laravel/laravel responses dev-develop\n<span class="token builtin class-name">cd</span> responses\n<span class="token function">touch</span> database/database.sqlite\nphp artisan make:model Post -mfa\nphp artisan make:resource UsersWithPostsResource\nphp artisan make:resource PostsResource\nphp artisan make:controller UsersController --resource\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>更改<code>.env</code>文件以使用SQLite并删除每个其他数据库变量。</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>DB_CONNECTION=sqlite\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="准备数据库" tabindex="-1"><a class="header-anchor" href="#准备数据库" aria-hidden="true">#</a> 准备数据库</h2><ul><li><code>posts</code>迁移<code>database/migrations/______create_posts_table.php</code></li></ul><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token class-name static-context">Schema</span><span class="token operator">::</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;posts&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">Blueprint</span> <span class="token variable">$table</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token variable">$table</span><span class="token operator">-&gt;</span><span class="token function">increments</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;id&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token variable">$table</span><span class="token operator">-&gt;</span><span class="token keyword type-declaration">string</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;title&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token variable">$table</span><span class="token operator">-&gt;</span><span class="token keyword type-declaration">string</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;body&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token variable">$table</span><span class="token operator">-&gt;</span><span class="token function">unsignedInteger</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;user_id&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token variable">$table</span><span class="token operator">-&gt;</span><span class="token function">timestamps</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ul><li>Post Factory <code>database/factories/PostFactory.php</code></li></ul><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>\n\n<span class="token keyword">use</span> <span class="token package">Faker<span class="token punctuation">\\</span>Generator</span> <span class="token keyword">as</span> Faker<span class="token punctuation">;</span>\n\n<span class="token variable">$factory</span><span class="token operator">-&gt;</span><span class="token function">define</span><span class="token punctuation">(</span><span class="token class-name class-name-fully-qualified static-context">App<span class="token punctuation">\\</span>Post</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">Faker</span> <span class="token variable">$faker</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">[</span>\n        <span class="token string single-quoted-string">&#39;title&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$faker</span><span class="token operator">-&gt;</span><span class="token property">sentence</span><span class="token punctuation">,</span>\n        <span class="token string single-quoted-string">&#39;body&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$faker</span><span class="token operator">-&gt;</span><span class="token property">paragraph</span><span class="token punctuation">,</span>\n        <span class="token string single-quoted-string">&#39;user_id&#39;</span> <span class="token operator">=&gt;</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">return</span> <span class="token function">factory</span><span class="token punctuation">(</span><span class="token class-name class-name-fully-qualified static-context"><span class="token punctuation">\\</span>App<span class="token punctuation">\\</span>User</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><ul><li>用户有 Posts 关联关系<code>app/User.php</code></li></ul><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">posts</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">hasMany</span><span class="token punctuation">(</span><span class="token class-name static-context">Post</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul><li>避免 Posts 上的大量分配</li></ul><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>\n\n<span class="token keyword">namespace</span> <span class="token package">App</span><span class="token punctuation">;</span>\n\n<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Database<span class="token punctuation">\\</span>Eloquent<span class="token punctuation">\\</span>Model</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name-definition class-name">Post</span> <span class="token keyword">extends</span> <span class="token class-name">Model</span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">protected</span> <span class="token variable">$guarded</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><ul><li>填充数据库</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>php artisan migrate:fresh\nphp artisan tinker\nfactory<span class="token punctuation">(</span>App<span class="token punctuation">\\</span>Post::class<span class="token punctuation">)</span>-<span class="token operator">&gt;</span>times<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>-<span class="token operator">&gt;</span>create<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nfactory<span class="token punctuation">(</span>App<span class="token punctuation">\\</span>Post::class<span class="token punctuation">)</span>-<span class="token operator">&gt;</span>times<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>-<span class="token operator">&gt;</span>create<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;user_id&#39;</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="重命名资源-修复遗留问题" tabindex="-1"><a class="header-anchor" href="#重命名资源-修复遗留问题" aria-hidden="true">#</a> 重命名资源（修复遗留问题）</h2><p>上一篇文章创建了一个名为<code>UsersWithPostsResource</code>的资源。让我们将其重命名为<code>UsersResource</code>，并了解如何在以下步骤中重用它。</p><h2 id="在控制器中使用api资源" tabindex="-1"><a class="header-anchor" href="#在控制器中使用api资源" aria-hidden="true">#</a> 在控制器中使用API资源</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>\n<span class="token doc-comment comment">/**\n * Display a listing of the resource.\n *\n * <span class="token keyword">@param</span> <span class="token class-name">User</span> <span class="token parameter">$user</span>\n * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">\\</span>Illuminate<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Response</span>\n */</span>\n<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">index</span><span class="token punctuation">(</span><span class="token class-name type-declaration">User</span> <span class="token variable">$user</span><span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token class-name static-context">UsersResource</span><span class="token operator">::</span><span class="token function">collection</span><span class="token punctuation">(</span><span class="token variable">$user</span><span class="token operator">-&gt;</span><span class="token function">with</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;posts&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">paginate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token comment">// 如果你不想在你的响应中包含这个关系，不要用 with()</span>\n    <span class="token comment">// return UsersResource::collection($user-&gt;paginate());</span>\n<span class="token punctuation">}</span>\n</span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>静态<code>collection</code>方法将获取要转换的记录集合，并确保为每条记录实例化一个新的<code>UsersResource</code>。</p><h2 id="usersresource-类" tabindex="-1"><a class="header-anchor" href="#usersresource-类" aria-hidden="true">#</a> UsersResource 类</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>\n<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Resources</span><span class="token punctuation">;</span>\n<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Resources<span class="token punctuation">\\</span>Json<span class="token punctuation">\\</span>Resource</span><span class="token punctuation">;</span>\n<span class="token keyword">class</span> <span class="token class-name-definition class-name">UsersResource</span> <span class="token keyword">extends</span> <span class="token class-name">Resource</span>\n<span class="token punctuation">{</span>\n    <span class="token doc-comment comment">/**\n     * Transform the resource into an array.\n     *\n     * <span class="token keyword">@param</span>  <span class="token class-name"><span class="token punctuation">\\</span>Illuminate<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Request</span>\n     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">array</span></span>\n     */</span>\n    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">toArray</span><span class="token punctuation">(</span><span class="token variable">$request</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token punctuation">[</span>\n            <span class="token string single-quoted-string">&#39;name&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">name</span><span class="token punctuation">,</span>\n            <span class="token string single-quoted-string">&#39;email&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">email</span><span class="token punctuation">,</span>\n            <span class="token string single-quoted-string">&#39;posts&#39;</span> <span class="token operator">=&gt;</span> <span class="token class-name static-context">PostsResource</span><span class="token operator">::</span><span class="token function">collection</span><span class="token punctuation">(</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">whenLoaded</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;posts&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n        <span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>这里有两个关键部分：属性访问器和可选的嵌套转换</p><ul><li><p>在<code>Resource</code>类中，可以通过<code>$this</code>直接访问模型属性。这个魔术是在包含在基本<code>Resource</code>类中的<code>DelegatesToResource</code> Trait 中完成的。</p></li><li><p>如果数据可用（预先加载），则可以转换关系，或者在尚未加载数据的情况下忽略它。这将防止N+1问题，同时仍然能够处理单个资源类的不同情况。如果关系不可用，则将被忽略，否则包括在内。</p></li></ul><h2 id="post-资源" tabindex="-1"><a class="header-anchor" href="#post-资源" aria-hidden="true">#</a> Post 资源</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>\n<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Resources</span><span class="token punctuation">;</span>\n<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Resources<span class="token punctuation">\\</span>Json<span class="token punctuation">\\</span>Resource</span><span class="token punctuation">;</span>\n<span class="token keyword">class</span> <span class="token class-name-definition class-name">PostsResource</span> <span class="token keyword">extends</span> <span class="token class-name">Resource</span>\n<span class="token punctuation">{</span>\n    <span class="token doc-comment comment">/**\n     * Transform the resource into an array.\n     *\n     * <span class="token keyword">@param</span>  <span class="token class-name"><span class="token punctuation">\\</span>Illuminate<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Request</span>\n     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">array</span></span>\n     */</span>\n    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">toArray</span><span class="token punctuation">(</span><span class="token variable">$request</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token punctuation">[</span>\n            <span class="token string single-quoted-string">&#39;title&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">title</span><span class="token punctuation">,</span>\n            <span class="token string single-quoted-string">&#39;body&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">body</span>\n        <span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h2 id="结论" tabindex="-1"><a class="header-anchor" href="#结论" aria-hidden="true">#</a> 结论</h2><p>保持简单，一步一个脚印。</p><p>本文的重点是通过学习使用<code>Resource::collection</code>而不是手动实例化类，并委托给控制器负责给予（或不）关系数据。</p><p>通过从控制器中简单地删除<code>with(&#39;posts&#39;)</code>，API将不再在响应中包括每个用户的帖子。</p><p>虽然<code>Fractal</code>会在Transformer图层中提供<code>default</code>和<code>available</code>的包含，但Laravel上的本地API资源将倾向于让Controller处理该逻辑。</p><p>毕竟，理解请求是控制者的工作。</p>',33),g=(0,e.Uk)("在下一篇文章中，我打算为API的用户实现一种请求包含关系的方式。请考虑在"),h={href:"https://hackernoon.com",target:"_blank",rel:"noopener noreferrer"},v=(0,e.Uk)("Media"),f=(0,e.Uk)("上关注更多像这样的文章。"),y={render:function(s,n){const a=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.j4)(e.HY,null,[(0,e.Wm)("img",{src:s.$withBase("/images/languages/laravel/reusable-api-resource-with-nested-relationship-laravel-5-5/hero.png"),alt:""},null,8,["src"]),p,(0,e.Wm)("blockquote",null,[(0,e.Wm)("p",null,[t,(0,e.Wm)("a",o,[l,(0,e.Wm)(a)])])]),(0,e.Wm)("p",null,[c,(0,e.Wm)("a",r,[i,(0,e.Wm)(a)]),u,(0,e.Wm)("a",k,[b,(0,e.Wm)(a)]),d]),m,(0,e.Wm)("p",null,[g,(0,e.Wm)("a",h,[v,(0,e.Wm)(a)]),f])],64)}}}}]);