import{_ as i,M as t,p as l,q as c,R as n,t as s,N as a,V as u,a1 as p}from"./framework-ff09ffed.js";const r={},d=n("h1",{id:"定义更多字段",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#定义更多字段","aria-hidden":"true"},"#"),s(" 定义更多字段")],-1),k=p(`<h2 id="给表添加不同类型的列" tabindex="-1"><a class="header-anchor" href="#给表添加不同类型的列" aria-hidden="true">#</a> 给表添加不同类型的列</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan make:migration <span class="token parameter variable">--table</span><span class="token operator">=</span>posts add_more_fields_to_posts_table
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>迁移文件的内容如下：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token doc-comment comment">/**
 * Run the migrations.
 *
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">void</span></span>
 */</span>
<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">up</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token class-name static-context">Schema</span><span class="token operator">::</span><span class="token function">table</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;posts&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">Blueprint</span> <span class="token variable">$table</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token variable">$table</span><span class="token operator">-&gt;</span><span class="token function">datetime</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;publish_at&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">nullable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token variable">$table</span><span class="token operator">-&gt;</span><span class="token property">datetim</span><span class="token punctuation">)</span><span class="token punctuation">,</span>publish_until<span class="token string single-quoted-string">&#39;)-&gt;nullable();
        $table-&gt;boolean(&#39;</span>is_published<span class="token string single-quoted-string">&#39;)-&gt;default(false);  // 自定义数据库字段名
        $table-&gt;string(&#39;</span>category<span class="token string single-quoted-string">&#39;)-&gt;nullable();
    });
}

/**
    * Reverse the migrations.
    *
    * @return void
    */
