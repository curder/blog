# Git合并特定commits到另一个分支

经常被问到如何从一个分支合并特定的commits到另一个分支。有时候在项目中需要这样做，只合并需要的那些commits，不需要的commits就不合并进去了。

## 合并某个分支上的单个commit

首先，用`git log --graph --all --oneline`查看一下想选择哪些commits进行合并，例如：

```
* 948de1f (HEAD -> master) add file2 to master
| * 0fd0075 (feature) add file2 to feature
| * 711b653 add file to feature
|/
* ac6b216 Init
```

比如，feature 分支上的commit**0fd0075**非常重要，它含有一个bug的修改，或其他人想访问的内容。

无论什么原因，现在只需要将**0fd0075**合并到master，而不合并feature上的其他commits，所以我们用`git cherry-pick`命令来做：

```
git checkout master  
git cherry-pick 0fd0075
```

现在**0fd0075**就被合并到master分支，并在master中添加了commit（作为一个新的commit）。

`git cherry-pick`和`git merge`比较类似，如果git不能合并代码改动（比如遇到合并冲突），git需要用户自己来解决冲突并手动添加commit。