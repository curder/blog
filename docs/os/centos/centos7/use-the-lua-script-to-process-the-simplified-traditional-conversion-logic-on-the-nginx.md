# 使用lua脚本在nginx上处理网站简繁体转换逻辑

默认情况下Nginx不支持Lua模块, 需要安装LuaJIT解释器, 并且需要重新编译Nginx, 建议使用openrestry。

## 环境准备

```bash
yum install -y gd-devel GeoIP GeoIP-devel google-perftools google-perftools-devel perl-devel perl-ExtUtils-Embed libxml2 libxslt-devel gperftools-devel gcc gcc-c++ make pcre-devel zlib-devel openssl-devel
```

## 安装前准备

```bash
mkdir -p /opt/softwares/nginx/ && cd /opt/softwares/nginx/
```

### luajit
```bash
cd /opt/softwares/nginx # 进入到目录
wget --no-check-certificate https://luajit.org/download/LuaJIT-2.0.5.tar.gz -O luajit-2.0.5.tar.gz && tar xf luajit-2.0.5.tar.gz
cd LuaJIT-2.0.5 # 进入到源代码目录
make && make install PREFIX=/usr/local/luajit2 # 将编译结果放到 /usr/local/luajit2 目录
```

### ngx_devel_kit

> 解压出来的文件将在nginx编译时指定目录 `/opt/softwares/nginx/ngx_devel_kit-0.3.1`。

```bash
cd /opt/softwares/nginx # 进入到目录
wget --no-check-certificate https://github.com/simpl/ngx_devel_kit/archive/v0.3.1.tar.gz -O ngx_devel_kit-0.3.1.tar.gz && tar xf ngx_devel_kit-0.3.1.tar.gz
```

### lua-nginx-module

> 解压出来的文件将在nginx编译时指定目录 `/opt/softwares/nginx/lua-nginx-module-0.10.21`。

```bash
cd /opt/softwares/nginx # 进入到目录
wget --no-check-certificate https://github.com/openresty/lua-nginx-module/archive/v0.10.21.tar.gz -O lua-nginx-module-0.10.21.tar.gz && tar xf lua-nginx-module-0.10.21.tar.gz
```

### lua-resty-core

```bash
cd /opt/softwares/nginx # 进入到目录
wget --no-check-certificate https://github.com/openresty/lua-resty-core/archive/v0.1.23.tar.gz -O lua-restry-core-0.1.23.tar.gz && tar xf lua-restry-core-0.1.23.tar.gz
cd lua-resty-core-0.1.23
make install PREFIX=/usr/local/lua/core
```

###  lua-resty-lrucache

```bash
cd /opt/softwares/nginx # 进入到目录
wget --no-check-certificate  https://github.com/openresty/lua-resty-lrucache/archive/v0.11.tar.gz -O lua-resty-lrucache-0.11.tar.gz && tar xf lua-resty-lrucache-0.11.tar.gz
cd lua-resty-lrucache-0.11
make install PREFIX=/usr/local/lua/core
```

## 编译安装Nginx并加载模块

```bash
# 建立软链接, 不建立会出现share object错误
ln -s /usr/local/lib/libluajit-5.1.so.2 /lib64/libluajit-5.1.so.2
# 加载lua库，加入到ld.so.conf文件
echo "/usr/local/luajit2/lib" >> /etc/ld.so.conf
ldconfig

wget http://nginx.org/download/nginx-1.22.0.tar.gz && tar xf nginx-1.22.0.tar.gz && cd nginx-1.22.0

export LUAJIT_LIB=/usr/local/luajit2/lib
export LUAJIT_INC=/usr/local/luajit2/include/luajit-2.0

./configure --prefix=/usr/local/nginx --user=nginx --group=nginx --with-file-aio --with-ipv6 --with-http_auth_request_module --with-http_ssl_module --with-http_v2_module --with-http_realip_module --with-http_addition_module --with-http_xslt_module=dynamic --with-http_image_filter_module=dynamic --with-http_geoip_module=dynamic --with-http_sub_module --with-http_dav_module --with-http_flv_module --with-http_mp4_module --with-http_gunzip_module --with-http_gzip_static_module --with-http_random_index_module --with-http_secure_link_module --with-http_degradation_module --with-http_slice_module --with-http_stub_status_module --with-http_perl_module=dynamic --with-mail=dynamic --with-mail_ssl_module --with-pcre --with-pcre-jit --with-stream=dynamic --with-stream_ssl_module --with-google_perftools_module --with-debug --add-module=/opt/softwares/nginx/ngx_devel_kit-0.3.1 --add-module=/opt/softwares/nginx/lua-nginx-module-0.10.21

make && make install

echo "export PATH=/usr/local/nginx/sbin:$PATH" >> /etc/profile && source /etc/profile
```

Nginx自启动脚本，下面的内容放在：`/etc/init.d/nginx`。

