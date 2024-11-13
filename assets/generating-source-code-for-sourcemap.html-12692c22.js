import{_ as c,M as r,p,q as i,R as n,t as e,N as s,a1 as o}from"./framework-ff09ffed.js";const l={},d=n("h1",{id:"生成源代码的sourcemap",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#生成源代码的sourcemap","aria-hidden":"true"},"#"),e(" 生成源代码的SourceMap")],-1),u=n("p",null,"为什么要生成SourceMap呢?",-1),v={href:"http://www.ruanyifeng.com/blog/2013/01/javascript_source_map.html",target:"_blank",rel:"noopener noreferrer"},m=o(`<h2 id="下载插件" tabindex="-1"><a class="header-anchor" href="#下载插件" aria-hidden="true">#</a> 下载插件</h2><p>修改<code>package.json</code>文件内容：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;resolutions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;webpack-sources&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.0.1&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;devDependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行<code>npm install</code>安装依赖。</p><h2 id="开启sourcemap" tabindex="-1"><a class="header-anchor" href="#开启sourcemap" aria-hidden="true">#</a> 开启SourceMap</h2><p>修改配置文件<code>webpack.config.js</code>内容：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">devtool</span><span class="token operator">:</span> <span class="token string">&#39;source-map&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> config<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),h=n("code",null,"devtool",-1),k={href:"https://webpack.js.org/configuration/devtool/#devtool",target:"_blank",rel:"noopener noreferrer"},g=o(`<h2 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> run start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>通过上面的编译命令可以看到编译的文件中新增了很多</p>`,3),b=["src"];function _(t,f){const a=r("ExternalLinkIcon");return p(),i("div",null,[d,u,n("p",null,[e("主要是方便在开发环境定位到代码的原始状态，更多详情"),n("a",v,[e("参考这里"),s(a)])]),m,n("p",null,[e("具体"),h,e("的配置值可以"),n("a",k,[e("参考这里"),s(a)]),e("。")]),g,n("img",{src:t.$withBase("/images/languages/javascript/webpack2/generating-source-code-for-sourcemap/generating-source-code-for-sourcemap.png"),alt:""},null,8,b)])}const j=c(l,[["render",_],["__file","generating-source-code-for-sourcemap.html.vue"]]);export{j as default};