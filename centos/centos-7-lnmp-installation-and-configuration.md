## 软件版本

* CentOS Linux release 7.4.1708 (Core)

* nginx 1.12.2

* MySQL 5.7.22

* php-fpm 7.2.6

* Composer 1.4.2

* laravel 5.6.26

* nodejs v6.14.2 && npm 3.10.10 && yarn 1.7.0

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

![](/assets/nginx_status_check.jpg)

至此`Nginx`安装完毕。

## 安装php-fpm

在CentOS基础库中不存在PHP 7.2，我们需要从名为`remi`或`webtatic`的第三方仓库中安装它。

### 方式一 remi仓库（推荐）

> 之所以推荐它是因为它非常方便切换PHP的版本。

更多仓库相关信息[参考这里](https://rpms.remirepo.net/)。

#### 安装

```
sudo rpm --import http://rpms.famillecollet.com/RPM-GPG-KEY-remi
sudo rpm -ivh http://rpms.famillecollet.com/enterprise/remi-release-7.rpm
sudo yum-config-manager --enable remi-php72 # 默认remi仓库禁用的，在实际需要的时候启用
sudo yum update
# sudo yum search php72 | more
sudo yum install php72 php72-php-fpm php72-php-gd php72-php-json php72-php-mbstring php72-php-mysqlnd php72-php-xml php72-php-xmlrpc php72-php-opcache
sudo mkdir -p /run/php-fpm/remi-php72 # 创建一个sock存放的目录
sudo ln -s  `which php72` /usr/local/sbin/php # 建立软连接方便命令行使用
```

执行完上面的命令后，CentOS系统上已经安装了PHP 7.2, 安装好的`php72`目录在`/etc/opt/remi/php72`, 也可以参考这个[链接](https://www.cyberciti.biz/faq/how-to-install-php-7-2-on-centos-7-rhel-7/)查看更多操作详情。

#### 卸载
> `remi`仓库支持PHP的多版本共存，**不到万不得已不建议使用卸载操作**
```
sudo yum-config-manager --disable remi-php72 # 禁用remi-php72仓库
sudo systemctl stop php72-php-fpm.service
yum remove php72 php72-php-fpm php72-php-gd php72-php-json php72-php-mbstring php72-php-mysqlnd php72-php-xml php72-php-xmlrpc php72-php-opcache
sudo rmdir /run/php-fpm/remi-php72
sudo rm -rf /etc/opt/remi/remi-php72 # 删除前记得备份配置
```
至此，使用remi仓库安装的PHP已经成功卸载。

#### 多版本安装

再安装一个PHP7.3版本为例，执行下面的操作即可完成PHP7.3版本的安装。

```
sudo yum-config-manager --enable remi-php73
sudo yum install php73 php73-php-fpm php73-php-gd php73-php-json php73-php-mbstring php73-php-mysqlnd php73-php-xml php73-php-xmlrpc php73-php-opcache
sudo mkdir -p /run/php-fpm/remi-php73 # 创建一个sock存放的目录
sudo ln -s  `which php73` /usr/local/sbin/php # 建立软连接方便命令行使用
```

### 方式二 webtatic仓库

#### 安装

```shell
rpm -Uvh https://mirror.webtatic.com/yum/el7/webtatic-release.rpm
sudo yum install -y php72w php72w-gd php72w-curl php72w-common php72w-cli php72w-mysql php72w-mbstring php72w-fpm php72w-xml php72w-pdo php72w-zip
```
其他版本下载可以查看这里：[webtatic仓库](https://webtatic.com/projects/yum-repository/ "webtatic repository")。

>如果执行上面的命令一直报错`curl: (35) Encountered end of file`，可以尝试将上面的`https`协议改成`http`协议获取rpm源。


执行完上面的命令后，CentOS系统上已经安装了PHP 7.2, 安装好的php72w目录在`/etc/php`下。

#### 卸载
> **注意：** 如果想更换到php5.6或7.1版本, 直接把上面yum命令里面的关键字`php72w`换成`php56w`或者`php71w`就可以了。

```
sudo systemctl stop php-fpm
yum remove php72w php72w-curl php72w-common php72w-cli php72w-mysql php72w-mbstring php72w-fpm php72w-xml php72w-pdo php72w-zip
```

至此，使用webtatic仓库安装的PHP已经成功卸载。

### 配置php-fpm

通过使用vim编辑配置文件`php.ini`来配置PHP，**remi仓库**方式安装的主配置文件存放位置在`/etc/opt/remi/php72/php.ini`，**webtatic仓库**方式安装的主配置文件存放位置在`/etc/php.ini`。

* 在文件中找如如下行，取消它的行注释并将值更改为0。

```
cgi.fix_pathinfo=0
```

保存文件并退出编辑器。

编辑`php-fpm`文件`www.conf`，**remi仓库**方式安装的配置文件存放位置在`/etc/opt/remi/php72/php-fpm.d/www.conf`，**webtatic仓库**方式安装的配置文件存放位置在`/etc/php-fpm.d/www.conf`。

* `php-fpm`将在用户和组`nginx`下运行，将下面两行的值更改为`nginx`，这里用户和用户组请保持与`Nginx`的用户和用户组一致。

```
# 用户和组保持和Nginx一致，使用命令 egrep '^(user|group)' /etc/nginx/nginx.conf 查看nginx进程的用户
user = nginx
group = nginx
```

* `php-fpm`将在套接字文件下运行，而不是使用服务器端口，**remi仓库**方式安装的PHP可以将值改为`/run/php-fpm/remi-php72/php-fpm.sock`，**webtatic仓库**方式安装的PHP请将'listen'值更改为路径`/run/php-fpm/php-fpm.sock`。

```
# webtatic
listen = /run/php-fpm/php-fpm.sock

# remi
listen = /run/php-fpm/remi-php72/php-fpm.sock
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
# webtatic
sudo systemctl start php-fpm
sudo systemctl enable php-fpm

# remi
sudo systemctl start php72-php-fpm.service
sudo systemctl enable php72-php-fpm.service
```

## 检查php-fpm

`php-fpm`在套接字文件下运行，使用以下命令检查。

```
sudo netstat -pl | grep php-fpm.sock
```

![](/assets/php-fpm_status_check.jpg)

## 安装MySQL

可以使用MariaDB或PostgreSQL作为Laravel项目的数据库存储。 这里使用MySQL数据库服务器进行安装。 它在CentOS存储库中可用， 使用下面的`yum`命令[安装MySQL-server](https://dev.mysql.com/doc/mysql-yum-repo-quick-guide/en/ "mysql server install")。

### 下载并安装MySQL5.7

```shell
wget https://dev.mysql.com/get/mysql57-community-release-el7-11.noarch.rpm
rpm -ivh mysql57-community-release-el7-11.noarch.rpm
sudo yum update
sudo yum install -y mysql-server
```
> 执行上面的命令进行MySQL的安装，在安装的过程中两次按`Y`键，在同意后安装完成。

### 启动MySQL

使用下面的命令启动`mysql`并使其随系统启动而启动。

```shell
sudo systemctl start mysqld
sudo systemctl enable mysqld
```

### 测试MySQL

MySQL已经启动并在3306端口上运行，可以使用netstat命令检查。

```
netstat -plntu | grep 3306 # 检查端口
ps aux|grep mysqld # 检查进程
```

### 配置MySQL

#### 获取安装时初始化密码

```shell
sudo grep 'temporary password' /var/log/mysqld.log
```

#### 登录并重设root账户密码

```shell
mysql -uroot -p # 回车输入上面获取到的密码

ALTER USER 'root'@'localhost' IDENTIFIED BY 'MyNewPassword1!';
```

#### 创建一个测试数据库和测试用户

```
CREATE DATABASE laravel; -- 创建一个laravel数据库
GRANT ALL PRIVILEGES ON laravel.* TO laravel@localhost IDENTIFIED BY "LaravelPassword1!"; -- 创建一个对应的用户
```

至此，MySQL的安装和配置已经完成。


## 安装PHP Composer

PHP composer是PHP语言的包管理器。 它创建于2011年，灵感来自于Node.js的“npm”和Ruby的“bundler”安装程序。 使用`curl`命令安装composer。

```shell
php -r "copy('https://install.phpcomposer.com/installer', 'composer-setup.php');"
php composer-setup.php
php -r "unlink('composer-setup.php');"
sudo mv composer.phar /usr/local/bin/composer
```

* 配置Packagist国内镜像

```
composer config -g repo.packagist composer https://packagist.phpcomposer.com
```

安装完成后，尝试使用“composer”命令，您将看到以下结果。

```shell
composer
composer config -g repo.packagist -l # 查看配置的Packagist国内镜像
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

### 为Larvel配置Nginx配置

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
        fastcgi_pass unix:/run/php-fpm/php-fpm.sock; # webtatic
        # fastcgi_pass unix:/run/php-fpm/remi-php72/php-fpm.sock; # remi
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
nginx -t # 测试配置是否正确
sudo systemctl restart nginx # 重启Nginx
```

![](/assets/restart_nginx.jpg)

至此，Laravel的nginx虚拟主机配置已经完成。

### 测试Laravel

打开浏览器并输入服务器配置的Laravel URL，在Nginx虚拟主机文件中定义了Laravel的域名。 我的是`laravel.domain.io`。

访问域名时，您将看到Laravel框架的首页。

![](/assets/laravel_install_preview.jpg)

CentOS 7上的Nginx、PHP-FPM、MySQL、Composer、NodeJS、Yarn和Laravel安装已经成功。


## 参考连接

* [How to Install PHP 7 in CentOS 7](https://www.tecmint.com/install-php-7-in-centos-7/)
