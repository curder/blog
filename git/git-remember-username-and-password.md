## Git记住用户名和密码

在使用git服务的时候，每次`git pull`或`git push`的时候会需要频繁的输入用户名和密码，如果频繁跟仓库进行交互的话就更加麻烦了。

## 使用ssh授权

可以参考 [Git服务器上使用SSH协议授权免密码登录](/git/ssh-server-to-use-keyless-login-on-git-server.md) 配置一下公钥。

在实际的使用中比较常用的是ssh授权，那么如果使用用户名密码授权的方式如何进行免密操作呢？

## 使用http或https协议

这种操作在windows或unix下是不安全的，具体可以查看git的[文档说明](https://git-scm.com/book/zh/v2/Git-%E5%B7%A5%E5%85%B7-%E5%87%AD%E8%AF%81%E5%AD%98%E5%82%A8)，推荐使用SSH认证的方式。

```
# 全局范围配置生效
git config --global credential.helper store # 如果是MacOSX，建议将值：`store`换成`osxkeychain`

# 如果是对单独项目进行配置可以进入到项目目录下使用命令
git config --local credential.helper store # 如果是MacOSX，建议将值：`store`换成`osxkeychain`
```
> 配置完后，拉取或提交一次代码输入用户名密码后，通过上面的配置：
* 在Ubuntu、CentOS和MacOSX等类Unix系统，相关的用户名和密码等敏感信息被明文存储在`~/.git-credentials`文件里。**MacOSX系统不推荐使用`store`配置，而更应该使用功能`osxkeychain`配置**
