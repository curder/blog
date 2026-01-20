import{_ as i,M as t,p as l,q as c,R as s,t as a,N as p,a1 as o}from"./framework-64ffeeb4.js";const r={},d={href:"https://github.com/openresty/lua-nginx-module#ngxreqget_headers",target:"_blank",rel:"noopener noreferrer"};function v(u,n){const e=t("ExternalLinkIcon");return l(),c("div",null,[n[3]||(n[3]=s("h1",{id:"获取请求头",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#获取请求头","aria-hidden":"true"},"#"),a(" 获取请求头")],-1)),s("p",null,[n[1]||(n[1]=a("通过 ",-1)),s("a",d,[n[0]||(n[0]=s("code",null,"ngx.req.get_headers()",-1)),p(e)]),n[2]||(n[2]=a(" 方法获取请求头，它返回一个包含所有当前请求标头的 Lua 表。",-1))]),n[4]||(n[4]=o(`<div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">worker_processes</span>  <span class="token number">1</span></span><span class="token punctuation">;</span>        <span class="token comment">#nginx worker 数量</span>
<span class="token directive"><span class="token keyword">error_log</span> logs/error.log</span><span class="token punctuation">;</span>   <span class="token comment">#指定错误日志文件路径</span>
<span class="token directive"><span class="token keyword">events</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">worker_connections</span> <span class="token number">1024</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token directive"><span class="token keyword">http</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
        <span class="token comment">#监听端口，若80端口已被占用，则需要修改</span>
        <span class="token directive"><span class="token keyword">listen</span> <span class="token number">80</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">server_name</span> 127.0.0.1</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">location</span> = /req.headers</span> <span class="token punctuation">{</span>
            <span class="token directive"><span class="token keyword">default_type</span> text/html</span><span class="token punctuation">;</span>
            
            <span class="token directive"><span class="token keyword">content_by_lua_block</span></span> <span class="token punctuation">{</span>
                -- 获取请求头table
                local headers_table = ngx.req.get_headers()
                for k, v in pairs(headers_table) do
                    ngx.say(k.. &quot;:&quot; ..v)
                end
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token string">&#39;http://127.0.0.1/req.headers&#39;</span> <span class="token punctuation">\\</span>
  <span class="token parameter variable">-H</span> <span class="token string">&#39;Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9&#39;</span> <span class="token punctuation">\\</span>
  <span class="token parameter variable">-H</span> <span class="token string">&#39;Accept-Language: zh-CN&#39;</span> <span class="token punctuation">\\</span>
  <span class="token parameter variable">-H</span> <span class="token string">&#39;Cache-Control: no-cache&#39;</span> <span class="token punctuation">\\</span>
  <span class="token parameter variable">-H</span> <span class="token string">&#39;Pragma: no-cache&#39;</span> <span class="token punctuation">\\</span>
  <span class="token parameter variable">-H</span> <span class="token string">&#39;Proxy-Connection: keep-alive&#39;</span> <span class="token punctuation">\\</span>
  <span class="token parameter variable">-H</span> <span class="token string">&#39;Sec-GPC: 1&#39;</span> <span class="token punctuation">\\</span>
  <span class="token parameter variable">-H</span> <span class="token string">&#39;Upgrade-Insecure-Requests: 1&#39;</span> <span class="token punctuation">\\</span>
  <span class="token parameter variable">-H</span> <span class="token string">&#39;User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.5005.61 Safari/537.36&#39;</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3))])}const k=i(r,[["render",v],["__file","get-request-headers.html.vue"]]);export{k as default};
