(self.webpackChunkblog=self.webpackChunkblog||[]).push([[7985],{2724:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>p});const p={key:"v-7b615862",path:"/languages/javascript/ajax-file-upload-using-jquery-plugin-impleupload-js.html",title:"Ajax文件上传jQuery插件simpleUpload.js的使用",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"参考链接",slug:"参考链接",children:[]}],filePathRelative:"languages/javascript/ajax-file-upload-using-jquery-plugin-impleupload-js.md",git:{updatedTime:1625565406e3,contributors:[]}}},9938:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>h});var p=a(6252);const t=(0,p.Wm)("h1",{id:"ajax文件上传jquery插件simpleupload-js的使用",tabindex:"-1"},[(0,p.Wm)("a",{class:"header-anchor",href:"#ajax文件上传jquery插件simpleupload-js的使用","aria-hidden":"true"},"#"),(0,p.Uk)(" Ajax文件上传jQuery插件simpleUpload.js的使用")],-1),e={href:"http://simpleupload.michaelcbrook.com",target:"_blank",rel:"noopener noreferrer"},o=(0,p.Uk)("simpleUpload.js"),c=(0,p.Uk)("项目依赖jQuery，并且支持多文件上传、文件过滤等常见前端Ajax上传处理。"),l=(0,p.uE)('<p><code>simpleUpload.js</code>的下载与安装参见官网或使用<code>npm i jquery-simple-upload</code>安装它。</p><p>由于需要后端支持，假定后端处理代码如下：</p><p>PHP伪代码：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>\n\n<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token variable">$_FILES</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>HTML页面</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.bootcss.com/jquery/1.9.1/jquery.min.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/javascript<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>simpleUpload.min.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/javascript<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n\n        <span class="token function">$</span><span class="token punctuation">(</span>document<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ready</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n            <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;input[type=file]&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">change</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n                <span class="token function">$</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">simpleUpload</span><span class="token punctuation">(</span><span class="token string">&quot;/upload.php&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n\n                    <span class="token function-variable function">start</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">file</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                        <span class="token comment">//upload started</span>\n                        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;upload started&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n                    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n                    <span class="token function-variable function">progress</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">progress</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                        <span class="token comment">//received progress</span>\n                        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;upload progress: &quot;</span> <span class="token operator">+</span> Math<span class="token punctuation">.</span><span class="token function">round</span><span class="token punctuation">(</span>progress<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;%&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n                    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n                    <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                        <span class="token comment">//upload successful</span>\n                        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;upload successful!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n                        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>\n                    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n                    <span class="token function-variable function">error</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                        <span class="token comment">//upload failed</span>\n                        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;upload error: &quot;</span> <span class="token operator">+</span> error<span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">&quot;: &quot;</span> <span class="token operator">+</span> error<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>\n                    <span class="token punctuation">}</span>\n\n                <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>file<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>file<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br></div></div>',6),u=(0,p.Uk)("正常运行上面的代码，打开"),i=(0,p.Wm)("code",null,"Google Chrome Console",-1),r=(0,p.Uk)("可以看到上传的进度，如果需要生成大文件可以参考"),k={href:"https://curder.com/posts/fast-creation-of-large-files-under-mac-osx",target:"_blank",rel:"noopener noreferrer"},m=(0,p.Uk)("这篇文章"),b=(0,p.Wm)("p",null,[(0,p.Uk)("关于"),(0,p.Wm)("code",null,"simpleUpload.js"),(0,p.Uk)("的更多使用详情可以参考官网。")],-1),d=(0,p.Wm)("h2",{id:"参考链接",tabindex:"-1"},[(0,p.Wm)("a",{class:"header-anchor",href:"#参考链接","aria-hidden":"true"},"#"),(0,p.Uk)(" 参考链接")],-1),g={href:"http://simpleupload.michaelcbrook.com/",target:"_blank",rel:"noopener noreferrer"},f=(0,p.Uk)("simpleUpload.js"),h={render:function(n,s){const a=(0,p.up)("OutboundLink");return(0,p.wg)(),(0,p.j4)(p.HY,null,[t,(0,p.Wm)("p",null,[(0,p.Wm)("a",e,[o,(0,p.Wm)(a)]),c]),l,(0,p.Wm)("blockquote",null,[(0,p.Wm)("p",null,[u,i,r,(0,p.Wm)("a",k,[m,(0,p.Wm)(a)])])]),b,d,(0,p.Wm)("ul",null,[(0,p.Wm)("li",null,[(0,p.Wm)("a",g,[f,(0,p.Wm)(a)])])])],64)}}}}]);