import{_ as a,r as i,o as t,c,b as n,a as l,F as p,d as s,e as o}from"./app.2572a747.js";const r={},d=n("h1",{id:"\u83B7\u53D6\u8BF7\u6C42\u5934",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u83B7\u53D6\u8BF7\u6C42\u5934","aria-hidden":"true"},"#"),s(" \u83B7\u53D6\u8BF7\u6C42\u5934")],-1),v=s("\u901A\u8FC7 "),u={href:"https://github.com/openresty/lua-nginx-module#ngxreqget_headers",target:"_blank",rel:"noopener noreferrer"},m=n("code",null,"ngx.req.get_headers()",-1),k=s(" \u65B9\u6CD5\u83B7\u53D6\u8BF7\u6C42\u5934\uFF0C\u5B83\u8FD4\u56DE\u4E00\u4E2A\u5305\u542B\u6240\u6709\u5F53\u524D\u8BF7\u6C42\u6807\u5934\u7684 Lua \u8868\u3002"),b=o(`<div class="language-nginx ext-nginx line-numbers-mode"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">worker_processes</span>  <span class="token number">1</span></span><span class="token punctuation">;</span>        <span class="token comment">#nginx worker \u6570\u91CF</span>
<span class="token directive"><span class="token keyword">error_log</span> logs/error.log</span><span class="token punctuation">;</span>   <span class="token comment">#\u6307\u5B9A\u9519\u8BEF\u65E5\u5FD7\u6587\u4EF6\u8DEF\u5F84</span>
<span class="token directive"><span class="token keyword">events</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">worker_connections</span> <span class="token number">1024</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token directive"><span class="token keyword">http</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
        <span class="token comment">#\u76D1\u542C\u7AEF\u53E3\uFF0C\u82E580\u7AEF\u53E3\u5DF2\u88AB\u5360\u7528\uFF0C\u5219\u9700\u8981\u4FEE\u6539</span>
        <span class="token directive"><span class="token keyword">listen</span> <span class="token number">80</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">server_name</span> 127.0.0.1</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">location</span> = /req.headers</span> <span class="token punctuation">{</span>
            <span class="token directive"><span class="token keyword">default_type</span> text/html</span><span class="token punctuation">;</span>
            
            <span class="token directive"><span class="token keyword">content_by_lua_block</span></span> <span class="token punctuation">{</span>
                -- \u83B7\u53D6\u8BF7\u6C42\u5934table
                local headers_table = ngx.req.get_headers()
                for k, v in pairs(headers_table) do
                    ngx.say(k.. &quot;:&quot; ..v)
                end
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6D4B\u8BD5\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token string">&#39;http://127.0.0.1/req.headers&#39;</span> <span class="token punctuation">\\</span>
  -H <span class="token string">&#39;Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9&#39;</span> <span class="token punctuation">\\</span>
  -H <span class="token string">&#39;Accept-Language: zh-CN&#39;</span> <span class="token punctuation">\\</span>
  -H <span class="token string">&#39;Cache-Control: no-cache&#39;</span> <span class="token punctuation">\\</span>
  -H <span class="token string">&#39;Pragma: no-cache&#39;</span> <span class="token punctuation">\\</span>
  -H <span class="token string">&#39;Proxy-Connection: keep-alive&#39;</span> <span class="token punctuation">\\</span>
  -H <span class="token string">&#39;Sec-GPC: 1&#39;</span> <span class="token punctuation">\\</span>
  -H <span class="token string">&#39;Upgrade-Insecure-Requests: 1&#39;</span> <span class="token punctuation">\\</span>
  -H <span class="token string">&#39;User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.5005.61 Safari/537.36&#39;</span>
<span class="token comment">#</span>
<span class="token comment"># pragma:no-cache</span>
<span class="token comment"># proxy-connection:keep-alive</span>
<span class="token comment"># sec-gpc:1</span>
<span class="token comment"># upgrade-insecure-requests:1</span>
<span class="token comment"># user-agent:Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.5005.61 Safari/537.36</span>
<span class="token comment"># host:127.0.0.1</span>
<span class="token comment"># accept:text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9</span>
<span class="token comment"># accept-language:zh-CN</span>
<span class="token comment"># cache-control:no-cache </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function g(h,_){const e=i("ExternalLinkIcon");return t(),c(p,null,[d,n("p",null,[v,n("a",u,[m,l(e)]),k]),b],64)}var f=a(r,[["render",g],["__file","get-request-headers.html.vue"]]);export{f as default};
