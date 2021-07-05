# 查看被打包压缩的CSS和JS文件

有时为了减少网络的传输量，会把页面需要用到的CSS和JS打包混淆成一个文件，比如：**首页**对应`index.css`和`index.js`，**关于我们**的页面会对应`about.css`和`about.js`。

以个人blog为例，因为页面比较简单基于BootStrap4框架编写，所以全部页面只有`app.css`和`app.js`文件。

## 查看静态CSS和JS资源

打开调试工具来到"Sources"->"Network"->选择具体的站点的CSS或者JS类型，如下：

<img :src="$withBase('/images/tools/google-developer-tools/view-packed-css-and-js-files-css.png')" alt="">

通过路径找到上面的`{}`按钮，点击它之后可以看到格式化之后的代码。
