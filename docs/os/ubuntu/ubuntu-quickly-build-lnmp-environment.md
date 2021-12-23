# Ubuntu下快速搭建LNMP环境

在Ubuntu系统中，可以使用 `apt-get` 命令来搭建LNMP环境。这种方式较编译方式安装更加简便，因此选择该方式来搭建环境以供学习。

* Ubuntu Ubuntu 20.04.3 LTS
* Nginx 1.18.0
* PHP 8.1.0
    - Composer 2.1.14
* MySQL 8.0.27

安装前请确保对服务器进行了初始化，可以[参考这里](https://curder.github.io/blog/os/ubuntu/ubuntu-server-initialization.html)。

## Nginx

### 安装

> 安装之前使用 `sudo su -` 命令将当前用户切换到 **root** 用户。

nginx 的安装非常简单，使用下面的命令即可。

```bash
sudo apt-get update && sudo apt-get install -y nginx
```

### 检查

查看 Nginx 安装的版本

```bash
nginx -v
```

### 配置和目录

* 主配置目录

```text
/etc/nginx/nginx.conf
```

* 网站配置目录

```text
/etc/nginx/sites-available
```

> 默认的主配置目录仅仅包含`/etc/nginx/sites-enabled`目录下的文件，实际操作中添加网站配置首先添加到`/etc/nginx/sites-available/another-website.conf`。
> 
> 然后通过`ln -s /etc/nginx/sites-available/another-website.conf /etc/nginx/sites-enabled/another-website.conf`将配置文件放置到`/etc/nginx/sites-enabled`目录下。

* 默认网站目录

```text
/var/www/html
```

### 启动Nginx服务和测试

使用下面两种方式都可以启动nginx

```bash
sudo /etc/init.d/nginx start
sudo systemctl start nginx
```

分别可以通过下面的三种方式测试进程和端口是否正常。

```bash
netstat -tunpl|grep nginx
sudo lsof -i :80
ps aux |grep nginx
```

## PHP

### 安装前的准备

执行下面的命令添加具有 PHP 8.1 软件包和其他必需的 PHP 扩展的 `ondrej/php`。

```bash
sudo apt install software-properties-common
sudo add-apt-repository ppa:ondrej/php
sudo apt-get update
```

一旦成功添加 PPA，就可以安装 PHP 8.1 了。

### 安装

```bash
sudo apt-get install -y \
  php8.1 \
  php8.1-fpm \
  php8.1-common \
  php8.1-mysql \
  php8.1-opcache \
  php8.1-gd \
  php8.1-imagick \
  php8.1-curl \
  php8.1-mbstring \
  php8.1-xml \
  php8.1-zip \
  php8.1-snmp \
  php8.1-bcmath \
  php8.1-soap \
  php8.1-gmp
```

### 配置

#### 配置PHP

配置php的sock地址，文件保存在`/etc/php/8.1/fpm/pool.d/www.conf`。

```ini
listen = /run/php/php8.1-fpm.sock
```

#### 开启opcache和jit

文件 `/etc/php/8.1/fpm/php.ini` 和 `/etc/php/8.1/cli/php.ini` 中修改如下配置：

```ini
opcache.enable=1
opcache.enable_cli=1
opcache.jit_buffer_size=100M
opcache.jit=1255
```

执行命令 `php -i |egrep 'opcache.jit |opcache.enable |opcache.enable_cli |opcache.jit_buffer_size'` 检查是否配置成功。


#### 配置Nginx

配置`/etc/nginx/sites-available/default`，使其支持php解析。

```nginx
location ~ \.php$ {
    include snippets/fastcgi-php.conf;
    # With php7.0-cgi alone:
    # fastcgi_pass 127.0.0.1:9000;
    # With php7.0-fpm:
    fastcgi_pass unix:/run/php/php8.1-fpm.sock;
}
```

### 重启

* 重启Nginx

```bash
sudo /etc/init.d/nginx restart
```

* 重启php-fpm

```bash
sudo /etc/init.d/php8.1-fpm restart
```

## Composer

* 下载安装

```bash
php -r "copy('https://install.phpcomposer.com/installer', 'composer-setup.php');"
php composer-setup.php
php -r "unlink('composer-setup.php');"
sudo mv composer.phar /usr/local/bin/composer
```

* 切换 Composer 版本
默认情况下安装的 composer 为 2.1.14 的版本。切换到 1.10.24
```bash
composer self-update --1
```

* 检查并确定下版本
```bash
composer -V # 查看当前composer版本
```

* 切换源
```bash
composer config -g repos.packagist composer https://mirrors.aliyun.com/composer # 切换 aliyun 源

composer config -g repo.packagist composer https://packagist.org # 切换 packagist 源
```


## MySQL

### 安装

```bash
sudo apt-get install -y \
  mysql-server \
  mysql-client \
  php8.1-mysql
```

安装默认的用户名为 `root` ，密码为空。

mysqld的配置文件在 `/etc/mysql/mysql.conf.d/mysqld.cnf`。


## 参考地址

* [Ubuntu 16.04 下快速搭建 LNMP 环境](https://blog.csdn.net/STFPHP/article/details/53492723)
