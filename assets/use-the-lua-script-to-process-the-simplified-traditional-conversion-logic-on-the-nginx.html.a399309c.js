import{_ as t,r as i,o as l,c,b as n,a,F as p,e as o,d as e}from"./app.970e287f.js";const r={},u=o(`<h1 id="\u4F7F\u7528lua\u811A\u672C\u5728nginx\u4E0A\u5904\u7406\u7F51\u7AD9\u7B80\u7E41\u4F53\u8F6C\u6362\u903B\u8F91" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528lua\u811A\u672C\u5728nginx\u4E0A\u5904\u7406\u7F51\u7AD9\u7B80\u7E41\u4F53\u8F6C\u6362\u903B\u8F91" aria-hidden="true">#</a> \u4F7F\u7528lua\u811A\u672C\u5728nginx\u4E0A\u5904\u7406\u7F51\u7AD9\u7B80\u7E41\u4F53\u8F6C\u6362\u903B\u8F91</h1><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0BNginx\u4E0D\u652F\u6301Lua\u6A21\u5757\uFF0C\u9700\u8981\u5B89\u88C5LuaJIT\u89E3\u91CA\u5668\uFF0C\u5E76\u4E14\u9700\u8981\u91CD\u65B0\u7F16\u8BD1Nginx\u3002</p><p>\u540C\u65F6\u4E5F\u5EFA\u8BAE\u4F7F\u7528openrestry\uFF0C\u56E0\u4E3A\u5185\u7F6E\u5BF9Lua\u7684\u652F\u6301\u3002</p><h2 id="\u73AF\u5883\u51C6\u5907" tabindex="-1"><a class="header-anchor" href="#\u73AF\u5883\u51C6\u5907" aria-hidden="true">#</a> \u73AF\u5883\u51C6\u5907</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum <span class="token function">install</span> -y gd-devel GeoIP GeoIP-devel google-perftools google-perftools-devel perl-devel perl-ExtUtils-Embed libxml2 libxslt-devel gperftools-devel gcc gcc-c++ <span class="token function">make</span> pcre-devel zlib-devel openssl-devel
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u5B89\u88C5\u524D\u51C6\u5907" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u524D\u51C6\u5907" aria-hidden="true">#</a> \u5B89\u88C5\u524D\u51C6\u5907</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> -p /opt/softwares/nginx/ <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> /opt/softwares/nginx/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="luajit" tabindex="-1"><a class="header-anchor" href="#luajit" aria-hidden="true">#</a> luajit</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /opt/softwares/nginx <span class="token comment"># \u8FDB\u5165\u5230\u76EE\u5F55</span>
<span class="token function">wget</span> --no-check-certificate https://luajit.org/download/LuaJIT-2.0.5.tar.gz -O luajit-2.0.5.tar.gz <span class="token operator">&amp;&amp;</span> <span class="token function">tar</span> xf luajit-2.0.5.tar.gz
<span class="token builtin class-name">cd</span> LuaJIT-2.0.5 <span class="token comment"># \u8FDB\u5165\u5230\u6E90\u4EE3\u7801\u76EE\u5F55</span>
<span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span> <span class="token assign-left variable">PREFIX</span><span class="token operator">=</span>/usr/local/luajit2 <span class="token comment"># \u5C06\u7F16\u8BD1\u7ED3\u679C\u653E\u5230 /usr/local/luajit2 \u76EE\u5F55</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ngx-devel-kit" tabindex="-1"><a class="header-anchor" href="#ngx-devel-kit" aria-hidden="true">#</a> ngx_devel_kit</h3><blockquote><p>\u89E3\u538B\u51FA\u6765\u7684\u6587\u4EF6\u5C06\u5728nginx\u7F16\u8BD1\u65F6\u6307\u5B9A\u76EE\u5F55 <code>/opt/softwares/nginx/ngx_devel_kit-0.3.1</code>\u3002</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /opt/softwares/nginx <span class="token comment"># \u8FDB\u5165\u5230\u76EE\u5F55</span>
<span class="token function">wget</span> --no-check-certificate https://github.com/simpl/ngx_devel_kit/archive/v0.3.1.tar.gz -O ngx_devel_kit-0.3.1.tar.gz <span class="token operator">&amp;&amp;</span> <span class="token function">tar</span> xf ngx_devel_kit-0.3.1.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="lua-nginx-module" tabindex="-1"><a class="header-anchor" href="#lua-nginx-module" aria-hidden="true">#</a> lua-nginx-module</h3><blockquote><p>\u89E3\u538B\u51FA\u6765\u7684\u6587\u4EF6\u5C06\u5728nginx\u7F16\u8BD1\u65F6\u6307\u5B9A\u76EE\u5F55 <code>/opt/softwares/nginx/lua-nginx-module-0.10.21</code>\u3002</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /opt/softwares/nginx <span class="token comment"># \u8FDB\u5165\u5230\u76EE\u5F55</span>
<span class="token function">wget</span> --no-check-certificate https://github.com/openresty/lua-nginx-module/archive/v0.10.21.tar.gz -O lua-nginx-module-0.10.21.tar.gz <span class="token operator">&amp;&amp;</span> <span class="token function">tar</span> xf lua-nginx-module-0.10.21.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="lua-resty-core" tabindex="-1"><a class="header-anchor" href="#lua-resty-core" aria-hidden="true">#</a> lua-resty-core</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /opt/softwares/nginx <span class="token comment"># \u8FDB\u5165\u5230\u76EE\u5F55</span>
<span class="token function">wget</span> --no-check-certificate https://github.com/openresty/lua-resty-core/archive/v0.1.23.tar.gz -O lua-restry-core-0.1.23.tar.gz <span class="token operator">&amp;&amp;</span> <span class="token function">tar</span> xf lua-restry-core-0.1.23.tar.gz
<span class="token builtin class-name">cd</span> lua-resty-core-0.1.23
<span class="token function">make</span> <span class="token function">install</span> <span class="token assign-left variable">PREFIX</span><span class="token operator">=</span>/usr/local/lua/core
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="lua-resty-lrucache" tabindex="-1"><a class="header-anchor" href="#lua-resty-lrucache" aria-hidden="true">#</a> lua-resty-lrucache</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /opt/softwares/nginx <span class="token comment"># \u8FDB\u5165\u5230\u76EE\u5F55</span>
<span class="token function">wget</span> --no-check-certificate  https://github.com/openresty/lua-resty-lrucache/archive/v0.11.tar.gz -O lua-resty-lrucache-0.11.tar.gz <span class="token operator">&amp;&amp;</span> <span class="token function">tar</span> xf lua-resty-lrucache-0.11.tar.gz
<span class="token builtin class-name">cd</span> lua-resty-lrucache-0.11
<span class="token function">make</span> <span class="token function">install</span> <span class="token assign-left variable">PREFIX</span><span class="token operator">=</span>/usr/local/lua/core
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7F16\u8BD1\u5B89\u88C5nginx\u5E76\u52A0\u8F7D\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#\u7F16\u8BD1\u5B89\u88C5nginx\u5E76\u52A0\u8F7D\u6A21\u5757" aria-hidden="true">#</a> \u7F16\u8BD1\u5B89\u88C5Nginx\u5E76\u52A0\u8F7D\u6A21\u5757</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5EFA\u7ACB\u8F6F\u94FE\u63A5, \u4E0D\u5EFA\u7ACB\u4F1A\u51FA\u73B0share object\u9519\u8BEF</span>
<span class="token function">ln</span> -s /usr/local/lib/libluajit-5.1.so.2 /lib64/libluajit-5.1.so.2
<span class="token comment"># \u52A0\u8F7Dlua\u5E93\uFF0C\u52A0\u5165\u5230ld.so.conf\u6587\u4EF6</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;/usr/local/luajit2/lib&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/ld.so.conf
ldconfig

<span class="token function">wget</span> http://nginx.org/download/nginx-1.22.0.tar.gz <span class="token operator">&amp;&amp;</span> <span class="token function">tar</span> xf nginx-1.22.0.tar.gz <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> nginx-1.22.0

<span class="token builtin class-name">export</span> <span class="token assign-left variable">LUAJIT_LIB</span><span class="token operator">=</span>/usr/local/luajit2/lib
<span class="token builtin class-name">export</span> <span class="token assign-left variable">LUAJIT_INC</span><span class="token operator">=</span>/usr/local/luajit2/include/luajit-2.0

./configure --prefix<span class="token operator">=</span>/usr/local/nginx --user<span class="token operator">=</span>nginx --group<span class="token operator">=</span>nginx --with-file-aio --with-ipv6 --with-http_auth_request_module --with-http_ssl_module --with-http_v2_module --with-http_realip_module --with-http_addition_module --with-http_xslt_module<span class="token operator">=</span>dynamic --with-http_image_filter_module<span class="token operator">=</span>dynamic --with-http_geoip_module<span class="token operator">=</span>dynamic --with-http_sub_module --with-http_dav_module --with-http_flv_module --with-http_mp4_module --with-http_gunzip_module --with-http_gzip_static_module --with-http_random_index_module --with-http_secure_link_module --with-http_degradation_module --with-http_slice_module --with-http_stub_status_module --with-http_perl_module<span class="token operator">=</span>dynamic --with-mail<span class="token operator">=</span>dynamic --with-mail_ssl_module --with-pcre --with-pcre-jit --with-stream<span class="token operator">=</span>dynamic --with-stream_ssl_module --with-google_perftools_module --with-debug --add-module<span class="token operator">=</span>/opt/softwares/nginx/ngx_devel_kit-0.3.1 --add-module<span class="token operator">=</span>/opt/softwares/nginx/lua-nginx-module-0.10.21

<span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;export PATH=/usr/local/nginx/sbin:<span class="token environment constant">$PATH</span>&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/profile <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">source</span> /etc/profile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Nginx\u81EA\u542F\u52A8\u811A\u672C\uFF0C\u4E0B\u9762\u7684\u5185\u5BB9\u653E\u5728\uFF1A<code>/etc/init.d/nginx</code>\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
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

<span class="token punctuation">[</span> -f /etc/sysconfig/nginx <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">.</span> /etc/sysconfig/nginx

<span class="token assign-left variable">lockfile</span><span class="token operator">=</span>/var/lock/subsys/nginx

<span class="token function-name function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span> -x <span class="token variable">$nginx</span> <span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token builtin class-name">exit</span> <span class="token number">5</span>
    <span class="token punctuation">[</span> -f <span class="token variable">$NGINX_CONF_FILE</span> <span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token builtin class-name">exit</span> <span class="token number">6</span>
    <span class="token builtin class-name">echo</span> -n $<span class="token string">&quot;Starting <span class="token variable">$prog</span>: &quot;</span>
    daemon <span class="token variable">$nginx</span> -c <span class="token variable">$NGINX_CONF_FILE</span>
    <span class="token assign-left variable">retval</span><span class="token operator">=</span><span class="token variable">$?</span>
    <span class="token builtin class-name">echo</span>
    <span class="token punctuation">[</span> <span class="token variable">$retval</span> -eq <span class="token number">0</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token function">touch</span> <span class="token variable">$lockfile</span>
    <span class="token builtin class-name">return</span> <span class="token variable">$retval</span>
<span class="token punctuation">}</span>

<span class="token function-name function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin class-name">echo</span> -n $<span class="token string">&quot;Stopping <span class="token variable">$prog</span>: &quot;</span>
    killproc <span class="token variable">$prog</span> -QUIT
    <span class="token assign-left variable">retval</span><span class="token operator">=</span><span class="token variable">$?</span>
    <span class="token builtin class-name">echo</span>
    <span class="token punctuation">[</span> <span class="token variable">$retval</span> -eq <span class="token number">0</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token function">rm</span> -f <span class="token variable">$lockfile</span>
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
    <span class="token builtin class-name">echo</span> -n $<span class="token string">&quot;Reloading <span class="token variable">$prog</span>: &quot;</span>
    killproc <span class="token variable">$nginx</span> -HUP
    <span class="token assign-left variable">RETVAL</span><span class="token operator">=</span><span class="token variable">$?</span>
    <span class="token builtin class-name">echo</span>
<span class="token punctuation">}</span>

<span class="token function-name function">force_reload</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    restart
<span class="token punctuation">}</span>

<span class="token function-name function">configtest</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token variable">$nginx</span> -t -c <span class="token variable">$NGINX_CONF_FILE</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">useradd</span> -M -s /sbin/nologin nginx <span class="token comment"># \u521B\u5EFAnginx\u7528\u6237</span>
<span class="token function">chkconfig</span> --add nginx
<span class="token function">chkconfig</span> --list <span class="token operator">|</span> <span class="token function">grep</span> nginx
<span class="token function">chkconfig</span> --level <span class="token number">2345</span> nginx on
<span class="token function">service</span> nginx start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5B89\u88C5opencc" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5opencc" aria-hidden="true">#</a> \u5B89\u88C5opencc</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum <span class="token function">install</span> -y doxygen cmake

<span class="token builtin class-name">cd</span> /opt/softwares/nginx
<span class="token function">git</span> clone https://github.com/BYVoid/OpenCC.git --depth <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> OpenCC
<span class="token function">make</span> <span class="token comment"># See: https://github.com/BYVoid/OpenCC/issues/592</span>
<span class="token function">sudo</span> <span class="token function">make</span> <span class="token function">install</span>
<span class="token function">ln</span> -s /usr/lib/libopencc.so /lib64/libopencc.so
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4EC5\u5BF9\u7AD9\u70B9\u7684<code>text/html</code>\u6587\u4EF6\u5185\u5BB9\u66FF\u6362 <code>opencc-filter.lua</code>\u3002</p><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code><span class="token keyword">local</span> content_type <span class="token operator">=</span> ngx<span class="token punctuation">.</span>header<span class="token punctuation">.</span>content_type
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u865A\u62DF\u4E3B\u673A\u4E2D\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u865A\u62DF\u4E3B\u673A\u4E2D\u4F7F\u7528" aria-hidden="true">#</a> \u865A\u62DF\u4E3B\u673A\u4E2D\u4F7F\u7528</h3><div class="language-nginx ext-nginx line-numbers-mode"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6B64\u65F6\u8BBF\u95EE https://tw.curder.com \u7AD9\uFF0C\u5219\u53EF\u4EE5\u770B\u5230\u9875\u9762\u5185\u5BB9\u90FD\u8F6C\u6362\u6210\u4E86\u7E41\u4F53\u3002</p>`,31),d={href:"https://www.1024sou.com/article/117062.html",target:"_blank",rel:"noopener noreferrer"},v=e("NGINX+Lua\u6A21\u5757\u7F16\u8BD1\u5B89\u88C5"),k={href:"https://blog.rexskz.info/support-traditional-chinese-using-openresty-and-opencc.html",target:"_blank",rel:"noopener noreferrer"},m=e("\u7528 OpenResty+OpenCC \u8BA9\u7F51\u7AD9\u652F\u6301\u6B63\u4F53\u4E2D\u6587");function b(g,h){const s=i("ExternalLinkIcon");return l(),c(p,null,[u,n("ul",null,[n("li",null,[n("p",null,[n("a",d,[v,a(s)])])]),n("li",null,[n("p",null,[n("a",k,[m,a(s)])])])])],64)}var _=t(r,[["render",b],["__file","use-the-lua-script-to-process-the-simplified-traditional-conversion-logic-on-the-nginx.html.vue"]]);export{_ as default};
