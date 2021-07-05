# Ubuntu下快速搭建LNMP环境

在Ubuntu系统中，可以使用 `apt-get` 命令来搭建LNMP环境。这种方式较编译方式安装更加简便，因此选择该方式来搭建环境以供学习。

* Ubuntu 16.4
* nginx 1.10.3
* php 7.1.18
    - composer 1.6.5
* mysql 5.7.22

## Nginx

### 安装

> 安装之前使用`sudo su -`命令将当前用户切换到**root**用户。

nginx 的安装非常简单，使用下面的命令即可。

```bash
sudo apt-get install -y nginx && sudo apt-get update
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

> 默认的主配置目录仅仅包含`/etc/nginx/sites-enabled`目录下的文件，实际操作中添加网站配置首先添加到`/etc/nginx/sites-available/another-website.conf`，然后通过`ln -s /etc/nginx/sites-available/another-website.conf /etc/nginx/sites-enabled/another-website.conf`将配置文件放置到`/etc/nginx/sites-enabled`目录下。

* 默认网站目录

```text
/var/www/html
```

### 启动Nginx服务和测试

使用下面两种方式都可以启动nginx

```bash
sudo /etc/init.d/nginx start
sudo service nginx start
```

分别可以通过下面的三种方式测试进程和端口是否正常。

```bash
netstat -tunpl|grep nginx
sudo lsof -i :80
ps aux |grep nginx
```

## PHP

### 安装

```bash
sudo apt-get install -y python-software-properties
sudo apt-add-repository ppa:ondrej/php
sudo apt-get update
sudo apt-get install -y php7.1 php7.1-fpm php7.1-zip php7.1-mbstring php7.1-xml
```

### 配置

#### 配置PHP

配置php的sock地址，文件保存在`/etc/php/7.1/fpm/pool.d/www.conf`。

```ini
listen = /run/php/php7.1-fpm.sock
```

#### 配置Nginx

配置`/etc/nginx/sites-available/default`，使其支持php解析。

```nginx
location ~ \.php$ {
    include snippets/fastcgi-php.conf;
    # With php7.0-cgi alone:
    # fastcgi_pass 127.0.0.1:9000;
    # With php7.0-fpm:
    fastcgi_pass unix:/run/php/php7.1-fpm.sock;
}
```

### 重启

* 重启Nginx

```bash
sudo /etc/init.d/nginx restart
```

* 重启php-fpm

```bash
sudo /etc/init.d/php7.1-fpm restart
```

## Composer

* 下载安装

```bash
php -r "copy('https://install.phpcomposer.com/installer', 'composer-setup.php');"
php composer-setup.php
php -r "unlink('composer-setup.php');"
sudo mv composer.phar /usr/local/bin/composer
```

* 配置Packagist 镜像

```bash
composer config -g repo.packagist composer https://packagist.phpcomposer.com
```

> 可能需要临时切换到其他用户执行上面的配置命令。

更多Composer相关的操作[参看这里](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-composer-on-ubuntu-16-04)。

## MySQL

### 安装

```bash
sudo apt-get install mysql-server mysql-client php7.1-mysql
```

> 安装过程中会需要输入数据库的**root**密码。

## 参考地址

* [Ubuntu 16.04 下快速搭建 LNMP 环境](https://blog.csdn.net/STFPHP/article/details/53492723)
