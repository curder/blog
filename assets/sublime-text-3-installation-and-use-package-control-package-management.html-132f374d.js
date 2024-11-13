import{_ as i,M as n,p as r,q as l,R as e,t as a,N as c,a1 as d}from"./framework-ff09ffed.js";const s={},h=e("h1",{id:"sublime-text-3安装和使用package-control包管理",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#sublime-text-3安装和使用package-control包管理","aria-hidden":"true"},"#"),a(" Sublime Text 3安装和使用Package Control包管理")],-1),m=e("h2",{id:"安装sublime-text-3",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#安装sublime-text-3","aria-hidden":"true"},"#"),a(" 安装Sublime Text 3")],-1),p={href:"https://www.sublimetext.com",target:"_blank",rel:"noopener noreferrer"},u={href:"https://brew.sh/",target:"_blank",rel:"noopener noreferrer"},b=e("code",null,"brew install caskroom/cask/sublime-text",-1),g=d('<p>简而言之，它是用来管理 Sublime Text 插件的插件，所以首次使用Sublime Text前也是需要安装的。</p><h2 id="安装和卸载" tabindex="-1"><a class="header-anchor" href="#安装和卸载" aria-hidden="true">#</a> 安装和卸载</h2><h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3><ul><li><p>通过菜单安装 在Sublime Text编辑器顶部的<code>Tools</code>-&gt;<code>Install Package Control...</code>，点击它安装Sublime Text的包管理工具，稍等片刻即可安装成功。</p></li><li><p>通过命令行安装 使用快捷键<code>⌘(Command) + ⇧(Shift) + P</code>，输入<code>Install Package Control</code>字符后点击回车完成安装。</p></li></ul><p>成功后返回如下的提示窗信息。</p>',5),k=["src"],x=d('<h3 id="卸载" tabindex="-1"><a class="header-anchor" href="#卸载" aria-hidden="true">#</a> 卸载</h3><p>使用快捷键<code>Command + Shift + p</code>，输入<code>Package Control: Remove Package</code>字符后点击回车完成卸载。</p><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><p>通过 <code>Package Control</code> 能很方便安装其它插件。</p><h3 id="安装插件" tabindex="-1"><a class="header-anchor" href="#安装插件" aria-hidden="true">#</a> 安装插件</h3><p>这里以<code>Emmet</code>插件的安装为例，一般插件的安装都可以通过这种方式。</p><p>使用快捷键<code>Command + Shift + p</code>，输入<code>Install Package</code>字符后再输入要安装的插件名称<code>Emmet</code>回车等待安装完成。</p><h3 id="卸载插件" tabindex="-1"><a class="header-anchor" href="#卸载插件" aria-hidden="true">#</a> 卸载插件</h3><p>使用快捷键<code>Command + Shift + p</code>，输入<code>Remove Package</code>字符后再输入要安装的插件名称<code>Emmet</code>回车等待安装完成。</p><h3 id="禁用插件" tabindex="-1"><a class="header-anchor" href="#禁用插件" aria-hidden="true">#</a> 禁用插件</h3><p>使用快捷键<code>Command + Shift + p</code>，输入<code>Disable Package</code>字符后再输入要安装的插件名称禁用插件。（其实就是在个人配置中的<code>ignored_packages</code>中添加插件名称。）</p><blockquote><p>使用这个命令可以禁用系统默认安装的插件。</p></blockquote><h3 id="启用插件" tabindex="-1"><a class="header-anchor" href="#启用插件" aria-hidden="true">#</a> 启用插件</h3><p>使用快捷键<code>Command + Shift + p</code>，输入<code>Enable Package</code>字符后再输入要安装的插件名称禁用插件。（其实就是在个人配置中的<code>ignored_packages</code>中移除插件名称。）</p><h3 id="插件列表" tabindex="-1"><a class="header-anchor" href="#插件列表" aria-hidden="true">#</a> 插件列表</h3><p>使用快捷键<code>Command + Shift + p</code>，输入<code>List Package</code>字符后查看当前环境已经安装的插件。</p><h2 id="命令关键字" tabindex="-1"><a class="header-anchor" href="#命令关键字" aria-hidden="true">#</a> 命令关键字</h2><ul><li><code>Install Package</code> 升级插件</li><li><code>Remove Package</code> 移除插件</li><li><code>Disable Package</code> 禁用插件</li><li><code>Enable Package</code> 启用插件</li><li><code>List Package</code> 插件列表</li></ul>',18);function _(t,f){const o=n("ExternalLinkIcon");return r(),l("div",null,[h,m,e("p",null,[a("Sublime Text 3 的官方网站在"),e("a",p,[a("这里"),c(o)]),a("，找到适合自己的平台进行下载并安装。")]),e("p",null,[a("这里以MacOSX系统安装为例，在MacOSX平台下可以使用"),e("a",u,[a("Homebrew"),c(o)]),a("来管理sublime text软件，执行命令"),b,a("。")]),g,e("img",{src:t.$withBase("/images/tools/sublime/sublime-text-3-install-success-alert.png"),alt:""},null,8,k),x])}const S=i(s,[["render",_],["__file","sublime-text-3-installation-and-use-package-control-package-management.html.vue"]]);export{S as default};