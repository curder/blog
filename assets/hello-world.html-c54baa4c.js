import{_ as l,M as t,p as i,q as o,R as s,t as e,N as d,a1 as r}from"./framework-64ffeeb4.js";const p={},c={href:"https://github.com/openresty/lua-nginx-module#content_by_lua_block",target:"_blank",rel:"noopener noreferrer"};function u(v,n){const a=t("ExternalLinkIcon");return i(),o("div",null,[n[6]||(n[6]=s("h1",{id:"openresty-之-hello-world",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#openresty-之-hello-world","aria-hidden":"true"},"#"),e(" OpenResty 之 Hello World")],-1)),s("p",null,[n[2]||(n[2]=e("在使用OpenResty时常常搭配lua脚本实现逻辑，例如使用 ",-1)),s("a",c,[n[0]||(n[0]=s("code",null,"content_by_lua_block",-1)),n[1]||(n[1]=e(" 指令",-1)),d(a)]),n[3]||(n[3]=e("直接返回一个 ",-1)),n[4]||(n[4]=s("code",null,"Hello World!",-1)),n[5]||(n[5]=e(" 字符串。",-1))]),n[7]||(n[7]=r(`<div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">worker_processes</span>  <span class="token number">1</span></span><span class="token punctuation">;</span>        <span class="token comment">#nginx worker 数量</span>
<span class="token directive"><span class="token keyword">error_log</span> logs/error.log</span><span class="token punctuation">;</span>   <span class="token comment">#指定错误日志文件路径</span>
<span class="token directive"><span class="token keyword">events</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">worker_connections</span> <span class="token number">1024</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token directive"><span class="token keyword">http</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
        <span class="token comment">#监听端口，若80端口已被占用，则需要修改</span>
        <span class="token directive"><span class="token keyword">listen</span> <span class="token number">80</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
            <span class="token directive"><span class="token keyword">default_type</span> text/html</span><span class="token punctuation">;</span>
            
            <span class="token directive"><span class="token keyword">content_by_lua_block</span></span> <span class="token punctuation">{</span>
                ngx.say(&quot;Hello World!&quot;)
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用curl命令访问查看效果：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> http://localhost <span class="token parameter variable">-i</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>HTTP/1.1 200 OK
Date: Tue, 31 May 2022 09:32:25 GMT
Content-Type: text/html
Transfer-Encoding: chunked
Connection: keep-alive

Hello World!
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4))])}const m=l(p,[["render",u],["__file","hello-world.html.vue"]]);export{m as default};
