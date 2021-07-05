# Sublime插件之SideBarEnhancements右键菜单增强插件

`SideBarEnhancements`是一款很实用的右键菜单增强插件，有以 diff 形式显示未保存的修改、在文件管理器中显示该文件、复制文件路径、在侧边栏中定位该文件等功能，也有基础的诸如新建文件/目录，编辑，打开/运行，显示，在选择中/上级目录/项目中查找，剪切，复制，粘贴，重命名，删除，刷新等常见功能。


`Copy as Text...` 是 `SideBarEnhancements` 的又一个特色功能，可以复制包含各种形式的路径、URL（甚至包括 base64 的 data:uri）、转码后的文件名、各种 HTML Tag（a、img、script、style）等


## 安装

用`Package Control`安装`SideBarEnhancements`，回车安装好插件（`⌘(Command) + ⇧(Shift) + P` –> 输入 `install`…打开**Package Control** -> 输入`SideBarEnhancements`）。

### 配置快捷键

修改个人的`key Bindings`的配置加入如下内容。

```
[
	// chrome，请根据个人电脑修改浏览器路径
	{ 
		"keys": ["super+f12"], 
		"command": "side_bar_files_open_with", 
		"args": { "paths": [], "application":"/Applications/Google Chrome.app", "extensions":".*" } 
	}
]
```

> `Command + f12`使用Google Chrome打开文件。
