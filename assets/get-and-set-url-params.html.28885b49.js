import{_ as i,r as l,o as c,c as t,b as n,a as e,F as d,d as s,e as o}from"./app.3e062e5d.js";const r={},p=n("h1",{id:"\u83B7\u53D6\u548C\u8BBE\u7F6E-uri-\u548C\u8BF7\u6C42\u4E3B\u4F53\u7684\u53C2\u6570",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u83B7\u53D6\u548C\u8BBE\u7F6E-uri-\u548C\u8BF7\u6C42\u4E3B\u4F53\u7684\u53C2\u6570","aria-hidden":"true"},"#"),s(" \u83B7\u53D6\u548C\u8BBE\u7F6E uri \u548C\u8BF7\u6C42\u4E3B\u4F53\u7684\u53C2\u6570")],-1),v=n("h2",{id:"\u83B7\u53D6\u8BF7\u6C42-uri-\u548C\u8BF7\u6C42\u4E3B\u4F53\u7684\u53C2\u6570",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u83B7\u53D6\u8BF7\u6C42-uri-\u548C\u8BF7\u6C42\u4E3B\u4F53\u7684\u53C2\u6570","aria-hidden":"true"},"#"),s(" \u83B7\u53D6\u8BF7\u6C42 uri \u548C\u8BF7\u6C42\u4E3B\u4F53\u7684\u53C2\u6570")],-1),u=s("\u9996\u5148\u770B\u4E00\u4E0B\u5B98\u65B9 API \u6587\u6863\uFF0C\u83B7\u53D6\u4E00\u4E2A "),k=n("code",null,"uri",-1),m=s(" \u6709\u4E24\u4E2A\u65B9\u6CD5\uFF1A"),b={href:"https://github.com/openresty/lua-nginx-module#ngxreqget_uri_args",target:"_blank",rel:"noopener noreferrer"},g=s("ngx.req.get_uri_args"),_=s(" \u3001"),y={href:"https://github.com/openresty/lua-nginx-module#ngxreqget_post_args",target:"_blank",rel:"noopener noreferrer"},h=s("ngx.req.get_post_args"),x=s("\uFF0C\u4E8C\u8005\u4E3B\u8981\u7684\u533A\u522B\u662F\u53C2\u6570\u6765\u6E90\u6709\u533A\u522B\u3002"),q=o(`<p>\u53C2\u8003\u4E0B\u9762\u4F8B\u5B50\uFF1A</p><div class="language-nginx ext-nginx line-numbers-mode"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
   <span class="token directive"><span class="token keyword">listen</span>    <span class="token number">80</span></span><span class="token punctuation">;</span>
   <span class="token directive"><span class="token keyword">server_name</span>  127.0.0.1</span><span class="token punctuation">;</span>

   <span class="token directive"><span class="token keyword">location</span> = /print_param</span> <span class="token punctuation">{</span>
       <span class="token directive"><span class="token keyword">content_by_lua_block</span></span> <span class="token punctuation">{</span>
           local arg = ngx.req.get_uri_args()
           for k,v in pairs(arg) do
               ngx.say(&quot;[GET] key:&quot;, k, &quot; v:&quot;, v)
           end

           ngx.req.read_body() -- \u83B7\u53D6POST\u8BF7\u6C42\u65F6 \u89E3\u6790 \`body\` \u53C2\u6570\u4E4B\u524D\u4E00\u5B9A\u8981\u5148\u8BFB\u53D6 \`body\`
           local arg = ngx.req.get_post_args()
           for k,v in pairs(arg) do
               ngx.say(&quot;[POST] key:&quot;, k, &quot; v:&quot;, v)
           end
       <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token string">&#39;http://127.0.0.1/print_param?a=1&amp;key=value&#39;</span> -d <span class="token string">&#39;b=2&amp;key=value&#39;</span> <span class="token comment"># \u6267\u884C\u8BF7\u6C42</span>
<span class="token comment">#</span>
<span class="token comment">#[GET] key:a v:1</span>
<span class="token comment">#[GET] key:key v:value</span>
<span class="token comment">#[POST] key:key v:value</span>
<span class="token comment">#[POST] key:b v:2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4ECE\u4E0A\u9762\u7684\u4F8B\u5B50\u4E2D\uFF0C\u53EF\u4EE5\u5F88\u660E\u663E\u770B\u5230\u4E24\u4E2A\u51FD\u6570 <code>ngx.req.get_uri_args</code>\u3001<code>ngx.req.get_post_args</code> \u83B7\u53D6\u6570\u636E\u6765\u6E90\u662F\u6709\u660E\u663E\u533A\u522B\u7684\uFF0C\u524D\u8005\u6765\u81EA <code>uri</code> \u8BF7\u6C42\u53C2\u6570\uFF0C\u800C\u540E\u8005\u6765\u81EA <code>post</code> \u8BF7\u6C42\u4E3B\u4F53\u5185\u5BB9\u3002</p><h2 id="\u4F20\u9012\u8BF7\u6C42-uri-\u548C\u8BF7\u6C42\u4E3B\u4F53\u7684\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u4F20\u9012\u8BF7\u6C42-uri-\u548C\u8BF7\u6C42\u4E3B\u4F53\u7684\u53C2\u6570" aria-hidden="true">#</a> \u4F20\u9012\u8BF7\u6C42 uri \u548C\u8BF7\u6C42\u4E3B\u4F53\u7684\u53C2\u6570</h2><p>\u83B7\u53D6\u5230\u8BF7\u6C42\u53C2\u6570\uFF0C\u662F\u4E3A\u4E86\u9700\u8981\u8FD9\u4E9B\u53C2\u6570\u6765\u901A\u8FC7\u6DFB\u52A0\u903B\u8F91\u5B8C\u6210\u4E1A\u52A1\u63A7\u5236\u76EE\u7684\u3002uri \u5185\u5BB9\u4F20\u9012\u8FC7\u7A0B\u4E2D\u662F\u9700\u8981\u8C03\u7528 <code>ngx.encode_args</code> \u8FDB\u884C\u89C4\u5219\u8F6C\u4E49\u3002</p><p>\u53C2\u770B\u4E0B\u9762\u4F8B\u5B50\uFF1A</p><div class="language-nginx ext-nginx line-numbers-mode"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">listen</span>    <span class="token number">80</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server_name</span>  127.0.0.1</span><span class="token punctuation">;</span>

    <span class="token comment"># \u65B9\u6CD5\u8F85\u52A9\u6253\u5370uri\u548C\u8BF7\u6C42\u4E3B\u4F53\u4E2D\u7684\u53C2\u6570</span>
    <span class="token directive"><span class="token keyword">location</span> = /print_param</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">content_by_lua_block</span></span> <span class="token punctuation">{</span>
            local arg = ngx.req.get_uri_args()
            for k,v in pairs(arg) do
                ngx.say(&quot;[GET] key:&quot;, k, &quot; v:&quot;, v)
            end

            ngx.req.read_body() -- \u83B7\u53D6POST\u8BF7\u6C42\u65F6 \u89E3\u6790 \`body\` \u53C2\u6570\u4E4B\u524D\u4E00\u5B9A\u8981\u5148\u8BFB\u53D6 \`body\`
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8F93\u51FA\u7ED3\u679C\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">curl</span> http://127.0.0.1/test <span class="token comment"># \u6267\u884C\u8BF7\u6C42</span>

<span class="token comment">#</span>
<span class="token comment">#[GET] key:a v:1</span>
<span class="token comment">#[GET] key:key v:value</span>
<span class="token comment">#[POST] key:b v:2</span>
<span class="token comment">#[POST] key:key v:value</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5BF9\u4E8E <code>ngx.location.capture</code> \u8FD9\u91CC\u6709\u4E2A\u5C0F\u6280\u5DE7\uFF0C<code>args</code> \u53C2\u6570\u53EF\u4EE5\u63A5\u53D7\u5B57\u7B26\u4E32\u6216 Lua \u8868\u7684\uFF0C\u8FD9\u6837\u4EE3\u7801\u5C31\u66F4\u52A0\u7B80\u6D01\u76F4\u89C2\u3002</p><div class="language-nginx ext-nginx line-numbers-mode"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">listen</span>    <span class="token number">80</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server_name</span>  127.0.0.1</span><span class="token punctuation">;</span>

    <span class="token directive"><span class="token keyword">location</span> = /print_param</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">content_by_lua_block</span></span> <span class="token punctuation">{</span>
        local arg = ngx.req.get_uri_args()
            for k,v in pairs(arg) do
                ngx.say(&quot;[GET] key:&quot;, k, &quot; v:&quot;, v)
            end

            ngx.req.read_body() -- \u83B7\u53D6POST\u8BF7\u6C42\u65F6 \u89E3\u6790 \`body\` \u53C2\u6570\u4E4B\u524D\u4E00\u5B9A\u8981\u5148\u8BFB\u53D6 \`body\`
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
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8F93\u51FA\u7ED3\u679C\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">curl</span> http://127.0.0.1/test <span class="token comment"># \u6267\u884C\u547D\u4EE4\uFF0C\u5F97\u5230\u8DDF\u4F7F\u7528 ngx.encode_args \u76F8\u540C\u7684\u7ED3\u679C</span>
<span class="token comment">#</span>
<span class="token comment">#[GET] key:a v:1</span>
<span class="token comment">#[GET] key:key v:value</span>
<span class="token comment">#[POST] key:b v:2</span>
<span class="token comment">#[POST] key:key v:value</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14);function T(w,f){const a=l("ExternalLinkIcon");return c(),t(d,null,[p,v,n("p",null,[u,k,m,n("a",b,[g,e(a)]),_,n("a",y,[h,e(a)]),x]),q],64)}var S=i(r,[["render",T],["__file","get-and-set-url-params.html.vue"]]);export{S as default};
