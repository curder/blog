import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const t={},i=e(`<h1 id="日志输出" tabindex="-1"><a class="header-anchor" href="#日志输出" aria-hidden="true">#</a> 日志输出</h1><h2 id="标准日志输出" tabindex="-1"><a class="header-anchor" href="#标准日志输出" aria-hidden="true">#</a> 标准日志输出</h2><p>OpenResty 的标准日志输出原句为 <code>ngx.log(log_level, ...)</code> ，几乎可以在任何 <code>ngx_lua</code> 阶段进行日志的输出。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>worker_processes  <span class="token number">1</span><span class="token punctuation">;</span>
error_log  logs/error.log error<span class="token punctuation">;</span>    <span class="token comment"># 日志级别</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> http://127.0.0.1/
<span class="token comment">#</span>
<span class="token comment"># 2022/06/06 13:41:01 [error] 22325#22325: *2132 [lua] content_by_lua(default.conf:14):5: num:55, client: 127.0.0.1, server: 127.0.0.1, request: &quot;GET / HTTP/1.1&quot;, host: &quot;127.0.0.1&quot;</span>
<span class="token comment"># 2022/06/06 13:41:01 [error] 22325#22325: *2132 [lua] content_by_lua(default.conf:14):8:  object:nil, client: 127.0.0.1, server: 127.0.0.1, request: &quot;GET / HTTP/1.1&quot;, host: &quot;127.0.0.1&quot; </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的例子，日志输出级别使用的 error，只有等于或大于这个级别的日志才会输出。</p><p><strong>这里还有一个知识点就是 OpenResty 里面的 <code>print</code> 语句是 <code>INFO</code> 级别</strong>。</p><h2 id="日志级别" tabindex="-1"><a class="header-anchor" href="#日志级别" aria-hidden="true">#</a> 日志级别</h2><p>有关 Nginx 的日志级别，请看下表：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ngx.STDERR     -- 标准输出
ngx.EMERG      -- 紧急报错
ngx.ALERT      -- 报警
ngx.CRIT       -- 严重，系统故障，触发运维告警系统
ngx.ERR        -- 错误，业务不可恢复性错误
ngx.WARN       -- 告警，业务中可忽略错误
ngx.NOTICE     -- 提醒，业务比较重要信息
ngx.INFO       -- 信息，业务琐碎日志信息，包含不同情况判断等
ngx.DEBUG      -- 调试
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上常量，越往上等级越高。可以尝试将 nginx 错误日志级别修改为 <code>info</code>，然后重新执行一下测试用例，就可以看到全部日志输出结果了。</p><p>对于应用开发，一般使用 <code>ngx.INFO</code> 到 <code>ngx.CRIT</code> 就够了。生产中错误日志开启到 <code>error</code> 级别就够了。</p>`,13),l=[i];function c(o,p){return s(),a("div",null,l)}const d=n(t,[["render",c],["__file","log-response.html.vue"]]);export{d as default};
