# 查看元素样式的盒模型

在前端开发中，经常需要查看或修改元素的盒模型数据，它包含了最外层的`margin`、边框`border`、内边距`padding`以及对应元素的宽`width`和高`height`所对应值。

依然是`Element`面板上选中元素后，在右侧的`Styles`下面拉倒最下面找到它。

<img :src="$withBase('/images/tools/google-developer-tools/check-element-style-box-model-panel.png')" alt="">

查看盒模型的目的更可能的是要修改盒模型的相关属性。

1. 鼠标悬停在盒模型对应的属性上，元素对应的会有高亮显示

2. 双击盒模型对应的属性，可以输入值或者鼠标上下键修改对应的值

> 与修改元素的值不同的是，通过盒模型的修改只会修改当前选中的盒模型元素的值，以`style`属性保存在元素上。
