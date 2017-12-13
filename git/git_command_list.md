# Git命令清单

Git作为常用的版本控制工具之一，我们应该在平时的开发中多了解、总结一些命令，将能在遇到一些实际使用过程中省去很多时间。

下面这张图是比较好的一张：
![](/assets/git_remote_repository_workspace.png)

关于git，首先需要了解几个名词，如下

* `Workspace`           //工作区

* `Index / Stage`       //暂存区

* `Repository`          //仓库区（或本地仓库）

* `Remote`              //远程仓

## 新建代码库

```
// 在当前目录新建一个Git代码库
$ git init

// 新建一个目录，并将其初始化为Git代码库
$ git init [project-name]

// 下载一个项目和它的整个代码历史
$ git clone [ssh/https]
```