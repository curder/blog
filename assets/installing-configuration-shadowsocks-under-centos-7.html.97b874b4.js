import{_ as r,r as t,o as d,c as l,b as s,a,w as i,F as u,d as n,e as o}from"./app.25d4da55.js";const h={},k=s("h1",{id:"centos7\u4E0B\u5B89\u88C5\u914D\u7F6E-shadowsocks",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#centos7\u4E0B\u5B89\u88C5\u914D\u7F6E-shadowsocks","aria-hidden":"true"},"#"),n(" CentOS7\u4E0B\u5B89\u88C5\u914D\u7F6E shadowsocks")],-1),v={href:"https://github.com/shadowsocks/",target:"_blank",rel:"noopener noreferrer"},m=n("Shadowsocks"),b=n("\u662F\u5F53\u524D\u6BD4\u8F83\u53D7\u6B22\u8FCE\u7684\u79D1\u5B66\u4E0A\u7F51\u5DE5\u5177\uFF0C\u672C\u6587\u5C06\u4ECB\u7ECD\u5982\u4F55\u5728 CentOS 7\u4E0B\u5B89\u88C5\u548C\u914D\u7F6E Shadowsocks \u670D\u52A1\u3002"),_=n("\u5982\u679C\u9700\u8981\u79D1\u5B66\u4E0A\u7F51\uFF0C\u5F53\u524D\u670D\u52A1\u5668\u5FC5\u987B\u4E0D\u5728\u5899\u5185\uFF0C\u5426\u5219\u65E0\u6CD5\u8FBE\u5230\u9884\u671F\u6548\u679C\u3002 \u672C\u6587\u53EA\u4ECB\u7ECD\u4E86\u670D\u52A1\u5668\u5B89\u88C5Shadowsocks\u548C\u7B80\u5355\u914D\u7F6E\u3002\u5982\u679C\u8981\u5728\u5BA2\u6237\u7AEF\u6B63\u5E38\u4F7F\u7528\u53EF\u80FD\u8FD8\u9700\u8981\u4E00\u4E9B\u4EE3\u7406\u8F6F\u4EF6\u3002\u6BD4\u5982\uFF1A"),g={href:"https://github.com/shadowsocks/shadowsocks-windows/wiki/Shadowsocks-Windows-%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E",target:"_blank",rel:"noopener noreferrer"},f=n("Windows"),w=n("\u3001"),q={href:"https://github.com/shadowsocks/ShadowsocksX-NG",target:"_blank",rel:"noopener noreferrer"},y=n("MacOSX"),x=n("\u3001"),S={href:"https://github.com/shadowsocks/shadowsocks-android",target:"_blank",rel:"noopener noreferrer"},j=n("Android"),C=n("\u3001"),E={href:"https://github.com/shadowsocks/shadowsocks-iOS/wiki/Help",target:"_blank",rel:"noopener noreferrer"},O=n("IOS"),B=n("\u6216\u8005\u4F7F\u7528AppStore\u641C\u7D22"),F=s("code",null,"OpenWingy",-1),N=n("\u8FD9\u4E2A\u8F6F\u4EF6\u3002"),A=s("h2",{id:"\u5B89\u88C5",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u5B89\u88C5","aria-hidden":"true"},"#"),n(" \u5B89\u88C5")],-1),L=s("h3",{id:"\u5B89\u88C5epel\u548Cpip",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u5B89\u88C5epel\u548Cpip","aria-hidden":"true"},"#"),n(" \u5B89\u88C5epel\u548Cpip")],-1),V=s("p",null,"\u5B89\u88C5epel\u6269\u5C55\u6E90\uFF0C\u5E76\u91C7\u7528Python\u5305\u7BA1\u7406\u5DE5pip\u5B89\u88C5\u3002",-1),I={href:"https://pip.pypa.io/en/stable/installing/",target:"_blank",rel:"noopener noreferrer"},W=n("pip"),P=n("\u662F python \u7684\u5305\u7BA1\u7406\u5DE5\u5177\u3002\u5728\u672C\u6587\u4E2D\u5C06\u4F7F\u7528 python \u7248\u672C\u7684 shadowsocks\uFF0C\u6B64\u7248\u672C\u7684 shadowsocks \u5DF2\u53D1\u5E03\u5230 pip \u4E0A\uFF0C\u56E0\u6B64\u9700\u8981\u901A\u8FC7 pip \u547D\u4EE4\u6765\u5B89\u88C5\u3002"),R=o(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> yum -y <span class="token function">install</span> epel-release
<span class="token function">sudo</span> yum -y <span class="token function">install</span> python-pip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5B89\u88C5shadowsocks" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5shadowsocks" aria-hidden="true">#</a> \u5B89\u88C5Shadowsocks</h3><p>\u5728\u547D\u4EE4\u884C\u8FD0\u884C\u4E0B\u9762\u7684\u547D\u4EE4\u5B89\u88C5shadowsocks\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pip <span class="token function">install</span> --upgrade pip
pip <span class="token function">install</span> shadowsocks
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a> \u914D\u7F6E</h2><h3 id="\u666E\u901A\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u666E\u901A\u914D\u7F6E" aria-hidden="true">#</a> \u666E\u901A\u914D\u7F6E</h3><p>\u5B89\u88C5\u5B8C\u6210\u540E\uFF0C\u9700\u8981\u521B\u5EFA\u914D\u7F6E\u6587\u4EF6<code>/etc/shadowsocks.json</code>\uFF0C\u5185\u5BB9\u5982\u4E0B\uFF1A</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;server&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0.0.0.0&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;server_port&quot;</span><span class="token operator">:</span> <span class="token number">1111</span><span class="token punctuation">,</span>
  <span class="token property">&quot;local_address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;local_port&quot;</span><span class="token operator">:</span> <span class="token number">1080</span><span class="token punctuation">,</span>
  <span class="token property">&quot;password&quot;</span><span class="token operator">:</span> <span class="token string">&quot;mypassword&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;timeout&quot;</span><span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span>
  <span class="token property">&quot;method&quot;</span><span class="token operator">:</span> <span class="token string">&quot;aes-256-cfb&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;fast_open&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>\u5B57\u6BB5</th><th>\u8BF4\u660E</th><th>\u662F\u5426\u5FC5\u987B</th></tr></thead><tbody><tr><td>server</td><td>\u670D\u52A1\u7AEF\u76D1\u542C\u5730\u5740\uFF0C\u4F7F\u7528<code>0.0.0.0</code>\u4E5F\u53EF\u4EE5</td><td>\u662F</td></tr><tr><td>server_port</td><td>\u670D\u52A1\u7AEF\u7AEF\u53E3</td><td>\u662F</td></tr><tr><td>local_address</td><td>\u672C\u5730\u76D1\u542C\u5730\u5740,\u9ED8\u8BA4\u5373\u53EF</td><td>\u5426</td></tr><tr><td>local_port</td><td>\u672C\u5730\u76D1\u542C\u7AEF\u53E3\uFF0C\u9700\u8981\u8DDF\u5176\u4ED6\u8FDB\u7A0B\u4E0D\u91CD\u590D</td><td>\u5426</td></tr><tr><td>password</td><td>\u5BC6\u7801</td><td>\u662F</td></tr><tr><td>timeout</td><td>\u8D85\u65F6\u65F6\u95F4\uFF08\u79D2\uFF09</td><td>\u5426</td></tr><tr><td>method</td><td>\u52A0\u5BC6\u65B9\u6CD5\uFF0C\u53EF\u9009<code>aes-128-cfb</code>, <code>aes-192-cfb</code>, <code>aes-256-cfb</code>, <code>bf-cfb</code>, <code>cast5-cfb</code>, <code>des-cfb</code>, <code>rc4-md5</code>, <code>chacha20</code>, <code>salsa20</code>, <code>rc4</code>, <code>table</code></td><td>\u662F</td></tr><tr><td>fast_open</td><td>\u662F\u5426\u542F\u7528TCP-Fast-Open\uFF0Ctrue\u6216\u8005false</td><td>\u5426</td></tr></tbody></table><blockquote><p>\u4EE5\u4E0A\u4E09\u9879\u4FE1\u606F\u5728\u914D\u7F6E shadowsocks \u5BA2\u6237\u7AEF\u65F6\u9700\u8981\u914D\u7F6E\u4E00\u81F4\uFF0C\u5177\u4F53\u8BF4\u660E\u53EF\u67E5\u770B shadowsocks \u7684\u5E2E\u52A9\u6587\u6863\u3002</p></blockquote><h3 id="\u914D\u7F6E\u591A\u4E2A\u7528\u6237" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u591A\u4E2A\u7528\u6237" aria-hidden="true">#</a> \u914D\u7F6E\u591A\u4E2A\u7528\u6237</h3><p>\u9664\u4E86\u4E0A\u9762\u7684\u914D\u7F6E\uFF0C\u4E5F\u53EF\u80FD\u4F7F\u7528\u591A\u7AEF\u53E3\u591A\u5BC6\u7801\u914D\u7F6E\uFF0C\u5F7C\u6B64\u6CA1\u6709\u5E72\u6270\uFF0C\u5185\u5BB9\u5982\u4E0B\uFF1A</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;server&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0.0.0.0&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;local_address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;local_port&quot;</span><span class="token operator">:</span> <span class="token number">1080</span><span class="token punctuation">,</span>
  <span class="token property">&quot;port_password&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u6BCF\u4E2A\u7AEF\u53E3\u5BF9\u5E94\u4E00\u4E2A\u5BC6\u7801</span>
    <span class="token property">&quot;1111&quot;</span><span class="token operator">:</span> <span class="token string">&quot;password1&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;1112&quot;</span><span class="token operator">:</span> <span class="token string">&quot;password2&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;1113&quot;</span><span class="token operator">:</span> <span class="token string">&quot;password3&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;timeout&quot;</span><span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span>
  <span class="token property">&quot;method&quot;</span><span class="token operator">:</span> <span class="token string">&quot;aes-256-cfb&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;fast_open&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u8FDB\u7A0B\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#\u8FDB\u7A0B\u7BA1\u7406" aria-hidden="true">#</a> \u8FDB\u7A0B\u7BA1\u7406</h2><ul><li>\u542F\u52A8\u8FDB\u7A0B</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> ssserver -c /etc/shadowsocks.json -d start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u5173\u95ED\u8FDB\u7A0B</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> ssserver -c /etc/shadowsocks.json -d stop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u91CD\u542F\u8FDB\u7A0B</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> ssserver -c /etc/shadowsocks.json -d restart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u68C0\u67E5\u8FDB\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u68C0\u67E5\u8FDB\u7A0B" aria-hidden="true">#</a> \u68C0\u67E5\u8FDB\u7A0B</h2><p>\u5206\u522B\u4F7F\u7528<code>ps</code>\u548C<code>netstat</code>\u547D\u4EE4\u67E5\u770B\u8FDB\u7A0B\u548C\u7AEF\u53E3</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> yum -y <span class="token function">install</span> net-tools
<span class="token function">ps</span> aux <span class="token operator">|</span><span class="token function">grep</span> shadowsocks
<span class="token function">netstat</span> -tunpl<span class="token operator">|</span><span class="token function">grep</span> <span class="token number">1111</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,23),T=["src"],X=s("h2",{id:"\u4F7F\u7528supervisord\u7BA1\u7406\u8FDB\u7A0B",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u4F7F\u7528supervisord\u7BA1\u7406\u8FDB\u7A0B","aria-hidden":"true"},"#"),n(" \u4F7F\u7528Supervisord\u7BA1\u7406\u8FDB\u7A0B")],-1),D=n("\u5982\u679C\u672A\u4F7F\u7528"),G=n("Supervisord\u7BA1\u7406"),H=n("\u540E\u53F0\u8FDB\u7A0B\uFF0C\u53EF\u4EE5\u53C2\u8003\u6587\u7AE0\u4E0B\u9762\u7684\u8FDE\u63A5\u8BBE\u7F6E\u5F00\u673A\u81EA\u542F\u52A8\u7B49\u3002"),M=o(`<h3 id="\u7BA1\u7406\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u7BA1\u7406\u914D\u7F6E" aria-hidden="true">#</a> \u7BA1\u7406\u914D\u7F6E</h3><p>\u9488\u5BF9shadowsocks\u7684Supervisord\u7684\u914D\u7F6E\u53EF\u4EE5\u53C2\u8003\u4E0B\u9762\u7684\u914D\u7F6E\u3002</p><div class="language-ini ext-ini line-numbers-mode"><pre class="language-ini"><code><span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">program:shadowsocks</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">process_name</span> <span class="token punctuation">=</span> <span class="token value attr-value">%(program_name)s_%(process_num)02d</span>
<span class="token key attr-name">command</span> <span class="token punctuation">=</span> <span class="token value attr-value">ssserver -c /etc/shadowsocks.json</span>
<span class="token key attr-name">autostart</span> <span class="token punctuation">=</span> <span class="token value attr-value">true</span>
<span class="token key attr-name">autorestart</span> <span class="token punctuation">=</span> <span class="token value attr-value">true</span>
<span class="token key attr-name">user</span> <span class="token punctuation">=</span> <span class="token value attr-value">nobody</span>
<span class="token key attr-name">numprocs</span> <span class="token punctuation">=</span> <span class="token value attr-value">1</span>
<span class="token key attr-name">redirect_stderr</span> <span class="token punctuation">=</span> <span class="token value attr-value">true</span>
<span class="token key attr-name">stdout_logfile</span> <span class="token punctuation">=</span> <span class="token value attr-value">/var/log/shdowsocks.out.log</span>
<span class="token key attr-name">stderr_logfile</span> <span class="token punctuation">=</span> <span class="token value attr-value">/var/log/shdowsocks.err.log</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u91CD\u8F7D\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u91CD\u8F7D\u914D\u7F6E" aria-hidden="true">#</a> \u91CD\u8F7D\u914D\u7F6E</h3><p>\u91CD\u8F7D\u914D\u7F6E\u4E4B\u524D\u8BF7\u5148\u4FDD\u8BC1shadowsocks\u8FDB\u7A0B\u672A\u542F\u52A8\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> supervisorctl reread <span class="token operator">&amp;&amp;</span> <span class="token function">sudo</span> supervisorctl update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u53C2\u8003\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u94FE\u63A5" aria-hidden="true">#</a> \u53C2\u8003\u94FE\u63A5</h2>`,7),U={href:"https://morning.work/page/2015-12/install-shadowsocks-on-centos-7.html",target:"_blank",rel:"noopener noreferrer"},$=n("\u5728 CentOS 7 \u4E0B\u5B89\u88C5\u914D\u7F6E shadowsocks"),z={href:"https://segmentfault.com/a/1190000010639190",target:"_blank",rel:"noopener noreferrer"},J=n("\u963F\u91CC\u4E91centos 7\u4E0B\u642D\u5EFAshadowsocks");function K(c,Q){const e=t("ExternalLinkIcon"),p=t("RouterLink");return d(),l(u,null,[k,s("p",null,[s("a",v,[m,a(e)]),b]),s("blockquote",null,[s("p",null,[_,s("a",g,[f,a(e)]),w,s("a",q,[y,a(e)]),x,s("a",S,[j,a(e)]),C,s("a",E,[O,a(e)]),B,F,N])]),A,L,V,s("p",null,[s("a",I,[W,a(e)]),P]),R,s("img",{src:c.$withBase("/images/os/centos7/installing-configuration-shadowsocks-under-centos-7/ps-and-netstat-check-shadowsocks-status.png"),alt:""},null,8,T),X,s("p",null,[D,a(p,{to:"/os/centos/how-to-use-supervisord-manager-processes.html"},{default:i(()=>[G]),_:1}),H]),M,s("ul",null,[s("li",null,[s("p",null,[s("a",U,[$,a(e)])])]),s("li",null,[s("p",null,[s("a",z,[J,a(e)])])])])],64)}var Z=r(h,[["render",K],["__file","installing-configuration-shadowsocks-under-centos-7.html.vue"]]);export{Z as default};
