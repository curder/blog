import{_ as n,p as s,q as a,a1 as e}from"./framework-7e09d608.js";const t={},i=e(`<h1 id="返回json格式" tabindex="-1"><a class="header-anchor" href="#返回json格式" aria-hidden="true">#</a> 返回JSON格式</h1><h2 id="使用lua脚本" tabindex="-1"><a class="header-anchor" href="#使用lua脚本" aria-hidden="true">#</a> 使用Lua脚本</h2><p>使用 <code>cjson.encode()</code> 返回Lua的table数据。</p><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">worker_processes</span>  <span class="token number">1</span></span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">error_log</span>  logs/error.log error</span><span class="token punctuation">;</span>    <span class="token comment"># 日志级别</span>
<span class="token directive"><span class="token keyword">events</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">worker_connections</span>  <span class="token number">1024</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token directive"><span class="token keyword">http</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">listen</span>    <span class="token number">80</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">server_name</span> 127.0.0.1</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
            <span class="token directive"><span class="token keyword">default_type</span> application/json</span><span class="token punctuation">;</span>
            <span class="token directive"><span class="token keyword">content_by_lua_block</span></span> <span class="token punctuation">{</span>
                <span class="token directive"><span class="token keyword">local</span> cjson = require <span class="token string">&quot;cjson&quot;</span>
                local res =</span> <span class="token punctuation">{</span>code=ngx.HTTP_OK<span class="token punctuation">}</span>
                res[&#39;status&#39;] = true
                res[&#39;message&#39;] = &#39;OK&#39;
                ngx.say(cjson.encode(res)) -- 返回JSON
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="直接返回json字符串" tabindex="-1"><a class="header-anchor" href="#直接返回json字符串" aria-hidden="true">#</a> 直接返回JSON字符串</h2><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">worker_processes</span>  <span class="token number">1</span></span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">error_log</span>  logs/error.log error</span><span class="token punctuation">;</span>    <span class="token comment"># 日志级别</span>
<span class="token directive"><span class="token keyword">events</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">worker_connections</span>  <span class="token number">1024</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token directive"><span class="token keyword">http</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">listen</span>    <span class="token number">80</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">server_name</span> 127.0.0.1</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
            <span class="token directive"><span class="token keyword">default_type</span> application/json</span><span class="token punctuation">;</span>
            <span class="token directive"><span class="token keyword">return</span> <span class="token number">200</span> <span class="token string">&#39;{&quot;status&quot;:true,&quot;code&quot;:200,&quot;message&quot;:&quot;OK&quot;}&#39;</span></span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),c=[i];function o(p,l){return s(),a("div",null,c)}const d=n(t,[["render",o],["__file","response-json-format.html.vue"]]);export{d as default};
