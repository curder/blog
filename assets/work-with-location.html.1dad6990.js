import{_ as n,e as s}from"./app.970e287f.js";const a={},e=s(`<h1 id="\u4E0E\u5176\u4ED6-location-\u914D\u5408" tabindex="-1"><a class="header-anchor" href="#\u4E0E\u5176\u4ED6-location-\u914D\u5408" aria-hidden="true">#</a> \u4E0E\u5176\u4ED6 location \u914D\u5408</h1><p>nginx \u4E16\u754C\u7684 <strong>location</strong> \u662F\u5F02\u5E38\u5F3A\u5927\u7684\uFF0C\u6BD5\u7ADF nginx \u7684\u4E3B\u8981\u5E94\u7528\u573A\u666F\u662F\u5728\u8D1F\u8F7D\u5747\u8861\u3001API server\uFF0C\u5728\u4E0D\u540C server\u3001location \u4E4B\u95F4\u8DF3\u8F6C\u662F\u7ECF\u5E38\u6709\u9700\u8981\u7684\u3002</p><p>\u5229\u7528\u4E0D\u540C <strong>location</strong> \u7684\u529F\u80FD\u7EC4\u5408\uFF0C\u53EF\u4EE5\u5B8C\u6210\u5185\u90E8\u8C03\u7528\u3001\u6D41\u6C34\u7EBF\u65B9\u5F0F\u8DF3\u8F6C\u3001\u5916\u90E8\u91CD\u5B9A\u5411\u7B49\u51E0\u5927\u4E0D\u540C\u65B9\u5F0F\u3002</p><h2 id="\u5185\u90E8\u8C03\u7528" tabindex="-1"><a class="header-anchor" href="#\u5185\u90E8\u8C03\u7528" aria-hidden="true">#</a> \u5185\u90E8\u8C03\u7528</h2><p>\u4F8B\u5982\u5BF9\u6570\u636E\u5E93\u3001\u5185\u90E8\u516C\u5171\u51FD\u6570\u7684\u7EDF\u4E00\u63A5\u53E3\uFF0C\u53EF\u4EE5\u628A\u5B83\u4EEC\u653E\u5230\u7EDF\u4E00\u7684 <strong>location</strong> \u4E2D\u3002</p><p>\u901A\u5E38\u60C5\u51B5\u4E0B\uFF0C\u4E3A\u4E86\u4FDD\u62A4\u8FD9\u4E9B\u5185\u90E8\u63A5\u53E3\uFF0C\u90FD\u4F1A\u628A\u8FD9\u4E9B\u63A5\u53E3\u8BBE\u7F6E\u4E3A <code>internal</code> \u3002</p><p>\u8FD9\u6837\u505A\u6700\u4E3B\u8981\u7684\u597D\u5904\u662F\u53EF\u4EE5\u8BA9\u8FD9\u4E2A\u5185\u90E8\u63A5\u53E3\u76F8\u5BF9\u72EC\u7ACB\uFF0C\u4E0D\u53D7\u5916\u754C\u5E72\u6270\u3002</p><p><code>nginx.conf</code> \u6587\u4EF6\u793A\u4F8B\u4EE3\u7801\uFF1A</p><div class="language-nginx ext-nginx line-numbers-mode"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">worker_processes</span>  <span class="token number">1</span></span><span class="token punctuation">;</span>        <span class="token comment">#nginx worker \u6570\u91CF</span>
<span class="token directive"><span class="token keyword">error_log</span> logs/error.log</span><span class="token punctuation">;</span>   <span class="token comment">#\u6307\u5B9A\u9519\u8BEF\u65E5\u5FD7\u6587\u4EF6\u8DEF\u5F84</span>
<span class="token directive"><span class="token keyword">events</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">worker_connections</span> <span class="token number">1024</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token directive"><span class="token keyword">http</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
        <span class="token comment">#\u76D1\u542C\u7AEF\u53E3\uFF0C\u82E580\u7AEF\u53E3\u5DF2\u88AB\u5360\u7528\uFF0C\u5219\u9700\u8981\u4FEE\u6539</span>
        <span class="token directive"><span class="token keyword">listen</span> <span class="token number">80</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">location</span> /internal/sum</span> <span class="token punctuation">{</span>
            <span class="token directive"><span class="token keyword">internal</span></span><span class="token punctuation">;</span> <span class="token comment"># \u53EA\u5141\u8BB8\u5185\u90E8\u8C03\u7528</span>

             <span class="token comment"># \u8FD9\u91CC\u505A\u4E86\u4E00\u4E2A\u6C42\u548C\u8FD0\u7B97\u53EA\u662F\u4E00\u4E2A\u4F8B\u5B50\uFF0C\u53EF\u4EE5\u5728\u8FD9\u91CC\u5B8C\u6210\u4E00\u4E9B\u6570\u636E\u5E93\u3001</span>
             <span class="token comment"># \u7F13\u5B58\u670D\u52A1\u5668\u7684\u64CD\u4F5C\uFF0C\u8FBE\u5230\u57FA\u7840\u6A21\u5757\u548C\u4E1A\u52A1\u903B\u8F91\u5206\u79BB\u76EE\u7684\u3002</span>
            <span class="token directive"><span class="token keyword">content_by_lua_block</span></span> <span class="token punctuation">{</span>
                local args = ngx.req.get_uri_args()
                ngx.say(tonumber(args.a) + tonumber(args.b))
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token directive"><span class="token keyword">location</span> = /</span> <span class="token punctuation">{</span>
            <span class="token directive"><span class="token keyword">content_by_lua_block</span></span> <span class="token punctuation">{</span>
                <span class="token directive"><span class="token keyword">local</span> res = ngx.location.capture(
                    <span class="token string">&quot;/internal/sum&quot;</span>,</span> <span class="token punctuation">{</span>args=<span class="token punctuation">{</span>a=11, b=18<span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token comment"># \u7ED9uri\u4F20\u9012\u5BF9\u5E94\u53C2\u6570</span>
                )
                ngx.say(&quot;status: &quot;, res.status, &quot; result: &quot;, res.body)
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8BBF\u95EE\u67E5\u770B\u7ED3\u679C\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">curl</span> http://127.0.0.1 <span class="token comment"># status: 200 result: 11</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5E76\u884C\u8BF7\u6C42</p><div class="language-nginx ext-nginx line-numbers-mode"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">worker_processes</span>  <span class="token number">1</span></span><span class="token punctuation">;</span>        <span class="token comment"># nginx worker \u6570\u91CF</span>
<span class="token directive"><span class="token keyword">error_log</span> logs/error.log</span><span class="token punctuation">;</span>   <span class="token comment"># \u6307\u5B9A\u9519\u8BEF\u65E5\u5FD7\u6587\u4EF6\u8DEF\u5F84</span>
<span class="token directive"><span class="token keyword">events</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">worker_connections</span> <span class="token number">1024</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token directive"><span class="token keyword">http</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">listen</span> <span class="token number">80</span></span><span class="token punctuation">;</span> <span class="token comment"># \u76D1\u542C\u7AEF\u53E3\uFF0C\u82E580\u7AEF\u53E3\u5DF2\u88AB\u5360\u7528\uFF0C\u5219\u9700\u8981\u4FEE\u6539</span>

        <span class="token directive"><span class="token keyword">location</span> = /internal/sum</span> <span class="token punctuation">{</span> <span class="token comment"># \u6C42\u548C</span>
            <span class="token directive"><span class="token keyword">internal</span></span><span class="token punctuation">;</span>
            <span class="token directive"><span class="token keyword">content_by_lua_block</span></span> <span class="token punctuation">{</span>
                ngx.sleep(0.1)
                local args = ngx.req.get_uri_args()
                ngx.print(tonumber(args.a) + tonumber(args.b))
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token directive"><span class="token keyword">location</span> = /internal/sub</span> <span class="token punctuation">{</span> <span class="token comment"># \u6C42\u5DEE</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6D4B\u8BD5\u7ED3\u679C\uFF1A</p><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code># \u5E76\u884C\u8BF7\u6C42\u65F6\u95F4 \`curl http://127.0.0.1/parallels\`
status: 200 result: 29
status: 200 result: -7
time used: 0.099999904632568

# \u961F\u5217\u8BF7\u6C42\u65F6\u95F4 \`curl http://127.0.0.1/queue\`
status: 200 result: 29
status: 200 result: -7
time used: 0.20099997520447
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5229\u7528 <code>ngx.location.capture_multi</code> \u51FD\u6570\uFF0C\u76F4\u63A5\u5B8C\u6210\u4E86\u4E24\u4E2A\u5B50\u8BF7\u6C42\u5E76\u884C\u6267\u884C\u3002 \u5F53\u4E24\u4E2A\u8BF7\u6C42\u6CA1\u6709\u76F8\u4E92\u4F9D\u8D56\uFF0C\u8FD9\u79CD\u65B9\u6CD5\u53EF\u4EE5\u6781\u5927\u63D0\u9AD8\u67E5\u8BE2\u6548\u7387\u3002 \u4E24\u4E2A\u65E0\u4F9D\u8D56\u8BF7\u6C42\uFF0C\u5404\u81EA\u662F 100ms\uFF0C\u987A\u5E8F\u6267\u884C\u9700\u8981 200ms\uFF0C\u4F46\u901A\u8FC7\u5E76\u884C\u6267\u884C\u53EF\u4EE5\u5728 100ms \u5B8C\u6210\u4E24\u4E2A\u8BF7\u6C42\u3002 \u5B9E\u9645\u751F\u4EA7\u4E2D\u67E5\u8BE2\u65F6\u95F4\u53EF\u80FD\u6CA1\u8FD9\u4E48\u89C4\u6574\uFF0C\u4F46\u601D\u60F3\u5927\u540C\u5C0F\u5F02\uFF0C\u8FD9\u4E2A\u7279\u6027\u662F\u5F88\u6709\u7528\u7684\u3002</p><h2 id="\u6D41\u6C34\u7EBF\u65B9\u5F0F\u8DF3\u8F6C" tabindex="-1"><a class="header-anchor" href="#\u6D41\u6C34\u7EBF\u65B9\u5F0F\u8DF3\u8F6C" aria-hidden="true">#</a> \u6D41\u6C34\u7EBF\u65B9\u5F0F\u8DF3\u8F6C</h2><p>\u73B0\u5728\u7684\u7F51\u7EDC\u8BF7\u6C42\uFF0C\u5DF2\u7ECF\u53D8\u5F97\u8D8A\u6765\u8D8A\u62E5\u6324\u3002\u5404\u79CD\u4E0D\u540C API \u3001\u4E0B\u8F7D\u8BF7\u6C42\u6DF7\u6742\u5728\u4E00\u8D77\uFF0C\u5C31\u8981\u6C42\u4E0D\u540C\u5382\u5546\u5BF9\u4E0B\u8F7D\u7684\u52A8\u6001\u8C03\u6574\u6709\u5404\u79CD\u4E0D\u540C\u7684\u5B9A\u5236\u7B56\u7565\uFF0C\u800C\u8FD9\u4E9B\u7B56\u7565\u5728\u4E00\u5929\u7684\u4E0D\u540C\u65F6\u95F4\u6BB5\uFF0C\u89C4\u5219\u53EF\u80FD\u8FD8\u4E0D\u4E00\u6837\u3002\u8FD9\u65F6\u5019\u8FD8\u53EF\u4EE5\u6548\u4EFF\u5DE5\u5382\u7684\u6D41\u6C34\u7EBF\u6A21\u5F0F\uFF0C\u9010\u5C42\u8FC7\u6EE4\u3001\u5904\u7406\u3002</p><p>\u793A\u4F8B\u4EE3\u7801\uFF1A</p><div class="language-nginx ext-nginx line-numbers-mode"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">location</span> ~ ^/static/([-_a-zA-Z0-9/]+).jpg</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">set</span> <span class="token variable">$image_name</span> <span class="token variable">$1</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">content_by_lua_block</span></span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">ngx.exec(&quot;/download_internal/images/&quot;</span>
                .. ngx.var.image_name .. <span class="token string">&quot;.jpg&quot;</span>)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token directive"><span class="token keyword">location</span> /download_internal</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">internal</span></span><span class="token punctuation">;</span>
    <span class="token comment"># \u8FD9\u91CC\u8FD8\u53EF\u4EE5\u6709\u5176\u4ED6\u7EDF\u4E00\u7684 download \u4E0B\u8F7D\u8BBE\u7F6E\uFF0C\u4F8B\u5982\u9650\u901F\u7B49</span>
    <span class="token directive"><span class="token keyword">alias</span> /some/other/path/download</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>ngx.exec</code> \u65B9\u6CD5\u4E0E <code>ngx.redirect</code> \u662F\u5B8C\u5168\u4E0D\u540C\u7684\uFF0C\u524D\u8005\u662F\u4E2A\u7EAF\u7CB9\u7684\u5185\u90E8\u8DF3\u8F6C\u5E76\u4E14\u6CA1\u6709\u5F15\u5165\u4EFB\u4F55\u989D\u5916 HTTP \u4FE1\u53F7\u3002</p><p>\u8FD9\u91CC\u7684\u4E24\u4E2A <code>location</code> \u66F4\u50CF\u662F\u6D41\u6C34\u7EBF\u4E0A\u5DE5\u4EBA\u4E4B\u95F4\u7684\u534F\u4F5C\u5173\u7CFB\u3002\u7B2C\u4E00\u73AF\u8282\u7684\u5DE5\u4EBA\u5BF9\u5B8C\u6210\u81EA\u5DF1\u5904\u7406\u90E8\u5206\u540E\uFF0C\u76F4\u63A5\u4EA4\u7ED9\u7B2C\u4E8C\u73AF\u8282\u5904\u7406\u4EBA\uFF08\u5B9E\u9645\u4E0A\u53EF\u4EE5\u6709\u66F4\u591A\u73AF\u8282\uFF09\uFF0C\u5B83\u4EEC\u4E4B\u95F4\u7684\u6570\u636E\u6D41\u662F\u5B9A\u5411\u7684\u3002</p><h2 id="\u5916\u90E8\u91CD\u5B9A\u5411" tabindex="-1"><a class="header-anchor" href="#\u5916\u90E8\u91CD\u5B9A\u5411" aria-hidden="true">#</a> \u5916\u90E8\u91CD\u5B9A\u5411</h2><p>\u4F7F\u7528 <code>rewrite_by_lua_block</code> \u6307\u4EE4\u53EF\u4EE5\u6267\u884C\u5916\u90E8\u91CD\u5B9A\u5411\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>worker_processes  <span class="token number">1</span><span class="token punctuation">;</span>        <span class="token comment">#nginx worker \u6570\u91CF</span>
error_log logs/error.log<span class="token punctuation">;</span>   <span class="token comment">#\u6307\u5B9A\u9519\u8BEF\u65E5\u5FD7\u6587\u4EF6\u8DEF\u5F84</span>
events <span class="token punctuation">{</span>
    worker_connections <span class="token number">1024</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

http <span class="token punctuation">{</span>
    server <span class="token punctuation">{</span>
        <span class="token comment">#\u76D1\u542C\u7AEF\u53E3\uFF0C\u82E580\u7AEF\u53E3\u5DF2\u88AB\u5360\u7528\uFF0C\u5219\u9700\u8981\u4FEE\u6539</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6267\u884C\u6D4B\u8BD5\uFF0C\u7ED3\u679C\u5982\u4E0B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">curl</span> -i http://127.0.0.1 <span class="token comment"># \u91CD\u5B9A\u5411\u5230\u4E86 /another</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">curl</span> -i http://127.0.0.1/another <span class="token comment"># \u6B63\u5E38\u54CD\u5E94</span>
HTTP/1.1 <span class="token number">200</span> OK
Server: openresty/1.21.4.1
Date: Tue, <span class="token number">31</span> May <span class="token number">2022</span> <span class="token number">10</span>:29:54 GMT
Content-Type: text/plain
Transfer-Encoding: chunked
Connection: keep-alive

I am another uri
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F53\u4F7F\u7528\u6D4F\u89C8\u5668\u8BBF\u95EE\u9875\u9762 <code>http://127.0.0.1</code> \u5C31\u53EF\u4EE5\u53D1\u73B0\u6D4F\u89C8\u5668\u4F1A\u81EA\u52A8\u8DF3\u8F6C\u5230 <code>http://127.0.0.1/another</code>\u3002</p><p>\u53E6\u5916\u5916\u90E8\u91CD\u5B9A\u5411\u662F\u53EF\u4EE5\u8DE8\u57DF\u540D\u7684\u3002</p><p>\u4F8B\u5982\u4ECE A \u7F51\u7AD9\u8DF3\u8F6C\u5230 B \u7F51\u7AD9\u662F\u7EDD\u5BF9\u5141\u8BB8\u7684\u3002</p><p>\u5728 CDN \u573A\u666F\u7684\u5927\u91CF\u4E0B\u8F7D\u5E94\u7528\u4E2D\uFF0C\u4E00\u822C\u5206\u4E3A\u8C03\u5EA6\u3001\u5B58\u50A8\u4E24\u4E2A\u91CD\u8981\u73AF\u8282\u3002</p><p>\u8C03\u5EA6\u5C31\u662F\u901A\u8FC7\u6839\u636E\u8BF7\u6C42\u65B9 IP \u3001\u4E0B\u8F7D\u6587\u4EF6\u7B49\u4FE1\u606F\u5BFB\u627E\u6700\u8FD1\u3001\u6700\u5FEB\u8282\u70B9\uFF0C\u5E94\u7B54\u8DF3\u8F6C\u7ED9\u8BF7\u6C42\u65B9\u5B8C\u6210\u4E0B\u8F7D\u3002g</p>`,33);function t(i,p){return e}var o=n(a,[["render",t],["__file","work-with-location.html.vue"]]);export{o as default};
