"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1659],{7698:(n,e,a)=>{a.r(e),a.d(e,{data:()=>s});const s={key:"v-ecc32db8",path:"/os/mac-os/install-and-use-the-node-version-management-tools-nvm-and-smart-npm-under-mac.html",title:"Mac下安装和使用node版本管理工具nvm和smart-npm",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"nvm",slug:"nvm",children:[{level:3,title:"安装",slug:"安装",children:[]},{level:3,title:"配置",slug:"配置",children:[]},{level:3,title:"测试",slug:"测试",children:[]},{level:3,title:"使用",slug:"使用",children:[]}]},{level:2,title:"smart-npm",slug:"smart-npm",children:[{level:3,title:"安装",slug:"安装-1",children:[]},{level:3,title:"配置",slug:"配置-1",children:[]},{level:3,title:"卸载",slug:"卸载",children:[]}]},{level:2,title:"参考链接",slug:"参考链接",children:[]}],filePathRelative:"os/mac-os/install-and-use-the-node-version-management-tools-nvm-and-smart-npm-under-mac.md",git:{updatedTime:1639727806e3,contributors:[{name:"curder",email:"q.curder@gmail.com",commits:1}]}}},437:(n,e,a)=>{a.r(e),a.d(e,{default:()=>R});var s=a(6252);const l=(0,s._)("h1",{id:"mac下安装和使用node版本管理工具nvm和smart-npm",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#mac下安装和使用node版本管理工具nvm和smart-npm","aria-hidden":"true"},"#"),(0,s.Uk)(" Mac下安装和使用node版本管理工具nvm和smart-npm")],-1),r=(0,s.Uk)("目前主流的node版本管理工具有两种，"),o={href:"https://github.com/creationix/nvm",target:"_blank",rel:"noopener noreferrer"},c=(0,s.Uk)("nvm"),t=(0,s.Uk)("和"),i={href:"https://github.com/tj/n",target:"_blank",rel:"noopener noreferrer"},d=(0,s.Uk)("n"),p=(0,s.Uk)("。 两者差异挺大的，具体分析可以参考一下淘宝FED团队的一篇文章： "),m={href:"http://taobaofed.org/blog/2015/11/17/nvm-or-n/",target:"_blank",rel:"noopener noreferrer"},u=(0,s.Uk)("管理 node 版本，选择 nvm 还是 n ?"),h=(0,s.Uk)("。"),b=(0,s.uE)('<h2 id="nvm" tabindex="-1"><a class="header-anchor" href="#nvm" aria-hidden="true">#</a> nvm</h2><h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3><p>安装可以参考nvm的README文档，这里使用<code>curl</code>命令安装。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">curl</span> -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh <span class="token operator">|</span> <span class="token function">bash</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h3><p>成功执行上面的命令后<code>nvm</code>就被安装在了<code>~/.nvm</code>目录下，接下来就需要配一下环境变量了，如果当前Mac环境使用了<code>zsh</code>的话，就需要在<code>~/.zshrc</code>这个配置文件中配置，否则就编辑<code>~/.bash_profile</code> 或者<code>~/.profile</code>文件，添加如下内容。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">NVM_DIR</span><span class="token operator">=</span><span class="token string">&quot;<span class="token environment constant">$HOME</span>/.nvm&quot;</span>\n<span class="token punctuation">[</span> -s <span class="token string">&quot;<span class="token variable">$NVM_DIR</span>/nvm.sh&quot;</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">.</span> <span class="token string">&quot;<span class="token variable">$NVM_DIR</span>/nvm.sh&quot;</span> <span class="token comment"># This loads nvm</span>\n<span class="token comment"># current npm path</span>\n<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">npm</span> config get prefix<span class="token variable">)</span></span>/bin:<span class="token environment constant">$PATH</span>&quot;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>至此，<code>nvm</code>的安装完成。</p><h3 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h3><p>执行命令将<code>nvm</code>加载到环境变量中。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">source</span> ~/.zshrc\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>验证是否安装成功可以执行命令。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">command</span> -v nvm\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h3><ul><li>查看当前可供使用的NodeJS版本</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>nvm ls-remote\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote><p>NodeJS的版本发布很频繁，一般可以在[NodeJS]官网看到LTS版本进行下载。</p></blockquote><ul><li>安装指定版本的NodeJS</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>nvm <span class="token function">install</span> v8.11.3\nnvm <span class="token function">install</span> v10.4.1\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><blockquote><p>NodeJS安装的目录一般在<code>~/.nvm/versions/node</code>下。</p></blockquote><ul><li>卸载指定的NodeJS版本</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>nvm uninstall v8.11.3 // 卸载8.11.3\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>查看本地安装的NodeJS版本</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>nvm list\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>指定默认的NodeJS版本</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>nvm use v8.11.3\nnvm <span class="token builtin class-name">alias</span> default v8.11.3 <span class="token comment"># 指定默认的NodeJS版本</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li>查看当前使用的NodeJS版本</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>nvm current\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',28),v=(0,s.Uk)("至此，nvm相关的基本操作完成，更多的操作请查看"),g={href:"https://github.com/creationix/nvm",target:"_blank",rel:"noopener noreferrer"},k=(0,s.Uk)("nvm"),f=(0,s.Uk)("项目的README说明。"),x=(0,s.uE)('<h2 id="smart-npm" tabindex="-1"><a class="header-anchor" href="#smart-npm" aria-hidden="true">#</a> smart-npm</h2><h3 id="安装-1" tabindex="-1"><a class="header-anchor" href="#安装-1" aria-hidden="true">#</a> 安装</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> --global smart-npm --registry<span class="token operator">=</span>https://registry.npm.taobao.org/\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="配置-1" tabindex="-1"><a class="header-anchor" href="#配置-1" aria-hidden="true">#</a> 配置</h3><p>如果当前使用了<code>zsh</code>的话，就需要在<code>~/.zshrc</code>这个配置文件中配置，否则就编辑<code>~/.bash_profile</code>或者<code>~/.profile</code>文件，添加如下内容。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">alias</span> <span class="token assign-left variable">npm</span><span class="token operator">=</span>smart-npm\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>重新打开一个终端应该就能看到<code>smart-npm</code>安装在了系统里。</p><h3 id="卸载" tabindex="-1"><a class="header-anchor" href="#卸载" aria-hidden="true">#</a> 卸载</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> uninstall --global smart-npm\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote><p>成功卸载<code>smart-npm</code>安装包的同时需要将<code>~/.zshrc</code>里的<code>alias npm=smart-npm</code>一并删除。</p></blockquote>',10),_=(0,s.Uk)("更多"),U=(0,s._)("code",null,"smart-npm",-1),q=(0,s.Uk)("的使用"),N={href:"https://github.com/qiu8310/smart-npm",target:"_blank",rel:"noopener noreferrer"},S=(0,s.Uk)("参考这里"),J=(0,s.Uk)("。"),M=(0,s._)("h2",{id:"参考链接",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#参考链接","aria-hidden":"true"},"#"),(0,s.Uk)(" 参考链接")],-1),E={href:"https://segmentfault.com/a/1190000004404505",target:"_blank",rel:"noopener noreferrer"},z=(0,s.Uk)("node版本管理工具nvm-Mac下安装及使用"),D={},R=(0,a(3744).Z)(D,[["render",function(n,e){const a=(0,s.up)("OutboundLink");return(0,s.wg)(),(0,s.iD)(s.HY,null,[l,(0,s._)("p",null,[r,(0,s._)("a",o,[c,(0,s.Wm)(a)]),t,(0,s._)("a",i,[d,(0,s.Wm)(a)]),p,(0,s._)("a",m,[u,(0,s.Wm)(a)]),h]),b,(0,s._)("p",null,[v,(0,s._)("a",g,[k,(0,s.Wm)(a)]),f]),x,(0,s._)("p",null,[_,U,q,(0,s._)("a",N,[S,(0,s.Wm)(a)]),J]),M,(0,s._)("ul",null,[(0,s._)("li",null,[(0,s._)("a",E,[z,(0,s.Wm)(a)])])])],64)}]])},3744:(n,e)=>{e.Z=(n,e)=>{const a=n.__vccOpts||n;for(const[n,s]of e)a[n]=s;return a}}}]);