import{_ as i,M as l,p,q as c,a1 as o,R as n,t as e,N as t}from"./framework-64ffeeb4.js";const r={},u={href:"https://www.1024sou.com/article/117062.html",target:"_blank",rel:"noopener noreferrer"},d={href:"https://blog.rexskz.info/support-traditional-chinese-using-openresty-and-opencc.html",target:"_blank",rel:"noopener noreferrer"};function v(k,s){const a=l("ExternalLinkIcon");return p(),c("div",null,[s[2]||(s[2]=o(`<h1 id="使用lua脚本在nginx上处理网站简繁体转换逻辑" tabindex="-1"><a class="header-anchor" href="#使用lua脚本在nginx上处理网站简繁体转换逻辑" aria-hidden="true">#</a> 使用lua脚本在nginx上处理网站简繁体转换逻辑</h1><p>默认情况下Nginx不支持Lua模块，需要安装LuaJIT解释器，并且需要重新编译Nginx。</p><p>同时也建议使用openrestry，因为内置对Lua的支持。</p><h2 id="环境准备" tabindex="-1"><a class="header-anchor" href="#环境准备" aria-hidden="true">#</a> 环境准备</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> gd-devel GeoIP GeoIP-devel google-perftools google-perftools-devel perl-devel perl-ExtUtils-Embed libxml2 libxslt-devel gperftools-devel gcc gcc-c++ <span class="token function">make</span> pcre-devel zlib-devel openssl-devel
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="安装前准备" tabindex="-1"><a class="header-anchor" href="#安装前准备" aria-hidden="true">#</a> 安装前准备</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /opt/softwares/nginx/ <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> /opt/softwares/nginx/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="luajit" tabindex="-1"><a class="header-anchor" href="#luajit" aria-hidden="true">#</a> luajit</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /opt/softwares/nginx <span class="token comment"># 进入到目录</span>
<span class="token function">wget</span> --no-check-certificate https://luajit.org/download/LuaJIT-2.0.5.tar.gz <span class="token parameter variable">-O</span> luajit-2.0.5.tar.gz <span class="token operator">&amp;&amp;</span> <span class="token function">tar</span> xf luajit-2.0.5.tar.gz
<span class="token builtin class-name">cd</span> LuaJIT-2.0.5 <span class="token comment"># 进入到源代码目录</span>
<span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span> <span class="token assign-left variable">PREFIX</span><span class="token operator">=</span>/usr/local/luajit2 <span class="token comment"># 将编译结果放到 /usr/local/luajit2 目录</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ngx-devel-kit" tabindex="-1"><a class="header-anchor" href="#ngx-devel-kit" aria-hidden="true">#</a> ngx_devel_kit</h3><blockquote><p>解压出来的文件将在nginx编译时指定目录 <code>/opt/softwares/nginx/ngx_devel_kit-0.3.1</code>。</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /opt/softwares/nginx <span class="token comment"># 进入到目录</span>
<span class="token function">wget</span> --no-check-certificate https://github.com/simpl/ngx_devel_kit/archive/v0.3.1.tar.gz <span class="token parameter variable">-O</span> ngx_devel_kit-0.3.1.tar.gz <span class="token operator">&amp;&amp;</span> <span class="token function">tar</span> xf ngx_devel_kit-0.3.1.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="lua-nginx-module" tabindex="-1"><a class="header-anchor" href="#lua-nginx-module" aria-hidden="true">#</a> lua-nginx-module</h3><blockquote><p>解压出来的文件将在nginx编译时指定目录 <code>/opt/softwares/nginx/lua-nginx-module-0.10.21</code>。</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /opt/softwares/nginx <span class="token comment"># 进入到目录</span>
<span class="token function">wget</span> --no-check-certificate https://github.com/openresty/lua-nginx-module/archive/v0.10.21.tar.gz <span class="token parameter variable">-O</span> lua-nginx-module-0.10.21.tar.gz <span class="token operator">&amp;&amp;</span> <span class="token function">tar</span> xf lua-nginx-module-0.10.21.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="lua-resty-core" tabindex="-1"><a class="header-anchor" href="#lua-resty-core" aria-hidden="true">#</a> lua-resty-core</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /opt/softwares/nginx <span class="token comment"># 进入到目录</span>
<span class="token function">wget</span> --no-check-certificate https://github.com/openresty/lua-resty-core/archive/v0.1.23.tar.gz <span class="token parameter variable">-O</span> lua-restry-core-0.1.23.tar.gz <span class="token operator">&amp;&amp;</span> <span class="token function">tar</span> xf lua-restry-core-0.1.23.tar.gz
<span class="token builtin class-name">cd</span> lua-resty-core-0.1.23
<span class="token function">make</span> <span class="token function">install</span> <span class="token assign-left variable">PREFIX</span><span class="token operator">=</span>/usr/local/lua/core
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="lua-resty-lrucache" tabindex="-1"><a class="header-anchor" href="#lua-resty-lrucache" aria-hidden="true">#</a> lua-resty-lrucache</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /opt/softwares/nginx <span class="token comment"># 进入到目录</span>
<span class="token function">wget</span> --no-check-certificate  https://github.com/openresty/lua-resty-lrucache/archive/v0.11.tar.gz <span class="token parameter variable">-O</span> lua-resty-lrucache-0.11.tar.gz <span class="token operator">&amp;&amp;</span> <span class="token function">tar</span> xf lua-resty-lrucache-0.11.tar.gz
<span class="token builtin class-name">cd</span> lua-resty-lrucache-0.11
<span class="token function">make</span> <span class="token function">install</span> <span class="token assign-left variable">PREFIX</span><span class="token operator">=</span>/usr/local/lua/core
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="编译安装nginx并加载模块" tabindex="-1"><a class="header-anchor" href="#编译安装nginx并加载模块" aria-hidden="true">#</a> 编译安装Nginx并加载模块</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 建立软链接, 不建立会出现share object错误</span>
<span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/local/lib/libluajit-5.1.so.2 /lib64/libluajit-5.1.so.2
<span class="token comment"># 加载lua库，加入到ld.so.conf文件</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;/usr/local/luajit2/lib&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/ld.so.conf
ldconfig

<span class="token function">wget</span> http://nginx.org/download/nginx-1.22.0.tar.gz <span class="token operator">&amp;&amp;</span> <span class="token function">tar</span> xf nginx-1.22.0.tar.gz <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> nginx-1.22.0

<span class="token builtin class-name">export</span> <span class="token assign-left variable">LUAJIT_LIB</span><span class="token operator">=</span>/usr/local/luajit2/lib
<span class="token builtin class-name">export</span> <span class="token assign-left variable">LUAJIT_INC</span><span class="token operator">=</span>/usr/local/luajit2/include/luajit-2.0

./configure <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/usr/local/nginx <span class="token parameter variable">--user</span><span class="token operator">=</span>nginx <span class="token parameter variable">--group</span><span class="token operator">=</span>nginx --with-file-aio --with-ipv6 --with-http_auth_request_module --with-http_ssl_module --with-http_v2_module --with-http_realip_module --with-http_addition_module --with-http_xslt_module<span class="token operator">=</span>dynamic --with-http_image_filter_module<span class="token operator">=</span>dynamic --with-http_geoip_module<span class="token operator">=</span>dynamic --with-http_sub_module --with-http_dav_module --with-http_flv_module --with-http_mp4_module --with-http_gunzip_module --with-http_gzip_static_module --with-http_random_index_module --with-http_secure_link_module --with-http_degradation_module --with-http_slice_module --with-http_stub_status_module --with-http_perl_module<span class="token operator">=</span>dynamic --with-mail<span class="token operator">=</span>dynamic --with-mail_ssl_module --with-pcre --with-pcre-jit --with-stream<span class="token operator">=</span>dynamic --with-stream_ssl_module --with-google_perftools_module --with-debug --add-module<span class="token operator">=</span>/opt/softwares/nginx/ngx_devel_kit-0.3.1 --add-module<span class="token operator">=</span>/opt/softwares/nginx/lua-nginx-module-0.10.21

<span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;export PATH=/usr/local/nginx/sbin:<span class="token environment constant">$PATH</span>&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/profile <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">source</span> /etc/profile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Nginx自启动脚本，下面的内容放在：<code>/etc/init.d/nginx</code>。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment">#</span>
<span class="token comment"># Startup script for Nginx - this script starts and stops the nginx daemon</span>
<span class="token comment">#</span>
<span class="token comment"># chkconfig:   - 85 15</span>
<span class="token comment"># description:  Nginx is an HTTP(S) server, HTTP(S) reverse proxy and IMAP/POP3 proxy server</span>
<span class="token comment"># processname: nginx</span>
<span class="token comment"># config:      /usr/local/nginx/conf/nginx.conf</span>
<span class="token comment"># pidfile:     /usr/local/nginx/logs/nginx.pid</span>

<span class="token comment"># Source function library.</span>
<span class="token builtin class-name">.</span> /etc/rc.d/init.d/functions

<span class="token comment"># Source networking configuration.</span>
<span class="token builtin class-name">.</span> /etc/sysconfig/network

<span class="token comment"># Check that networking is up.</span>
<span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$NETWORKING</span>&quot;</span> <span class="token operator">=</span> <span class="token string">&quot;no&quot;</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">exit</span> <span class="token number">0</span>

<span class="token assign-left variable">nginx</span><span class="token operator">=</span><span class="token string">&quot;/usr/local/nginx/sbin/nginx&quot;</span>
<span class="token assign-left variable">prog</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">basename</span> $nginx<span class="token variable">)</span></span>

<span class="token assign-left variable">NGINX_CONF_FILE</span><span class="token operator">=</span><span class="token string">&quot;/usr/local/nginx/conf/nginx.conf&quot;</span>

<span class="token punctuation">[</span> <span class="token parameter variable">-f</span> /etc/sysconfig/nginx <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">.</span> /etc/sysconfig/nginx

<span class="token assign-left variable">lockfile</span><span class="token operator">=</span>/var/lock/subsys/nginx

<span class="token function-name function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span> <span class="token parameter variable">-x</span> <span class="token variable">$nginx</span> <span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token builtin class-name">exit</span> <span class="token number">5</span>
    <span class="token punctuation">[</span> <span class="token parameter variable">-f</span> <span class="token variable">$NGINX_CONF_FILE</span> <span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token builtin class-name">exit</span> <span class="token number">6</span>
    <span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> $<span class="token string">&quot;Starting <span class="token variable">$prog</span>: &quot;</span>
    daemon <span class="token variable">$nginx</span> <span class="token parameter variable">-c</span> <span class="token variable">$NGINX_CONF_FILE</span>
    <span class="token assign-left variable">retval</span><span class="token operator">=</span><span class="token variable">$?</span>
    <span class="token builtin class-name">echo</span>
    <span class="token punctuation">[</span> <span class="token variable">$retval</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token function">touch</span> <span class="token variable">$lockfile</span>
    <span class="token builtin class-name">return</span> <span class="token variable">$retval</span>
<span class="token punctuation">}</span>

<span class="token function-name function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> $<span class="token string">&quot;Stopping <span class="token variable">$prog</span>: &quot;</span>
    killproc <span class="token variable">$prog</span> <span class="token parameter variable">-QUIT</span>
    <span class="token assign-left variable">retval</span><span class="token operator">=</span><span class="token variable">$?</span>
    <span class="token builtin class-name">echo</span>
    <span class="token punctuation">[</span> <span class="token variable">$retval</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token function">rm</span> <span class="token parameter variable">-f</span> <span class="token variable">$lockfile</span>
    <span class="token builtin class-name">return</span> <span class="token variable">$retval</span>
<span class="token punctuation">}</span>

<span class="token function-name function">restart</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    configtest <span class="token operator">||</span> <span class="token builtin class-name">return</span> <span class="token variable">$?</span>
    stop
    <span class="token function">sleep</span> <span class="token number">1</span>
    start
<span class="token punctuation">}</span>

<span class="token function-name function">reload</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    configtest <span class="token operator">||</span> <span class="token builtin class-name">return</span> <span class="token variable">$?</span>
    <span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> $<span class="token string">&quot;Reloading <span class="token variable">$prog</span>: &quot;</span>
    killproc <span class="token variable">$nginx</span> <span class="token parameter variable">-HUP</span>
    <span class="token assign-left variable">RETVAL</span><span class="token operator">=</span><span class="token variable">$?</span>
    <span class="token builtin class-name">echo</span>
<span class="token punctuation">}</span>

<span class="token function-name function">force_reload</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    restart
<span class="token punctuation">}</span>

<span class="token function-name function">configtest</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token variable">$nginx</span> <span class="token parameter variable">-t</span> <span class="token parameter variable">-c</span> <span class="token variable">$NGINX_CONF_FILE</span>
<span class="token punctuation">}</span>

<span class="token function-name function">rh_status</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    status <span class="token variable">$prog</span>
<span class="token punctuation">}</span>

<span class="token function-name function">rh_status_q</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    rh_status <span class="token operator">&gt;</span>/dev/null <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span>
<span class="token punctuation">}</span>

<span class="token keyword">case</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span> <span class="token keyword">in</span>
    start<span class="token punctuation">)</span>
        rh_status_q <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">exit</span> <span class="token number">0</span>
        <span class="token variable">$1</span>
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
    stop<span class="token punctuation">)</span>
        rh_status_q <span class="token operator">||</span> <span class="token builtin class-name">exit</span> <span class="token number">0</span>
        <span class="token variable">$1</span>
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
    restart<span class="token operator">|</span>configtest<span class="token punctuation">)</span>
        <span class="token variable">$1</span>
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
    reload<span class="token punctuation">)</span>
        rh_status_q <span class="token operator">||</span> <span class="token builtin class-name">exit</span> <span class="token number">7</span>
        <span class="token variable">$1</span>
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
    force-reload<span class="token punctuation">)</span>
        force_reload
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
    status<span class="token punctuation">)</span>
        rh_status
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
    condrestart<span class="token operator">|</span>try-restart<span class="token punctuation">)</span>
        rh_status_q <span class="token operator">||</span> <span class="token builtin class-name">exit</span> <span class="token number">0</span>
            <span class="token punctuation">;</span><span class="token punctuation">;</span>
    *<span class="token punctuation">)</span>
        <span class="token builtin class-name">echo</span> $<span class="token string">&quot;Usage: <span class="token variable">$0</span> {start|stop|status|restart|condrestart|try-restart|reload|force-reload|configtest}&quot;</span>
        <span class="token builtin class-name">exit</span> <span class="token number">2</span>
<span class="token keyword">esac</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">useradd</span> <span class="token parameter variable">-M</span> <span class="token parameter variable">-s</span> /sbin/nologin nginx <span class="token comment"># 创建nginx用户</span>
<span class="token function">chkconfig</span> <span class="token parameter variable">--add</span> nginx
<span class="token function">chkconfig</span> <span class="token parameter variable">--list</span> <span class="token operator">|</span> <span class="token function">grep</span> nginx
<span class="token function">chkconfig</span> <span class="token parameter variable">--level</span> <span class="token number">2345</span> nginx on
<span class="token function">service</span> nginx start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装opencc" tabindex="-1"><a class="header-anchor" href="#安装opencc" aria-hidden="true">#</a> 安装opencc</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> doxygen cmake

<span class="token builtin class-name">cd</span> /opt/softwares/nginx
<span class="token function">git</span> clone https://github.com/BYVoid/OpenCC.git <span class="token parameter variable">--depth</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> OpenCC
<span class="token function">make</span> <span class="token comment"># See: https://github.com/BYVoid/OpenCC/issues/592</span>
<span class="token function">sudo</span> <span class="token function">make</span> <span class="token function">install</span>
<span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/lib/libopencc.so /lib64/libopencc.so
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>仅对站点的<code>text/html</code>文件内容替换 <code>opencc-filter.lua</code>。</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token keyword">local</span> content_type <span class="token operator">=</span> ngx<span class="token punctuation">.</span>header<span class="token punctuation">.</span>content_type
<span class="token keyword">local</span> ffi <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;ffi&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">local</span> cc <span class="token operator">=</span> ffi<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token string">&#39;opencc&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">if</span> string<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>content_type<span class="token punctuation">,</span> <span class="token string">&#39;text/html&#39;</span><span class="token punctuation">)</span> <span class="token keyword">then</span>
    ffi<span class="token punctuation">.</span>cdef<span class="token string">[[
        typedef void* opencc_t;

        opencc_t opencc_open(const char *configFileName);
        int      opencc_close(opencc_t opencc);
        char*    opencc_convert_utf8(opencc_t opencc, const char *input, size_t length);
        void     opencc_convert_utf8_free(char *str);
    ]]</span>


    <span class="token keyword">local</span> inst <span class="token operator">=</span> cc<span class="token punctuation">.</span><span class="token function">opencc_open</span><span class="token punctuation">(</span><span class="token string">&#39;/usr/share/opencc/s2t.json&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">local</span> input <span class="token operator">=</span> ngx<span class="token punctuation">.</span>arg<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
    <span class="token keyword">local</span> res <span class="token operator">=</span> cc<span class="token punctuation">.</span><span class="token function">opencc_convert_utf8</span><span class="token punctuation">(</span>inst<span class="token punctuation">,</span> input<span class="token punctuation">,</span> string<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span>input<span class="token punctuation">)</span><span class="token punctuation">)</span>

    ngx<span class="token punctuation">.</span>arg<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> ffi<span class="token punctuation">.</span><span class="token function">string</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>

    cc<span class="token punctuation">.</span><span class="token function">opencc_convert_utf8_free</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
    cc<span class="token punctuation">.</span><span class="token function">opencc_close</span><span class="token punctuation">(</span>inst<span class="token punctuation">)</span>
<span class="token keyword">end</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="虚拟主机中使用" tabindex="-1"><a class="header-anchor" href="#虚拟主机中使用" aria-hidden="true">#</a> 虚拟主机中使用</h3><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">listen</span> <span class="token number">80</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server_name</span> tw.curder.com</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">return</span> <span class="token number">301</span> https://<span class="token variable">$server_name</span><span class="token variable">$request_uri</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">listen</span> <span class="token number">443</span> ssl</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">ssl_certificate</span> /etc/nginx/ssl/curder.com/fullchain.pem</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">ssl_certificate_key</span> /etc/nginx/ssl/curder.com/privkey.pem</span><span class="token punctuation">;</span>

    <span class="token directive"><span class="token keyword">server_name</span> tw.curder.com</span><span class="token punctuation">;</span>

    <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">proxy_pass</span> https://www.avatrade-world.hk</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">body_filter_by_lua_file</span> /etc/nginx/conf/vhosts/opencc-filter.lua</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token directive"><span class="token keyword">location</span> /lua</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">set</span> <span class="token variable">$test</span> <span class="token string">&quot;hello,world&quot;</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">content_by_lua</span> <span class="token string">&#39;
            ngx.header.content_type=&quot;text/html; charset=UTF-8;&quot;
            ngx.say(ngx.var.test)&#39;</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时访问 https://tw.curder.com 站，则可以看到页面内容都转换成了繁体。</p>`,31)),n("ul",null,[n("li",null,[n("p",null,[n("a",u,[s[0]||(s[0]=e("NGINX+Lua模块编译安装",-1)),t(a)])])]),n("li",null,[n("p",null,[n("a",d,[s[1]||(s[1]=e("用 OpenResty+OpenCC 让网站支持正体中文",-1)),t(a)])])])])])}const b=i(r,[["render",v],["__file","use-the-lua-script-to-process-the-simplified-traditional-conversion-logic-on-the-nginx.html.vue"]]);export{b as default};