public function down()
{
    Schema::table(&#39;</span>posts<span class="token string single-quoted-string">&#39;, function (Blueprint $table) {
        $table-&gt;dropColumn([&#39;</span>publish_at<span class="token string single-quoted-string">&#39;, &#39;</span>publish_until<span class="token string single-quoted-string">&#39;, &#39;</span>is_published<span class="token string single-quoted-string">&#39;, &#39;</span>category&#39;<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行迁移文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan migrate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="添加字段" tabindex="-1"><a class="header-anchor" href="#添加字段" aria-hidden="true">#</a> 添加字段</h2><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">Laravel<span class="token punctuation">\\</span>Nova<span class="token punctuation">\\</span>Fields<span class="token punctuation">\\</span>DateTime</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Laravel<span class="token punctuation">\\</span>Nova<span class="token punctuation">\\</span>Fields<span class="token punctuation">\\</span>Boolean</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Laravel<span class="token punctuation">\\</span>Nova<span class="token punctuation">\\</span>Fields<span class="token punctuation">\\</span>Select</span><span class="token punctuation">;</span>
<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">fields</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Request</span> <span class="token variable">$request</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>
        <span class="token class-name static-context">ID</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">sortable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token class-name static-context">Text</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Title&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">rules</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;required&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">sortable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token class-name static-context">Markdown</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Body&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">rules</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;required&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

        <span class="token class-name static-context">DateTime</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Publish At&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token class-name static-context">DateTime</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Publish Until&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token class-name static-context">Boolean</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Active&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;is_active&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>  <span class="token comment">// 自定义数据库字段名</span>
        <span class="token class-name static-context">Select</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;category&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">options</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
            <span class="token string single-quoted-string">&#39;category-1&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;Category One&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),v={href:"https://nova.laravel.com/docs/2.0/resources/fields.html#field-types",target:"_blank",rel:"noopener noreferrer"},m=p(`<p>当定义好上面的字段类型后，修改一个文章的<code>Publish At</code>和<code>Publish Until</code>字段，会提示<code>DateTime field must cast to &#39;datetime&#39; in Eloquent model.</code>，错误。</p><p>这是因为我们在模型中定义<code>$casts</code>属性的字段类型。</p><p>修改<code>App\\Post.php</code>模型中的属性值：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token keyword">namespace</span> <span class="token package">App</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Database<span class="token punctuation">\\</span>Eloquent<span class="token punctuation">\\</span>Model</span><span class="token punctuation">;</span>
<span class="token keyword">class</span> <span class="token class-name-definition class-name">Post</span> <span class="token keyword">extends</span> <span class="token class-name">Model</span>
<span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token variable">$casts</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
        <span class="token string single-quoted-string">&#39;publish_at&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;datetime&#39;</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;publish_until&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;datetime&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="字段隐藏" tabindex="-1"><a class="header-anchor" href="#字段隐藏" aria-hidden="true">#</a> 字段隐藏</h2><p>通过修改<code>app\\Nova\\Post.php</code>中的<code>fields</code>方法返回值。</p><h3 id="首页隐藏字段" tabindex="-1"><a class="header-anchor" href="#首页隐藏字段" aria-hidden="true">#</a> 首页隐藏字段</h3><p>默认在文章的列表页将所有的字段都展示出来，这可能不是真实需求，隐藏<code>publish_at</code>和<code>publish_until</code>字段。</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">fields</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Request</span> <span class="token variable">$request</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>
        <span class="token comment">// ...</span>
        <span class="token class-name static-context">DateTime</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Publish At&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">hideFromIndex</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token class-name static-context">DateTime</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Publish Until&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">hideFromIndex</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token comment">// ...</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="更新页面隐藏字段" tabindex="-1"><a class="header-anchor" href="#更新页面隐藏字段" aria-hidden="true">#</a> 更新页面隐藏字段</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">fields</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Request</span> <span class="token variable">$request</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>
        <span class="token comment">// ...</span>
        <span class="token class-name static-context">Select</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;category&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">options</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
            <span class="token string single-quoted-string">&#39;category-1&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;Category One&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">hideWhenUpdating</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),g={href:"https://nova.laravel.com/docs/2.0/resources/fields.html#showing-hiding-fields",target:"_blank",rel:"noopener noreferrer"},b=n("ul",null,[n("li",null,"hideFromIndex"),n("li",null,"hideFromDetail"),n("li",null,"hideWhenCreating"),n("li",null,"hideWhenUpdating"),n("li",null,"onlyOnIndex"),n("li",null,"onlyOnDetail"),n("li",null,"onlyOnForms"),n("li",null,"exceptOnForms")],-1),h=n("h2",{id:"参考地址",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#参考地址","aria-hidden":"true"},"#"),s(" 参考地址")],-1),f={href:"https://nova.laravel.com/docs/2.0/resources/fields.html#field-types",target:"_blank",rel:"noopener noreferrer"},_={href:"https://nova.laravel.com/docs/2.0/resources/fields.html#showing-hiding-fields",target:"_blank",rel:"noopener noreferrer"};function q(y,x){const o=t("RouterLink"),e=t("ExternalLinkIcon");return l(),c("div",null,[d,n("p",null,[s("在"),a(o,{to:"/languages/laravel/nova/02-how-to-defining-resources-use-laravel-nova.html"},{default:u(()=>[s("使用 laravel nova 定义资源")]),_:1}),s("中说到使用 nova 定义资源，这里对不同的资源使用不同的类型的列字段。")]),k,n("blockquote",null,[n("p",null,[s("更多字段可以"),n("a",v,[s("查看官方文档"),a(e)])])]),m,n("blockquote",null,[n("p",null,[s("更多的隐藏和显示选项可以"),n("a",g,[s("查看这里"),a(e)])]),b]),h,n("ul",null,[n("li",null,[n("a",f,[s("Laravel Nova Field Types"),a(e)])]),n("li",null,[n("a",_,[s("Laravel Nova Showing Or Hiding Fields"),a(e)])])])])}const F=i(r,[["render",q],["__file","03-how-to-defining-more-fields-use-laravel-nova.html.vue"]]);export{F as default};