# 在CentOS上配置 Let's Encrypt 实现站点 SSL

今天早些时候 Let's Encrypt 的通配证书上线了，从此所有子域名开启[HTTPS](https://zh.wikipedia.org/wiki/%E8%B6%85%E6%96%87%E6%9C%AC%E4%BC%A0%E8%BE%93%E5%AE%89%E5%85%A8%E5%8D%8F%E8%AE%AE)就简单了。

更多信息可以查看这里 [ACME v2 and Wildcard Certificate Support is Live](https://community.letsencrypt.org/t/acme-v2-and-wildcard-certificate-support-is-live/55579)


那么如何在自己的网站上使用 Let's Encrypt 实现 SSL。

其实安装流程可以通过[参考这里](https://certbot.eff.org)获取，这里只是做一个总结。

下面的总结全部基于CentOS系统，Web服务器选择Nginx。

## 前提条件

* 自己拥有一个域名

* `*Unix`的服务器



> 注意如果你的域名没备案，在购买主机的时候，推荐购买境外的主机。并将域名自己解析到云主机IP。


## 安装 Nginx

如果机器已经安装过 Nginx 服务的话，建议跳过这步。

EPEL (Extra Packages for Enterprise Linux，企业版Linux的额外软件包) 是Fedora小组维护的一个软件仓库项目，为RHEL/CentOS提供他们默认不提供的软件包。这个源兼容RHEL及像CentOS和Scientific Linux这样的衍生版本。
更多详细介绍查看这里：[EPEl](https://fedoraproject.org/wiki/EPEL)

我们需要Nginx安装的EPEL仓库，因为官方CentOS仓库中不存在Nginx软件包。

```
sudo yum -y install epel-release
```

运行完成上面的yum命令安装EPEL仓库。

> 通过命令`yum repolist`检查升级的结果。
> 在列表中应该能看到这行数据`epel/x86_64                                                        Extra Packages for Enterprise Linux 7 - x86_64                                                    12400`，则表示安装`epel`成功。

接下来运行下面的命令安装nginx到系统默认位置。

```
sudo yum -y install nginx
```

默认安装的nginx，配置文件在`/etc/nginx/conf.d`下，日志文件在`/var/log/nginx/`。

## 安装 Certbot

执行命令安装 Certbot 的 Nginx 包。

```
sudo yum install -y certbot-nginx
```

## 配置 Nginx


安装完 Nginx 和 Certbot 之后，需要简单配置 Nginx 以便于 Let's Encrypt 能起作用：

```
sudo vi /etc/nginx/conf.d/examlpe.com
```

使用 vi 编辑器打开 `/etc/nginx/conf.d/examlpe.com`，可以直接删除里面的所有内容，然后再添加下面的配置：

```
server {
    listen 80;
    listen [::]:80;
    server_name examlpe.com www.examlpe.com;
}
```