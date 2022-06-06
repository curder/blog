import{_ as o,r as i,o as l,c as d,b as n,a,F as r,e as t,d as e}from"./app.970e287f.js";const c={},p=t(`<h1 id="\u83B7\u53D6\u8BF7\u6C42\u4E3B\u4F53" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u8BF7\u6C42\u4E3B\u4F53" aria-hidden="true">#</a> \u83B7\u53D6\u8BF7\u6C42\u4E3B\u4F53</h1><p>\u5728 Nginx \u7684\u5178\u578B\u5E94\u7528\u573A\u666F\u4E2D\uFF0C\u51E0\u4E4E\u90FD\u662F\u53EA\u8BFB\u53D6 HTTP \u5934\u5373\u53EF\uFF0C\u4F8B\u5982\u8D1F\u8F7D\u5747\u8861\u3001\u6B63\u53CD\u5411\u4EE3\u7406\u7B49\u573A\u666F\u3002</p><p>\u4F46\u662F\u5BF9\u4E8E API Server \u6216\u8005 Web Application \uFF0C\u5BF9 body \u53EF\u4EE5\u8BF4\u5C31\u6BD4\u8F83\u654F\u611F\u4E86\u3002</p><p>\u7531\u4E8E OpenResty \u57FA\u4E8E Nginx \uFF0C\u6240\u4EE5\u5929\u7136\u7684\u5BF9\u8BF7\u6C42 body \u7684\u8BFB\u53D6\u7EC6\u8282\u4E0E\u5176\u4ED6\u6210\u719F Web \u6846\u67B6\u6709\u4E9B\u4E0D\u540C\u3002</p><h3 id="\u6700\u7B80\u5355\u7684-hello-xxx" tabindex="-1"><a class="header-anchor" href="#\u6700\u7B80\u5355\u7684-hello-xxx" aria-hidden="true">#</a> \u6700\u7B80\u5355\u7684 \u201CHello xxx\u201D</h3><p>\u5148\u6765\u6784\u9020\u6700\u7B80\u5355\u7684\u4E00\u4E2A\u8BF7\u6C42\uFF0CPOST \u540D\u5B57\u7ED9\u670D\u52A1\u7AEF\uFF0C\u670D\u52A1\u7AEF\u5E94\u7B54\u4E00\u4E2A <code>Hello xxx</code>\u3002</p><div class="language-nginx ext-nginx line-numbers-mode"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">http</span></span> <span class="token punctuation">{</span>
    <span class="token comment"># ...</span>
    <span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">listen</span>    <span class="token number">80</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">server_name</span> 127.0.0.1</span><span class="token punctuation">;</span>

        <span class="token directive"><span class="token keyword">location</span> = /req.body</span> <span class="token punctuation">{</span>
            <span class="token directive"><span class="token keyword">content_by_lua_block</span></span> <span class="token punctuation">{</span>
                ngx.req.read_body()
                local data = ngx.req.get_body_data()
                ngx.say(&quot;Hello &quot;..data)
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),u=e("\u4F7F\u7528 "),b={href:"https://github.com/openresty/lua-nginx-module#ngxreqget_body_data",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"ngx.req.get_body_data()",-1),_=e(" \u8BFB\u8BF7\u6C42\u4F53\uFF0C\u4F1A\u51FA\u73B0\u8BFB\u53D6\u4E0D\u5230\u76F4\u63A5\u8FD4\u56DE "),h=n("code",null,"nil",-1),m=e(" \u7684\u60C5\u51B5\u3002"),k=e("\u5982\u679C\u8BF7\u6C42\u4F53\u5C1A\u672A\u88AB\u8BFB\u53D6\uFF0C\u52A1\u5FC5\u5148\u8C03\u7528 "),g={href:"https://github.com/openresty/lua-nginx-module#ngxreqread_body",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"ngx.req.read_body",-1),y=t(`<p>\u6D4B\u8BD5\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">curl</span> http://127.0.0.1/req.body -d Curder
<span class="token comment">#</span>
<span class="token comment"># Hello Curder</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7531\u4E8E Nginx \u662F\u4E3A\u4E86\u89E3\u51B3\u8D1F\u8F7D\u5747\u8861\u573A\u666F\u8BDE\u751F\u7684\uFF0C\u6240\u4EE5\u5B83\u9ED8\u8BA4\u662F\u4E0D\u8BFB\u53D6 body \u7684\u884C\u4E3A\uFF0C\u4F1A\u5BF9 API Server \u548C Web Application \u573A\u666F\u9020\u6210\u4E00\u4E9B\u5F71\u54CD\u3002</p><p>\u6839\u636E\u9700\u8981\u6B63\u786E\u8BFB\u53D6\u3001\u4E22\u5F03 body \u5BF9 OpenResty \u5F00\u53D1\u662F\u81F3\u5173\u91CD\u8981\u7684\u3002</p>`,4);function f(q,N){const s=i("ExternalLinkIcon");return l(),d(r,null,[p,n("blockquote",null,[n("p",null,[u,n("a",b,[v,a(s)]),_,h,m]),n("p",null,[k,n("a",g,[x,a(s)])])]),y],64)}var H=o(c,[["render",f],["__file","get-request-body.html.vue"]]);export{H as default};
