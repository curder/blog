"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6190],{1836:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-4766ef34",path:"/tools/valet/valet-support-thinkphp-3.html",title:"让Valet支持ThinkPHP3",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[],filePathRelative:"tools/valet/valet-support-thinkphp-3.md",git:{updatedTime:1639727806e3,contributors:[{name:"curder",email:"q.curder@gmail.com",commits:1}]}}},6741:(n,s,a)=>{a.r(s),a.d(s,{default:()=>h});var e=a(6252);const p=(0,e.uE)('<h1 id="让valet支持thinkphp3" tabindex="-1"><a class="header-anchor" href="#让valet支持thinkphp3" aria-hidden="true">#</a> 让Valet支持ThinkPHP3</h1><p>主要通过配置文件重写配置获得ThinkPHP3的支持，配置文件放置在<code>~/.valet/Drivers/</code>下，针对ThinkPHP3我们可以使用如下配置文件，文件名命名为<code>ThinkPHP3ValetDriver.php</code>：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>\n\n<span class="token keyword">class</span> <span class="token class-name-definition class-name">ThinkPHP3ValetDriver</span> <span class="token keyword">extends</span> <span class="token class-name">SampleValetDriver</span>\n<span class="token punctuation">{</span>\n    <span class="token doc-comment comment">/**\n     * Determine if the driver serves the request.\n     *\n     * <span class="token keyword">@param</span>  <span class="token class-name"><span class="token keyword">string</span></span>  <span class="token parameter">$sitePath</span>\n     * <span class="token keyword">@param</span>  <span class="token class-name"><span class="token keyword">string</span></span>  <span class="token parameter">$siteName</span>\n     * <span class="token keyword">@param</span>  <span class="token class-name"><span class="token keyword">string</span></span>  <span class="token parameter">$uri</span>\n     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">bool</span></span>\n     */</span>\n    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">serves</span><span class="token punctuation">(</span><span class="token variable">$sitePath</span><span class="token punctuation">,</span> <span class="token variable">$siteName</span><span class="token punctuation">,</span> <span class="token variable">$uri</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n\n        <span class="token keyword">return</span> <span class="token function">file_exists</span><span class="token punctuation">(</span><span class="token variable">$sitePath</span><span class="token operator">.</span><span class="token string single-quoted-string">&#39;/index.php&#39;</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>\n               <span class="token function">file_exists</span><span class="token punctuation">(</span><span class="token variable">$sitePath</span><span class="token operator">.</span><span class="token string single-quoted-string">&#39;/admin_index.php&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token doc-comment comment">/**\n     * Determine if the incoming request is for a static file.\n     *\n     * <span class="token keyword">@param</span>  <span class="token class-name"><span class="token keyword">string</span></span>  <span class="token parameter">$sitePath</span>\n     * <span class="token keyword">@param</span>  <span class="token class-name"><span class="token keyword">string</span></span>  <span class="token parameter">$siteName</span>\n     * <span class="token keyword">@param</span>  <span class="token class-name"><span class="token keyword">string</span></span>  <span class="token parameter">$uri</span>\n     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">string</span><span class="token punctuation">|</span><span class="token keyword">false</span></span>\n     */</span>\n    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">isStaticFile</span><span class="token punctuation">(</span><span class="token variable">$sitePath</span><span class="token punctuation">,</span> <span class="token variable">$siteName</span><span class="token punctuation">,</span> <span class="token variable">$uri</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">file_exists</span><span class="token punctuation">(</span><span class="token variable">$staticFilePath</span> <span class="token operator">=</span> <span class="token variable">$sitePath</span> <span class="token operator">.</span> <span class="token variable">$uri</span> <span class="token operator">.</span> <span class="token string single-quoted-string">&#39;index.html&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">return</span> <span class="token variable">$staticFilePath</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span> <span class="token keyword">elseif</span> <span class="token punctuation">(</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">isActualFile</span><span class="token punctuation">(</span><span class="token variable">$staticFilePath</span> <span class="token operator">=</span> <span class="token variable">$sitePath</span><span class="token operator">.</span><span class="token variable">$uri</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">return</span> <span class="token variable">$staticFilePath</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">return</span> <span class="token constant boolean">true</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token doc-comment comment">/**\n     * Get the fully resolved path to the application&#39;s front controller.\n     *\n     * <span class="token keyword">@param</span>  <span class="token class-name"><span class="token keyword">string</span></span>  <span class="token parameter">$sitePath</span>\n     * <span class="token keyword">@param</span>  <span class="token class-name"><span class="token keyword">string</span></span>  <span class="token parameter">$siteName</span>\n     * <span class="token keyword">@param</span>  <span class="token class-name"><span class="token keyword">string</span></span>  <span class="token parameter">$uri</span>\n     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">string</span></span>\n     */</span>\n    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">frontControllerPath</span><span class="token punctuation">(</span><span class="token variable">$sitePath</span><span class="token punctuation">,</span> <span class="token variable">$siteName</span><span class="token punctuation">,</span> <span class="token variable">$uri</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token variable">$sitePath</span><span class="token operator">.</span><span class="token string single-quoted-string">&#39;/index.php&#39;</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br></div></div>',3),t=(0,e.Uk)("关于上面的三个方法"),l=(0,e._)("code",null,"serves",-1),o=(0,e.Uk)("、"),c=(0,e._)("code",null,"isStaticFile",-1),r=(0,e.Uk)("和"),i=(0,e._)("code",null,"frontControllerPath",-1),k=(0,e.Uk)(" 方法的具体介绍可以通过"),u={href:"https://laravel.com/docs/5.5/valet#custom-valet-drivers",target:"_blank",rel:"noopener noreferrer"},b=(0,e.Uk)("查看官网"),m=(0,e.Uk)("获得更多帮助。"),d={},h=(0,a(3744).Z)(d,[["render",function(n,s){const a=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.iD)(e.HY,null,[p,(0,e._)("p",null,[t,l,o,c,r,i,k,(0,e._)("a",u,[b,(0,e.Wm)(a)]),m])],64)}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,e]of s)a[n]=e;return a}}}]);