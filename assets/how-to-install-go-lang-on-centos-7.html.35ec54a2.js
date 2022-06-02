import{_ as c,r as t,o as l,c as d,b as e,a as n,F as i,e as o,d as s}from"./app.b24ee918.js";const r={},p=o('<h1 id="\u5982\u4F55\u5728centos-7\u4E0A\u5B89\u88C5go" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u5728centos-7\u4E0A\u5B89\u88C5go" aria-hidden="true">#</a> \u5982\u4F55\u5728CentOS 7\u4E0A\u5B89\u88C5Go</h1><h2 id="\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u4ECB\u7ECD" aria-hidden="true">#</a> \u4ECB\u7ECD</h2><p><strong>Go</strong>\uFF0C\u901A\u5E38\u88AB\u79F0\u4E3A<em>golang</em>\uFF0C\u662F\u7531Google\u5F00\u53D1\u7684\u4E00\u79CD\u5F00\u6E90\u7F16\u7A0B\u8BED\u8A00\u3002\u5B83\u91C7\u7528\u6781\u7B80\u4E3B\u4E49\u7684\u5F00\u53D1\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u8F7B\u677E\u6784\u5EFA\u7B80\u5355\uFF0C\u53EF\u9760\uFF0C\u9AD8\u6548\u7684\u8F6F\u4EF6\u3002</p><h2 id="\u4E0B\u8F7Dgo" tabindex="-1"><a class="header-anchor" href="#\u4E0B\u8F7Dgo" aria-hidden="true">#</a> \u4E0B\u8F7DGo</h2>',4),u=s("\u76F4\u63A5\u4ECE"),h={href:"https://golang.org/dl/",target:"_blank",rel:"noopener noreferrer"},g=s("Go\u5B98\u7F51"),m=s("\u624B\u52A8\u4E0B\u8F7D\u8F6F\u4EF6\u5305\u3002\u786E\u4FDD\u590D\u5236\u4E0E64\u4F4D\u4F53\u7CFB\u7ED3\u6784\u517C\u5BB9\u7684\u6700\u65B0\u7248\u672C\u7684\u94FE\u63A5\u3002"),b=o(`<p>\u9996\u5148\u8FDB\u5165\u53EF\u5199\u76EE\u5F55\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /tmp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4F7F\u7528<code>curl</code>\u547D\u4EE4\u548CGo\u4E2D\u7684\u94FE\u63A5\u4E0B\u8F7D<code>tar.gz</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">curl</span> -LO https://storage.googleapis.com/golang/go1.11.linux-amd64.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,4),v=s("\u5982\u679C\u4F7F\u7528\u4E0A\u9762\u7684google\u4E0B\u8F7D\u94FE\u63A5\u65E0\u6CD5\u6B63\u5E38\u4E0B\u8F7D\u6216\u8005\u4E0B\u8F7D\u901F\u5EA6\u6BD4\u8F83\u6162\uFF0C\u53EF\u4EE5\u4F7F\u7528Go\u8BED\u8A00\u4E2D\u6587\u7F51\u7684"),_={href:"https://studygolang.com/dl",target:"_blank",rel:"noopener noreferrer"},k=s("\u4E0B\u8F7D\u9875\u9762"),f=s("\uFF0C\u8FD0\u884C\u547D\u4EE4"),x=e("code",null,"curl -LO https://studygolang.com/dl/golang/go1.11.linux-amd64.tar.gz",-1),G=o(`<h2 id="\u9A8C\u8BC1shasum\u503C" tabindex="-1"><a class="header-anchor" href="#\u9A8C\u8BC1shasum\u503C" aria-hidden="true">#</a> \u9A8C\u8BC1shasum\u503C</h2><p>\u4F7F\u7528\u4E0B\u9762\u7684\u9A8C\u8BC1\u65B9\u6CD5\u8BC1\u660E\u6587\u4EF6\u5728\u4E0B\u8F7D\u8FC7\u7A0B\u4E2D\u65E2\u672A\u88AB\u7BE1\u6539\u4E5F\u672A\u88AB\u7834\u574F\u6216\u635F\u574F\u3002shasum\u5E26\u6709\u8BE5-a 256\u6807\u5FD7\u7684\u547D\u4EE4\u4F1A\u4EA7\u751F\u4E00\u4E2A\u552F\u4E00\u7684256\u4F4D\u54C8\u5E0C\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>shasum -a <span class="token number">256</span> go1.11.linux-amd64.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>\u5982\u679C\u63D0\u793A<code>shasum</code>\u547D\u4EE4\u4E0D\u5B58\u5728\uFF0C\u5219\u53EF\u4EE5\u4F7F\u7528<code>yum install -y perl-Digest-SHA</code>\u5B89\u88C5\u8BE5\u6821\u9A8C\u547D\u4EE4\u3002</p></blockquote><p>\u5C06\u8F93\u51FA\u4E2D\u7684\u54C8\u5E0C\u503C\u4E0EGo\u4E0B\u8F7D\u9875\u9762\u4E0A\u7684\u6821\u9A8C\u548C\u503C\u8FDB\u884C\u6BD4\u8F83\u3002\u5982\u679C\u5B83\u4EEC\u5339\u914D\uFF0C\u5219\u53EF\u4EE5\u5B89\u5168\u5730\u65AD\u5B9A\u4E0B\u8F7D\u662F\u5408\u6CD5\u7684\u3002</p><h2 id="\u5B89\u88C5go" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5go" aria-hidden="true">#</a> \u5B89\u88C5Go</h2><p>\u5C06Go\u7684\u5B89\u88C5\u5305\u89E3\u538B\u7F29\u5230<code>/usr/local</code>\u76EE\u5F55\u4E2D\u3002\u4F7F\u7528<code>tar</code>\u547D\u4EE4\u5E76\u5E26\u6709<code>-C</code>\u53C2\u6570\u7684\u547D\u4EE4\u53EF\u5C06\u5185\u5BB9\u4FDD\u5B58\u5230\u6307\u5B9A\u76EE\u5F55\u4E2D\u3002\u8BE5<code>-x</code>\u6807\u5FD7\u6267\u884C\u63D0\u53D6\u529F\u80FD\uFF0C<code>-v</code>\u751F\u6210\u8BE6\u7EC6\u8F93\u51FA\uFF0C<code>-z</code>\u901A\u8FC7gzip\u538B\u7F29\u5B9E\u7528\u7A0B\u5E8F\u8FC7\u6EE4\u5B58\u6863\uFF0C\u5E76<code>-f</code>\u544A\u8BC9\u5B83\u6307\u5B9A\u7684\u6587\u4EF6\u540D\u4EE5\u6267\u884C\u4EE5\u4E0B\u64CD\u4F5C\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">tar</span> -C /usr/local -xvzf go1.11.linux-amd64.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>\u6CE8\u610F\uFF1A\u53D1\u5E03\u8005\u6B63\u5F0F\u5EFA\u8BAE\u5C06Go\u653E\u5728<code>/usr/local</code>\u76EE\u5F55\u4E2D\u3002\u5728\u53E6\u4E00\u4E2A\u4F4D\u7F6E\u5B89\u88C5\u5B83\u4E0D\u4F1A\u5F71\u54CD\u5176\u53EF\u7528\u6027\uFF0C\u4F46\u9700\u8981\u5728Go\u73AF\u5883\u53D8\u91CF\u4E2D\u5B9A\u4E49\u81EA\u5B9A\u4E49\u8DEF\u5F84<code>GOROOT</code>\u3002</p></blockquote><p>\u63A5\u4E0B\u6765\uFF0C\u7528\u6237\u7684\u4E3B\u76EE\u5F55\u4E0B\uFF0C\u6709\u4E09\u4E2A\u5B50\u76EE\u5F55\u521B\u5EFA\u5DE5\u4F5C\u533A\uFF0C<code>bin</code>\uFF0C<code>src</code>\uFF0C\u548C<code>pkg</code>\u3002</p><p>\u8FD9\u91CCgo\u547D\u4EE4\u8C03\u7528\u5DE5\u4F5C\u533A\u76EE\u5F55<code>go-lang-projects</code>\uFF0C\u4E5F\u53EF\u4EE5\u5C06\u5176\u547D\u540D\u4E3A\u4EFB\u4F55\u540D\u79F0\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> -p ~/go-lang-projects/<span class="token punctuation">{</span>bin,pkg,src<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6B64\u65F6\uFF0C\u4F7F\u7528Go\u5C06\u9700\u8981\u5728\u547D\u4EE4\u884C\u4E2D\u6307\u5B9A\u5176\u5B89\u88C5\u4F4D\u7F6E\u7684\u5B8C\u6574\u8DEF\u5F84\u3002\u4E3A\u4E86\u4E0EGo\u8FDB\u884C\u4EA4\u4E92\u66F4\u52A0\u7528\u6237\u53CB\u597D\uFF0C\u4E0B\u9762\u5C06\u8BBE\u7F6E\u4E00\u4E9B\u8DEF\u5F84\u3002</p><h2 id="\u8BBE\u7F6Ego\u7684\u8DEF\u5F84" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u7F6Ego\u7684\u8DEF\u5F84" aria-hidden="true">#</a> \u8BBE\u7F6EGo\u7684\u8DEF\u5F84</h2><p>\u8981\u50CF\u4EFB\u4F55\u5176\u4ED6\u547D\u4EE4\u4E00\u6837\u6267\u884CGo\uFF0C\u6211\u4EEC\u9700\u8981\u5C06\u5176\u5B89\u88C5\u4F4D\u7F6E\u9644\u52A0\u5230<code>$PATH</code>\u53D8\u91CF\u3002Go\u5B89\u88C5\u5728\u7CFB\u7EDF\u76EE\u5F55\u4E2D\uFF0C\u8FD9\u5C31\u662F\u5C06\u5168\u5C40\u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF\u7684\u539F\u56E0\u3002</p><p>\u4F7F\u7528\u7F16\u8F91\u5668\u5728<code>/etc/profile.d/path.sh</code>\u76EE\u5F55\u4E2D\u521B\u5EFA\u811A\u672C\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;export PATH=\\<span class="token environment constant">$PATH</span>:/usr/local/go/bin&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/profile.d/path.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>\u5982\u679CGo\u5B89\u88C5\u5728\u5176\u4ED6\u4F4D\u7F6E\uFF0C\u5219\u76F8\u5E94\u5730\u8C03\u6574\u8DEF\u5F84\u3002</p></blockquote><p>\u4FEE\u6539<code>GOBIN</code>\u548C<code>GOPATH</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;# GOBIN &amp;&amp; GOPATH PATH&quot;</span> <span class="token operator">&gt;&gt;</span> ~/.bash_profile
<span class="token builtin class-name">echo</span> <span class="token string">&#39;export GOBIN=&quot;\\$HOME/go-lang-projects/bin&quot;&#39;</span> <span class="token operator">&gt;&gt;</span> ~/.bash_profile
<span class="token builtin class-name">echo</span> <span class="token string">&#39;export GOPATH=&quot;\\$HOME/go-lang-projects&quot;&#39;</span> <span class="token operator">&gt;&gt;</span> ~/.bash_profile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8981\u5C06\u66F4\u6539\u5E94\u7528\u4E8E\u5F53\u524D\u7684BASH\u4F1A\u8BDD\uFF0C\u8BF7\u4F7F\u7528\u8BE5source\u547D\u4EE4\u91CD\u65B0\u52A0\u8F7D\u66F4\u65B0\u7684\u914D\u7F6E\u6587\u4EF6\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">source</span> /etc/profile <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">source</span> ~/.bash_profile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u53C2\u8003\u5730\u5740" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u5730\u5740" aria-hidden="true">#</a> \u53C2\u8003\u5730\u5740</h2>`,23),O={href:"https://www.digitalocean.com/community/tutorials/how-to-install-go-1-7-on-centos-7",target:"_blank",rel:"noopener noreferrer"},q=s("How To Install Go 1.7 on CentOS 7");function H(T,A){const a=t("ExternalLinkIcon");return l(),d(i,null,[p,e("p",null,[u,e("a",h,[g,n(a)]),m]),b,e("blockquote",null,[e("p",null,[v,e("a",_,[k,n(a)]),f,x])]),G,e("p",null,[e("a",O,[q,n(a)])])],64)}var w=c(r,[["render",H],["__file","how-to-install-go-lang-on-centos-7.html.vue"]]);export{w as default};