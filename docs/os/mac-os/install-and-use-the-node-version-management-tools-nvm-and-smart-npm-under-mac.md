# Mac下安装和使用node版本管理工具nvm和smart-npm

目前主流的node版本管理工具有两种，[nvm](https://github.com/creationix/nvm)和[n](https://github.com/tj/n)。
两者差异挺大的，具体分析可以参考一下淘宝FED团队的一篇文章： [管理 node 版本，选择 nvm 还是 n？](http://taobaofed.org/blog/2015/11/17/nvm-or-n/)。

## nvm

### 安装

安装可以参考nvm的README文档，这里使用`curl`命令安装。

```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
```

### 配置

成功执行上面的命令后`nvm`就被安装在了`~/.nvm`目录下，接下来就需要配一下环境变量了，如果当前Mac环境使用了`zsh`的话，就需要在`~/.zshrc`这个配置文件中配置，否则就编辑`~/.bash_profile`或者`~/.profile`文件，添加如下内容。

```
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" # This loads nvm
# current npm path
export PATH="$(npm config get prefix)/bin:$PATH"
```

至此，`nvm`的安装完成。

### 测试

执行命令将`nvm`加载到环境变量中。

```
source ~/.zshrc
```

验证是否安装成功可以执行命令。

```
command -v nvm
```

### 使用

* 查看当前可供使用的NodeJS版本
```
nvm ls-remote
```
> NodeJS的版本发布很频繁，一般可以在[NodeJS]官网看到LTS版本进行下载。


* 安装指定版本的NodeJS
```
nvm install v8.11.3
nvm install v10.4.1
```
> NodeJS安装的目录一般在`~/.nvm/versions/node`下。

* 卸载指定的NodeJS版本
```
nvm uninstall v8.11.3 // 卸载8.11.3
```

* 查看本地安装的NodeJS版本
```
nvm list
```

* 指定默认的NodeJS版本
```
nvm use v8.11.3
nvm alias default v8.11.3 # 指定默认的NodeJS版本
```

* 查看当前使用的NodeJS版本
```
nvm current
```

至此，nvm相关的基本操作完成，更多的操作请查看[nvm](https://github.com/creationix/nvm)项目的README说明。

## smart-npm

### 安装

```
npm install --global smart-npm --registry=https://registry.npm.taobao.org/
```

### 配置

如果当前使用了`zsh`的话，就需要在`~/.zshrc`这个配置文件中配置，否则就编辑`~/.bash_profile`或者`~/.profile`文件，添加如下内容。

```
alias npm=smart-npm
```

重新打开一个终端应该就能看到`smart-npm`安装在了系统里。

### 卸载

```
npm uninstall --global smart-npm
```

> 成功卸载`smart-npm`安装包的同时需要将`~/.zshrc`里的`alias npm=smart-npm`一并删除。

更多`smart-npm`的使用[参考这里](https://github.com/qiu8310/smart-npm)。

## 参考链接

* [node版本管理工具nvm-Mac下安装及使用](https://segmentfault.com/a/1190000004404505)
