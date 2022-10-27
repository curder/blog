import{_ as n,e as s}from"./app.a2d9dc27.js";const a={},e=s(`<h1 id="\u8FD4\u56DEjson\u683C\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u8FD4\u56DEjson\u683C\u5F0F" aria-hidden="true">#</a> \u8FD4\u56DEJSON\u683C\u5F0F</h1><h2 id="\u4F7F\u7528lua\u811A\u672C" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528lua\u811A\u672C" aria-hidden="true">#</a> \u4F7F\u7528Lua\u811A\u672C</h2><p>\u4F7F\u7528 <code>cjson.encode()</code> \u8FD4\u56DELua\u7684table\u6570\u636E\u3002</p><div class="language-nginx ext-nginx line-numbers-mode"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">worker_processes</span>  <span class="token number">1</span></span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">error_log</span>  logs/error.log error</span><span class="token punctuation">;</span>    <span class="token comment"># \u65E5\u5FD7\u7EA7\u522B</span>
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
                ngx.say(cjson.encode(res)) -- \u8FD4\u56DEJSON
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u76F4\u63A5\u8FD4\u56DEjson\u5B57\u7B26\u4E32" tabindex="-1"><a class="header-anchor" href="#\u76F4\u63A5\u8FD4\u56DEjson\u5B57\u7B26\u4E32" aria-hidden="true">#</a> \u76F4\u63A5\u8FD4\u56DEJSON\u5B57\u7B26\u4E32</h2><div class="language-nginx ext-nginx line-numbers-mode"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">worker_processes</span>  <span class="token number">1</span></span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">error_log</span>  logs/error.log error</span><span class="token punctuation">;</span>    <span class="token comment"># \u65E5\u5FD7\u7EA7\u522B</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function t(i,c){return e}var o=n(a,[["render",t],["__file","response-json-format.html.vue"]]);export{o as default};
