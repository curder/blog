(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6295],{6257:(n,a,s)=>{"use strict";s.r(a),s.d(a,{data:()=>t});const t={key:"v-77b1570a",path:"/languages/vue/vee-validate/how-does-vee-validate-start-the-verification-when-the-mouse-is-removed.html",title:"VeeValidate 光标离开输入框焦点就验证",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"版本",slug:"版本",children:[]},{level:2,title:"编写 DemoForm.vue",slug:"编写-demoform-vue",children:[{level:3,title:"全局配置",slug:"全局配置",children:[]},{level:3,title:"针对某个单独字段配置",slug:"针对某个单独字段配置",children:[]}]},{level:2,title:"参考地址",slug:"参考地址",children:[]}],filePathRelative:"languages/vue/vee-validate/how-does-vee-validate-start-the-verification-when-the-mouse-is-removed.md",git:{updatedTime:1639727659e3,contributors:[]}}},836:(n,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>h});var t=s(6252);const p=(0,t.uE)('<h1 id="veevalidate-光标离开输入框焦点就验证" tabindex="-1"><a class="header-anchor" href="#veevalidate-光标离开输入框焦点就验证" aria-hidden="true">#</a> VeeValidate 光标离开输入框焦点就验证</h1><p>一个很常见的需求就是当用户的光标离开输入框的时候就启用验证规则进行验证，默认的配置并不支持，需要自行配置。</p><h2 id="版本" tabindex="-1"><a class="header-anchor" href="#版本" aria-hidden="true">#</a> 版本</h2><ul><li>Vue 2.5.22</li><li>vue-validate 2.1.7</li></ul><h2 id="编写-demoform-vue" tabindex="-1"><a class="header-anchor" href="#编写-demoform-vue" aria-hidden="true">#</a> 编写 DemoForm.vue</h2><h3 id="全局配置" tabindex="-1"><a class="header-anchor" href="#全局配置" aria-hidden="true">#</a> 全局配置</h3><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-validate</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&#39;</span>required|email<span class="token punctuation">&#39;</span><span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>email<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>{{ errors.first(&#39;email&#39;) }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> VeeValidate <span class="token keyword">from</span> <span class="token string">&quot;vee-validate&quot;</span><span class="token punctuation">;</span>\n\nVue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>VeeValidate<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n  events<span class="token operator">:</span> <span class="token string">&#39;input|blur&#39;</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token string">&quot;DemoForm&quot;</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><ul><li>在 <code>Vue.use()</code>的第二个参数传入<code>events: &#39;input|blur&#39;</code>即可。</li></ul><h3 id="针对某个单独字段配置" tabindex="-1"><a class="header-anchor" href="#针对某个单独字段配置" aria-hidden="true">#</a> 针对某个单独字段配置</h3><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-validate</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&#39;</span>required|email<span class="token punctuation">&#39;</span><span class="token punctuation">&quot;</span></span> <span class="token attr-name">data-vv-validate-on</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>change|blur<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>email<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>{{ errors.first(&#39;email&#39;) }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> VeeValidate <span class="token keyword">from</span> <span class="token string">&quot;vee-validate&quot;</span><span class="token punctuation">;</span>\n\nVue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>VeeValidate<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token string">&quot;DemoForm&quot;</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div>',10),e=(0,t.Uk)("在对应的表单字段使用"),l=(0,t.Wm)("code",null,"data-vv-validate-on",-1),o=(0,t.Uk)("使用对应的事件即可，"),c={href:"https://baianat.github.io/vee-validate/configuration.html",target:"_blank",rel:"noopener noreferrer"},u=(0,t.Uk)("更多配置可以查看这里"),i=(0,t.Uk)("。"),r=(0,t.Wm)("h2",{id:"参考地址",tabindex:"-1"},[(0,t.Wm)("a",{class:"header-anchor",href:"#参考地址","aria-hidden":"true"},"#"),(0,t.Uk)(" 参考地址")],-1),k={href:"https://oomusou.io/vue/vee-validate/input-blur/",target:"_blank",rel:"noopener noreferrer"},d=(0,t.Uk)("VeeValidate 之如何滑鼠移開就啟動驗證 ?"),g={href:"https://baianat.github.io/vee-validate/",target:"_blank",rel:"noopener noreferrer"},m=(0,t.Uk)("VeeValidate Docs"),b={href:"https://baianat.github.io/vee-validate/configuration.html",target:"_blank",rel:"noopener noreferrer"},v=(0,t.Uk)("Configuration"),h={render:function(n,a){const s=(0,t.up)("OutboundLink");return(0,t.wg)(),(0,t.j4)(t.HY,null,[p,(0,t.Wm)("ul",null,[(0,t.Wm)("li",null,[e,l,o,(0,t.Wm)("a",c,[u,(0,t.Wm)(s)]),i])]),r,(0,t.Wm)("ul",null,[(0,t.Wm)("li",null,[(0,t.Wm)("a",k,[d,(0,t.Wm)(s)])]),(0,t.Wm)("li",null,[(0,t.Wm)("a",g,[m,(0,t.Wm)(s)])]),(0,t.Wm)("li",null,[(0,t.Wm)("a",b,[v,(0,t.Wm)(s)])])])],64)}}}}]);