"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1628],{8264:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-641fd8a6",path:"/languages/javascript/webpack2/automatically-separate-css-to-independent-file.html",title:"自动分离CSS到独立文件",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"安装",slug:"安装",children:[]},{level:2,title:"配置",slug:"配置",children:[]},{level:2,title:"测试",slug:"测试",children:[]}],filePathRelative:"languages/javascript/webpack2/automatically-separate-css-to-independent-file.md",git:{updatedTime:1639727806e3,contributors:[{name:"curder",email:"q.curder@gmail.com",commits:1}]}}},5246:(n,s,a)=>{a.r(s),a.d(s,{default:()=>l});var e=a(6252);const p=(0,e.uE)('<h1 id="自动分离css到独立文件" tabindex="-1"><a class="header-anchor" href="#自动分离css到独立文件" aria-hidden="true">#</a> 自动分离CSS到独立文件</h1><p>使用<code>extract-text-webpack-plugin</code>插件分离CSS代码到单独文件。</p><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> i extract-text-webpack-plugin@2 --save-dev\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><p>修改<code>webpack.config.js</code>文件，添加如下内容：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> ExtractTextPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;extract-text-webpack-plugin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 包含插件</span>\n\n<span class="token keyword">const</span> plugin <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ExtractTextPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    filename<span class="token operator">:</span> <span class="token string">&#39;[name].css&#39;</span><span class="token punctuation">,</span>\n    ignoreOrder<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>\n    <span class="token comment">// ...</span>\n    module<span class="token operator">:</span> <span class="token punctuation">{</span>\n        rules<span class="token operator">:</span> <span class="token punctuation">[</span>\n            <span class="token punctuation">{</span>\n                test<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>\n                exclude<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>\n                use<span class="token operator">:</span> plugin<span class="token punctuation">.</span><span class="token function">extract</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n                    use<span class="token operator">:</span> <span class="token punctuation">{</span>\n                        loader<span class="token operator">:</span> <span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">,</span>\n                        options<span class="token operator">:</span> <span class="token punctuation">{</span>\n                            modules<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n                        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n                    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n                    fallback<span class="token operator">:</span> <span class="token string">&#39;style-loader&#39;</span><span class="token punctuation">,</span>\n                <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    plugins<span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token comment">// ...</span>\n        plugin<span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> config<span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><h2 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h2><p>访问编译好的页面可以查看到css被分离成单独的文件。</p>',9),t=["src"],c={},l=(0,a(3744).Z)(c,[["render",function(n,s){return(0,e.wg)(),(0,e.iD)(e.HY,null,[p,(0,e._)("img",{src:n.$withBase("/images/languages/javascript/webpack2/automatically-separate-css-to-independent-file/automatically-separate-css-to-independent-file.png"),alt:""},null,8,t)],64)}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,e]of s)a[n]=e;return a}}}]);