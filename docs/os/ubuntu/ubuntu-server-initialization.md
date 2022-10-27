# Ubuntu 服务器初始化

初次创建新 Ubuntu 服务器时，应该尽早完成一些初始化配置，作为基本设置的一部分。

这将增加服务器的安全性和可用性，并为后续操作奠定坚实的基础。

下面以初始化 Ubuntu 22.04 版本演示服务器的初始化流程。

## 登录服务器

如果要登录到服务器，需要从服务商那边获取服务器的公网 IP 地址 和 root 帐户的密码。

可以通过下面的命令登录到服务器：

```bash
ssh root@SERVER_IP_ADDRESS
```

然后提供认证凭证，可以选择使用密码或私钥，完成登录过程。

## 设置个性化主机名

默认主机的 hostname 都是随机生成，不方便识别，这里以 `ubuntu-study` 为实例作为主机名进行设置。

```bash
sudo hostnamectl set-hostname ubuntu-study # 设置主机名
sudo hostnamectl # 查看主机名
```

> 设置完成之后，需要退出终端重新登录就可以看到自定义主机名。

## 更新国内源

如果使用国内的服务器需要更新软件源，这里使用清华的镜像源替换文件 `/etc/apt/sources.list`
内容，[参考文档](https://mirrors.ustc.edu.cn/help/ubuntu.html?highlight=ubuntu)。

```text
deb https://mirrors.ustc.edu.cn/ubuntu/ jammy main restricted universe multiverse

deb https://mirrors.ustc.edu.cn/ubuntu/ jammy-security main restricted universe multiverse

deb https://mirrors.ustc.edu.cn/ubuntu/ jammy-updates main restricted universe multiverse

deb https://mirrors.ustc.edu.cn/ubuntu/ jammy-backports main restricted universe multiverse
```

> 如要用于其他版本，把 `jammy` 换成其他版本代号即可，对应关系如下：
> - `22.04`：`jammy`
> - `20.04`：`focal`
> - `18.04`：`bionic`
> - `16.04`：`xenial`
> - `14.04`：`trusty`

修改完之后需要执行下面的命令更新索引。

```bash
sudo apt-get update # 更新索引
```

## 添加必要系统工具

安装 `vim` 编辑器、网络请求 `wget`、`curl`以及压缩与解压缩软件等。

```bash
sudo apt-get install -y \
  vim \
  wget \
  curl \
  cmake \
  g++ \
  tree \
  git \
  zip \
  unzip
```

## 设置时区

将服务器的时区设置为中国地区。

```bash
sudo timedatectl set-timezone Asia/Shanghai
sudo timedatectl set-local-rtc 0
sudo timedatectl set-ntp 1
```

## 配置默认的编辑器

Ubuntu 系统默认的文件编辑器是 nano 而不是 Vim，那么怎么设置成 Vim 呢？

执行下面的命令将 Vim 设置为服务器默认的编辑器。

```bash
sudo update-alternatives --config editor /usr/local/bin/vim
```

## 添加新用户

初始情况通常会得到一个 root 账户，大多数云主机在安装 Ubuntu 系统后，默认都是用 root 账户登录的。

用 root 账户非常危险，还是养成好习惯，用普通用户登录，然后执行 sudo 比较安全点。

先用命令新建一个叫 **ubuntu** 的普通用户：

```bash
sudo adduser ubuntu
```

创建完 ubuntu 用户后，如果想用它来执行一些系统级命令，可以把它加进 sudo 群组，这样就可以用 sudo 命令了：

```bash
sudo usermod -aG sudo ubuntu
```

## 配置 SSH 登录及 SSH Server 安全设定

### 配置免密登录

为了避免每次使用上面新建的用户 ubuntu，登录服务器时都要输入密码，给登录用户设置 SSH Key 来登录，这样以后登录就不用输入密码。

使用 `su - ubuntu` 切换到 `ubuntu` 用户下进行下面的操作。

1. 执行下面的命令，建立 `authorized_keys` 文件。

```bash
mkdir -p ~/.ssh
touch ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys
```

2. 将本机个人电脑的 `id_rsa.pub` 文件内容复制进去，如果不存在就通过 `ssh-keygen` 生成一对公私钥。

```bash
# 可以通过手动拷贝也可以通过下面的命令进行自动拷贝
ssh-copy-id ubuntu@ServerIP
```

本地机器以后再登录服务器时就可以使用 `ssh ubuntu@ServerIP`。

### SSH安全设定

编辑 SSH 配置文件`/etc/ssh/sshd_config`：

```bash
sudo vim /etc/ssh/sshd_config
```

1. 把 PermitRootLogin 设置成 no，用于禁止 root 登录：

```
PermitRootLogin no
```

2. 把 PasswordAuthentication 设置成 no，禁止密码登录，更安全：

```
PasswordAuthentication no
```

3. 修改默认端口（选做）

```
Port 2222
```

> **注意** 改成其他数字后，记得防火墙或者安全组配置的相关设置也需要同步更新。

### 重启 SSH Server

> **注意** 在重启 SSH 服务之前，建议新建一个窗口尝试登录到服务器，避免一些错误操作导致无法连接到服务器。

```bash
sudo systemctl restart sshd.service
```

### 重启服务器

```bash
sudo reboot
```

使用上面的命令可以对服务器进行重启。

## 参考

- [Initial Server Setup with Ubuntu 20.04](https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-20-04)