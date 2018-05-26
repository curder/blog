## 介绍SublimeText在工作中简单使用

* [Sublime Text 3安装和使用Package Control包管理](/tools/sublime/sublime-text-3-installation-and-use-package-control-package-management.md)
* [Sublime Text 3主题以及编辑器配置](/tools/sublime/sublime-text-3-theme-and-editor-configuration.md)
* [修改Sublime Text 3 的侧边栏字体大小](/tools/sublime/change_sidebar_label_font_size.md)
* [Sublime插件之SideBarEnhancements右键菜单增强插件](/tools/sublime/sublime-text-side-bar-enhancements-plugin.md)
* [Sublime插件之GitGutter代码差异管理](/tools/sublime/sublime-plugin-git-gutter-code-difference-management.md)
* [Sublime插件之PHPCompanion自动补全类命名空间](/tools/sublime/sublime-text-companion-plugin-for-php.md)
* [Sublime插件之DocBlockr注释的快速生成](/tools/sublime/sublime-text-3-fast-generation-of-doc-blockr-annotations.md)
* [Sublime插件之AdvancedNewFile更快的创建文件或目录](/tools/sublime/sublime-create-files-or-directories-faster.md)
* [Sublime插件之SnippetMaker自定义代码片段](/tools/sublime/sublime-custom-code-snippet.md)
* [Sublime插件之SublimeLinter和PHP代码检测与自动修复](/tools/sublime/sublime-linter-detect-your-php-code-and-fix-it.md)
* [Sublime插件之ProjectManager项目管理](/tools/sublime/sublime-project-management-project-manager-plugin.md)
* [Sublimt插件之Emmet快速编写HTML/CSS](/tools/sublime/sublime-emmet-quickly-write-html-and-css.md)
* [Sublime快捷键](/tools/sublime/sublime-text-3-keymap.md)
* [Sublime Text 3恢复到新安装状态](/tools/sublime/sublime-text-3-revert.md)

## MacOSX快捷键

### 快速跳转到文件

`Command + p`后输入**文件名或者通配符**，如果光标所在处不是预期的文件，在出现的匹配列表中上下选择自己预期的文件即可。

比如说在一个`Laravel`项目中，要找到`app\User.php`，可以直接按快捷键`Command+p`输入`a/U`就可以看到在下拉列表中需要找的文件已经出现了，接下来就是按回车进入文件。

或者在按快捷键`Command+p`后输入`User.php`，需要跳转的文件不出意外应该也会在下拉列表中。

### 快速跳转到类方法

对于一个PHP开发人员，快速跳转到类方法的需求被时刻需要，这能加速开发。

快速跳转到类方法，其实就是在上面的快速跳转到文件之后加`@方法名`，同样支持匹配和列表的上下选择。

