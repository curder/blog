import{_ as p,r as i,o as c,c as l,b as n,a as e,F as u,d as s,e as o}from"./app.1a60f44b.js";const r={},d=n("h1",{id:"sublime-php-companion",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#sublime-php-companion","aria-hidden":"true"},"#"),s(" Sublime PHP Companion")],-1),v=n("ol",null,[n("li",null,[n("p",null,[n("code",null,"Sublime PHP Companion"),s("\u5728\u5F00\u53D1\u4E2D\u80FD\u534F\u52A9\u5F00\u53D1\u8005\u5FEB\u901F\u5BFC\u5165\u9700\u8981\u7684\u7C7B\u547D\u540D\u7A7A\u95F4\uFF0C\u8FD9\u5728\u7E41\u91CD\u7684\u5F00\u53D1\u4E2D\u975E\u5E38\u6709\u7528\u3002")])]),n("li",null,[n("p",null,"\u5B83\u4E5F\u53EF\u4EE5\u5FEB\u901F\u6DFB\u52A0\u6784\u9020\u51FD\u6570\u548C\u7C7B\u7684\u5C5E\u6027\u3002")])],-1),k={href:"https://github.com/erichard/SublimePHPCompanion",target:"_blank",rel:"noopener noreferrer"},m=s("GitHub\u5730\u5740"),b=o(`<p>\u6700\u540E\u7ED3\u5408\u5FEB\u6377\u952E\u4F7F\u7528\uFF0C\u52A0\u901F\u5F00\u53D1\u3002</p><h2 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h2><p>\u7528<code>Package Control</code>\u5B89\u88C5<code>PHP Companion</code>\uFF0C\u56DE\u8F66\u5B89\u88C5\u597D\u63D2\u4EF6\uFF08<code>\u2318(Command) + \u21E7(Shift) + P</code> \u2013&gt; \u8F93\u5165 <code>install</code>\u2026\u6253\u5F00<strong>Package Control</strong> -&gt; \u8F93\u5165<code>PHP Companion</code>\uFF09\u3002</p><h2 id="\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a> \u4F7F\u7528</h2><ul><li>\u6DFB\u52A0\u7C7B\u7684\u547D\u540D\u7A7A\u95F4</li></ul><p>\u5047\u5982\u60F3\u8981\u5BFC\u5165<code>User</code>\u7C7B\u6240\u5728\u7684\u547D\u540D\u7A7A\u95F4\uFF0C\u53EF\u4EE5\u5728\u8F93\u5165\u5B8C<code>User</code>\u5173\u952E\u5B57\u540E\u6309<code>Command + Shift +p</code>\uFF0C\u5728\u51FA\u73B0\u7684\u547D\u4EE4\u884C\u4E2D\u8F93\u5165<code>PHPCompanion:Find Use</code>\uFF0C\u795E\u5947\u7684\u662F<code>User</code> \u7C7B\u7684\u547D\u540D\u7A7A\u95F4\u51FA\u73B0\u5728\u4E86\u4E0B\u62C9\u5217\u8868\u4E2D\uFF0C\u6309\u56DE\u8F66\u8865\u5168\u5230\u4EE3\u7801\u4E2D\u3002</p><ul><li>\u6DFB\u52A0\u6784\u9020\u51FD\u6570</li></ul><p>\u5728\u8981\u6DFB\u52A0\u7684\u7C7B\u6587\u4EF6\u4E2D\uFF0C\u8F93\u5165\u6307\u4EE4<code>PHPCompanion:Insert Constructor Property</code>\uFF0C\u5B83\u4F1A\u81EA\u52A8\u5728\u7C7B\u6587\u4EF6\u4E2D\u6DFB\u52A0\u5982\u4E0B\u6A21\u7248</p><div class="language-&#39;php ext-&#39;php line-numbers-mode"><pre class="language-&#39;php"><code>private $PROPERTY;

public function __construct($PROPERTY)
{
    $this-&gt;PROPERTY = $PROPERTY;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5E76\u4E14\u5149\u6807\u90FD\u805A\u96C6\u5728\u4E86<code>PROPERTY</code>\u4E0A\u65B9\u4FBF\u5F00\u53D1\u8005\u4FEE\u6539\uFF0C<strong>\u5E76\u4E14\u652F\u6301\u6307\u4EE4\u7684\u591A\u6B21\u6267\u884C</strong>\u3002</p><h2 id="\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a> \u914D\u7F6E</h2><h3 id="\u4FEE\u6539\u6784\u9020\u51FD\u6570\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539\u6784\u9020\u51FD\u6570\u7C7B\u578B" aria-hidden="true">#</a> \u4FEE\u6539\u6784\u9020\u51FD\u6570\u7C7B\u578B</h3><p>\u9ED8\u8BA4\u6DFB\u52A0\u7684\u6784\u9020\u51FD\u6570\u662F<code>private</code>\uFF0C\u5982\u679C\u9ED8\u8BA4\u9700\u8981\u6539\u6210<code>protected</code>\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4FEE\u6539\u4E2A\u4EBA\u914D\u7F6E\u6765\u81EA\u5B9A\u4E49\u3002</p>`,13),q=["src"],h=o(`<p>\u8DEF\u5F84\u662F<code>Sublime Text</code>-&gt;<code>Preferences</code>-&gt;<code>Package Settings</code>-&gt;<code>PHP Companion</code>-&gt;<code>Setting User</code>\u3002</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;visibility&quot;</span><span class="token operator">:</span> <span class="token string">&quot;protected&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;use_sort_length&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EF\u4EE5\u53C2\u8003\u7528\u6237\u81EA\u5B9A\u4E49\u6587\u4EF6\u540C\u7EA7\u7684\u63D2\u4EF6\u9884\u8BBE\u914D\u7F6E\u6765\u8FDB\u884C\u4FEE\u6539\u3002</p><h3 id="\u914D\u7F6E\u5FEB\u6377\u952E" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u5FEB\u6377\u952E" aria-hidden="true">#</a> \u914D\u7F6E\u5FEB\u6377\u952E</h3>`,4),_=s("\u63D2\u4EF6\u9ED8\u8BA4\u7684\u5FEB\u6377\u952E\u5728"),g={href:"https://github.com/erichard/SublimePHPCompanion/blob/master/Default.sublime-keymap-sample",target:"_blank",rel:"noopener noreferrer"},f=s("Default.sublime-keymap-sample"),y=o(`<div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">[</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u8981\u81EA\u5B9A\u4E49\u4E0A\u9762\u5FEB\u6377\u952E\u914D\u7F6E\uFF0C\u53EF\u4EE5\u901A\u8FC7<code>Command + Shift + p</code>\u8F93\u5165<code>Preferences: key bindings</code>,\u70B9\u51FB\u56DE\u8F66\uFF0C\u5728\u53F3\u4FA7\u7684\u7528\u6237\u81EA\u5B9A\u4E49\u5FEB\u6377\u952E\u914D\u7F6E\u4E2D\u8FDB\u884C\u7B80\u5355\u4FEE\u6539\uFF1A</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">[</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>expand_fqcn</code> \u5FEB\u901F\u5BFC\u5165\u7C7B\u7684\u547D\u540D\u7A7A\u95F4\uFF0C\u5B83\u7684\u5FEB\u6377\u952E\u662F<code>F9</code> &amp;&amp; <code>F10</code><code>find_use</code> \u5FEB\u901F\u5BFC\u5165\u7C7B\u7684\u547D\u540D\u7A7A\u95F4\u5E76\u4F7F\u7528<code>use</code>\u5173\u952E\u5B57\uFF0C\u5B83\u7684\u5FEB\u6377\u952E\u662F<code>alt+i</code><code>insert_php_constructor_property</code> \u5728\u6784\u9020\u51FD\u6570\u4E2D\u8D4B\u503C\u7C7B\u7684\u5C5E\u6027\uFF0C\u5B83\u7684\u5FEB\u6377\u952E\u662F<code>alt+c</code></p></blockquote><p>\u81F3\u6B64\uFF0CSublime PHP Companion\u7684\u5B89\u88C5\u548C\u7B80\u5355\u914D\u7F6E\u5C31\u5B8C\u6210\u4E86\u3002</p><h2 id="\u53C2\u8003\u5730\u5740" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u5730\u5740" aria-hidden="true">#</a> \u53C2\u8003\u5730\u5740</h2>`,6),P={href:"https://laracasts.com/series/professional-php-workflow-in-sublime-text/episodes/4",target:"_blank",rel:"noopener noreferrer"},x=s("Professional PHP Workflow in Sublime Text 3: You Need a PHP Companion"),C={href:"https://www.jianshu.com/p/5c0460122350",target:"_blank",rel:"noopener noreferrer"},H=s("sublime-php\u5F00\u53D1\u73AF\u5883\u642D\u5EFA\u4E4B\u300A\u547D\u540D\u7A7A\u95F4\u63A5\u53E3\u51FD\u6570\u81EA\u52A8\u5B9E\u73B0\u300B");function S(t,j){const a=i("ExternalLinkIcon");return c(),l(u,null,[d,v,n("p",null,[n("a",k,[m,e(a)])]),b,n("img",{src:t.$withBase("/images/tools/sublime/companion_user_setting_path.png"),alt:""},null,8,q),h,n("p",null,[_,n("a",g,[f,e(a)])]),y,n("ul",null,[n("li",null,[n("p",null,[n("a",P,[x,e(a)])])]),n("li",null,[n("p",null,[n("a",C,[H,e(a)])])])])],64)}var T=p(r,[["render",S],["__file","sublime-text-companion-plugin-for-php.html.vue"]]);export{T as default};
