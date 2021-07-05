# 如何在MacOSX上安装Go

## 安装Homebrew
在[Homebrew](http://brew.sh/)复制安装命令，在控制台运行完成安装


## 安装golang

```bash
brew update && brew upgrade
brew install go
```

## 配置环境变量

### 创建项目目录

创建一个目录作为`gopath`，这里举例将其命名为`go-lang-projects`，并在目录创建三个目录`bin`、`src`、`pkg`。

```bash
mkdir -p ~/go-lang-projects/{bin,pkg,src}
```

### 保存环境变量

如果当前用户shell使用的`/bin/bash`，则将下面的环境变量写入到`~/.bash_profile`中，如果使用的是`zsh`，则将下面的内容写入到`~/.zshrc`中，下面的操作以`~/.zshrc`为例。

```bash
echo "# go path" >> ~/.zshrc
echo "export GOROOT=/usr/local/opt/go/libexec" >> ~/.zshrc
echo "export GOPATH=~/go-lang-projects" >> ~/.zshrc
echo "export PATH=\$PATH:\$GOROOT/bin:\$GOPATH/bin" >> ~/.zshrc
```

最后使用`source`命令使配置生效

```bash
source ~/.zshrc
```

