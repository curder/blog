import{_ as a,M as i,p as d,q as r,R as e,t as o,N as n,a1 as c}from"./framework-ff09ffed.js";const l={},s=e("h1",{id:"sublime-text自定义代码片段",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#sublime-text自定义代码片段","aria-hidden":"true"},"#"),o(" Sublime Text自定义代码片段")],-1),p=e("p",null,'在实际开发中常常需要新增一些方法，总是需要重复的输入，现在可以借助"代码片段snippet"来尽可能的减轻我们的开发。',-1),h={href:"https://github.com/jugyo/SublimeSnippetMaker",target:"_blank",rel:"noopener noreferrer"},u=c('<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><p>用<code>Package Control</code>安装<code>SnippetMaker</code>（<code>⌘(Command) + ⇧(Shift) + P</code> –&gt; 输入 <code>install</code>…打开<strong>Package Control</strong> -&gt; 输入<code>SnippetMaker</code> 后回车进入安装）。</p><h2 id="新增" tabindex="-1"><a class="header-anchor" href="#新增" aria-hidden="true">#</a> 新增</h2><p>创建代码片段之前首先要确定生效的文件类型，比如：创建一个PHP类公共方法的定义，我们可以来到某个PHP文件中，代码如下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public function ${1}(${2}) {\n    ${0}\n}\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>光标选中上面代码片段中的所有内容，按<code>Command + Shift + p</code>后输入<code>make Snippet</code>，回车就进入了一问一答环节。</p><ol><li><p><code>Trigget:</code> 提供一个触发关键字，这里输入<code>pubf</code></p></li><li><p><code>Description</code> 输入一个描述，这里输入<code>Create new public function in PHP class file.</code></p></li><li><p><code>Scope</code> 生效的文件类型，默认会自动识别当前文件类型，按回车即可。</p></li><li><p><code>File Name</code> 保存文件名，默认以触发关键字+<code>.sublime-snippet</code>命名。</p></li></ol><p>按下回车后新打开一个新的文件，里面就是刚刚输入的一些内容。</p><p>接下来到一个PHP文件中试一下这个自定义的代码片段是不是能够正常工作。</p><h2 id="修改" tabindex="-1"><a class="header-anchor" href="#修改" aria-hidden="true">#</a> 修改</h2><p>要修改一个已经存在的代码片段也很简单，打开<code>⌘⇧P</code> –&gt; 输入 <code>edit Snippet</code>后在下拉列表中选择要修改的具体代码片段，回车确定选择后进行修改。</p><p>具体更细致的功能和修改请参考文章最底部的官网文档连接。</p><h2 id="查看" tabindex="-1"><a class="header-anchor" href="#查看" aria-hidden="true">#</a> 查看</h2><p>打开命令控制<code>Command + Shift + p</code> 输入<code>snippet</code>，在下拉列表中可以看到一些已经存在的和自定义的代码片段。</p><p>其中也能看到刚刚定义的<code>pubf</code>的代码片段的身影。</p><p>点击回车可以将代码片段应用到当前文件中。</p><h2 id="删除" tabindex="-1"><a class="header-anchor" href="#删除" aria-hidden="true">#</a> 删除</h2><p>打开命令控制<code>Command + Shift + p</code>输入<code>delete snippet</code>，可以上下选择待删除的代码片段。回车确认删除。</p><blockquote><p>删除是一个危险的操作，请保证确定要这样操作，否则有可能再也找不回来。</p></blockquote><h2 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接" aria-hidden="true">#</a> 参考链接</h2>',20),m={href:"http://docs.sublimetext.info/en/latest/extensibility/snippets.html",target:"_blank",rel:"noopener noreferrer"},b={href:"https://laracasts.com/series/professional-php-workflow-in-sublime-text/episodes/6",target:"_blank",rel:"noopener noreferrer"},f={href:"https://9iphp.com/web/html/sublime-text-code-snippets.html",target:"_blank",rel:"noopener noreferrer"},_={href:"https://www.jianshu.com/p/356bd7b2ea8e",target:"_blank",rel:"noopener noreferrer"};function x(k,S){const t=i("ExternalLinkIcon");return d(),r("div",null,[s,p,e("p",null,[o("这里使用 "),e("a",h,[o("SnippetMaker"),n(t)]),o("来辅助我们。")]),u,e("ul",null,[e("li",null,[e("p",null,[e("a",m,[o("Snippets Doc"),n(t)])])]),e("li",null,[e("p",null,[e("a",b,[o("Professional PHP Workflow in Sublime Text 3: Automate Your Keystrokes"),n(t)])])]),e("li",null,[e("p",null,[e("a",f,[o("Sublime Text自定制代码片段(Code Snippets)"),n(t)])])]),e("li",null,[e("p",null,[e("a",_,[o("手把手教你写Sublime中的Snippet"),n(t)])])])])])}const P=a(l,[["render",x],["__file","sublime-custom-code-snippet.html.vue"]]);export{P as default};