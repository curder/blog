import{_ as t,M as i,p as l,q as o,R as n,t as s,N as a,a1 as c}from"./framework-96b046e1.js";const p={},d=n("h1",{id:"输出响应体",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#输出响应体","aria-hidden":"true"},"#"),s(" 输出响应体")],-1),r=n("p",null,"HTTP响应报文分为三个部分：",-1),u=n("ol",null,[n("li",null,"响应行"),n("li",null,"响应头"),n("li",null,"响应体")],-1),v={href:"https://github.com/openresty/lua-nginx-module#ngxsay",target:"_blank",rel:"noopener noreferrer"},m=n("code",null,"ngx.say",-1),b={href:"https://github.com/openresty/lua-nginx-module#ngxprint",target:"_blank",rel:"noopener noreferrer"},k=n("code",null,"ngx.print",-1),h=c(`<p>经过查看官方 wiki ，这两者都是输出响应体，区别是 ngx.say 会对输出响应体多输出一个 \\n 。</p><p>如果用的是浏览器完成的功能调试，使用这两着是没有区别的。</p><p>但是如果使用各种终端工具，这时候使用 <code>ngx.say</code> 明显就更方便了。</p><h2 id="ngx-say-与-ngx-print-均为异步输出" tabindex="-1"><a class="header-anchor" href="#ngx-say-与-ngx-print-均为异步输出" aria-hidden="true">#</a> <code>ngx.say</code> 与 <code>ngx.print</code> 均为异步输出</h2><p>当调用 <code>ngx.say</code> 后并不会立刻输出响应体。</p><p>参考下面的例子：</p><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> http://127.0.0.1/say
<span class="token comment"># </span>
<span class="token comment"># hello the world</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="nginx-print-输出table" tabindex="-1"><a class="header-anchor" href="#nginx-print-输出table" aria-hidden="true">#</a> <code>nginx.print</code> 输出table</h2><p>利用 ngx.print 的特性了，它的输入参数可以是单个或多个字符串参数，也可以是 table 对象。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>server <span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> http://127.0.0.1/say
<span class="token comment">#</span>
<span class="token comment"># hello, world: true or false:</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也就是说当有非常多碎片数据时，没有必要一定连接成字符串后再进行输出。</p>`,15),g={href:"https://github.com/openresty/lua-nginx-module#ngxprint",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"ngx.print(table)",-1),x=n("p",null,"这种方式效率更高，并且更容易被优化。",-1);function y(f,q){const e=i("ExternalLinkIcon");return l(),o("div",null,[d,r,u,n("p",null,[s("对于 HTTP 响应体的输出，在 OpenResty 中调用 "),n("a",v,[m,a(e)]),s(" 或 "),n("a",b,[k,a(e)]),s(" 即可。")]),h,n("p",null,[s("完全可以直接存放在 table 中，用数组的方式把这些碎片数据统一起来，直接调用 "),n("a",g,[_,a(e)]),s(" 即可。")]),x])}const N=t(p,[["render",y],["__file","response.html.vue"]]);export{N as default};
