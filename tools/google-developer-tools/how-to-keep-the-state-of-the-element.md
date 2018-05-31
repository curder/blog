## 如何保持元素的状态

在开发调试网页元素的时候会遇到需要查看或者修改元素`:active`、`:hover`、`:focus`、`:visited`等状态时的一些样式或者变化。

假如调试一个`button`按钮或者`a`标签，以`:hover`鼠标悬浮状态为例。

当鼠标悬浮的时，我们想看下按钮的背景色是什么，此时如果不选中`:hover`状态就无法查看元素在悬浮的时候生效的样式。

![](/assets/google-developer-tools/keep-the-state-of-the-element-hover.png)

保持元素状态的目的可能是获取特殊状态下元素的属性。

众所周知，元素的状态多种多样，通过上面的方式我们可以看到有五种，其实也可以通过一个面板进行多选，它在面板右侧的`Styles`里面（默认是隐藏的，需要我们点击打开它）。

![](/assets/goods-developer-tools/keep-the-state-of-the-element-switch-many-states.png)

通过上面的方式可以快速获取元素的状态相对应的样式，配合左侧的`Filter`可以快速搜索在不同的状态下的样式。
