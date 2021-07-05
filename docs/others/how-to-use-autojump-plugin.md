# autojump自动跳转

GitHub地址：[autojump](https://github.com/wting/autojump)是一个命令行工具，它允许用户可以直接跳转到常用的目录，而不用管用户现在身在何处。

与之类似的插件还有：[fs-jumping](https://github.com/robbyrussell/oh-my-zsh/wiki/Plugins-Overview#fs-jumping)

## 安装

- Mac

```bash
brew install autojump
```

- CentOS

```bash
yum -y install autojump
```
> 安装完插件后，在`~/.bash_profile`文件里面添加`. /usr/share/autojump/autojump.bash`；
> 另外，如果当前使用的是`zsh`，那么请使用`yum install`安装对应的`autojump-zsh`插件。


- Ubuntu
```
apt-get -y install autojump
```
> 安装完插件后，在`~/.zshrc`文件里面添加`. /usr/share/autojump/autojump.zsh`启用`autojump`插件；
> 内容参考`/usr/share/doc/autojump/README.Debian`文件 。


安装完以后重启终端后一般执行`j`命令就可以正常工作。


## autojump 基本用法

`autojump`的工作方式很简单：它会在用户每次启动命令时记录你当前位置，并把它添加进它自身的数据库中。这样，某些目录比其它一些目录添加的次数多，这些目录一般就代表你最重要的目录，而它们的“权重”也会增大。

现在不管当前在哪个目录，都可以使用下面的语法来直接跳转到这些目录

```bash
autojump [目录命令或者名称的一部分]
```

> 注意：不需要输入完整的名称，因为会检索它自建数据库，并返回最可能的结果。

- 查看跟踪的所有这些变化，可以输入：

```bash
j -s
```

- 添加目录

```bash
j -a [目录名称]
```

- 改变权重值

```bash
j -i [权重] # 增加当前目录权重
j -d [权重] # 减低当前目录权重
```
> 执行上面的命令之前需要先切换到目标目录。

- 将不存在的目录从数据库中删除

```bash
j --purge
```

其实数据库数据保MacOSX保存在`~/Library/autojump/autojump.txt`文件中，CentOS和Ubuntu数据库权重文件保存在`~/.local/share/autojump/autojump.txt`文件中。

## 参考链接

- [自动补完不算什么，一键直达目录才是终极神器！](https://linux.cn/article-3401-1.html)
