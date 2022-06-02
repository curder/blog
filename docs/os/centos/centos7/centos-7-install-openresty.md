# 安装OpenResty

## 包管理安装

OpenResty 现在提供了 CentOS 上的 [官方包](https://openresty.org/cn/linux-packages.html)。 只需运行下面的命令：

```bash
# add the yum repo:
wget https://openresty.org/package/centos/openresty.repo
sudo mv openresty.repo /etc/yum.repos.d/

# update the yum index:
sudo yum check-update

sudo yum install -y openresty
```

## 源码包准备

首先要在[官网下载](https://openresty.org/cn/download.html) OpenResty 的源码包。

官网上会提供很多的版本，各个版本有什么不同也会有说明，可以按需选择下载，这里下载 [openresty-1.21.4.1.tar.gz](https://openresty.org/download/openresty-1.21.4.1.tar.gz)。

### 依赖库安装

```bash
sudo yum install -y readline-devel pcre-devel openssl-devel perl perl-devel perl-ExtUtils-Embed  libxml2 libxslt-devel gd-devel GeoIP GeoIP-devel google-perftools google-perftools-devel
```

### 安装OpenResty

```bash
mkdir -p /opt/softwares/ && cd /opt/softwares

wget https://openresty.org/download/openresty-1.21.4.1.tar.gz && tar xf openresty-1.21.4.1.tar.gz && cd openresty-1.21.4.1

./configure --prefix=/usr/local/openresty\ # 文件安装到这个目录下
            --with-file-aio\
            --with-http_auth_request_module \
            --with-http_v2_module \
            --with-http_realip_module \
            --with-http_addition_module \
            --with-http_xslt_module=dynamic \
            --with-http_image_filter_module=dynamic \
            --with-http_geoip_module=dynamic \
            --with-http_dav_module \
            --with-http_flv_module \
            --with-http_mp4_module \
            --with-http_gunzip_module \
            --with-http_gzip_static_module \
            --with-http_random_index_module \
            --with-http_secure_link_module \
            --with-http_degradation_module \
            --with-http_slice_module \
            --with-http_stub_status_module \
            --with-http_perl_module=dynamic \
            --with-mail=dynamic \
            --with-mail_ssl_module \
            --with-pcre \
            --with-pcre-jit \
            --with-stream=dynamic \
            --with-stream_ssl_module \
            --with-google_perftools_module \
            --with-debug \
            --with-http_iconv_module

gmake && gmake install
```
至此 OpenResty 软件安装完毕。

### 设置环境变量

```bash
echo 'export PATH=$PATH:/usr/local/openresty/nginx/sbin' >> /etc/profile && source /etc/profile
```

### 配置开机自启动

```bash
echo "[Unit]
Description=The OpenResty Application Platform
After=syslog.target network-online.target remote-fs.target nss-lookup.target
Wants=network-online.target

[Service]
Type=forking
PIDFile=/usr/local/openresty/nginx/logs/nginx.pid
ExecStartPre=/usr/local/openresty/nginx/sbin/nginx -t
ExecStart=/usr/local/openresty/nginx/sbin/nginx
ExecReload=/bin/kill -s HUP $MAINPID
ExecStop=/bin/kill -s QUIT $MAINPID
PrivateTmp=true

[Install]
WantedBy=multi-user.target" >> /etc/systemd/system/multi-user.target.wants/openresty.service

systemctl enable openresty
systemctl start openresty
```

### 简单配置

#### 隐藏服务器信息

在响应头信息中隐藏web服务器信息。

```nginx
http {
    server_tokens off; # 隐藏服务器版本
    more_clear_headers 'Server'; # 隐藏服务器Server字段
}
```


#### 开发环境调试lua脚本

```nginx
location / {
    lua_code_cache off; # 开发时使用，生产环境请删除
    default_type text/html;
    content_by_lua_file '/usr/local/openresty/lua/hello-world.lua'; # 当修改文件内容时，会实时生效
}
```
