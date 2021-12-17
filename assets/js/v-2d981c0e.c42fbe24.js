(self.webpackChunkblog=self.webpackChunkblog||[]).push([[7032],{3878:(a,n,s)=>{"use strict";s.r(n),s.d(n,{data:()=>t});const t={key:"v-2d981c0e",path:"/languages/vue/vee-validate/how-to-use-vee-validate-plugin-show-chinese-message.html",title:"使用 vee-validate 显示简体中文错误提示",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"版本",slug:"版本",children:[]},{level:2,title:"编写 DemoForm.vue",slug:"编写-demoform-vue",children:[]},{level:2,title:"验证",slug:"验证",children:[]},{level:2,title:"参考地址",slug:"参考地址",children:[]}],filePathRelative:"languages/vue/vee-validate/how-to-use-vee-validate-plugin-show-chinese-message.md",git:{updatedTime:1639727659e3,contributors:[]}}},1575:(a,n,s)=>{"use strict";s.r(n),s.d(n,{default:()=>d});var t=s(6252);const e=(0,t.uE)('<h1 id="使用-vee-validate-显示简体中文错误提示" tabindex="-1"><a class="header-anchor" href="#使用-vee-validate-显示简体中文错误提示" aria-hidden="true">#</a> 使用 vee-validate 显示简体中文错误提示</h1><p>VeeValidate 插件默认使用的使用英文错误提示语言，但是它同样也支持中文的错误提示。</p><h2 id="版本" tabindex="-1"><a class="header-anchor" href="#版本" aria-hidden="true">#</a> 版本</h2><ul><li>Vue <code>2.5.22</code></li><li>vue-validate <code>2.1.7</code></li></ul><h2 id="编写-demoform-vue" tabindex="-1"><a class="header-anchor" href="#编写-demoform-vue" aria-hidden="true">#</a> 编写 DemoForm.vue</h2><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-validate</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{required: true, email: true}<span class="token punctuation">&quot;</span></span> <span class="token attr-name">data-vv-as</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>邮箱<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>email<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>{{ errors.first(&#39;email&#39;) }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> VeeValidate<span class="token punctuation">,</span> <span class="token punctuation">{</span> Validator <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vee-validate&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> zh_CN <span class="token keyword">from</span> <span class="token string">&#39;vee-validate/dist/locale/zh_CN&#39;</span><span class="token punctuation">;</span>\nVue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>VeeValidate<span class="token punctuation">)</span><span class="token punctuation">;</span>\nValidator<span class="token punctuation">.</span><span class="token function">localize</span><span class="token punctuation">(</span><span class="token string">&#39;zh_CN&#39;</span><span class="token punctuation">,</span> zh_CN<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token string">&quot;DemoForm&quot;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><ul><li><p>通过<code>data-vv-as</code>指令标示当前字段的语言名称，比如<code>email</code>字段的简体中文名称是<strong>邮箱</strong></p></li><li><p>除了 import 基本的 VeeValidate 外，还需要导入 Validator 用于配置语言</p></li><li><p>导入对应的语言文件，这里以简体中文为例是<code>zh_CN</code></p></li><li><p>使用 <code>Validator.localize()</code> 设定为 <code>zh_TW</code></p></li></ul><h2 id="验证" tabindex="-1"><a class="header-anchor" href="#验证" aria-hidden="true">#</a> 验证</h2>',8),p=(0,t.Uk)("校验的中文错误提示 "),l=(0,t.Wm)("h2",{id:"参考地址",tabindex:"-1"},[(0,t.Wm)("a",{class:"header-anchor",href:"#参考地址","aria-hidden":"true"},"#"),(0,t.Uk)(" 参考地址")],-1),o={href:"https://oomusou.io/vue/vee-validate/chinese-message/",target:"_blank",rel:"noopener noreferrer"},c=(0,t.Uk)("如何使用 VeeValidate 顯示中文訊息 ?"),u={href:"https://baianat.github.io/vee-validate/",target:"_blank",rel:"noopener noreferrer"},i=(0,t.Uk)("VeeValidate Docs"),r={href:"https://baianat.github.io/vee-validate/guide/localization.html",target:"_blank",rel:"noopener noreferrer"},k=(0,t.Uk)("Localization"),d={render:function(a,n){const s=(0,t.up)("OutboundLink");return(0,t.wg)(),(0,t.j4)(t.HY,null,[e,(0,t.Wm)("ul",null,[(0,t.Wm)("li",null,[p,(0,t.Wm)("img",{src:a.$withBase("/images/languages/vue/vee-validate/how-to-use-vee-validate-plugin-show-chinese-message/vee-validate-localization.png"),alt:""},null,8,["src"])])]),l,(0,t.Wm)("ul",null,[(0,t.Wm)("li",null,[(0,t.Wm)("a",o,[c,(0,t.Wm)(s)])]),(0,t.Wm)("li",null,[(0,t.Wm)("a",u,[i,(0,t.Wm)(s)])]),(0,t.Wm)("li",null,[(0,t.Wm)("a",r,[k,(0,t.Wm)(s)])])])],64)}}}}]);