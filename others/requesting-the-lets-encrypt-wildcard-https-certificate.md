# 申请Let's Encrypt通配符HTTPS证书

通配符证书是一个SSL证书，可用于为给定域上的所有子域提供https，例如，`*.webfsd.com` 意味着任何子域名（如`www.example.com`或`links.example.com`）会使用相同的SSL证书。

使用通配符证书对于允许用户选择子域的应用程序非常有用，例如，`wordpress.com`子域下的所有博客。

[acme.sh](https://github.com/Neilpang/acme.sh) 实现了 `acme` 协议, 可以从 letsencrypt 生成免费的证书。


主要步骤:
0. 安装依赖
1. 安装 `acme.sh`
2. 生成证书
3. `copy` 证书到 `nginx/apache` 或者其他服务
4. 更新证书
5. 更新 acme.sh



## 安装依赖程序

- `Debian/Ubuntu`
```
apt-get install curl -y && apt-get install cron -y && apt-get install socat -y
```

- `Centos`
```
yum install curl -y && yum install cron -y && yum install socat -y
```

## 安装`acme.sh`

```
curl  https://get.acme.sh | sh
```

输出如下内容：
```
$ curl  https://get.acme.sh | sh
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100   705  100   705    0     0   2426      0 --:--:-- --:--:-- --:--:--  2422
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100  163k  100  163k    0     0   400k      0 --:--:-- --:--:-- --:--:--  401k
[Sun Mar 18 20:11:01 CST 2018] Installing from online archive.
[Sun Mar 18 20:11:01 CST 2018] Downloading https://github.com/Neilpang/acme.sh/archive/master.tar.gz
[Sun Mar 18 20:11:03 CST 2018] Extracting master.tar.gz
[Sun Mar 18 20:11:03 CST 2018] It is recommended to install socat first.
[Sun Mar 18 20:11:03 CST 2018] We use socat for standalone server if you use standalone mode.
[Sun Mar 18 20:11:03 CST 2018] If you don't use standalone mode, just ignore this warning.
[Sun Mar 18 20:11:03 CST 2018] Installing to /root/.acme.sh
[Sun Mar 18 20:11:03 CST 2018] Installed to /root/.acme.sh/acme.sh
[Sun Mar 18 20:11:03 CST 2018] Installing alias to '/root/.bashrc'
[Sun Mar 18 20:11:03 CST 2018] OK, Close and reopen your terminal to start using acme.sh
[Sun Mar 18 20:11:03 CST 2018] Installing alias to '/root/.cshrc'
[Sun Mar 18 20:11:03 CST 2018] Installing alias to '/root/.tcshrc'
[Sun Mar 18 20:11:03 CST 2018] Installing cron job
[Sun Mar 18 20:11:03 CST 2018] Good, bash is found, so change the shebang to use bash as preferred.
[Sun Mar 18 20:11:03 CST 2018] OK
[Sun Mar 18 20:11:03 CST 2018] Install success!
```

这里创建一个alias, 方便使用: `alias acme.sh=~/.acme.sh/acme.sh`

> 自动为当前用户创建定时任务, 每天 `00:19` 自动检测所有的证书。如果快过期了, 需要更新, 则会自动更新证书。

**安装过程不会污染已有的系统任何功能和文件**, 所有的修改都限制在安装目录中: `~/.acme.sh/`


## 生成证书


`acme.sh` 实现了 **acme** 协议支持的所有验证协议. 一般有两种方式验证: `http` 和 `dns` 验证.

### http验证

`http` 方式需要在你的网站根目录下放置一个文件, 来验证你的域名所有权,完成验证. 然后就可以生成证书了。

```
acme.sh --issue  -d webfsd.com -d www.webfsd.com --webroot /home/wwwroot/webfsd.com/
```

只需要指定域名, 并指定域名所在的网站根目录。 `acme.sh` 会全自动的生成验证文件, 并放到网站的根目录。然后自动完成验证，最后会聪明的删除验证文件，整个过程没有任何副作用。
















## 参考地址


- [Neilpang/acme.sh](https://github.com/Neilpang/acme.sh/wiki/%E8%AF%B4%E6%98%8E)


- [申请Let's Encrypt通配符HTTPS证书](https://my.oschina.net/kimver/blog/1634575#comment-list)

- [使用阿里云域名API申请Let’s Encrypt泛域名免费SSL证书教程](https://www.wn789.com/15510.html)