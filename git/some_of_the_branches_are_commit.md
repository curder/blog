# Git拉取远程分支到本地

Git拉取远程分支其实只需要 `git fetch origin xxx`、 `git pull origin xxx`两步即可。

比如，拉取GitHub上面的仓库中的`step1`分支。

1. 确保本地分支和远程`origin master`建立了连接：
```
git remote add origin git@github.com:xxxxxx.git // （你的远程仓库）
```

2. 切换分支

```
git checkout -b step1 origin/step1
```

如果遇到这种情况：
> **fatal:** Cannot update paths and switch to branch 'dev' at the same time.
Did you intend to checkout 'origin/dev' which can not be resolved as commit?

原因是本地仓库并没有`step1`这个分支。

这时可以用`git branch -a`命令来检查本地是否具有`step1`分支


* 拉取远程分支到本地

```
git fetch origin step1 
```

* 本地创建并切换到分支
```
git checkout -b step1 origin/step
```

* 拉取远程分支到本地
```
git pull origin step1
```