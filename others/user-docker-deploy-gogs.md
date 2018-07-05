# 使用docker部署私有Gogs服务

## 环境依赖

* docker

* docker-compose

* nginx

* 域名`gogs.domain.com`

服务器环境使用`CentOS Linux release 7.4.1708 (Core)`。

安装之前请准备一个`gogs.domain.com`域名，并将其指向服务器IP地址。

> 不需要在本地提前安装好 `MySQL`，这里通过 `Docker` 安装`gogs-server`和`MySQL`。

## 安装 docker 和 docker-compsoe

### 安装docker

Docker 软件包和依赖包已经包含在默认的 CentOS-Extras 软件源里，安装命令如下

```
yum -y install docker
```

### 安装docker-composer

```
sudo curl -L https://github.com/docker/compose/releases/download/1.19.0/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose

sudo chmod +x /usr/local/bin/docker-compose
```

> 更多的安装请参考[Install Compose](https://docs.docker.com/compose/install/#install-compose)

### 启动 Docker 后台服务

```
systemctl start docker
```

### 测试安装效果

```
docker --version
docker-compose --version
```

## 配置docker-compose

直接上`docker-compose.yaml`文件内容：

```
version: '2'
services:

  mysql-gogs:
    container_name: mysql-gogs
    image: mysql:5.7.13
    volumes:
        - "./mysql-data:/var/lib/mysql"
    restart: always
    environment:
        MYSQL_ROOT_PASSWORD: ${MYSQL_ROOT_PASSWORD}
        MYSQL_DATABASE: ${MYSQL_DATABASE}
        MYSQL_USER: ${MYSQL_USER}
        MYSQL_PASSWORD: ${MYSQL_PASSWORD}
    networks:
        - gogs
  gogs:
    container_name: gogs
    image: gogs/gogs:latest
    restart: always
    depends_on:
        - mysql-gogs
    ports:
        - "${SSH_PORT}:22"
        - "${GOGS_PORT}:3000"
    volumes:
        - ./gogs-data:/data
    links:
       - mysql-gogs
    environment:
        - "RUN_CROUD=true"
        - SSH_PORT=${SSH_PORT}
    networks:
        - gogs

networks:
    gogs:
      driver: bridge

volumes:
    gogs-data:
      driver: local
    mysql-data:
      driver: local
```

其中上面使用到的环境变量需要放在文件名在`.env`的文件中，并保证与`docker-compose.yaml`文件在同一目录下，大致内容如下：

```
MYSQL_ROOT_PASSWORD=mysql_root_password
MYSQL_DATABASE=gogs
MYSQL_USER=gogs
MYSQL_PASSWORD=gogs_password


GOGS_PORT=3000
SSH_PORT=10022
```

执行命令运行docker。

> 执行命令前安装[阿里云加速器](https://cr.console.aliyun.com/?spm=5176.100239.blogcont57268.20.ik4KA5#/accelerator)来加速安装过程。
> ```
> docker-compose up -d
> ```

## HTTP运行Gogs

第一次在浏览器运行Gogs会需要填写一些初始化数据库配置等参数。如下图：

![](/assets/centos/gogs_install.png)

`nginx`配置文件内容

```
#server {
#    listen      80; ## listen for ipv4
#    server_name   gogs.domain.com;
#    return      301 https://$server_name$request_uri;
#}
server {
    charset utf-8;
    client_max_body_size 300M;

    listen 80; # 或者 443，如果你使用 HTTPS 的话

    # SSL support
    # ssl on;
    # ssl_certificate      ./ssl/fullchain.cer;
    # ssl_certificate_key  ./ssl/domain.com.key;

    server_name gogs.domain.com;

    location / { # 如果你希望通过子路径访问，此处修改为子路径，注意以 / 开头并以 / 结束
        proxy_pass http://127.0.0.1:3000/;
    }
}
```

## 参考链接

* [使用 HTTPS 部署 Gogs](https://github.com/Unknwon/wuwen.org/issues/12)
