import{_ as i,r as t,o as l,c as p,b as n,a as e,F as d,e as o,d as s}from"./app.0d2765f0.js";const r={},u=o('<h1 id="\u4F7F\u7528docker\u90E8\u7F72\u79C1\u6709gogs\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528docker\u90E8\u7F72\u79C1\u6709gogs\u670D\u52A1" aria-hidden="true">#</a> \u4F7F\u7528docker\u90E8\u7F72\u79C1\u6709Gogs\u670D\u52A1</h1><h2 id="\u73AF\u5883\u4F9D\u8D56" tabindex="-1"><a class="header-anchor" href="#\u73AF\u5883\u4F9D\u8D56" aria-hidden="true">#</a> \u73AF\u5883\u4F9D\u8D56</h2><ul><li><p>docker</p></li><li><p>docker-compose</p></li><li><p>nginx</p></li><li><p>\u57DF\u540D<code>gogs.domain.com</code></p></li></ul><p>\u670D\u52A1\u5668\u73AF\u5883\u4F7F\u7528<code>CentOS Linux release 7.4.1708 (Core)</code>\u3002</p><p>\u5B89\u88C5\u4E4B\u524D\u8BF7\u51C6\u5907\u4E00\u4E2A<code>gogs.domain.com</code>\u57DF\u540D\uFF0C\u5E76\u5C06\u5176\u6307\u5411\u670D\u52A1\u5668IP\u5730\u5740\u3002</p><blockquote><p>\u4E0D\u9700\u8981\u5728\u672C\u5730\u63D0\u524D\u5B89\u88C5\u597D <code>MySQL</code>\uFF0C\u8FD9\u91CC\u901A\u8FC7 <code>Docker</code> \u5B89\u88C5<code>gogs-server</code>\u548C<code>MySQL</code>\u3002</p></blockquote><h2 id="\u5B89\u88C5-docker-\u548C-docker-compsoe" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5-docker-\u548C-docker-compsoe" aria-hidden="true">#</a> \u5B89\u88C5 docker \u548C docker-compsoe</h2><h3 id="\u5B89\u88C5docker" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5docker" aria-hidden="true">#</a> \u5B89\u88C5docker</h3><p>Docker \u8F6F\u4EF6\u5305\u548C\u4F9D\u8D56\u5305\u5DF2\u7ECF\u5305\u542B\u5728\u9ED8\u8BA4\u7684 CentOS-Extras \u8F6F\u4EF6\u6E90\u91CC\uFF0C\u5B89\u88C5\u547D\u4EE4\u5982\u4E0B</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum -y <span class="token function">install</span> <span class="token function">docker</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u5B89\u88C5docker-composer" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5docker-composer" aria-hidden="true">#</a> \u5B89\u88C5docker-composer</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">curl</span> -L https://github.com/docker/compose/releases/download/1.19.0/docker-compose-<span class="token variable"><span class="token variable">`</span><span class="token function">uname</span> -s<span class="token variable">`</span></span>-<span class="token variable"><span class="token variable">`</span><span class="token function">uname</span> -m<span class="token variable">`</span></span> -o /usr/local/bin/docker-compose\n\n<span class="token function">sudo</span> <span class="token function">chmod</span> +x /usr/local/bin/docker-compose\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',12),k=s("\u66F4\u591A\u7684\u5B89\u88C5\u8BF7\u53C2\u8003"),v={href:"https://docs.docker.com/compose/install/#install-compose",target:"_blank",rel:"noopener noreferrer"},m=s("Install Compose"),b=o(`<h3 id="\u542F\u52A8-docker-\u540E\u53F0\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#\u542F\u52A8-docker-\u540E\u53F0\u670D\u52A1" aria-hidden="true">#</a> \u542F\u52A8 Docker \u540E\u53F0\u670D\u52A1</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>systemctl start <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u6D4B\u8BD5\u5B89\u88C5\u6548\u679C" tabindex="-1"><a class="header-anchor" href="#\u6D4B\u8BD5\u5B89\u88C5\u6548\u679C" aria-hidden="true">#</a> \u6D4B\u8BD5\u5B89\u88C5\u6548\u679C</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> --version
<span class="token function">docker-compose</span> --version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u914D\u7F6Edocker-compose" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6Edocker-compose" aria-hidden="true">#</a> \u914D\u7F6Edocker-compose</h2><p>\u76F4\u63A5\u4E0A<code>docker-compose.yaml</code>\u6587\u4EF6\u5185\u5BB9\uFF1A</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;2&#39;</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5176\u4E2D\u4E0A\u9762\u4F7F\u7528\u5230\u7684\u73AF\u5883\u53D8\u91CF\u9700\u8981\u653E\u5728\u6587\u4EF6\u540D\u5728<code>.env</code>\u7684\u6587\u4EF6\u4E2D\uFF0C\u5E76\u4FDD\u8BC1\u4E0E<code>docker-compose.yaml</code>\u6587\u4EF6\u5728\u540C\u4E00\u76EE\u5F55\u4E0B\uFF0C\u5927\u81F4\u5185\u5BB9\u5982\u4E0B\uFF1A</p><div class="language-dotenv ext-dotenv line-numbers-mode"><pre class="language-dotenv"><code>MYSQL_ROOT_PASSWORD=mysql_root_password
MYSQL_DATABASE=gogs
MYSQL_USER=gogs
MYSQL_PASSWORD=gogs_password

GOGS_PORT=3000
SSH_PORT=10022
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6267\u884C\u547D\u4EE4\u8FD0\u884Cdocker\u3002</p>`,10),g=s("\u6267\u884C\u547D\u4EE4\u524D\u5B89\u88C5"),h={href:"https://cr.console.aliyun.com/?spm=5176.100239.blogcont57268.20.ik4KA5#/accelerator",target:"_blank",rel:"noopener noreferrer"},_=s("\u963F\u91CC\u4E91\u52A0\u901F\u5668"),y=s("\u6765\u52A0\u901F\u5B89\u88C5\u8FC7\u7A0B\u3002"),S=n("div",{class:"language-text ext-text line-numbers-mode"},[n("pre",{class:"language-text"},[n("code",null,`docker-compose up -d
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),f=n("h2",{id:"http\u8FD0\u884Cgogs",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#http\u8FD0\u884Cgogs","aria-hidden":"true"},"#"),s(" HTTP\u8FD0\u884CGogs")],-1),x=n("p",null,"\u7B2C\u4E00\u6B21\u5728\u6D4F\u89C8\u5668\u8FD0\u884CGogs\u4F1A\u9700\u8981\u586B\u5199\u4E00\u4E9B\u521D\u59CB\u5316\u6570\u636E\u5E93\u914D\u7F6E\u7B49\u53C2\u6570\u3002\u5982\u4E0B\u56FE\uFF1A",-1),O=["src"],q=o(`<p><code>nginx</code>\u914D\u7F6E\u6587\u4EF6\u5185\u5BB9</p><div class="language-nginx ext-nginx line-numbers-mode"><pre class="language-nginx"><code><span class="token comment">#server {</span>
<span class="token comment">#    listen      80; ## listen for ipv4</span>
<span class="token comment">#    server_name   gogs.domain.com;</span>
<span class="token comment">#    return      301 https://$server_name$request_uri;</span>
<span class="token comment">#}</span>
<span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">charset</span> utf-8</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">client_max_body_size</span> <span class="token number">300M</span></span><span class="token punctuation">;</span>

    <span class="token directive"><span class="token keyword">listen</span> <span class="token number">80</span></span><span class="token punctuation">;</span> <span class="token comment"># \u6216\u8005 443\uFF0C\u5982\u679C\u4F60\u4F7F\u7528 HTTPS \u7684\u8BDD</span>

    <span class="token comment"># SSL support</span>
    <span class="token comment"># ssl on;</span>
    <span class="token comment"># ssl_certificate      ./ssl/fullchain.cer;</span>
    <span class="token comment"># ssl_certificate_key  ./ssl/domain.com.key;</span>

    <span class="token directive"><span class="token keyword">server_name</span> gogs.domain.com</span><span class="token punctuation">;</span>

    <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
         <span class="token comment"># \u5982\u679C\u4F60\u5E0C\u671B\u901A\u8FC7\u5B50\u8DEF\u5F84\u8BBF\u95EE\uFF0C\u6B64\u5904\u4FEE\u6539\u4E3A\u5B50\u8DEF\u5F84\uFF0C\u6CE8\u610F\u4EE5 / \u5F00\u5934\u5E76\u4EE5 / \u7ED3\u675F</span>
        <span class="token directive"><span class="token keyword">proxy_pass</span> http://127.0.0.1:3000/</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53C2\u8003\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u94FE\u63A5" aria-hidden="true">#</a> \u53C2\u8003\u94FE\u63A5</h2>`,3),R={href:"https://github.com/Unknwon/wuwen.org/issues/12",target:"_blank",rel:"noopener noreferrer"},w=s("\u4F7F\u7528 HTTPS \u90E8\u7F72 Gogs");function L(c,T){const a=t("ExternalLinkIcon");return l(),p(d,null,[u,n("blockquote",null,[n("p",null,[k,n("a",v,[m,e(a)])])]),b,n("blockquote",null,[n("p",null,[g,n("a",h,[_,e(a)]),y]),S]),f,x,n("img",{src:c.$withBase("/images/others/use-docker-deploy-gogs/gogs-install.png"),alt:""},null,8,O),q,n("ul",null,[n("li",null,[n("a",R,[w,e(a)])])])],64)}var P=i(r,[["render",L],["__file","use-docker-deploy-gogs.html.vue"]]);export{P as default};