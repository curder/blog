# 使用docker搞定私有Git服务器部署(Gogs)

服务器环境使用`CentOS Linux release 7.4.1708 (Core)`。

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

