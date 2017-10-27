# Git合并特定commits到另一个分支

经常被问到如何从一个分支合并特定的commits到另一个分支。有时候在项目中需要这样做，只合并需要的那些commits，不需要的commits就不合并进去了。

## 合并某个分支上的单个commit

首先，用`git log --graph --all --oneline`查看一下想选择哪些commits进行合并，例如：

```
* d83e670 (feature) feature3 file
* 7118b61 feature2 file
* 7c5f9e9 feature1 file
| * 675d29c (HEAD -> master) master4 file
| * 4433f8a master3 file
| * 14a30a8 master2 file
| * 47cbcb8 master1 file
|/
* 604615a Init
```

比如，feature 分支上的commit**7118b61**非常重要，它含有一个bug的修改，或其他人想访问的内容。

无论什么原因，现在只需要将**7118b61**合并到master，而不合并feature上的其他commits，所以我们用`git cherry-pick`命令来做：

```
git checkout master  
git cherry-pick 7118b61
```

现在**7118b61**就被合并到master分支，并在master中添加了commit（作为一个新的commit）。

`git cherry-pick`和`git merge`比较类似，如果git不能合并代码改动（比如遇到合并冲突），git需要用户自己来解决冲突并手动添加commit。

## 合并某个分支上的一系列commits

在一些特性情况下，合并单个commit并不够，可能需要合并一系列相连的commits。

这种情况下就不要选择`git cherry-pick`了，rebase更适合。

还以上例为例，假设需要合并feature分支的commit **7c5f9e9** ~ **7118b61**到master分支。

首先需要基于feature创建一个新的分支，并指明新分支的最后一个commit：

```
git checkout -bnewbranch 7118b61
```

然后，rebase这个新分支的commit到master（--onto master）。7c5f9e9**^** 指明你想从哪个特定的commit开始。

```
git rebase --onto master 7c5f9e9^
```

得到的结果就是feature分支的commit **7c5f9e9** ~ **7118b61** 都被合并到了newbranch分支。

> 其实更加建议在新的功能开发时新增一些特性的分支，比如 `feature/send_email`、`feature/register` 分支。  这样可以做到从容面对一些合并要求



