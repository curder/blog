# Sublime插件之GitGutter代码差异管理

[GitGutter](https://github.com/jisaacks/GitGutter#-installation)在 Sublime 上面方便观察代码的修改，相当便利。

## 安装

用`Package Control`安装`GitGutter`（`⌘(Command) + ⇧(Shift) + P` –> 输入 `Install`… 打开 **Package Control** -> 输入`GitGutter`
后回车进入安装）。

## 简单配置

修改git的默认路径，打开配置文件`Preferences` -> `Package Settings` -> `GitGutter` -> `Settings`。

如果是使用 Linux 的可以通过命令 `which git` 找到你的 `git` 安裝位置， 加入 `git_binary` 后面则输入 Git 版本控制的安裝位置，这样就是启用 GitGutter 了。

启用后可以看到左边的小图示，就代表 Git Gutter 有 trace 到代码了。
