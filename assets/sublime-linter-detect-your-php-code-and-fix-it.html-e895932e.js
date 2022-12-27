import{_ as c,M as p,p as i,q as l,R as n,t as s,N as t,a1 as e}from"./framework-96b046e1.js";const r={},d=n("h1",{id:"sublimelinter之php代码检测与自动修复",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#sublimelinter之php代码检测与自动修复","aria-hidden":"true"},"#"),s(" SublimeLinter之PHP代码检测与自动修复")],-1),u=n("code",null,"JavaScript",-1),h=n("code",null,"CSS",-1),g=n("code",null,"HTML",-1),k=n("code",null,"Java",-1),m=n("code",null,"PHP",-1),b=n("code",null,"Python",-1),_=n("code",null,"Ruby",-1),f={href:"https://github.com/SublimeLinter/SublimeLinter",target:"_blank",rel:"noopener noreferrer"},v=e('<p>本文以检测PHP文件代码为示例，安装<code>sublimeLinter-php</code>和<code>squizlabs/php_codesniffer</code>Composer包。其他语言请参考对应的文档。</p><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><h3 id="安装-sublimelinter" tabindex="-1"><a class="header-anchor" href="#安装-sublimelinter" aria-hidden="true">#</a> 安装 SublimeLinter</h3><p>用<code>Package Control</code>安装<code>SublimeLinter</code>（<code>⌘(Command) + ⇧(Shift) + P</code> –&gt; 输入 <code>Install</code>…打开<strong>Package Control</strong> -&gt; 输入<code>SublimeLinter</code>后回车进入安装）。</p><h3 id="安装-sublimelinter-phpcs" tabindex="-1"><a class="header-anchor" href="#安装-sublimelinter-phpcs" aria-hidden="true">#</a> 安装 SublimeLinter-phpcs</h3><p>用<code>Package Control</code>安装<code>SublimeLinter-php</code>（<code>⌘(Command) + ⇧(Shift) + P</code> –&gt; 输入 <code>Install</code>…打开<strong>Package Control</strong> -&gt; 输入<code>sublime linter phpcs</code>后选择<code>SublimeLinter-php</code>回车进入安装）。</p>',6),x={href:"https://github.com/SublimeLinter/SublimeLinter-phpcs",target:"_blank",rel:"noopener noreferrer"},P=n("code",null,'composer global require "squizlabs/php_codesniffer=*"',-1),S=n("code",null,"phpcs",-1),q=e('<p>修改之后重启Sublime，如果我们在php代码文件写了不规范的代码，将看到左侧会有红灯标识。</p><p>手动去一一修复这些代码格式是没有问题的，但是这是一个费事费力的工作，有没有功能能辅助我们完成呢？答案是：<code>php cs fixer</code>。</p><h3 id="安装自动修复-php-cs-fixer" tabindex="-1"><a class="header-anchor" href="#安装自动修复-php-cs-fixer" aria-hidden="true">#</a> 安装自动修复 php cs fixer</h3><p>用<code>Package Control</code>安装<code>PHP CS Fixer</code>（<code>⌘(Command) + ⇧(Shift) + P</code> –&gt; 输入 <code>Install</code>…打开<strong>Package Control</strong> -&gt; 输入<code>php cs fixer</code> 后回车进入安装）。</p>',4),C={href:"https://github.com/adael/SublimePhpCsFixer",target:"_blank",rel:"noopener noreferrer"},L=n("code",null,"composer global require friendsofphp/php-cs-fixer",-1),y=e(`<h2 id="使用-php-cs-fixer" tabindex="-1"><a class="header-anchor" href="#使用-php-cs-fixer" aria-hidden="true">#</a> 使用 php cs fixer</h2><h3 id="使用快捷键修复代码" tabindex="-1"><a class="header-anchor" href="#使用快捷键修复代码" aria-hidden="true">#</a> 使用快捷键修复代码</h3><p>按快捷键<code>Command + Shift + p</code>呼出控制命令台，输入<code>php cs fixer</code>，输入回车，惊奇的发现代码被完好的格式化为符合PSR-2标准的代码了。</p><p>嗯，这样视乎看上去很好，在写完代码后执行修复代码操作，但是我们能不能在保存文件的时候就执行上面的修复代码呢？</p><h3 id="简单配置-php-cs-fixer" tabindex="-1"><a class="header-anchor" href="#简单配置-php-cs-fixer" aria-hidden="true">#</a> 简单配置 php cs fixer</h3><p>在当前操作的用户家目录下建立一个<code>$HOME/.phpcsfixer</code>文件，内容大概为：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token variable">$finder</span> <span class="token operator">=</span> <span class="token class-name class-name-fully-qualified static-context">PhpCsFixer<span class="token punctuation">\\</span>Finder</span><span class="token operator">::</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
          <span class="token operator">-&gt;</span><span class="token function">exclude</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;tests/&#39;</span><span class="token punctuation">)</span>
          <span class="token operator">-&gt;</span><span class="token function">in</span><span class="token punctuation">(</span><span class="token constant">__DIR__</span><span class="token punctuation">)</span>
<span class="token punctuation">;</span>

<span class="token keyword">return</span> <span class="token class-name class-name-fully-qualified static-context">PhpCsFixer<span class="token punctuation">\\</span>Config</span><span class="token operator">::</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">setRules</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
        <span class="token string single-quoted-string">&#39;@PSR2&#39;</span> <span class="token operator">=&gt;</span> <span class="token constant boolean">true</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;align_multiline_comment&#39;</span> <span class="token operator">=&gt;</span> <span class="token constant boolean">true</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;no_trailing_whitespace&#39;</span> <span class="token operator">=&gt;</span> <span class="token constant boolean">true</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;no_short_echo_tag&#39;</span><span class="token operator">=&gt;</span> <span class="token constant boolean">true</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;array_syntax&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;syntax&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;short&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;no_unused_imports&#39;</span> <span class="token operator">=&gt;</span> <span class="token constant boolean">true</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;ordered_imports&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;sortAlgorithm&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;length&#39;</span><span class="token punctuation">]</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">setFinder</span><span class="token punctuation">(</span><span class="token variable">$finder</span><span class="token punctuation">)</span>
<span class="token punctuation">;</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><ul><li><code>@PSR2</code> 代码满足PSR-2标准</li><li><code>align_multiline_comment</code></li><li><code>no_trailing_whitespace</code> 删除非空行尾部的尾部空白</li><li><code>no_short_echo_tag</code> 将长格式<code>&lt;?php echo</code>语法替换为简写<code>&lt;?=</code></li><li><code>array_syntax</code> 所有<code>array()</code>的定义都转换成<code>[]</code>的方式</li><li><code>no_unused_imports</code> PHP类中没有使用的<code>use</code>类自动删除</li><li><code>ordered_imports</code> 按照长度排序</li></ul></blockquote><h3 id="保存时执行php-cs-fixer" tabindex="-1"><a class="header-anchor" href="#保存时执行php-cs-fixer" aria-hidden="true">#</a> 保存时执行php cs fixer</h3>`,9),H=["src"],F=e(`<p>路径是<code>Sublime Text</code>-&gt;<code>Preferences</code>-&gt;<code>Package Settings</code>-&gt;<code>PHP CS Fixer</code>-&gt;<code>Setting User</code>。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;config&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/Users/curder/.phpcsfixer&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;on_save&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>保存完上面的配置之后，再保存修改过的php文件的时候将自动执行 php cs fixer。 并且也会使用我们定义在<code>~/.phpcsfixer</code>文件中的配置。</p>`,3);function R(o,I){const a=p("ExternalLinkIcon");return i(),l("div",null,[d,n("p",null,[s("SublimeLinter支持许多的语言检测，支持 "),u,s("、"),h,s("、"),g,s("、"),k,s("、"),m,s("、"),b,s("、"),_,s(" 等十多种开发语言，项目"),n("a",f,[s("GitHub地址"),t(a)]),s("。")]),v,n("blockquote",null,[n("p",null,[s("项目"),n("a",x,[s("GitHub"),t(a)]),s("地址。需要使用Composer全局安装"),P,s("，后面会使用到这个"),S,s("命令。")])]),q,n("blockquote",null,[n("p",null,[s("项目"),n("a",C,[s("GitHub"),t(a)]),s("地址。需要使用Composer全局安装"),L])]),y,n("img",{src:o.$withBase("/images/tools/sublime/phpcs-fixer.png"),alt:""},null,8,H),F])}const w=c(r,[["render",R],["__file","sublime-linter-detect-your-php-code-and-fix-it.html.vue"]]);export{w as default};
