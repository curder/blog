# CentOS7使用yum方式安装和配置php-fpm

目前常用的两种yum方式安装php-fpm，分别是`webtatic`仓库和`remi`仓库，在实际的使用中选择一种即可。

下面以安装 PHP 7.1 为例。

## 使用webtatic仓库安装PHP

### 安装webstatic仓库
在CentOS基础库中不存在PHP 7.1，我们需要从名为`webtatic`的第三方仓库中安装它。

使用如下rpm命令安装`webtatic`仓库。

```bash
sudo yum install -y epel-release
sudo rpm -Uvh https://mirror.webtatic.com/yum/el7/webtatic-release.rpm
```

> 如果执行上面的命令一直报错`curl: (35) Encountered end of file`，可以尝试将上面的https协议改成http协议获取rpm源。

其他版本下载可以查看这里：[webtatic仓库](https://webtatic.com/projects/yum-repository/)

### 检查webstatic仓库安装结果

使用下面的命令可以查看`webstatic`仓库是否安装成功。

```bash
sudo yum repolist
```

<img :src="$withBase('/images/os/centos7/centos-7-uses-yum-way-to-install-and-configure-php-fpm/webtatic-rpm.png')" alt="">


### 使用yum命令安装php-fpm

```bash
yum install -y php71w php71w-gd php71w-curl php71w-common php71w-cli php71w-mysql php71w-mbstring php71w-fpm php71w-xml php71w-pdo php71w-zip
```

执行完上面的命令后，CentOS系统上已经安装了PHP 7.1。

### 检查php-fpm是否安装成功

```bash
php -v
```
<img :src="$withBase('/images/os/centos7/centos-7-uses-yum-way-to-install-and-configure-php-fpm/check-php-fpm-install-by-webtatic-success.png')" alt="">

> **注意：** 如果想更换到`php5.6`或`7.0`版本, 直接把上面的`php71w`换成`php56w`或者`php70w`就可以了。
> 重装`php-fp`m时，记得使用`sudo systemctl stop php-fpm`先关闭`php-fpm`进程，然后再使用 `yum uninstall php71w php71w-curl php71w-common php71w-cli php71w-mysql php71w-mbstring php71w-fpm php71w-xml php71w-pdo php71w-zip` 命令进行移除后，并再次执行`yum install`命令进行重装。


### 使用remi仓库

```bash
sudo wget https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm
sudo wget http://rpms.remirepo.net/enterprise/remi-release-7.rpm
sudo rpm -Uvh remi-release-7.rpm epel-release-latest-7.noarch.rpm

sudo yum install -y yum-utils
sudo yum-config-manager --enable remi-php71

sudo yum install -y php71

sudo yum install -y php php-mcrypt php-xml php-mbstring php-cli php-gd php-curl php-mysql php-ldap php-zip php-fileinf php-fpm
```

> 如果执行上面的命令提示：`-bash: wget: command not found`，则使用`sudo yum install -y wget`安装一下`wget`命令。


## 配置php-fpm

**注意:** 在配置中修改的用户和用户组会设置成跟web服务器的保持一致即可。

如果不存在web服务器，可以使用`nobody`替代。

### 修改 php.ini

通过使用`vim`编辑配置文件`php.ini`来配置PHP，默认的主配置文件存放位置在`/etc/php.ini`。

在文件中找如如下行，取消它的行注释并将值更改为**0**。

```ini
cgi.fix_pathinfo=0
```

修改完成后，保存文件并退出编辑器。

### 修改www.conf

现在编辑`php-fpm`文件`/etc/php-fpm.d/www.conf`。

- `php-fpm`将在用户和组`nginx`下运行，将下面两行的值更改为`nginx`，这里用户和用户组请保持与`Nginx`服务器的用户和用户组一致。
```ini
user = nginx
group = nginx
```

- `php-fpm`将在套接字文件下运行，而不是使用服务器端口，将`listen`值更改为路径`/run/php-fpm/php-fpm.sock`。
```ini
listen = /run/php-fpm/php-fpm.sock
```

- 套接字文件所有者将是`nginx`用户，这里用户和用户组请保持与`Nginx`服务器的用户和用户组一致。权限模式为`660`，取消注释并更改所有值。
```ini
listen.owner = nginx
listen.group = nginx
listen.mode  = 0660
```

- 对于环境变量，取消注释这些行并设置值。
```dotenv
env[HOSTNAME] = $HOSTNAME
env[PATH] = /usr/local/bin:/usr/bin:/bin
env[TMP] = /tmp
env[TMPDIR] = /tmp
env[TEMP] = /tmp
```


### 系统守护进程方式启动php-fpm

执行下面的命令启动`php-fpm`并使其在CentOS系统启动时运行。
```bash
sudo systemctl start php-fpm && sudo systemctl enable php-fpm
```

### 使用supervisord管理进程

supervisord的进程管理[参考这里](/os/centos/how-to-use-supervisord-manager-processes.md)。

#### 修改php-fpm在前台运行

- 使用`sed`命令进行修改
```bash
sed -i 's/^daemonize = yes/daemonize = no/g' /etc/php-fpm.conf
```

- 检查php-fpm配置
```bash
grep daemonize /etc/php-fpm.conf
```
输出：`daemonize = no`即表示设置成功。

#### php-fpm的supervisord配置文件

默认的 supervisord 的进程文件保存在`/etc/supervisord.d/php.ini`，内容如下：

```ini
[program:php]
command=/sbin/php-fpm
user=root
autostart=true
autorestart = true
stdout_logfile=/var/log/php.out.log
stderr_logfile=/var/log/php.err.log
```

#### 重载配置

```bash
supervisorctl reread && supervisorctl update
```

执行完上面的命令，可以看到控制台会输出如下结果

```text
php: available
php: added process group
```


> 如果在启动`php-fpm`的时候，报错`ERROR: unable to bind listening socket for address '/run/php-fpm/php-fpm.sock': No such file or directory (2)`。
> 使用命令`mkdir -pv /run/php-fpm/`手动创建目录。

至此使用 `supervisord` 管理`php-fpm`进程已经完成。

### 检查php-fpm

#### 检查进程

检查系统进程使用`ps`命令。

```bash
ps aux |grep php-fpm
```

<img :src="$withBase('/images/os/centos7/centos-7-uses-yum-way-to-install-and-configure-php-fpm/php-fpm-process-check.png')" alt="">

#### 检查套接字

php-fpm在套接字文件下运行，使用以下命令检查。

```bash
sudo netstat -pl | grep php-fpm.sock
```

> 如果得到`“-bash: netstat: command not found”`错误，请安装`net-tools`软件包，如下所示：
>`sudo yum -y install net-tools`

<img :src="$withBase('/images/os/centos7/centos-7-uses-yum-way-to-install-and-configure-php-fpm/php-fpm-sock-status-check.png')" alt="">

至此，CentOS下安装`php-fpm`就安装好了。


## 参考链接

* [Install PHP 7 on CentOS 7](https://linuxize.com/post/install-php-7-on-centos-7/)

* [How to install PHP 7.2 on CentOS 7/RHEL 7](https://www.cyberciti.biz/faq/how-to-install-php-7-2-on-centos-7-rhel-7/)
