import{_ as t,r as o,o as d,c,b as e,a,F as r,e as i,d as s}from"./app.b24ee918.js";const l={},p=i(`<h1 id="centos-7-\u670D\u52A1\u5668\u521D\u59CB\u5316" tabindex="-1"><a class="header-anchor" href="#centos-7-\u670D\u52A1\u5668\u521D\u59CB\u5316" aria-hidden="true">#</a> Centos 7 \u670D\u52A1\u5668\u521D\u59CB\u5316</h1><p>\u5F53\u521D\u6B21\u521B\u5EFA\u65B0\u670D\u52A1\u5668\u65F6\uFF0C\u5E94\u8BE5\u5C3D\u65E9\u5B8C\u6210\u4E00\u4E9B\u914D\u7F6E\u6B65\u9AA4\uFF0C\u4F5C\u4E3A\u57FA\u672C\u8BBE\u7F6E\u7684\u4E00\u90E8\u5206\uFF0C\u8FD9\u5C06\u589E\u52A0\u670D\u52A1\u5668\u7684\u5B89\u5168\u6027\u548C\u53EF\u7528\u6027\uFF0C\u5E76\u4E3A\u540E\u7EED\u64CD\u4F5C\u5960\u5B9A\u575A\u5B9E\u7684\u57FA\u7840\u3002</p><h2 id="\u767B\u5F55\u670D\u52A1\u5668" tabindex="-1"><a class="header-anchor" href="#\u767B\u5F55\u670D\u52A1\u5668" aria-hidden="true">#</a> \u767B\u5F55\u670D\u52A1\u5668</h2><p>root\u7528\u6237\u662F\u62E5\u6709\u975E\u5E38\u5E7F\u6CDB\u7279\u6743\u7684Linux\u73AF\u5883\u4E2D\u7684\u7BA1\u7406\u7528\u6237\u3002\u7531\u4E8Eroot\u5E10\u6237\u7684\u6743\u9650\u8F83\u9AD8\uFF0C\u56E0\u6B64\u5B9E\u9645\u4E0A\u4E0D\u5EFA\u8BAE\u957F\u671F\u4F7F\u7528\u5B83\u3002\u8FD9\u662F\u56E0\u4E3A\u6839\u8D26\u6237\u56FA\u6709\u7684\u90E8\u5206\u6743\u529B\u662F\u80FD\u591F\u505A\u51FA\u975E\u5E38\u5177\u6709\u7834\u574F\u6027\u7684\u53D8\u66F4\uFF0C\u5373\u4F7F\u662F\u610F\u5916\u60C5\u51B5\u5BFC\u81F4\u3002</p><p>\u8981\u767B\u5F55\u5230\u60A8\u7684\u670D\u52A1\u5668\uFF0C\u9700\u8981\u77E5\u9053\u670D\u52A1\u5668\u7684<strong>\u516C\u5171IP\u5730\u5740</strong>\u548C<strong>root</strong>\u7528\u6237\u5E10\u6237\u7684\u5BC6\u7801\u3002\u5E76\u901A\u8FC7\u4E0B\u9762\u7684\u547D\u4EE4\u767B\u5F55\u5230\u670D\u52A1\u5668</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">ssh</span> root@SERVER_IP_ADDRESS
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u7136\u540E\u63D0\u4F9B\u6839\u8BA4\u8BC1\uFF08\u5BC6\u7801\u6216\u79C1\u94A5\uFF09\uFF0C\u5B8C\u6210\u767B\u5F55\u8FC7\u7A0B\u3002</p><h2 id="\u8BBE\u7F6E\u4E2A\u6027\u5316\u4E3B\u673A\u540D" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u7F6E\u4E2A\u6027\u5316\u4E3B\u673A\u540D" aria-hidden="true">#</a> \u8BBE\u7F6E\u4E2A\u6027\u5316\u4E3B\u673A\u540D</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> hostnamectl set-hostname YOUR_HOSTNAME
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u66F4\u65B0-aliyun-\u7684-yum-\u6E90" tabindex="-1"><a class="header-anchor" href="#\u66F4\u65B0-aliyun-\u7684-yum-\u6E90" aria-hidden="true">#</a> \u66F4\u65B0 aliyun \u7684 yum \u6E90</h2><blockquote><p>\u6CE8\u610F\uFF1A\u5982\u679C\u670D\u52A1\u5668\u5728\u56FD\u5185\u5EFA\u8BAE\u4FEE\u6539yum\u6E90\u4E3Aaliyun\uFF0C\u5982\u679C\u670D\u52A1\u5668\u5728\u56FD\u5916\u53EF\u4EE5\u5FFD\u7565\u3002</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">mv</span> /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.backup
<span class="token function">sudo</span> <span class="token function">curl</span> -o /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-7.repo
<span class="token function">sudo</span> yum makecache
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),u=s("\u76F8\u5173\u64CD\u4F5C\u548C\u66F4\u591A\u5176\u4ED6\u64CD\u4F5C\u7CFB\u7EDF\u955C\u50CF\u64CD\u4F5C"),h={href:"https://opsx.alibaba.com/mirror",target:"_blank",rel:"noopener noreferrer"},m=s("\u67E5\u770B\u8FD9\u91CC"),v=s("\u3002"),b=i(`<h2 id="\u6DFB\u52A0\u5FC5\u8981\u7CFB\u7EDF\u5DE5\u5177" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0\u5FC5\u8981\u7CFB\u7EDF\u5DE5\u5177" aria-hidden="true">#</a> \u6DFB\u52A0\u5FC5\u8981\u7CFB\u7EDF\u5DE5\u5177</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> yum <span class="token function">install</span> -y yum-utils net-tools net-snmp <span class="token function">wget</span> iftop <span class="token function">htop</span> telnet tree <span class="token function">git</span> <span class="token function">vim</span> <span class="token function">zip</span> <span class="token function">unzip</span> <span class="token function">curl</span> ntpdate mlocate
<span class="token function">sudo</span> <span class="token function">rpm</span> -qa <span class="token operator">|</span><span class="token function">grep</span> -E <span class="token string">&quot;snmp|wget|iftop|htop|git|telnet|vim|zip|unzip|curl|ntpdate|mlocate&quot;</span> <span class="token comment"># \u68C0\u67E5\u5B89\u88C5\u60C5\u51B5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4FEE\u6539\u65F6\u533A-\u8BBE\u7F6E\u65F6\u95F4" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539\u65F6\u533A-\u8BBE\u7F6E\u65F6\u95F4" aria-hidden="true">#</a> \u4FEE\u6539\u65F6\u533A&amp;&amp;\u8BBE\u7F6E\u65F6\u95F4</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> timedatectl set-timezone Asia/Shanghai
<span class="token function">sudo</span> ntpdate cn.pool.ntp.org
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6267\u884C\u4E0B\u9762\u7684\u547D\u4EE4\u4E4B\u524D\uFF0C\u9700\u8981\u5C06\u5F53\u524D\u64CD\u4F5C\u65F6\u7684\u7528\u6237\u5207\u6362\u4E3Aroot\u7528\u6237\uFF0C\u5426\u5219\u5C06\u63D0\u793A\u6CA1\u6709\u6743\u9650\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;00 */10 * * * ntpdate cn.pool.ntp.org &gt;/dev/null 2&gt;&amp;1&quot;</span> <span class="token operator">&gt;&gt;</span> /var/spool/cron/root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u5185\u6838\u4F18\u5316sysctl-conf-\u8C03\u6574\u6587\u4EF6\u63CF\u8FF0\u7B26ulimit" tabindex="-1"><a class="header-anchor" href="#\u5185\u6838\u4F18\u5316sysctl-conf-\u8C03\u6574\u6587\u4EF6\u63CF\u8FF0\u7B26ulimit" aria-hidden="true">#</a> \u5185\u6838\u4F18\u5316<code>sysctl.conf</code> &amp;&amp; \u8C03\u6574\u6587\u4EF6\u63CF\u8FF0\u7B26<code>ulimit</code></h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;net.ipv4.ip_local_port_range = 1024 65535
net.core.rmem_max = 16777216
net.core.wmem_max = 16777216
net.ipv4.tcp_rmem = 4096 87380 16777216
net.ipv4.tcp_wmem = 4096 65536 16777216
net.ipv4.tcp_fin_timeout = 10
net.ipv4.tcp_tw_recycle = 1
net.ipv4.tcp_timestamps = 0
net.ipv4.tcp_window_scaling = 0
net.ipv4.tcp_sack = 0
net.core.netdev_max_backlog = 65535
net.ipv4.tcp_no_metrics_save = 1
net.core.somaxconn = 65535
net.ipv4.tcp_syncookies = 0
net.ipv4.tcp_max_orphans = 262144
net.ipv4.tcp_max_syn_backlog = 262144
net.ipv4.tcp_synack_retries = 2
net.ipv4.tcp_syn_retries = 2&quot;</span> <span class="token operator">&gt;</span>/etc/sysctl.conf

sysctl -w net.ipv4.route.flush<span class="token operator">=</span><span class="token number">1</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;ulimit -HSn 65536&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/rc.local
<span class="token builtin class-name">echo</span> <span class="token string">&quot;ulimit -HSn 65536&quot;</span> <span class="token operator">&gt;&gt;</span> /root/.bash_profile
<span class="token builtin class-name">ulimit</span> -HSn <span class="token number">65535</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5173\u95EDselinux" tabindex="-1"><a class="header-anchor" href="#\u5173\u95EDselinux" aria-hidden="true">#</a> \u5173\u95EDselinux</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>setenforce <span class="token number">0</span>
<span class="token function">cp</span> /etc/sysconfig/selinux /etc/sysconfig/selinux.bak<span class="token variable"><span class="token variable">\`</span><span class="token function">date</span> +%F<span class="token variable">\`</span></span> <span class="token operator">&amp;&amp;</span> <span class="token function">sed</span> -i <span class="token string">&#39;s/SELINUX=enforcing/SELINUX=disabled/g&#39;</span> /etc/sysconfig/selinux
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u521B\u5EFA\u4E00\u4E2A\u65B0\u7528\u6237" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u4E00\u4E2A\u65B0\u7528\u6237" aria-hidden="true">#</a> \u521B\u5EFA\u4E00\u4E2A\u65B0\u7528\u6237</h2><p>\u4E00\u65E6\u4F7F\u7528<code>root</code>\u767B\u5F55\u7CFB\u7EDF\uFF0C\u51C6\u5907\u6DFB\u52A0\u5C06\u7528\u4E8E\u4ECE\u73B0\u5728\u5F00\u59CB\u767B\u5F55\u7684\u65B0\u7528\u6237\u5E10\u6237\uFF0C\u521B\u5EFA\u4E00\u4E2A\u540D\u4E3A\u201Cdemo\u201D\u7684\u65B0\u7528\u6237\u5E76\u6DFB\u52A0\u5BC6\u7801\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>adduser demo <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;newPassword&quot;</span> <span class="token operator">|</span> <span class="token function">passwd</span> --stdin <span class="token string">&quot;demo&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u6DFB\u52A0\u7528\u6237\u6743\u9650" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0\u7528\u6237\u6743\u9650" aria-hidden="true">#</a> \u6DFB\u52A0\u7528\u6237\u6743\u9650</h2><p>\u5DF2\u7ECF\u62E5\u6709\u4E00\u4E2A\u5E38\u89C4\u5E10\u6237\u6743\u9650\u7684\u65B0\u7528\u6237<code>demo</code>\u8D26\u53F7\uFF0C\u4F46\u662F\u53EF\u80FD\u9700\u8981\u4F7F\u7528\u8BE5\u8D26\u53F7\u6267\u884C\u7BA1\u7406\u4EFB\u52A1\u3002</p><p>\u4E3A\u4E86\u907F\u514D\u5FC5\u987B\u4ECE\u666E\u901A\u7528\u6237<code>demo</code>\u6CE8\u9500\u5E76\u4EE5<code>root</code>\u5E10\u6237\u91CD\u65B0\u767B\u5F55\uFF0C\u53EF\u4EE5\u4E3A\u666E\u901A\u5E10\u6237\u8BBE\u7F6E\u6240\u8C13\u7684\u201C\u8D85\u7EA7\u7528\u6237\u201D\u6216root\u6743\u9650\u3002\u5C06\u5141\u8BB8\u666E\u901A\u7528\u6237\u901A\u8FC7<code>sudo</code>\u5728\u6BCF\u4E2A\u547D\u4EE4\u4E4B\u524D\u7684\u5173\u952E\u5B57\u6765\u8FD0\u884C\u5177\u6709\u7BA1\u7406\u7279\u6743\u7684\u547D\u4EE4\u3002</p><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u5728CentOS 7\u4E0A\uFF0C\u5C5E\u4E8E<code>wheel</code>\u7EC4\u7684\u7528\u6237\u53EF\u4EE5\u4F7F\u7528\u8BE5sudo\u547D\u4EE4\uFF0C\u5C06<code>demo</code>\u7528\u6237\u52A0\u5165\u5230<code>wheel</code>\u7EC4\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>gpasswd -a demo wheel
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u6DFB\u52A0\u516C\u94A5\u8BA4\u8BC1-\u63A8\u8350" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0\u516C\u94A5\u8BA4\u8BC1-\u63A8\u8350" aria-hidden="true">#</a> \u6DFB\u52A0\u516C\u94A5\u8BA4\u8BC1\uFF08\u63A8\u8350\uFF09</h2><blockquote><p>\u9664\u975E\u7279\u6B8A\u8BF4\u660E\uFF0C\u5426\u5219\u6240\u6709\u7684\u64CD\u4F5C\u90FD\u5728\u672C\u5730\uFF0C\u800C\u975E\u670D\u52A1\u5668\u4E0A\u8FDB\u884C\u7684\u64CD\u4F5C\u3002</p></blockquote><p>\u4E3A\u65B0\u7528\u6237\u8BBE\u7F6E\u516C\u94A5\u8BA4\u8BC1\u3002\u8BBE\u7F6E\u6B64\u9879\u5C06\u901A\u8FC7\u5FC5\u987B\u4F7F\u7528\u4E13\u7528\u7684SSH\u5BC6\u94A5\u767B\u5F55\u6765\u63D0\u9AD8\u670D\u52A1\u5668\u7684\u5B89\u5168\u6027\u3002</p><p>\u5982\u679C\u672C\u5730\u5C1A\u672A\u62E5\u6709\u5305\u542B\u516C\u94A5\u548C\u79C1\u94A5\u7684SSH\u5BC6\u94A5\u5BF9\uFF0C\u5219\u9700\u8981\u751F\u6210\u4E00\u4E2A\u3002\u5982\u679C\u5DF2\u7ECF\u5B58\u5728\u8981\u4F7F\u7528\u7684\u5BC6\u94A5\uFF0C\u5FFD\u7565\u4E0B\u9762\u7684\u64CD\u4F5C\uFF0C\u8DF3\u81F3\u590D\u5236\u516C\u94A5\u5173\u952E\u6B65\u9AA4\u3002</p><h3 id="\u751F\u6210\u5BC6\u94A5\u5BF9" tabindex="-1"><a class="header-anchor" href="#\u751F\u6210\u5BC6\u94A5\u5BF9" aria-hidden="true">#</a> \u751F\u6210\u5BC6\u94A5\u5BF9</h3><p>\u8981\u751F\u6210\u65B0\u7684\u5BC6\u94A5\u5BF9\uFF0C\u8BF7\u5728\u672C\u5730\u673A\u5668\uFF08\u975E\u670D\u52A1\u5668\u672C\u8EAB\uFF09\u7684\u7EC8\u7AEF\u8F93\u5165\u4EE5\u4E0B\u547D\u4EE4</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>ssh-keygen
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5047\u8BBE\u672C\u673A\u7528\u6237\u88AB\u79F0\u4E3A<code>curder</code>\uFF0C\u6267\u884C\u4E0A\u9762\u7684\u547D\u4EE4\u5C06\u770B\u5230\u5982\u4E0B\u6240\u793A\u7684\u8F93\u51FA\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Generating public/private rsa key pair.
Enter file in which to save the key (/Users/curder/.ssh/id_rsa):
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7EE7\u7EED\u56DE\u8F66\u7684\u8BDD\uFF0C\u7CFB\u7EDF\u4F1A\u63D0\u793A\u8F93\u5165\u5BC6\u7801\u4EE5\u786E\u4FDD\u5BC6\u94A5\u7684\u5B89\u5168\u3002<strong>\u5EFA\u8BAE\u5C06\u5BC6\u7801\u7559\u7A7A\u3002</strong></p><p>\u6267\u884C\u5B8C\u4E0A\u9762\u7684\u64CD\u4F5C\u540E\uFF0C\u4F1A\u5728<code>curder</code>\u7684\u5BB6\u76EE\u5F55\u7684<code>.ssh</code>\u76EE\u5F55\u4E2D\u751F\u6210\u4E00\u4E2A\u79C1\u94A5<code>id_rsa</code>\u548C\u4E00\u4E2A\u516C\u94A5<code>id_rsa.pub</code>\u3002 <strong>\u8BF7\u8BB0\u4F4F\uFF0C\u79C1\u94A5\u4E0D\u5E94\u4E0E\u4EFB\u4F55\u4E0D\u5E94\u8BBF\u95EE\u670D\u52A1\u5668\u7684\u4EBA\u5171\u4EAB!</strong></p><h3 id="\u590D\u5236\u516C\u94A5" tabindex="-1"><a class="header-anchor" href="#\u590D\u5236\u516C\u94A5" aria-hidden="true">#</a> \u590D\u5236\u516C\u94A5</h3><p>\u751F\u6210SSH\u5BC6\u94A5\u5BF9\u540E\uFF0C\u4F1A\u9700\u8981\u5C06\u516C\u94A5\u590D\u5236\u5230\u65B0\u7684\u670D\u52A1\u5668\u4E0A\u3002\u8FD9\u91CC\u4ECB\u7ECD\u4E24\u79CD\u7B80\u5355\u7684\u65B9\u6CD5\u6765\u505A\u5230\u8FD9\u4E00\u70B9\u3002</p><h4 id="\u65B9\u6CD51-\u4F7F\u7528ssh-copy-id" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6CD51-\u4F7F\u7528ssh-copy-id" aria-hidden="true">#</a> \u65B9\u6CD51\uFF1A\u4F7F\u7528<code>ssh-copy-id</code></h4><p>\u5982\u679C\u5728\u672C\u5730\u8BA1\u7B97\u673A\u5B89\u88C5\u4E86<code>ssh-copy-id</code>\u811A\u672C\uFF0C\u5219\u53EF\u4EE5\u4F7F\u7528\u5B83\u5C06\u516C\u94A5\u5B89\u88C5\u5230\u60A8\u62E5\u6709\u767B\u5F55\u51ED\u636E\u7684\u4EFB\u4F55\u7528\u6237\u3002 <code>ssh-copy-id</code>\u901A\u8FC7\u6307\u5B9A\u8981\u5B89\u88C5\u5BC6\u94A5\u7684\u670D\u52A1\u5668\u7684\u7528\u6237\u548CIP\u5730\u5740\u8FD0\u884C\u811A\u672C\uFF0C\u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>ssh-copy-id demo@SERVER_IP_ADDRESS
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5728\u63D0\u793A\u5904\u63D0\u4F9B\u5BC6\u7801\u5E76\u6210\u529F\u540E\uFF0C\u672C\u5730\u516C\u94A5\u5C06\u88AB\u6DFB\u52A0\u5230\u8FDC\u7A0B\u670D\u52A1\u5668\u7684<code>.ssh/authorized_keys</code>\u6587\u4EF6\u4E2D\uFF0C\u5E76\u53EF\u4EE5\u4F7F\u7528\u76F8\u5E94\u7684\u79C1\u94A5\u767B\u5F55\u5230\u670D\u52A1\u5668\u3002</p><h4 id="\u65B9\u6CD52-\u624B\u52A8\u5B89\u88C5\u5BC6\u94A5" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6CD52-\u624B\u52A8\u5B89\u88C5\u5BC6\u94A5" aria-hidden="true">#</a> \u65B9\u6CD52\uFF1A\u624B\u52A8\u5B89\u88C5\u5BC6\u94A5</h4><h5 id="\u4F7F\u7528\u547D\u4EE4\u83B7\u53D6\u516C\u94A5" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u547D\u4EE4\u83B7\u53D6\u516C\u94A5" aria-hidden="true">#</a> \u4F7F\u7528\u547D\u4EE4\u83B7\u53D6\u516C\u94A5</h5><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> ~/.ssh/id_rsa.pub
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5C06\u6253\u5370\u5728\u5C4F\u5E55\u4E0A\u7684\u516C\u94A5\u590D\u5236\u5230\u526A\u5207\u677F\uFF0C\u6216\u8005\u4F7F\u7528<code>pbcopy &lt; ~/.ssh/id_rsa.pub</code>\u547D\u4EE4\u5C06\u516C\u94A5\u76F4\u63A5\u590D\u5236\u5230\u526A\u5207\u677F\u3002</p><h5 id="\u5C06\u516C\u94A5\u6DFB\u52A0\u5230\u65B0\u7684\u8FDC\u7A0B\u7528\u6237" tabindex="-1"><a class="header-anchor" href="#\u5C06\u516C\u94A5\u6DFB\u52A0\u5230\u65B0\u7684\u8FDC\u7A0B\u7528\u6237" aria-hidden="true">#</a> \u5C06\u516C\u94A5\u6DFB\u52A0\u5230\u65B0\u7684\u8FDC\u7A0B\u7528\u6237</h5><p>\u8981\u5141\u8BB8\u4F7F\u7528SSH\u5BC6\u94A5\u4F5C\u4E3A\u65B0\u7684\u8FDC\u7A0B\u7528\u6237\u8FDB\u884C\u8EAB\u4EFD\u9A8C\u8BC1\uFF0C\u5FC5\u987B\u5C06\u516C\u94A5\u6DFB\u52A0\u5230<strong>\u670D\u52A1\u5668\u4E0A</strong>\u7528\u6237\u4E3B\u76EE\u5F55\u4E2D\u7684<code>~/.ssh/authorized_keys</code>\u6587\u4EF6\u4E2D\u3002</p><p><strong>\u5728\u670D\u52A1\u5668\u4E0A</strong>\uFF0C\u4EE5<code>root</code>\u7528\u6237\u8EAB\u4EFD\u8F93\u5165\u4EE5\u4E0B\u547D\u4EE4\u5207\u6362\u5230\u65B0\u7528\u6237</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">su</span> - demo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>.ssh</code>\u4F7F\u7528\u4EE5\u4E0B\u547D\u4EE4\u521B\u5EFA\u4E00\u4E2A\u65B0\u76EE\u5F55\uFF0C\u5E76\u9650\u5236\u5176\u6743\u9650\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> .ssh <span class="token operator">&amp;&amp;</span> <span class="token function">chmod</span> <span class="token number">700</span> .ssh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u63A5\u4E0B\u6765\u9700\u8981\u4F7F\u7528\u6587\u672C\u7F16\u8F91\u5668\u6253\u5F00\u4E00\u4E2A\u540D\u4E3A<code>~/.ssh/authorized_keys</code>\u3002\u8FD9\u91CC\u4F7F\u7528vi\u6765\u7F16\u8F91\u6587\u4EF6</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">vi</span> ~/.ssh/authorized_keys <span class="token comment"># \u5C06\u672C\u5730\u516C\u94A5\u5185\u5BB9\u6DFB\u52A0\u5230\u6587\u4EF6</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u7136\u540E\u901A\u8FC7\u5C06\u5176\u7C98\u8D34\u5230\u7F16\u8F91\u5668\u4E2D\u8F93\u5165\u60A8\u672C\u5730\u7535\u8111\u7684\u516C\u94A5\uFF08\u5B83\u5E94\u8BE5\u5728\u526A\u8D34\u677F\u4E2D\uFF09\uFF0C\u5E76\u901A\u8FC7\u547D\u4EE4\u4FEE\u6539\u6743\u9650\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">chmod</span> <span class="token number">600</span> ~/.ssh/authorized_keys
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u73B0\u5728\u53EF\u4EE5\u4F7F\u7528\u79C1\u94A5\u4F5C\u4E3A\u8EAB\u4EFD\u9A8C\u8BC1\uFF0C\u672C\u5730\u4EE5SSH\u8EAB\u4EFD\u767B\u5F55\u60A8\u7684\u65B0\u7528\u6237\u5E76\u80FD\u901A\u8FC7<code>sudo su -</code>\u5207\u6362\u5230<code>root</code>\u7528\u6237\u3002</p><h2 id="\u914D\u7F6Essh\u5B88\u62A4\u8FDB\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6Essh\u5B88\u62A4\u8FDB\u7A0B" aria-hidden="true">#</a> \u914D\u7F6ESSH\u5B88\u62A4\u8FDB\u7A0B</h2><h3 id="\u7981\u6B62root\u7528\u6237\u767B\u5F55" tabindex="-1"><a class="header-anchor" href="#\u7981\u6B62root\u7528\u6237\u767B\u5F55" aria-hidden="true">#</a> \u7981\u6B62root\u7528\u6237\u767B\u5F55</h3><p>\u73B0\u5728\u6709\u4E86\u65B0\u5E10\u6237<code>demo</code>\uFF0C\u901A\u8FC7\u4FEE\u6539\u673A\u5668\u7684SSH\u5B88\u62A4\u7A0B\u5E8F\u914D\u7F6E\u6765\u7981\u6B62\u8FDC\u7A0BSSH\u8BBF\u95EE<code>root</code>\u5E10\u6237\uFF0C\u8FD9\u6837\u53EF\u4EE5\u4FDD\u62A4\u670D\u52A1\u5668\u3002\u9996\u5148\u4EE5<strong>root</strong>\u7528\u6237\u7684\u6587\u672C\u7F16\u8F91\u5668\u6253\u5F00\u914D\u7F6E\u6587\u4EF6\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sed</span> -i <span class="token string">&#39;s/PermitRootLogin yes/PermitRootLogin no/g&#39;</span> /etc/ssh/sshd_config <span class="token comment"># \u7981\u7528\u670D\u52A1\u5668root\u8FDC\u7A0B\u767B\u5F55</span>
<span class="token function">sed</span> -i <span class="token string">&#39;s/PasswordAuthentication no/PasswordAuthentication yes/g&#39;</span> /etc/ssh/sshd_config <span class="token comment"># \u5141\u8BB8\u4F7F\u7528\u6B63\u786E\u7684\u7528\u6237\u5BC6\u7801\u767B\u5F55</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u8FD9\u91CC\uFF0C\u9009\u62E9\u901A\u8FC7SSH\u7981\u7528<code>root</code>\u7528\u6237\u767B\u5F55\u3002\u8FD9\u901A\u5E38\u662F\u66F4\u5B89\u5168\u7684\u8BBE\u7F6E\uFF0C\u56E0\u4E3A\u73B0\u5728\u53EF\u4EE5\u901A\u8FC7\u666E\u901A\u7528\u6237\u5E10\u6237\u8BBF\u95EE\u6211\u4EEC\u7684\u670D\u52A1\u5668\uFF0C\u5E76\u5728\u5FC5\u8981\u65F6\u63D0\u5347\u6743\u9650\u3002\u8981\u7981\u7528\u8FDC\u7A0Broot\u767B\u5F55\uFF0C\u6211\u4EEC\u9700\u8981\u627E\u5230\u5982\u4E0B\u6240\u793A\u7684\u884C\uFF0C\u901A\u8FC7\u5220\u9664\u201C\uFF03\u201D\u7B26\u53F7\u53D6\u6D88\u6CE8\u91CA\u3002</p><h3 id="\u91CD\u65B0\u52A0\u8F7Dssh" tabindex="-1"><a class="header-anchor" href="#\u91CD\u65B0\u52A0\u8F7Dssh" aria-hidden="true">#</a> \u91CD\u65B0\u52A0\u8F7DSSH</h3><blockquote><p><strong>\u6CE8\u610F\uFF1A</strong> \u5728\u91CD\u8F7D\u4E4B\u524D\u8BF7\u4FDD\u8BC1\u6709\u4E00\u4E2A\u6D3B\u52A8\u7684SSH\u8FDE\u63A5\uFF0C\u76F4\u5230\u5B8C\u5168<strong>\u6D4B\u8BD5</strong>\u786E\u8BA4\u53EF\u4EE5\u6210\u529F\u5EFA\u7ACB\u65B0\u7684\u8FDE\u63A5\u3002\u5426\u5219\u5982\u679C\u540E\u671F\u7531\u4E8E\u9519\u8BEF\u7684SSH\u914D\u7F6E\u5BFC\u81F4\u7684\u65E0\u6CD5\u767B\u5F55\uFF0C\u90A3\u4FBF\u65E0\u6CD5\u767B\u5F55\u4E86\uFF0C\u53EA\u80FD\u8054\u7CFB\u670D\u52A1\u5668\u63D0\u4F9B\u5546\u91CD\u88C5\u673A\u5668\u3002</p></blockquote><p>\u8981\u5BF9ssh\u914D\u7F6E\u8FDB\u884C\u91CD\u8F7D\u53EF\u4EE5\u8F93\u5165\u4E0B\u9762\u7684\u547D\u4EE4\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>systemctl reload sshd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u6D4B\u8BD5" aria-hidden="true">#</a> \u6D4B\u8BD5</h3><p>\u6253\u5F00\u4E00\u4E2A\u65B0\u7684\u7EC8\u7AEF\u7A97\u53E3\u3002\u5728\u65B0\u7A97\u53E3\u4E2D\uFF0C\u9700\u8981\u5F00\u59CB\u4E00\u4E2A\u5230\u670D\u52A1\u5668\u7684\u65B0\u8FDE\u63A5\u3002\u8FD9\u4E00\u6B21\uFF0C\u6211\u4EEC\u4E0D\u4F7F\u7528<code>root</code>\u5E10\u6237\uFF0C\u800C\u662F\u4F7F\u7528\u521B\u5EFA\u7684\u65B0\u7528\u6237<code>demo</code>\u3002\u5BF9\u4E8E\u6211\u4EEC\u4E0A\u9762\u914D\u7F6E\u7684\u670D\u52A1\u5668\uFF0C\u4F7F\u7528\u6B64\u547D\u4EE4\u8FDB\u884C\u8FDE\u63A5\u3002\u5728\u9002\u5F53\u7684\u5730\u65B9\u66FF\u6362\u60A8\u81EA\u5DF1\u7684\u4FE1\u606F\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">ssh</span> demo@SERVER_IP_ADDRESS
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u7CFB\u7EDF\u5C06\u63D0\u793A\u8F93\u5165\u914D\u7F6E\u7684\u65B0\u7528\u6237\u7684\u5BC6\u7801\u3002\u4E4B\u540E\u5C06\u4F7F\u7528\u65B0\u7528\u6237\u7684\u8EAB\u4EFD\u767B\u5F55\u3002</p><p>\u8BF7\u8BB0\u4F4F\uFF0C\u5982\u679C\u9700\u8981\u4EE5<code>root</code>\u6743\u9650\u8FD0\u884C\u547D\u4EE4\uFF0C\u8BF7\u5728\u5B83\u4E4B\u524D\u52A0\u4E0A <code>sudo</code>\u3002</p><p>\u5982\u679C\u4E00\u5207\u6B63\u5E38\uFF0C\u60A8\u53EF\u4EE5\u8F93\u5165<code>exit</code>\u547D\u4EE4\u9000\u51FA\u4F1A\u8BDD\u3002</p><h2 id="\u7EC8\u7AEF\u914D\u8272" tabindex="-1"><a class="header-anchor" href="#\u7EC8\u7AEF\u914D\u8272" aria-hidden="true">#</a> \u7EC8\u7AEF\u914D\u8272</h2><p>\u4E3A\u4E86\u8BBE\u7F6E\u7EC8\u7AEF\u989C\u8272\uFF0C\u6211\u4EEC\u9700\u8981\u5BF9<code>/etc/bashrc</code>\u6587\u4EF6\u4E2D\u7684 PS1 \u53D8\u91CF\u8FDB\u884C\u5B9A\u5236\uFF0C\u8FD9\u6837\u5C31\u80FD\u5E94\u7528\u4E8E\u6240\u6709\u7528\u6237\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;# \u7EC8\u7AEF\u914D\u8272
export PS1=&#39;<span class="token entity" title="\\n">\\n</span>\\[<span class="token entity" title="\\e">\\e</span>[37;1m[\\]\\[<span class="token entity" title="\\e">\\e</span>[31;1m\\]\\u\\[<span class="token entity" title="\\e">\\e</span>[39;1m\\]@\\[<span class="token entity" title="\\e">\\e</span>[33;1m\\]\\H \\[<span class="token entity" title="\\e">\\e</span>[34;1m\\]\\w\\[<span class="token entity" title="\\e">\\e</span>[37;1m\\]]<span class="token entity" title="\\n">\\n</span>\\[<span class="token entity" title="\\e">\\e</span>[32;1m\\]<span class="token entity" title="\\\\">\\\\</span>$ \\[<span class="token entity" title="\\e">\\e</span>[0m\\]&#39;&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/bashrc

<span class="token builtin class-name">source</span> /etc/bashrc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53C2\u8003\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u94FE\u63A5" aria-hidden="true">#</a> \u53C2\u8003\u94FE\u63A5</h2>`,69),g={href:"https://ovwane.github.io/2017/11/17/CentOS7%20%E6%96%B0%E8%A3%85%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%88%9D%E5%A7%8B%E5%8C%96%E9%85%8D%E7%BD%AE/#%E8%AE%BE%E7%BD%AE%E4%B8%BB%E6%9C%BA%E5%90%8D",target:"_blank",rel:"noopener noreferrer"},k=s("CentOS7 \u65B0\u88C5\u670D\u52A1\u5668\u521D\u59CB\u5316\u914D\u7F6E"),_={href:"https://www.digitalocean.com/community/tutorials/initial-server-setup-with-centos-7",target:"_blank",rel:"noopener noreferrer"},f=s("Initial Server Setup with CentOS 7"),x={href:"https://www.digitalocean.com/community/tutorials/how-to-configure-ssh-key-based-authentication-on-a-linux-server",target:"_blank",rel:"noopener noreferrer"},y=s("How To Configure SSH Key-Based Authentication on a Linux Server");function S(E,w){const n=o("ExternalLinkIcon");return d(),c(r,null,[p,e("blockquote",null,[e("p",null,[u,e("a",h,[m,a(n)]),v])]),b,e("ul",null,[e("li",null,[e("p",null,[e("a",g,[k,a(n)])])]),e("li",null,[e("p",null,[e("a",_,[f,a(n)])])]),e("li",null,[e("p",null,[e("a",x,[y,a(n)])])])])],64)}var H=t(l,[["render",S],["__file","centos-7-server-initialization.html.vue"]]);export{H as default};