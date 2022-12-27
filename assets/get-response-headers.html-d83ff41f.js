import{_ as e,M as i,p as t,q as l,R as n,t as s,N as c,a1 as p}from"./framework-96b046e1.js";const r={},o=n("h1",{id:"获取相应头",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#获取相应头","aria-hidden":"true"},"#"),s(" 获取相应头")],-1),d={href:"https://github.com/openresty/lua-nginx-module#ngxrespget_headers",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"ngx.resp.get_headers()",-1),u=p(`<div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">worker_processes</span>  <span class="token number">1</span></span><span class="token punctuation">;</span>        <span class="token comment">#nginx worker 数量</span>
<span class="token directive"><span class="token keyword">error_log</span> logs/error.log</span><span class="token punctuation">;</span>   <span class="token comment">#指定错误日志文件路径</span>
<span class="token directive"><span class="token keyword">events</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">worker_connections</span> <span class="token number">1024</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token directive"><span class="token keyword">http</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
        <span class="token comment">#监听端口，若80端口已被占用，则需要修改</span>
        <span class="token directive"><span class="token keyword">listen</span> <span class="token number">80</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">server_name</span> 127.0.0.1</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">location</span> = /resp.headers</span> <span class="token punctuation">{</span>
            <span class="token directive"><span class="token keyword">default_type</span> text/html</span><span class="token punctuation">;</span>
            
            <span class="token directive"><span class="token keyword">content_by_lua_block</span></span> <span class="token punctuation">{</span>
                -- 获取响应头table
                local headers_table = ngx.resp.get_headers()
                for k, v in pairs(headers_table) do
                    ngx.say(k.. &quot;:&quot; ..v)
                end
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token string">&#39;http://127.0.0.1/resp.headers&#39;</span> <span class="token punctuation">\\</span>
  <span class="token parameter variable">-H</span> <span class="token string">&#39;Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9&#39;</span> <span class="token punctuation">\\</span>
  <span class="token parameter variable">-H</span> <span class="token string">&#39;Accept-Language: zh-CN&#39;</span> <span class="token punctuation">\\</span>
  <span class="token parameter variable">-H</span> <span class="token string">&#39;Cache-Control: no-cache&#39;</span> <span class="token punctuation">\\</span>
  <span class="token parameter variable">-H</span> <span class="token string">&#39;Pragma: no-cache&#39;</span> <span class="token punctuation">\\</span>
  <span class="token parameter variable">-H</span> <span class="token string">&#39;Proxy-Connection: keep-alive&#39;</span> <span class="token punctuation">\\</span>
  <span class="token parameter variable">-H</span> <span class="token string">&#39;Sec-GPC: 1&#39;</span> <span class="token punctuation">\\</span>
  <span class="token parameter variable">-H</span> <span class="token string">&#39;Upgrade-Insecure-Requests: 1&#39;</span> <span class="token punctuation">\\</span>
  <span class="token parameter variable">-H</span> <span class="token string">&#39;User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.5005.61 Safari/537.36&#39;</span>
<span class="token comment">#</span>
<span class="token comment"># connection:keep-alive</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function k(m,b){const a=i("ExternalLinkIcon");return t(),l("div",null,[o,n("p",null,[s("通过 "),n("a",d,[v,c(a)]),s(" 方法获取响应头，它返回一个包含当前所有响应表头的 Lua 表。")]),u])}const g=e(r,[["render",k],["__file","get-response-headers.html.vue"]]);export{g as default};
