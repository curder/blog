## 下载并安装

Sublime Text 3 的官方网站在[这里](https://www.sublimetext.com)，找到适合自己的平台进行下载并安装。

这里以MacOSX系统安装为例。


## 安装 Package Control

在Sublime Text编辑器顶部的`Tools`->`Install Package Control...`，点击它安装Sublime Text的包管理工具，稍等片刻即可安装成功。


## 安装并启用 Material 主题

* 安装主题

在MacOSX机器上按快捷键 `Command + Shift + p`回车后输入`install`再回车，输入`Material`搜索主题进行安装。

* 启用主题

选中"Sublime Text"->"Preferences"->"Package Settings"->"Material Theme"->"Activate"来激活主题。

* 简单配置

快捷键`command + ,` 呼出`Sublime Text 3`的配置，在右侧JSON数据中写入如下配置。

```
"font_face": "Operator Mono",
"line_padding_bottom": 10,
"line_padding_top": 10,
"font_size": 24,
"highlight_line": true,
"highlight_modified_tabs": true,
```

> `font_face` 字体配置，可以选择`Fira Code`、`Source Code Pro`、`Roboto Mono`等自己喜欢的字体。
> `line_padding_bottom` 下边距距离
> `line_padding_top`上边距距离
> `font_size` 字体大小
> `highlight_line` 选中行高亮
> `highlight_modified_tabs` 高亮改过的文件