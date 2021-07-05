# Git合并其他分支的个别文件或文件夹

在实际工作中，一个大型的项目或版本迭代可能不是一次上线，可能会分好几次上线，这时候就会涉及创建多个分支，进行分别开发。

## 实际需求

功能分为2个分支，分别为`article/list`、`article/show`。
* `article/list`上面有个列表页功能
* `article/show`上面有个详情页功能，还有个系统消息功能

产品经理说先上列表功能，于是我们就开发`article/list`分支，列表功能很快开发完成。

第二天按常理开发`article/show`分支，开发到一半的时候，产品经理说目前的系统消息功能需要急着上线，要和列表功能一起上线，当时就懵逼了，然后赶紧放下详情页的开发，立马去开发系统消息功能，开发完之后需要将列表功能和系统消息功能放在一个分支上提测，这时候分支合并就派上用场了。

## 合并分支

使用`git merge`命令进行分支合并是通用的做法，但是`git merge`合并的时候会将两个分支的内容完全合并，如果想合并一部分肯定是不行的。那怎么办？

如何从其他分支merge指定文件到当前分支，`git checkout`是个合适的工具。

```
git checkout source_branch <path>...
```
> 使用`git checkout`之前一定要确定当前分支。

## 强制合并(不推荐)

我们使用`git checkout`将`article/show`分支上的系统消息功能添加到`article/list`分支上

```
$ git branch
  * article/list  
    article/show
    
$ git checkout article/show message.html message.css message.js other.js

$ git status
# On branch article/list
# Changes to be committed:
#   (use "git reset HEAD <file>..." to unstage)
#
#    new file:   message.css
#    new file:   message.html
#    new file:   message.js
#    modified:   other.js
```

> 在使用`git checkout`某文件到当前分支时，会将当前分支的对应文件强行覆盖

这里新增文件没问题，但是`article/list`分支上原有的other.js会被强行覆盖，如果`article/list`分支上的other.js有修改，在checkout的时候就会将other.js内容强行覆盖，这样肯定是不行的。如何避免不强制覆盖呢？

## 智能合并（推荐）

* 使用`git checkout`将根据A分支创建一个`article/list_temp`分支，避免影响`article/list`分支

```
$ git checkout -b article/list_temp
Switched to a new branch 'article/list_temp'
```

* 将`article/show`分支合并到`article/list_temp`分支

```
$ git merge article/show
Updating 1f73596..04627b5
Fast-forward
message.css                     | 0
message.html                    | 0
message.js                      | 0
other.js                        | 1 +
4 files changed, 1 insertion(+)
create mode 100644 message.css
create mode 100644 message.html
create mode 100644 message.js
```
* 切换到`article/list`分支，并使用`git checkout`将`article/list_temp`分支上的系统消息功能相关文件或文件夹覆盖到`article/list`分支

```
$ git checkout article/list
Switched to branch 'article/list'

$ git checkout article/list_temp message.html message.css message.js other.js

$ git status
# On branch article/list
# Changes to be committed:
#   (use "git reset HEAD <file>..." to unstage)
#
#    new file:   message.css
#    new file:   message.html
#    new file:   message.js
#    modified:   other.js
```

## 删除临时的分支

```
$ git branch -D article/list_temp
```

## 参考

[git小技巧--如何从其他分支merge个别文件或文件夹](https://segmentfault.com/a/1190000008360855)