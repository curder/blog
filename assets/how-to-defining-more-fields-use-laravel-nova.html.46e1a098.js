import{r as t,o,c as l,b as n,a as e,F as c,d as s,e as p}from"./app.a3837e36.js";import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";const r={},u=n("h1",{id:"\u4F7F\u7528-laravel-nova-\u5B9A\u4E49\u66F4\u591A\u5B57\u6BB5",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u4F7F\u7528-laravel-nova-\u5B9A\u4E49\u66F4\u591A\u5B57\u6BB5","aria-hidden":"true"},"#"),s(" \u4F7F\u7528 laravel nova \u5B9A\u4E49\u66F4\u591A\u5B57\u6BB5")],-1),k=s("\u5728"),d={href:"/languages/laravel/nova/how-to-defining-resources-use-laravel-nova.md",target:"_blank",rel:"noopener noreferrer"},b=s("\u4F7F\u7528 laravel nova \u5B9A\u4E49\u8D44\u6E90"),m=s("\u4E2D\u8BF4\u5230\u4F7F\u7528 nova \u5B9A\u4E49\u8D44\u6E90\uFF0C\u8FD9\u91CC\u5BF9\u4E0D\u540C\u7684\u8D44\u6E90\u4F7F\u7528\u4E0D\u540C\u7684\u7C7B\u578B\u7684\u5217\u5B57\u6BB5\u3002"),g=p(`<h2 id="\u7ED9\u8868\u6DFB\u52A0\u4E0D\u540C\u7C7B\u578B\u7684\u5217" tabindex="-1"><a class="header-anchor" href="#\u7ED9\u8868\u6DFB\u52A0\u4E0D\u540C\u7C7B\u578B\u7684\u5217" aria-hidden="true">#</a> \u7ED9\u8868\u6DFB\u52A0\u4E0D\u540C\u7C7B\u578B\u7684\u5217</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>php artisan make:migration --table<span class="token operator">=</span>posts add_more_fields_to_posts_table
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u8FC1\u79FB\u6587\u4EF6\u7684\u5185\u5BB9\u5982\u4E0B\uFF1A</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token doc-comment comment">/**
 * Run the migrations.
 *
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">void</span></span>
 */</span>
<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">up</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token class-name static-context">Schema</span><span class="token operator">::</span><span class="token function">table</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;posts&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">Blueprint</span> <span class="token variable">$table</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token variable">$table</span><span class="token operator">-&gt;</span><span class="token function">datetime</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;publish_at&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">nullable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token variable">$table</span><span class="token operator">-&gt;</span><span class="token property">datetim</span><span class="token punctuation">)</span><span class="token punctuation">,</span>publish_until<span class="token string single-quoted-string">&#39;)-&gt;nullable();
        $table-&gt;boolean(&#39;</span>is_published<span class="token string single-quoted-string">&#39;)-&gt;default(false);  // \u81EA\u5B9A\u4E49\u6570\u636E\u5E93\u5B57\u6BB5\u540D
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
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><p>\u6267\u884C\u8FC1\u79FB\u6587\u4EF6</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>php artisan migrate
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="\u6DFB\u52A0\u5B57\u6BB5" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0\u5B57\u6BB5" aria-hidden="true">#</a> \u6DFB\u52A0\u5B57\u6BB5</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">Laravel<span class="token punctuation">\\</span>Nova<span class="token punctuation">\\</span>Fields<span class="token punctuation">\\</span>DateTime</span><span class="token punctuation">;</span>
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
        <span class="token class-name static-context">Boolean</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Active&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;is_active&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>  <span class="token comment">// \u81EA\u5B9A\u4E49\u6570\u636E\u5E93\u5B57\u6BB5\u540D</span>
        <span class="token class-name static-context">Select</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;category&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">options</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
            <span class="token string single-quoted-string">&#39;category-1&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;Category One&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div>`,8),h=s("\u66F4\u591A\u5B57\u6BB5\u53EF\u4EE5"),f={href:"https://nova.laravel.com/docs/2.0/resources/fields.html#field-types",target:"_blank",rel:"noopener noreferrer"},v=s("\u67E5\u770B\u5B98\u65B9\u6587\u6863"),_=p(`<p>\u5F53\u5B9A\u4E49\u597D\u4E0A\u9762\u7684\u5B57\u6BB5\u7C7B\u578B\u540E\uFF0C\u4FEE\u6539\u4E00\u4E2A\u6587\u7AE0\u7684<code>Publish At</code>\u548C<code>Publish Until</code>\u5B57\u6BB5\uFF0C\u4F1A\u63D0\u793A<code>DateTime field must cast to &#39;datetime&#39; in Eloquent model.</code>\uFF0C\u9519\u8BEF\u3002</p><p>\u8FD9\u662F\u56E0\u4E3A\u6211\u4EEC\u5728\u6A21\u578B\u4E2D\u5B9A\u4E49<code>$casts</code>\u5C5E\u6027\u7684\u5B57\u6BB5\u7C7B\u578B\u3002</p><p>\u4FEE\u6539<code>App\\Post.php</code>\u6A21\u578B\u4E2D\u7684\u5C5E\u6027\u503C\uFF1A</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token keyword">namespace</span> <span class="token package">App</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Database<span class="token punctuation">\\</span>Eloquent<span class="token punctuation">\\</span>Model</span><span class="token punctuation">;</span>
<span class="token keyword">class</span> <span class="token class-name-definition class-name">Post</span> <span class="token keyword">extends</span> <span class="token class-name">Model</span>
<span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token variable">$casts</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
        <span class="token string single-quoted-string">&#39;publish_at&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;datetime&#39;</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;publish_until&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;datetime&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="\u5B57\u6BB5\u9690\u85CF" tabindex="-1"><a class="header-anchor" href="#\u5B57\u6BB5\u9690\u85CF" aria-hidden="true">#</a> \u5B57\u6BB5\u9690\u85CF</h2><p>\u901A\u8FC7\u4FEE\u6539<code>app\\Nova\\Post.php</code>\u4E2D\u7684<code>fields</code>\u65B9\u6CD5\u8FD4\u56DE\u503C\u3002</p><h3 id="\u9996\u9875\u9690\u85CF\u5B57\u6BB5" tabindex="-1"><a class="header-anchor" href="#\u9996\u9875\u9690\u85CF\u5B57\u6BB5" aria-hidden="true">#</a> \u9996\u9875\u9690\u85CF\u5B57\u6BB5</h3><p>\u9ED8\u8BA4\u5728\u6587\u7AE0\u7684\u5217\u8868\u9875\u5C06\u6240\u6709\u7684\u5B57\u6BB5\u90FD\u5C55\u793A\u51FA\u6765\uFF0C\u8FD9\u53EF\u80FD\u4E0D\u662F\u771F\u5B9E\u9700\u6C42\uFF0C\u9690\u85CF<code>publish_at</code>\u548C<code>publish_until</code>\u5B57\u6BB5\u3002</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">fields</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Request</span> <span class="token variable">$request</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>
        <span class="token comment">// ...</span>
        <span class="token class-name static-context">DateTime</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Publish At&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">hideFromIndex</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token class-name static-context">DateTime</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Publish Until&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">hideFromIndex</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token comment">// ...</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="\u66F4\u65B0\u9875\u9762\u9690\u85CF\u5B57\u6BB5" tabindex="-1"><a class="header-anchor" href="#\u66F4\u65B0\u9875\u9762\u9690\u85CF\u5B57\u6BB5" aria-hidden="true">#</a> \u66F4\u65B0\u9875\u9762\u9690\u85CF\u5B57\u6BB5</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">fields</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Request</span> <span class="token variable">$request</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>
        <span class="token comment">// ...</span>
        <span class="token class-name static-context">Select</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;category&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">options</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
            <span class="token string single-quoted-string">&#39;category-1&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;Category One&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">hideWhenUpdating</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>`,11),y=s("\u66F4\u591A\u7684\u9690\u85CF\u548C\u663E\u793A\u9009\u9879\u53EF\u4EE5"),q={href:"https://nova.laravel.com/docs/2.0/resources/fields.html#showing-hiding-fields",target:"_blank",rel:"noopener noreferrer"},x=s("\u67E5\u770B\u8FD9\u91CC"),w=n("ul",null,[n("li",null,"hideFromIndex"),n("li",null,"hideFromDetail"),n("li",null,"hideWhenCreating"),n("li",null,"hideWhenUpdating"),n("li",null,"onlyOnIndex"),n("li",null,"onlyOnDetail"),n("li",null,"onlyOnForms"),n("li",null,"exceptOnForms")],-1),F=n("h2",{id:"\u53C2\u8003\u5730\u5740",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u53C2\u8003\u5730\u5740","aria-hidden":"true"},"#"),s(" \u53C2\u8003\u5730\u5740")],-1),$={href:"https://nova.laravel.com/docs/2.0/resources/fields.html#field-types",target:"_blank",rel:"noopener noreferrer"},D=s("Laravel Nova Field Types"),N={href:"https://nova.laravel.com/docs/2.0/resources/fields.html#showing-hiding-fields",target:"_blank",rel:"noopener noreferrer"},T=s("Laravel Nova Showing Or Hiding Fields");function P(B,I){const a=t("ExternalLinkIcon");return o(),l(c,null,[u,n("p",null,[k,n("a",d,[b,e(a)]),m]),g,n("blockquote",null,[n("p",null,[h,n("a",f,[v,e(a)])])]),_,n("blockquote",null,[n("p",null,[y,n("a",q,[x,e(a)])]),w]),F,n("ul",null,[n("li",null,[n("a",$,[D,e(a)])]),n("li",null,[n("a",N,[T,e(a)])])])],64)}var S=i(r,[["render",P]]);export{S as default};
