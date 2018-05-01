## 介绍SublimeText在工作中简单使用

* [安装sublime编辑器和主题以及编辑器配置](/tools/sublime/install.md)
* [修改Sublime Text 3 的侧边栏字体大小](/tools/sublime/change_sidebar_label_font_size.md)


## MacOSX快捷键

### 快速跳转到文件

`Command + p`后输入**文件名或者通配符**，如果光标所在处不是预期的文件，在出现的匹配列表中上下选择自己预期的文件即可。

比如说在一个`Laravel`项目中，要找到`app\User.php`，可以直接按快捷键`Command+p`输入`a/U`就可以看到在下拉列表中需要找的文件已经出现了，接下来就是按回车进入文件。

或者在按快捷键`Command+p`后输入`User.php`，需要跳转的文件不出意外应该也会在下拉列表中。

### 快速跳转到类方法

对于一个PHP开发人员，快速跳转到类方法的需求被时刻需要，这能加速开发。

快速跳转到类方法，其实就是在上面的快速跳转到文件之后加`@方法名`，同样支持匹配和列表的上下选择。

