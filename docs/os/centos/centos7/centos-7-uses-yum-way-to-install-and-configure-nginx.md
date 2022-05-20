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
