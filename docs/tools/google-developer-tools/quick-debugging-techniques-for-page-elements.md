# 页面元素的快速调试技巧

打开**Google Developer Tools**可以看到左侧视窗中的`Elements`切换界面。如下图所示：

![](/assets/google-developer-tools/switch-elements-pannel.png)


当光标焦点在元素上，可以点击其左侧的`...`呼出对应的操作菜单，它们分别是：

```
Add Attribute 添加元素属性
Edit as HTML 编辑选中元素的HTML
Delete element 删除选中元素
--------------
Copy（拷贝）   -> Cut element（剪切元素）
                 Copy element（拷贝元素）
                 Paste element（粘帖元素）
                 Copy outerHTML
                 Copy selector（拷贝选择器）
                 Copy XPath（拷贝XPath值）

Hide element（隐藏元素）
--------------
Force State（元素状态）-> :active（激活）
                         :hover（悬浮）
                         :focus（获得焦点）
                         :visited（浏览过）
                         :focus-within（）
--------------
Break on（断点）      -> subtree modifications（当添加，改变，删除子元素时触发）
                        attribute modifications（当元素属性被改变时触发）
                        node removal（当移除元素时触发）
--------------
Expand recursively（递归展开）
Collapse children（收起子元素）
Scroll into view（滚动到选中元素到视图展示）
Focus（焦点）
```

另外值得注意的是当我们选中某个元素，在底部会出现对应的层级关系树，方便我们定位它的上级元素。如下图：

![](/assets/google-developer-tools/switch-elements-pannel-element-tree.png)


## 参考链接

* [50 个 Chrome Developer Tools 必备技巧 #003 - 页面元素的快速调试技巧](https://www.youtube.com/watch?v=WGe5RDXPh9A&index=3&list=PLXbU-2B80FvBhAYNx8qqx6gaNSKX9HlCm)
* [四个实用但容易忽略的Chrome开发工具特性](https://segmentfault.com/a/1190000000370378)
