import{_ as n,e as s}from"./app.9ecb0222.js";const a={},e=s(`<h1 id="\u65E5\u5FD7\u8F93\u51FA" tabindex="-1"><a class="header-anchor" href="#\u65E5\u5FD7\u8F93\u51FA" aria-hidden="true">#</a> \u65E5\u5FD7\u8F93\u51FA</h1><h2 id="\u6807\u51C6\u65E5\u5FD7\u8F93\u51FA" tabindex="-1"><a class="header-anchor" href="#\u6807\u51C6\u65E5\u5FD7\u8F93\u51FA" aria-hidden="true">#</a> \u6807\u51C6\u65E5\u5FD7\u8F93\u51FA</h2><p>OpenResty \u7684\u6807\u51C6\u65E5\u5FD7\u8F93\u51FA\u539F\u53E5\u4E3A <code>ngx.log(log_level, ...)</code> \uFF0C\u51E0\u4E4E\u53EF\u4EE5\u5728\u4EFB\u4F55 <code>ngx_lua</code> \u9636\u6BB5\u8FDB\u884C\u65E5\u5FD7\u7684\u8F93\u51FA\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>worker_processes  <span class="token number">1</span><span class="token punctuation">;</span>
error_log  logs/error.log error<span class="token punctuation">;</span>    <span class="token comment"># \u65E5\u5FD7\u7EA7\u522B</span>
events <span class="token punctuation">{</span>
    worker_connections  <span class="token number">1024</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

http <span class="token punctuation">{</span>
    server <span class="token punctuation">{</span>
        listen    <span class="token number">80</span><span class="token punctuation">;</span>
        location / <span class="token punctuation">{</span>
            content_by_lua_block <span class="token punctuation">{</span>
                <span class="token builtin class-name">local</span> num <span class="token operator">=</span> <span class="token number">55</span>
                <span class="token builtin class-name">local</span> str <span class="token operator">=</span> <span class="token string">&quot;string&quot;</span>
                <span class="token builtin class-name">local</span> obj
                ngx.log<span class="token punctuation">(</span>ngx.ERR, <span class="token string">&quot;num:&quot;</span>, num<span class="token punctuation">)</span>
                ngx.log<span class="token punctuation">(</span>ngx.INFO, <span class="token string">&quot; string:&quot;</span>, str<span class="token punctuation">)</span>
                print<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span>i am print<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
                ngx.log<span class="token punctuation">(</span>ngx.ERR, <span class="token string">&quot; object:&quot;</span>, obj<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6D4B\u8BD5\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">curl</span> http://127.0.0.1/
<span class="token comment">#</span>
<span class="token comment"># 2022/06/06 13:41:01 [error] 22325#22325: *2132 [lua] content_by_lua(default.conf:14):5: num:55, client: 127.0.0.1, server: 127.0.0.1, request: &quot;GET / HTTP/1.1&quot;, host: &quot;127.0.0.1&quot;</span>
<span class="token comment"># 2022/06/06 13:41:01 [error] 22325#22325: *2132 [lua] content_by_lua(default.conf:14):8:  object:nil, client: 127.0.0.1, server: 127.0.0.1, request: &quot;GET / HTTP/1.1&quot;, host: &quot;127.0.0.1&quot; </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u7684\u4F8B\u5B50\uFF0C\u65E5\u5FD7\u8F93\u51FA\u7EA7\u522B\u4F7F\u7528\u7684 error\uFF0C\u53EA\u6709\u7B49\u4E8E\u6216\u5927\u4E8E\u8FD9\u4E2A\u7EA7\u522B\u7684\u65E5\u5FD7\u624D\u4F1A\u8F93\u51FA\u3002</p><p><strong>\u8FD9\u91CC\u8FD8\u6709\u4E00\u4E2A\u77E5\u8BC6\u70B9\u5C31\u662F OpenResty \u91CC\u9762\u7684 <code>print</code> \u8BED\u53E5\u662F <code>INFO</code> \u7EA7\u522B</strong>\u3002</p><h2 id="\u65E5\u5FD7\u7EA7\u522B" tabindex="-1"><a class="header-anchor" href="#\u65E5\u5FD7\u7EA7\u522B" aria-hidden="true">#</a> \u65E5\u5FD7\u7EA7\u522B</h2><p>\u6709\u5173 Nginx \u7684\u65E5\u5FD7\u7EA7\u522B\uFF0C\u8BF7\u770B\u4E0B\u8868\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ngx.STDERR     -- \u6807\u51C6\u8F93\u51FA
ngx.EMERG      -- \u7D27\u6025\u62A5\u9519
ngx.ALERT      -- \u62A5\u8B66
ngx.CRIT       -- \u4E25\u91CD\uFF0C\u7CFB\u7EDF\u6545\u969C\uFF0C\u89E6\u53D1\u8FD0\u7EF4\u544A\u8B66\u7CFB\u7EDF
ngx.ERR        -- \u9519\u8BEF\uFF0C\u4E1A\u52A1\u4E0D\u53EF\u6062\u590D\u6027\u9519\u8BEF
ngx.WARN       -- \u544A\u8B66\uFF0C\u4E1A\u52A1\u4E2D\u53EF\u5FFD\u7565\u9519\u8BEF
ngx.NOTICE     -- \u63D0\u9192\uFF0C\u4E1A\u52A1\u6BD4\u8F83\u91CD\u8981\u4FE1\u606F
ngx.INFO       -- \u4FE1\u606F\uFF0C\u4E1A\u52A1\u7410\u788E\u65E5\u5FD7\u4FE1\u606F\uFF0C\u5305\u542B\u4E0D\u540C\u60C5\u51B5\u5224\u65AD\u7B49
ngx.DEBUG      -- \u8C03\u8BD5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4EE5\u4E0A\u5E38\u91CF\uFF0C\u8D8A\u5F80\u4E0A\u7B49\u7EA7\u8D8A\u9AD8\u3002\u53EF\u4EE5\u5C1D\u8BD5\u5C06 nginx \u9519\u8BEF\u65E5\u5FD7\u7EA7\u522B\u4FEE\u6539\u4E3A <code>info</code>\uFF0C\u7136\u540E\u91CD\u65B0\u6267\u884C\u4E00\u4E0B\u6D4B\u8BD5\u7528\u4F8B\uFF0C\u5C31\u53EF\u4EE5\u770B\u5230\u5168\u90E8\u65E5\u5FD7\u8F93\u51FA\u7ED3\u679C\u4E86\u3002</p><p>\u5BF9\u4E8E\u5E94\u7528\u5F00\u53D1\uFF0C\u4E00\u822C\u4F7F\u7528 <code>ngx.INFO</code> \u5230 <code>ngx.CRIT</code> \u5C31\u591F\u4E86\u3002\u751F\u4EA7\u4E2D\u9519\u8BEF\u65E5\u5FD7\u5F00\u542F\u5230 <code>error</code> \u7EA7\u522B\u5C31\u591F\u4E86\u3002</p>`,13);function i(t,l){return e}var o=n(a,[["render",i],["__file","log-response.html.vue"]]);export{o as default};
