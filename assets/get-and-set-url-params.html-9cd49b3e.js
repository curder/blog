import{_ as i,M as l,p as c,q as t,R as s,t as n,N as e,a1 as d}from"./framework-ff09ffed.js";const r={},o=s("h1",{id:"获取和设置-uri-和请求主体的参数",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#获取和设置-uri-和请求主体的参数","aria-hidden":"true"},"#"),n(" 获取和设置 uri 和请求主体的参数")],-1),p=s("h2",{id:"获取请求-uri-和请求主体的参数",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#获取请求-uri-和请求主体的参数","aria-hidden":"true"},"#"),n(" 获取请求 uri 和请求主体的参数")],-1),v=s("code",null,"uri",-1),u={href:"https://github.com/openresty/lua-nginx-module#ngxreqget_uri_args",target:"_blank",rel:"noopener noreferrer"},k={href:"https://github.com/openresty/lua-nginx-module#ngxreqget_post_args",target:"_blank",rel:"noopener noreferrer"},m=d(`<p>参考下面例子：</p><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
   <span class="token directive"><span class="token keyword">listen</span>    <span class="token number">80</span></span><span class="token punctuation">;</span>
   <span class="token directive"><span class="token keyword">server_name</span>  127.0.0.1</span><span class="token punctuation">;</span>

   <span class="token directive"><span class="token keyword">location</span> = /print_param</span> <span class="token punctuation">{</span>
       <span class="token directive"><span class="token keyword">content_by_lua_block</span></span> <span class="token punctuation">{</span>
           local arg = ngx.req.get_uri_args()
           for k,v in pairs(arg) do
               ngx.say(&quot;[GET] key:&quot;, k, &quot; v:&quot;, v)
           end

           ngx.req.read_body() -- 获取POST请求时 解析 \`body\` 参数之前一定要先读取 \`body\`
           local arg = ngx.req.get_post_args()
           for k,v in pairs(arg) do
               ngx.say(&quot;[POST] key:&quot;, k, &quot; v:&quot;, v)
           end
       <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token string">&#39;http://127.0.0.1/print_param?a=1&amp;key=value&#39;</span> <span class="token parameter variable">-d</span> <span class="token string">&#39;b=2&amp;key=value&#39;</span> <span class="token comment"># 执行请求</span>
<span class="token comment">#</span>
<span class="token comment">#[GET] key:a v:1</span>
<span class="token comment">#[GET] key:key v:value</span>
<span class="token comment">#[POST] key:key v:value</span>
<span class="token comment">#[POST] key:b v:2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从上面的例子中，可以很明显看到两个函数 <code>ngx.req.get_uri_args</code>、<code>ngx.req.get_post_args</code> 获取数据来源是有明显区别的，前者来自 <code>uri</code> 请求参数，而后者来自 <code>post</code> 请求主体内容。</p><h2 id="传递请求-uri-和请求主体的参数" tabindex="-1"><a class="header-anchor" href="#传递请求-uri-和请求主体的参数" aria-hidden="true">#</a> 传递请求 uri 和请求主体的参数</h2><p>获取到请求参数，是为了需要这些参数来通过添加逻辑完成业务控制目的。uri 内容传递过程中是需要调用 <code>ngx.encode_args</code> 进行规则转义。</p><p>参看下面例子：</p><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">listen</span>    <span class="token number">80</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server_name</span>  127.0.0.1</span><span class="token punctuation">;</span>

    <span class="token comment"># 方法辅助打印uri和请求主体中的参数</span>
    <span class="token directive"><span class="token keyword">location</span> = /print_param</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">content_by_lua_block</span></span> <span class="token punctuation">{</span>
            local arg = ngx.req.get_uri_args()
            for k,v in pairs(arg) do
                ngx.say(&quot;[GET] key:&quot;, k, &quot; v:&quot;, v)
            end

            ngx.req.read_body() -- 获取POST请求时 解析 \`body\` 参数之前一定要先读取 \`body\`
            local arg = ngx.req.get_post_args()
            for k,v in pairs(arg) do
                ngx.say(&quot;[POST] key:&quot;, k, &quot; v:&quot;, v)
            end
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token directive"><span class="token keyword">location</span> = /test</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">content_by_lua_block</span></span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">local</span> res = ngx.location.capture(<span class="token string">&#39;/print_param&#39;</span>,</span> <span class="token punctuation">{</span>
                <span class="token directive"><span class="token keyword">method</span> = ngx.HTTP_POST,
                args = ngx.encode_args(</span><span class="token punctuation">{</span>
                    a = 1, key = &#39;value&#39;
                <span class="token punctuation">}</span>),
                <span class="token directive"><span class="token keyword">body</span> = ngx.encode_args(</span><span class="token punctuation">{</span>
                    b = 2, key = &#39;value&#39;
                <span class="token punctuation">}</span>)
            <span class="token punctuation">}</span>)
            ngx.say(res.body)
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> http://127.0.0.1/test <span class="token comment"># 执行请求</span>

<span class="token comment">#</span>
<span class="token comment">#[GET] key:a v:1</span>
<span class="token comment">#[GET] key:key v:value</span>
<span class="token comment">#[POST] key:b v:2</span>
<span class="token comment">#[POST] key:key v:value</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于 <code>ngx.location.capture</code> 这里有个小技巧，<code>args</code> 参数可以接受字符串或 Lua 表的，这样代码就更加简洁直观。</p><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">listen</span>    <span class="token number">80</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server_name</span>  127.0.0.1</span><span class="token punctuation">;</span>

    <span class="token directive"><span class="token keyword">location</span> = /print_param</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">content_by_lua_block</span></span> <span class="token punctuation">{</span>
        local arg = ngx.req.get_uri_args()
            for k,v in pairs(arg) do
                ngx.say(&quot;[GET] key:&quot;, k, &quot; v:&quot;, v)
            end

            ngx.req.read_body() -- 获取POST请求时 解析 \`body\` 参数之前一定要先读取 \`body\`
            local arg = ngx.req.get_post_args()
            for k,v in pairs(arg) do
                ngx.say(&quot;[POST] key:&quot;, k, &quot; v:&quot;, v)
            end
    <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token directive"><span class="token keyword">location</span> = /test</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">content_by_lua_block</span></span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">local</span> res = ngx.location.capture(<span class="token string">&#39;/print_param&#39;</span>,</span> <span class="token punctuation">{</span>
                    <span class="token directive"><span class="token keyword">method</span> = ngx.HTTP_POST,
                    args =</span> <span class="token punctuation">{</span>a = 1, key = &#39;value&#39;<span class="token punctuation">}</span>,
                    <span class="token directive"><span class="token keyword">body</span> =</span> <span class="token punctuation">{</span>b = 2, key = &#39;value&#39;<span class="token punctuation">}</span>
            <span class="token punctuation">}</span>)
            ngx.say(res.body)
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> http://127.0.0.1/test <span class="token comment"># 执行命令，得到跟使用 ngx.encode_args 相同的结果</span>
<span class="token comment">#</span>
<span class="token comment">#[GET] key:a v:1</span>
<span class="token comment">#[GET] key:key v:value</span>
<span class="token comment">#[POST] key:b v:2</span>
<span class="token comment">#[POST] key:key v:value</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14);function b(g,_){const a=l("ExternalLinkIcon");return c(),t("div",null,[o,p,s("p",null,[n("首先看一下官方 API 文档，获取一个 "),v,n(" 有两个方法："),s("a",u,[n("ngx.req.get_uri_args"),e(a)]),n(" 、"),s("a",k,[n("ngx.req.get_post_args"),e(a)]),n("，二者主要的区别是参数来源有区别。")]),m])}const h=i(r,[["render",b],["__file","get-and-set-url-params.html.vue"]]);export{h as default};