```bash
#!/bin/bash
#
# Startup script for Nginx - this script starts and stops the nginx daemon
#
# chkconfig:   - 85 15
# description:  Nginx is an HTTP(S) server, HTTP(S) reverse proxy and IMAP/POP3 proxy server
# processname: nginx
# config:      /usr/local/nginx/conf/nginx.conf
# pidfile:     /usr/local/nginx/logs/nginx.pid

# Source function library.
. /etc/rc.d/init.d/functions

# Source networking configuration.
. /etc/sysconfig/network

# Check that networking is up.
[ "$NETWORKING" = "no" ] && exit 0

nginx="/usr/local/nginx/sbin/nginx"
prog=$(basename $nginx)

NGINX_CONF_FILE="/usr/local/nginx/conf/nginx.conf"

[ -f /etc/sysconfig/nginx ] && . /etc/sysconfig/nginx

lockfile=/var/lock/subsys/nginx

start() {
    [ -x $nginx ] || exit 5
    [ -f $NGINX_CONF_FILE ] || exit 6
    echo -n $"Starting $prog: "
    daemon $nginx -c $NGINX_CONF_FILE
    retval=$?
    echo
    [ $retval -eq 0 ] && touch $lockfile
    return $retval
}

stop() {
    echo -n $"Stopping $prog: "
    killproc $prog -QUIT
    retval=$?
    echo
    [ $retval -eq 0 ] && rm -f $lockfile
    return $retval
}

restart() {
    configtest || return $?
    stop
    sleep 1
    start
}

reload() {
    configtest || return $?
    echo -n $"Reloading $prog: "
    killproc $nginx -HUP
    RETVAL=$?
    echo
}

force_reload() {
    restart
}

configtest() {
  $nginx -t -c $NGINX_CONF_FILE
}

rh_status() {
    status $prog
}

rh_status_q() {
    rh_status >/dev/null 2>&1
}

case "$1" in
    start)
        rh_status_q && exit 0
        $1
        ;;
    stop)
        rh_status_q || exit 0
        $1
        ;;
    restart|configtest)
        $1
        ;;
    reload)
        rh_status_q || exit 7
        $1
        ;;
    force-reload)
        force_reload
        ;;
    status)
        rh_status
        ;;
    condrestart|try-restart)
        rh_status_q || exit 0
            ;;
    *)
        echo $"Usage: $0 {start|stop|status|restart|condrestart|try-restart|reload|force-reload|configtest}"
        exit 2
esac
```

```bash
useradd -M -s /sbin/nologin nginx # 创建nginx用户
chkconfig --add nginx
chkconfig --list | grep nginx
chkconfig --level 2345 nginx on
service nginx start
```

## 安装opencc

```bash
yum install -y doxygen cmake

cd /opt/softwares/nginx
git clone https://github.com/BYVoid/OpenCC.git --depth 1 && cd OpenCC
make # See: https://github.com/BYVoid/OpenCC/issues/592
sudo make install
ln -s /usr/lib/libopencc.so /lib64/libopencc.so
```

仅对站点的`text/html`文件内容替换 `opencc-filter.lua`。

```lua
local content_type = ngx.header.content_type
local ffi = require('ffi')
local cc = ffi.load('opencc')

if string.match(content_type, 'text/html') then
    ffi.cdef[[
        typedef void* opencc_t;

        opencc_t opencc_open(const char *configFileName);
        int      opencc_close(opencc_t opencc);
        char*    opencc_convert_utf8(opencc_t opencc, const char *input, size_t length);
        void     opencc_convert_utf8_free(char *str);
    ]]


    local inst = cc.opencc_open('/usr/share/opencc/s2t.json')
    local input = ngx.arg[1]
    local res = cc.opencc_convert_utf8(inst, input, string.len(input))

    ngx.arg[1] = ffi.string(res)

    cc.opencc_convert_utf8_free(res)
    cc.opencc_close(inst)
end
```

### 虚拟主机中使用

```nginx
server {
    listen 80;
    server_name tw.curder.com;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl;
    ssl_certificate /etc/nginx/ssl/curder.com/fullchain.pem;
    ssl_certificate_key /etc/nginx/ssl/curder.com/privkey.pem;

    server_name tw.curder.com;

    location / {
        proxy_pass https://www.avatrade-world.hk;
        body_filter_by_lua_file /etc/nginx/conf/vhosts/opencc-filter.lua;
    }

    location /lua {
        set $test "hello,world";
        content_by_lua '
            ngx.header.content_type="text/html; charset=UTF-8;"
            ngx.say(ngx.var.test)';
    }
}
```

此时访问 https://tw.curder.com 站，则可以看到页面内容都转换成了繁体。

- [NGINX+Lua模块编译安装](https://www.1024sou.com/article/117062.html)

- [用 OpenResty+OpenCC 让网站支持正体中文](https://blog.rexskz.info/support-traditional-chinese-using-openresty-and-opencc.html)