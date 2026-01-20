import{_ as p,M as o,p as l,q as r,R as s,t as a,N as t,a1 as i}from"./framework-64ffeeb4.js";const c={},d={href:"https://laravel.com/docs/master/helpers",target:"_blank",rel:"noopener noreferrer"},u={href:"https://laravel-news.com/creating-helpers",target:"_blank",rel:"noopener noreferrer"};function v(k,n){const e=o("ExternalLinkIcon");return l(),r("div",null,[n[6]||(n[6]=s("h1",{id:"创建自定义-php-函数",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#创建自定义-php-函数","aria-hidden":"true"},"#"),a(" 创建自定义 PHP 函数")],-1)),s("p",null,[n[1]||(n[1]=a("Laravel 提供了许多优秀的",-1)),s("a",d,[n[0]||(n[0]=a("辅助函数",-1)),t(e)]),n[2]||(n[2]=a("，可以方便地处理数组Array，文件路径File Path，字符串String和路由Router等操作，例如",-1)),n[3]||(n[3]=s("code",null,"dd()",-1)),n[4]||(n[4]=a(" 函数。",-1))]),n[7]||(n[7]=i(`<p>可以使用 Composer 自动导入 Laravel 应用程序和PHP包，为自己定义一组辅助函数。</p><h2 id="创建-helpers-文件" tabindex="-1"><a class="header-anchor" href="#创建-helpers-文件" aria-hidden="true">#</a> 创建 Helpers 文件</h2><p>可能希望包含辅助函数的第一个场景是在 Laravel 应用程序的上下文中。根据偏好或者项目要求，可以自定义函数文件的位置，但这里有一些建议的位置：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>app/Supports/helpers.php
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>现在，每次请求都会自动加载 <code>helpers.php</code> 文件。</p><h2 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接" aria-hidden="true">#</a> 参考链接</h2>`,14)),s("ul",null,[s("li",null,[s("a",u,[n[5]||(n[5]=a("Creating Your Own PHP Helpers in a Laravel Project",-1)),t(e)])])])])}const m=p(c,[["render",v],["__file","creating-helpers-function.html.vue"]]);export{m as default};
