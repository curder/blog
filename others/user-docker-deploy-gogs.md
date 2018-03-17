# 使用docker部署私有Gogs服务

服务器环境使用`CentOS Linux release 7.4.1708 (Core)`。

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

## HTTP运行Gogs


