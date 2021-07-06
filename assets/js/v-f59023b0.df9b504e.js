(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2562],{4123:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>e});const e={key:"v-f59023b0",path:"/languages/laravel/creating-helpers-function.html",title:"在Laravel项目中创建自己的PHP函数",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"在Laravel应用程序中创建Helpers文件",slug:"在laravel应用程序中创建helpers文件",children:[]},{level:2,title:"自动加载",slug:"自动加载",children:[]},{level:2,title:"参考链接",slug:"参考链接",children:[]}],filePathRelative:"languages/laravel/creating-helpers-function.md",git:{updatedTime:1625565406e3,contributors:[]}}},1128:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>k});var e=a(6252);const p=(0,e.Wm)("h1",{id:"在laravel项目中创建自己的php函数",tabindex:"-1"},[(0,e.Wm)("a",{class:"header-anchor",href:"#在laravel项目中创建自己的php函数","aria-hidden":"true"},"#"),(0,e.Uk)(" 在Laravel项目中创建自己的PHP函数")],-1),t=(0,e.Uk)("Laravel 提供了许多优秀的"),l={href:"https://laravel.com/docs/5.7/helpers",target:"_blank",rel:"noopener noreferrer"},o=(0,e.Uk)("辅助函数"),r=(0,e.Uk)("，可以方便地处理数组Array，文件路径File Path，字符串String和路由Router等操作，例如"),c=(0,e.Wm)("code",null,"dd()",-1),u=(0,e.Uk)(" 函数。"),i=(0,e.uE)('<p>可以使用 Composer 自动导入 Laravel 应用程序和PHP包，为自己定义一组辅助函数。</p><h2 id="在laravel应用程序中创建helpers文件" tabindex="-1"><a class="header-anchor" href="#在laravel应用程序中创建helpers文件" aria-hidden="true">#</a> 在Laravel应用程序中创建Helpers文件</h2><p>可能希望包含辅助函数的第一个场景是在 Laravel 应用程序的上下文中。根据偏好或者项目要求，可以自定义函数文件的位置，但这里有一些建议的位置：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>app/helpers.php\napp/Http/helpers.php\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>推荐将其保留在<code>app/helpers.php</code>应用程序命名空间的根目录中。</p><h2 id="自动加载" tabindex="-1"><a class="header-anchor" href="#自动加载" aria-hidden="true">#</a> 自动加载</h2><p>在项目的<code>composer.json</code>中，可以看到<code>autoload</code>和<code>autoload-dev</code></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;autoload&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;classmap&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token string">&quot;database/seeds&quot;</span><span class="token punctuation">,</span>\n      <span class="token string">&quot;database/factories&quot;</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;psr-4&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token property">&quot;App\\\\&quot;</span><span class="token operator">:</span> <span class="token string">&quot;app/&quot;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;autoload-dev&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;psr-4&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token property">&quot;Tests\\\\&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tests/&quot;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>如果要添加帮助文件，composer有一个files键（可以是文件路径数组），您可以在其中定义autoload</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;autoload&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;files&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token string">&quot;app/helpers.php&quot;</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;classmap&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token string">&quot;database/seeds&quot;</span><span class="token punctuation">,</span>\n      <span class="token string">&quot;database/factories&quot;</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;psr-4&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token property">&quot;App\\\\&quot;</span><span class="token operator">:</span> <span class="token string">&quot;app/&quot;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>向files数组中添加新路径后，需要执行下面的命令告诉composer自动加载：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">composer</span> dump-autoload\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>现在，每次请求都会自动加载<code>helpers.php</code>文件。</p><h2 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接" aria-hidden="true">#</a> 参考链接</h2>',14),b={href:"https://laravel-news.com/creating-helpers",target:"_blank",rel:"noopener noreferrer"},d=(0,e.Uk)("Creating Your Own PHP Helpers in a Laravel Project"),k={render:function(n,s){const a=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.j4)(e.HY,null,[p,(0,e.Wm)("p",null,[t,(0,e.Wm)("a",l,[o,(0,e.Wm)(a)]),r,c,u]),i,(0,e.Wm)("ul",null,[(0,e.Wm)("li",null,[(0,e.Wm)("a",b,[d,(0,e.Wm)(a)])])])],64)}}}}]);