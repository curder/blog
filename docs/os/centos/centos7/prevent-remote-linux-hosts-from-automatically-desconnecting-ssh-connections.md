# 防止远程Linux主机自动断开SSH连接

在使用ssh连接远程Linux主机时，如果长时间不操作，ssh会自动断开，只能重新登陆。

原因是：由于SSH的安全机制，如果**10分钟**没有任何操作，本次SSH会话会自动关闭。

## 防止远程Linux自动断开SSH连接

> 注意：修改针对的是本地SSH客户端上，不是远程主机。

## 编辑SSH配置文件

### 针对全部用户

针对全部用户的配置文件在`/etc/ssh/ssh_config`里面添加

```text
Host *
ServerAliveInterval 60
```

### 针对当前操作用户生效

编辑文件`~/.ssh/config`，写入如下内容。

```text
Host *
ServerAliveInterval 60
```

`ServerAliveInterval 60`表示SSH客户端每隔**60秒**给远程主机发送一个`no-op`包，`no-op`是无任何操作的意思，这样远程主机就不会关闭这个SSH会话。

## 在ssh命令的时候添加参数

```bash
ssh -o ServerAliveInterval=60 user@remote-ssh-server-ip
```

> 上面的命令通过添加`-o`参数达到远程Linux主机自动断开SSH连接的作用。

两种修改方式，针对不同的适用场景，不同的影响粒度。如果是个人电脑建议全局修改。

## 参考链接

- [防止远程Linux主机自动断开SSH连接](http://blog.topspeedsnail.com/archives/10560)
