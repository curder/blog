## 使用`ssh-copy-id`建立与远端Linux服务器的信任

在工作中常常会需要使用SSH登录服务器，这个时候会频繁的输入用户名和密码，获得服务器的信任才能操作。

往复的工作中会发现这个输入用户名和密码的操作其实是很繁琐的。今天使用`ssh-copy-id`来获得服务器的信任。

`ssh-copy-id`的作用其实就是把本地的公钥写入到远程主机的`~/.ssh/authorized_keys`文件上，`ssh-copy-id`命令也会给远程主机的用户主目录（home）和`~/.ssh`和`~/.ssh/authorized_keys`设置合适的权限。


### 使用 `ssh-keygen` 命令生成个人公、秘钥

ssh公钥认证是ssh认证的方式之一。通过公钥认证可实现ssh免密码登陆，git的ssh方式也是通过公钥进行认证的。更多原理请参考文章尾部的参考地址。

生成命令如下：

```
ssh-keygen -t rsa
```

在命令行输入完上面的命令后一直按回车得到生成的公私钥：`~/.ssh/id_rsa.pub`和`~/.ssh/id_rsa`文件。



### 使用 `ssh-copy-id` 建立信任

#### 命令参数

```
ssh-copy-id [-h|-?|-f|-n] [-i [identity_file]] [-p port] [[-o <ssh -o options>] ...] [user@]hostname
```

* `-b`：指定密钥长度
 
* `-e`：读取openssh的私钥或者公钥文件

* `-C`：添加注释

* `-f`：指定用来保存密钥的文件名

* `-p`：指定远程服务器SSH端口

* `-i`：读取未加密的ssh-v2兼容的私钥/公钥文件，然后在标准输出设备上显示openssh兼容的私钥/公钥

* `-l`：显示公钥文件的指纹数据

* `-N`：提供一个新密语

* `-P`：提供（旧）密语

* `-q`：静默模式

* `-t`：指定要创建的密钥类型

* `-p`：指定远程服务器SSH端口

> 参数比较多，相对常用的是`-i`和`-p`参数。

#### 具体命令

```
ssh-copy-id -i ~/.ssh/id_rsa.pub -p 2200 user_name@your_server_ip_address
```



## 参考地址

* [ssh-copy-id端口问题](http://www.cnblogs.com/xia/archive/2013/03/22/2975998.html)

* [ssh-keygen AND ssh-copy-id用法](https://blog.csdn.net/wos1002/article/details/56483277)

* [ssh-copy-id帮你建立信任](http://roclinux.cn/?p=2551)