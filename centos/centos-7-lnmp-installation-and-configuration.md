## 软件版本

* CentOS Linux release 7.4.1708 (Core)

* Nginx 1.12.2

* MySQL 5.7.22

* PHP-FPM 7.2.6

* Composer 1.4.2

* Laravel 5.6.26

* NodeJS v6.12.3 && NPM 3.10.10 && Yarn 1.5.1

> 执行命令之前请切换到`root`用户


## 升级 EPEL 仓库

### 升级命令

EPEL \(Extra Packages for Enterprise Linux，企业版Linux的额外软件包\) 是Fedora小组维护的一个软件仓库项目，为RHEL/CentOS提供他们默认不提供的软件包。这个源兼容RHEL及像CentOS和Scientific Linux这样的衍生版本。

更多详细介绍查看这里：[EPEl](https://fedoraproject.org/wiki/EPEL "EPEL Repository")

我们需要Nginx安装的EPEL仓库，因为官方CentOS仓库中不存在Nginx软件包。

```shell
sudo yum -y install epel-release
```

运行完成上面的`yum`命令安装`EPEL`仓库。

### 检查升级结果

```shell
sudo yum repolist
```

![](/assets/yum-epel-repository-list.jpg)

## 安装Nginx

使用LNMP环境下运行Laravel。Nginx是其中的Web服务器部分，可以从EPEL仓库安装。

使用yum命令通过EPEL仓库升级Nginx 1.10

```shell
sudo yum -y install nginx
```

### 启动Nginx

安装完成后，启动Nginx并将其添加到系统自启动。

```shell
sudo systemctl start nginx
sudo systemctl enable nginx
```

### 检查Nginx

Nginx默认运行在80端口，使用下面的`netstat`命令检查。

```shell
netstat -plntu | grep 80
```

> 如果得到“-bash: netstat: command not found”错误，请安装`net-tools`软件包，如下所示：
>
> ```shell
> sudo yum -y install net-tools
> ```

![](/assets/nginx_status_check.jpg)

至此`Nginx`安装完毕。

## 安装php-fpm

### 方式一使用webtatic仓库

在CentOS基础库中不存在PHP 7.1，我们需要从名为“webtatic”的第三方仓库中安装它。

使用如下`rpm`命令安装”webtatic“仓库。

```shell
yum install -y epel-release zip unzip
rpm -Uvh https://mirror.webtatic.com/yum/el7/webtatic-release.rpm
```
>如果执行上面的命令一直报错`curl: (35) Encountered end of file`，可以尝试将上面的`https`协议改成`http`协议获取rpm源。

其他版本下载可以查看这里：[webtatic仓库](https://webtatic.com/projects/yum-repository/ "webtatic repository")

现在，我们可以使用单个`yum`命令来安装`php-fpm`。

```shell
yum install -y php72w php72w-gd php72w-curl php72w-common php72w-cli php72w-mysql php72w-mbstring php72w-fpm php72w-xml php72w-pdo php72w-zip
```

执行完上面的命令后，CentOS系统上已经安装了PHP 7.2。

> 注意：如果想更换到php5.6或7.1版本, 直接把上面的php72w换成php56w或者php71w就可以了。重装php-fpm时，记得使用`sudo systemctl stop php-fpm`先关闭`php-fpm`进程，然后再使用 `yum uninstall php72w php72w-curl php72w-common php72w-cli php72w-mysql php72w-mbstring php72w-fpm php72w-xml php72w-pdo php72w-zip` 命令进行移除后，并再次执行`yum install` 重装。


### 方式二使用remi仓库

```
wget https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm
wget http://rpms.remirepo.net/enterprise/remi-release-7.rpm
rpm -Uvh remi-release-7.rpm epel-release-latest-7.noarch.rpm

sudo yum install yum-utils zip unzip
sudo yum-config-manager --enable remi-php72

sudo yum install php72

yum install -y php php-mcrypt php-cli php-gd php-curl php-mysql php-ldap php-zip php-fileinf php-fpm
```

如果执行上面的命令提示：`-bash: wget: command not found`，则使用`sudo yum install -y wget`安装一下`wget`命令。


### 配置php-fpm

通过使用vim编辑配置文件`php.ini`来配置PHP，默认的主配置文件存放位置在`/etc/php.ini`。

* 在文件中找如如下行，取消它的行注释并将值更改为0。

```
cgi.fix_pathinfo=0
```

保存文件并退出编辑器。

现在编辑`php-fpm`文件`/etc/php-fpm.d/www.conf`。

* php-fpm将在用户和组`nginx`下运行，将下面两行的值更改为`nginx`，这里用户和用户组请保持与`Nginx`的用户和用户组一致。

```
user = nginx
group = nginx
```

* `php-fpm`将在套接字文件下运行，而不是使用服务器端口，将'listen'值更改为路径`/run/php-fpm/php-fpm.sock`。

```
listen = /run/php-fpm/php-fpm.sock
```

* 套接字文件所有者将是“nginx”用户，权限模式为660，取消注释并更改所有值。

```
listen.owner = nginx
listen.group = nginx
listen.mode  = 0660
```

* 对于环境变量，取消注释这些行并设置值。

```
env[HOSTNAME] = $HOSTNAME
env[PATH] = /usr/local/bin:/usr/bin:/bin
env[TMP] = /tmp
env[TMPDIR] = /tmp
env[TEMP] = /tmp
```

保存文件并退出vim编辑，然后启动`php-fpm`并使其在启动时运行。

```
sudo systemctl start php-fpm
sudo systemctl enable php-fpm
```

## 检查php-fpm

`php-fpm`在套接字文件下运行，使用以下命令检查。

```
sudo netstat -pl | grep php-fpm.sock
```

![](/assets/php-fpm_status_check.jpg)

## 安装MySQL

可以使用MariaDB或PostgreSQL作为Laravel项目的数据库存储。 这里使用MySQL数据库服务器进行安装。 它在CentOS存储库中可用， 使用下面的`yum`命令[安装MySQL-server](https://dev.mysql.com/doc/mysql-yum-repo-quick-guide/en/ "mysql server install")。

* 下载并安装MySQL5.7

```shell
wget https://dev.mysql.com/get/mysql57-community-release-el7-11.noarch.rpm
rpm -ivh mysql57-community-release-el7-11.noarch.rpm
sudo yum update
sudo yum install -y mysql-server
```
> 执行上面的命令进行MySQL的安装，在安装的过程中两次按`Y`键，同意后安装完成。

### 启动MySQL

使用下面的命令启动`mysql`并使其在随系统启动而启动。

```shell
sudo systemctl start mysqld
sudo systemctl enable mysqld
```

### 配置MySQL

* 获取安装时初始化密码

```shell
sudo grep 'temporary password' /var/log/mysqld.log
```

* 登录并重设root账户密码

```shell
mysql -uroot -p # 回车输入上面获取到的密码

ALTER USER 'root'@'localhost' IDENTIFIED BY 'MyNewPassword1!';
```

至此，MySQL的安装和配置已经完成。

### 检查MySQL

MySQL已经启动并在3306端口上运行，可以使用netstat命令检查。

```shell
sudo netstat -plntu |grep 3306
```

## 安装PHP Composer {#step-install-php-composer}

PHP composer是PHP语言的包管理器。 它创建于2011年，灵感来自于Node.js的“npm”和Ruby的“bundler”安装程序。 使用`curl`命令安装composer。

```shell
php -r "copy('https://install.phpcomposer.com/installer', 'composer-setup.php');"
php composer-setup.php
php -r "unlink('composer-setup.php');"
sudo mv composer.phar /usr/local/bin/composer
```

* 配置Packagist 镜像

```
composer config -g repo.packagist composer https://packagist.phpcomposer.com
```


安装完成后，尝试使用“composer”命令，您将看到以下结果。

```shell
composer
```

![](/assets/composer_install.jpg)

至此，PHP Composer已经正常安装在了CentOS系统上。

### NodeJS && NPM

```
sudo yum -y install nodejs npm --enablerepo=epel
```

### Yarn

```
curl --silent --location https://dl.yarnpkg.com/rpm/yarn.repo | sudo tee /etc/yum.repos.d/yarn.repo
sudo yum install -y yarn
```


### 安装Laravel测试LNMP

现在进入到 laravel 的根目录'/var/www/laravel'。

```
sudo mkdir -p /var/www/laravel && cd /var/www/laravel
```

Laravel提供了两种在服务器上[安装框架](https://laravel.com/docs/5.4/installation "laravel install document")的方法。可以用Laravel安装程序安装Laravel，也可以用PHP composer安装它。在这里我将通过使用composer命令创建一个新项目来安装Laravel，运行下面的命令来安装Laravel。

```shell
composer create-project laravel/laravel .
```

等待Laravel安装完成。 这可能需要一些时间。

![](/assets/laravel_install.jpg)

安装完成后，将Laravel Web根目录的所有者更改为“nginx”用户，并使用以下命令将存储目录的权限更改为755。

```shell
chown -R nginx:root /var/www/laravel
chmod 755 -R /var/www/laravel/storage
```

至此，Laravel安装已经完成。

### 为Larvel配置Nginx虚拟主机

在这个步骤中，将为 Laravel 项目创建 Nginx 虚拟主机配置。 我们需要为此 Laravel 定义web根目录`/var/www/laravel/public`。

接下来，`cd`到 Nginx 目录，并在`conf.d`目录中创建一个新的虚拟主机配置文件`laravel.conf`

```shell
cd /etc/nginx
vim conf.d/laravel.conf
```

将下面的配置粘贴到文件中：

```
server {
    listen 80;

    # Log files for Debugging
    access_log /var/log/nginx/laravel-access.log;
    error_log /var/log/nginx/laravel-error.log;

    # Webroot Directory for Laravel project
    root /var/www/laravel/public;
    index index.php index.html index.htm;

    # Your Domain Name
    server_name laravel.domain.io;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    # PHP-FPM Configuration Nginx
    location ~ \.php$ {
        try_files $uri =404;
        fastcgi_split_path_info ^(.+\.php)(/.+)$;
        fastcgi_pass unix:/run/php-fpm/php-fpm.sock;
        fastcgi_index index.php;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        include fastcgi_params;
    }

    location ~ /\.ht {
        deny all;
    }
}
```

保存文件并退出vim编辑器。

### 测试并重启Nginx

测试nginx配置，确保没有错误，然后重新启动nginx服务。

```shell
nginx -t
sudo systemctl restart nginx
```

![](/assets/restart_nginx.jpg)

至此，Laravel的nginx虚拟主机配置已经完成。

## 配置SELinux

Laravel将运行在SELinux的Enforcing模式下。 要检查SELinux状态，请运行以下命令。

```shell
sestatus
```

![](/assets/selinux_status.jpg)

结果是SELinux以“Enforcing”模式运行。

接下来，我们需要为CentOS 7安装SELinux管理工具。

在服务器上安装“policycoreutils-python”。

```shell
yum -y install policycoreutils-python
```

现在我们需要改变Laravel目录的上下文，然后用restorecon命令应用更改。 运行SELinux管理命令，如下所示。

```shell
semanage fcontext -a -t httpd_sys_rw_content_t '/var/www/laravel(/.*)?'
semanage fcontext -a -t httpd_sys_rw_content_t '/var/www/laravel/public(/.*)?'
semanage fcontext -a -t httpd_sys_rw_content_t '/var/www/laravel/storage(/.*)?'
semanage fcontext -a -t httpd_sys_rw_content_t '/var/www/laravel/app(/.*)?'
semanage fcontext -a -t httpd_sys_rw_content_t '/var/www/laravel/bootstrap(/.*)?'
semanage fcontext -a -t httpd_sys_rw_content_t '/var/www/laravel/config(/.*)?'
semanage fcontext -a -t httpd_sys_rw_content_t '/var/www/laravel/database(/.*)?'
semanage fcontext -a -t httpd_sys_rw_content_t '/var/www/laravel/resources(/.*)?'
semanage fcontext -a -t httpd_sys_rw_content_t '/var/www/laravel/routes(/.*)?'
semanage fcontext -a -t httpd_sys_rw_content_t '/var/www/laravel/vendor(/.*)?'
semanage fcontext -a -t httpd_sys_rw_content_t '/var/www/laravel/tests(/.*)?'
restorecon -Rv '/var/www/laravel/'
```

至此，Laravel的SELinux配置完成。

## 测试Laravel

打开浏览器并输入服务器配置的Laravel URL，在Nginx虚拟主机文件中定义了Laravel的域名。 我的是`laravel.domain.io`。

访问域名时，您将看到Laravel框架的首页。

![](/assets/laravel_install_preview.jpg)

CentOS 7上的Nginx、PHP-FPM、MySQL、Composer、NodeJS、Yarn和Laravel安装已经成功。


## 参考连接

* [How to Install PHP 7 in CentOS 7](https://www.tecmint.com/install-php-7-in-centos-7/)
