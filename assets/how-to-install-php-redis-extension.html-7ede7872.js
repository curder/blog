import{_ as a,M as n,p as i,q as d,R as e,t as p,N as o,a1 as t}from"./framework-96b046e1.js";const c={},r=t(`<h1 id="homestead-安装-phpredis-扩展" tabindex="-1"><a class="header-anchor" href="#homestead-安装-phpredis-扩展" aria-hidden="true">#</a> Homestead 安装 phpredis 扩展</h1><h2 id="编译php-redis扩展" tabindex="-1"><a class="header-anchor" href="#编译php-redis扩展" aria-hidden="true">#</a> 编译php redis扩展</h2><p>下面以编译php7.2版本为例，执行下面的命令之前先切换到<code>root</code>用户。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/phpredis/phpredis.git

<span class="token builtin class-name">cd</span> phpredis

/usr/bin/phpize7.2

./configure --with-php-config<span class="token operator">=</span>/usr/bin/php-config7.2

<span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装好的<code>redis.so</code>会存放在<code>/usr/lib/php/20170718/</code>目录下。</p><p>如果编译的不是这个版本的php，可以使用下面的命令获取扩展路径:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php -i<span class="token operator">|</span><span class="token function">grep</span> extension_dir
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="引入扩展" tabindex="-1"><a class="header-anchor" href="#引入扩展" aria-hidden="true">#</a> 引入扩展</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;extension=redis.ini&#39;</span> <span class="token operator">&gt;</span> /etc/php/7.2/mods-available/redis.ini
<span class="token function">sudo</span> <span class="token function">ln</span> <span class="token parameter variable">-s</span> /etc/php/7.2/mods-available/redis.ini /etc/php/7.2/fpm/conf.d/20-redis.ini
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注意：client模式也需要加上这个扩展，在<code>/etc/php/7.2/cli/php.ini</code>主配置文件也加上这个扩展。</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;extension=redis.so&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/php/7.2/cli/php.ini
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="重启进程" tabindex="-1"><a class="header-anchor" href="#重启进程" aria-hidden="true">#</a> 重启进程</h2><p>通过下面的命令重启php-fpm进程，打印<code>phpinfo();</code>查看是否成功安装拓展。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> systemctl restart php7.2-fpm.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>如果是其他php扩展使用相同的方式即可。</p></blockquote><h2 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接" aria-hidden="true">#</a> 参考链接</h2>`,16),l={href:"https://mudew.com/20180223/Homestead%E5%AE%89%E8%A3%85phpredis%E6%89%A9%E5%B1%95/",target:"_blank",rel:"noopener noreferrer"};function h(u,m){const s=n("ExternalLinkIcon");return i(),d("div",null,[r,e("ul",null,[e("li",null,[e("a",l,[p("Homestead 安装 phpredis 扩展"),o(s)])])])])}const b=a(c,[["render",h],["__file","how-to-install-php-redis-extension.html.vue"]]);export{b as default};
