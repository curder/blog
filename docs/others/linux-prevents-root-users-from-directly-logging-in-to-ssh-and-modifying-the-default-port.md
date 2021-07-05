# Linux禁止root用户直接登录sshd并修改默认端口

Linux最高权限用户`root`默认可以直接登录ssh。为了提高服务器的安全，将它进行禁止登录，使得攻击者无法通过暴力破解来获取`root`权限。

具体操作如下：

1. 新建用户并修改密码 (用户名：`newUser`、用户密码：`newPassword`)

2. 修改用户sudo权限 

3. 修改ssh配置，禁止root用户登录和默认登录端口 （新端口：`newPort`）

4. 重启sshd服务 

5. 尝试登录


### 新建用户并修改密码

**新建用户之前，请切换到root用户再进行如下操作。**

```
adduser newUser

echo "newPassword" | passwd --stdin newUser
```

> `newUser` 为新建的用户名； `newPassword` 为新建的用户密码。


### 添加用户到sudo权限

使用命令：

```
visudo
```

在打开的文件中，找到 `root ALL=(ALL) ALL` 行，在它下面加上： 

```
newUser ALL=(ALL) ALL 
```


### 修改sshd配置

ssh的配置文件在`/etc/ssh/sshd_config`

#### 禁止root用户直接登录

1. 查找`“#PermitRootLogin yes`，将前面的`#`去掉，短尾`yes`改为`no`，并保存文件。
```
PermitRootLogin no
```

2. 或者使用**sed**命令操作：`sed -i 's/#PermitRootLogin yes/PermitRootLogin no/g' /etc/ssh/sshd_config`

#### 禁止使用默认22端口

1. 找到`#Port 22`字段删掉`#`，将`22`改为其他不被使用的端口，**注意：服务器端口最大可以开到65536**
```
Port newPort
```

2. 或者使用**sed**命令操作：`sed -i 's/#Port 22/Port newPort/g' /etc/ssh/sshd_config`

### 重启sshd服务

```
service sshd restart
```

> **提醒** 重启sshd服务后切莫退出服务器。使用刚创建的用户成功地通过ssh进入到服务器的测试之后，打开终端的另一个实例，以新建的用户通过ssh进入到服务器并能成功切换到root用户。
要是一切都正常，才可以以root用户身份安全地注销退出服务器。


### 尝试登录

* root用户使用下面的命令无法登录
```
ssh -p newPort root@ip_address
``` 

* 普通用户成功登录

 1. 使用下面的ssh命令登录到服务器
 ```
 ssh -p newPort newUser@ip_address
 ```
 
 2. 使用`sudo su -`输入密码后是否成功登录root用户



## 参考链接

* [linux禁止root用户直接登录sshd并修改默认端口](https://www.kancloud.cn/curder/linux/202053)

* [Linux(centos)禁止root用户直接登录sshd并修改默认端口](https://www.centos.bz/2017/12/linuxcentos%E7%A6%81%E6%AD%A2root%E7%94%A8%E6%88%B7%E7%9B%B4%E6%8E%A5%E7%99%BB%E5%BD%95sshd%E5%B9%B6%E4%BF%AE%E6%94%B9%E9%BB%98%E8%AE%A4%E7%AB%AF%E5%8F%A3/)
