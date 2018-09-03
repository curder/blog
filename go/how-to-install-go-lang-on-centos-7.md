# 如何在CentOS 7上安装Go

## 介绍

**Go**，通常被称为*golang*，是由Google开发的一种开源编程语言。它采用极简主义的开发方法，可以轻松构建简单，可靠，高效的软件。

## 下载Go

直接从[Go官网](https://golang.org/dl/)手动下载软件包。确保复制与64位体系结构兼容的最新版本的链接。

首先进入可写目录：

```
cd /tmp
```

使用`curl`命令和Go中的链接下载`tar.gz`

```
curl -LO https://storage.googleapis.com/golang/go1.11.linux-amd64.tar.gz
```

> 如果使用上面的google下载链接无法正常下载或者下载速度比较慢，可以使用Go语言中文网的[下载页面](https://studygolang.com/dl)，运行命令`curl -LO https://studygolang.com/dl/golang/go1.11.linux-amd64.tar.gz`

## 验证shasum值

使用下面的验证方法证明文件在下载过程中既未被篡改也未被破坏或损坏。shasum带有该-a 256标志的命令会产生一个唯一的256位哈希：

```
shasum -a 256 go1.11.linux-amd64.tar.gz
```

> 如果提示`shasum`命令不存在，则可以使用`yum install -y perl-Digest-SHA`安装该校验命令。

将输出中的哈希值与Go下载页面上的校验和值进行比较。如果它们匹配，则可以安全地断定下载是合法的。

## 安装Go

将Go的安装包解压缩到`/usr/local`目录中。使用`tar`命令并带有`-C`参数的命令可将内容保存到指定目录中。该`-x`标志执行提取功能，`-v`生成详细输出，`-z`通过gzip压缩实用程序过滤存档，并`-f`告诉它指定的文件名以执行以下操作：

```
sudo tar -C /usr/local -xvzf go1.11.linux-amd64.tar.gz
```

> 注意：发布者正式建议将Go放在`/usr/local`目录中。在另一个位置安装它不会影响其可用性，但需要在Go环境变量中定义自定义路径`GOROOT`。


接下来，用户的主目录下，有三个子目录创建工作区，`bin`，`src`，和`pkg`。

这里go命令调用工作区目录`go-lang-projects`，也可以将其命名为任何名称。

```
mkdir -p ~/go-lang-projects/{bin,pkg,src}
```

此时，使用Go将需要在命令行中指定其安装位置的完整路径。为了与Go进行交互更加用户友好，下面将设置一些路径。

## 设置Go的路径

要像任何其他命令一样执行Go，我们需要将其安装位置附加到`$PATH`变量。Go安装在系统目录中，这就是将全局设置环境变量的原因。

使用编辑器在`/etc/profile.d/path.sh`目录中创建脚本：

```
sudo echo "export PATH=\$PATH:/usr/local/go/bin" >> /etc/profile.d/path.sh
```

> 如果Go安装在其他位置，则相应地调整路径。

修改`GOBIN`和`GOPATH`
```
echo "# GOBIN && GOPATH PATH" >> ~/.bash_profile
echo 'export GOBIN="\$HOME/go-lang-projects/bin"' >> ~/.bash_profile
echo 'export GOPATH="\$HOME/go-lang-projects"' >> ~/.bash_profile
```

要将更改应用于当前的BASH会话，请使用该source命令重新加载更新的配置文件：

```
source /etc/profile && source ~/.bash_profile
```

## 参考地址

[How To Install Go 1.7 on CentOS 7](https://www.digitalocean.com/community/tutorials/how-to-install-go-1-7-on-centos-7)
