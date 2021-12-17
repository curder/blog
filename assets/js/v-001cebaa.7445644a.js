"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2400],{3223:(e,a,s)=>{s.r(a),s.d(a,{data:()=>n});const n={key:"v-001cebaa",path:"/languages/go/how-to-install-go-lang-on-mac-osx.html",title:"如何在MacOSX上安装Go",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"安装Homebrew",slug:"安装homebrew",children:[]},{level:2,title:"安装golang",slug:"安装golang",children:[]},{level:2,title:"配置环境变量",slug:"配置环境变量",children:[{level:3,title:"创建项目目录",slug:"创建项目目录",children:[]},{level:3,title:"保存环境变量",slug:"保存环境变量",children:[]}]}],filePathRelative:"languages/go/how-to-install-go-lang-on-mac-osx.md",git:{updatedTime:1639727806e3,contributors:[{name:"curder",email:"q.curder@gmail.com",commits:1}]}}},5360:(e,a,s)=>{s.r(a),s.d(a,{default:()=>h});var n=s(6252);const o=(0,n._)("h1",{id:"如何在macosx上安装go",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#如何在macosx上安装go","aria-hidden":"true"},"#"),(0,n.Uk)(" 如何在MacOSX上安装Go")],-1),l=(0,n._)("h2",{id:"安装homebrew",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#安装homebrew","aria-hidden":"true"},"#"),(0,n.Uk)(" 安装Homebrew")],-1),r=(0,n.Uk)("在"),c={href:"http://brew.sh/",target:"_blank",rel:"noopener noreferrer"},t=(0,n.Uk)("Homebrew"),i=(0,n.Uk)("复制安装命令，在控制台运行完成安装"),p=(0,n.uE)('<h2 id="安装golang" tabindex="-1"><a class="header-anchor" href="#安装golang" aria-hidden="true">#</a> 安装golang</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>brew update <span class="token operator">&amp;&amp;</span> brew upgrade\nbrew <span class="token function">install</span> go\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="配置环境变量" tabindex="-1"><a class="header-anchor" href="#配置环境变量" aria-hidden="true">#</a> 配置环境变量</h2><h3 id="创建项目目录" tabindex="-1"><a class="header-anchor" href="#创建项目目录" aria-hidden="true">#</a> 创建项目目录</h3><p>创建一个目录作为<code>gopath</code>，这里举例将其命名为<code>go-lang-projects</code>，并在目录创建三个目录<code>bin</code>、<code>src</code>、<code>pkg</code>。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> -p ~/go-lang-projects/<span class="token punctuation">{</span>bin,pkg,src<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="保存环境变量" tabindex="-1"><a class="header-anchor" href="#保存环境变量" aria-hidden="true">#</a> 保存环境变量</h3><p>如果当前用户shell使用的<code>/bin/bash</code>，则将下面的环境变量写入到<code>~/.bash_profile</code>中，如果使用的是<code>zsh</code>，则将下面的内容写入到<code>~/.zshrc</code>中，下面的操作以<code>~/.zshrc</code>为例。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;# go path&quot;</span> <span class="token operator">&gt;&gt;</span> ~/.zshrc\n<span class="token builtin class-name">echo</span> <span class="token string">&quot;export GOROOT=/usr/local/opt/go/libexec&quot;</span> <span class="token operator">&gt;&gt;</span> ~/.zshrc\n<span class="token builtin class-name">echo</span> <span class="token string">&quot;export GOPATH=~/go-lang-projects&quot;</span> <span class="token operator">&gt;&gt;</span> ~/.zshrc\n<span class="token builtin class-name">echo</span> <span class="token string">&quot;export PATH=\\<span class="token environment constant">$PATH</span>:\\<span class="token variable">$GOROOT</span>/bin:\\<span class="token variable">$GOPATH</span>/bin&quot;</span> <span class="token operator">&gt;&gt;</span> ~/.zshrc\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>最后使用<code>source</code>命令使配置生效</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">source</span> ~/.zshrc\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',11),d={},h=(0,s(3744).Z)(d,[["render",function(e,a){const s=(0,n.up)("OutboundLink");return(0,n.wg)(),(0,n.iD)(n.HY,null,[o,l,(0,n._)("p",null,[r,(0,n._)("a",c,[t,(0,n.Wm)(s)]),i]),p],64)}]])},3744:(e,a)=>{a.Z=(e,a)=>{const s=e.__vccOpts||e;for(const[e,n]of a)s[e]=n;return s}}}]);