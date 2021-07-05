# Sublime Text 3恢复到新安装状态

Sublime Text 3可以通过移除文件夹来恢复到初始安装状态。

根据操作系统，这个文件夹的位置为：

* **OSX**：`~/Library/Application\ Support/Sublime\ Text\ 3`

* **Windows**：`%APPDATA%\Sublime Text 3`

* **Linux**：`~/.config/sublime-text-3`

按下面操作将Sublime Text 3恢复到初始安装状态：

1. 退出Sublime Text 3

2. 根据各自操作系统删除上面列举的数据目录

3. 启动Sublime Text 3

当重新启动时，将会在相应目录下重新创建一个新的文件夹，跟第一次运行Sublime Text 3时一样。

> **注意**：这也会移除之前所有的配置和插件。

### Mac OSX

在Mac系统里，`~/Library`文件夹默认是隐藏的（在Finder文件夹中不可见）。可以在Finder里通过`前往`->`前往文件夹...（Command + Shift + G）`菜单后输入 `~/Library`
来浏览文件夹路径。

### Windows

在Windows系统里，缓存文件保存在单独的位置，`%LOCALAPPDATA%\Sublime Text 3`, 使用漫游数据文件(roaming profiles)来提高性能。

## 参考链接

* [恢复到新安装状态](https://feliving.github.io/Sublime-Text-3-Documentation/revert.html)
