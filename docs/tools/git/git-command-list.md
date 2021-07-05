# Git命令清单

Git作为常用的版本控制工具之一，我们应该在平时的开发中多了解、总结一些命令，将能在遇到一些实际使用过程中省去很多时间。

下面这张图是比较好的一张：

<img :src="$withBase('/images/tools/git/git-command-list/git-remote-repository-workspace.png')" alt="">

关于git，首先需要了解几个名词，如下

* `Working Directory`           // 工作区

* `Index / Stage Area`       // 暂存区

* `Repository`          // 仓库区（或本地仓库）

* `Remote`              // 远程仓

在 Git 里，主要可以分成「工作区（Working Directory）」、「暂存区（Staging Area）」以及「储存区（Repository）」三个区块，通过不同的 Git 指令，可以把文件移到不同的区域：

- `git add` 指令把文件从工作目录移至暂存区（或索引）。

- `git commit` 指令把暂存区的內容移至仓库区。

## 配置

Git的设置文件为`.gitconfig`，它可以在用户主目录下（全局配置），也可以在项目目录下（项目配置）。

配置文件的优先级是：`/etc/gitconfig`、`~/.gitconfig`和 当前项目目录的config文件（即`.git/config`文件）。

这三个文件的优先级依次增高，每个级别重写前一个级别的值。因此，在`.git/config`中的值覆盖了在`/etc/gitconfig`中的同一个配置值。

```bash
# 显示当前的Git配置
git config --list

# 编辑Git配置文件，不指定默认是 --local
git config -e [--system|--global|--local]

# 设置提交代码时的用户信息
git config [--global] user.name "[name]"
git config [--global] user.email "[email address]"
```

## 新建仓库

```bash
# 在当前目录新建一个Git仓库
git init

# 新建一个目录，并将其初始化为Git仓库
git init [project-name]

# 下载一个项目和它的整个代码历史
git clone [ssh/https/file:///]
```

## 增加/删除文件

```bash
# 添加指定文件到暂存区
git add [file1] [file2] ...

# 添加指定目录到暂存区，包括子目录
git add [dir]

# 添加当前目录的所有文件到暂存区
git add .

# 添加每个变化前，都会要求确认
# 对于同一个文件的多处变化，可以实现分次提交
git add -p

# 删除工作区文件，并且将这次删除放入暂存区（相当于 rm [file1] [file2]，再执行 git add 命令结果）
git rm [file1] [file2]

# 停止追踪指定文件，但该文件会保留在工作区，通常是在文件曾经被git管理过，现在不需要被git接管的时候使用【不删除物理文件，仅将该文件从缓存中删除】
git rm --cached [file]

# 将误删除的文件恢复
git checkout -- file

# 改名文件，并且将这个改名放入暂存区
git mv [file-original] [file-renamed]
```

## 提交文件

```bash
# 空文件提交到版本
# 空的 Commit 出來，基本上没什么意义，有时可以不用新增文件而快速产生 Commit 來git相关的操作
git commit --allow-empty -m "空的"

# 提交暂存区文件到仓库区
git commit -m [message]

# 提交暂存区的指定文件到仓库区
git commit [file1] [file2] ... -m [message]

# 提交工作区自上次commit之后的变化，直接到仓库区
git commit -a

# 提交时显示所有diff信息
git commit -v

# 使用一次新的commit，替代上一次提交
# 如果代码没有任何新变化，则用来改写上一次commit的提交信息
git commit --amend -m [message]

# 重做上一次commit，并包括指定文件的新变化
git commit --amend [file1] [file2]
```

## 忽略文件

### 强制添加存在于`.gitignore`的文件

```bash
git add -f file.class
```

## 分支操作

### 查看

```bash
# 列出所有本地分支
git branch

# 列出所有远程分支
git branch -r

# 列出所有本地分支和远程分支
git branch -a

# 指定本地work1和远程work1分支的连接关系
git branch --set-upstream work1 origin/work1
```

### 新建

```bash
# 新建一个分支，但依然停留在当前分支
git branch [branch-name]

# 新建一个分支，并切换到该分支
git checkout -b [branch]

# 新建一个分支，指向指定的commit
git branch [branch] [commit]

# 新建一个分支，与指定的远程分支建立追踪关系
git branch --track [branch] [remote-branch]
```

### 修改

```bash
# 将master分支改名为slave
git branch -m master slave
```

### 删除

```bash
# 删除分支
git branch -d [branch-name]

# 删除远程分支
git push origin --delete [branch-name]
git branch -dr [remote/branch]
```

### 其他

