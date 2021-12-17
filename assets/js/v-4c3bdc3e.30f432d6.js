"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[635],{8784:(e,n,s)=>{s.r(n),s.d(n,{data:()=>a});const a={key:"v-4c3bdc3e",path:"/tools/phpstorm/how-to-use-phpstorm-configures-php-code-sniffer-and-php-cs-fixer-to-support-psr2-specification.html",title:"PHPStorm如何配置PHP-Code-Sniffer和PHP-CS-Fixer让PHP代码支持PSR2规范",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"phpcs",slug:"phpcs",children:[{level:3,title:"安装",slug:"安装",children:[]},{level:3,title:"测试",slug:"测试",children:[]},{level:3,title:"检查PSR-2命令行",slug:"检查psr-2命令行",children:[]}]},{level:2,title:"php-cs-fixer",slug:"php-cs-fixer",children:[{level:3,title:"安裝",slug:"安裝",children:[]},{level:3,title:"测试",slug:"测试-1",children:[]},{level:3,title:"修正PSR-2命令行",slug:"修正psr-2命令行",children:[]}]},{level:2,title:"PhpStorm",slug:"phpstorm",children:[{level:3,title:"内建支持PSR-2语法",slug:"内建支持psr-2语法",children:[]},{level:3,title:"phpcs",slug:"phpcs-1",children:[]},{level:3,title:"php-cs-fixer",slug:"php-cs-fixer-1",children:[]},{level:3,title:"添加快捷键",slug:"添加快捷键",children:[]},{level:3,title:"测试",slug:"测试-2",children:[]}]}],filePathRelative:"tools/phpstorm/how-to-use-phpstorm-configures-php-code-sniffer-and-php-cs-fixer-to-support-psr2-specification.md",git:{updatedTime:1639727806e3,contributors:[{name:"curder",email:"q.curder@gmail.com",commits:1}]}}},8876:(e,n,s)=>{s.r(n),s.d(n,{default:()=>pe});var a=s(6252);const p=(0,a._)("h1",{id:"phpstorm如何配置php-code-sniffer和php-cs-fixer让php代码支持psr2规范",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#phpstorm如何配置php-code-sniffer和php-cs-fixer让php代码支持psr2规范","aria-hidden":"true"},"#"),(0,a.Uk)(" PHPStorm如何配置PHP-Code-Sniffer和PHP-CS-Fixer让PHP代码支持PSR2规范")],-1),l=(0,a._)("h2",{id:"phpcs",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#phpcs","aria-hidden":"true"},"#"),(0,a.Uk)(" phpcs")],-1),r={href:"http://pear.php.net/package/PHP_CodeSniffer/",target:"_blank",rel:"noopener noreferrer"},o=(0,a.Uk)("PHP Code Sniffer"),t=(0,a.Uk)(" 简称 "),i=(0,a._)("code",null,"phpcs",-1),c=(0,a.Uk)(" ，用来检查PHP代码是否符合PSR-2，若完全符合则没有任何结果，若有任何错误将显示错误报告。"),d=(0,a._)("h3",{id:"安装",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#安装","aria-hidden":"true"},"#"),(0,a.Uk)(" 安装")],-1),u=(0,a.Uk)("使用Composer命令进行全局安装"),h={href:"https://github.com/squizlabs/PHP_CodeSniffer",target:"_blank",rel:"noopener noreferrer"},g=(0,a.Uk)("phpcs"),b=(0,a.Uk)("。"),m=(0,a.uE)('<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">composer</span> global require <span class="token string">&#39;squizlabs/php_codesniffer=*&#39;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>phpcs --version\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>输出如下提示</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>PHP_CodeSniffer version <span class="token number">3.2</span>.3 <span class="token punctuation">(</span>stable<span class="token punctuation">)</span> by Squiz <span class="token punctuation">(</span>http://www.squiz.net<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="检查psr-2命令行" tabindex="-1"><a class="header-anchor" href="#检查psr-2命令行" aria-hidden="true">#</a> 检查PSR-2命令行</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>phpcs --standard<span class="token operator">=</span>PSR2 laravel/app\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li><p>命令中<code>laravel</code>为项目名称，因为代码都在app目录下，所以直接指定<code>PHP Code Sniffer</code>检查<code>app</code>目录下所有的<code>.php</code>文件。</p></li><li><p><code>--standard=PSR2</code> <code>PHP Code Sniffer</code>预设的coding style为PEAR。</p></li></ul><p>输出类似如下的内容：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>FILE: /Volumes/codes/Desktop_Temp/201801/laravel/laravel-model-observers/app/Observers/PostObserver.php\n-------------------------------------------------------------------------------------------------------\nFOUND 9 ERRORS AFFECTING 9 LINES\n-------------------------------------------------------------------------------------------------------\n  7 | ERROR | [x] Opening brace should be on a new line\n 12 | ERROR | [x] Opening brace should be on a new line\n 16 | ERROR | [x] Opening brace should be on a new line\n 20 | ERROR | [x] Opening brace should be on a new line\n 25 | ERROR | [x] Opening brace should be on a new line\n 29 | ERROR | [x] Opening brace should be on a new line\n 33 | ERROR | [x] Opening brace should be on a new line\n 38 | ERROR | [x] Opening brace should be on a new line\n 52 | ERROR | [x] Expected 1 newline at end of file; 0 found\n-------------------------------------------------------------------------------------------------------\nPHPCBF CAN FIX THE 9 MARKED SNIFF VIOLATIONS AUTOMATICALLY\n-------------------------------------------------------------------------------------------------------\n\nTime: 104ms; Memory: 6Mb\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>若没有任何违反<code>PSR-2</code>之处，将没有任何回应，否则将出現类似如上的输出信息，告知用户那个文件有问题，错在哪些地方。其中FOUND为行数。</p><p>至此，phpcs安装完毕。</p><h2 id="php-cs-fixer" tabindex="-1"><a class="header-anchor" href="#php-cs-fixer" aria-hidden="true">#</a> php-cs-fixer</h2>',13),f={href:"http://cs.sensiolabs.org/",target:"_blank",rel:"noopener noreferrer"},k=(0,a.Uk)("PHP Coding Standards Fixer"),x=(0,a.Uk)(" 简称 "),P=(0,a._)("code",null,"php-cs-fixer",-1),_=(0,a.Uk)("。虽然"),S=(0,a._)("code",null,"PHP Code Sniffer",-1),v=(0,a.Uk)("可以找出哪些代码不符合PSR-2。"),R=(0,a._)("p",null,[(0,a.Uk)("如果只有几个文件，那么手动修改就可以，若文件太多，就得依赖 "),(0,a._)("code",null,"php-cs-fixer"),(0,a.Uk)(" 帮助修正。")],-1),U=(0,a._)("h3",{id:"安裝",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#安裝","aria-hidden":"true"},"#"),(0,a.Uk)(" 安裝")],-1),C=(0,a.Uk)("使用Composer命令进行全局安装 "),w={href:"https://github.com/FriendsOfPHP/PHP-CS-Fixer",target:"_blank",rel:"noopener noreferrer"},y=(0,a.Uk)("PHP-CS-Fixer"),F=(0,a.Uk)("。"),H=(0,a.uE)('<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">composer</span> global require friendsofphp/php-cs-fixer\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="测试-1" tabindex="-1"><a class="header-anchor" href="#测试-1" aria-hidden="true">#</a> 测试</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>php-cs-fixer  --version\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>输出如下提示</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>PHP CS Fixer 2.12.0 Long Journey by Fabien Potencier and Dariusz Ruminski\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="修正psr-2命令行" tabindex="-1"><a class="header-anchor" href="#修正psr-2命令行" aria-hidden="true">#</a> 修正PSR-2命令行</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>php-cs-fixer fix laravel/app/ --rules<span class="token operator">=</span>@PSR2 --verbose\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li><p><code>laravel</code>为项目名称，因为我们写的代码都在<code>app</code>目录下，所以直接指定<code>PHP-CS-Fixer</code>帮我们检查<code>app</code>目录下所有的<code>.php</code>文件。</p></li><li><p><code>--rules=@PSR2</code>指定使用PSR-2标准来修正代码。</p></li><li><p><code>--verbose</code>表示<code>PHP-CS-Fixer</code>在执行时会显示出详细的结果。</p></li></ul><p>输出类似如下的内容：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>SSSSSSSSSSSSSFSSSSSSS\nLegend: ?-unknown, I-invalid file syntax, file ignored, S-Skipped, .-no changes, F-fixed, E-error\n   1) app/Observers/PostObserver.php (braces, single_blank_line_at_eof)\n\nFixed all files in 0.015 seconds, 10.000 MB memory used\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul><li><p><code>Lengend</code>表示在执行时，所执行过的动作。</p></li><li><p>如上图所示，表示修正过<code>PostObserver.php</code>。</p></li></ul><h2 id="phpstorm" tabindex="-1"><a class="header-anchor" href="#phpstorm" aria-hidden="true">#</a> PhpStorm</h2><p>PhpStorm对于PSR-2有以下支持:</p><ul><li>內建支持PSR-2语法。</li><li>可安装<code>PHP Code Sniffer</code>插件，提醒开发者所写代码是否符合PSR-2。</li><li>可安装<code>PHP Coding Standards Fixer</code>插件，将代码修正为PSR-2。</li></ul><h3 id="内建支持psr-2语法" tabindex="-1"><a class="header-anchor" href="#内建支持psr-2语法" aria-hidden="true">#</a> 内建支持PSR-2语法</h3><p><code>Preferences</code> -&gt; <code>Editor</code> -&gt; <code>Code Style</code> -&gt; <code>PHP : Set from…</code> -&gt; <code>Predefined Style</code> -&gt; <code>PSR1/PSR2</code></p>',16),O=["src"],E=(0,a._)("p",null,"PSR-2 所没规定的 Code Style 如下图所示，可能会希望 array 的 key 与 value 能对齐，但这病不是 PSR-2 所规定的style，开发者可以根据需要自行设定。",-1),q=["src"],$=(0,a._)("h3",{id:"phpcs-1",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#phpcs-1","aria-hidden":"true"},"#"),(0,a.Uk)(" phpcs")],-1),A=(0,a._)("p",null,[(0,a._)("code",null,"Preferences"),(0,a.Uk)(" -> "),(0,a._)("code",null,"Languages & Frameworks"),(0,a.Uk)(" -> "),(0,a._)("code",null,"PHP"),(0,a.Uk)(" -> "),(0,a._)("code",null,"Code Sniffer")],-1),B=["src"],D=(0,a._)("p",null,[(0,a.Uk)("指定 "),(0,a._)("code",null,"phpcs"),(0,a.Uk)(" 路徑 : "),(0,a._)("code",null,"/Users/xiaoluo/.composer/vendor/bin/phpcs"),(0,a.Uk)("，其中"),(0,a._)("code",null,"/Users/xiaoluo/"),(0,a.Uk)("为当前电脑的家目录。")],-1),L=["src"],I=(0,a.uE)("<p><code>Preferences</code> -&gt; <code>Editor</code> -&gt; <code>Inspections</code></p><ul><li><p>将<code>PHP Code Sniffer validation</code>选项打勾。</p></li><li><p>将<code>Coding standard</code>选<code>PSR2</code>。</p></li></ul>",2),T=["src"],N=(0,a.uE)('<p>至此，phpStorm的phpcs配置完毕。</p><h3 id="php-cs-fixer-1" tabindex="-1"><a class="header-anchor" href="#php-cs-fixer-1" aria-hidden="true">#</a> php-cs-fixer</h3><p><code>Preferences</code> -&gt; <code>Tools</code> -&gt; <code>External Tools</code></p><p>按<code>+</code>新增<strong>External Tools</strong>。</p>',4),z=["src"],M=(0,a.uE)('<p>在模板中添加如下内容：</p><ul><li><p><code>Name</code> : <strong>php-cs-fixer</strong></p></li><li><p><code>Description</code> : <strong>A tool to automatically fix PHP coding.</strong></p></li><li><p><code>Program</code> : <code>/Users/xiaoluo/.composer/vendor/bin/php-cs-fixer</code>，其中<code>/Users/xiaoluo/</code>为当前用户的家目录。</p></li><li><p><code>Parameters</code> : <code>--verbose fix $FileDir$/$FileName$ --config=/Users/xiaoluo/.phpcsfixer</code>，其中<code>/Users/xiaoluo/</code>为当前用户的家目录。</p></li><li><p><code>Working Directory</code> : <strong>$ProjectFileDir$</strong></p></li></ul><p>上述文件中包含一个<code>php-cs-fixer</code>的配置文件，<code>/Users/xiaoluo/.phpcsfixer</code>内容如下：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>\n<span class="token variable">$finder</span> <span class="token operator">=</span> <span class="token class-name class-name-fully-qualified static-context">PhpCsFixer<span class="token punctuation">\\</span>Finder</span><span class="token operator">::</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n          <span class="token operator">-&gt;</span><span class="token function">exclude</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;tests/&#39;</span><span class="token punctuation">)</span>\n          <span class="token operator">-&gt;</span><span class="token function">in</span><span class="token punctuation">(</span><span class="token constant">__DIR__</span><span class="token punctuation">)</span>\n<span class="token punctuation">;</span>\n\n<span class="token keyword">return</span> <span class="token class-name class-name-fully-qualified static-context">PhpCsFixer<span class="token punctuation">\\</span>Config</span><span class="token operator">::</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token operator">-&gt;</span><span class="token function">setRules</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\n        <span class="token string single-quoted-string">&#39;@PSR2&#39;</span> <span class="token operator">=&gt;</span> <span class="token constant boolean">true</span><span class="token punctuation">,</span>\n        <span class="token string single-quoted-string">&#39;align_multiline_comment&#39;</span> <span class="token operator">=&gt;</span> <span class="token constant boolean">true</span><span class="token punctuation">,</span>\n        <span class="token string single-quoted-string">&#39;no_trailing_whitespace&#39;</span> <span class="token operator">=&gt;</span> <span class="token constant boolean">true</span><span class="token punctuation">,</span>\n        <span class="token string single-quoted-string">&#39;no_short_echo_tag&#39;</span><span class="token operator">=&gt;</span> <span class="token constant boolean">true</span><span class="token punctuation">,</span>\n        <span class="token string single-quoted-string">&#39;array_syntax&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;syntax&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;short&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n        <span class="token string single-quoted-string">&#39;no_unused_imports&#39;</span> <span class="token operator">=&gt;</span> <span class="token constant boolean">true</span><span class="token punctuation">,</span>\n        <span class="token string single-quoted-string">&#39;ordered_imports&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;sortAlgorithm&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;length&#39;</span><span class="token punctuation">]</span>\n    <span class="token punctuation">]</span><span class="token punctuation">)</span>\n    <span class="token operator">-&gt;</span><span class="token function">setFinder</span><span class="token punctuation">(</span><span class="token variable">$finder</span><span class="token punctuation">)</span>\n<span class="token punctuation">;</span>\n</span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div>',4),W=["src"],j=(0,a._)("h3",{id:"添加快捷键",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#添加快捷键","aria-hidden":"true"},"#"),(0,a.Uk)(" 添加快捷键")],-1),K=(0,a._)("p",null,[(0,a._)("code",null,"Preferences"),(0,a.Uk)(" -> "),(0,a._)("code",null,"keymap"),(0,a.Uk)(" -> 搜索"),(0,a._)("code",null,"php-cs-fixer"),(0,a.Uk)(" -> 右键点击"),(0,a._)("code",null,"Add Keyboard Shortcut")],-1),V=["src"],Y=(0,a._)("h3",{id:"测试-2",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#测试-2","aria-hidden":"true"},"#"),(0,a.Uk)(" 测试")],-1),Z=(0,a._)("p",null,"测试phpstorm自带的Reformat Code",-1),G=(0,a._)("ul",null,[(0,a._)("li",null,[(0,a._)("p",null,[(0,a._)("code",null,"⌃ + ⌥ + L"),(0,a.Uk)(" : 重新整理Coding Style。")])]),(0,a._)("li",null,[(0,a._)("p",null,[(0,a._)("code",null,"⌃ + ⌥ + ⇧+ L"),(0,a.Uk)(" : 设定重新整理Coding Style方式。")])])],-1),J=(0,a._)("p",null,"添加完以后快捷键为：",-1),X=["src"],Q=(0,a._)("h4",{id:"一些简单的格式化设置",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#一些简单的格式化设置","aria-hidden":"true"},"#"),(0,a.Uk)(" 一些简单的格式化设置")],-1),ee=(0,a._)("p",null,[(0,a.Uk)("使用命令"),(0,a._)("code",null,"Command + Shift + a"),(0,a.Uk)("后输入：'Show Reformat File Dialog'关键字，后看到下面的配置")],-1),ne=["src"],se=(0,a._)("ul",null,[(0,a._)("li",null,[(0,a._)("p",null,[(0,a._)("code",null,"Optimize imports"),(0,a.Uk)(" : 没用到的namespace，use会自动移除。")])]),(0,a._)("li",null,[(0,a._)("p",null,[(0,a._)("code",null,"Rearrange code"),(0,a.Uk)(" : 会自动依据Code Style的Arrangement规格将代码重新排序。")])])],-1),ae={},pe=(0,s(3744).Z)(ae,[["render",function(e,n){const s=(0,a.up)("OutboundLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[p,l,(0,a._)("p",null,[(0,a._)("a",r,[o,(0,a.Wm)(s)]),t,i,c]),d,(0,a._)("p",null,[u,(0,a._)("a",h,[g,(0,a.Wm)(s)]),b]),m,(0,a._)("p",null,[(0,a._)("a",f,[k,(0,a.Wm)(s)]),x,P,_,S,v]),R,U,(0,a._)("p",null,[C,(0,a._)("a",w,[y,(0,a.Wm)(s)]),F]),H,(0,a._)("img",{src:e.$withBase("/images/tools/phpstorm/editor-code-style-php-psr-1-and-psr-2.png"),alt:""},null,8,O),E,(0,a._)("img",{src:e.$withBase("/images/tools/phpstorm/editor-code-style-php-wrapping-and-braces-array-align-key-value-pairs.png"),alt:""},null,8,q),$,A,(0,a._)("img",{src:e.$withBase("/images/tools/phpstorm/languages-and-frameworks-php-code-sniffer-for-current-project-configuration.png"),alt:""},null,8,B),D,(0,a._)("img",{src:e.$withBase("/images/tools/phpstorm/languages-and-frameworks-php-code-sniffer-for-current-project-configuration-phpcs-path.png"),alt:""},null,8,L),I,(0,a._)("img",{src:e.$withBase("/images/tools/phpstorm/editor-inspections-php-code-sniffer-validation-psr2.png"),alt:""},null,8,T),N,(0,a._)("img",{src:e.$withBase("/images/tools/phpstorm/php-cs-fixer-external-tools.png"),alt:""},null,8,z),M,(0,a._)("img",{src:e.$withBase("/images/tools/phpstorm/create-php-cs-fixer-tool.png"),alt:""},null,8,W),j,K,(0,a._)("img",{src:e.$withBase("/images/tools/phpstorm/preferences-keymap-add-keyboard-shortcut.png"),alt:""},null,8,V),Y,Z,G,J,(0,a._)("img",{src:e.$withBase("/images/tools/phpstorm/preferences-keymap-add-keyboard-shortcut-shift-control-command-l.png"),alt:""},null,8,X),Q,ee,(0,a._)("img",{src:e.$withBase("/images/tools/phpstorm/php-cs-fixer-refomat-file.png"),alt:""},null,8,ne),se],64)}]])},3744:(e,n)=>{n.Z=(e,n)=>{const s=e.__vccOpts||e;for(const[e,a]of n)s[e]=a;return s}}}]);