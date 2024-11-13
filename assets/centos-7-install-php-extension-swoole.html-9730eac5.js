import{_ as i,M as l,p as r,q as c,R as e,t as a,N as s,a1 as o}from"./framework-ff09ffed.js";const t={},p=e("h1",{id:"centos-下安装-php-拓展-swoole",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#centos-下安装-php-拓展-swoole","aria-hidden":"true"},"#"),a(" CentOS 下安装 PHP 拓展 Swoole")],-1),d={href:"https://www.swoole.com/",target:"_blank",rel:"noopener noreferrer"},h=o(`<h2 id="系统版本" tabindex="-1"><a class="header-anchor" href="#系统版本" aria-hidden="true">#</a> 系统版本</h2><ul><li>CentOS Linux release 7.5.1804 (Core)</li><li>PHP 7.1.18</li></ul><h2 id="使用源码安装" tabindex="-1"><a class="header-anchor" href="#使用源码安装" aria-hidden="true">#</a> 使用源码安装</h2><h3 id="安装系统依赖" tabindex="-1"><a class="header-anchor" href="#安装系统依赖" aria-hidden="true">#</a> 安装系统依赖</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> yum <span class="token function">install</span> <span class="token parameter variable">-y</span> gcc glibc-headers gcc-c++
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="下载-swoole-源码并安装" tabindex="-1"><a class="header-anchor" href="#下载-swoole-源码并安装" aria-hidden="true">#</a> 下载 Swoole 源码并安装</h3>`,6),u={href:"https://github.com/swoole/swoole-src/releases",target:"_blank",rel:"noopener noreferrer"},m=e("code",null,"v4.0.0-rc1",-1),v=o(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /usr/local/src/ <span class="token operator">&amp;&amp;</span> <span class="token function">wget</span> https://github.com/swoole/swoole-src/archive/v4.0.0-rc1.tar.gz <span class="token parameter variable">-O</span> swoole.v4.0.0-rc1.tar.gz
<span class="token function">tar</span> xf swoole.v4.0.0-rc1.tar.gz <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> swoole.v4.0.0-rc1
/usr/local/php82/bin/phpize --with-php-config<span class="token operator">=</span>/usr/local/php82/bin/php-config
./configure --with-php-config<span class="token operator">=</span>/usr/local/php82/bin/php-config
<span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置php-ini" tabindex="-1"><a class="header-anchor" href="#配置php-ini" aria-hidden="true">#</a> 配置php.ini</h3><p>通过命令<code>php --ini</code>查到<code>php.ini</code>文件所在路径，这里是<code>/usr/local/php82/etc/php.ini</code>，编辑它，在合适的位置新增下面行。</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token key attr-name">extension</span> <span class="token punctuation">=</span> <span class="token value attr-value">swoole.so</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="验证" tabindex="-1"><a class="header-anchor" href="#验证" aria-hidden="true">#</a> 验证</h3><p>执行下面的命令检查是否成功引入 Swoole 拓展。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php <span class="token parameter variable">-m</span> <span class="token operator">|</span><span class="token function">grep</span> swoole
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,7);function b(g,f){const n=l("ExternalLinkIcon");return r(),c("div",null,[p,e("p",null,[e("a",d,[a("Swoole 官网"),s(n)])]),h,e("p",null,[a("查看最新的"),e("a",u,[a("Swoole 源码"),s(n)]),a("，这里选择"),m,a("版本安装。")]),v])}const _=i(t,[["render",b],["__file","centos-7-install-php-extension-swoole.html.vue"]]);export{_ as default};