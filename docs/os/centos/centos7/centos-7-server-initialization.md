# Centos 7 服务器初始化

当初次创建新服务器时，应该尽早完成一些配置步骤，作为基本设置的一部分，这将增加服务器的安全性和可用性，并为后续操作奠定坚实的基础。

## 登录服务器

如果要登录到服务器，需要知道服务器的 **公共IP地址** 和 **root** 帐户的密码。

可以通过下面的命令登录到服务器：

```bash
ssh root@SERVER_IP_ADDRESS
```

然后提供认证凭证，可以选择使用密码或私钥，完成登录过程。

## 设置个性化主机名

```bash
sudo hostnamectl set-hostname YOUR_HOSTNAME
```

## 终端配色

为了设置终端颜色，需要对`/etc/bashrc`文件中的 **PS1** 变量进行定制，这样就能应用于所有用户。

```bash
echo "# 终端配色
export PS1='\n\[\e[37;1m[\]\[\e[31;1m\]\u\[\e[39;1m\]@\[\e[33;1m\]\H \[\e[34;1m\]\w\[\e[37;1m\]]\n\[\e[32;1m\]\\$ \[\e[0m\]'" >> /etc/bashrc

source /etc/bashrc
```

## 更新阿里云源

> 注意：如果服务器在国内建议修改 yum 源为 aliyun，如果服务器在国外可以忽略。

```bash
sudo mv /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.backup
sudo curl -o /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-7.repo
sudo yum makecache
```

