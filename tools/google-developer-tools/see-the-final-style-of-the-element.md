## 查看元素最终的样式

通过之前的介绍知道查看元素的样式信息可以通过`Element`面板下侧面板的`Styles`下面找到对应的样式信息。

但是在这些样式数据中常常会看到一些不生效的样式，如下：

![](/assets/google-developer-tools/see-the-final-style-of-the-element-unuse-panel.png)

一些开发情况下需要直接获取所选元素当时生效的样式，此时可以来到`Computed`计算性属性的面板。

![](/assets/google-developer-tools/see-the-final-style-of-the-element-computed-styles.png)

来到`Computed`面板（位于`Element`->`Computed`）首先可以看到盒模型，然后是元素最终的样式，可以通过这里更精确的拿到对应的样式信息。

另外值得注意的是，由于CSS有优先级，假如站点比较大，有多个`css`文件对某个元素都起作用了，想知道目前优先级比较高的起作用的样式文件在哪里可以通过点击对应样式右侧的`->`按钮快速抵达。

![](/assets/google-developer-tools/see-the-final-style-of-the-element-fast-go-to-styles-panel.png)
