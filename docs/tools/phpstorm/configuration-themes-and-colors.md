# PhpStorm配置主题和颜色

## 配置主题

通过三种不同的方式配置主题，它们的关系不是孤立的，比如通过互联网导入的主题配置也不如意，那么可以根据个人需求进行再次配置，站在巨人的肩膀上，感谢开源。

1. 直接通过Plugins安装主题(推荐)
2. 通过导入互联网上的主题
3. 通过修改系统自带的主题

> 切换主题可以使用快捷键**Ctrl + \`**，然后选择`Color Scheme`回车，切换自己喜欢的主题回车确认。

### 通过Plugins安装主题

这里以安装`Material Theme UI`为例记录安装步骤。

1. 使用快捷键`Command + Shift + a`后输入`Plugins`后回车
2. 输入`Material Theme UI`进行搜索
3. 如果没找到，点击`Serach in repository`进入官方仓库
4. 点击`Install`完成安装
5. 重启PhpStorm

### 通过导入主题配置

更多主题可以[参考这里](https://github.com/daylerees/colour-schemes)，这里以里面的[earthsong](https://raw.githubusercontent.com/daylerees/colour-schemes/master/jetbrains/earthsong.icls)为例。

1. 使用命令`Command + Shift + a`-> 输入`Terminal`回车，进入到PhpStorm自带的Terminal命令行。

2. 使用命令`cd ~/Library/Preferences/PhpStorm2018.1/colors`进入到主题配置目录。

3. 使用`wget`命令下载`earthsong`
   主题配置，`wget https://raw.githubusercontent.com/daylerees/colour-schemes/master/jetbrains/earthsong.icls`

4. 重启PhpStorm

5. 切换主题可以使用快捷键**Ctrl + \`**，然后选择`Color Scheme`回车，切换到`earthsong`回车确认。

### 通过编辑器默认主题配置

演示以主题`Twilight`为例。

按住快捷键`Command + Shift + a` 输入`Color Scheme`如下图。

![](./images/phpstorm-change-color-scheme.png)

回车进入配置界面选择`Twilight`保存查看效果。

## 修改 Project 栏的颜色

修改编辑器主题后，左边的 `Project` 栏的颜色跟编辑器主编辑区不一致，可以使用 `Color Ide`插件来实现一致的主题。

打开 `Preferences`，选择 `Plugins`，打开 `Browse repositories`； 搜索 `Color ide` 插件，安装； 重启 `PhpStorm`，这样 `Project` 栏和 `Editor`
的主题颜色已经一致。

## 修改字体

### 修改默认字体

使用快捷键`Command + ,`进入配置中找到`Editor`->`Font`，修改右侧的`Font`、`Size`、`Line Spacing`,在配置的下方会有实时预览，可以参照预览自行配置适当的文字样式。

![](./images/phpstorm-modify-font-size-and-font-face.png)

### 修改主题配置字体

> **注意：** 如果要使主题的配置高于系统默认的配置，需要首先将默认的主题重命名一下再进行配置，这样才能使配置生效。

如果主题有配置专门的字体，默认它的优先级要高于默认字体的优先级，如果想要修改主题的字体配置可以在`Color Scheme Font`中进行配置。

### 推荐几个常用的编辑字体

- [Roboto Mono](https://fonts.google.com/specimen/Roboto+Mono)，[下载地址](https://www.wfonts.com/font/roboto-mono)

- [Fira Code](https://github.com/tonsky/FiraCode)，[下载地址](https://github.com/tonsky/FiraCode/releases/download/1.205/FiraCode_1.205.zip)

- [Source Code Pro](https://github.com/adobe-fonts/source-code-pro)，[下载地址](https://github.com/adobe-fonts/source-code-pro/releases/tag/variable-fonts)

- Operator Mono (收费)
