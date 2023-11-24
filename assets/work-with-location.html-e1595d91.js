import{_ as n,p as s,q as a,a1 as e}from"./framework-7e09d608.js";const t={},i=e(`<h1 id="与其他-location-配合" tabindex="-1"><a class="header-anchor" href="#与其他-location-配合" aria-hidden="true">#</a> 与其他 location 配合</h1><p>nginx 世界的 <strong>location</strong> 是异常强大的，毕竟 nginx 的主要应用场景是在负载均衡、API server，在不同 server、location 之间跳转是经常有需要的。</p><p>利用不同 <strong>location</strong> 的功能组合，可以完成内部调用、流水线方式跳转、外部重定向等几大不同方式。</p><h2 id="内部调用" tabindex="-1"><a class="header-anchor" href="#内部调用" aria-hidden="true">#</a> 内部调用</h2><p>例如对数据库、内部公共函数的统一接口，可以把它们放到统一的 <strong>location</strong> 中。</p><p>通常情况下，为了保护这些内部接口，都会把这些接口设置为 <code>internal</code> 。</p><p>这样做最主要的好处是可以让这个内部接口相对独立，不受外界干扰。</p><p><code>nginx.conf</code> 文件示例代码：</p><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">worker_processes</span>  <span class="token number">1</span></span><span class="token punctuation">;</span>        <span class="token comment">#nginx worker 数量</span>
<span class="token directive"><span class="token keyword">error_log</span> logs/error.log</span><span class="token punctuation">;</span>   <span class="token comment">#指定错误日志文件路径</span>
<span class="token directive"><span class="token keyword">events</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">worker_connections</span> <span class="token number">1024</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token directive"><span class="token keyword">http</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
        <span class="token comment">#监听端口，若80端口已被占用，则需要修改</span>
        <span class="token directive"><span class="token keyword">listen</span> <span class="token number">80</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">location</span> /internal/sum</span> <span class="token punctuation">{</span>
            <span class="token directive"><span class="token keyword">internal</span></span><span class="token punctuation">;</span> <span class="token comment"># 只允许内部调用</span>

             <span class="token comment"># 这里做了一个求和运算只是一个例子，可以在这里完成一些数据库、</span>
             <span class="token comment"># 缓存服务器的操作，达到基础模块和业务逻辑分离目的。</span>
            <span class="token directive"><span class="token keyword">content_by_lua_block</span></span> <span class="token punctuation">{</span>
                local args = ngx.req.get_uri_args()
                ngx.say(tonumber(args.a) + tonumber(args.b))
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token directive"><span class="token keyword">location</span> = /</span> <span class="token punctuation">{</span>
            <span class="token directive"><span class="token keyword">content_by_lua_block</span></span> <span class="token punctuation">{</span>
                <span class="token directive"><span class="token keyword">local</span> res = ngx.location.capture(
                    <span class="token string">&quot;/internal/sum&quot;</span>,</span> <span class="token punctuation">{</span>args=<span class="token punctuation">{</span>a=11, b=18<span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token comment"># 给uri传递对应参数</span>
                )
                ngx.say(&quot;status: &quot;, res.status, &quot; result: &quot;, res.body)
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>访问查看结果：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> http://127.0.0.1 <span class="token comment"># status: 200 result: 11</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>并行请求</p><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">worker_processes</span>  <span class="token number">1</span></span><span class="token punctuation">;</span>        <span class="token comment"># nginx worker 数量</span>
<span class="token directive"><span class="token keyword">error_log</span> logs/error.log</span><span class="token punctuation">;</span>   <span class="token comment"># 指定错误日志文件路径</span>
<span class="token directive"><span class="token keyword">events</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">worker_connections</span> <span class="token number">1024</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token directive"><span class="token keyword">http</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">listen</span> <span class="token number">80</span></span><span class="token punctuation">;</span> <span class="token comment"># 监听端口，若80端口已被占用，则需要修改</span>

        <span class="token directive"><span class="token keyword">location</span> = /internal/sum</span> <span class="token punctuation">{</span> <span class="token comment"># 求和</span>
            <span class="token directive"><span class="token keyword">internal</span></span><span class="token punctuation">;</span>
            <span class="token directive"><span class="token keyword">content_by_lua_block</span></span> <span class="token punctuation">{</span>
                ngx.sleep(0.1)
                local args = ngx.req.get_uri_args()
                ngx.print(tonumber(args.a) + tonumber(args.b))
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token directive"><span class="token keyword">location</span> = /internal/sub</span> <span class="token punctuation">{</span> <span class="token comment"># 求差</span>
            <span class="token directive"><span class="token keyword">internal</span></span><span class="token punctuation">;</span>
            <span class="token directive"><span class="token keyword">content_by_lua_block</span></span> <span class="token punctuation">{</span>
                ngx.sleep(0.1)
                local args = ngx.req.get_uri_args()
                ngx.print(tonumber(args.a) - tonumber(args.b))
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token directive"><span class="token keyword">location</span> = /parallels</span> <span class="token punctuation">{</span>
            <span class="token directive"><span class="token keyword">content_by_lua_block</span></span> <span class="token punctuation">{</span>
                <span class="token directive"><span class="token keyword">local</span> start_time = ngx.now()
                local res1, res2 = ngx.location.capture_multi(</span><span class="token punctuation">{</span>
                    <span class="token punctuation">{</span>&quot;/internal/sum&quot;, <span class="token punctuation">{</span>args=<span class="token punctuation">{</span>a=11, b=18<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">}</span>,
                    <span class="token punctuation">{</span>&quot;/internal/sub&quot;, <span class="token punctuation">{</span>args=<span class="token punctuation">{</span>a=11, b=18<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
                <span class="token punctuation">}</span>)
                ngx.say(&quot;status: &quot;, res1.status, &quot; result: &quot;, res1.body)
                ngx.say(&quot;status: &quot;, res2.status, &quot; result: &quot;, res2.body)
                ngx.say(&quot;time used: &quot;, ngx.now() - start_time)
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token directive"><span class="token keyword">location</span> = /queue</span> <span class="token punctuation">{</span>
            <span class="token directive"><span class="token keyword">content_by_lua_block</span></span> <span class="token punctuation">{</span>
                <span class="token directive"><span class="token keyword">local</span> start_time = ngx.now()
                local res1 = ngx.location.capture_multi(</span> <span class="token punctuation">{</span>
                        <span class="token punctuation">{</span>&quot;/internal/sum&quot;, <span class="token punctuation">{</span>args=<span class="token punctuation">{</span>a=11, b=18<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
                    <span class="token punctuation">}</span>)
                <span class="token directive"><span class="token keyword">local</span> res2 = ngx.location.capture_multi(</span> <span class="token punctuation">{</span>
                        <span class="token punctuation">{</span>&quot;/internal/sub&quot;, <span class="token punctuation">{</span>args=<span class="token punctuation">{</span>a=11, b=18<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
                    <span class="token punctuation">}</span>)
                ngx.say(&quot;status: &quot;, res1.status, &quot; result: &quot;, res1.body)
                ngx.say(&quot;status: &quot;, res2.status, &quot; result: &quot;, res2.body)
                ngx.say(&quot;time used: &quot;, ngx.now() - start_time)
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试结果：</p><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code># 并行请求时间 \`curl http://127.0.0.1/parallels\`
status: 200 result: 29
status: 200 result: -7
time used: 0.099999904632568

# 队列请求时间 \`curl http://127.0.0.1/queue\`
status: 200 result: 29
status: 200 result: -7
time used: 0.20099997520447
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>利用 <code>ngx.location.capture_multi</code> 函数，直接完成了两个子请求并行执行。 当两个请求没有相互依赖，这种方法可以极大提高查询效率。 两个无依赖请求，各自是 100ms，顺序执行需要 200ms，但通过并行执行可以在 100ms 完成两个请求。 实际生产中查询时间可能没这么规整，但思想大同小异，这个特性是很有用的。</p><h2 id="流水线方式跳转" tabindex="-1"><a class="header-anchor" href="#流水线方式跳转" aria-hidden="true">#</a> 流水线方式跳转</h2><p>现在的网络请求，已经变得越来越拥挤。各种不同 API 、下载请求混杂在一起，就要求不同厂商对下载的动态调整有各种不同的定制策略，而这些策略在一天的不同时间段，规则可能还不一样。这时候还可以效仿工厂的流水线模式，逐层过滤、处理。</p><p>示例代码：</p><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">location</span> ~ ^/static/([-_a-zA-Z0-9/]+).jpg</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">set</span> <span class="token variable">$image_name</span> <span class="token variable">$1</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">content_by_lua_block</span></span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">ngx.exec(&quot;/download_internal/images/&quot;</span>
                .. ngx.var.image_name .. <span class="token string">&quot;.jpg&quot;</span>)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token directive"><span class="token keyword">location</span> /download_internal</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">internal</span></span><span class="token punctuation">;</span>
    <span class="token comment"># 这里还可以有其他统一的 download 下载设置，例如限速等</span>
    <span class="token directive"><span class="token keyword">alias</span> /some/other/path/download</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>ngx.exec</code> 方法与 <code>ngx.redirect</code> 是完全不同的，前者是个纯粹的内部跳转并且没有引入任何额外 HTTP 信号。</p><p>这里的两个 <code>location</code> 更像是流水线上工人之间的协作关系。第一环节的工人对完成自己处理部分后，直接交给第二环节处理人（实际上可以有更多环节），它们之间的数据流是定向的。</p><h2 id="外部重定向" tabindex="-1"><a class="header-anchor" href="#外部重定向" aria-hidden="true">#</a> 外部重定向</h2><p>使用 <code>rewrite_by_lua_block</code> 指令可以执行外部重定向。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>worker_processes  <span class="token number">1</span><span class="token punctuation">;</span>        <span class="token comment">#nginx worker 数量</span>
error_log logs/error.log<span class="token punctuation">;</span>   <span class="token comment">#指定错误日志文件路径</span>
events <span class="token punctuation">{</span>
    worker_connections <span class="token number">1024</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

http <span class="token punctuation">{</span>
    server <span class="token punctuation">{</span>
        <span class="token comment">#监听端口，若80端口已被占用，则需要修改</span>
        listen <span class="token number">80</span><span class="token punctuation">;</span>
        location <span class="token operator">=</span> /another <span class="token punctuation">{</span>
            content_by_lua_block <span class="token punctuation">{</span>
                ngx.say<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span>I am another uri<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        location <span class="token operator">=</span> / <span class="token punctuation">{</span>
            rewrite_by_lua_block <span class="token punctuation">{</span>
                <span class="token builtin class-name">return</span> ngx.redirect<span class="token punctuation">(</span><span class="token string">&#39;/another&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行测试，结果如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-i</span> http://127.0.0.1 <span class="token comment"># 重定向到了 /another</span>
HTTP/1.1 <span class="token number">302</span> Moved Temporarily
Server: openresty/1.21.4.1
Date: Tue, <span class="token number">31</span> May <span class="token number">2022</span> <span class="token number">10</span>:29:46 GMT
Content-Type: text/html
Content-Length: <span class="token number">151</span>
Connection: keep-alive
Location: /another

<span class="token operator">&lt;</span>html<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>head<span class="token operator">&gt;</span><span class="token operator">&lt;</span>title<span class="token operator">&gt;</span><span class="token number">302</span> Found<span class="token operator">&lt;</span>/title<span class="token operator">&gt;</span><span class="token operator">&lt;</span>/head<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>body<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>center<span class="token operator">&gt;</span><span class="token operator">&lt;</span>h<span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span><span class="token number">302</span> Found<span class="token operator">&lt;</span>/h<span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span><span class="token operator">&lt;</span>/center<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>hr<span class="token operator">&gt;</span><span class="token operator">&lt;</span>center<span class="token operator">&gt;</span>openresty/1.21.4.<span class="token operator"><span class="token file-descriptor important">1</span>&lt;</span>/center<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>/body<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>/html<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-i</span> http://127.0.0.1/another <span class="token comment"># 正常响应</span>
HTTP/1.1 <span class="token number">200</span> OK
Server: openresty/1.21.4.1
Date: Tue, <span class="token number">31</span> May <span class="token number">2022</span> <span class="token number">10</span>:29:54 GMT
Content-Type: text/plain
Transfer-Encoding: chunked
Connection: keep-alive

I am another uri
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当使用浏览器访问页面 <code>http://127.0.0.1</code> 就可以发现浏览器会自动跳转到 <code>http://127.0.0.1/another</code>。</p><p>另外外部重定向是可以跨域名的。</p><p>例如从 A 网站跳转到 B 网站是绝对允许的。</p><p>在 CDN 场景的大量下载应用中，一般分为调度、存储两个重要环节。</p><p>调度就是通过根据请求方 IP 、下载文件等信息寻找最近、最快节点，应答跳转给请求方完成下载。g</p>`,33),p=[i];function l(o,c){return s(),a("div",null,p)}const u=n(t,[["render",l],["__file","work-with-location.html.vue"]]);export{u as default};