```bash
# 切换到指定分支，并更新工作区
git checkout [branch-name]

# 切换到上一个分支
git checkout -

# 放弃当前所有修改会退到上一提交
git checkout .

# 建立追踪关系，在现有分支与指定的远程分支之间
git branch --set-upstream [branch] [remote-branch]

# 合并指定分支到当前分支
git merge [branch]

# 选择一个commit，合并进当前分支
git cherry-pick [commit]
```

## 标签

```bash
# 列出所有tag
git tag

# 新建一个tag在当前commit
git tag [tag]

# 新建一个tag在指定commit
git tag [tag] [commit]

# 删除本地tag
git tag -d [tag]

# 删除远程tag
git push origin :refs/tags/[tagName]

# 查看tag信息
git show [tag]

# 提交指定tag
git push [remote] [tag]

# 提交所有tag
git push [remote] --tags

# 新建一个分支，指向某个tag
git checkout -b [branch] [tag]
```

## 查看日志

```bash
# 显示当前分支的版本历史
git log

# 简略查看信息
git log  --pretty=oneline

# 查看分支信息
git log --graph --pretty=oneline --abbrev-commit

# 显示commit历史，以及每次commit发生变更的文件
git log --stat

# 搜索提交历史，根据关键词
git log -S [keyword]

# 显示某个commit之后的所有变动，每个commit占据一行
git log [tag] HEAD --pretty=format:%s

# 显示某个commit之后的所有变动，其"提交说明"必须符合搜索条件
git log [tag] HEAD --grep feature

# 显示某个文件的版本历史，包括文件改名
git log --follow [file]
git whatchanged [file]

# 显示指定文件相关的每一次diff
git log -p [file]

# 显示过去5次提交
git log -5 --pretty --oneline

# 显示所有提交过的用户，按提交次数排序
git shortlog -sn

# 找某个人或某些人的 Commit
git log --author="curder"
git log --author="curder\|test"

# 按照提交的 Message 获取对应的提交
git log --grep="css"

# 找出某行文件内容谁写的
git blame file_name
git blame -L 2,8 file_name

```

## 文件差异对比

```bash
# 显示暂存区和工作区的差异
git diff

# 工作区与暂存区比较
git diff filepath

# 显示暂存区和上一个commit的差异
git diff --cached [file]

# 显示工作区与当前分支最新commit之间的差异
git diff HEAD

# 工作区与HEAD ( 当前工作分支) 比较
git diff HEAD filepath

# 显示两次提交之间的差异
git diff [first-branch]...[second-branch]

# 显示当前用户今天写了多少行代码
git diff --shortstat "@{0 day ago}"

# 暂存区与HEAD比较
git diff --staged 或 --cached filepath

# 当前分支的文件与branchName 分支的文件进行比较
git diff branchName filepath

# 与某一次提交进行比较
git diff commitId filepath
```

## 查看信息

```bash
# 显示有变更的文件
git status

# 显示指定文件是什么人在什么时间修改过
git blame [file]

# 显示某次提交的元数据和内容变化
git show [commit]

# 显示某次提交发生变化的文件
git show --name-only [commit]

# 显示某次提交时，某个文件的内容
git show [commit]:[filename]

# 显示当前分支的最近几次提交
git reflog
```

## 远程同步

```bash
# 下载远程仓库的所有变动
git fetch [remote]

# 显示所有远程仓库
git remote -v

# 显示某个远程仓库的信息
git remote show [remote]

# 增加一个新的远程仓库，并命名
git remote add [shortname] [url]

# 取回远程仓库的变化，并与本地分支合并
git pull [remote] [branch]

# 上传本地指定分支到远程仓库
git push [remote] [branch]

# 强行推送当前分支到远程仓库，即使有冲突
git push [remote] --force

# 推送所有分支到远程仓库
git push [remote] --all
```

## 撤销

```bash
# 恢复暂存区的指定文件到工作区
git checkout [file]

# 恢复某个commit的指定文件到暂存区和工作区
git checkout [commit] [file]

# 恢复暂存区的所有文件到工作区
git checkout .

# 撤销添加到暂存区的文件，这样文件就回到了工作区
git reset HEAD file

# 重置暂存区的指定文件，与上一次commit保持一致，但工作区不变
git reset [file]

# 重置暂存区与工作区，与上一次commit保持一致
git reset --hard

# 返回上一版本，丢弃当前提交的一个版本，如果错误的删除了，可以使用 git reflog 获取到最后的提交hash值，然后使用 git merge hash_code 回退到上一个提交
git reset --hard HEAD^

# 重置当前分支的指针为指定commit，同时重置暂存区，但工作区不变
git reset [commit]

# 重置当前分支的HEAD为指定commit，同时重置暂存区和工作区，与指定commit一致
git reset --hard [commit]

# 重置当前HEAD为指定commit，但保持暂存区和工作区不变
git reset --keep [commit]

# 新建一个commit，用来撤销指定commit
# 后者的所有变化都将被前者抵消，并且应用到当前分支
git revert [commit]

# 撤销上一个提交，使用 git revert 当作撤销已经提交的更改，而 git reset HEAD 用来撤销没有提交的更改。
git revert HEAD
```

