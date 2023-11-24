import{_ as o,M as c,p as t,q as r,R as n,t as e,N as a,a1 as d}from"./framework-7e09d608.js";const i={},l=n("h1",{id:"docker-的安装",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#docker-的安装","aria-hidden":"true"},"#"),e(" Docker 的安装")],-1),p=n("h2",{id:"在mac上安装docker",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#在mac上安装docker","aria-hidden":"true"},"#"),e(" 在mac上安装docker")],-1),u={href:"https://docs.docker.com/docker-for-mac/install/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://store.docker.com/editions/community/docker-ce-desktop-mac",target:"_blank",rel:"noopener noreferrer"},m=d(`<p>在下载的时候可能需要使用账号密码进行登陆后才能下载，地址为：https://download.docker.com/mac/stable/Docker.dmg</p><p>下载完毕后点击这个<code>Docker.dmg</code>文件，然后下一步完成安装。</p><p>然后，在命令行中输入<code>docker --version</code>或者<code>docker version</code> 来验证docker是否安装成功。</p><h2 id="在windows系统上安装docker" tabindex="-1"><a class="header-anchor" href="#在windows系统上安装docker" aria-hidden="true">#</a> 在windows系统上安装docker</h2><p>官方安装参考地址：https://docs.docker.com/docker-for-windows</p><h2 id="在centos系统上安装docker" tabindex="-1"><a class="header-anchor" href="#在centos系统上安装docker" aria-hidden="true">#</a> 在centos系统上安装docker</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> yum remove <span class="token function">docker</span> <span class="token punctuation">\\</span>
                  docker-client <span class="token punctuation">\\</span>
                  docker-client-latest <span class="token punctuation">\\</span>
                  docker-common <span class="token punctuation">\\</span>
                  docker-latest <span class="token punctuation">\\</span>
                  docker-latest-logrotate <span class="token punctuation">\\</span>
                  docker-logrotate <span class="token punctuation">\\</span>
                  docker-selinux <span class="token punctuation">\\</span>
                  docker-engine-selinux <span class="token punctuation">\\</span>
                  docker-engine

<span class="token function">sudo</span> yum <span class="token function">install</span> <span class="token parameter variable">-y</span> yum-utils <span class="token punctuation">\\</span>
  device-mapper-persistent-data <span class="token punctuation">\\</span>
  lvm2

<span class="token function">sudo</span> yum-config-manager <span class="token punctuation">\\</span>
    --add-repo <span class="token punctuation">\\</span>
    https://download.docker.com/linux/centos/docker-ce.repo

<span class="token function">sudo</span> yum <span class="token function">install</span> <span class="token parameter variable">-y</span> docker-ce
<span class="token function">sudo</span> systemctl start <span class="token function">docker</span>

<span class="token function">sudo</span> <span class="token function">usermod</span> <span class="token parameter variable">-aG</span> <span class="token function">docker</span> your-user <span class="token comment"># 如果想将Docker用作非root用户，应该考虑将当前用户添加到docker组</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>验证是否安装成功可以执行<code>sudo docker run hello-world</code>命令。</p><p>官方安装参考地址：https://docs.docker.com/install/linux/docker-ce/centos/</p><h1 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接" aria-hidden="true">#</a> 参考链接</h1>`,10),v={href:"https://docs.docker.com/install/",target:"_blank",rel:"noopener noreferrer"};function h(b,f){const s=c("ExternalLinkIcon");return t(),r("div",null,[l,p,n("p",null,[e("可以参考链接"),n("a",u,[e("Install Docker for Mac"),a(s)])]),n("p",null,[e("在上面的链接页面上找到下载相关的链接："),n("a",k,[e("Download from Docker Store"),a(s)])]),m,n("ul",null,[n("li",null,[n("a",v,[e("About Docker CE"),a(s)])])])])}const x=o(i,[["render",h],["__file","how-to-install-docker.html.vue"]]);export{x as default};
