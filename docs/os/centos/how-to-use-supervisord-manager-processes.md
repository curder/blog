# 使用supervisord管理进程

[supervisord](http://supervisord.org/)是一个进程管理工具，用来启动、停止、重启和监测进程，当程序挂掉后`supervisor`能够重新启动进程。


> **注意：** `Supervisor`只能**管理非daemon的进程**，也就是说`Supervisor`不能管理守护进程。否则提示`Exited too quickly (process log may have details)`异常。


## 安装

这里使用`yum`安装，`supervisor`没有发布在标准的CentOS源里，需要安装`epel`源。

- 默认配置文件：`/etc/supervisord.conf`

- 进程管理配置文件放到：`/etc/supervisord.d/`

```
yum install -y epel-release supervisor
```

`supervisor`安装完成后会生成三个执行程序，它们分别是：

- `supervisortd`：`supervisor`的守护进程服务（用于接收进程管理命令）

- `supervisorctl`：客户端（用于和守护进程通信，发送管理进程的指令）

- `echo_supervisord_conf`：生成初始配置文件程序


## 启动Supervisor服务

```
supervisord -c /etc/supervisord.conf
```

## 配置管理进程文件

使用`yum`安装的`supervisor`默认的主配置文件是`/etc/supervisord.conf`。

在实际环境中，不建议将进程管理配置参数写到这个主配置文件中，应该给每个进程单独写一个配置文件，默认主配置文件引入的文件是`/etc/supervisord.d/*.ini`。


下面是Nginx配置进程的一个例子，**注意配置文件名的后缀**
```
[program:nginx]
command=/sbin/nginx                                   ; 程序路径
autostart=true
autorestart=true                                      ; 自动重启
priority=999                                          ; 优先级
startsecs=1                                           ; 重启前等待时间
startretries=100                                      ; 最大重启次数
```
> 一定要将被supervisor所管理的进程在**前台**运行，如果进程正在运行，请先关闭。

### 重载配置
```
supervisorctl reread && supervisorctl update
```
执行完上面的命令，可以看到控制台会输出如下结果

```
nginx: available
nginx: added process group
```

至此使用 supervisord 管理`nginx`进程已经OK。


## 终端管理进程

### 终端交互

`supervisord`启动成功后，可以通过`supervisorctl`客户端控制进程，启动、停止、重启。

运行`supervisorctl`命令，不加参数，会进入`supervisor`客户端的交互终端，并会列出当前所管理的所有进程。

```
[root@localhost ~]# supervisorctl
nginx                            RUNNING   pid 4423, uptime 0:00:02
supervisor> help

default commands (type help <topic>):
=====================================
add    clear  fg        open  quit    remove  restart   start   stop  update
avail  exit   maintail  pid   reload  reread  shutdown  status  tail  version

supervisor>
```
> 图中`nginx`就是上面在配置文件中第一行`[program:nginx]`指定。

这么多的命令不知道怎么使用可以使用`help [命令名称]`，例如：`help stop`，则会有更详细的命令解释。

### Bash终端命令

```
supervisorctl status
supervisorctl stop nginx
supervisorctl start nginx
supervisorctl restart nginx
supervisorctl reread # 有新的配置文件加入到配置目录`/etc/supervisord.d/`使用命令重新读取配置。
supervisorctl update # 配合reread使用
```

### WEB管理界面

默认配置没有开启WEB管理界面，需要修改主配置文件`supervisord.conf`配置文件中打开,并修改如下内容。

```
;[inet_http_server]         ; inet (TCP) server disabled by default
;port=127.0.0.1:9001        ; (ip_address:port specifier, *:port for all iface)
;username=user              ; (default is no username (open server))
;password=123               ; (default is no password (open server))
```

修改为：

```
[inet_http_server]         ; inet (TCP) server disabled by default
port=0.0.0.0:9001          ; (ip_address:port specifier, *:port for all iface)
username=user              ; (default is no username (open server))
password=123               ; (default is no password (open server))
```

- `port`：绑定访问IP和端口，这里是绑定的是本地IP和`9001`端口 

- `username`：登录管理后台的用户名 

- `password`：登录管理后台的密码


## 配置开机启动Supervisor服务

添加systemctl服务和添加service服务二者选其一即可。

### 添加systemctl服务

1. 创建supervisor.service文件。
    > 进入`/lib/systemd/system`目录，并创建`supervisor.service`文件，文件内容如下：
    >```
    >[Unit]
    >Description=supervisor
    >After=network.target
    >
    >[Service]
    >Type=forking
    >ExecStart=/usr/bin/supervisord -c /etc/supervisord.conf
    >ExecStop=/usr/bin/supervisorctl $OPTIONS shutdown
    >ExecReload=/usr/bin/supervisorctl $OPTIONS reload
    >KillMode=process
    >Restart=on-failure
    >RestartSec=42s
    >
    >[Install]
    >WantedBy=multi-user.target
    >```

2. 修改文件权限
```
chmod 766 supervisor.service
```

3. 设置开机启动
```
systemctl enable supervisor.service
systemctl daemon-reload
systemctl start/restart/stop supervisor.service
```

4. 验证是否开机自启动
```
systemctl is-enabled supervisor
```


### 添加service服务

```
#!/bin/bash
#
# supervisord   This scripts turns supervisord on
#
# Author:       Mike McGrath <mmcgrath@redhat.com> (based off yumupdatesd)
#
# chkconfig:    - 95 04
#
# description:  supervisor is a process control utility.  It has a web based
#               xmlrpc interface as well as a few other nifty features.
# processname:  supervisord
# config: /etc/supervisor/supervisord.conf
# pidfile: /var/run/supervisord.pid
#

# source function library
. /etc/rc.d/init.d/functions

RETVAL=0

start() {
    echo -n $"Starting supervisord: "
    daemon "supervisord -c /etc/supervisord.conf "
    RETVAL=$?
    echo
    [ $RETVAL -eq 0 ] && touch /var/lock/subsys/supervisord
}

stop() {
    echo -n $"Stopping supervisord: "
    killproc supervisord
    echo
    [ $RETVAL -eq 0 ] && rm -f /var/lock/subsys/supervisord
}

restart() {
    stop
    start
}

case "$1" in
  start)
    start
    ;;
  stop) 
    stop
    ;;
  restart|force-reload|reload)
    restart
    ;;
  condrestart)
    [ -f /var/lock/subsys/supervisord ] && restart
    ;;
  status)
    status supervisord
    RETVAL=$?
    ;;
  *)
    echo $"Usage: $0 {start|stop|status|restart|reload|force-reload|condrestart}"
    exit 1
esac

exit $RETVAL
```
将上面的代码内容保存到`/etc/rc.d/init.d/supervisor`文件并将文件权限修改为755，并设置开机自启动。

```
chmod 755 /etc/rc.d/init.d/supervisor
chkconfig supervisor on
```

其它Linux发行版开机启动脚本：https://github.com/Supervisor/initscripts


## 参考地址

- [Supervisor安装与配置（Linux/Unix进程管理工具）](https://blog.csdn.net/xyang81/article/details/51555473)
