import{_ as t,r as l,o as r,c,b as e,a as i,F as p,d as s,e as a}from"./app.25d4da55.js";const d={},u=e("h1",{id:"phpstorm\u5982\u4F55\u914D\u7F6Ephp-code-sniffer\u548Cphp-cs-fixer\u8BA9php\u4EE3\u7801\u652F\u6301psr2\u89C4\u8303",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#phpstorm\u5982\u4F55\u914D\u7F6Ephp-code-sniffer\u548Cphp-cs-fixer\u8BA9php\u4EE3\u7801\u652F\u6301psr2\u89C4\u8303","aria-hidden":"true"},"#"),s(" PHPStorm\u5982\u4F55\u914D\u7F6EPHP-Code-Sniffer\u548CPHP-CS-Fixer\u8BA9PHP\u4EE3\u7801\u652F\u6301PSR2\u89C4\u8303")],-1),h=e("h2",{id:"phpcs",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#phpcs","aria-hidden":"true"},"#"),s(" phpcs")],-1),g={href:"http://pear.php.net/package/PHP_CodeSniffer/",target:"_blank",rel:"noopener noreferrer"},m=s("PHP Code Sniffer"),v=s(" \u7B80\u79F0 "),b=e("code",null,"phpcs",-1),f=s(" \uFF0C\u7528\u6765\u68C0\u67E5PHP\u4EE3\u7801\u662F\u5426\u7B26\u5408PSR-2\uFF0C\u82E5\u5B8C\u5168\u7B26\u5408\u5219\u6CA1\u6709\u4EFB\u4F55\u7ED3\u679C\uFF0C\u82E5\u6709\u4EFB\u4F55\u9519\u8BEF\u5C06\u663E\u793A\u9519\u8BEF\u62A5\u544A\u3002"),_=e("h3",{id:"\u5B89\u88C5",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u5B89\u88C5","aria-hidden":"true"},"#"),s(" \u5B89\u88C5")],-1),k=s("\u4F7F\u7528Composer\u547D\u4EE4\u8FDB\u884C\u5168\u5C40\u5B89\u88C5"),x={href:"https://github.com/squizlabs/PHP_CodeSniffer",target:"_blank",rel:"noopener noreferrer"},P=s("phpcs"),S=s("\u3002"),R=a(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">composer</span> global require <span class="token string">&#39;squizlabs/php_codesniffer=*&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u6D4B\u8BD5" aria-hidden="true">#</a> \u6D4B\u8BD5</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>phpcs --version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8F93\u51FA\u5982\u4E0B\u63D0\u793A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>PHP_CodeSniffer version <span class="token number">3.2</span>.3 <span class="token punctuation">(</span>stable<span class="token punctuation">)</span> by Squiz <span class="token punctuation">(</span>http://www.squiz.net<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u68C0\u67E5psr-2\u547D\u4EE4\u884C" tabindex="-1"><a class="header-anchor" href="#\u68C0\u67E5psr-2\u547D\u4EE4\u884C" aria-hidden="true">#</a> \u68C0\u67E5PSR-2\u547D\u4EE4\u884C</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>phpcs --standard<span class="token operator">=</span>PSR2 laravel/app
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><p>\u547D\u4EE4\u4E2D<code>laravel</code>\u4E3A\u9879\u76EE\u540D\u79F0\uFF0C\u56E0\u4E3A\u4EE3\u7801\u90FD\u5728app\u76EE\u5F55\u4E0B\uFF0C\u6240\u4EE5\u76F4\u63A5\u6307\u5B9A<code>PHP Code Sniffer</code>\u68C0\u67E5<code>app</code>\u76EE\u5F55\u4E0B\u6240\u6709\u7684<code>.php</code>\u6587\u4EF6\u3002</p></li><li><p><code>--standard=PSR2</code> <code>PHP Code Sniffer</code>\u9884\u8BBE\u7684coding style\u4E3APEAR\u3002</p></li></ul><p>\u8F93\u51FA\u7C7B\u4F3C\u5982\u4E0B\u7684\u5185\u5BB9\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>FILE: /Volumes/codes/Desktop_Temp/201801/laravel/laravel-model-observers/app/Observers/PostObserver.php
-------------------------------------------------------------------------------------------------------
FOUND 9 ERRORS AFFECTING 9 LINES
-------------------------------------------------------------------------------------------------------
  7 | ERROR | [x] Opening brace should be on a new line
 12 | ERROR | [x] Opening brace should be on a new line
 16 | ERROR | [x] Opening brace should be on a new line
 20 | ERROR | [x] Opening brace should be on a new line
 25 | ERROR | [x] Opening brace should be on a new line
 29 | ERROR | [x] Opening brace should be on a new line
 33 | ERROR | [x] Opening brace should be on a new line
 38 | ERROR | [x] Opening brace should be on a new line
 52 | ERROR | [x] Expected 1 newline at end of file; 0 found
-------------------------------------------------------------------------------------------------------
PHPCBF CAN FIX THE 9 MARKED SNIFF VIOLATIONS AUTOMATICALLY
-------------------------------------------------------------------------------------------------------

Time: 104ms; Memory: 6Mb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u82E5\u6CA1\u6709\u4EFB\u4F55\u8FDD\u53CD<code>PSR-2</code>\u4E4B\u5904\uFF0C\u5C06\u6CA1\u6709\u4EFB\u4F55\u56DE\u5E94\uFF0C\u5426\u5219\u5C06\u51FA\u73FE\u7C7B\u4F3C\u5982\u4E0A\u7684\u8F93\u51FA\u4FE1\u606F\uFF0C\u544A\u77E5\u7528\u6237\u90A3\u4E2A\u6587\u4EF6\u6709\u95EE\u9898\uFF0C\u9519\u5728\u54EA\u4E9B\u5730\u65B9\u3002\u5176\u4E2DFOUND\u4E3A\u884C\u6570\u3002</p><p>\u81F3\u6B64\uFF0Cphpcs\u5B89\u88C5\u5B8C\u6BD5\u3002</p><h2 id="php-cs-fixer" tabindex="-1"><a class="header-anchor" href="#php-cs-fixer" aria-hidden="true">#</a> php-cs-fixer</h2>`,13),C={href:"http://cs.sensiolabs.org/",target:"_blank",rel:"noopener noreferrer"},y=s("PHP Coding Standards Fixer"),F=s(" \u7B80\u79F0 "),w=e("code",null,"php-cs-fixer",-1),O=s("\u3002\u867D\u7136"),H=e("code",null,"PHP Code Sniffer",-1),E=s("\u53EF\u4EE5\u627E\u51FA\u54EA\u4E9B\u4EE3\u7801\u4E0D\u7B26\u5408PSR-2\u3002"),q=e("p",null,[s("\u5982\u679C\u53EA\u6709\u51E0\u4E2A\u6587\u4EF6\uFF0C\u90A3\u4E48\u624B\u52A8\u4FEE\u6539\u5C31\u53EF\u4EE5\uFF0C\u82E5\u6587\u4EF6\u592A\u591A\uFF0C\u5C31\u5F97\u4F9D\u8D56 "),e("code",null,"php-cs-fixer"),s(" \u5E2E\u52A9\u4FEE\u6B63\u3002")],-1),$=e("h3",{id:"\u5B89\u88DD",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u5B89\u88DD","aria-hidden":"true"},"#"),s(" \u5B89\u88DD")],-1),B=s("\u4F7F\u7528Composer\u547D\u4EE4\u8FDB\u884C\u5168\u5C40\u5B89\u88C5 "),A={href:"https://github.com/FriendsOfPHP/PHP-CS-Fixer",target:"_blank",rel:"noopener noreferrer"},I=s("PHP-CS-Fixer"),L=s("\u3002"),N=a(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">composer</span> global require friendsofphp/php-cs-fixer
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u6D4B\u8BD5-1" tabindex="-1"><a class="header-anchor" href="#\u6D4B\u8BD5-1" aria-hidden="true">#</a> \u6D4B\u8BD5</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>php-cs-fixer  --version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8F93\u51FA\u5982\u4E0B\u63D0\u793A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>PHP CS Fixer 2.12.0 Long Journey by Fabien Potencier and Dariusz Ruminski
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u4FEE\u6B63psr-2\u547D\u4EE4\u884C" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6B63psr-2\u547D\u4EE4\u884C" aria-hidden="true">#</a> \u4FEE\u6B63PSR-2\u547D\u4EE4\u884C</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>php-cs-fixer fix laravel/app/ --rules<span class="token operator">=</span>@PSR2 --verbose
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><p><code>laravel</code>\u4E3A\u9879\u76EE\u540D\u79F0\uFF0C\u56E0\u4E3A\u6211\u4EEC\u5199\u7684\u4EE3\u7801\u90FD\u5728<code>app</code>\u76EE\u5F55\u4E0B\uFF0C\u6240\u4EE5\u76F4\u63A5\u6307\u5B9A<code>PHP-CS-Fixer</code>\u5E2E\u6211\u4EEC\u68C0\u67E5<code>app</code>\u76EE\u5F55\u4E0B\u6240\u6709\u7684<code>.php</code>\u6587\u4EF6\u3002</p></li><li><p><code>--rules=@PSR2</code>\u6307\u5B9A\u4F7F\u7528PSR-2\u6807\u51C6\u6765\u4FEE\u6B63\u4EE3\u7801\u3002</p></li><li><p><code>--verbose</code>\u8868\u793A<code>PHP-CS-Fixer</code>\u5728\u6267\u884C\u65F6\u4F1A\u663E\u793A\u51FA\u8BE6\u7EC6\u7684\u7ED3\u679C\u3002</p></li></ul><p>\u8F93\u51FA\u7C7B\u4F3C\u5982\u4E0B\u7684\u5185\u5BB9\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>SSSSSSSSSSSSSFSSSSSSS
Legend: ?-unknown, I-invalid file syntax, file ignored, S-Skipped, .-no changes, F-fixed, E-error
   1) app/Observers/PostObserver.php (braces, single_blank_line_at_eof)

Fixed all files in 0.015 seconds, 10.000 MB memory used
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p><code>Lengend</code>\u8868\u793A\u5728\u6267\u884C\u65F6\uFF0C\u6240\u6267\u884C\u8FC7\u7684\u52A8\u4F5C\u3002</p></li><li><p>\u5982\u4E0A\u56FE\u6240\u793A\uFF0C\u8868\u793A\u4FEE\u6B63\u8FC7<code>PostObserver.php</code>\u3002</p></li></ul><h2 id="phpstorm" tabindex="-1"><a class="header-anchor" href="#phpstorm" aria-hidden="true">#</a> PhpStorm</h2><p>PhpStorm\u5BF9\u4E8EPSR-2\u6709\u4EE5\u4E0B\u652F\u6301:</p><ul><li>\u5167\u5EFA\u652F\u6301PSR-2\u8BED\u6CD5\u3002</li><li>\u53EF\u5B89\u88C5<code>PHP Code Sniffer</code>\u63D2\u4EF6\uFF0C\u63D0\u9192\u5F00\u53D1\u8005\u6240\u5199\u4EE3\u7801\u662F\u5426\u7B26\u5408PSR-2\u3002</li><li>\u53EF\u5B89\u88C5<code>PHP Coding Standards Fixer</code>\u63D2\u4EF6\uFF0C\u5C06\u4EE3\u7801\u4FEE\u6B63\u4E3APSR-2\u3002</li></ul><h3 id="\u5185\u5EFA\u652F\u6301psr-2\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u5185\u5EFA\u652F\u6301psr-2\u8BED\u6CD5" aria-hidden="true">#</a> \u5185\u5EFA\u652F\u6301PSR-2\u8BED\u6CD5</h3><p><code>Preferences</code> -&gt; <code>Editor</code> -&gt; <code>Code Style</code> -&gt; <code>PHP : Set from\u2026</code> -&gt; <code>Predefined Style</code> -&gt; <code>PSR1/PSR2</code></p>`,16),T=["src"],D=e("p",null,"PSR-2 \u6240\u6CA1\u89C4\u5B9A\u7684 Code Style \u5982\u4E0B\u56FE\u6240\u793A\uFF0C\u53EF\u80FD\u4F1A\u5E0C\u671B array \u7684 key \u4E0E value \u80FD\u5BF9\u9F50\uFF0C\u4F46\u8FD9\u75C5\u4E0D\u662F PSR-2 \u6240\u89C4\u5B9A\u7684style\uFF0C\u5F00\u53D1\u8005\u53EF\u4EE5\u6839\u636E\u9700\u8981\u81EA\u884C\u8BBE\u5B9A\u3002",-1),U=["src"],z=e("h3",{id:"phpcs-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#phpcs-1","aria-hidden":"true"},"#"),s(" phpcs")],-1),V=e("p",null,[e("code",null,"Preferences"),s(" -> "),e("code",null,"Languages & Frameworks"),s(" -> "),e("code",null,"PHP"),s(" -> "),e("code",null,"Code Sniffer")],-1),M=["src"],j=e("p",null,[s("\u6307\u5B9A "),e("code",null,"phpcs"),s(" \u8DEF\u5F91 : "),e("code",null,"/Users/xiaoluo/.composer/vendor/bin/phpcs"),s("\uFF0C\u5176\u4E2D"),e("code",null,"/Users/xiaoluo/"),s("\u4E3A\u5F53\u524D\u7535\u8111\u7684\u5BB6\u76EE\u5F55\u3002")],-1),K=["src"],G=a("<p><code>Preferences</code> -&gt; <code>Editor</code> -&gt; <code>Inspections</code></p><ul><li><p>\u5C06<code>PHP Code Sniffer validation</code>\u9009\u9879\u6253\u52FE\u3002</p></li><li><p>\u5C06<code>Coding standard</code>\u9009<code>PSR2</code>\u3002</p></li></ul>",2),J=["src"],W=a('<p>\u81F3\u6B64\uFF0CphpStorm\u7684phpcs\u914D\u7F6E\u5B8C\u6BD5\u3002</p><h3 id="php-cs-fixer-1" tabindex="-1"><a class="header-anchor" href="#php-cs-fixer-1" aria-hidden="true">#</a> php-cs-fixer</h3><p><code>Preferences</code> -&gt; <code>Tools</code> -&gt; <code>External Tools</code></p><p>\u6309<code>+</code>\u65B0\u589E<strong>External Tools</strong>\u3002</p>',4),X=["src"],Y=a(`<p>\u5728\u6A21\u677F\u4E2D\u6DFB\u52A0\u5982\u4E0B\u5185\u5BB9\uFF1A</p><ul><li><p><code>Name</code> : <strong>php-cs-fixer</strong></p></li><li><p><code>Description</code> : <strong>A tool to automatically fix PHP coding.</strong></p></li><li><p><code>Program</code> : <code>/Users/xiaoluo/.composer/vendor/bin/php-cs-fixer</code>\uFF0C\u5176\u4E2D<code>/Users/xiaoluo/</code>\u4E3A\u5F53\u524D\u7528\u6237\u7684\u5BB6\u76EE\u5F55\u3002</p></li><li><p><code>Parameters</code> : <code>--verbose fix $FileDir$/$FileName$ --config=/Users/xiaoluo/.phpcsfixer</code>\uFF0C\u5176\u4E2D<code>/Users/xiaoluo/</code>\u4E3A\u5F53\u524D\u7528\u6237\u7684\u5BB6\u76EE\u5F55\u3002</p></li><li><p><code>Working Directory</code> : <strong>$ProjectFileDir$</strong></p></li></ul><p>\u4E0A\u8FF0\u6587\u4EF6\u4E2D\u5305\u542B\u4E00\u4E2A<code>php-cs-fixer</code>\u7684\u914D\u7F6E\u6587\u4EF6\uFF0C<code>/Users/xiaoluo/.phpcsfixer</code>\u5185\u5BB9\u5982\u4E0B\uFF1A</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
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
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),Q=["src"],Z=e("h3",{id:"\u6DFB\u52A0\u5FEB\u6377\u952E",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u6DFB\u52A0\u5FEB\u6377\u952E","aria-hidden":"true"},"#"),s(" \u6DFB\u52A0\u5FEB\u6377\u952E")],-1),ee=e("p",null,[e("code",null,"Preferences"),s(" -> "),e("code",null,"keymap"),s(" -> \u641C\u7D22"),e("code",null,"php-cs-fixer"),s(" -> \u53F3\u952E\u70B9\u51FB"),e("code",null,"Add Keyboard Shortcut")],-1),se=["src"],ne=e("h3",{id:"\u6D4B\u8BD5-2",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u6D4B\u8BD5-2","aria-hidden":"true"},"#"),s(" \u6D4B\u8BD5")],-1),ae=e("p",null,"\u6D4B\u8BD5phpstorm\u81EA\u5E26\u7684Reformat Code",-1),oe=e("ul",null,[e("li",null,[e("p",null,[e("code",null,"\u2303 + \u2325 + L"),s(" : \u91CD\u65B0\u6574\u7406Coding Style\u3002")])]),e("li",null,[e("p",null,[e("code",null,"\u2303 + \u2325 + \u21E7+ L"),s(" : \u8BBE\u5B9A\u91CD\u65B0\u6574\u7406Coding Style\u65B9\u5F0F\u3002")])])],-1),ie=e("p",null,"\u6DFB\u52A0\u5B8C\u4EE5\u540E\u5FEB\u6377\u952E\u4E3A\uFF1A",-1),te=["src"],le=e("h4",{id:"\u4E00\u4E9B\u7B80\u5355\u7684\u683C\u5F0F\u5316\u8BBE\u7F6E",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u4E00\u4E9B\u7B80\u5355\u7684\u683C\u5F0F\u5316\u8BBE\u7F6E","aria-hidden":"true"},"#"),s(" \u4E00\u4E9B\u7B80\u5355\u7684\u683C\u5F0F\u5316\u8BBE\u7F6E")],-1),re=e("p",null,[s("\u4F7F\u7528\u547D\u4EE4"),e("code",null,"Command + Shift + a"),s("\u540E\u8F93\u5165\uFF1A'Show Reformat File Dialog'\u5173\u952E\u5B57\uFF0C\u540E\u770B\u5230\u4E0B\u9762\u7684\u914D\u7F6E")],-1),ce=["src"],pe=e("ul",null,[e("li",null,[e("p",null,[e("code",null,"Optimize imports"),s(" : \u6CA1\u7528\u5230\u7684namespace\uFF0Cuse\u4F1A\u81EA\u52A8\u79FB\u9664\u3002")])]),e("li",null,[e("p",null,[e("code",null,"Rearrange code"),s(" : \u4F1A\u81EA\u52A8\u4F9D\u636ECode Style\u7684Arrangement\u89C4\u683C\u5C06\u4EE3\u7801\u91CD\u65B0\u6392\u5E8F\u3002")])])],-1);function de(n,ue){const o=l("ExternalLinkIcon");return r(),c(p,null,[u,h,e("p",null,[e("a",g,[m,i(o)]),v,b,f]),_,e("p",null,[k,e("a",x,[P,i(o)]),S]),R,e("p",null,[e("a",C,[y,i(o)]),F,w,O,H,E]),q,$,e("p",null,[B,e("a",A,[I,i(o)]),L]),N,e("img",{src:n.$withBase("/images/tools/phpstorm/editor-code-style-php-psr-1-and-psr-2.png"),alt:""},null,8,T),D,e("img",{src:n.$withBase("/images/tools/phpstorm/editor-code-style-php-wrapping-and-braces-array-align-key-value-pairs.png"),alt:""},null,8,U),z,V,e("img",{src:n.$withBase("/images/tools/phpstorm/languages-and-frameworks-php-code-sniffer-for-current-project-configuration.png"),alt:""},null,8,M),j,e("img",{src:n.$withBase("/images/tools/phpstorm/languages-and-frameworks-php-code-sniffer-for-current-project-configuration-phpcs-path.png"),alt:""},null,8,K),G,e("img",{src:n.$withBase("/images/tools/phpstorm/editor-inspections-php-code-sniffer-validation-psr2.png"),alt:""},null,8,J),W,e("img",{src:n.$withBase("/images/tools/phpstorm/php-cs-fixer-external-tools.png"),alt:""},null,8,X),Y,e("img",{src:n.$withBase("/images/tools/phpstorm/create-php-cs-fixer-tool.png"),alt:""},null,8,Q),Z,ee,e("img",{src:n.$withBase("/images/tools/phpstorm/preferences-keymap-add-keyboard-shortcut.png"),alt:""},null,8,se),ne,ae,oe,ie,e("img",{src:n.$withBase("/images/tools/phpstorm/preferences-keymap-add-keyboard-shortcut-shift-control-command-l.png"),alt:""},null,8,te),le,re,e("img",{src:n.$withBase("/images/tools/phpstorm/php-cs-fixer-refomat-file.png"),alt:""},null,8,ce),pe],64)}var ge=t(d,[["render",de],["__file","how-to-use-phpstorm-configures-php-code-sniffer-and-php-cs-fixer-to-support-psr2-specification.html.vue"]]);export{ge as default};
