import{_ as t,r as i,o as l,c as o,b as n,a,F as c,d as s,e as p}from"./app.4170b1cb.js";const d={},r=n("h1",{id:"\u8F93\u51FA\u54CD\u5E94\u4F53",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u8F93\u51FA\u54CD\u5E94\u4F53","aria-hidden":"true"},"#"),s(" \u8F93\u51FA\u54CD\u5E94\u4F53")],-1),u=n("p",null,"HTTP\u54CD\u5E94\u62A5\u6587\u5206\u4E3A\u4E09\u4E2A\u90E8\u5206\uFF1A",-1),v=n("ol",null,[n("li",null,"\u54CD\u5E94\u884C"),n("li",null,"\u54CD\u5E94\u5934"),n("li",null,"\u54CD\u5E94\u4F53")],-1),m=s("\u5BF9\u4E8E HTTP \u54CD\u5E94\u4F53\u7684\u8F93\u51FA\uFF0C\u5728 OpenResty \u4E2D\u8C03\u7528 "),b={href:"https://github.com/openresty/lua-nginx-module#ngxsay",target:"_blank",rel:"noopener noreferrer"},k=n("code",null,"ngx.say",-1),h=s(" \u6216 "),_={href:"https://github.com/openresty/lua-nginx-module#ngxprint",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"ngx.print",-1),x=s(" \u5373\u53EF\u3002"),y=p(`<p>\u7ECF\u8FC7\u67E5\u770B\u5B98\u65B9 wiki \uFF0C\u8FD9\u4E24\u8005\u90FD\u662F\u8F93\u51FA\u54CD\u5E94\u4F53\uFF0C\u533A\u522B\u662F ngx.say \u4F1A\u5BF9\u8F93\u51FA\u54CD\u5E94\u4F53\u591A\u8F93\u51FA\u4E00\u4E2A \\n \u3002</p><p>\u5982\u679C\u7528\u7684\u662F\u6D4F\u89C8\u5668\u5B8C\u6210\u7684\u529F\u80FD\u8C03\u8BD5\uFF0C\u4F7F\u7528\u8FD9\u4E24\u7740\u662F\u6CA1\u6709\u533A\u522B\u7684\u3002</p><p>\u4F46\u662F\u5982\u679C\u4F7F\u7528\u5404\u79CD\u7EC8\u7AEF\u5DE5\u5177\uFF0C\u8FD9\u65F6\u5019\u4F7F\u7528 <code>ngx.say</code> \u660E\u663E\u5C31\u66F4\u65B9\u4FBF\u4E86\u3002</p><h2 id="ngx-say-\u4E0E-ngx-print-\u5747\u4E3A\u5F02\u6B65\u8F93\u51FA" tabindex="-1"><a class="header-anchor" href="#ngx-say-\u4E0E-ngx-print-\u5747\u4E3A\u5F02\u6B65\u8F93\u51FA" aria-hidden="true">#</a> <code>ngx.say</code> \u4E0E <code>ngx.print</code> \u5747\u4E3A\u5F02\u6B65\u8F93\u51FA</h2><p>\u5F53\u8C03\u7528 <code>ngx.say</code> \u540E\u5E76\u4E0D\u4F1A\u7ACB\u523B\u8F93\u51FA\u54CD\u5E94\u4F53\u3002</p><p>\u53C2\u8003\u4E0B\u9762\u7684\u4F8B\u5B50\uFF1A</p><div class="language-nginx ext-nginx line-numbers-mode"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">listen</span>    <span class="token number">80</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server_name</span> 127.0.0.1</span><span class="token punctuation">;</span>
    
    <span class="token directive"><span class="token keyword">location</span> = /say</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">default_type</span> text/html</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">content_by_lua_block</span></span> <span class="token punctuation">{</span>
            ngx.print(&quot;hello &quot;)
            ngx.sleep(1)
            ngx.say(&quot;the world&quot;)
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6D4B\u8BD5\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">curl</span> http://127.0.0.1/say
<span class="token comment"># </span>
<span class="token comment"># hello the world</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="nginx-print-\u8F93\u51FAtable" tabindex="-1"><a class="header-anchor" href="#nginx-print-\u8F93\u51FAtable" aria-hidden="true">#</a> <code>nginx.print</code> \u8F93\u51FAtable</h2><p>\u5229\u7528 ngx.print \u7684\u7279\u6027\u4E86\uFF0C\u5B83\u7684\u8F93\u5165\u53C2\u6570\u53EF\u4EE5\u662F\u5355\u4E2A\u6216\u591A\u4E2A\u5B57\u7B26\u4E32\u53C2\u6570\uFF0C\u4E5F\u53EF\u4EE5\u662F table \u5BF9\u8C61\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>server <span class="token punctuation">{</span>
    listen    <span class="token number">80</span><span class="token punctuation">;</span>
    server_name <span class="token number">127.0</span>.0.1<span class="token punctuation">;</span>
    
    location <span class="token operator">=</span> /say <span class="token punctuation">{</span>
        default_type text/html<span class="token punctuation">;</span>
        content_by_lua_block <span class="token punctuation">{</span>
            <span class="token builtin class-name">local</span> table <span class="token operator">=</span> <span class="token punctuation">{</span>
                 <span class="token string">&quot;hello, &quot;</span>,
                 <span class="token punctuation">{</span>
                   <span class="token string">&quot;world: &quot;</span>, 
                   true, 
                   <span class="token string">&quot; or &quot;</span>, 
                   false, 
                   <span class="token punctuation">{</span><span class="token string">&quot;: &quot;</span>, nil<span class="token punctuation">}</span>
                  <span class="token punctuation">}</span>
             <span class="token punctuation">}</span>
             ngx.print<span class="token punctuation">(</span>table<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6D4B\u8BD5\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">curl</span> http://127.0.0.1/say
<span class="token comment">#</span>
<span class="token comment"># hello, world: true or false:</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E5F\u5C31\u662F\u8BF4\u5F53\u6709\u975E\u5E38\u591A\u788E\u7247\u6570\u636E\u65F6\uFF0C\u6CA1\u6709\u5FC5\u8981\u4E00\u5B9A\u8FDE\u63A5\u6210\u5B57\u7B26\u4E32\u540E\u518D\u8FDB\u884C\u8F93\u51FA\u3002</p>`,15),f=s("\u5B8C\u5168\u53EF\u4EE5\u76F4\u63A5\u5B58\u653E\u5728 table \u4E2D\uFF0C\u7528\u6570\u7EC4\u7684\u65B9\u5F0F\u628A\u8FD9\u4E9B\u788E\u7247\u6570\u636E\u7EDF\u4E00\u8D77\u6765\uFF0C\u76F4\u63A5\u8C03\u7528 "),q={href:"https://github.com/openresty/lua-nginx-module#ngxprint",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"ngx.print(table)",-1),T=s(" \u5373\u53EF\u3002"),N=n("p",null,"\u8FD9\u79CD\u65B9\u5F0F\u6548\u7387\u66F4\u9AD8\uFF0C\u5E76\u4E14\u66F4\u5BB9\u6613\u88AB\u4F18\u5316\u3002",-1);function V(B,E){const e=i("ExternalLinkIcon");return l(),o(c,null,[r,u,v,n("p",null,[m,n("a",b,[k,a(e)]),h,n("a",_,[g,a(e)]),x]),y,n("p",null,[f,n("a",q,[w,a(e)]),T]),N],64)}var H=t(d,[["render",V],["__file","response.html.vue"]]);export{H as default};
