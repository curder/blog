# docker的安装

## 在mac上安装docker

可以参考链接[Install Docker for Mac](https://docs.docker.com/docker-for-mac/install/)

在上面的链接页面上找到下载相关的链接：[Download from Docker Store](https://store.docker.com/editions/community/docker-ce-desktop-mac)

在下载的时候可能需要使用账号密码进行登陆后才能下载，地址为：https://download.docker.com/mac/stable/Docker.dmg

下载完毕后点击这个`Docker.dmg`文件，然后下一步完成安装。

然后，在命令行中输入`docker --version`或者`docker version` 来验证docker是否安装成功。

## 在windows系统上安装docker

官方安装参考地址：https://docs.docker.com/docker-for-windows

## 在centos系统上安装docker

```
sudo yum remove docker \
                  docker-client \
                  docker-client-latest \
                  docker-common \
                  docker-latest \
                  docker-latest-logrotate \
                  docker-logrotate \
                  docker-selinux \
                  docker-engine-selinux \
                  docker-engine

sudo yum install -y yum-utils \
  device-mapper-persistent-data \
  lvm2

sudo yum-config-manager \
    --add-repo \
    https://download.docker.com/linux/centos/docker-ce.repo

sudo yum install -y docker-ce
sudo systemctl start docker

sudo usermod -aG docker your-user # 如果想将Docker用作非root用户，应该考虑将当前用户添加到docker组
```

验证是否安装成功可以执行`sudo docker run hello-world`命令。


官方安装参考地址：https://docs.docker.com/install/linux/docker-ce/centos/


# 参考链接

* [About Docker CE](https://docs.docker.com/install/)
