# Ubuntu 服务器初始化

初次创建新 Ubuntu 服务器时，应该尽早完成一些初始化配置，作为基本设置的一部分，这将增加服务器的安全性和可用性，并为后续操作奠定坚实的基础。

## 更新国内源(选做)

这里使用清华的镜像源替换文件 `/etc/apt/sources.list` 内容，[参考文档](https://mirrors.ustc.edu.cn/help/ubuntu.html?highlight=ubuntu)。

```bash
deb https://mirrors.ustc.edu.cn/ubuntu/ focal main restricted universe multiverse
deb-src https://mirrors.ustc.edu.cn/ubuntu/ focal main restricted universe multiverse

deb https://mirrors.ustc.edu.cn/ubuntu/ focal-security main restricted universe multiverse
deb-src https://mirrors.ustc.edu.cn/ubuntu/ focal-security main restricted universe multiverse

deb https://mirrors.ustc.edu.cn/ubuntu/ focal-updates main restricted universe multiverse
deb-src https://mirrors.ustc.edu.cn/ubuntu/ focal-updates main restricted universe multiverse

deb https://mirrors.ustc.edu.cn/ubuntu/ focal-backports main restricted universe multiverse
deb-src https://mirrors.ustc.edu.cn/ubuntu/ focal-backports main restricted universe multiverse

## Not recommended
# deb https://mirrors.ustc.edu.cn/ubuntu/ focal-proposed main restricted universe multiverse
# deb-src https://mirrors.ustc.edu.cn/ubuntu/ focal-proposed main restricted universe multiverse
```


## 更新 Ubuntu 系统

首先执行下列命令把系统更新到最新状态，包括厂商预装的一些组件和内核等。

```bash
sudo apt update
sudo apt list --upgradable
sudo apt upgrade -y

# 升级之后执行下面的命令清理
sudo apt autoremove
sudo apt clean
```

## 添加必要系统工具

### Git安装和简单配置
```
sudo apt-get install -y git # 安装 git

## 配置git
git config --global user.name "ubuntu"
git config --global user.email "ubuntu@example.com"
```

### 其他常用工具

```
sudo apt-get install -y \
  vim \
  wget \
  curl \
  cmake \
  g++ \
  tree \
  zip \
  unzip
```

## 设置正确的主机名

默认主机的 hostname 都是随机生成，不方便识别，这里以 `ububtu.example.com` 为实例作为主机名进行设置。

```bash
sudo hostnamectl set-hostname ubuntu.example.com # 设置
sudo hostnamectl # 查看
```

> 设置完成之后，退出终端重新登录就可以看到设置生效了。

## 设置时区

```bash
sudo timedatectl set-timezone Asia/Shanghai
sudo timedatectl set-local-rtc 0
sudo timedatectl set-ntp 1
```

## 配置默认的编辑器

Ubuntu 系统默认的文件编辑器是 nano 而不是 Vim，那么怎么设置成 Vim 呢？

执行下面的命令后选择 Vim，将Vim设置为默认的编辑器。

```bash
sudo update-alternatives --config editor
```

## 添加新用户

初始情况通常会得到一个 root 账户。大多数云主机在安装 Ubuntu 系统后，默认都是用 root 账户登录的。用 root 账户非常危险，还是养成好习惯，用普通用户登录，然后执行 sudo 比较安全点。

先用这个命令新建一个叫 **ubuntu** 的普通用户：

```bash
sudo adduser ubuntu
```

创建完 ubuntu 用户后，如果想用它来执行一些系统级命令，可以把它加进 sudo 群组，这样就可以用 sudo 命令了：

```bash
sudo usermod -a -G sudo ubuntu
```

## 配置 SSH 登录及 SSH Server 安全设定

### 配置免密登录

为了避免每次使用上面新建的用户ubuntu，登录服务器时都要输入密码，给登录用户设置 SSH Key 来登录，这样以后登录就不用输入密码。

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

本机以后登录服务器就可以用 `ssh ubuntu@ServerIP` 来登录主机了。

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

> **注意** 在重启 SSH 服务之前，建议新建一个窗口尝试登录到服务器，避免一些错误导致无法连接到服务器。

```
sudo systemctl restart sshd.service
```

### 重启服务器

```
sudo reboot
```

使用上面的命令可以对服务器进行重启。