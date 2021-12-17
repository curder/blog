(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3784],{2874:(e,n,s)=>{"use strict";s.r(n),s.d(n,{data:()=>a});const a={key:"v-47b8129a",path:"/others/configure-lets-encrypt-to-implement-site-ssl.html",title:"在CentOS上配置 Let's Encrypt 实现站点 SSL",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"前提条件",slug:"前提条件",children:[]},{level:2,title:"安装 Nginx",slug:"安装-nginx",children:[]},{level:2,title:"安装 Certbot",slug:"安装-certbot",children:[]},{level:2,title:"配置 Nginx",slug:"配置-nginx",children:[]},{level:2,title:"签发 SSL 证书",slug:"签发-ssl-证书",children:[]}],filePathRelative:"others/configure-lets-encrypt-to-implement-site-ssl.md",git:{updatedTime:1639727659e3,contributors:[]}}},5095:(e,n,s)=>{"use strict";s.r(n),s.d(n,{default:()=>E});var a=s(6252);const r=(0,a.Wm)("h1",{id:"在centos上配置-let-s-encrypt-实现站点-ssl",tabindex:"-1"},[(0,a.Wm)("a",{class:"header-anchor",href:"#在centos上配置-let-s-encrypt-实现站点-ssl","aria-hidden":"true"},"#"),(0,a.Uk)(" 在CentOS上配置 Let's Encrypt 实现站点 SSL")],-1),t=(0,a.Uk)("今天早些时候 Let's Encrypt 的通配证书上线了，从此所有子域名开启"),l={href:"https://zh.wikipedia.org/wiki/%E8%B6%85%E6%96%87%E6%9C%AC%E4%BC%A0%E8%BE%93%E5%AE%89%E5%85%A8%E5%8D%8F%E8%AE%AE",target:"_blank",rel:"noopener noreferrer"},i=(0,a.Uk)("HTTPS"),c=(0,a.Uk)("就简单了。"),o=(0,a.Uk)("更多信息可以查看这里 "),p={href:"https://community.letsencrypt.org/t/acme-v2-and-wildcard-certificate-support-is-live/55579",target:"_blank",rel:"noopener noreferrer"},u=(0,a.Uk)("ACME v2 and Wildcard Certificate Support is Live"),d=(0,a.Wm)("p",null,"那么如何在自己的网站上使用 Let's Encrypt 实现 SSL。",-1),b=(0,a.Uk)("其实安装流程可以通过"),m={href:"https://certbot.eff.org",target:"_blank",rel:"noopener noreferrer"},g=(0,a.Uk)("参考这里"),h=(0,a.Uk)("获取，这里只是做一个总结。"),x=(0,a.uE)('<p>下面的总结全部基于CentOS系统，Web服务器选择Nginx。</p><h2 id="前提条件" tabindex="-1"><a class="header-anchor" href="#前提条件" aria-hidden="true">#</a> 前提条件</h2><ul><li><p>自己拥有一个域名</p></li><li><p><code>*Unix</code>的服务器</p></li></ul><blockquote><p>注意如果你的域名没备案，在购买主机的时候，推荐购买境外的主机。并将域名自己解析到云主机IP。</p></blockquote><h2 id="安装-nginx" tabindex="-1"><a class="header-anchor" href="#安装-nginx" aria-hidden="true">#</a> 安装 Nginx</h2><p>如果机器已经安装过 Nginx 服务的话，建议跳过这步。</p>',6),k=(0,a.Uk)("EPEL (Extra Packages for Enterprise Linux，企业版Linux的额外软件包) 是Fedora小组维护的一个软件仓库项目，为RHEL/CentOS提供他们默认不提供的软件包。这个源兼容RHEL及像CentOS和Scientific Linux这样的衍生版本。 更多详细介绍查看这里："),v={href:"https://fedoraproject.org/wiki/EPEL",target:"_blank",rel:"noopener noreferrer"},f=(0,a.Uk)("EPEl"),y=(0,a.uE)('<p>我们需要Nginx安装的EPEL仓库，因为官方CentOS仓库中不存在Nginx软件包。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> yum -y <span class="token function">install</span> epel-release\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>运行完成上面的yum命令安装EPEL仓库。</p><blockquote><p>通过命令<code>yum repolist</code>检查升级的结果。 在列表中应该能看到这行数据<code>epel/x86_64 Extra Packages for Enterprise Linux 7 - x86_64 12400</code>，则表示安装<code>epel</code>成功。</p></blockquote><p>接下来运行下面的命令安装nginx到系统默认位置。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> yum -y <span class="token function">install</span> nginx\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>默认安装的nginx，配置文件在<code>/etc/nginx/conf.d</code>下，日志文件在<code>/var/log/nginx/</code>。</p><h2 id="安装-certbot" tabindex="-1"><a class="header-anchor" href="#安装-certbot" aria-hidden="true">#</a> 安装 Certbot</h2><p>执行命令安装 Certbot 的 Nginx 包。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> yum <span class="token function">install</span> -y certbot-nginx\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="配置-nginx" tabindex="-1"><a class="header-anchor" href="#配置-nginx" aria-hidden="true">#</a> 配置 Nginx</h2><p>安装完 Nginx 和 Certbot 之后，需要简单配置 Nginx 以便于 Let&#39;s Encrypt 能起作用：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">vi</span> /etc/nginx/conf.d/examlpe.com\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>使用 vi 编辑器打开 <code>/etc/nginx/conf.d/examlpe.com</code>，可以直接删除里面的所有内容，然后再添加下面的配置：</p><div class="language-nginx ext-nginx line-numbers-mode"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>\n    <span class="token directive"><span class="token keyword">listen</span> <span class="token number">80</span></span><span class="token punctuation">;</span>\n    <span class="token directive"><span class="token keyword">listen</span> [::]:80</span><span class="token punctuation">;</span>\n    <span class="token directive"><span class="token keyword">server_name</span> examlpe.com www.examlpe.com</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><blockquote><p>注意上面的的 <code>example.com</code> 换成您自己的域名。</p></blockquote><p>保存退出之后，执行以下命令来检测 Nginx 的配置文件是否有错</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> nginx -t\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>如果出现类似 <code>syntax ok</code> 这样的语句，就说明 Nginx 的配置文件没有问题。之后就是重新加载 Nginx 的配置文件了</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">service</span> nginx restart\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="签发-ssl-证书" tabindex="-1"><a class="header-anchor" href="#签发-ssl-证书" aria-hidden="true">#</a> 签发 SSL 证书</h2><p>前面的两大步配置完成，就可以使用 Let&#39;s Encrypt 签发 SSL 证书了</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> certbot --nginx -d example.com -d www.example.com\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote><p>注意上面的的 <code>example.com</code> 换成您自己的域名。</p></blockquote><p>如果你第一次运行 certbot 命令的话，你需要在弹出的窗口输入你的邮箱地址还有需要接受 Let&#39;s Encrypt 的协议。</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Please choose whether or not to redirect HTTP traffic to HTTPS, removing HTTP access.\n-------------------------------------------------------------------------------\n1: No redirect - Make no further changes to the webserver configuration.\n2: Redirect - Make all requests redirect to secure HTTPS access. Choose this for\nnew sites, or if you&#39;re confident your site works on HTTPS. You can undo this\nchange by editing your web server&#39;s configuration.\n-------------------------------------------------------------------------------\nSelect the appropriate number [1-2] then [enter] (press &#39;c&#39; to cancel):\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>如果没有特殊情况建议按下2，无论如何都重定向到HTTPS。</p><p>选择完毕之后，等待 SSL 生成完毕，就会有类似这样的输出：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>IMPORTANT NOTES:\n - Congratulations! Your certificate and chain have been saved at\n   /etc/letsencrypt/live/your-domain.com/fullchain.pem. Your cert will\n   expire on 2011-12-29. To obtain a new or tweaked version of this\n   certificate in the future, simply run certbot again with the\n   &quot;certonly&quot; option. To non-interactively renew *all* of your\n   certificates, run &quot;certbot renew&quot;\n - Your account credentials have been saved in your Certbot\n   configuration directory at /etc/letsencrypt. You should make a\n   secure backup of this folder now. This configuration directory will\n   also contain certificates and private keys obtained by Certbot so\n   making regular backups of this folder is ideal.\n - If you like Certbot, please consider supporting our work by:\n\n   Donating to ISRG / Let&#39;s Encrypt:   https://letsencrypt.org/donate\n   Donating to EFF:                    https://eff.org/donate-le   \n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>然后在上面的文字中，这个 <code>/etc/letsencrypt/live/example.com/fullchain.pem</code> 路径很重要，就是上面命令生成的 SSL 证书路径。</p><p>其实到这里，访问 example.com 应该就可以看到 https 的效果了。</p>',31),E={render:function(e,n){const s=(0,a.up)("OutboundLink");return(0,a.wg)(),(0,a.j4)(a.HY,null,[r,(0,a.Wm)("p",null,[t,(0,a.Wm)("a",l,[i,(0,a.Wm)(s)]),c]),(0,a.Wm)("p",null,[o,(0,a.Wm)("a",p,[u,(0,a.Wm)(s)])]),d,(0,a.Wm)("p",null,[b,(0,a.Wm)("a",m,[g,(0,a.Wm)(s)]),h]),x,(0,a.Wm)("p",null,[k,(0,a.Wm)("a",v,[f,(0,a.Wm)(s)])]),y],64)}}}}]);