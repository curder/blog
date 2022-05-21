import{_ as t,r as a,o as d,c as o,b as e,a as l,F as r,d as n,e as c}from"./app.4f2e6b79.js";const v={},u=e("h1",{id:"\u9875\u9762\u5143\u7D20\u7684\u5FEB\u901F\u8C03\u8BD5\u6280\u5DE7",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u9875\u9762\u5143\u7D20\u7684\u5FEB\u901F\u8C03\u8BD5\u6280\u5DE7","aria-hidden":"true"},"#"),n(" \u9875\u9762\u5143\u7D20\u7684\u5FEB\u901F\u8C03\u8BD5\u6280\u5DE7")],-1),m=e("p",null,[n("\u6253\u5F00"),e("strong",null,"Google Developer Tools"),n("\u53EF\u4EE5\u770B\u5230\u5DE6\u4FA7\u89C6\u7A97\u4E2D\u7684"),e("code",null,"Elements"),n("\u5207\u6362\u754C\u9762\u3002\u5982\u4E0B\u56FE\u6240\u793A\uFF1A")],-1),h=["src"],b=c(`<p>\u5F53\u5149\u6807\u7126\u70B9\u5728\u5143\u7D20\u4E0A\uFF0C\u53EF\u4EE5\u70B9\u51FB\u5176\u5DE6\u4FA7\u7684<code>...</code>\u547C\u51FA\u5BF9\u5E94\u7684\u64CD\u4F5C\u83DC\u5355\uFF0C\u5B83\u4EEC\u5206\u522B\u662F\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Add Attribute \u6DFB\u52A0\u5143\u7D20\u5C5E\u6027
Edit as HTML \u7F16\u8F91\u9009\u4E2D\u5143\u7D20\u7684HTML
Delete element \u5220\u9664\u9009\u4E2D\u5143\u7D20
--------------
Copy\uFF08\u62F7\u8D1D\uFF09   -&gt; Cut element\uFF08\u526A\u5207\u5143\u7D20\uFF09
                 Copy element\uFF08\u62F7\u8D1D\u5143\u7D20\uFF09
                 Paste element\uFF08\u7C98\u5E16\u5143\u7D20\uFF09
                 Copy outerHTML
                 Copy selector\uFF08\u62F7\u8D1D\u9009\u62E9\u5668\uFF09
                 Copy XPath\uFF08\u62F7\u8D1DXPath\u503C\uFF09

Hide element\uFF08\u9690\u85CF\u5143\u7D20\uFF09
--------------
Force State\uFF08\u5143\u7D20\u72B6\u6001\uFF09-&gt; :active\uFF08\u6FC0\u6D3B\uFF09
                         :hover\uFF08\u60AC\u6D6E\uFF09
                         :focus\uFF08\u83B7\u5F97\u7126\u70B9\uFF09
                         :visited\uFF08\u6D4F\u89C8\u8FC7\uFF09
                         :focus-within\uFF08\uFF09
--------------
Break on\uFF08\u65AD\u70B9\uFF09      -&gt; subtree modifications\uFF08\u5F53\u6DFB\u52A0\uFF0C\u6539\u53D8\uFF0C\u5220\u9664\u5B50\u5143\u7D20\u65F6\u89E6\u53D1\uFF09
                        attribute modifications\uFF08\u5F53\u5143\u7D20\u5C5E\u6027\u88AB\u6539\u53D8\u65F6\u89E6\u53D1\uFF09
                        node removal\uFF08\u5F53\u79FB\u9664\u5143\u7D20\u65F6\u89E6\u53D1\uFF09
--------------
Expand recursively\uFF08\u9012\u5F52\u5C55\u5F00\uFF09
Collapse children\uFF08\u6536\u8D77\u5B50\u5143\u7D20\uFF09
Scroll into view\uFF08\u6EDA\u52A8\u5230\u9009\u4E2D\u5143\u7D20\u5230\u89C6\u56FE\u5C55\u793A\uFF09
Focus\uFF08\u7126\u70B9\uFF09
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53E6\u5916\u503C\u5F97\u6CE8\u610F\u7684\u662F\u5F53\u6211\u4EEC\u9009\u4E2D\u67D0\u4E2A\u5143\u7D20\uFF0C\u5728\u5E95\u90E8\u4F1A\u51FA\u73B0\u5BF9\u5E94\u7684\u5C42\u7EA7\u5173\u7CFB\u6811\uFF0C\u65B9\u4FBF\u6211\u4EEC\u5B9A\u4F4D\u5B83\u7684\u4E0A\u7EA7\u5143\u7D20\u3002\u5982\u4E0B\u56FE\uFF1A</p>`,3),_=["src"],p=e("h2",{id:"\u53C2\u8003\u94FE\u63A5",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u53C2\u8003\u94FE\u63A5","aria-hidden":"true"},"#"),n(" \u53C2\u8003\u94FE\u63A5")],-1),g={href:"https://www.youtube.com/watch?v=WGe5RDXPh9A&index=3&list=PLXbU-2B80FvBhAYNx8qqx6gaNSKX9HlCm",target:"_blank",rel:"noopener noreferrer"},f=n("50 \u4E2A Chrome Developer Tools \u5FC5\u5907\u6280\u5DE7 #003 - \u9875\u9762\u5143\u7D20\u7684\u5FEB\u901F\u8C03\u8BD5\u6280\u5DE7"),x={href:"https://segmentfault.com/a/1190000000370378",target:"_blank",rel:"noopener noreferrer"},C=n("\u56DB\u4E2A\u5B9E\u7528\u4F46\u5BB9\u6613\u5FFD\u7565\u7684Chrome\u5F00\u53D1\u5DE5\u5177\u7279\u6027");function w(i,k){const s=a("ExternalLinkIcon");return d(),o(r,null,[u,m,e("img",{src:i.$withBase("/images/tools/google-developer-tools/switch-elements-pannel.png"),alt:""},null,8,h),b,e("img",{src:i.$withBase("/images/tools/google-developer-tools/switch-elements-pannel-element-tree.png"),alt:""},null,8,_),p,e("ul",null,[e("li",null,[e("a",g,[f,l(s)])]),e("li",null,[e("a",x,[C,l(s)])])])],64)}var y=t(v,[["render",w],["__file","quick-debugging-techniques-for-page-elements.html.vue"]]);export{y as default};
