import{_ as a}from"./php-fpm-status-check.31f6b39a.js";import{_ as p,r as i,o as l,c as t,b as n,a as c,F as o,d as s,e as d}from"./app.4f2e6b79.js";const r={},u=n("h1",{id:"\u4F7F\u7528yum\u65B9\u5F0F\u5B89\u88C5php",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u4F7F\u7528yum\u65B9\u5F0F\u5B89\u88C5php","aria-hidden":"true"},"#"),s(" \u4F7F\u7528yum\u65B9\u5F0F\u5B89\u88C5PHP")],-1),m=n("p",null,[s("\u5728CentOS\u57FA\u7840\u5E93\u4E2D\u4E0D\u5B58\u5728PHP 8.1\uFF0C\u6211\u4EEC\u9700\u8981\u4ECE"),n("code",null,"remi"),s("\u7684\u7B2C\u4E09\u65B9\u4ED3\u5E93\u4E2D\u5B89\u88C5\u5B83\u3002")],-1),h=n("blockquote",null,[n("p",null,"\u4E4B\u6240\u4EE5\u63A8\u8350\u5B83\u662F\u56E0\u4E3A\u5B83\u975E\u5E38\u65B9\u4FBF\u5207\u6362PHP\u7684\u7248\u672C\u3002")],-1),v=s("\u66F4\u591A\u4ED3\u5E93\u76F8\u5173\u4FE1\u606F"),k={href:"https://rpms.remirepo.net/",target:"_blank",rel:"noopener noreferrer"},b=s("\u53C2\u8003\u8FD9\u91CC"),g=s("\u3002"),f=d(`<h3 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum -y <span class="token function">install</span> https://mirrors.aliyun.com/remi/enterprise/remi-release-7.rpm <span class="token comment"># \u4ECE\u963F\u91CC\u4E91\u955C\u50CF\u5904\u5B89\u88C5remi\u6E90</span>
yum repolist all <span class="token operator">|</span><span class="token function">grep</span> php <span class="token comment"># \u68C0\u67E5\u5F53\u524Dyum\u5141\u8BB8\u5B89\u88C5\u7684PHP\u7248\u672C</span>
<span class="token function">sudo</span> yum-config-manager --enable remi-php81 <span class="token comment"># \u9ED8\u8BA4remi\u4ED3\u5E93\u7981\u7528\u7684\uFF0C\u5B9E\u9645\u4F7F\u7528\u65F6\u542F\u7528</span>
<span class="token function">sudo</span> yum <span class="token function">install</span> -y php81 php81-php-fpm php81-php-gd php81-php-mbstring php81-php-mysqlnd php81-php-xml php81-php-opcache php81-php-pecl-zip php81-php-bcmath
<span class="token comment"># sudo mkdir -p /run/php-fpm/remi-php81 # \u521B\u5EFA\u4E00\u4E2Asock\u5B58\u653E\u7684\u76EE\u5F55</span>
<span class="token function">sudo</span> <span class="token function">ln</span> -s  <span class="token variable"><span class="token variable">\`</span><span class="token function">which</span> php81<span class="token variable">\`</span></span> /usr/bin/php <span class="token comment"># \u5EFA\u7ACB\u8F6F\u8FDE\u63A5\u65B9\u4FBF\u547D\u4EE4\u884C\u4F7F\u7528</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6267\u884C\u5B8C\u4E0A\u9762\u7684\u547D\u4EE4\u540E\uFF0CCentOS\u7CFB\u7EDF\u4E0A\u5DF2\u7ECF\u5B89\u88C5\u4E86PHP 8.1, \u5B89\u88C5\u597D\u7684<code>php81</code>\u76EE\u5F55\u5728<code>/etc/opt/remi/php81</code>\u3002</p><h3 id="\u5378\u8F7D" tabindex="-1"><a class="header-anchor" href="#\u5378\u8F7D" aria-hidden="true">#</a> \u5378\u8F7D</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> yum-config-manager --disable remi-php81 <span class="token comment"># \u7981\u7528remi-php81\u4ED3\u5E93</span>
<span class="token function">sudo</span> systemctl stop php81-php-fpm.service
yum remove php81 php81-php-fpm php81-php-gd php81-php-mbstring php81-php-mysqlnd php81-php-xml php81-php-opcache php81-php-pecl-zip php81-php-bcmath
<span class="token function">sudo</span> <span class="token function">rm</span> -rf /etc/opt/remi/remi-php81 <span class="token comment"># \u5220\u9664\u524D\u8BB0\u5F97\u5907\u4EFD\u914D\u7F6E</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u81F3\u6B64\uFF0C\u4F7F\u7528remi\u4ED3\u5E93\u5B89\u88C5\u7684PHP\u5DF2\u7ECF\u6210\u529F\u5378\u8F7D\u3002</p><h3 id="\u591A\u7248\u672C\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u591A\u7248\u672C\u5B89\u88C5" aria-hidden="true">#</a> \u591A\u7248\u672C\u5B89\u88C5</h3><p>\u518D\u5B89\u88C5\u4E00\u4E2APHP 8.0 \u7248\u672C\u4E3A\u4F8B\uFF0C\u6267\u884C\u4E0B\u9762\u7684\u64CD\u4F5C\u5373\u53EF\u5B8C\u6210PHP8.0\u7248\u672C\u7684\u5B89\u88C5\uFF0C\u6587\u4EF6\u5B89\u88C5\u5728 <code>/ect/opt/remi/php80</code>\u76EE\u5F55\u4E0B\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> yum-config-manager --enable remi-php80
<span class="token function">sudo</span> yum <span class="token function">install</span> php80 php80-php-fpm php80-php-gd php80-php-mbstring php80-php-mysqlnd php80-php-xml php80-php-opcache php80-php-pecl-zip php80-php-bcmath
<span class="token comment"># sudo mkdir -p /run/php-fpm/remi-php80 # \u521B\u5EFA\u4E00\u4E2Asock\u5B58\u653E\u7684\u76EE\u5F55</span>
<span class="token comment"># sudo ln -s  \`which php80\` /usr/local/sbin/php # \u5EFA\u7ACB\u8F6F\u8FDE\u63A5\u65B9\u4FBF\u547D\u4EE4\u884C\u4F7F\u7528</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u914D\u7F6Ephp-fpm" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6Ephp-fpm" aria-hidden="true">#</a> \u914D\u7F6Ephp-fpm</h3><p>\u901A\u8FC7\u4F7F\u7528 vim \u7F16\u8F91\u914D\u7F6E\u6587\u4EF6<code>php.ini</code>\u6765\u914D\u7F6EPHP\uFF0CPHP8.1\u7684\u4E3B\u914D\u7F6E\u6587\u4EF6\u5B58\u653E\u4F4D\u7F6E\u5728<code>/etc/opt/remi/php81/php.ini</code>\u3002</p><ul><li>\u5728\u6587\u4EF6\u4E2D\u627E\u5982\u5982\u4E0B\u884C\uFF0C\u53D6\u6D88\u5B83\u7684\u884C\u6CE8\u91CA\u5E76\u5C06\u503C\u66F4\u6539\u4E3A0\u3002</li></ul><div class="language-ini ext-ini line-numbers-mode"><pre class="language-ini"><code><span class="token key attr-name">cgi.fix_pathinfo</span> <span class="token punctuation">=</span> <span class="token value attr-value">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4FDD\u5B58\u6587\u4EF6\u5E76\u9000\u51FA\u7F16\u8F91\u5668\u3002</p><p>\u7F16\u8F91<code>php-fpm</code>\u6587\u4EF6<code>www.conf</code>\uFF0CPHP8.1\u7684\u4E3B\u914D\u7F6E\u6587\u4EF6\u5B58\u653E\u4F4D\u7F6E\u5728<code>/etc/opt/remi/php81/php-fpm.d/www.conf</code>\u3002</p><ul><li><code>php-fpm</code>\u5C06\u5728\u7528\u6237\u548C\u7EC4<code>nginx</code>\u4E0B\u8FD0\u884C\uFF0C\u5C06\u4E0B\u9762\u4E24\u884C\u7684\u503C\u66F4\u6539\u4E3A<code>nginx</code>\uFF0C\u8FD9\u91CC\u7528\u6237\u548C\u7528\u6237\u7EC4\u8BF7\u4FDD\u6301\u4E0E<code>Nginx</code>\u7684\u7528\u6237\u548C\u7528\u6237\u7EC4\u4E00\u81F4\u3002</li></ul><div class="language-ini ext-ini line-numbers-mode"><pre class="language-ini"><code><span class="token comment"># \u7528\u6237\u548C\u7EC4\u4FDD\u6301\u548CNginx\u4E00\u81F4\uFF0C\u4F7F\u7528\u547D\u4EE4 egrep &#39;^(user|group)&#39; /etc/nginx/nginx.conf \u67E5\u770Bnginx\u8FDB\u7A0B\u7684\u7528\u6237</span>
<span class="token key attr-name">user</span> <span class="token punctuation">=</span> <span class="token value attr-value">nginx</span>
<span class="token key attr-name">group</span> <span class="token punctuation">=</span> <span class="token value attr-value">nginx</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>php-fpm</code>\u5C06\u5728\u5957\u63A5\u5B57\u6587\u4EF6\u4E0B\u8FD0\u884C\uFF0C\u800C\u4E0D\u662F\u4F7F\u7528\u670D\u52A1\u5668\u7AEF\u53E3\uFF0C<strong>remi\u4ED3\u5E93</strong>\u65B9\u5F0F\u5B89\u88C5\u7684PHP\u53EF\u4EE5\u5C06\u503C\u6539\u4E3A<code>/run/php-fpm/remi-php81/php-fpm.sock</code>\uFF0C<strong>webtatic\u4ED3\u5E93</strong> \u65B9\u5F0F\u5B89\u88C5\u7684PHP\u8BF7\u5C06&#39;listen&#39;\u503C\u66F4\u6539\u4E3A\u8DEF\u5F84<code>/run/php-fpm/php-fpm.sock</code>\u3002</li></ul><div class="language-ini ext-ini line-numbers-mode"><pre class="language-ini"><code><span class="token key attr-name">listen</span> <span class="token punctuation">=</span> <span class="token value attr-value">127.0.0.1:9000 # \u5982\u679C\u591A\u7248\u672C\u7684\u8BDD\uFF0C\u8BBE\u7F6E\u4E0D\u540C\u7684\u76D1\u542C\u7AEF\u53E3\uFF0C\u6216\u8005\u914D\u7F6E\u4E0D\u540C\u7684socket\u6587\u4EF6\u7684\u65B9\u5F0F</span>
<span class="token comment"># listen = /var/run/php/php8.1-fpm.sock</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u5957\u63A5\u5B57\u6587\u4EF6\u6240\u6709\u8005\u5C06\u662F\u201Cnginx\u201D\u7528\u6237\uFF0C\u6743\u9650\u6A21\u5F0F\u4E3A660\uFF0C\u53D6\u6D88\u6CE8\u91CA\u5E76\u66F4\u6539\u6240\u6709\u503C\u3002</li></ul><div class="language-ini ext-ini line-numbers-mode"><pre class="language-ini"><code><span class="token key attr-name">listen.owner</span> <span class="token punctuation">=</span> <span class="token value attr-value">nginx</span>
<span class="token key attr-name">listen.group</span> <span class="token punctuation">=</span> <span class="token value attr-value">nginx</span>
<span class="token key attr-name">listen.mode</span> <span class="token punctuation">=</span> <span class="token value attr-value">0660</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u5BF9\u4E8E\u73AF\u5883\u53D8\u91CF\uFF0C\u53D6\u6D88\u6CE8\u91CA\u8FD9\u4E9B\u884C\u5E76\u8BBE\u7F6E\u503C\u3002</li></ul><div class="language-ini ext-ini line-numbers-mode"><pre class="language-ini"><code><span class="token key attr-name">env[HOSTNAME]</span> <span class="token punctuation">=</span> <span class="token value attr-value">$HOSTNAME</span>
<span class="token key attr-name">env[PATH]</span> <span class="token punctuation">=</span> <span class="token value attr-value">/usr/local/bin:/usr/bin:/bin</span>
<span class="token key attr-name">env[TMP]</span> <span class="token punctuation">=</span> <span class="token value attr-value">/tmp</span>
<span class="token key attr-name">env[TMPDIR]</span> <span class="token punctuation">=</span> <span class="token value attr-value">/tmp</span>
<span class="token key attr-name">env[TEMP]</span> <span class="token punctuation">=</span> <span class="token value attr-value">/tmp</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4FDD\u5B58\u6587\u4EF6\u5E76\u9000\u51FAvim\u7F16\u8F91\uFF0C\u7136\u540E\u542F\u52A8<code>php-fpm</code>\u5E76\u4F7F\u5176\u5728\u542F\u52A8\u65F6\u8FD0\u884C\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> systemctl start php81-php-fpm.service <span class="token comment"># \u542F\u52A8PHP8.1</span>
<span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> php81-php-fpm.service <span class="token comment"># \u5F00\u673A\u81EA\u542F\u52A8PHP8.1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u68C0\u67E5php-fpm" tabindex="-1"><a class="header-anchor" href="#\u68C0\u67E5php-fpm" aria-hidden="true">#</a> \u68C0\u67E5php-fpm</h2><p>\u68C0\u67E5\u7AEF\u53E3\u662F\u5426\u6B63\u5E38\u6253\u5F00\u8FD0\u884C\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">netstat</span> -tunpl<span class="token operator">|</span><span class="token function">grep</span> <span class="token number">9000</span> 
<span class="token comment"># sudo netstat -pl | grep php-fpm.sock # \u6216\u8005\u67E5\u770Bsocket\u6587\u4EF6</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+a+'" alt="PHP Fpm status check"></p><p>\u81F3\u6B64\uFF0Cphp-fpm \u8FDB\u7A0B\u5DF2\u7ECF\u542F\u52A8\u3002</p>',30);function x(P,y){const e=i("ExternalLinkIcon");return l(),t(o,null,[u,m,h,n("p",null,[v,n("a",k,[b,c(e)]),g]),f],64)}var w=p(r,[["render",x],["__file","centos-7-uses-yum-way-to-install-and-configure-php-fpm.html.vue"]]);export{w as default};
