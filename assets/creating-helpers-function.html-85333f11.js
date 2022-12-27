import{_ as t,M as o,p,q as l,R as s,t as n,N as e,a1 as r}from"./framework-96b046e1.js";const i={},c=s("h1",{id:"创建自定义-php-函数",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#创建自定义-php-函数","aria-hidden":"true"},"#"),n(" 创建自定义 PHP 函数")],-1),d={href:"https://laravel.com/docs/master/helpers",target:"_blank",rel:"noopener noreferrer"},u=s("code",null,"dd()",-1),v=r(`<p>可以使用 Composer 自动导入 Laravel 应用程序和PHP包，为自己定义一组辅助函数。</p><h2 id="创建-helpers-文件" tabindex="-1"><a class="header-anchor" href="#创建-helpers-文件" aria-hidden="true">#</a> 创建 Helpers 文件</h2><p>可能希望包含辅助函数的第一个场景是在 Laravel 应用程序的上下文中。根据偏好或者项目要求，可以自定义函数文件的位置，但这里有一些建议的位置：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>app/Supports/helpers.php
app/Http/Supports/helpers.php
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>推荐将其保留在 <code>app/Supports/helpers.php</code> 应用程序命名空间的根目录中。</p><h2 id="自动加载" tabindex="-1"><a class="header-anchor" href="#自动加载" aria-hidden="true">#</a> 自动加载</h2><p>在项目的<code>composer.json</code>中，可以看到<code>autoload</code>和<code>autoload-dev</code></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;autoload&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;classmap&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;database/seeds&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;database/factories&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;psr-4&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;App\\\\&quot;</span><span class="token operator">:</span> <span class="token string">&quot;app/&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;autoload-dev&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;psr-4&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;Tests\\\\&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tests/&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果要添加函数文件，<code>composer</code> 有一个 <code>files</code> 键（可以是文件路径数组），可以在其中定义 <code>autoload</code></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;autoload&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;files&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;app/Supports/helpers.php&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;classmap&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;database/seeds&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;database/factories&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;psr-4&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;App\\\\&quot;</span><span class="token operator">:</span> <span class="token string">&quot;app/&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line"> </div><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>向 <code>files</code> 数组中添加新路径后，需要执行下面的命令告诉 <code>composer</code> 自动加载：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">composer</span> dump-autoload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>现在，每次请求都会自动加载 <code>helpers.php</code> 文件。</p><h2 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接" aria-hidden="true">#</a> 参考链接</h2>`,14),k={href:"https://laravel-news.com/creating-helpers",target:"_blank",rel:"noopener noreferrer"};function b(h,m){const a=o("ExternalLinkIcon");return p(),l("div",null,[c,s("p",null,[n("Laravel 提供了许多优秀的"),s("a",d,[n("辅助函数"),e(a)]),n("，可以方便地处理数组Array，文件路径File Path，字符串String和路由Router等操作，例如"),u,n(" 函数。")]),v,s("ul",null,[s("li",null,[s("a",k,[n("Creating Your Own PHP Helpers in a Laravel Project"),e(a)])])])])}const g=t(i,[["render",b],["__file","creating-helpers-function.html.vue"]]);export{g as default};
