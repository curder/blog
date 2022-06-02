import{_ as o,r as d,o as c,c as i,b as e,a as s,F as r,e as a,d as t}from"./app.b24ee918.js";const l={},p=a('<h1 id="\u5728nginx\u6216\u8005apache\u670D\u52A1\u5668\u4E2D\u914D\u7F6Essi\u652F\u6301" tabindex="-1"><a class="header-anchor" href="#\u5728nginx\u6216\u8005apache\u670D\u52A1\u5668\u4E2D\u914D\u7F6Essi\u652F\u6301" aria-hidden="true">#</a> \u5728Nginx\u6216\u8005Apache\u670D\u52A1\u5668\u4E2D\u914D\u7F6ESSI\u652F\u6301</h1><p>\u867D\u7136\u4E00\u76F4\u5728\u4F7F\u7528\u52A8\u6001\u8BED\u8A00\u5F00\u53D1WEB\u7AD9\u70B9\uFF0C\u4F46\u5728\u5F88\u65E9\u4E4B\u524D\u7EF4\u62A4\u7684\u9879\u76EE\u4E2D\u7528\u8FC7\u4E00\u4E9B\u7279\u6B8A\u7684\u6807\u7B7E\u3002\u7531\u4E8E\u670D\u52A1\u5668\u662F\u524D\u9762\u540C\u4E8B\u914D\u7F6E\u597D\u53EA\u8981\u6309\u7167\u89C4\u5219\u5199\u5C31\u4F1A\u751F\u6548\uFF0C\u800C\u5728\u6211\u672C\u5730\u7684\u670D\u52A1\u5668\u5374\u59CB\u7EC8\u65E0\u6CD5\u5C55\u73B0\u9884\u671F\u7684\u7ED3\u679C\uFF0C\u8FD9\u8BA9\u6211\u5F88\u56F0\u60D1\u3002</p><p>\u4E00\u822C\u60C5\u51B5\u4E0B\uFF0C\u5728\u5F00\u53D1\u9759\u6001\u7F51\u9875\u65F6\uFF0C\u7F51\u9875\u7684\u5934\u90E8\u548C\u5C3E\u90E8\u57FA\u672C\u662F\u4E00\u6837\u7684\uFF0C\u6B64\u65F6\u5F53\u7136\u53EF\u4EE5\u6BCF\u4E2A\u9875\u9762\u662F\u72EC\u7ACB\u7F16\u5199\uFF0C\u8FD9\u6837\u7684\u505A\u6CD5\u4F1A\u6709\u5927\u91CF\u91CD\u590D\u4EE3\u7801\uFF0C\u4E0D\u4FBF\u4E8E\u540E\u671F\u4FEE\u6539\u7EF4\u62A4\u3002</p><p>\u8FD9\u65F6\u901A\u8FC7\u914D\u7F6E\u670D\u52A1\u5668\u7684SSI\u652F\u6301\u6765\u8FBE\u5230\u7B80\u5316\u8FD9\u4E00\u91CD\u590D\u7F16\u7801\u6587\u4EF6\u7684\u76EE\u7684\u3002</p><h2 id="\u4EC0\u4E48\u662Fssi" tabindex="-1"><a class="header-anchor" href="#\u4EC0\u4E48\u662Fssi" aria-hidden="true">#</a> \u4EC0\u4E48\u662FSSI</h2><p><strong>SSI</strong>\u662FServer Sidde Include\u7684\u7F29\u5199\uFF0C\u662F\u670D\u52A1\u5668\u5305\u542B\u7684\u610F\u601D\uFF0C\u652F\u6301\u5927\u90E8\u5206\u7684web\u670D\u52A1\u5668\uFF0C\u4F8B\u5982\uFF1AApache\u3001Nginx\u3001Tomcat\u7B49\u7B49\u3002</p><p>\u5B83\u7684\u5DE5\u4F5C\u539F\u7406\u662F\uFF1A\u5728\u9875\u9762\u53D1\u9001\u5230\u5BA2\u6237\u7AEF\u4E4B\u524D\uFF0C\u4F7F\u7528SSI\u6307\u4EE4\u5C06\u5F85\u5305\u542B\u7684\u6587\u4EF6\u3001\u56FE\u7247\u7B49\u6587\u4EF6\u5305\u542B\u5230\u8BF7\u6C42\u7684\u7F51\u9875\u4E2D\uFF0C\u901A\u8FC7\u4E00\u4E2A\u975E\u5E38\u7B80\u5355\u7684\u8BED\u53E5\u5373\u53EF\u8C03\u7528\u5305\u542B\u6587\u4EF6\uFF0C\u6B64\u8BED\u53E5\u6307\u793AWEB\u670D\u52A1\u5668\u5C06\u5185\u5BB9\u63D2\u5165\u9002\u5F53\u7F51\u9875\u3002</p><h2 id="\u6307\u4EE4\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u6307\u4EE4\u914D\u7F6E" aria-hidden="true">#</a> \u6307\u4EE4\u914D\u7F6E</h2><p>SSI\u662F\u88ABHTML\u6587\u6863\u5185\u9700\u8981\u8FDB\u884C\u5904\u7406\u7684\u5305\u542B\u90E8\u5206\u7684SSI Servlet\u8C03\u7528\u7684\u3002\u8FD9\u4E9B\u6307\u4EE4\u662FHTML\u6587\u6863\u7684\u6CE8\u91CA\u5F62\u5F0F\uFF0C\u8FD9\u4E9B\u6307\u4EE4\u5728\u5C06\u5185\u5BB9\u53D1\u9001\u5230\u5BA2\u6237\u7AEF\u4E4B\u524D\u8FDB\u884C\u5185\u5BB9\u7684\u66FF\u6362\u3002</p><p>\u6807\u51C6\u914D\u7F6E\u683C\u5F0F\u662F\uFF1A<code>&lt;!--#directive [parm=value] --&gt;</code>\u3002</p><table><thead><tr><th>\u914D\u7F6E\u9879</th><th>\u793A\u4F8B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td><code>config</code></td><td><code>&lt;!--#config timefmt=&quot;%B %Y&quot; --&gt;</code></td><td>\u8BBE\u7F6E\u65E5\u671F\u683C\u5F0F\u4E00\u8D77\u88ABSSI\u5904\u7406\u7684\u5176\u4ED6\u6570\u636E</td></tr><tr><td><code>echo</code></td><td><code>&lt;!--#echo var=&quot;VARIABLE_NAEM&quot; --&gt;</code></td><td>\u5C06\u4F1A\u88AB\u53D8\u91CF\u7684\u503C\u66FF\u6362\u6389</td></tr><tr><td><code>exec</code></td><td>--</td><td>\u7528\u6765\u6267\u884C\u670D\u52A1\u5668\u7AEF\u7684\u547D\u4EE4</td></tr><tr><td><code>include</code></td><td><code>&lt;!--#include virtual=&quot;file-name&quot; --&gt;</code></td><td>\u5305\u542B\u7684\u6587\u4EF6\u7EDD\u5BF9\u8DEF\u5F84</td></tr><tr><td><code>flastmod</code></td><td><code>&lt;!--#flastmod file=&quot;filename.html&quot; --&gt;</code></td><td>\u8FD4\u56DE\u67D0\u4E2A\u6587\u4EF6\u6700\u540E\u4E00\u6B21\u4FEE\u6539\u7684\u65F6\u95F4</td></tr><tr><td><code>fsize</code></td><td><code>&lt;!--#fzie file=&quot;filename.html&quot; --&gt;</code></td><td>\u8FD4\u56DE\u67D0\u4E2A\u6587\u4EF6\u7684\u5927\u5C0F</td></tr><tr><td><code>printenv</code></td><td><code>&lt;!--#printenv --&gt;</code></td><td>\u8FD4\u56DE\u6240\u6709\u5B9A\u4E49\u7684\u53D8\u91CF</td></tr><tr><td><code>set</code></td><td><code>&lt;!--#set var=&quot;foo&quot; value=&quot;Bar&quot; --&gt;</code></td><td>\u7528\u6765\u4E3A\u5B9A\u4E49\u7684\u53D8\u91CF\u8D4B\u503C</td></tr></tbody></table><h3 id="nginx\u542F\u7528ssi" tabindex="-1"><a class="header-anchor" href="#nginx\u542F\u7528ssi" aria-hidden="true">#</a> Nginx\u542F\u7528SSI</h3>',12),h=t("\u5B98\u65B9\u6587\u6863\u5730\u5740\uFF1A "),u={href:"http://nginx.org/en/docs/http/ngx_http_ssi_module.html",target:"_blank",rel:"noopener noreferrer"},v=t("Module ngx_http_ssi_module"),_=a(`<p>Nginx\u7684SSI\u914D\u7F6E\u9009\u9879\u4E3B\u8981\u662F\u4EE5\u4E0B\u4E09\u4E2A\uFF1A</p><ul><li><p><code>ssi</code> \u9ED8\u8BA4\u503C<code>off</code>\uFF0C\u5982\u679C\u8981\u542F\u7528SSI\uFF0C\u5C06\u5176\u8BBE\u4E3A<code>on</code></p></li><li><p><code>ssi_silent_errors</code> \u9ED8\u8BA4\u503C<code>off</code>\uFF0C\u5F00\u542F\u540E\u5728\u5904\u7406SSI\u6587\u4EF6\u51FA\u9519\u65F6\u4E0D\u8F93\u51FA\u9519\u8BEF\u63D0\u793A<code>[an error occurred while processing the directive]</code>,\u5B9E\u9645\u6D4B\u8BD5\u5E76\u6CA1\u6709\u6291\u5236\u9519\u8BEF\u3002</p></li><li><p><code>ssi_types</code> \u9ED8\u8BA4\u662F<code>text/html</code>\uFF0C\u6240\u4EE5\u5982\u679C\u9700\u652F\u6301html\uFF0C\u5219\u4E0D\u9700\u8981\u8BBE\u7F6E\u8FD9\u53E5\uFF0C\u5982\u679C\u9700\u8981\u652F\u6301<strong>shtml</strong>\u683C\u5F0F\u5219\u9700\u8981\u8BBE\u7F6E\uFF1A<code>ssi_types text/shtml</code></p></li></ul><p>\u53C2\u6570\u7684\u4E0A\u4E0B\u6587\u73AF\u5883\u662F:<code>http</code>, <code>server</code>, <code>location</code>, <code>if in location</code>\uFF0C\u4E0B\u9762\u662F\u793A\u4F8B\uFF1A</p><div class="language-nginx ext-nginx line-numbers-mode"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">listen</span>  <span class="token number">80</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server_name</span>  192.168.1.10</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">ssi</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">ssi_silent_errors</span> <span class="token boolean">off</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">ssi_types</span> text/html</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">index</span> index.html</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">root</span> /var/www/html</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">expires</span> <span class="token number">30d</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">access_log</span>      /var/log/nginx/localhost_access_log main</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="apache\u4E0A\u542F\u7528ssi" tabindex="-1"><a class="header-anchor" href="#apache\u4E0A\u542F\u7528ssi" aria-hidden="true">#</a> Apache\u4E0A\u542F\u7528SSI</h3>`,5),k=t("\u5B98\u65B9\u6587\u6863\u5730\u5740\uFF1A"),m={href:"https://httpd.apache.org/docs/current/howto/ssi.html",target:"_blank",rel:"noopener noreferrer"},g=t("Introduction to Server Side Includes"),f=e("p",null,[t("Apache\u7684\u4E3B\u914D\u7F6E\u6587\u4EF6"),e("code",null,"httpd.conf"),t("\u4E2D\u914D\u7F6E\u9700\u8981\u652F\u6301SSI\u7684\u540E\u7F00\uFF08html\uFF09")],-1),S=e("p",null,[t("\u53BB\u6389"),e("code",null,"AddType text/shtml\uFF0CAddOutputFilter INCLUDES .shtml"),t("\u524D\u9762\u6CE8\u91CA\u3002")],-1),x=e("blockquote",null,[e("p",null,"\u6CE8\u610F\u4E00\u4E0B\u5305\u542B\u6587\u4EF6\u7684\u540E\u7F00\u3002")],-1),b=e("h2",{id:"\u53C2\u8003\u94FE\u63A5",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u53C2\u8003\u94FE\u63A5","aria-hidden":"true"},"#"),t(" \u53C2\u8003\u94FE\u63A5")],-1),I={href:"http://www.publiccms.com/introduction/2015/08-25/177.html",target:"_blank",rel:"noopener noreferrer"},w=t("\u5728nginx\u3001apache\u3001tomcat\u3001iis\u4E2D\u914D\u7F6ESSI");function y(q,N){const n=d("ExternalLinkIcon");return c(),i(r,null,[p,e("p",null,[h,e("a",u,[v,s(n)])]),_,e("p",null,[k,e("a",m,[g,s(n)])]),f,S,x,b,e("ul",null,[e("li",null,[e("a",I,[w,s(n)])])])],64)}var B=o(l,[["render",y],["__file","how-to-configure-ssi-support-in-nginx-or-apache-server.html.vue"]]);export{B as default};