> 相关操作和更多其他操作系统镜像操作[查看这里](https://opsx.alibaba.com/mirror)。

## 添加必要系统工具

```bash
sudo yum install -y \
    yum-utils \
    net-tools \
    net-snmp \
    tree \
    wget \
    curl \
    iftop \
    htop \
    telnet \
    git \
    vim \
    zip \
    unzip \
    ntpdate \
    mlocate

# 检查安装情况
sudo rpm -qa |grep -E "snmp|wget|iftop|htop|git|telnet|vim|zip|unzip|curl|ntpdate|mlocate"
```

## 修改时区&&设置时间

```bash
sudo timedatectl set-timezone Asia/Shanghai
sudo ntpdate cn.pool.ntp.org
```

> **注意：** 执行下面的命令前，需要将当前操作的用户切换为 `root`，否则会提示没有权限。

```bash
echo "00 */10 * * * ntpdate cn.pool.ntp.org >/dev/null 2>&1" >> /var/spool/cron/root
```


## 内核优化`sysctl.conf` 和 调整文件描述符`ulimit`

修改网络相关配置，包括网络连接数等。

```bash
echo "net.ipv4.ip_local_port_range = 1024 65535
net.core.rmem_max = 16777216
net.core.wmem_max = 16777216
net.ipv4.tcp_rmem = 4096 87380 16777216
net.ipv4.tcp_wmem = 4096 65536 16777216
net.ipv4.tcp_fin_timeout = 10
net.ipv4.tcp_tw_recycle = 1
net.ipv4.tcp_timestamps = 0
net.ipv4.tcp_window_scaling = 0
net.ipv4.tcp_sack = 0
net.core.netdev_max_backlog = 65535
net.ipv4.tcp_no_metrics_save = 1
net.core.somaxconn = 65535
net.ipv4.tcp_syncookies = 0
net.ipv4.tcp_max_orphans = 262144
net.ipv4.tcp_max_syn_backlog = 262144
net.ipv4.tcp_synack_retries = 2
net.ipv4.tcp_syn_retries = 2" > /etc/sysctl.conf

sysctl -w net.ipv4.route.flush=1
echo "ulimit -HSn 65536" >> /etc/rc.local
echo "ulimit -HSn 65536" >> /root/.bash_profile
ulimit -HSn 65535
```

## 关闭 SELinux

一般情况下如果使用云主机会提供一个安全组配置，所以我们选择将 SELinux 关闭。

```bash
setenforce 0
cp /etc/sysconfig/selinux /etc/sysconfig/selinux.bak`date +%F` && sed -i 's/SELINUX=enforcing/SELINUX=disabled/g' /etc/sysconfig/selinux
```

## 添加一个新用户

添加一个新用户，用户名为 `demo` 并添加密码 `newPassword`：

```bash
sudo adduser demo && sudo echo "newPassword" | passwd --stdin "demo"
```

## 添加用户权限

已经拥有一个常规帐户权限的新用户 `demo` 账号，但是可能需要使用该账号执行管理任务。

为了避免必须从普通用户`demo`注销并以`root`帐户重新登录，可以为普通帐户设置所谓的 "超级用户" 或 root 权限。

将允许普通用户通过`sudo`在每个命令之前的关键字来运行具有管理特权的命令。

默认情况下，在CentOS 7上，属于 `wheel` 组的用户可以使用该 sudo 命令，将`demo`用户加入到`wheel`组。

```bash
sudo gpasswd -a demo wheel
```

这个时候可以使用 demo 用户登录到服务器，并且通过命令 `sudo su -` 然后输入 demo 用户的密码来切换到 root 用户。

## 添加公钥认证（推荐）

> 除非特殊说明，否则所有的操作都在本地，而非服务器上进行的操作。

为新用户设置公钥认证。设置此项将通过必须使用专用的 SSH 密钥登录来提高服务器的安全性。

如果本地尚未拥有包含公钥和私钥的 SSH 密钥对，则需要生成一个。如果已经存在要使用的密钥，忽略下面的操作，跳至复制公钥关键步骤。

### 生成密钥对

要生成新的密钥对，请在本地机器（非服务器本身）的终端输入以下命令

```bash
ssh-keygen
```

假设本机用户被称为`curder`，执行上面的命令将看到如下所示的输出：

```text
Generating public/private rsa key pair.
Enter file in which to save the key (/Users/curder/.ssh/id_rsa):
```

继续回车的话，系统会提示输入密码以确保密钥的安全。**建议将密码留空。**

执行完上面的操作后，会在`curder`的家目录的`.ssh`目录中生成一个私钥`id_rsa`和一个公钥`id_rsa.pub`。
**请记住，私钥不应与任何不应访问服务器的人共享!**

### 复制公钥

生成SSH密钥对后，会需要将公钥复制到新的服务器上。这里介绍两种简单的方法来做到这一点。

#### 方法1：使用`ssh-copy-id`

如果在本地计算机安装了`ssh-copy-id`脚本，则可以使用它将公钥安装到您拥有登录凭据的任何用户。
`ssh-copy-id`通过指定要安装密钥的服务器的用户和IP地址运行脚本，如下所示：

```bash
ssh-copy-id demo@SERVER_IP_ADDRESS
```

在提示处提供密码并成功后，本地公钥将被添加到远程服务器的`.ssh/authorized_keys`文件中，并可以使用相应的私钥登录到服务器。

#### 方法2：手动安装密钥

##### 使用命令获取公钥

```bash
cat ~/.ssh/id_rsa.pub
```

将打印在屏幕上的公钥复制到剪切板，或者使用`pbcopy < ~/.ssh/id_rsa.pub`命令将公钥直接复制到剪切板。

##### 将公钥添加到新的远程用户

要允许使用SSH密钥作为新的远程用户进行身份验证，必须将公钥添加到**服务器上**用户主目录中的 `~/.ssh/authorized_keys` 文件中。

**在服务器上**，以 `root` 用户身份输入以下命令切换到新用户

```bash
su - demo
```

`.ssh`使用以下命令创建一个新目录，并限制其权限。

```bash
mkdir .ssh && chmod 700 .ssh
```

接下来需要使用文本编辑器打开一个名为`~/.ssh/authorized_keys`。这里使用vi来编辑文件

```bash
vi ~/.ssh/authorized_keys # 将本地公钥内容添加到文件
```

然后通过将其粘贴到编辑器中输入您本地电脑的公钥（它应该在剪贴板中），并通过命令修改权限。

```bash
chmod 600 ~/.ssh/authorized_keys
```

现在可以使用私钥作为身份验证，本地以SSH身份登录您的新用户并能通过`sudo su -`切换到`root`用户。

## 配置SSH守护进程

### 禁止root用户登录

通过修改服务器的 SSH 守护程序配置来禁止远程SSH访问 `root` 帐户，这样可以保护服务器

使用下面的命令直接修改：
- `PermitRootLogin` 设置为 `no` 禁止通过 root 用户直接登录
- `PasswordAuthentication` 设置为 `yes` 允许使用密码方式登录

```bash
sed -i 's/PermitRootLogin yes/PermitRootLogin no/g' /etc/ssh/sshd_config # 禁用服务器root远程登录
sed -i 's/PasswordAuthentication no/PasswordAuthentication yes/g' /etc/ssh/sshd_config # 允许使用正确的用户密码登录
```

在这里，选择禁用 `root` 用户登录。这通常是更安全的设置，因为现在可以通过普通用户帐户访问我们的服务器，并在必要时提升权限。

通过设置上面的密钥对的方式授权也可以将用户密码登录关闭，仅通过公钥授权的方式登录。


### 重新加载SSH

> **注意：** 在重载之前请保证有一个活动的SSH连接，直到完全**测试**确认可以成功建立新的连接。否则如果后期由于错误的SSH配置导致的无法登录，那便无法登录了，只能联系服务器提供商重置服务器密码。

要对ssh配置进行重载可以输入下面的命令。

```bash
systemctl reload sshd
```

### 测试

打开一个新的终端窗口。在新窗口中，需要开始一个到服务器的新连接。这一次，我们不使用`root`帐户，而是使用创建的新用户`demo`。对于我们上面配置的服务器，使用此命令进行连接。在适当的地方替换您自己的信息：

```bash
ssh demo@SERVER_IP_ADDRESS
```

系统将提示输入配置的新用户的密码。之后将使用新用户的身份登录。

请记住，如果需要以`root`权限运行命令，请在它之前加上 `sudo`。

如果一切正常，您可以输入`exit`命令退出会话。

## 参考链接

* [CentOS7 新装服务器初始化配置](https://ovwane.github.io/2017/11/17/CentOS7%20%E6%96%B0%E8%A3%85%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%88%9D%E5%A7%8B%E5%8C%96%E9%85%8D%E7%BD%AE/#%E8%AE%BE%E7%BD%AE%E4%B8%BB%E6%9C%BA%E5%90%8D)

* [Initial Server Setup with CentOS 7](https://www.digitalocean.com/community/tutorials/initial-server-setup-with-centos-7)

* [How To Configure SSH Key-Based Authentication on a Linux Server](https://www.digitalocean.com/community/tutorials/how-to-configure-ssh-key-based-authentication-on-a-linux-server)
