(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9891],{9398:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>p});const p={key:"v-bcd31cc0",path:"/languages/javascript/webpack2/configure-webpack-and-command-shortcuts.html",title:"配置webpack和命令快捷方式",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"配置webpack.config.js",slug:"配置webpack-config-js",children:[]},{level:2,title:"准备源文件",slug:"准备源文件",children:[{level:3,title:"src/component.js",slug:"src-component-js",children:[]},{level:3,title:"src/index.js",slug:"src-index-js",children:[]}]},{level:2,title:"配置命令快捷方式",slug:"配置命令快捷方式",children:[]},{level:2,title:"测试命令运行",slug:"测试命令运行",children:[]}],filePathRelative:"languages/javascript/webpack2/configure-webpack-and-command-shortcuts.md",git:{updatedTime:1625565406e3,contributors:[]}}},2241:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>e});const p=(0,a(6252).uE)('<h1 id="配置webpack和命令快捷方式" tabindex="-1"><a class="header-anchor" href="#配置webpack和命令快捷方式" aria-hidden="true">#</a> 配置webpack和命令快捷方式</h1><p>使用<code>./node_modules/.bin/webpack 待编译的文件 编译的目标文件</code> 这种方式可以达到编译的目的，但是在实际开发中一般使用<code>webpack.config.js</code>来配置对应的参数。</p><h2 id="配置webpack-config-js" tabindex="-1"><a class="header-anchor" href="#配置webpack-config-js" aria-hidden="true">#</a> 配置webpack.config.js</h2><p>在配置之前先使用命令<code>npm i html-webpack-plugin --save-dev</code>下载<code>html-webpack-plugin</code>插件，目的是解析html页面。</p><p>配置文件放在与<code>package.json</code>同级的根目录下，文件命名为<code>webpack.config.js</code>。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;path&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;html-webpack-plugin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token constant">PATHS</span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n    app<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;app&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    dist<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;dist&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>\n    entry<span class="token operator">:</span> <span class="token punctuation">{</span>\n        app<span class="token operator">:</span> <span class="token constant">PATHS</span><span class="token punctuation">.</span>app<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    output<span class="token operator">:</span> <span class="token punctuation">{</span>\n        path<span class="token operator">:</span> <span class="token constant">PATHS</span><span class="token punctuation">.</span>dist<span class="token punctuation">,</span>\n        filename<span class="token operator">:</span> <span class="token string">&quot;[name].js&quot;</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    plugins<span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n            title<span class="token operator">:</span> <span class="token string">&quot;Webpack Demo&quot;</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> config<span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><h2 id="准备源文件" tabindex="-1"><a class="header-anchor" href="#准备源文件" aria-hidden="true">#</a> 准备源文件</h2><h3 id="src-component-js" tabindex="-1"><a class="header-anchor" href="#src-component-js" aria-hidden="true">#</a> <code>src/component.js</code></h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span>text <span class="token operator">=</span> <span class="token string">&quot;hello world&quot;</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> element <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    element<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> text<span class="token punctuation">;</span>\n    <span class="token keyword">return</span> element<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><blockquote><p>内容很简单，创建一个div，并将既定的内容放到div内部。</p></blockquote><h3 id="src-index-js" tabindex="-1"><a class="header-anchor" href="#src-index-js" aria-hidden="true">#</a> <code>src/index.js</code></h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> component <span class="token keyword">from</span> <span class="token string">&#39;./component&#39;</span><span class="token punctuation">;</span>\n\ndocument<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="配置命令快捷方式" tabindex="-1"><a class="header-anchor" href="#配置命令快捷方式" aria-hidden="true">#</a> 配置命令快捷方式</h2><p>打开项目的<code>package.json</code>文件，在<code>scripts</code>中写入如下命令配置：</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;echo \\&quot;Error: no test specified\\&quot; &amp;&amp; exit 1&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;webpack --env production&quot;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="测试命令运行" tabindex="-1"><a class="header-anchor" href="#测试命令运行" aria-hidden="true">#</a> 测试命令运行</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> run build\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',17),e={render:function(n,s){return p}}}}]);