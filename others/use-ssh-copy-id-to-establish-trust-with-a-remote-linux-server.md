## 使用`ssh-copy-id`建立与远端Linux服务器的信任

在工作中常常会需要使用SSH登录服务器，这个时候会频繁的输入用户名和密码，获得服务器的信任才能操作。

往复的工作中会发现这个输入用户名和密码的操作其实是很繁琐的。今天使用`ssh-copy-id`来获得服务器的信任。


### 使用 `ssh-keygen` 命令生成公钥和秘钥

ssh公钥认证是ssh认证的方式之一。通过公钥认证可实现ssh免密码登陆，git的ssh方式也是通过公钥进行认证的。





## 参考地址

* [ssh-copy-id端口问题](http://www.cnblogs.com/xia/archive/2013/03/22/2975998.html)

* [ssh-keygen AND ssh-copy-id用法](https://blog.csdn.net/wos1002/article/details/56483277)

* [ssh-copy-id帮你建立信任](http://roclinux.cn/?p=2551)