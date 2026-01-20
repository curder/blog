import{_ as t,M as p,p as l,q as i,a1 as o,R as a,t as s,N as c}from"./framework-64ffeeb4.js";const r={},k={href:"https://laravel.com/docs/5.5/valet#custom-valet-drivers",target:"_blank",rel:"noopener noreferrer"};function u(d,n){const e=p("ExternalLinkIcon");return l(),i("div",null,[n[9]||(n[9]=o(`<h1 id="让valet支持thinkphp3" tabindex="-1"><a class="header-anchor" href="#让valet支持thinkphp3" aria-hidden="true">#</a> 让Valet支持ThinkPHP3</h1><p>主要通过配置文件重写配置获得ThinkPHP3的支持，配置文件放置在<code>~/.valet/Drivers/</code>下，针对ThinkPHP3我们可以使用如下配置文件，文件名命名为<code>ThinkPHP3ValetDriver.php</code>：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">ThinkPHP3ValetDriver</span> <span class="token keyword">extends</span> <span class="token class-name">SampleValetDriver</span>
<span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * Determine if the driver serves the request.
     *
     * <span class="token keyword">@param</span>  <span class="token class-name"><span class="token keyword">string</span></span>  <span class="token parameter">$sitePath</span>
     * <span class="token keyword">@param</span>  <span class="token class-name"><span class="token keyword">string</span></span>  <span class="token parameter">$siteName</span>
     * <span class="token keyword">@param</span>  <span class="token class-name"><span class="token keyword">string</span></span>  <span class="token parameter">$uri</span>
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">bool</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">serves</span><span class="token punctuation">(</span><span class="token variable">$sitePath</span><span class="token punctuation">,</span> <span class="token variable">$siteName</span><span class="token punctuation">,</span> <span class="token variable">$uri</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>

        <span class="token keyword">return</span> <span class="token function">file_exists</span><span class="token punctuation">(</span><span class="token variable">$sitePath</span><span class="token operator">.</span><span class="token string single-quoted-string">&#39;/index.php&#39;</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>
               <span class="token function">file_exists</span><span class="token punctuation">(</span><span class="token variable">$sitePath</span><span class="token operator">.</span><span class="token string single-quoted-string">&#39;/admin_index.php&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * Determine if the incoming request is for a static file.
     *
     * <span class="token keyword">@param</span>  <span class="token class-name"><span class="token keyword">string</span></span>  <span class="token parameter">$sitePath</span>
     * <span class="token keyword">@param</span>  <span class="token class-name"><span class="token keyword">string</span></span>  <span class="token parameter">$siteName</span>
     * <span class="token keyword">@param</span>  <span class="token class-name"><span class="token keyword">string</span></span>  <span class="token parameter">$uri</span>
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">string</span><span class="token punctuation">|</span><span class="token keyword">false</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">isStaticFile</span><span class="token punctuation">(</span><span class="token variable">$sitePath</span><span class="token punctuation">,</span> <span class="token variable">$siteName</span><span class="token punctuation">,</span> <span class="token variable">$uri</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">file_exists</span><span class="token punctuation">(</span><span class="token variable">$staticFilePath</span> <span class="token operator">=</span> <span class="token variable">$sitePath</span> <span class="token operator">.</span> <span class="token variable">$uri</span> <span class="token operator">.</span> <span class="token string single-quoted-string">&#39;index.html&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token variable">$staticFilePath</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">elseif</span> <span class="token punctuation">(</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">isActualFile</span><span class="token punctuation">(</span><span class="token variable">$staticFilePath</span> <span class="token operator">=</span> <span class="token variable">$sitePath</span><span class="token operator">.</span><span class="token variable">$uri</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token variable">$staticFilePath</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token constant boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * Get the fully resolved path to the application&#39;s front controller.
     *
     * <span class="token keyword">@param</span>  <span class="token class-name"><span class="token keyword">string</span></span>  <span class="token parameter">$sitePath</span>
     * <span class="token keyword">@param</span>  <span class="token class-name"><span class="token keyword">string</span></span>  <span class="token parameter">$siteName</span>
     * <span class="token keyword">@param</span>  <span class="token class-name"><span class="token keyword">string</span></span>  <span class="token parameter">$uri</span>
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">string</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">frontControllerPath</span><span class="token punctuation">(</span><span class="token variable">$sitePath</span><span class="token punctuation">,</span> <span class="token variable">$siteName</span><span class="token punctuation">,</span> <span class="token variable">$uri</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token variable">$sitePath</span><span class="token operator">.</span><span class="token string single-quoted-string">&#39;/index.php&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3)),a("p",null,[n[1]||(n[1]=s("关于上面的三个方法",-1)),n[2]||(n[2]=a("code",null,"serves",-1)),n[3]||(n[3]=s("、",-1)),n[4]||(n[4]=a("code",null,"isStaticFile",-1)),n[5]||(n[5]=s("和",-1)),n[6]||(n[6]=a("code",null,"frontControllerPath",-1)),n[7]||(n[7]=s(" 方法的具体介绍可以通过",-1)),a("a",k,[n[0]||(n[0]=s("查看官网",-1)),c(e)]),n[8]||(n[8]=s("获得更多帮助。",-1))])])}const m=t(r,[["render",u],["__file","valet-support-thinkphp-3.html.vue"]]);export{m as default};
