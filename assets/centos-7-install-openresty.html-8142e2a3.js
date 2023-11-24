import{_ as i,M as l,p as o,q as p,R as s,t as n,N as a,a1 as t}from"./framework-7e09d608.js";const c={},r=s("h1",{id:"安装openresty",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#安装openresty","aria-hidden":"true"},"#"),n(" 安装OpenResty")],-1),d=s("h2",{id:"包管理安装",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#包管理安装","aria-hidden":"true"},"#"),n(" 包管理安装")],-1),u={href:"https://openresty.org/cn/linux-packages.html",target:"_blank",rel:"noopener noreferrer"},v=t(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># add the yum repo:</span>
<span class="token function">wget</span> https://openresty.org/package/centos/openresty.repo
<span class="token function">sudo</span> <span class="token function">mv</span> openresty.repo /etc/yum.repos.d/

<span class="token comment"># update the yum index:</span>
<span class="token function">sudo</span> yum check-update

<span class="token function">sudo</span> yum <span class="token function">install</span> <span class="token parameter variable">-y</span> openresty openresty-resty
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="源码包准备" tabindex="-1"><a class="header-anchor" href="#源码包准备" aria-hidden="true">#</a> 源码包准备</h2>`,2),m={href:"https://openresty.org/cn/download.html",target:"_blank",rel:"noopener noreferrer"},h={href:"https://openresty.org/download/openresty-1.21.4.1.tar.gz",target:"_blank",rel:"noopener noreferrer"},b=t(`<h3 id="依赖库安装" tabindex="-1"><a class="header-anchor" href="#依赖库安装" aria-hidden="true">#</a> 依赖库安装</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> yum <span class="token function">install</span> <span class="token parameter variable">-y</span> readline-devel pcre-devel openssl-devel perl perl-devel perl-ExtUtils-Embed  libxml2 libxslt-devel gd-devel GeoIP GeoIP-devel google-perftools google-perftools-devel
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="安装openresty-1" tabindex="-1"><a class="header-anchor" href="#安装openresty-1" aria-hidden="true">#</a> 安装OpenResty</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /opt/softwares/ <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> /opt/softwares

<span class="token function">wget</span> https://openresty.org/download/openresty-1.21.4.1.tar.gz <span class="token operator">&amp;&amp;</span> <span class="token function">tar</span> xf openresty-1.21.4.1.tar.gz <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> openresty-1.21.4.1

./configure <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/usr/local/openresty <span class="token punctuation">\\</span>
            --with-file-aio <span class="token punctuation">\\</span>
            --with-http_auth_request_module <span class="token punctuation">\\</span>
            --with-http_v2_module <span class="token punctuation">\\</span>
            --with-http_sub_module <span class="token punctuation">\\</span>
            --with-http_realip_module <span class="token punctuation">\\</span>
            --with-http_addition_module <span class="token punctuation">\\</span>
            --with-http_xslt_module<span class="token operator">=</span>dynamic <span class="token punctuation">\\</span>
            --with-http_image_filter_module<span class="token operator">=</span>dynamic <span class="token punctuation">\\</span>
            --with-http_geoip_module<span class="token operator">=</span>dynamic <span class="token punctuation">\\</span>
            --with-http_dav_module <span class="token punctuation">\\</span>
            --with-http_flv_module <span class="token punctuation">\\</span>
            --with-http_mp4_module <span class="token punctuation">\\</span>
            --with-http_gunzip_module <span class="token punctuation">\\</span>
            --with-http_gzip_static_module <span class="token punctuation">\\</span>
            --with-http_random_index_module <span class="token punctuation">\\</span>
            --with-http_secure_link_module <span class="token punctuation">\\</span>
            --with-http_degradation_module <span class="token punctuation">\\</span>
            --with-http_slice_module <span class="token punctuation">\\</span>
            --with-http_stub_status_module <span class="token punctuation">\\</span>
            --with-http_perl_module<span class="token operator">=</span>dynamic <span class="token punctuation">\\</span>
            --with-mail<span class="token operator">=</span>dynamic <span class="token punctuation">\\</span>
            --with-mail_ssl_module <span class="token punctuation">\\</span>
            --with-pcre <span class="token punctuation">\\</span>
            --with-pcre-jit <span class="token punctuation">\\</span>
            --with-stream<span class="token operator">=</span>dynamic <span class="token punctuation">\\</span>
            --with-stream_ssl_module <span class="token punctuation">\\</span>
            --with-google_perftools_module <span class="token punctuation">\\</span>
            --with-debug <span class="token punctuation">\\</span>
            --with-http_iconv_module

gmake <span class="token operator">&amp;&amp;</span> gmake <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>至此 OpenResty 软件安装完毕。</p><h3 id="设置环境变量" tabindex="-1"><a class="header-anchor" href="#设置环境变量" aria-hidden="true">#</a> 设置环境变量</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&#39;export PATH=$PATH:/usr/local/openresty/nginx/sbin&#39;</span> <span class="token operator">&gt;&gt;</span> /etc/profile <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">source</span> /etc/profile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="配置开机自启动" tabindex="-1"><a class="header-anchor" href="#配置开机自启动" aria-hidden="true">#</a> 配置开机自启动</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;[Unit]
Description=The OpenResty Application Platform
After=syslog.target network-online.target remote-fs.target nss-lookup.target
Wants=network-online.target

[Service]
Type=forking
PIDFile=/usr/local/openresty/nginx/logs/nginx.pid
ExecStartPre=/usr/local/openresty/nginx/sbin/nginx -t
ExecStart=/usr/local/openresty/nginx/sbin/nginx
ExecReload=/bin/kill -s HUP <span class="token variable">$MAINPID</span>
ExecStop=/bin/kill -s QUIT <span class="token variable">$MAINPID</span>
PrivateTmp=true

[Install]
WantedBy=multi-user.target&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/systemd/system/multi-user.target.wants/openresty.service

systemctl <span class="token builtin class-name">enable</span> openresty
systemctl start openresty
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="简单配置" tabindex="-1"><a class="header-anchor" href="#简单配置" aria-hidden="true">#</a> 简单配置</h3><h4 id="隐藏服务器信息" tabindex="-1"><a class="header-anchor" href="#隐藏服务器信息" aria-hidden="true">#</a> 隐藏服务器信息</h4><p>在响应头信息中隐藏web服务器信息。</p><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">http</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">server_tokens</span> <span class="token boolean">off</span></span><span class="token punctuation">;</span> <span class="token comment"># 隐藏服务器版本</span>
    <span class="token directive"><span class="token keyword">more_clear_headers</span> <span class="token string">&#39;Server&#39;</span></span><span class="token punctuation">;</span> <span class="token comment"># 隐藏服务器Server字段</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="开发环境调试lua脚本" tabindex="-1"><a class="header-anchor" href="#开发环境调试lua脚本" aria-hidden="true">#</a> 开发环境调试lua脚本</h4><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">lua_code_cache</span> <span class="token boolean">off</span></span><span class="token punctuation">;</span> <span class="token comment"># 开发时使用，生产环境请删除</span>
    <span class="token directive"><span class="token keyword">default_type</span> text/html</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">content_by_lua_file</span> <span class="token string">&#39;/usr/local/openresty/lua/hello-world.lua&#39;</span></span><span class="token punctuation">;</span> <span class="token comment"># 当修改文件内容时，会实时生效</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15);function k(_,g){const e=l("ExternalLinkIcon");return o(),p("div",null,[r,d,s("p",null,[n("OpenResty 现在提供了 CentOS 上的 "),s("a",u,[n("官方包"),a(e)]),n("。 只需运行下面的命令：")]),v,s("p",null,[n("首先要在"),s("a",m,[n("官网下载"),a(e)]),n(" OpenResty 的源码包。")]),s("p",null,[n("官网上会提供很多的版本，各个版本有什么不同也会有说明，可以按需选择下载，这里下载 "),s("a",h,[n("openresty-1.21.4.1.tar.gz"),a(e)]),n("。")]),b])}const f=i(c,[["render",k],["__file","centos-7-install-openresty.html.vue"]]);export{f as default};
