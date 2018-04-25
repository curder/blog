## CentOS7安装和配置Nginx


Nginx版本：1.12.2

## 使用yum安装Nginx

安装Nginx之前先安装`epel`软件仓库。

```
sudo yum -y install epel-release
sudo yum -y install nginx
```

### 命令

- 启动
```
sudo systemctl start nginx # 启动nginx
sudo systemctl enable nginx # 设置nginx服务开机启动
```

- 检查端口
```
sudo yum -y install net-tools
sudo netstat -tunpl |grep 80
```

- 使用curl查看响应
```
curl -I http://localhost
```

得到的相应信息示例如下：
```
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

