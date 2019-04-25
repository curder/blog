## 安装和使用Oh-My-Zsh

shell 俗称壳，C语言编写的命令解析器程序，是用户使用 Linux 的桥梁。Linux/Unix 提供了很多种 Shell。常用的 Shell 有这么几种：`sh`、`bash`、`csh`等。

通常来说不管是 Mac 还是 CentOS 或者是 Ubuntu 等类 Unix 系统，默认的 SHELL 都是`bash`。但是真正强大的SHELL是`zsh`，但是由于配置比较繁琐，在出现 Oh My Zsh 之前有比较少的人使用。
[Oh My Zsh](http://ohmyz.sh/) 的简单配置能让我们快速使用zsh这个SHELL给开发者带来很多愉悦，节省时间。

## 安装zsh

分别介绍一下 Mac、CentOS 和 Ubuntu 下 zsh 的安装。

### 安装前的准备

安装前可以打开命令行终端，通过命令查看当前所使用的 SHELL 。

```
echo $SHELL
```

同时可以通过命令`cat /etc/shells`查看当前环境下所有支持的 SHELL ，在列表中检查系统是否已经安装好`zsh`。

> 在 CentOS 和 Ubuntu 上默认没有安装`zsh`，MacOSX 平台默认自带。

### 安装zsh

`zsh`在 Mac 和 Linux 平台的安装都比较简单，直接通过各自平台的包依赖管理工具执行一条命令即可安装完成。

- Mac下的安装
  在Mac系统下默认自带zsh，我们可以使用 [brew](https://brew.sh/index_zh-cn) 命令更新一下。

```
brew install zsh git
```

> 值得注意的是：zsh 在MacOSX上使用 brew 命令的安装的 zsh 路径在`/usr/local/bin/zsh`，而系统自带的 zsh 默认是在 /bin/zsh，如果需要使用brew安装的zsh，则在`/etc/shells`中添加一条记录，`/usr/local/bin/zsh`，也可以直接使用系统自带的zsh也行。

- CentOS下的安装

```
sudo yum -y install zsh git
```

- Ubuntu下的安装

```
sodu apt-get -y install zsh git
```

### 切换到zsh并检查

- 切换shell为zsh

```
chsh -s `which zsh` root # 为root用户修改默认shell为zsh

chsh -s `which zsh` # 为当前用户修改默认shell为zsh，注意：MacOSX系统使用`chsh -s /bin/zsh`即可。

chsh -s /bin/bash # 恢复bash命令
```

- 检查是否安装好zsh
  1. 通过命令`cat /etc/shells`命令，可以查看一下系统当前所有的SHELL，看看有没有`zsh`。
  2. 通过命令`echo $SHELL`命令，查看当前是不是使用`zsh`环境。 

执行上面的命令可能需要输入当前用户的密码后确认切换至 zsh ，然后注销当前会话并重新连接后查看是否真正切换至 zsh。

至此，zsh 的安装与切换已经完毕，下面开始安装和配置`oh-my-zsh`。

## Oh-My-Zsh的安装

curl 和 wget 两种安装方式二选一即可

- 通过curl进行安装

```
sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```

- 通过wget进行安装

```
sh -c "$(wget https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh -O -)"
```

安装成功后显示一个如下的欢迎界面：

```
Looking for an existing zsh config...
Using the Oh My Zsh template file and adding it to ~/.zshrc
         __                                     __
  ____  / /_     ____ ___  __  __   ____  _____/ /_
 / __ \/ __ \   / __ `__ \/ / / /  /_  / / ___/ __ \
/ /_/ / / / /  / / / / / / /_/ /    / /_(__  ) / / /
\____/_/ /_/  /_/ /_/ /_/\__, /    /___/____/_/ /_/
                        /____/                       ....is now installed!
```

至此，Oh-My-Zsh 的安装已经完毕。

## 定制Oh-My-Zsh

### 基本配置

Oh-My-Zsh的默认配置在`~/.zshrc`文件中配置可以配置，修改默认的基本配置:

```
ZSH_THEME="robbyrussell"  # zsh主题，可以配置为后面的Dracula主题
export UPDATE_ZSH_DAYS=30 # 30天检查更新zsh
HIST_STAMPS="yyyy-mm-dd"  # 历史记录时间格式
export LANG=en_US.UTF-8   # 语言

plugins=(git autojump zsh-autosuggestions) # 开启常用插件(这些插件都包含在oh-my-zsh中)
```

> `autojump` 命令能够记住我们在命令终端输入的命令，在我们下次使用的时候配合 [zsh-autosuggestions](https://github.com/zsh-users/zsh-autosuggestions)  可以在我们输入命令时给出一些提示，加快我们的命令敲入速度，非常棒。

> `Oh-My-Zsh`插件目录路径在`~/.oh-my-zsh/plugins`目录下。


### 安装Dracula主题

[Dracula](https://draculatheme.com/)在很多编辑器上都可以使用，更多信息可以参考官网

```
wget -O dracula.zip -c --no-check-certificate https://github.com/dracula/zsh/archive/master.zip

unzip dracula.zip # 解压缩

mv zsh-master/dracula.zsh-theme ~/.oh-my-zsh/themes/ # 将dracula.zsh-theme移动到oh-my-zsh主题目录
```

> wget参数解释
> `-O`：自定义存储的文件名
> `-c`：支持断点续传
> `--no-check-certificate`：忽略 https 验证

安装好以后打开`~/.zshrc`文件修改文件中`ZSH_THEME`的配置为：`dracula`，重新打开一个终端或者使用命令`source ~/.zshrc`重载配置。


### 插件相关

Oh-My-Zsh的强大之处是安装各种插件加速我们在命令行终端的体验，更多插件相关的安装和使用请[查看这里](/others/oh-my-zsh-common-plugins.md)。


## 手动升级Oh-My-Zsh

执行下面的命令手动升级

```
upgrade_oh_my_zsh
```

## 卸载Oh-My-Zsh

如果想卸载 Oh-My-Zsh, 从命令行运行下面的命令， 这将删除本身和恢复系统以前的`bash`或者`zsh`配置。
```
uninstall_oh_my_zsh zsh
```


## 参考地址

- [oh-my-zsh配置你的zsh提高shell逼格终极选择](http://yijiebuyi.com/blog/b9b5e1ebb719f22475c38c4819ab8151.html)

- [centos7 安装zsh和使用oh-my-zsh](http://ju.outofmemory.cn/entry/273093)
