# Git更新远程代码到本地仓库

使用Git协同开发时，除了往服务器推送本地的代码也会经常从服务器上拉取代码，在拉取代码的还是除了使用`git pull`推送，还可以使用`git fetch`和`git merge`命令。

使用`git fetch`操作的好处是，`git fetch` 并没更改本地仓库的代码，只是拉取了远程 `commit` 数据，将远程仓库的 `commit id` 更新为`latest`。

* 查看远程仓库

```
git remote -v
```
> 默认情况下会有一个`origin`的远程仓库名

* 从远程获取最新版本到本地新建的分支

```
git fetch origin master:temp
```

* 比较区别

```
git diff temp
```
> 比较本地`master`分支和远程`master`分支的区别

* 合并分支

```
git merge temp
```
> 合并`temp`分支到`master`。

* 删除临时分支

```
git branch -d temp
```

> 如果该分支没有合并到主分支会报错，可以用命令强制删除`git branch -D <branch_name>`