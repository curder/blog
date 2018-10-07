# 如何在CentOS上创建sudo用户

## 介绍
该`sudo`命令提供了一种机制，用于向普通用户授予通常仅对`root`用户可用的管理员权限。

下面将展示在CentOS上创建具有`sudo`访问权限的新用户的最简单方法，而无需修改服务器的`sudoers`文件。

### 以`root`用户身份登录服务器

```
ssh root@server_ip_address
```

### 使用`adduser`命令添加新用户到系统

这里以用户`username`，密码以`newPassword`为例。

```
echo "newPassword" | passwd --stdin "username"
```

> ** 强烈建议使用强密码！**

### 将用户添加到`wheel`组

默认情况下，在CentOS上，该wheel组的成员具有sudo权限，使用`usermod`命令：

```
usermod -aG wheel username
```

### 在新用户上测试`sudo`访问权限

* 使用`su`命令切换到新用户帐户
```
su - username
```

* 列出目录的内容，`/root`通常只有`root`用户可以访问。
```
sudo ls -la /root
```
第一次`sudo`在会话中使用时，系统将提示您输入用户帐户的密码。输入密码以继续。

## 参考地址

* [How To Create a Sudo User on CentOS ](https://www.digitalocean.com/community/tutorials/how-to-create-a-sudo-user-on-centos-quickstart)
