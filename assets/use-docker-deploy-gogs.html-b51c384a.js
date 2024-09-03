import{_ as l,M as c,p as i,q as p,R as n,t as s,N as e,a1 as o}from"./framework-ff09ffed.js";const d={},r=o('<h1 id="使用docker部署私有gogs服务" tabindex="-1"><a class="header-anchor" href="#使用docker部署私有gogs服务" aria-hidden="true">#</a> 使用docker部署私有Gogs服务</h1><h2 id="环境依赖" tabindex="-1"><a class="header-anchor" href="#环境依赖" aria-hidden="true">#</a> 环境依赖</h2><ul><li><p>docker</p></li><li><p>docker-compose</p></li><li><p>nginx</p></li><li><p>域名<code>gogs.domain.com</code></p></li></ul><p>服务器环境使用<code>CentOS Linux release 7.4.1708 (Core)</code>。</p><p>安装之前请准备一个<code>gogs.domain.com</code>域名，并将其指向服务器IP地址。</p><blockquote><p>不需要在本地提前安装好 <code>MySQL</code>，这里通过 <code>Docker</code> 安装<code>gogs-server</code>和<code>MySQL</code>。</p></blockquote><h2 id="安装-docker-和-docker-compsoe" tabindex="-1"><a class="header-anchor" href="#安装-docker-和-docker-compsoe" aria-hidden="true">#</a> 安装 docker 和 docker-compsoe</h2><h3 id="安装docker" tabindex="-1"><a class="header-anchor" href="#安装docker" aria-hidden="true">#</a> 安装docker</h3><p>Docker 软件包和依赖包已经包含在默认的 CentOS-Extras 软件源里，安装命令如下</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token parameter variable">-y</span> <span class="token function">install</span> <span class="token function">docker</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="安装docker-composer" tabindex="-1"><a class="header-anchor" href="#安装docker-composer" aria-hidden="true">#</a> 安装docker-composer</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">curl</span> <span class="token parameter variable">-L</span> https://github.com/docker/compose/releases/download/1.19.0/docker-compose-<span class="token variable"><span class="token variable">`</span><span class="token function">uname</span> <span class="token parameter variable">-s</span><span class="token variable">`</span></span>-<span class="token variable"><span class="token variable">`</span><span class="token function">uname</span> <span class="token parameter variable">-m</span><span class="token variable">`</span></span> <span class="token parameter variable">-o</span> /usr/local/bin/docker-compose\n\n<span class="token function">sudo</span> <span class="token function">chmod</span> +x /usr/local/bin/docker-compose\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',12),u={href:"https://docs.docker.com/compose/install/#install-compose",target:"_blank",rel:"noopener noreferrer"},k=o(`<h3 id="启动-docker-后台服务" tabindex="-1"><a class="header-anchor" href="#启动-docker-后台服务" aria-hidden="true">#</a> 启动 Docker 后台服务</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl start <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="测试安装效果" tabindex="-1"><a class="header-anchor" href="#测试安装效果" aria-hidden="true">#</a> 测试安装效果</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token parameter variable">--version</span>
<span class="token function">docker-compose</span> <span class="token parameter variable">--version</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置docker-compose" tabindex="-1"><a class="header-anchor" href="#配置docker-compose" aria-hidden="true">#</a> 配置docker-compose</h2><p>直接上<code>docker-compose.yaml</code>文件内容：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;2&#39;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>

  <span class="token key atrule">mysql-gogs</span><span class="token punctuation">:</span>
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> mysql<span class="token punctuation">-</span>gogs
    <span class="token key atrule">image</span><span class="token punctuation">:</span> mysql<span class="token punctuation">:</span>5.7.13
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;./mysql-data:/var/lib/mysql&quot;</span>
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token key atrule">MYSQL_ROOT_PASSWORD</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span>MYSQL_ROOT_PASSWORD<span class="token punctuation">}</span>
      <span class="token key atrule">MYSQL_DATABASE</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span>MYSQL_DATABASE<span class="token punctuation">}</span>
      <span class="token key atrule">MYSQL_USER</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span>MYSQL_USER<span class="token punctuation">}</span>
      <span class="token key atrule">MYSQL_PASSWORD</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span>MYSQL_PASSWORD<span class="token punctuation">}</span>
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> gogs
  <span class="token key atrule">gogs</span><span class="token punctuation">:</span>
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> gogs
    <span class="token key atrule">image</span><span class="token punctuation">:</span> gogs/gogs<span class="token punctuation">:</span>latest
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> mysql<span class="token punctuation">-</span>gogs
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;\${SSH_PORT}:22&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;\${GOGS_PORT}:3000&quot;</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ./gogs<span class="token punctuation">-</span>data<span class="token punctuation">:</span>/data
    <span class="token key atrule">links</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> mysql<span class="token punctuation">-</span>gogs
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;RUN_CROUD=true&quot;</span>
      <span class="token punctuation">-</span> SSH_PORT=$<span class="token punctuation">{</span>SSH_PORT<span class="token punctuation">}</span>
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> gogs

<span class="token key atrule">networks</span><span class="token punctuation">:</span>
  <span class="token key atrule">gogs</span><span class="token punctuation">:</span>
    <span class="token key atrule">driver</span><span class="token punctuation">:</span> bridge

<span class="token key atrule">volumes</span><span class="token punctuation">:</span>
  <span class="token key atrule">gogs-data</span><span class="token punctuation">:</span>
    <span class="token key atrule">driver</span><span class="token punctuation">:</span> local
  <span class="token key atrule">mysql-data</span><span class="token punctuation">:</span>
    <span class="token key atrule">driver</span><span class="token punctuation">:</span> local
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中上面使用到的环境变量需要放在文件名在<code>.env</code>的文件中，并保证与<code>docker-compose.yaml</code>文件在同一目录下，大致内容如下：</p><div class="language-dotenv line-numbers-mode" data-ext="dotenv"><pre class="language-dotenv"><code>MYSQL_ROOT_PASSWORD=mysql_root_password
MYSQL_DATABASE=gogs
MYSQL_USER=gogs
MYSQL_PASSWORD=gogs_password

GOGS_PORT=3000
SSH_PORT=10022
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行命令运行docker。</p>`,10),v={href:"https://cr.console.aliyun.com/?spm=5176.100239.blogcont57268.20.ik4KA5#/accelerator",target:"_blank",rel:"noopener noreferrer"},m=n("div",{class:"language-text line-numbers-mode","data-ext":"text"},[n("pre",{class:"language-text"},[n("code",null,`docker-compose up -d
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),b=n("h2",{id:"http运行gogs",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#http运行gogs","aria-hidden":"true"},"#"),s(" HTTP运行Gogs")],-1),g=n("p",null,"第一次在浏览器运行Gogs会需要填写一些初始化数据库配置等参数。如下图：",-1),h=["src"],_=o(`<p><code>nginx</code>配置文件内容</p><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token comment">#server {</span>
<span class="token comment">#    listen      80; ## listen for ipv4</span>
<span class="token comment">#    server_name   gogs.domain.com;</span>
<span class="token comment">#    return      301 https://$server_name$request_uri;</span>
<span class="token comment">#}</span>
<span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">charset</span> utf-8</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">client_max_body_size</span> <span class="token number">300M</span></span><span class="token punctuation">;</span>

    <span class="token directive"><span class="token keyword">listen</span> <span class="token number">80</span></span><span class="token punctuation">;</span> <span class="token comment"># 或者 443，如果你使用 HTTPS 的话</span>

    <span class="token comment"># SSL support</span>
    <span class="token comment"># ssl on;</span>
    <span class="token comment"># ssl_certificate      ./ssl/fullchain.cer;</span>
    <span class="token comment"># ssl_certificate_key  ./ssl/domain.com.key;</span>

    <span class="token directive"><span class="token keyword">server_name</span> gogs.domain.com</span><span class="token punctuation">;</span>

    <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
         <span class="token comment"># 如果你希望通过子路径访问，此处修改为子路径，注意以 / 开头并以 / 结束</span>
        <span class="token directive"><span class="token keyword">proxy_pass</span> http://127.0.0.1:3000/</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接" aria-hidden="true">#</a> 参考链接</h2>`,3),y={href:"https://github.com/Unknwon/wuwen.org/issues/12",target:"_blank",rel:"noopener noreferrer"};function S(t,f){const a=c("ExternalLinkIcon");return i(),p("div",null,[r,n("blockquote",null,[n("p",null,[s("更多的安装请参考"),n("a",u,[s("Install Compose"),e(a)])])]),k,n("blockquote",null,[n("p",null,[s("执行命令前安装"),n("a",v,[s("阿里云加速器"),e(a)]),s("来加速安装过程。")]),m]),b,g,n("img",{src:t.$withBase("/images/others/use-docker-deploy-gogs/gogs-install.png"),alt:""},null,8,h),_,n("ul",null,[n("li",null,[n("a",y,[s("使用 HTTPS 部署 Gogs"),e(a)])])])])}const q=l(d,[["render",S],["__file","use-docker-deploy-gogs.html.vue"]]);export{q as default};
