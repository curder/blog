import{_ as t,M as a,p as d,q as o,R as e,t as n,N as l,a1 as r}from"./framework-7e09d608.js";const c={},v=e("h1",{id:"页面元素的快速调试技巧",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#页面元素的快速调试技巧","aria-hidden":"true"},"#"),n(" 页面元素的快速调试技巧")],-1),u=e("p",null,[n("打开"),e("strong",null,"Google Developer Tools"),n("可以看到左侧视窗中的"),e("code",null,"Elements"),n("切换界面。如下图所示：")],-1),m=["src"],h=r(`<p>当光标焦点在元素上，可以点击其左侧的<code>...</code>呼出对应的操作菜单，它们分别是：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Add Attribute 添加元素属性
Edit as HTML 编辑选中元素的HTML
Delete element 删除选中元素
--------------
Copy（拷贝）   -&gt; Cut element（剪切元素）
                 Copy element（拷贝元素）
                 Paste element（粘帖元素）
                 Copy outerHTML
                 Copy selector（拷贝选择器）
                 Copy XPath（拷贝XPath值）

Hide element（隐藏元素）
--------------
Force State（元素状态）-&gt; :active（激活）
                         :hover（悬浮）
                         :focus（获得焦点）
                         :visited（浏览过）
                         :focus-within（）
--------------
Break on（断点）      -&gt; subtree modifications（当添加，改变，删除子元素时触发）
                        attribute modifications（当元素属性被改变时触发）
                        node removal（当移除元素时触发）
--------------
Expand recursively（递归展开）
Collapse children（收起子元素）
Scroll into view（滚动到选中元素到视图展示）
Focus（焦点）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另外值得注意的是当我们选中某个元素，在底部会出现对应的层级关系树，方便我们定位它的上级元素。如下图：</p>`,3),b=["src"],p=e("h2",{id:"参考链接",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#参考链接","aria-hidden":"true"},"#"),n(" 参考链接")],-1),g={href:"https://www.youtube.com/watch?v=WGe5RDXPh9A&index=3&list=PLXbU-2B80FvBhAYNx8qqx6gaNSKX9HlCm",target:"_blank",rel:"noopener noreferrer"},_={href:"https://segmentfault.com/a/1190000000370378",target:"_blank",rel:"noopener noreferrer"};function f(i,x){const s=a("ExternalLinkIcon");return d(),o("div",null,[v,u,e("img",{src:i.$withBase("/images/tools/google-developer-tools/switch-elements-pannel.png"),alt:""},null,8,m),h,e("img",{src:i.$withBase("/images/tools/google-developer-tools/switch-elements-pannel-element-tree.png"),alt:""},null,8,b),p,e("ul",null,[e("li",null,[e("a",g,[n("50 个 Chrome Developer Tools 必备技巧 #003 - 页面元素的快速调试技巧"),l(s)])]),e("li",null,[e("a",_,[n("四个实用但容易忽略的Chrome开发工具特性"),l(s)])])])])}const w=t(c,[["render",f],["__file","quick-debugging-techniques-for-page-elements.html.vue"]]);export{w as default};
