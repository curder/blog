# 使用yum方式安装和配置Nginx

Nginx版本：1.20.1

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

### 使用curl查看服务器响应

```bash
curl -I http://localhost
```

得到的相应信息示例如下：

```text
HTTP/1.1 200 OK
Server: nginx/1.20.1
Date: Tue, 24 May 2022 02:57:21 GMT
Content-Type: text/html
Content-Length: 4833
Last-Modified: Fri, 16 May 2014 15:12:48 GMT
Connection: keep-alive
ETag: "53762af0-12e1"
Accept-Ranges: bytes
```

Nginx主配置文件为：`/etc/nginx/nginx.conf`，配置目录默认安装在 `/etc/nginx/`下。

至此，CentOS下安装 `nginx` 就安装好了。
