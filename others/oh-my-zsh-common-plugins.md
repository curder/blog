## Oh-My-Zsh常用插件

在上一篇文章[安装和使用oh-my-zsh](/others/install-and-use-oh-my-zsh.md)中介绍了如何在Mac、CentOS或者Ubuntu操作系统上安装它，这里介绍一些 Oh-My-Zsh 的常用插件。

## 插件配置

插件的配置很简单，只需要找到配置文件`~/.zshrc`中的配置项`plugins=()`的`()`中添加上插件名称即可。

例如添加插件`git`则是`plugins=(git)`，多个插件使用**空格**隔开。

## 插件所在目录

Oh-My-Zsh自带的插件一般放置在目录`~/.oh-my-zsh/plugins`目录下，而通过互联网我们也可以下载更多的插件一般放置在`~/.oh-my-zsh/custom/plugins`目录下。

## 插件列表

打开插件所在目录可以看到 Oh-My-Zsh 自带了很多的插件，下面介绍一下经常用到的。

插件名称 | 文章介绍 | 插件GitHub地址
---- | ---- | ----
`git` | `Oh-My-Zsh` 默认开启了该插件，提供了大量 `git` 别名，具体用法参见 GitHub 地址 | https://github.com/robbyrussell/oh-my-zsh/wiki/Plugin:git
 `autojump` | [autojump自动跳转](/others/how-to-use-autojump-plugin.md) | https://github.com/wting/autojump
 `zsh-autosuggestion` | [zsh-autosuggestion终端提示](/others/how-to-use-zsh-autosuggestion-plugin.md) | https://github.com/zsh-users/zsh-autosuggestions
 `zsh-syntax-highlighting` | [zsh-syntax-highlighting语法高亮](/others/how-to-use-zsh-syntax-highlighting-plugin.md) | https://github.com/zsh-users/zsh-syntax-highlighting


## 参考链接

- [Plugins Overview](https://github.com/robbyrussell/oh-my-zsh/wiki/Plugins-Overview)

- [那些我希望在一开始使用 Zsh(oh-my-zsh) 时就知道的](https://segmentfault.com/a/1190000002658335)

- [oh-my-zsh插件推荐](https://www.jianshu.com/p/9189eac3e52d)

- [Oh My Zsh 插件篇 - 实用工具](https://swiftcafe.io/2015/12/04/omz-plugin/)
