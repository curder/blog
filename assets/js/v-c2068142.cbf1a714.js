"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[7221],{588:(e,s,n)=>{n.r(s),n.d(s,{data:()=>a});const a={key:"v-c2068142",path:"/os/ubuntu/ubuntu-server-initialization.html",title:"Ubuntu 服务器初始化",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"更新国内源(选做)",slug:"更新国内源-选做",children:[]},{level:2,title:"更新 Ubuntu 系统",slug:"更新-ubuntu-系统",children:[]},{level:2,title:"添加必要系统工具",slug:"添加必要系统工具",children:[{level:3,title:"Git安装和简单配置",slug:"git安装和简单配置",children:[]},{level:3,title:"其他常用工具",slug:"其他常用工具",children:[]}]},{level:2,title:"设置正确的主机名",slug:"设置正确的主机名",children:[]},{level:2,title:"设置时区",slug:"设置时区",children:[]},{level:2,title:"配置默认的编辑器",slug:"配置默认的编辑器",children:[]},{level:2,title:"添加新用户",slug:"添加新用户",children:[]},{level:2,title:"安装 docker（可选）",slug:"安装-docker-可选",children:[]},{level:2,title:"配置 SSH 登录及 SSH Server 安全设定",slug:"配置-ssh-登录及-ssh-server-安全设定",children:[{level:3,title:"配置免密登录",slug:"配置免密登录",children:[]},{level:3,title:"SSH安全设定",slug:"ssh安全设定",children:[]},{level:3,title:"重启 SSH Server",slug:"重启-ssh-server",children:[]},{level:3,title:"重启服务器",slug:"重启服务器",children:[]}]},{level:2,title:"参考",slug:"参考",children:[]}],filePathRelative:"os/ubuntu/ubuntu-server-initialization.md",git:{updatedTime:1640243532e3,contributors:[{name:"curder",email:"q.curder@gmail.com",commits:1}]}}},4346:(e,s,n)=>{n.r(s),n.d(s,{default:()=>S});var a=n(6252);const r=(0,a._)("h1",{id:"ubuntu-服务器初始化",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#ubuntu-服务器初始化","aria-hidden":"true"},"#"),(0,a.Uk)(" Ubuntu 服务器初始化")],-1),l=(0,a._)("p",null,"初次创建新 Ubuntu 服务器时，应该尽早完成一些初始化配置，作为基本设置的一部分，这将增加服务器的安全性和可用性，并为后续操作奠定坚实的基础。",-1),t=(0,a._)("h2",{id:"更新国内源-选做",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#更新国内源-选做","aria-hidden":"true"},"#"),(0,a.Uk)(" 更新国内源(选做)")],-1),u=(0,a.Uk)("这里使用清华的镜像源替换文件 "),i=(0,a._)("code",null,"/etc/apt/sources.list",-1),c=(0,a.Uk)(" 内容，"),d={href:"https://mirrors.ustc.edu.cn/help/ubuntu.html?highlight=ubuntu",target:"_blank",rel:"noopener noreferrer"},o=(0,a.Uk)("参考文档"),p=(0,a.Uk)("。"),b=(0,a.uE)('<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>deb https://mirrors.ustc.edu.cn/ubuntu/ focal main restricted universe multiverse\ndeb-src https://mirrors.ustc.edu.cn/ubuntu/ focal main restricted universe multiverse\n\ndeb https://mirrors.ustc.edu.cn/ubuntu/ focal-security main restricted universe multiverse\ndeb-src https://mirrors.ustc.edu.cn/ubuntu/ focal-security main restricted universe multiverse\n\ndeb https://mirrors.ustc.edu.cn/ubuntu/ focal-updates main restricted universe multiverse\ndeb-src https://mirrors.ustc.edu.cn/ubuntu/ focal-updates main restricted universe multiverse\n\ndeb https://mirrors.ustc.edu.cn/ubuntu/ focal-backports main restricted universe multiverse\ndeb-src https://mirrors.ustc.edu.cn/ubuntu/ focal-backports main restricted universe multiverse\n\n<span class="token comment">## Not recommended</span>\n<span class="token comment"># deb https://mirrors.ustc.edu.cn/ubuntu/ focal-proposed main restricted universe multiverse</span>\n<span class="token comment"># deb-src https://mirrors.ustc.edu.cn/ubuntu/ focal-proposed main restricted universe multiverse</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="更新-ubuntu-系统" tabindex="-1"><a class="header-anchor" href="#更新-ubuntu-系统" aria-hidden="true">#</a> 更新 Ubuntu 系统</h2><p>首先执行下列命令把系统更新到最新状态，包括厂商预装的一些组件和内核等。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> update\n<span class="token function">sudo</span> <span class="token function">apt</span> list --upgradable\n<span class="token function">sudo</span> <span class="token function">apt</span> upgrade -y\n\n<span class="token comment"># 升级之后执行下面的命令清理</span>\n<span class="token function">sudo</span> <span class="token function">apt</span> autoremove\n<span class="token function">sudo</span> <span class="token function">apt</span> clean\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="添加必要系统工具" tabindex="-1"><a class="header-anchor" href="#添加必要系统工具" aria-hidden="true">#</a> 添加必要系统工具</h2><h3 id="git安装和简单配置" tabindex="-1"><a class="header-anchor" href="#git安装和简单配置" aria-hidden="true">#</a> Git安装和简单配置</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo apt-get install -y git # 安装 git\n\n## 配置git\ngit config --global user.name &quot;ubuntu&quot;\ngit config --global user.email &quot;ubuntu@example.com&quot;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="其他常用工具" tabindex="-1"><a class="header-anchor" href="#其他常用工具" aria-hidden="true">#</a> 其他常用工具</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo apt-get install -y \\\n  vim \\\n  wget \\\n  curl \\\n  cmake \\\n  g++ \\\n  tree \\\n  zip \\\n  unzip\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="设置正确的主机名" tabindex="-1"><a class="header-anchor" href="#设置正确的主机名" aria-hidden="true">#</a> 设置正确的主机名</h2><p>默认主机的 hostname 都是随机生成，不方便识别，这里以 <code>ububtu.example.com</code> 为实例作为主机名进行设置。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> hostnamectl set-hostname ubuntu.example.com <span class="token comment"># 设置</span>\n<span class="token function">sudo</span> hostnamectl <span class="token comment"># 查看</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><blockquote><p>设置完成之后，退出终端重新登录就可以看到设置生效了。</p></blockquote><h2 id="设置时区" tabindex="-1"><a class="header-anchor" href="#设置时区" aria-hidden="true">#</a> 设置时区</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> timedatectl set-timezone Asia/Shanghai\n<span class="token function">sudo</span> timedatectl set-local-rtc <span class="token number">0</span>\n<span class="token function">sudo</span> timedatectl set-ntp <span class="token number">1</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="配置默认的编辑器" tabindex="-1"><a class="header-anchor" href="#配置默认的编辑器" aria-hidden="true">#</a> 配置默认的编辑器</h2><p>Ubuntu 系统默认的文件编辑器是 nano 而不是 Vim，那么怎么设置成 Vim 呢？</p><p>执行下面的命令后选择 Vim，将Vim设置为默认的编辑器。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> update-alternatives --config editor\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="添加新用户" tabindex="-1"><a class="header-anchor" href="#添加新用户" aria-hidden="true">#</a> 添加新用户</h2><p>初始情况通常会得到一个 root 账户。大多数云主机在安装 Ubuntu 系统后，默认都是用 root 账户登录的。用 root 账户非常危险，还是养成好习惯，用普通用户登录，然后执行 sudo 比较安全点。</p><p>先用这个命令新建一个叫 <strong>ubuntu</strong> 的普通用户：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> adduser ubuntu\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>创建完 ubuntu 用户后，如果想用它来执行一些系统级命令，可以把它加进 sudo 群组，这样就可以用 sudo 命令了：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">usermod</span> -aG <span class="token function">sudo</span> ubuntu\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="安装-docker-可选" tabindex="-1"><a class="header-anchor" href="#安装-docker-可选" aria-hidden="true">#</a> 安装 docker（可选）</h2>',26),h={href:"https://docs.docker.com/engine/install/ubuntu/",target:"_blank",rel:"noopener noreferrer"},m=(0,a.Uk)("docker官方"),g=(0,a.Uk)("为 Ubuntu 提供了三种安装方式，这里使用最简单的通过脚本的方式安装："),v=(0,a.uE)('<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>curl -fsSL https://get.docker.com -o get-docker.sh\nsudo sh get-docker.sh\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>将普通用户添加到 docker 用户组，这样普通用户就能正常操作docker。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">usermod</span> -aG docker <span class="token environment constant">$USER</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote><p>添加新用户到docker组之后需要退出终端重新进入才能正常操作docker命令</p></blockquote><p>启动一个 hello-world 容器</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>docker run hello-world\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="配置-ssh-登录及-ssh-server-安全设定" tabindex="-1"><a class="header-anchor" href="#配置-ssh-登录及-ssh-server-安全设定" aria-hidden="true">#</a> 配置 SSH 登录及 SSH Server 安全设定</h2><h3 id="配置免密登录" tabindex="-1"><a class="header-anchor" href="#配置免密登录" aria-hidden="true">#</a> 配置免密登录</h3><p>为了避免每次使用上面新建的用户ubuntu，登录服务器时都要输入密码，给登录用户设置 SSH Key 来登录，这样以后登录就不用输入密码。</p><p>使用 <code>su - ubuntu</code> 切换到 <code>ubuntu</code> 用户下进行下面的操作。</p><ol><li>执行下面的命令，建立 <code>authorized_keys</code> 文件。</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> -p ~/.ssh\n<span class="token function">touch</span> ~/.ssh/authorized_keys\n<span class="token function">chmod</span> <span class="token number">600</span> ~/.ssh/authorized_keys\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ol start="2"><li>将本机个人电脑的 <code>id_rsa.pub</code> 文件内容复制进去，如果不存在就通过 <code>ssh-keygen</code> 生成一对公私钥。</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># 可以通过手动拷贝也可以通过下面的命令进行自动拷贝</span>\nssh-copy-id ubuntu@ServerIP\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>本机以后登录服务器就可以用 <code>ssh ubuntu@ServerIP</code> 来登录主机了。</p><h3 id="ssh安全设定" tabindex="-1"><a class="header-anchor" href="#ssh安全设定" aria-hidden="true">#</a> SSH安全设定</h3><p>编辑 SSH 配置文件<code>/etc/ssh/sshd_config</code>：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">vim</span> /etc/ssh/sshd_config\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol><li>把 PermitRootLogin 设置成 no，用于禁止 root 登录：</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>PermitRootLogin no\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="2"><li>把 PasswordAuthentication 设置成 no，禁止密码登录，更安全：</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>PasswordAuthentication no\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="3"><li>修改默认端口（选做）</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Port 2222\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote><p><strong>注意</strong> 改成其他数字后，记得防火墙或者安全组配置的相关设置也需要同步更新。</p></blockquote><h3 id="重启-ssh-server" tabindex="-1"><a class="header-anchor" href="#重启-ssh-server" aria-hidden="true">#</a> 重启 SSH Server</h3><blockquote><p><strong>注意</strong> 在重启 SSH 服务之前，建议新建一个窗口尝试登录到服务器，避免一些错误导致无法连接到服务器。</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo systemctl restart sshd.service\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="重启服务器" tabindex="-1"><a class="header-anchor" href="#重启服务器" aria-hidden="true">#</a> 重启服务器</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo reboot\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>使用上面的命令可以对服务器进行重启。</p><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>',32),k={href:"https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-20-04",target:"_blank",rel:"noopener noreferrer"},f=(0,a.Uk)("Initial Server Setup with Ubuntu 20.04"),x={},S=(0,n(3744).Z)(x,[["render",function(e,s){const n=(0,a.up)("OutboundLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[r,l,t,(0,a._)("p",null,[u,i,c,(0,a._)("a",d,[o,(0,a.Wm)(n)]),p]),b,(0,a._)("p",null,[(0,a._)("a",h,[m,(0,a.Wm)(n)]),g]),v,(0,a._)("ul",null,[(0,a._)("li",null,[(0,a._)("a",k,[f,(0,a.Wm)(n)])])])],64)}]])},3744:(e,s)=>{s.Z=(e,s)=>{const n=e.__vccOpts||e;for(const[e,a]of s)n[e]=a;return n}}}]);