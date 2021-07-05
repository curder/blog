# LANMP环境搭建

LANMP 环境包含如下服务器软件。

| 缩写 | 解释 | 版本 |
| :---: | :--- | --- |
| L | Linux，这里以Ubuntu12.04系统为例 | 12.04 |
| A | Apache WebServer | 2.4.7 |
| N | Nginx WebServer | 1.4.6 |
| M | MySQL Database Server | 5.5.57 |
| P | PHP or php-fpm | 5.5.9 |

### 进入到vagrant虚拟机

```
vagrant shh
```

### 更新Ubuntu系统的源

执行下面的命令对原始源进行备份

```
sudo cp /etc/apt/sources.list /etc/apt/sources.list.bak
```

将下面的内容替换`/etc/apt/sources.list` 文件的源内容。

```
deb http://mirrors.aliyun.com/ubuntu/ trusty main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ trusty-security main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ trusty-updates main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ trusty-proposed main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ trusty-backports main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ trusty main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ trusty-security main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ trusty-updates main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ trusty-proposed main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ trusty-backports main restricted universe multiverse
```

执行完上面的操作后，再执行下面的命令对源进行更新。

```
sudo apt-get update
```

> 将默认国外的源改成aliyun的源

### Nginx安装

使用`apt-get`命令对nginx服务器进行安装。

```
sudo apt-get install nginx
```

查看安装效果

```
nginx -v
curl -I 'http://127.0.0.1'
wget 'http://127.0.0.1'
telnet 127.0.0.1 80
```

### Apache安装

使用`apt-get`命令对apache服务器进行安装。

```
sudo apt-get install apache2
```

查看安装效果

```
apache2 -v
curl -I 'http://127.0.0.1'
wget 'http://127.0.0.1'
telnet 127.0.0.1 80
```

> 此时我们执行测试时，肯定会抛出错误。因为nginx和apache这两款webserver的默认端口都是80端口。

* 停掉另一个服务器

```
sudo /etc/init.d/nginx stop
sudo /etc/init.d/apache2 stop
```

* 修改web服务器端口

例如修改apache2的端口，配置文件在`/etc/apache2/ports.conf`

```
sudo vi /etc/apache2/ports.conf

Listen 8888
```

将apache的监听端口设置成8888。

### MySQL安装

```
sudo apt-get install mysql-server mysql-client
```

上述命令分别安装了MySQL的服务端和MySQL的客户端。

> 安装期间会提示输入为MySQL设置root密码，如果是本地开发环境，可以直接 enter 不设置密码。

查看安装效果

```
mysql -uroot -p
```

进入MySQL的交互界面。

### PHP安装

使用下面的命令安装php5.5.9和一些常用的php拓展。

```
sudo apt-get install php5-cli php5-mcrypt php5-mysql php5-gd
```

#### Apache2相关设置

* 支持apache2的php模块

```
sudo apt-get install libapache2-mod-php5
```

* 开启rewrite功能
```
sudo a2enmod rewrite
```

#### Nginx相关设置

```
sudo apt-get install php5-cgi php5-fpm
```

安装php-fpm，让nginx支持fastcgi。

修改成9000端口 ，默认sock模式

```
cd /etc/php5/fpm/pool.d
sudo vim www.conf # search listen = 127.0.0.1:9000
sudo /etc/init.d/php5-fpm restart
```
