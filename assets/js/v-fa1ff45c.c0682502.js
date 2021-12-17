(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5483],{4182:(a,e,r)=>{"use strict";r.r(e),r.d(e,{data:()=>n});const n={key:"v-fa1ff45c",path:"/tools/vagrant/mac-installation-vagrant.html",title:"Mac下安装使用Vagrant和LANMP环境搭建",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"安装",slug:"安装",children:[{level:3,title:"安装Vagrant",slug:"安装vagrant",children:[]},{level:3,title:"安装Virtualbox",slug:"安装virtualbox",children:[]}]},{level:2,title:"使用",slug:"使用",children:[{level:3,title:"在线下载box",slug:"在线下载box",children:[]},{level:3,title:"下载box到本地",slug:"下载box到本地",children:[]},{level:3,title:"初始化虚拟机配置",slug:"初始化虚拟机配置",children:[]},{level:3,title:"启动虚拟机",slug:"启动虚拟机",children:[]}]}],filePathRelative:"tools/vagrant/mac-installation-vagrant.md",git:{updatedTime:1639727659e3,contributors:[]}}},5983:(a,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>J});var n=r(6252);const t=(0,n.Wm)("h1",{id:"mac下安装使用vagrant和lanmp环境搭建",tabindex:"-1"},[(0,n.Wm)("a",{class:"header-anchor",href:"#mac下安装使用vagrant和lanmp环境搭建","aria-hidden":"true"},"#"),(0,n.Uk)(" Mac下安装使用Vagrant和LANMP环境搭建")],-1),l=(0,n.Wm)("ul",null,[(0,n.Wm)("li",null,[(0,n.Wm)("p",null,"macOS Sierra 10.12.6")]),(0,n.Wm)("li",null,[(0,n.Wm)("p",null,"VirtualBox-5.1.28-117968-OSX")]),(0,n.Wm)("li",null,[(0,n.Wm)("p",null,"vagrant_2.0.0_x86_64")])],-1),o=(0,n.Uk)("Vagrant("),s={href:"https://www.vagrantup.com",title:"Vagrant官网",target:"_blank",rel:"noopener noreferrer"},i=(0,n.Uk)("官网"),u=(0,n.Uk)("，"),c={href:"https://github.com/mitchellh/vagrant",title:"Vagrant项目GitHub地址",target:"_blank",rel:"noopener noreferrer"},h=(0,n.Uk)("GitHub"),d=(0,n.Uk)(" )是一款用来构建虚拟开发环境的工具，它其实算是一个跨平台的虚拟机管理工具。"),b=(0,n.Wm)("p",null,"Vagrant创建虚拟机时，需要用到Box，它里面包含了虚拟机配置、虚拟机硬盘镜像和Vagrant配置的压缩包，有了Box，就不需要重新下载ISO镜像文件、新建虚拟机和修改虚拟机等配置，而是直接运行锁需要的操作系统。",-1),p=(0,n.Wm)("p",null,"相关box推荐",-1),m=(0,n.Uk)("scotch/box ("),g={href:"https://box.scotch.io/",title:"scotch官方地址",target:"_blank",rel:"noopener noreferrer"},x=(0,n.Uk)("官方地址"),v=(0,n.Uk)(" ，"),k={href:"https://github.com/scotch-io/scotch-box",title:"scotch项目GitHub地址",target:"_blank",rel:"noopener noreferrer"},W=(0,n.Uk)("GitHub地址"),f=(0,n.Uk)(")"),U=(0,n.Wm)("h2",{id:"安装",tabindex:"-1"},[(0,n.Wm)("a",{class:"header-anchor",href:"#安装","aria-hidden":"true"},"#"),(0,n.Uk)(" 安装")],-1),w=(0,n.Wm)("h3",{id:"安装vagrant",tabindex:"-1"},[(0,n.Wm)("a",{class:"header-anchor",href:"#安装vagrant","aria-hidden":"true"},"#"),(0,n.Uk)(" 安装Vagrant")],-1),V=(0,n.Uk)("Vagrant的官方下载地址："),_={href:"https://www.vagrantup.com/downloads.html",title:"vagrant官网",target:"_blank",rel:"noopener noreferrer"},B=(0,n.Uk)("https://www.vagrantup.com/downloads.html"),D=(0,n.Uk)(" ，下载后打开文件，点击pkg包进行安装。"),H=(0,n.Wm)("h3",{id:"安装virtualbox",tabindex:"-1"},[(0,n.Wm)("a",{class:"header-anchor",href:"#安装virtualbox","aria-hidden":"true"},"#"),(0,n.Uk)(" 安装Virtualbox")],-1),P=(0,n.Wm)("p",null,"Vagrant依赖现有的虚拟机软件来管理虚拟机，如Virtualbox、Vmware Fusion、Parallel Desktop等，其中最方便的是Virtualbox，这里选择它进行安装。",-1),q=(0,n.Uk)("Virtualbox官方下载地址："),y={href:"https://www.virtualbox.org/wiki/Downloads",title:"VirtualBox官网",target:"_blank",rel:"noopener noreferrer"},C=(0,n.Uk)("https://www.virtualbox.org/wiki/Downloads"),G=(0,n.Uk)(" ，下载后直接安装即可。"),M=(0,n.uE)('<h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><h3 id="在线下载box" tabindex="-1"><a class="header-anchor" href="#在线下载box" aria-hidden="true">#</a> 在线下载box</h3><p>在Vagrant中，box是一种打包好的镜像，通过这个镜像，可以生成相应的虚拟机。box可以通过官方网站下载，也可以自己制作后在团队中分享。</p><p>这里使用官方的box在创建时自动下载</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> -p ~/Documents/Vagrant/Ubuntu <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> ~/Documents/Vagrant/Ubuntu\nvagrant box <span class="token function">add</span> ubuntu/trusty64\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>',5),O=(0,n.Uk)("ubuntu/trusty64 是一个公共的box（"),S={href:"https://app.vagrantup.com/boxes/search",title:"Discover Vagrant Boxes - Vagrant Cloud",target:"_blank",rel:"noopener noreferrer"},L=(0,n.Uk)("更多box"),N=(0,n.Uk)("）。"),A=(0,n.Wm)("p",null,[(0,n.Uk)("如果没有就会去官方下载，并且Box被保存在"),(0,n.Wm)("code",null,"~/vagrant/"),(0,n.Uk)("下，并且在线下载 Box 会比较慢，你可以先下载 Box 之后，再加载本地的 Box 进行初始化。")],-1),E=(0,n.Wm)("h3",{id:"下载box到本地",tabindex:"-1"},[(0,n.Wm)("a",{class:"header-anchor",href:"#下载box到本地","aria-hidden":"true"},"#"),(0,n.Uk)(" 下载box到本地")],-1),j=(0,n.Uk)("将 Ubuntu 64 Box："),z={href:"http://files.vagrantup.com/precise64.box",target:"_blank",rel:"noopener noreferrer"},F=(0,n.Uk)("http://files.vagrantup.com/precise64.box"),I=(0,n.Uk)(" 下载到本地。另外其他 Box 下载地址："),R={href:"http://www.vagrantbox.es/",target:"_blank",rel:"noopener noreferrer"},T=(0,n.Uk)("http://www.vagrantbox.es/"),X=(0,n.Uk)(" 。"),Y=(0,n.uE)('<p>添加镜像</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>vagrant box <span class="token function">add</span> ubuntu1404 /yourPath/precise64.box\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote><p>上面的命令执行完，在镜像列表中可以看到相关信息，执行<code>vagrant box list</code>可以查看已有的镜像列表。</p></blockquote><h3 id="初始化虚拟机配置" tabindex="-1"><a class="header-anchor" href="#初始化虚拟机配置" aria-hidden="true">#</a> 初始化虚拟机配置</h3><p>不管是通过在线下载还是将box下载到本地，使用下面的命令进行初始化。<strong>执行初始化命令时，请记得在一个新建的目录下运行</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>vagrant init ubuntu1204\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>运行上面的命令后，Vagrant会在当前运行的目录下创建 <code>Vagrantfile</code> 的配置文件。</p><h3 id="启动虚拟机" tabindex="-1"><a class="header-anchor" href="#启动虚拟机" aria-hidden="true">#</a> 启动虚拟机</h3><p>使用下面的命令来启动虚拟机。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>vagrant up --provider virtualbox\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote><p>上面的命令是指定virtualbox虚拟机来启动 <code>vagrant</code> 。</p><p>如果虚拟机不存在则会新建虚拟机，如果存在则会启动虚拟机。</p></blockquote>',11),J={render:function(a,e){const r=(0,n.up)("OutboundLink");return(0,n.wg)(),(0,n.j4)(n.HY,null,[t,l,(0,n.Wm)("p",null,[o,(0,n.Wm)("a",s,[i,(0,n.Wm)(r)]),u,(0,n.Wm)("a",c,[h,(0,n.Wm)(r)]),d]),b,p,(0,n.Wm)("ul",null,[(0,n.Wm)("li",null,[m,(0,n.Wm)("a",g,[x,(0,n.Wm)(r)]),v,(0,n.Wm)("a",k,[W,(0,n.Wm)(r)]),f])]),U,w,(0,n.Wm)("p",null,[V,(0,n.Wm)("a",_,[B,(0,n.Wm)(r)]),D]),H,P,(0,n.Wm)("p",null,[q,(0,n.Wm)("a",y,[C,(0,n.Wm)(r)]),G]),M,(0,n.Wm)("p",null,[O,(0,n.Wm)("a",S,[L,(0,n.Wm)(r)]),N]),A,E,(0,n.Wm)("p",null,[j,(0,n.Wm)("a",z,[F,(0,n.Wm)(r)]),I,(0,n.Wm)("a",R,[T,(0,n.Wm)(r)]),X]),Y],64)}}}}]);