### Reset 的模式

`git reset` 指令可以搭配参数使用，常见的三个参数，分别是 `--mixed`、`--soft` 以及 `--hard`，不同的参数执行之后会有稍微不太一样的结果。

#### `mixed` 模式

`--mixed` 是默认的参数，如果没有特别的参数，`git reset` 指令将会使用 `--mixed` 模式。这个模式会把暂存区的档案丟掉，但不會动到工作目录的档案，也就是说 Commit
拆出來的档案会留在工作目录，但不会留在暂存区。

### soft 模式

`--soft` 模式下的 reset，工作目录跟暂存区的档案都不会被丟掉，所以看起來就只有 HEAD 的移动而已。也因此 Commit 拆出來的文件会直接放在暂存区。

### hard 模式

`--hard` 模式下，不管是工作目录以及暂存区的文件都会丟掉。**该模式不建议在公共分支下操作。** 如下表格：

| 模式 | mixed 模式（预设） |  soft 模式 | hard 模式 |
| ---- | ---- | ---- | ---- |
| 工作目录  |  不变 | 不变 | 丟掉 |
| 暂存区 | 丟掉 | 不变 | 丟掉 |

如果上面的说明不容易想像到底发生什么事，只要记住这些不同的模式，将会决定「Commit 拆出來的那些文件何去何从」。

| 模式 | mixed 模式（预设） | soft 模式 | hard 模式 |
| ---- | ---- | ---- | ---- |
| Commit 拆出來的文件 | 丟回工作目录 | 丟回暂存区 | 直接丟掉 |

## 储藏工作区

工作途中，我们在A分支工作，当前任务未完成，没有添加到暂存区，但是需要紧急修复bug，使用

```bash
git stash
```

储藏现场，然后切换到需要修复bug的分支B。接着，创建修复bug的分支C，完成修复任务，回到B分支，合并C分支，删除C分支。

回到我们正在工作的A分支：

```bash
git checkout A
```

查看工作现场

```bash
git stash list
```

使用下面的命令恢复工作现场

```bash
git stash pop
```

此时会恢复并且删除stash的内容。

不删除stash内容？

```bash
git stash apply <指定stash，可以多次stash>
```

只执行恢复操作。

但是以后想删除？

```bash
git stash drop
```

执行删除stash内容的操作。

## 文件打包

### 查看帮助

```bash
 git archive [options] <tree-ish> [<path>...]
 --format <fmt>        archive format
 --prefix <prefix>     prepend prefix to each pathname in the archive
 -o, --output <file>   write the archive to this file
 -0                    store only
 -1                    compress faster
 -9                    compress better
 -l, --list            list supported archive formats
```

### 查看支持的归档格式

```bash
git archive --list
```

运行完上面的命令，可以看到支持的归档格式有：`tar`、`tgz`、`tar.gz`和`zip`。

### 导出

创建一个包含当前最新提交内容的`tar.gz`归档文件分支，并将其解压到`/tmp/projectName`目录中。

```bash
git archive --format=tar.gz --prefix=projectName/ HEAD | (cd /tmp/ && tar xf -)
```

```bash
# 导出最新的版本库
git archive -o ../latest.zip HEAD

# 通过hash值导出指定提交记录
git archive -o ../git-1.4.0.tar hashCode

# 导出一个目录
git archive -o ../git-1.4.0-docs.zip  HEAD:Documentation/

# 导出为tar.gz格式
git archive 8996b47 | gzip > ../git-1.4.0.tar.gz

# 导出最后一次提交修改过的文件
git archive -o ../updated.zip HEAD $(git diff --name-only HEAD^)

# 导出tag
git archive --format=tar.gz 1.0 | gzip > v1.0.tar.gz
```

## 参考链接

* [Git进阶使用笔记](https://www.jianshu.com/p/f19d6b690a7e)

* [為你自己學 Git](https://gitbook.tw/)

* [Git 菜单](https://github.com/geeeeeeeeek/git-recipes)
