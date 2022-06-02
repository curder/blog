import{_ as i,r as l,o,c,b as s,a,F as p,d as n,e as t}from"./app.b24ee918.js";const d={},r=s("h1",{id:"\u5B89\u88C5openresty",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u5B89\u88C5openresty","aria-hidden":"true"},"#"),n(" \u5B89\u88C5OpenResty")],-1),u=s("h2",{id:"\u5305\u7BA1\u7406\u5B89\u88C5",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u5305\u7BA1\u7406\u5B89\u88C5","aria-hidden":"true"},"#"),n(" \u5305\u7BA1\u7406\u5B89\u88C5")],-1),v=n("OpenResty \u73B0\u5728\u63D0\u4F9B\u4E86 CentOS \u4E0A\u7684 "),m={href:"https://openresty.org/cn/linux-packages.html",target:"_blank",rel:"noopener noreferrer"},h=n("\u5B98\u65B9\u5305"),b=n("\u3002 \u53EA\u9700\u8FD0\u884C\u4E0B\u9762\u7684\u547D\u4EE4\uFF1A"),k=t(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># add the yum repo:</span>
<span class="token function">wget</span> https://openresty.org/package/centos/openresty.repo
<span class="token function">sudo</span> <span class="token function">mv</span> openresty.repo /etc/yum.repos.d/

<span class="token comment"># update the yum index:</span>
<span class="token function">sudo</span> yum check-update

<span class="token function">sudo</span> yum <span class="token function">install</span> -y openresty
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6E90\u7801\u5305\u51C6\u5907" tabindex="-1"><a class="header-anchor" href="#\u6E90\u7801\u5305\u51C6\u5907" aria-hidden="true">#</a> \u6E90\u7801\u5305\u51C6\u5907</h2>`,2),_=n("\u9996\u5148\u8981\u5728"),g={href:"https://openresty.org/cn/download.html",target:"_blank",rel:"noopener noreferrer"},y=n("\u5B98\u7F51\u4E0B\u8F7D"),f=n(" OpenResty \u7684\u6E90\u7801\u5305\u3002"),x=n("\u5B98\u7F51\u4E0A\u4F1A\u63D0\u4F9B\u5F88\u591A\u7684\u7248\u672C\uFF0C\u5404\u4E2A\u7248\u672C\u6709\u4EC0\u4E48\u4E0D\u540C\u4E5F\u4F1A\u6709\u8BF4\u660E\uFF0C\u53EF\u4EE5\u6309\u9700\u9009\u62E9\u4E0B\u8F7D\uFF0C\u8FD9\u91CC\u4E0B\u8F7D "),w={href:"https://openresty.org/download/openresty-1.21.4.1.tar.gz",target:"_blank",rel:"noopener noreferrer"},I=n("openresty-1.21.4.1.tar.gz"),P=n("\u3002"),E=t(`<h3 id="\u4F9D\u8D56\u5E93\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u4F9D\u8D56\u5E93\u5B89\u88C5" aria-hidden="true">#</a> \u4F9D\u8D56\u5E93\u5B89\u88C5</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> yum <span class="token function">install</span> -y readline-devel pcre-devel openssl-devel perl perl-devel perl-ExtUtils-Embed  libxml2 libxslt-devel gd-devel GeoIP GeoIP-devel google-perftools google-perftools-devel
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u5B89\u88C5openresty-1" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5openresty-1" aria-hidden="true">#</a> \u5B89\u88C5OpenResty</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> -p /opt/softwares/ <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> /opt/softwares

<span class="token function">wget</span> https://openresty.org/download/openresty-1.21.4.1.tar.gz <span class="token operator">&amp;&amp;</span> <span class="token function">tar</span> xf openresty-1.21.4.1.tar.gz <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> openresty-1.21.4.1

./configure --prefix<span class="token operator">=</span>/usr/local/openresty<span class="token punctuation">\\</span> <span class="token comment"># \u6587\u4EF6\u5B89\u88C5\u5230\u8FD9\u4E2A\u76EE\u5F55\u4E0B</span>
            --with-file-aio<span class="token punctuation">\\</span>
            --with-http_auth_request_module <span class="token punctuation">\\</span>
            --with-http_v2_module <span class="token punctuation">\\</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u81F3\u6B64 OpenResty \u8F6F\u4EF6\u5B89\u88C5\u5B8C\u6BD5\u3002</p><h3 id="\u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF" aria-hidden="true">#</a> \u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&#39;export PATH=$PATH:/usr/local/openresty/nginx/sbin&#39;</span> <span class="token operator">&gt;&gt;</span> /etc/profile <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">source</span> /etc/profile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u914D\u7F6E\u5F00\u673A\u81EA\u542F\u52A8" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u5F00\u673A\u81EA\u542F\u52A8" aria-hidden="true">#</a> \u914D\u7F6E\u5F00\u673A\u81EA\u542F\u52A8</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;[Unit]
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u7B80\u5355\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u7B80\u5355\u914D\u7F6E" aria-hidden="true">#</a> \u7B80\u5355\u914D\u7F6E</h3><h4 id="\u9690\u85CF\u670D\u52A1\u5668\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#\u9690\u85CF\u670D\u52A1\u5668\u4FE1\u606F" aria-hidden="true">#</a> \u9690\u85CF\u670D\u52A1\u5668\u4FE1\u606F</h4><p>\u5728\u54CD\u5E94\u5934\u4FE1\u606F\u4E2D\u9690\u85CFweb\u670D\u52A1\u5668\u4FE1\u606F\u3002</p><div class="language-nginx ext-nginx line-numbers-mode"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">http</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">server_tokens</span> <span class="token boolean">off</span></span><span class="token punctuation">;</span> <span class="token comment"># \u9690\u85CF\u670D\u52A1\u5668\u7248\u672C</span>
    <span class="token directive"><span class="token keyword">more_clear_headers</span> <span class="token string">&#39;Server&#39;</span></span><span class="token punctuation">;</span> <span class="token comment"># \u9690\u85CF\u670D\u52A1\u5668Server\u5B57\u6BB5</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u5F00\u53D1\u73AF\u5883\u8C03\u8BD5lua\u811A\u672C" tabindex="-1"><a class="header-anchor" href="#\u5F00\u53D1\u73AF\u5883\u8C03\u8BD5lua\u811A\u672C" aria-hidden="true">#</a> \u5F00\u53D1\u73AF\u5883\u8C03\u8BD5lua\u811A\u672C</h4><div class="language-nginx ext-nginx line-numbers-mode"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">lua_code_cache</span> <span class="token boolean">off</span></span><span class="token punctuation">;</span> <span class="token comment"># \u5F00\u53D1\u65F6\u4F7F\u7528\uFF0C\u751F\u4EA7\u73AF\u5883\u8BF7\u5220\u9664</span>
    <span class="token directive"><span class="token keyword">default_type</span> text/html</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">content_by_lua_file</span> <span class="token string">&#39;/usr/local/openresty/lua/hello-world.lua&#39;</span></span><span class="token punctuation">;</span> <span class="token comment"># \u5F53\u4FEE\u6539\u6587\u4EF6\u5185\u5BB9\u65F6\uFF0C\u4F1A\u5B9E\u65F6\u751F\u6548</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15);function O(S,R){const e=l("ExternalLinkIcon");return o(),c(p,null,[r,u,s("p",null,[v,s("a",m,[h,a(e)]),b]),k,s("p",null,[_,s("a",g,[y,a(e)]),f]),s("p",null,[x,s("a",w,[I,a(e)]),P]),E],64)}var z=i(d,[["render",O],["__file","centos-7-install-openresty.html.vue"]]);export{z as default};
