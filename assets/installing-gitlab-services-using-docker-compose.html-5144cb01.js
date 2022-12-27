import{_ as t,M as i,p as l,q as c,R as e,t as a,N as n,a1 as r}from"./framework-96b046e1.js";const d={},p=e("h1",{id:"使用docker-compose方式安装gitlab服务",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#使用docker-compose方式安装gitlab服务","aria-hidden":"true"},"#"),a(" 使用Docker Compose方式安装Gitlab服务")],-1),b={href:"https://about.gitlab.com/",target:"_blank",rel:"noopener noreferrer"},h=e("p",null,[a("使用Docker的方式来安装服务端软件是挺方便的。但是GitLab需要三个服务："),e("code",null,"Gitlab"),a("，"),e("code",null,"PostgreSQL"),a("数据库和"),e("code",null,"Redis"),a("缓存。")],-1),u=e("p",null,"如果用命令行直接运行容器，需要三条命令，还要指定很多的配置项。",-1),m={href:"https://docs.docker.com/compose/",target:"_blank",rel:"noopener noreferrer"},g={href:"https://yeasy.gitbooks.io/docker_practice/content/install/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://yeasy.gitbooks.io/docker_practice/content/compose/install.html",target:"_blank",rel:"noopener noreferrer"},_=e("h2",{id:"镜像",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#镜像","aria-hidden":"true"},"#"),a(" 镜像")],-1),v=e("ul",null,[e("li",null,"源代码仓库： https://github.com/sameersbn/docker-gitlab")],-1),f={href:"https://registry.hub.docker.com/u/sameersbn/redis/",target:"_blank",rel:"noopener noreferrer"},x={href:"https://hub.docker.com/r/sameersbn/postgresql/",target:"_blank",rel:"noopener noreferrer"},y={href:"https://registry.hub.docker.com/u/sameersbn/gitlab/",target:"_blank",rel:"noopener noreferrer"},G=e("h2",{id:"docker-compose-yam-file",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#docker-compose-yam-file","aria-hidden":"true"},"#"),a(" Docker Compose Yam File")],-1),C=e("p",null,"上面的三个镜像, 如果直接用Docker命令来运行的话，会需要三条命令。并且还要指定很多的参数来指定一些选项的值，比如数据库的用户名或密码。Docker提供了更方便的解决方案：Docker Compose，用一条命令就可以跑起多个容器，最适合这种运行多个容器共同组成一个服务的情景。",-1),L=e("code",null,"docker-compose.yml",-1),w={href:"https://github.com/sameersbn/docker-gitlab",target:"_blank",rel:"noopener noreferrer"},D=r(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 执行下面的命令将文件下载</span>
<span class="token function">wget</span> https://raw.githubusercontent.com/sameersbn/docker-gitlab/master/docker-compose.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>下载完成之后，在文件中，我们可以看到 GitLab 的很多配置都已经参数化了，包数据卷的配置、服务的端口、备份时机和邮件配置等。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 或者执行下面的命令将已经改好的文件下载</span>
<span class="token function">wget</span> <span class="token parameter variable">-O</span> docker-compose.yml https://gist.githubusercontent.com/curder/0b8a10a827a4f6236bccfddb0d8d5c46/raw/787cb4160caf73993a1d76b8d159c9024a5e3002/gitlab-docker-compose.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>在MacOS上，使用<code>/Users/Shared</code>而不是<code>/srv</code>，所以我将其下载下来并将文件内容进行了适当的修改，主要是针对<code>volumn</code>相关的映射路径存储至如下路径。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/Users/Shared/gitlab/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,5),S={href:"https://gist.github.com/curder/0b8a10a827a4f6236bccfddb0d8d5c46",target:"_blank",rel:"noopener noreferrer"},U=r(`<p>主要修改如下文件内容</p><div class="language-ymal line-numbers-mode" data-ext="ymal"><pre class="language-ymal"><code>- /Users/Shared/gitlab/redis:/var/lib/redis:Z
- /Users/Shared/gitlab/postgresql:/var/lib/postgresql:Z
- /Users/Shared/gitlab/gitlab:/home/git/data:Z

- TZ=Asia/Shanghai
- GITLAB_TIMEZONE=Beijing
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="启动gitlab" tabindex="-1"><a class="header-anchor" href="#启动gitlab" aria-hidden="true">#</a> 启动GitLab</h2><p>修改完 <code>docker-compose.yml</code>，接下来可以利用如下命令来启动 GitLab 了。</p>`,4),q={href:"https://yeasy.gitbooks.io/docker_practice/install/mirror.html",target:"_blank",rel:"noopener noreferrer"},B=r(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker-compose</span> up <span class="token parameter variable">-d</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面的这行命令，首先会下载相关的镜像，然后依次创建并启动容器。如下图所示：</p>`,2),I=["src"],E=r(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>➜  gitlab-docker <span class="token function">docker-compose</span> <span class="token function">ps</span>
           Name                         Command               State                           Ports
---------------------------------------------------------------------------------------------------------------------------
gitlab-docker_gitlab_1       /sbin/entrypoint.sh app:start    Up      <span class="token number">0.0</span>.0.0:10022-<span class="token operator">&gt;</span><span class="token number">22</span>/tcp, <span class="token number">443</span>/tcp, <span class="token number">0.0</span>.0.0:10080-<span class="token operator">&gt;</span><span class="token number">80</span>/tcp
gitlab-docker_postgresql_1   /sbin/entrypoint.sh              Up      <span class="token number">5432</span>/tcp
gitlab-docker_redis_1        /sbin/entrypoint.sh <span class="token parameter variable">--logl</span> <span class="token punctuation">..</span>.   Up      <span class="token number">6379</span>/tcp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当启动完成之后，我们就可以在浏览器中输入<code>http://localhost:10080</code>，如果暂时能够访问却不能正确打开，那么说明 GitLab 创建还未启动成功。如下图所示：</p>`,2),N=["src"],A=e("p",null,[a("第一次成功进入gitlab需要输入root的初始密码，"),e("strong",null,"密码需要保持在8位数以上"),a("。")],-1),M=["src"],R=r(`<h2 id="相关命令" tabindex="-1"><a class="header-anchor" href="#相关命令" aria-hidden="true">#</a> 相关命令</h2><h3 id="启动gitlab-1" tabindex="-1"><a class="header-anchor" href="#启动gitlab-1" aria-hidden="true">#</a> 启动GitLab</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker-compose</span> up
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="停止-gitlab" tabindex="-1"><a class="header-anchor" href="#停止-gitlab" aria-hidden="true">#</a> 停止 GitLab</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker-compose</span> stop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="备份-gitlab" tabindex="-1"><a class="header-anchor" href="#备份-gitlab" aria-hidden="true">#</a> 备份 GitLab</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker-compose</span> run gitlab app:rake gitlab:backup:create
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="从备份中还原" tabindex="-1"><a class="header-anchor" href="#从备份中还原" aria-hidden="true">#</a> 从备份中还原</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker-compose</span> run <span class="token parameter variable">--rm</span> gitlab app:rake gitlab:backup:restore <span class="token assign-left variable">BACKUP</span><span class="token operator">=</span>1529921023_2018_06_25_11.0.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,9),Z=e("code",null,"1529921023_2018_06_25_11.0.0",-1),P=e("code",null,"backups",-1),T={href:"https://github.com/sameersbn/docker-gitlab/blob/master/README.md#restoring-backups",target:"_blank",rel:"noopener noreferrer"},V=e("h2",{id:"参考链接",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#参考链接","aria-hidden":"true"},"#"),a(" 参考链接")],-1),O={href:"http://wuyijun.cn/yong-dockerfang-shi-an-zhuang-gitlabfu-wu/",target:"_blank",rel:"noopener noreferrer"},$={href:"http://beyondvincent.com/2016/09/19/2016-09-17-use-gitlab-with-docker/",target:"_blank",rel:"noopener noreferrer"};function j(o,K){const s=i("ExternalLinkIcon");return l(),c("div",null,[p,e("p",null,[e("a",b,[a("GitLab"),n(s)]),a("是一个开源的Git服务软件，在开发中使用广泛。它有很丰富的功能（Git 版本管理、文件浏览、WIKI、Code Review、Issue 管理、Code Snippets、Web Hooks、CI、CD等）。")]),h,u,e("p",null,[a("这里借助"),e("a",m,[a("docker-compose"),n(s)]),a("工具来一次运行多个容器。前期配置好相关的容器编排参数，只需要简单的命令行就可以完成GitLab服务的安装和启动。")]),e("blockquote",null,[e("p",null,[a("根据官方提示，服务器的配置之少是：2Core-CPU 4GB-RAM，并安装了"),e("a",g,[a("docker"),n(s)]),a("和"),e("a",k,[a("docker-compose"),n(s)])])]),_,v,e("blockquote",null,[e("p",null,[a("包含三个镜像："),e("a",f,[a("redis"),n(s)]),a(", "),e("a",x,[a("postgresql"),n(s)]),a(", "),e("a",y,[a("gitlab"),n(s)])])]),G,C,e("p",null,[a("Docker Compose接受一个"),L,a(" 文件作为配置输入。yml文件指定了多个容器怎么启动，彼此之间怎么连接。下面是"),e("a",w,[a("sameersbn/gitlab"),n(s)]),a("这个镜像所提供的Yml文件(https://raw.githubusercontent.com/sameersbn/docker-gitlab/master/docker-compose.yml) .")]),D,e("p",null,[a("修改后的完整代码可以"),e("a",S,[a("参考这里"),n(s)]),a("。")]),U,e("blockquote",null,[e("p",null,[a("如果当前网速拉取国外站点镜像缓慢，建议启动之前可以"),e("a",q,[a("参考这里"),n(s)]),a("修改docker镜像加速器。")])]),B,e("img",{src:o.$withBase("/images/tools/docker/installing-gitlab-services-using-docker-compose/docker-compose-gitlab-image.png"),alt:""},null,8,I),E,e("img",{src:o.$withBase("/images/tools/docker/installing-gitlab-services-using-docker-compose/docker-compose-gitlab-image-502-error.png"),alt:""},null,8,N),A,e("img",{src:o.$withBase("/images/tools/docker/installing-gitlab-services-using-docker-compose/docker-compose-gitlab-image-need-reset-password.png"),alt:""},null,8,M),R,e("blockquote",null,[e("p",null,[a("在上面的命令中，"),Z,a(" 为备份文件的时间戳前缀，该文件位于 gitlab 的 "),P,a(" 目录中。 更多备份和还原相关操作"),e("a",T,[a("参见文档"),n(s)]),a("。")])]),V,e("ul",null,[e("li",null,[e("p",null,[e("a",O,[a("用Docker Compose方式安装Gitlab服务"),n(s)])])]),e("li",null,[e("p",null,[e("a",$,[a("在 Docker 中使用 GitLab"),n(s)])])])])])}const Y=t(d,[["render",j],["__file","installing-gitlab-services-using-docker-compose.html.vue"]]);export{Y as default};
