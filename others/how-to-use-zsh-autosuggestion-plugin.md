## zsh-autosuggestion终端提示

[zsh-autosuggestion](https://github.com/zsh-users/zsh-autosuggestions) 是一款根据命令历史输入时的命令进行输入提示的插件。

## 安装


### 通过Oh-My-Zsh

1. 克隆资源库到 `$ZSH_CUSTOM/plugins` (默认是 `~/.oh-my-zsh/custom/plugins`)
```
git clone git://github.com/zsh-users/zsh-autosuggestions $ZSH_CUSTOM/plugins/zsh-autosuggestions
```

2. 将插件添加到插件列表，让 Oh-My-Zsh 加载

修改 `~/.zshrc` 文件，找到 `plugins=(git)`` 这一行，然后添加`autosuggestions`
```
plugins=(git zsh-autosuggestions)
```

3. 重新打开终端会话，或者执行 `source ~/.zshrc`也可以更新会话


### 手动安装

1. 克隆资源库到你的计算机. 假设是 `~/.zsh/plugins/zsh-autosuggestions`

```
git clone git://github.com/zsh-users/zsh-autosuggestions ~/.zsh/plugins/zsh-autosuggestions
```

2. 添加内容到 `.zshrc`

```
source ~/.zsh/plugins/zsh-autosuggestions/zsh-autosuggestions.zsh
```

3. 重新打开终端会话


![zsh-autosuggestion](/assets/zsh-autosuggestions.gif)
> 注意在终端输入命令行的时候后面会有浅色单词提示。

## 参考地址

- [用强大的zsh & oh-my-zsh替换bash](https://www.chadou.me/p/203)