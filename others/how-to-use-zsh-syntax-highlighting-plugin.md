## zsh-syntax-highlighting语法高亮

在使用终端打开文件的时候，我们想是不是能够让命令高亮带来更好的编辑提示。[zsh-syntax-highlighting](https://github.com/zsh-users/zsh-syntax-highlighting)在操作命令行的时候或许能带来更好的体验。


## 安装

在安装该插件之前保证本机已经安装好`zsh`，可以参考：[安装和使用Oh-My-Zsh](/others/install-and-use-oh-my-zsh.md)

[参考插件GitHub地址](https://github.com/zsh-users/zsh-syntax-highlighting/blob/master/INSTALL.md)

在MacOSX、CentOS或者Ubuntu下的安装都可以使用下面的命令：

```
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting

echo "source ${(q-)PWD}/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh" >> ${ZDOTDIR:-$HOME}/.zshrc
```

重新打开终端窗口后，发现再敲命令就有颜色了，比如命令有误的时候是**红色**，命令正确的时候是**绿色**。