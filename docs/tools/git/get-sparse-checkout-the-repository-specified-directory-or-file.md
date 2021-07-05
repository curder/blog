# Git获取仓库指定目录或文件

使用`git clone`可以获取远程服务器的所有仓库代码，然而有时想查看仓库里某个目录或文件，例如`examples`目录的时候。

从`1.7.0`版本开始git提供稀疏检出的功能。所谓稀疏检出就是本地版本库检出时不检出全部，只将指定的文件从本地版本库检出到工作区，而其他未指定的文件则不予检出（即使这些文件存在于工作区，其修改也会被忽略）。

## 相关步骤

* 检查Git版本
* 创建本地存放文件夹
* `git init`初始化仓库
* 添加远程仓库地址
* 使用Sparse checkout模式
* 配置要检出的目录或文件
* 从远程将目标目录或文件拉取下来


## 具体操作

演示`git`的版本是`1.8.3.1`，远程仓库地址是[swoole/swoole-src](https://github.com/swoole/swoole-src.git)。

### 检查Git版本

在命令行中运行如下命令

```
git --version
```
> 比如保证git的版本大于`1.7.0`，这里以 `git version 1.8.3.1`作为演示。

### 创建仓库存放目录

```
mkdir swoole-src-examples && cd swoole-src-examples
```
> 创建一个目录，这里以`swoole-src-example`，并且使用`cd`命令进入到目录中。

### 初始化仓库

执行初始化仓库的命令

```
git init
```

### 添加远程仓库地址

```
git remote add origin https://github.com/swoole/swoole-src.git
```

### 使用Sparse checkout模式

使用下面的命令允许`config`中使用**Sparse checkout**模式。

```
git config core.sparsecheckout true
```

### 配置要检出的目录或文件

将要检出的目录或文件使用文件追加的形式写入到git的配置`.git/info/sparse-checkout`文件中，**允许添加多行**。

```
echo "examples/*" >> .git/info/sparse-checkout
```

> 多次添加配置后，通过`cat .git/info/sparse-checkout`命令查看最终添加的目录或者文件。

### 从远程将目标目录或文件拉取下来

当仓库还是空白的情况下，首次需要执行下面的命令从远程将配置的目录或者文件拉取到本地。

```
git pull origin master
```

### 对配置增删改后重新获取代码

在对配置文件`.git/info/sparse-checkout`的内容进行**增**、**删**、**改**操作之后，使用下面的命令重新修正目录和文件。

```
git checkout
```


## 参考链接

* [稀疏检出和浅克隆](https://www.worldhello.net/gotgit/08-git-misc/090-sparse-checkout-and-shallow-clone.html)

* [git checkout仓库项目某个文件夹](https://www.jianshu.com/p/e36cbcc8f75d)
