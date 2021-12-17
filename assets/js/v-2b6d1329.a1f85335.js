(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1846],{9679:(n,a,s)=>{"use strict";s.r(a),s.d(a,{data:()=>e});const e={key:"v-2b6d1329",path:"/languages/laravel/sort-by-mysql-json-field-value-in-laravel.html",title:"Laravel 使用MySQL按JSON 字段值排序",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"参考地址",slug:"参考地址",children:[]}],filePathRelative:"languages/laravel/sort-by-mysql-json-field-value-in-laravel.md",git:{updatedTime:1639727659e3,contributors:[]}}},7547:(n,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>p});var e=s(6252);const t=(0,e.uE)('<h1 id="laravel-使用mysql按json-字段值排序" tabindex="-1"><a class="header-anchor" href="#laravel-使用mysql按json-字段值排序" aria-hidden="true">#</a> Laravel 使用MySQL按JSON 字段值排序</h1><p>在 Laravel 开发中使用<code>json</code> 类型字段存储多个值，很快就遇到了如何使用 JSON 属性字段对数据进行排序的问题。</p><p>由于 JSON 属性中的数据被转换为字符串数据，因此在 eloquent orderBy 方法中执行 <code>json_field-&gt;property</code> 的常用方法没有给出正确的结果。</p><p>我们可以使用它来排序我们的结果之前，必须将字段属性转换为适当的数据类型，就我而言，我想将其转换为无符号整数。</p><p>Eloquent 模型上的 <code>$casts</code> 属性不适用于 JSON 属性，当前找到的唯一方法是使用 <code>orderByRaw</code>。</p><ul><li>数据排序</li></ul><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token class-name static-context">Post</span><span class="token operator">::</span><span class="token function">orderByRaw</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;CAST(extra-&gt;&quot;$.porpular_order_number&quot; AS unsigned) ASC&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>数据查询</li></ul><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token class-name static-context">Post</span><span class="token operator">::</span><span class="token function">whereJsonContains</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;extra-&gt;is_porpular&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="参考地址" tabindex="-1"><a class="header-anchor" href="#参考地址" aria-hidden="true">#</a> 参考地址</h2>',10),l={href:"https://5balloons.info/sort-by-mysql-json-field-value-in-laravel/",target:"_blank",rel:"noopener noreferrer"},o=(0,e.Uk)("Sort by Mysql JSON Field Value in Laravel"),p={render:function(n,a){const s=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.j4)(e.HY,null,[t,(0,e.Wm)("ul",null,[(0,e.Wm)("li",null,[(0,e.Wm)("a",l,[o,(0,e.Wm)(s)])])])],64)}}}}]);