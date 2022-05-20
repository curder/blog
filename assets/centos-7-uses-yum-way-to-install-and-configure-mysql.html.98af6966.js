import{_ as r,r as e,o,c as d,b as s,a as n,w as c,F as p,e as l,d as a}from"./app.25d4da55.js";const u={},m=l(`<h1 id="centos7\u4F7F\u7528yum\u65B9\u5F0F\u5B89\u88C5\u548C\u914D\u7F6Emysql" tabindex="-1"><a class="header-anchor" href="#centos7\u4F7F\u7528yum\u65B9\u5F0F\u5B89\u88C5\u548C\u914D\u7F6Emysql" aria-hidden="true">#</a> CentOS7\u4F7F\u7528yum\u65B9\u5F0F\u5B89\u88C5\u548C\u914D\u7F6EMySQL</h1><p>\u4EE5\u5B89\u88C5 MySQL 5.7 \u4E3A\u4F8B\u3002</p><h2 id="\u5B89\u88C5mysql" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5mysql" aria-hidden="true">#</a> \u5B89\u88C5MySQL</h2><h3 id="\u4F7F\u7528yum\u547D\u4EE4\u5B89\u88C5mysql" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528yum\u547D\u4EE4\u5B89\u88C5mysql" aria-hidden="true">#</a> \u4F7F\u7528yum\u547D\u4EE4\u5B89\u88C5MySQL</h3><p>\u4F7F\u7528yum\u547D\u4EE4\u4E4B\u524D\uFF0C\u9700\u8981\u5B89\u88C5MySQL5.7\u7684rpm\u4ED3\u5E93\u3002\u6267\u884C\u4E0B\u9762\u7684\u547D\u4EE4\u5B89\u88C5MySQL</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">wget</span> https://dev.mysql.com/get/mysql57-community-release-el7-11.noarch.rpm
<span class="token function">rpm</span> -ivh mysql57-community-release-el7-11.noarch.rpm
<span class="token function">sudo</span> yum <span class="token function">install</span> -y mysql-server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u542F\u52A8mysql" tabindex="-1"><a class="header-anchor" href="#\u542F\u52A8mysql" aria-hidden="true">#</a> \u542F\u52A8MySQL</h2><h3 id="\u5B88\u62A4\u8FDB\u7A0B\u65B9\u5F0Fmysql" tabindex="-1"><a class="header-anchor" href="#\u5B88\u62A4\u8FDB\u7A0B\u65B9\u5F0Fmysql" aria-hidden="true">#</a> \u5B88\u62A4\u8FDB\u7A0B\u65B9\u5F0FMySQL</h3><p>\u6267\u884C\u4E0B\u9762\u7684\u547D\u4EE4\u542F\u52A8<code>mysql</code>\u5E76\u4F7F\u5176\u5728CentOS\u7CFB\u7EDF\u542F\u52A8\u65F6\u8FD0\u884C\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> systemctl start mysqld <span class="token operator">&amp;&amp;</span> <span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> mysqld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u4F7F\u7528supervisord\u7BA1\u7406\u8FDB\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528supervisord\u7BA1\u7406\u8FDB\u7A0B" aria-hidden="true">#</a> \u4F7F\u7528supervisord\u7BA1\u7406\u8FDB\u7A0B</h3>`,11),h=a("supervisord"),v=a("\u7684\u8FDB\u7A0B\u7BA1\u7406\u53C2\u8003\u8FD9\u91CC\u3002"),b=l(`<h4 id="mysql\u7684supervisord\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#mysql\u7684supervisord\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> MySQL\u7684supervisord\u914D\u7F6E\u6587\u4EF6</h4><p>\u9ED8\u8BA4\u7684 supervisord \u7684\u8FDB\u7A0B\u6587\u4EF6\u4FDD\u5B58\u5728<code>/etc/supervisord.d/mysql.ini</code>\uFF0C\u5185\u5BB9\u5982\u4E0B\uFF1A</p><div class="language-ini ext-ini line-numbers-mode"><pre class="language-ini"><code><span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">program:mysql</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">command</span> <span class="token punctuation">=</span> <span class="token value attr-value">/usr/sbin/mysqld --user=mysql</span>
<span class="token key attr-name">user</span> <span class="token punctuation">=</span> <span class="token value attr-value">root</span>
<span class="token key attr-name">autostart</span> <span class="token punctuation">=</span> <span class="token value attr-value">true</span>
<span class="token key attr-name">autorestart</span> <span class="token punctuation">=</span> <span class="token value attr-value">true</span>
<span class="token key attr-name">stdout_logfile</span> <span class="token punctuation">=</span> <span class="token value attr-value">/var/log/mysql.out.log</span>
<span class="token key attr-name">stderr_logfile</span> <span class="token punctuation">=</span> <span class="token value attr-value">/var/log/mysql.err.log</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u91CD\u8F7D\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u91CD\u8F7D\u914D\u7F6E" aria-hidden="true">#</a> \u91CD\u8F7D\u914D\u7F6E</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>supervisorctl reread <span class="token operator">&amp;&amp;</span> supervisorctl update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6267\u884C\u5B8C\u4E0A\u9762\u7684\u547D\u4EE4\uFF0C\u53EF\u4EE5\u770B\u5230\u63A7\u5236\u53F0\u4F1A\u8F93\u51FA\u5982\u4E0B\u7ED3\u679C</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>mysql: available
mysql: added process group
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u81F3\u6B64\u4F7F\u7528 supervisord \u7BA1\u7406<code>mysql</code>\u8FDB\u7A0B\u5DF2\u7ECF\u5B8C\u6210\u3002</p><h2 id="\u914D\u7F6Emysql" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6Emysql" aria-hidden="true">#</a> \u914D\u7F6EMySQL</h2><ul><li><p>\u83B7\u53D6\u5B89\u88C5\u65F6\u521D\u59CB\u5316\u5BC6\u7801</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">grep</span> <span class="token string">&#39;temporary password&#39;</span> /var/log/mysqld.log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u767B\u5F55\u5E76\u91CD\u8BBE<strong>root</strong>\u8D26\u6237\u5BC6\u7801</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>mysql -uroot -p <span class="token comment"># \u56DE\u8F66\u8F93\u5165\u4E0A\u9762\u83B7\u53D6\u5230\u7684\u5BC6\u7801</span>

ALTER <span class="token environment constant">USER</span> <span class="token string">&#39;root&#39;</span>@<span class="token string">&#39;localhost&#39;</span> IDENTIFIED BY <span class="token string">&#39;MyNewPassword1!&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u6388\u6743\u65B0\u7528\u6237</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>CREATE <span class="token environment constant">USER</span> <span class="token string">&#39;new_user&#39;</span>@<span class="token string">&#39;localhost&#39;</span> IDENTIFIED BY <span class="token string">&#39;CKHbYiEpZokM9yB7ojqPUikSLX4P!8Y&#39;</span><span class="token punctuation">;</span>
GRANT ALL PRIVILEGES ON new_user_database.* TO <span class="token string">&#39;new_user&#39;</span>@<span class="token string">&#39;localhost&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="\u68C0\u67E5mysql" tabindex="-1"><a class="header-anchor" href="#\u68C0\u67E5mysql" aria-hidden="true">#</a> \u68C0\u67E5MySQL</h2><h3 id="\u68C0\u67E5\u7AEF\u53E3" tabindex="-1"><a class="header-anchor" href="#\u68C0\u67E5\u7AEF\u53E3" aria-hidden="true">#</a> \u68C0\u67E5\u7AEF\u53E3</h3><p>MySQL\u5DF2\u7ECF\u542F\u52A8\u5E76\u57283306\u7AEF\u53E3\u4E0A\u8FD0\u884C\uFF0C\u53EF\u4EE5\u4F7F\u7528netstat\u547D\u4EE4\u68C0\u67E5\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">netstat</span> -plntu <span class="token operator">|</span><span class="token function">grep</span> <span class="token number">3306</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="\u68C0\u67E5\u8FDB\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u68C0\u67E5\u8FDB\u7A0B" aria-hidden="true">#</a> \u68C0\u67E5\u8FDB\u7A0B</h4><p>\u68C0\u67E5\u7CFB\u7EDF\u8FDB\u7A0B\u4F7F\u7528<code>ps</code>\u547D\u4EE4\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">ps</span> aux <span class="token operator">|</span><span class="token function">grep</span> mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u81F3\u6B64\uFF0CCentOS\u4E0B\u5B89\u88C5<code>mysql</code>\u5C31\u5B89\u88C5\u597D\u4E86\u3002</p><h2 id="\u53C2\u8003\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u94FE\u63A5" aria-hidden="true">#</a> \u53C2\u8003\u94FE\u63A5</h2>`,19),y={href:"https://dev.mysql.com/doc/mysql-yum-repo-quick-guide/en/",target:"_blank",rel:"noopener noreferrer"},k=a("A Quick Guide to Using the MySQL Yum Repository");function g(q,f){const i=e("RouterLink"),t=e("ExternalLinkIcon");return o(),d(p,null,[m,s("p",null,[n(i,{to:"/os/centos/how-to-use-supervisord-manager-processes.html"},{default:c(()=>[h]),_:1}),v]),b,s("ul",null,[s("li",null,[s("a",y,[k,n(t)])])])],64)}var x=r(u,[["render",g],["__file","centos-7-uses-yum-way-to-install-and-configure-mysql.html.vue"]]);export{x as default};
