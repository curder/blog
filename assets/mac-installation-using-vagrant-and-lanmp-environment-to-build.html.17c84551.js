import{_ as e,e as n}from"./app.0d2765f0.js";const s={},a=n(`<h1 id="lanmp\u73AF\u5883\u642D\u5EFA" tabindex="-1"><a class="header-anchor" href="#lanmp\u73AF\u5883\u642D\u5EFA" aria-hidden="true">#</a> LANMP\u73AF\u5883\u642D\u5EFA</h1><p>LANMP \u73AF\u5883\u5305\u542B\u5982\u4E0B\u670D\u52A1\u5668\u8F6F\u4EF6\u3002</p><table><thead><tr><th style="text-align:center;">\u7F29\u5199</th><th style="text-align:left;">\u89E3\u91CA</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td style="text-align:center;">L</td><td style="text-align:left;">Linux\uFF0C\u8FD9\u91CC\u4EE5Ubuntu12.04\u7CFB\u7EDF\u4E3A\u4F8B</td><td>12.04</td></tr><tr><td style="text-align:center;">A</td><td style="text-align:left;">Apache WebServer</td><td>2.4.7</td></tr><tr><td style="text-align:center;">N</td><td style="text-align:left;">Nginx WebServer</td><td>1.4.6</td></tr><tr><td style="text-align:center;">M</td><td style="text-align:left;">MySQL Database Server</td><td>5.5.57</td></tr><tr><td style="text-align:center;">P</td><td style="text-align:left;">PHP or php-fpm</td><td>5.5.9</td></tr></tbody></table><h3 id="\u8FDB\u5165\u5230vagrant\u865A\u62DF\u673A" tabindex="-1"><a class="header-anchor" href="#\u8FDB\u5165\u5230vagrant\u865A\u62DF\u673A" aria-hidden="true">#</a> \u8FDB\u5165\u5230vagrant\u865A\u62DF\u673A</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>vagrant shh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u66F4\u65B0ubuntu\u7CFB\u7EDF\u7684\u6E90" tabindex="-1"><a class="header-anchor" href="#\u66F4\u65B0ubuntu\u7CFB\u7EDF\u7684\u6E90" aria-hidden="true">#</a> \u66F4\u65B0Ubuntu\u7CFB\u7EDF\u7684\u6E90</h3><p>\u6267\u884C\u4E0B\u9762\u7684\u547D\u4EE4\u5BF9\u539F\u59CB\u6E90\u8FDB\u884C\u5907\u4EFD</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">cp</span> /etc/apt/sources.list /etc/apt/sources.list.bak
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5C06\u4E0B\u9762\u7684\u5185\u5BB9\u66FF\u6362<code>/etc/apt/sources.list</code> \u6587\u4EF6\u7684\u6E90\u5185\u5BB9\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>deb http://mirrors.aliyun.com/ubuntu/ trusty main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ trusty-security main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ trusty-updates main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ trusty-proposed main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ trusty-backports main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ trusty main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ trusty-security main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ trusty-updates main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ trusty-proposed main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ trusty-backports main restricted universe multiverse
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6267\u884C\u5B8C\u4E0A\u9762\u7684\u64CD\u4F5C\u540E\uFF0C\u518D\u6267\u884C\u4E0B\u9762\u7684\u547D\u4EE4\u5BF9\u6E90\u8FDB\u884C\u66F4\u65B0\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>\u5C06\u9ED8\u8BA4\u56FD\u5916\u7684\u6E90\u6539\u6210aliyun\u7684\u6E90</p></blockquote><h3 id="nginx\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#nginx\u5B89\u88C5" aria-hidden="true">#</a> Nginx\u5B89\u88C5</h3><p>\u4F7F\u7528<code>apt-get</code>\u547D\u4EE4\u5BF9nginx\u670D\u52A1\u5668\u8FDB\u884C\u5B89\u88C5\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u67E5\u770B\u5B89\u88C5\u6548\u679C</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>nginx -v
<span class="token function">curl</span> -I <span class="token string">&#39;http://127.0.0.1&#39;</span>
<span class="token function">wget</span> <span class="token string">&#39;http://127.0.0.1&#39;</span>
telnet <span class="token number">127.0</span>.0.1 <span class="token number">80</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="apache\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#apache\u5B89\u88C5" aria-hidden="true">#</a> Apache\u5B89\u88C5</h3><p>\u4F7F\u7528<code>apt-get</code>\u547D\u4EE4\u5BF9apache\u670D\u52A1\u5668\u8FDB\u884C\u5B89\u88C5\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> apache2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u67E5\u770B\u5B89\u88C5\u6548\u679C</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>apache2 -v
<span class="token function">curl</span> -I <span class="token string">&#39;http://127.0.0.1&#39;</span>
<span class="token function">wget</span> <span class="token string">&#39;http://127.0.0.1&#39;</span>
telnet <span class="token number">127.0</span>.0.1 <span class="token number">80</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u6B64\u65F6\u6211\u4EEC\u6267\u884C\u6D4B\u8BD5\u65F6\uFF0C\u80AF\u5B9A\u4F1A\u629B\u51FA\u9519\u8BEF\u3002\u56E0\u4E3Anginx\u548Capache\u8FD9\u4E24\u6B3Ewebserver\u7684\u9ED8\u8BA4\u7AEF\u53E3\u90FD\u662F80\u7AEF\u53E3\u3002</p></blockquote><ul><li>\u505C\u6389\u53E6\u4E00\u4E2A\u670D\u52A1\u5668</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> /etc/init.d/nginx stop
<span class="token function">sudo</span> /etc/init.d/apache2 stop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u4FEE\u6539web\u670D\u52A1\u5668\u7AEF\u53E3</li></ul><p>\u4F8B\u5982\u4FEE\u6539apache2\u7684\u7AEF\u53E3\uFF0C\u914D\u7F6E\u6587\u4EF6\u5728<code>/etc/apache2/ports.conf</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">vi</span> /etc/apache2/ports.conf

Listen <span class="token number">8888</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5C06apache\u7684\u76D1\u542C\u7AEF\u53E3\u8BBE\u7F6E\u62108888\u3002</p><h3 id="mysql-\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#mysql-\u5B89\u88C5" aria-hidden="true">#</a> MySQL \u5B89\u88C5</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> mysql-server mysql-client
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E0A\u8FF0\u547D\u4EE4\u5206\u522B\u5B89\u88C5\u4E86MySQL\u7684\u670D\u52A1\u7AEF\u548CMySQL\u7684\u5BA2\u6237\u7AEF\u3002</p><blockquote><p>\u5B89\u88C5\u671F\u95F4\u4F1A\u63D0\u793A\u8F93\u5165\u4E3AMySQL\u8BBE\u7F6Eroot\u5BC6\u7801\uFF0C\u5982\u679C\u662F\u672C\u5730\u5F00\u53D1\u73AF\u5883\uFF0C\u53EF\u4EE5\u76F4\u63A5 enter \u4E0D\u8BBE\u7F6E\u5BC6\u7801\u3002</p></blockquote><p>\u67E5\u770B\u5B89\u88C5\u6548\u679C</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>mysql -uroot -p
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8FDB\u5165MySQL\u7684\u4EA4\u4E92\u754C\u9762\u3002</p><h3 id="php\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#php\u5B89\u88C5" aria-hidden="true">#</a> PHP\u5B89\u88C5</h3><p>\u4F7F\u7528\u4E0B\u9762\u7684\u547D\u4EE4\u5B89\u88C5php5.5.9\u548C\u4E00\u4E9B\u5E38\u7528\u7684php\u62D3\u5C55\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> php5-cli php5-mcrypt php5-mysql php5-gd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="apache2\u76F8\u5173\u8BBE\u7F6E" tabindex="-1"><a class="header-anchor" href="#apache2\u76F8\u5173\u8BBE\u7F6E" aria-hidden="true">#</a> Apache2\u76F8\u5173\u8BBE\u7F6E</h4><ul><li>\u652F\u6301apache2\u7684php\u6A21\u5757</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> libapache2-mod-php5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u5F00\u542Frewrite\u529F\u80FD</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> a2enmod rewrite
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="nginx\u76F8\u5173\u8BBE\u7F6E" tabindex="-1"><a class="header-anchor" href="#nginx\u76F8\u5173\u8BBE\u7F6E" aria-hidden="true">#</a> Nginx\u76F8\u5173\u8BBE\u7F6E</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> php5-cgi php5-fpm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5B89\u88C5php-fpm\uFF0C\u8BA9nginx\u652F\u6301fastcgi\u3002</p><p>\u4FEE\u6539\u62109000\u7AEF\u53E3 \uFF0C\u9ED8\u8BA4sock\u6A21\u5F0F</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /etc/php5/fpm/pool.d
<span class="token function">sudo</span> <span class="token function">vim</span> www.conf <span class="token comment"># search listen = 127.0.0.1:9000</span>
<span class="token function">sudo</span> /etc/init.d/php5-fpm restart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,50);function i(t,d){return a}var r=e(s,[["render",i],["__file","mac-installation-using-vagrant-and-lanmp-environment-to-build.html.vue"]]);export{r as default};