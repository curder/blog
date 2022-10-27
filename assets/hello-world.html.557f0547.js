import{_ as a,r as l,o as t,c as i,b as n,a as o,F as c,d as s,e as d}from"./app.a391f414.js";const r={},p=n("h1",{id:"openresty-\u4E4B-hello-world",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#openresty-\u4E4B-hello-world","aria-hidden":"true"},"#"),s(" OpenResty \u4E4B Hello World")],-1),u=s("\u5728\u4F7F\u7528OpenResty\u65F6\u5E38\u5E38\u642D\u914Dlua\u811A\u672C\u5B9E\u73B0\u903B\u8F91\uFF0C\u4F8B\u5982\u4F7F\u7528 "),v={href:"https://github.com/openresty/lua-nginx-module#content_by_lua_block",target:"_blank",rel:"noopener noreferrer"},k=n("code",null,"content_by_lua_block",-1),m=s(" \u6307\u4EE4"),b=s("\u76F4\u63A5\u8FD4\u56DE\u4E00\u4E2A "),_=n("code",null,"Hello World!",-1),h=s(" \u5B57\u7B26\u4E32\u3002"),g=d(`<div class="language-nginx ext-nginx line-numbers-mode"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">worker_processes</span>  <span class="token number">1</span></span><span class="token punctuation">;</span>        <span class="token comment">#nginx worker \u6570\u91CF</span>
<span class="token directive"><span class="token keyword">error_log</span> logs/error.log</span><span class="token punctuation">;</span>   <span class="token comment">#\u6307\u5B9A\u9519\u8BEF\u65E5\u5FD7\u6587\u4EF6\u8DEF\u5F84</span>
<span class="token directive"><span class="token keyword">events</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">worker_connections</span> <span class="token number">1024</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token directive"><span class="token keyword">http</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
        <span class="token comment">#\u76D1\u542C\u7AEF\u53E3\uFF0C\u82E580\u7AEF\u53E3\u5DF2\u88AB\u5360\u7528\uFF0C\u5219\u9700\u8981\u4FEE\u6539</span>
        <span class="token directive"><span class="token keyword">listen</span> <span class="token number">80</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
            <span class="token directive"><span class="token keyword">default_type</span> text/html</span><span class="token punctuation">;</span>
            
            <span class="token directive"><span class="token keyword">content_by_lua_block</span></span> <span class="token punctuation">{</span>
                ngx.say(&quot;Hello World!&quot;)
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F7F\u7528curl\u547D\u4EE4\u8BBF\u95EE\u67E5\u770B\u6548\u679C\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">curl</span> http://localhost -i
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>HTTP/1.1 200 OK
Date: Tue, 31 May 2022 09:32:25 GMT
Content-Type: text/html
Transfer-Encoding: chunked
Connection: keep-alive

Hello World!
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function y(x,w){const e=l("ExternalLinkIcon");return t(),i(c,null,[p,n("p",null,[u,n("a",v,[k,m,o(e)]),b,_,h]),g],64)}var T=a(r,[["render",y],["__file","hello-world.html.vue"]]);export{T as default};
