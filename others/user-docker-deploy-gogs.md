# 使用docker部署私有Gogs服务

服务器环境使用`CentOS Linux release 7.4.1708 (Core)`。

> 不需要在本地提前安装好 `Nginx` 和 `Mysql`，都通过 `Docker` 来完成。


## 目录结构

```

```

### 配置准备


准备Nginx配置放在`./nginx/default.conf`，给出一个简单的nginx配置示例。

```
server {
    listen 80 default_server;
    listen [::]:80 default_server ipv6only=on;

    root /app;
    index index.html index.htm;

    server_name localhost;

    location / {
        try_files $uri $uri/ =404;
    }
}
# 上面是默认的不用管也可以。
server
{
    listen 80;
    server_name git.example.com; # 这里填自定义域名
    location / {
        proxy_redirect off;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_pass http://172.17.0.3:8181; # 这里填容器地址，如果不知道填写公网IP也是可以的。
    }
}
```


## 安装 Docker 和 Compsoe

### 安装Docker

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

  nginx:
    container_name: nginx
    image: nginx:alpine
    volumes:
      - "./nginx/:/etc/nginx/conf.d/"
    ports:
      - "80:80"
    restart: always

  mysql:
    container_name: mysql
    image: mysql:5.7.13
    volumes:
      - "./mysql:/var/lib/mysql"
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: ${MYSQL_ROOT_PASSWORD}
      MYSQL_DATABASE: ${MYSQL_DATABASE}
      MYSQL_USER: ${MYSQL_USER}
      MYSQL_PASSWORD: ${MYSQL_PASSWORD}

  gogs:
    container_name: gogs
    depends_on:
      - db
    image: gogs/gogs
    volumes:
      - ./gogs:/data
    links:
      - mysql:mysql
    ports:
      - "10080:3000"
      - "10022:22"
    environment:
      - Domain=${GOGS_IP}
      - SSH_PORT=${GOGS_SSH_PORT}
    restart: always
```

其中上面使用到的环境变量需要放在在`.env`文件中，保证和`docker-compose.yaml`文件在同一目录下。

```
MYSQL_ROOT_PASSWORD={mysql_root_password}
MYSQL_DATABASE={gogs}
MYSQL_USER={gogs}
MYSQL_PASSWORD={password}
GOGS_IP={ip}
GOGS_HTTP_PORT=10080
GOGS_SSH_PORT=10022
```

执行命令运行docker。

> 执行命令前安装[阿里云加速器](https://cr.console.aliyun.com/?spm=5176.100239.blogcont57268.20.ik4KA5#/accelerator)
```
docker-compose up -d
```


## HTTP运行Gogs
