"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4407],{7115:(s,n,a)=>{a.r(n),a.d(n,{data:()=>e});const e={key:"v-9cda0d38",path:"/os/centos/installing-configuration-shadowsocks-under-centos-7.html",title:"CentOS7下安装配置 shadowsocks",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"安装",slug:"安装",children:[{level:3,title:"安装epel和pip",slug:"安装epel和pip",children:[]},{level:3,title:"安装Shadowsocks",slug:"安装shadowsocks",children:[]}]},{level:2,title:"配置",slug:"配置",children:[{level:3,title:"普通配置",slug:"普通配置",children:[]},{level:3,title:"配置多个用户",slug:"配置多个用户",children:[]}]},{level:2,title:"进程管理",slug:"进程管理",children:[]},{level:2,title:"检查进程",slug:"检查进程",children:[]},{level:2,title:"使用Supervisord管理进程",slug:"使用supervisord管理进程",children:[{level:3,title:"管理配置",slug:"管理配置",children:[]},{level:3,title:"重载配置",slug:"重载配置",children:[]}]},{level:2,title:"参考链接",slug:"参考链接",children:[]}],filePathRelative:"os/centos/installing-configuration-shadowsocks-under-centos-7.md",git:{updatedTime:1639727806e3,contributors:[{name:"curder",email:"q.curder@gmail.com",commits:1}]}}},921:(s,n,a)=>{a.r(n),a.d(n,{default:()=>z});var e=a(6252);const t=(0,e._)("h1",{id:"centos7下安装配置-shadowsocks",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#centos7下安装配置-shadowsocks","aria-hidden":"true"},"#"),(0,e.Uk)(" CentOS7下安装配置 shadowsocks")],-1),o={href:"https://github.com/shadowsocks/",target:"_blank",rel:"noopener noreferrer"},p=(0,e.Uk)("Shadowsocks"),r=(0,e.Uk)("是当前比较受欢迎的科学上网工具，本文将介绍如何在 CentOS 7下安装和配置 Shadowsocks 服务。"),l=(0,e.Uk)("如果需要科学上网，当前服务器必须不在墙内，否则无法达到预期效果。 本文只介绍了服务器安装Shadowsocks和简单配置。如果要在客户端正常使用可能还需要一些代理软件。比如："),c={href:"https://github.com/shadowsocks/shadowsocks-windows/wiki/Shadowsocks-Windows-%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E",target:"_blank",rel:"noopener noreferrer"},u=(0,e.Uk)("Windows"),d=(0,e.Uk)("、"),i={href:"https://github.com/shadowsocks/ShadowsocksX-NG",target:"_blank",rel:"noopener noreferrer"},k=(0,e.Uk)("MacOSX"),h=(0,e.Uk)("、"),b={href:"https://github.com/shadowsocks/shadowsocks-android",target:"_blank",rel:"noopener noreferrer"},m=(0,e.Uk)("Android"),g=(0,e.Uk)("、"),v={href:"https://github.com/shadowsocks/shadowsocks-iOS/wiki/Help",target:"_blank",rel:"noopener noreferrer"},f=(0,e.Uk)("IOS"),w=(0,e.Uk)("或者使用AppStore搜索"),q=(0,e._)("code",null,"OpenWingy",-1),_=(0,e.Uk)("这个软件。"),y=(0,e._)("h2",{id:"安装",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#安装","aria-hidden":"true"},"#"),(0,e.Uk)(" 安装")],-1),x=(0,e._)("h3",{id:"安装epel和pip",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#安装epel和pip","aria-hidden":"true"},"#"),(0,e.Uk)(" 安装epel和pip")],-1),U=(0,e._)("p",null,"安装epel扩展源，并采用Python包管理工pip安装。",-1),S={href:"https://pip.pypa.io/en/stable/installing/",target:"_blank",rel:"noopener noreferrer"},W=(0,e.Uk)("pip"),j=(0,e.Uk)("是 python 的包管理工具。在本文中将使用 python 版本的 shadowsocks，此版本的 shadowsocks 已发布到 pip 上，因此需要通过 pip 命令来安装。"),O=(0,e.uE)('<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> yum -y <span class="token function">install</span> epel-release\n<span class="token function">sudo</span> yum -y <span class="token function">install</span> python-pip\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="安装shadowsocks" tabindex="-1"><a class="header-anchor" href="#安装shadowsocks" aria-hidden="true">#</a> 安装Shadowsocks</h3><p>在命令行运行下面的命令安装shadowsocks：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pip <span class="token function">install</span> --upgrade pip\npip <span class="token function">install</span> shadowsocks\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><h3 id="普通配置" tabindex="-1"><a class="header-anchor" href="#普通配置" aria-hidden="true">#</a> 普通配置</h3><p>安装完成后，需要创建配置文件<code>/etc/shadowsocks.json</code>，内容如下：</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;server&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0.0.0.0&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;server_port&quot;</span><span class="token operator">:</span> <span class="token number">1111</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;local_address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;local_port&quot;</span><span class="token operator">:</span> <span class="token number">1080</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;password&quot;</span><span class="token operator">:</span> <span class="token string">&quot;mypassword&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;timeout&quot;</span><span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;method&quot;</span><span class="token operator">:</span> <span class="token string">&quot;aes-256-cfb&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;fast_open&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><table><thead><tr><th>字段</th><th>说明</th><th>是否必须</th></tr></thead><tbody><tr><td>server</td><td>服务端监听地址，使用<code>0.0.0.0</code>也可以</td><td>是</td></tr><tr><td>server_port</td><td>服务端端口</td><td>是</td></tr><tr><td>local_address</td><td>本地监听地址,默认即可</td><td>否</td></tr><tr><td>local_port</td><td>本地监听端口，需要跟其他进程不重复</td><td>否</td></tr><tr><td>password</td><td>密码</td><td>是</td></tr><tr><td>timeout</td><td>超时时间（秒）</td><td>否</td></tr><tr><td>method</td><td>加密方法，可选<code>aes-128-cfb</code>, <code>aes-192-cfb</code>, <code>aes-256-cfb</code>, <code>bf-cfb</code>, <code>cast5-cfb</code>, <code>des-cfb</code>, <code>rc4-md5</code>, <code>chacha20</code>, <code>salsa20</code>, <code>rc4</code>, <code>table</code></td><td>是</td></tr><tr><td>fast_open</td><td>是否启用TCP-Fast-Open，true或者false</td><td>否</td></tr></tbody></table><blockquote><p>以上三项信息在配置 shadowsocks 客户端时需要配置一致，具体说明可查看 shadowsocks 的帮助文档。</p></blockquote><h3 id="配置多个用户" tabindex="-1"><a class="header-anchor" href="#配置多个用户" aria-hidden="true">#</a> 配置多个用户</h3><p>除了上面的配置，也可能使用多端口多密码配置，彼此没有干扰，内容如下：</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;server&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0.0.0.0&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;local_address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;local_port&quot;</span><span class="token operator">:</span> <span class="token number">1080</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;port_password&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 每个端口对应一个密码</span>\n    <span class="token property">&quot;1111&quot;</span><span class="token operator">:</span> <span class="token string">&quot;password1&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;1112&quot;</span><span class="token operator">:</span> <span class="token string">&quot;password2&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;1113&quot;</span><span class="token operator">:</span> <span class="token string">&quot;password3&quot;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;timeout&quot;</span><span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;method&quot;</span><span class="token operator">:</span> <span class="token string">&quot;aes-256-cfb&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;fast_open&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="进程管理" tabindex="-1"><a class="header-anchor" href="#进程管理" aria-hidden="true">#</a> 进程管理</h2><ul><li>启动进程</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> ssserver -c /etc/shadowsocks.json -d start\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>关闭进程</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> ssserver -c /etc/shadowsocks.json -d stop\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>重启进程</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> ssserver -c /etc/shadowsocks.json -d restart\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="检查进程" tabindex="-1"><a class="header-anchor" href="#检查进程" aria-hidden="true">#</a> 检查进程</h2><p>分别使用<code>ps</code>和<code>netstat</code>命令查看进程和端口</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> yum -y <span class="token function">install</span> net-tools\n<span class="token function">ps</span> aux <span class="token operator">|</span><span class="token function">grep</span> shadowsocks\n<span class="token function">netstat</span> -tunpl<span class="token operator">|</span><span class="token function">grep</span> <span class="token number">1111</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>',23),C=["src"],E=(0,e._)("h2",{id:"使用supervisord管理进程",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#使用supervisord管理进程","aria-hidden":"true"},"#"),(0,e.Uk)(" 使用Supervisord管理进程")],-1),A=(0,e.Uk)("如果未使用"),B={href:"/os/centos/how-to-use-supervisord-manager-processes.md",target:"_blank",rel:"noopener noreferrer"},F=(0,e.Uk)("Supervisord管理"),P=(0,e.Uk)("后台进程，可以参考文章下面的连接设置开机自启动等。"),D=(0,e.uE)('<h3 id="管理配置" tabindex="-1"><a class="header-anchor" href="#管理配置" aria-hidden="true">#</a> 管理配置</h3><p>针对shadowsocks的Supervisord的配置可以参考下面的配置。</p><div class="language-ini ext-ini line-numbers-mode"><pre class="language-ini"><code><span class="token header"><span class="token punctuation">[</span><span class="token section-name selector">program:shadowsocks</span><span class="token punctuation">]</span></span>\n<span class="token key attr-name">process_name</span> <span class="token punctuation">=</span> <span class="token value attr-value">%(program_name)s_%(process_num)02d</span>\n<span class="token key attr-name">command</span> <span class="token punctuation">=</span> <span class="token value attr-value">ssserver -c /etc/shadowsocks.json</span>\n<span class="token key attr-name">autostart</span> <span class="token punctuation">=</span> <span class="token value attr-value">true</span>\n<span class="token key attr-name">autorestart</span> <span class="token punctuation">=</span> <span class="token value attr-value">true</span>\n<span class="token key attr-name">user</span> <span class="token punctuation">=</span> <span class="token value attr-value">nobody</span>\n<span class="token key attr-name">numprocs</span> <span class="token punctuation">=</span> <span class="token value attr-value">1</span>\n<span class="token key attr-name">redirect_stderr</span> <span class="token punctuation">=</span> <span class="token value attr-value">true</span>\n<span class="token key attr-name">stdout_logfile</span> <span class="token punctuation">=</span> <span class="token value attr-value">/var/log/shdowsocks.out.log</span>\n<span class="token key attr-name">stderr_logfile</span> <span class="token punctuation">=</span> <span class="token value attr-value">/var/log/shdowsocks.err.log</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="重载配置" tabindex="-1"><a class="header-anchor" href="#重载配置" aria-hidden="true">#</a> 重载配置</h3><p>重载配置之前请先保证shadowsocks进程未启动。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> supervisorctl reread <span class="token operator">&amp;&amp;</span> <span class="token function">sudo</span> supervisorctl update\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接" aria-hidden="true">#</a> 参考链接</h2>',7),H={href:"https://morning.work/page/2015-12/install-shadowsocks-on-centos-7.html",target:"_blank",rel:"noopener noreferrer"},N=(0,e.Uk)("在 CentOS 7 下安装配置 shadowsocks"),T={href:"https://segmentfault.com/a/1190000010639190",target:"_blank",rel:"noopener noreferrer"},X=(0,e.Uk)("阿里云centos 7下搭建shadowsocks"),Z={},z=(0,a(3744).Z)(Z,[["render",function(s,n){const a=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.iD)(e.HY,null,[t,(0,e._)("p",null,[(0,e._)("a",o,[p,(0,e.Wm)(a)]),r]),(0,e._)("blockquote",null,[(0,e._)("p",null,[l,(0,e._)("a",c,[u,(0,e.Wm)(a)]),d,(0,e._)("a",i,[k,(0,e.Wm)(a)]),h,(0,e._)("a",b,[m,(0,e.Wm)(a)]),g,(0,e._)("a",v,[f,(0,e.Wm)(a)]),w,q,_])]),y,x,U,(0,e._)("p",null,[(0,e._)("a",S,[W,(0,e.Wm)(a)]),j]),O,(0,e._)("img",{src:s.$withBase("/images/os/centos7/installing-configuration-shadowsocks-under-centos-7/ps-and-netstat-check-shadowsocks-status.png"),alt:""},null,8,C),E,(0,e._)("p",null,[A,(0,e._)("a",B,[F,(0,e.Wm)(a)]),P]),D,(0,e._)("ul",null,[(0,e._)("li",null,[(0,e._)("p",null,[(0,e._)("a",H,[N,(0,e.Wm)(a)])])]),(0,e._)("li",null,[(0,e._)("p",null,[(0,e._)("a",T,[X,(0,e.Wm)(a)])])])])],64)}]])},3744:(s,n)=>{n.Z=(s,n)=>{const a=s.__vccOpts||s;for(const[s,e]of n)a[s]=e;return a}}}]);