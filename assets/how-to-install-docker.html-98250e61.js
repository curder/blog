import{_ as r,M as t,p as c,q as d,R as e,t as s,N as o,a1 as i}from"./framework-64ffeeb4.js";const l={},p={href:"https://docs.docker.com/docker-for-mac/install/",target:"_blank",rel:"noopener noreferrer"},u={href:"https://store.docker.com/editions/community/docker-ce-desktop-mac",target:"_blank",rel:"noopener noreferrer"},k={href:"https://docs.docker.com/install/",target:"_blank",rel:"noopener noreferrer"};function m(v,n){const a=t("ExternalLinkIcon");return c(),d("div",null,[n[5]||(n[5]=e("h1",{id:"docker-的安装",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#docker-的安装","aria-hidden":"true"},"#"),s(" Docker 的安装")],-1)),n[6]||(n[6]=e("h2",{id:"在mac上安装docker",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#在mac上安装docker","aria-hidden":"true"},"#"),s(" 在mac上安装docker")],-1)),e("p",null,[n[1]||(n[1]=s("可以参考链接",-1)),e("a",p,[n[0]||(n[0]=s("Install Docker for Mac",-1)),o(a)])]),e("p",null,[n[3]||(n[3]=s("在上面的链接页面上找到下载相关的链接：",-1)),e("a",u,[n[2]||(n[2]=s("Download from Docker Store",-1)),o(a)])]),n[7]||(n[7]=i(`<p>在下载的时候可能需要使用账号密码进行登陆后才能下载，地址为：https://download.docker.com/mac/stable/Docker.dmg</p><p>下载完毕后点击这个<code>Docker.dmg</code>文件，然后下一步完成安装。</p><p>然后，在命令行中输入<code>docker --version</code>或者<code>docker version</code> 来验证docker是否安装成功。</p><h2 id="在windows系统上安装docker" tabindex="-1"><a class="header-anchor" href="#在windows系统上安装docker" aria-hidden="true">#</a> 在windows系统上安装docker</h2><p>官方安装参考地址：https://docs.docker.com/docker-for-windows</p><h2 id="在centos系统上安装docker" tabindex="-1"><a class="header-anchor" href="#在centos系统上安装docker" aria-hidden="true">#</a> 在centos系统上安装docker</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> yum remove <span class="token function">docker</span> <span class="token punctuation">\\</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>验证是否安装成功可以执行<code>sudo docker run hello-world</code>命令。</p><p>官方安装参考地址：https://docs.docker.com/install/linux/docker-ce/centos/</p><h1 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接" aria-hidden="true">#</a> 参考链接</h1>`,10)),e("ul",null,[e("li",null,[e("a",k,[n[4]||(n[4]=s("About Docker CE",-1)),o(a)])])])])}const f=r(l,[["render",m],["__file","how-to-install-docker.html.vue"]]);export{f as default};
