## 如何让浏览器阻止请求某些资源

在一些开发场景下可能需要模拟一些静态资源不存在的情况，可以使用调试工具的"Request blocking"进行模拟。

如下图打开`Request blocking`的添加界面：

![](/assets/google-developer-tools/how-to-make-browsers-block-requests-for-certain-resources-menu-path.png)

比如这里为了测试不允许所有的CSS的请求，那么可以写入`*.css`

![](/assets/google-developer-tolls/how-to-make-browsers-block-requests-for-certain-resources-add-rule.png)

添加完正则匹配的规则后可以刷新页面查看效果。
