# Vagrant端口转发和文件共享

| 操作 | 解释 |
| :---: | :--- |
| 端口转发（[文档地址](https://www.vagrantup.com/docs/networking/forwarded_ports.html "vagrant端口转发文档地址")） | 将本机具体端口转发到指定虚拟机端口 |
| 共享目录（[文档地址](https://www.vagrantup.com/docs/synced-folders/ "vagrant官网共享目录文档地址")） | 将本机具体目录和虚拟机共享 |
| 网络配置 | 公有网络、私有网络和Host Only三种网络配置方式 |

#### 端口转发

将下面的代码段写入到vagrant的Vagrantfile配置文件中。

```text
config.vm.network "forwarded_port", guest: 80, host: 8888
config.vm.network "forwarded_port", guest: 8888, host: 8889
```

> 将虚拟机的 `80` 端口映射到本地机的 `8888` 端口以及虚拟机的 `8888` 端口映射到本地机的 `8889` 端口，使用`vagrant reload`重启虚拟机生效。
> **注意：**这里所说的虚拟机为vagrant虚拟机，本地机为Mac开发机。

我们来到 VirtualBox 中可以在虚拟机的 “设置” => "网络" => "高级" => "端口转发"

<img :src="$withBase('/images/tools/vagrant/forwarded_ports.png')" alt="">

#### 共享目录

将下面的代码段写入到vagrant的Vagrantfile配置文件中。

```text
config.vm.synced_folder "/Users/curder/website", "/var/www/html"
```

> 将本机`/Users/curder/website` 目录共享到虚拟机的`/var/www/html`

#### 网络配置

* 配置私有网络IP

将下面的代码段写入到vagrant的Vagrantfile配置文件中。

```text
config.vm.network "private_network", ip: "192.168.50.4"
```

* 配置共有网络IP

将下面的代码段写入到vagrant的Vagrantfile配置文件中。

```text
config.vm.network "private_network", ip: "192.168.33.100", auto_config: true
```

> **注意：**公有网络IP配置需要和Mac本机的IP保持在一个网段，并且不能和其他主机ip冲突。

### 典型的Vagrantfile配置

```text
# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
config.vm.box = "ubuntu1404"
config.vm.hostname = "developer"
config.vm.network "forwarded_port", guest: 80, host: 8888 ,id: 'nginx'
config.vm.network "forwarded_port", guest: 8888, host: 8889 ,id: 'apache'
config.vm.network "private_network", ip: "192.168.199.101",auto_config: true
config.vm.synced_folder "/Users/curder/website/", "/home/www", :nfs => true
#config.vm.synced_folder "/Users/curder/website/", "/home/www", :nfs => true

config.vm.provider "virtualbox" do |vb|
# # Display the VirtualBox GUI when booting the machine
# vb.gui = true
#
# # Customize the amount of memory on the VM:
vb.memory = "1024"
vb.cpus = 2
vb.name = "ubuntu_developer"
end


# Enable provisioning with a shell script. Additional provisioners such as
# Puppet, Chef, Ansible, Salt, and Docker are also available. Please see the
# documentation for more information about their specific syntax and use.
# config.vm.provision "shell", inline: <<-SHELL
# apt-get update
# apt-get install -y apache2
# SHELL
end
```
