import{_ as t,M as r,p as a,q as d,a1 as o,R as n,t as s,N as l}from"./framework-64ffeeb4.js";const c="/blog/assets/switch-elements-pannel-193053d5.png",v="/blog/assets/switch-elements-pannel-element-tree-045f10f9.png",m={},u={href:"https://www.youtube.com/watch?v=WGe5RDXPh9A&index=3&list=PLXbU-2B80FvBhAYNx8qqx6gaNSKX9HlCm",target:"_blank",rel:"noopener noreferrer"},b={href:"https://segmentfault.com/a/1190000000370378",target:"_blank",rel:"noopener noreferrer"};function p(h,e){const i=r("ExternalLinkIcon");return a(),d("div",null,[e[2]||(e[2]=o('<h1 id="页面元素的快速调试技巧" tabindex="-1"><a class="header-anchor" href="#页面元素的快速调试技巧" aria-hidden="true">#</a> 页面元素的快速调试技巧</h1><p>打开<strong>Google Developer Tools</strong>可以看到左侧视窗中的<code>Elements</code>切换界面。如下图所示：</p><p><img src="'+c+`" alt=""></p><p>当光标焦点在元素上，可以点击其左侧的<code>...</code>呼出对应的操作菜单，它们分别是：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Add Attribute 添加元素属性
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另外值得注意的是当我们选中某个元素，在底部会出现对应的层级关系树，方便我们定位它的上级元素。如下图：</p><p><img src="`+v+'" alt=""></p><h2 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接" aria-hidden="true">#</a> 参考链接</h2>',8)),n("ul",null,[n("li",null,[n("a",u,[e[0]||(e[0]=s("50 个 Chrome Developer Tools 必备技巧 #003 - 页面元素的快速调试技巧",-1)),l(i)])]),n("li",null,[n("a",b,[e[1]||(e[1]=s("四个实用但容易忽略的Chrome开发工具特性",-1)),l(i)])])])])}const f=t(m,[["render",p],["__file","quick-debugging-techniques-for-page-elements.html.vue"]]);export{f as default};
