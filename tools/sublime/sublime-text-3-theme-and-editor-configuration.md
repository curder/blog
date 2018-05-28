## Sublime Text 3主题以及编辑器配置


## 主题

推荐两款常用主题集合：

- [Material](https://github.com/equinusocio/material-theme) 同时提供了许许多多的主题供选择，用户可以根据个人喜欢进行选择。

- [Materialize](https://github.com/saadq/Materialize) 同样也提供了许多的主题供用户选择。


### Material 主题

* 安装主题

快捷键 `⌘(Command) + ⇧(Shift) + P`回车后输入`Package Control:Install`再回车，输入`Material`搜索主题进行安装。

* 启用主题

快捷键`⌘(Command) + ⇧(Shift) + P`回车后输入`Material Theme: Activate theme`回车后选择自己喜欢的配色方案。
> 推荐`Material Theme`或者`Material Theme Darker`都相当赞。



### Materialize 主题

* 安装主题

快捷键 `⌘(Command) + ⇧(Shift) + P`回车后输入`Package Control:Install`再回车，输入`Materialize`搜索主题进行安装。

* 启用主题

快捷键`⌘(Command) + ⇧(Shift) + P`回车后输入`Activate Materialize Theme`回车后选择自己喜欢的配色方案。
> 推荐 `Material Dracula`或者`Material Flatland`


## 简单配置

快捷键`command + ,` 呼出`Sublime Text 3`的配置，在右侧用户自定义配置中写入如下配置。

```json
{
    "color_scheme": "Packages/Material Theme/schemes/Material-Theme-Darker.tmTheme",
    "ignored_packages":[],
    "material_theme_tree_headings": true,
    "theme": "Material-Theme-Darker.sublime-theme",
    "font_face": "Operator Mono xlight",
    "line_padding_bottom": 10,
    "line_padding_top": 10,
    "font_size": 26,
    "highlight_line": true,
    "highlight_modified_tabs": true,
    "scroll_past_end": true,
    "translate_tabs_to_spaces": true,
    "trim_trailing_white_space_on_save": true,
    "ensure_newline_at_eof_on_save": true,
    "save_on_focus_lost": true,
    "close_windows_when_empty": true,
    "caret_style": "phase",
    "remember_full_screen": true,
}
```

* `font_face` 字体配置，可以选择`Fira Code`、`Source Code Pro`、`Roboto Mono`等自己喜欢的字体。

* `line_padding_bottom` 下边距距离

* `line_padding_top`上边距距离

* `font_size` 字体大小

* `highlight_line` 选中行高亮

* `highlight_modified_tabs` 高亮改过的文件

* `scroll_past_end` 允许拉动到最底部

* `translate_tabs_to_spaces` 将tab转换为空格

* `trim_trailing_white_space_on_save` 保存文件时自动去除尾部的空格

* `ensure_newline_at_eof_on_save` 设置为true以确保保存时文件的最后一行以换行符结尾

* `save_on_focus_lost` 鼠标失去焦点时自动保存

* `close_windows_when_empty` 当最后一个文件被关闭时，同时关闭`sublime`窗口

* `caret_style` 可选值：`smooth`, `phase`, `blink`和`solid`
