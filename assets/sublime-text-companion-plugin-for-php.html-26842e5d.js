import{_ as p,M as i,p as c,q as l,R as n,t as s,N as e,a1 as o}from"./framework-fb0bc66b.js";const u={},r=n("h1",{id:"sublime-php-companion",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#sublime-php-companion","aria-hidden":"true"},"#"),s(" Sublime PHP Companion")],-1),d=n("ol",null,[n("li",null,[n("p",null,[n("code",null,"Sublime PHP Companion"),s("在开发中能协助开发者快速导入需要的类命名空间，这在繁重的开发中非常有用。")])]),n("li",null,[n("p",null,"它也可以快速添加构造函数和类的属性。")])],-1),v={href:"https://github.com/erichard/SublimePHPCompanion",target:"_blank",rel:"noopener noreferrer"},k=o(`<p>最后结合快捷键使用，加速开发。</p><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><p>用<code>Package Control</code>安装<code>PHP Companion</code>，回车安装好插件（<code>⌘(Command) + ⇧(Shift) + P</code> –&gt; 输入 <code>install</code>…打开<strong>Package Control</strong> -&gt; 输入<code>PHP Companion</code>）。</p><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><ul><li>添加类的命名空间</li></ul><p>假如想要导入<code>User</code>类所在的命名空间，可以在输入完<code>User</code>关键字后按<code>Command + Shift +p</code>，在出现的命令行中输入<code>PHPCompanion:Find Use</code>，神奇的是<code>User</code> 类的命名空间出现在了下拉列表中，按回车补全到代码中。</p><ul><li>添加构造函数</li></ul><p>在要添加的类文件中，输入指令<code>PHPCompanion:Insert Constructor Property</code>，它会自动在类文件中添加如下模版</p><div class="language-&#39;php line-numbers-mode" data-ext="&#39;php"><pre class="language-&#39;php"><code>private $PROPERTY;

public function __construct($PROPERTY)
{
    $this-&gt;PROPERTY = $PROPERTY;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>并且光标都聚集在了<code>PROPERTY</code>上方便开发者修改，<strong>并且支持指令的多次执行</strong>。</p><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><h3 id="修改构造函数类型" tabindex="-1"><a class="header-anchor" href="#修改构造函数类型" aria-hidden="true">#</a> 修改构造函数类型</h3><p>默认添加的构造函数是<code>private</code>，如果默认需要改成<code>protected</code>，可以通过修改个人配置来自定义。</p>`,13),m=["src"],b=o(`<p>路径是<code>Sublime Text</code>-&gt;<code>Preferences</code>-&gt;<code>Package Settings</code>-&gt;<code>PHP Companion</code>-&gt;<code>Setting User</code>。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;visibility&quot;</span><span class="token operator">:</span> <span class="token string">&quot;protected&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;use_sort_length&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以参考用户自定义文件同级的插件预设配置来进行修改。</p><h3 id="配置快捷键" tabindex="-1"><a class="header-anchor" href="#配置快捷键" aria-hidden="true">#</a> 配置快捷键</h3>`,4),q={href:"https://github.com/erichard/SublimePHPCompanion/blob/master/Default.sublime-keymap-sample",target:"_blank",rel:"noopener noreferrer"},h=o(`<div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token property">&quot;keys&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;f6&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;expand_fqcn&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token property">&quot;keys&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;shift+f6&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;expand_fqcn&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;args&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;leading_separator&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token property">&quot;keys&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;f5&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;find_use&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token property">&quot;keys&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;f4&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;import_namespace&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token property">&quot;keys&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;f3&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;implement&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token property">&quot;keys&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;shift+f12&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;goto_definition_scope&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token property">&quot;keys&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;f7&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;insert_php_constructor_property&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果要自定义上面快捷键配置，可以通过<code>Command + Shift + p</code>输入<code>Preferences: key bindings</code>,点击回车，在右侧的用户自定义快捷键配置中进行简单修改：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token property">&quot;keys&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;f9&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;expand_fqcn&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token property">&quot;keys&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;f10&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;expand_fqcn&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;args&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;leading_separator&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token property">&quot;keys&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;alt+i&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;find_use&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token property">&quot;keys&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;alt+c&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;insert_php_constructor_property&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>expand_fqcn</code> 快速导入类的命名空间，它的快捷键是<code>F9</code> &amp;&amp; <code>F10</code><code>find_use</code> 快速导入类的命名空间并使用<code>use</code>关键字，它的快捷键是<code>alt+i</code><code>insert_php_constructor_property</code> 在构造函数中赋值类的属性，它的快捷键是<code>alt+c</code></p></blockquote><p>至此，Sublime PHP Companion的安装和简单配置就完成了。</p><h2 id="参考地址" tabindex="-1"><a class="header-anchor" href="#参考地址" aria-hidden="true">#</a> 参考地址</h2>`,6),g={href:"https://laracasts.com/series/professional-php-workflow-in-sublime-text/episodes/4",target:"_blank",rel:"noopener noreferrer"},_={href:"https://www.jianshu.com/p/5c0460122350",target:"_blank",rel:"noopener noreferrer"};function f(t,y){const a=i("ExternalLinkIcon");return c(),l("div",null,[r,d,n("p",null,[n("a",v,[s("GitHub地址"),e(a)])]),k,n("img",{src:t.$withBase("/images/tools/sublime/companion_user_setting_path.png"),alt:""},null,8,m),b,n("p",null,[s("插件默认的快捷键在"),n("a",q,[s("Default.sublime-keymap-sample"),e(a)])]),h,n("ul",null,[n("li",null,[n("p",null,[n("a",g,[s("Professional PHP Workflow in Sublime Text 3: You Need a PHP Companion"),e(a)])])]),n("li",null,[n("p",null,[n("a",_,[s("sublime-php开发环境搭建之《命名空间接口函数自动实现》"),e(a)])])])])])}const x=p(u,[["render",f],["__file","sublime-text-companion-plugin-for-php.html.vue"]]);export{x as default};
