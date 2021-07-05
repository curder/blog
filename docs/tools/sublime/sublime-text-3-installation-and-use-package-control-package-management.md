# Sublime Text 3安装和使用Package Control包管理

## 安装Sublime Text 3

Sublime Text 3 的官方网站在[这里](https://www.sublimetext.com)，找到适合自己的平台进行下载并安装。

这里以MacOSX系统安装为例，在MacOSX平台下可以使用[Homebrew](https://brew.sh/)来管理sublime
text软件，执行命令`brew install caskroom/cask/sublime-text`。

简而言之，它是用来管理 Sublime Text 插件的插件，所以首次使用Sublime Text前也是需要安装的。

## 安装和卸载

### 安装

* 通过菜单安装 在Sublime Text编辑器顶部的`Tools`->`Install Package Control...`，点击它安装Sublime Text的包管理工具，稍等片刻即可安装成功。


* 通过命令行安装 使用快捷键`⌘(Command) + ⇧(Shift) + P`，输入`Install Package Control`字符后点击回车完成安装。

成功后返回如下的提示窗信息。

<img :src="$withBase('/images/tools/sublime/sublime-text-3-install-success-alert.png')" alt="">

### 卸载

使用快捷键`Command + Shift + p`，输入`Package Control: Remove Package`字符后点击回车完成卸载。

## 使用

通过 `Package Control` 能很方便安装其它插件。

### 安装插件

这里以`Emmet`插件的安装为例，一般插件的安装都可以通过这种方式。

使用快捷键`Command + Shift + p`，输入`Install Package`字符后再输入要安装的插件名称`Emmet`回车等待安装完成。

### 卸载插件

使用快捷键`Command + Shift + p`，输入`Remove Package`字符后再输入要安装的插件名称`Emmet`回车等待安装完成。

### 禁用插件

使用快捷键`Command + Shift + p`，输入`Disable Package`字符后再输入要安装的插件名称禁用插件。（其实就是在个人配置中的`ignored_packages`中添加插件名称。）

> 使用这个命令可以禁用系统默认安装的插件。

### 启用插件

使用快捷键`Command + Shift + p`，输入`Enable Package`字符后再输入要安装的插件名称禁用插件。（其实就是在个人配置中的`ignored_packages`中移除插件名称。）

### 插件列表

使用快捷键`Command + Shift + p`，输入`List Package`字符后查看当前环境已经安装的插件。

## 命令关键字

- `Install Package` 升级插件
- `Remove Package` 移除插件
- `Disable Package` 禁用插件
- `Enable Package` 启用插件
- `List Package` 插件列表


