(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4403],{8333:(a,e,n)=>{"use strict";n.r(e),n.d(e,{data:()=>s});const s={key:"v-3f5f1348",path:"/languages/laravel/packages/using-laravel-query-cache-package-to-optimize-laravel-eloquent-queries.html",title:"使用 laravel-query-cache 来缓存数据库的 SELECT 请求",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"安装和配置",slug:"安装和配置",children:[{level:3,title:"安装",slug:"安装",children:[]},{level:3,title:"配置",slug:"配置",children:[]}]},{level:2,title:"测试",slug:"测试",children:[]},{level:2,title:"参考地址",slug:"参考地址",children:[]}],filePathRelative:"languages/laravel/packages/using-laravel-query-cache-package-to-optimize-laravel-eloquent-queries.md",git:{updatedTime:1625565406e3,contributors:[]}}},9328:(a,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>q});var s=n(6252);const l=(0,s.Wm)("h1",{id:"使用-laravel-query-cache-来缓存数据库的-select-请求",tabindex:"-1"},[(0,s.Wm)("a",{class:"header-anchor",href:"#使用-laravel-query-cache-来缓存数据库的-select-请求","aria-hidden":"true"},"#"),(0,s.Uk)(" 使用 laravel-query-cache 来缓存数据库的 SELECT 请求")],-1),p=(0,s.Wm)("p",null,"在实际的开发中，经常需要缓存查询数据库的结果以提升软件的性能。",-1),r=(0,s.Uk)("这里使用"),t={href:"https://github.com/Neurony/laravel-query-cache",target:"_blank",rel:"noopener noreferrer"},c=(0,s.Uk)("Neurony/laravel-query-cache"),o=(0,s.Uk)("来实现缓存，正如拓展包 README 中说到的，它专注于允许所有的查询操作，或者是在一次请求中重复的数据库查询。"),u=(0,s.uE)('<blockquote><p>由于使用到了 laravel 的缓存 tag 标记，支持的缓存驱动有：<code>apc</code>, <code>array</code>, <code>redis</code>, <code>memcached</code>，这里推荐使用的缓存驱动是：<code>redis</code>。</p></blockquote><h2 id="安装和配置" tabindex="-1"><a class="header-anchor" href="#安装和配置" aria-hidden="true">#</a> 安装和配置</h2><h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3><p>执行下面的两条命令，安装拓展包和获取拓展包的配置文件。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">composer</span> require neurony/laravel-query-cache\n\nphp artisan vendor:publish --provider<span class="token operator">=</span><span class="token string">&quot;Neurony\\QueryCache\\ServiceProvider&quot;</span> --tag<span class="token operator">=</span><span class="token string">&quot;config&quot;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h3><ul><li>修改项目环境文件 <code>.env</code> 中，添加如下环境变量：</li></ul><div class="language-dotenv ext-dotenv line-numbers-mode"><pre class="language-dotenv"><code># The driver used for storing the cache keys that this package generates.\n# This driver can differ from your main Laravel&#39;s CACHE_DRIVER.\nQUERY_CACHE_DRIVER=redis\n\n# Wether to cache absolutely all queries for the current request.\nCACHE_ALL_QUERIES=true\n\n# Wether to cache only the duplicated queries for the current request.\nCACHE_DUPLICATE_QUERIES=true\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ul><li>修改要缓存的模型添加 traits</li></ul><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>\n\n<span class="token keyword">namespace</span> <span class="token package">App</span><span class="token punctuation">;</span>\n\n<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Database<span class="token punctuation">\\</span>Eloquent<span class="token punctuation">\\</span>Model</span><span class="token punctuation">;</span>\n<span class="token keyword">use</span> <span class="token package">Neurony<span class="token punctuation">\\</span>QueryCache<span class="token punctuation">\\</span>Traits<span class="token punctuation">\\</span>IsCacheable</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name-definition class-name">YourModel</span> <span class="token keyword">extends</span> <span class="token class-name">Model</span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">use</span> <span class="token package">IsCacheable</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h2>',11),i=(0,s.Uk)("我们通过"),d={href:"https://github.com/barryvdh/laravel-debugbar",target:"_blank",rel:"noopener noreferrer"},h=(0,s.Uk)("barryvdh/laravel-debugbar"),k=(0,s.Uk)(" 来查看优化结果。"),b=(0,s.uE)('<p>比如获取所有的用户数据</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$users</span> <span class="token operator">=</span> <span class="token class-name class-name-fully-qualified static-context"><span class="token punctuation">\\</span>App<span class="token punctuation">\\</span>User</span><span class="token operator">::</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',2),m=(0,s.uE)('<p>再比如获取关联数据缓存</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$user</span> <span class="token operator">=</span> <span class="token class-name class-name-fully-qualified static-context"><span class="token punctuation">\\</span>App<span class="token punctuation">\\</span>User</span><span class="token operator">::</span><span class="token function">with</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;posts&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',2),g=(0,s.Wm)("h2",{id:"参考地址",tabindex:"-1"},[(0,s.Wm)("a",{class:"header-anchor",href:"#参考地址","aria-hidden":"true"},"#"),(0,s.Uk)(" 参考地址")],-1),v={href:"https://github.com/Neurony/laravel-query-cache",target:"_blank",rel:"noopener noreferrer"},y=(0,s.Uk)("Neurony/laravel-query-cache"),q={render:function(a,e){const n=(0,s.up)("OutboundLink");return(0,s.wg)(),(0,s.j4)(s.HY,null,[l,p,(0,s.Wm)("p",null,[r,(0,s.Wm)("a",t,[c,(0,s.Wm)(n)]),o]),u,(0,s.Wm)("p",null,[i,(0,s.Wm)("a",d,[h,(0,s.Wm)(n)]),k]),b,(0,s.Wm)("img",{src:a.$withBase("/images/languages/laravel/packages/using-laravel-query-cache-package-to-optimize-laravel-eloquent-queries/laravel-query-cache.png"),alt:""},null,8,["src"]),m,(0,s.Wm)("img",{src:a.$withBase("/images/languages/laravel/packages/using-laravel-query-cache-package-to-optimize-laravel-eloquent-queries/laravel-query-cache-relationship-data.png"),alt:""},null,8,["src"]),g,(0,s.Wm)("ul",null,[(0,s.Wm)("li",null,[(0,s.Wm)("a",v,[y,(0,s.Wm)(n)])])])],64)}}}}]);