# Git命令清单

Git作为常用的版本控制工具之一，我们应该在平时的开发中多了解、总结一些命令，将能在遇到一些实际使用过程中省去很多时间。

下面这张图是比较好的一张：
![](/assets/git_remote_repository_workspace.png)

关于git，首先需要了解几个名词，如下

* `Workspace`           //工作区

* `Index / Stage`       //暂存区

* `Repository`          //仓库区（或本地仓库）

* `Remote`              //远程仓

## 配置

Git的设置文件为`.gitconfig`，它可以在用户主目录下（全局配置），也可以在项目目录下（项目配置）。

配置文件的优先级是：`/etc/gitconfig`、`~/.gitconfig`和 当前项目目录的config文件（即`.git/config`文件），这三个文件的优先级依次增高，每个级别重写前一个级别的值。因此，在.git/config中的值覆盖了在/etc/gitconfig中的同一个值。

```
// 显示当前的Git配置
$ git config --list

// 编辑Git配置文件
$ git config -e [--system|--global|--local]

// 设置提交代码时的用户信息
$ git config [--global] user.name "[name]"
$ git config [--global] user.email "[email address]"
```



## 新建代码库

```
// 在当前目录新建一个Git代码库
$ git init

// 新建一个目录，并将其初始化为Git代码库
$ git init [project-name]

// 下载一个项目和它的整个代码历史
$ git clone [ssh/https]
```



