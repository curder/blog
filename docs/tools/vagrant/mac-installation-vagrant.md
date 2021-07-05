# Mac下安装使用Vagrant和LANMP环境搭建

* macOS Sierra 10.12.6

* VirtualBox-5.1.28-117968-OSX

* vagrant\_2.0.0\_x86\_64

Vagrant\([官网](https://www.vagrantup.com "Vagrant官网")，[GitHub](https://github.com/mitchellh/vagrant "Vagrant项目GitHub地址")\)是一款用来构建虚拟开发环境的工具，它其实算是一个跨平台的虚拟机管理工具。

Vagrant创建虚拟机时，需要用到Box，它里面包含了虚拟机配置、虚拟机硬盘镜像和Vagrant配置的压缩包，有了Box，就不需要重新下载ISO镜像文件、新建虚拟机和修改虚拟机等配置，而是直接运行锁需要的操作系统。

相关box推荐

* scotch/box \([官方地址](https://box.scotch.io/ "scotch官方地址")，[GitHub地址](https://github.com/scotch-io/scotch-box "scotch项目GitHub地址")\)


## 安装

### 安装Vagrant

Vagrant的官方下载地址：[https://www.vagrantup.com/downloads.html](https://www.vagrantup.com/downloads.html "vagrant官网")，下载后打开文件，点击pkg包进行安装。

### 安装Virtualbox

Vagrant依赖现有的虚拟机软件来管理虚拟机，如Virtualbox、Vmware Fusion、Parallel Desktop等，其中最方便的是Virtualbox，这里选择它进行安装。

Virtualbox官方下载地址：[https://www.virtualbox.org/wiki/Downloads](https://www.virtualbox.org/wiki/Downloads "VirtualBox官网")，下载后直接安装即可。

## 使用

### 在线下载box

在Vagrant中，box是一种打包好的镜像，通过这个镜像，可以生成相应的虚拟机。box可以通过官方网站下载，也可以自己制作后在团队中分享。

这里使用官方的box在创建时自动下载

```
mkdir -p ~/Documents/Vagrant/Ubuntu && cd ~/Documents/Vagrant/Ubuntu
vagrant box add ubuntu/trusty64
```

ubuntu/trusty64 是一个公共的box（[更多box](https://app.vagrantup.com/boxes/search "Discover Vagrant Boxes -  Vagrant Cloud")）。

如果没有就会去官方下载，并且Box被保存在`~/vagrant/`下，并且在线下载 Box 会比较慢，你可以先下载 Box 之后，再加载本地的 Box 进行初始化。

### 下载box到本地

将 Ubuntu 64 Box：[http://files.vagrantup.com/precise64.box](http://files.vagrantup.com/precise64.box) 下载到本地。另外其他 Box 下载地址：[http://www.vagrantbox.es/](http://www.vagrantbox.es/) 。

添加镜像

```
vagrant box add ubuntu1404 /yourPath/precise64.box
```

> 上面的命令执行完，在镜像列表中可以看到相关信息，执行`vagrant box list`可以查看已有的镜像列表。

### 初始化虚拟机配置

不管是通过在线下载还是将box下载到本地，使用下面的命令进行初始化。**执行初始化命令时，请记得在一个新建的目录下运行**

```
vagrant init ubuntu1204
```

运行上面的命令后，Vagrant会在当前运行的目录下创建 `Vagrantfile` 的配置文件。

### 启动虚拟机

使用下面的命令来启动虚拟机。

```
vagrant up --provider virtualbox
```

> 上面的命令是指定virtualbox虚拟机来启动 `vagrant` 。
>
> 如果虚拟机不存在则会新建虚拟机，如果存在则会启动虚拟机。
