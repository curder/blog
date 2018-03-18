# 使用docker部署私有Gogs服务

服务器环境使用`CentOS Linux release 7.4.1708 (Core)`。

> 不需要在本地提前安装好 `Mysql`，都通过 `Docker` 来完成。

## 安装 Docker 和 Compsoe

### 安装Docker

Docker 软件包和依赖包已经包含在默认的 CentOS-Extras 软件源里，安装命令如下

```
yum -y install docker
```

### 安装docker-composer

    sudo curl -L https://github.com/docker/compose/releases/download/1.19.0/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose

    sudo chmod +x /usr/local/bin/docker-compose

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

其中上面使用到的环境变量需要放在在`.env`文件中，保证和`docker-compose.yaml`文件在同一目录下。

```
MYSQL_ROOT_PASSWORD=mysql_root_password
MYSQL_DATABASE=gogs
MYSQL_USER=gogs
MYSQL_PASSWORD=gogs_password


GOGS_PORT=3001
SSH_PORT=10022
```

执行命令运行docker。

> 执行命令前安装[阿里云加速器](https://cr.console.aliyun.com/?spm=5176.100239.blogcont57268.20.ik4KA5#/accelerator)来加速安装过程。
>
> ```
> docker-compose up -d
> ```

## HTTP运行Gogs

第一次在浏览器运行Gogs会需要填写一些初始化数据库配置参数。如下图：

![](/assets/gogs_install.png)


