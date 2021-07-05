# CentOS7使用yum方式安装和配置Nginx

Nginx版本：1.12.2

## 使用yum安装Nginx

安装Nginx之前先安装`epel`软件仓库。

```bash
sudo yum -y install epel-release && sudo yum -y install nginx
```

## 启动Nginx

### 系统守护进程方式启动Nginx

执行下面的命令启动`nignx`并使其在CentOS系统启动时运行。

```bash
sudo systemctl start nginx && sudo systemctl enable nginx
```

### 使用supervisord管理进程

[supervisord](/os/centos/how-to-use-supervisord-manager-processes.md)的进程管理参考这里。

#### nginx的supervisord配置文件

默认的 supervisord 的进程文件保存在`/etc/supervisord.d/nginx.ini`，内容如下：

```ini
[program:nginx]
command = /sbin/nginx                                   ; 程序路径
autostart = true
autorestart = true                                      ; 自动重启
priority = 999                                          ; 优先级
startsecs = 1                                           ; 重启前等待时间
startretries = 100                                      ; 最大重启次数
stdout_logfile = /var/log/nginx.out.log
stderr_logfile = /var/log/nginx.err.log
```

#### 重载配置

```bash
supervisorctl reread && supervisorctl update
```

执行完上面的命令，可以看到控制台会输出如下结果

```text
nginx: available
nginx: added process group
```

至此使用 supervisord 管理`nginx`进程已经完成。

## 检查Nginx

### 检查进程

检查系统进程使用ps命令。

```bash
ps aux |grep nginx
```

### 检查端口

```bash
sudo yum -y install net-tools
sudo netstat -tunpl |grep 80
```

### 使用curl查看服务器响应

```bash
curl -I http://localhost
```

得到的相应信息示例如下：

```text
HTTP/1.1 200 OK
Server: nginx/1.12.2
Date: Wed, 25 Apr 2018 15:17:04 GMT
Content-Type: text/html
Content-Length: 3700
Last-Modified: Tue, 06 Mar 2018 09:26:21 GMT
Connection: keep-alive
ETag: "5a9e5ebd-e74"
Accept-Ranges: bytes
```

至此，CentOS下安装`nginx`就安装好了。
