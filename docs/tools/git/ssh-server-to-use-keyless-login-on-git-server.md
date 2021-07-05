# Git服务器上使用SSH协议授权免密码登录

在MaxOSX和CentOS上测试可以通过，Windows系统可以参考实现思路。

## 基本的SSH配置

### 使用命令生成SSH公钥和秘钥

```
ssh-keygen -t rsa -C "your_email@example.com" -f your_email_rsa
```

执行上面的命令会在当前用户的家目录下生成两个文件：`~/.ssh/your_email_rsa`秘钥和`~/.ssh/your_email_rsa.pub`公钥。

> 其中参数`-C`的作用是提供一个备注，`-f`参数的作用是指定要生成文件名。更多参数可以使用`ssh-keygen --help`查看。

### 拷贝内容到第三方Git平台

#### 获取SSH公钥内容

通过下面的命令，获取上面使用`ssh-keygen`命令生成的公钥内容并拷贝。

```
cat ~/.ssh/your_email_rsa.pub
```

#### 将公钥内容复制至代码托管平台上

这里以GitHub为例，进入 [GiHub](https://github.com/) --> [Setting](https://github.com/settings/profile) --> [SSH and GPG keys](https://github.com/settings/keys) ，点击 [New SSH key](https://github.com/settings/ssh/new) 按钮。

- 在 **Title** 文本框中输入一个标识字符
- 在 **Key** 文本框粘贴刚才复制的公钥字符串，即`YOUR_NAME.pub`文件内容，按 `Add SSH Key` 按钮完成操作。

![将公钥内容复制到代码托管平台](/assets/github-save-ssh-key.png)

### 验证是否成功授权

在使用 `git` 命令与服务端进行交互之前，可以先验证下客户端和服务器是否握手成功。使用下面的命令验证 SSH 公钥是否正常。

```
ssh -T git@github.com
```

如果正常的情况会提示 ` Hi curder-blog! You've successfully authenticated, but GitHub does not provide shell access.`

但是在新装的机器上发生了一些问题，报错信息是 `Permission denied (publickey).`很明显是失败了。

修改SSH配置文件，`vim ~/.ssh/config`（如果没有此文件，可以打开终端，输入`touch ~/.ssh/config`生成此文件），配置域名并指定认证文件。

```
Host github.com
    HostName github.com
    User git
    IdentityFile ~/.ssh/your_email_rsa
    Port 22
```
> 如果 git 仓库机器的ssh端口不是默认的`22`，需要配置SSH配置`~/.ssh/config`的**Port**的值为当前环境的值。

当我们使用ssh连接的时候，使用的认证文件是我们刚刚定义的，特别注意这里的`Host`、`HostName`、`Port`和`IdentityFile`，不要写错。

再次执行`ssh -T git@github.com`的时候，报错`Bad owner or permissions on ~/.ssh/config`。

从错误提示不难看出是权限出了问题，通过命令授权`chown $USER ~/.ssh/config && chmod 644 ~/.ssh/config`。

再次执行`ssh -T git@github.com`则返回正常的欢迎信息。

至此，GIT服务器上使用SSH协议授权免密钥登录已经完成，可以欢快的 `pull && push`啦😎😎

上面说到的情况是一个GitHub对应一个公钥、私钥。那么当我们需要在其他设备上也能免密码登录授权呢？

答案是在其他设备上使用上面的方式重新走一遍流程应该也能成功。

但是实际的情况往往是比较复杂的，这里依然以 GitHub 为例。

1. 拥有多个 GitHub 账户
2. 已经配置了账户公钥，还需要给非自己账户下的项目配置部署公钥

此时，又应该怎么操作呢？

## 在同一设备上配置多个公钥

> 一个公钥只能配置一个账户，一个账户可以关联多个公钥。比如当拥有多个设备，每个设备上可以生成一个公钥和对应的账户相关联，关联后此公钥便不能与其它的账户或项目进行关联。如果需要更换关联账户，请先在公钥设置里解绑公钥。

### 生成第二个公钥

```
ssh-keygen -t rsa -C "your_secondemail@email.com" -f ~/.ssh/second_rsa
```

> 注意将此处的『youre_secondemail@example.com』 换成您的个人邮箱，这里的文件名以`second_rsa`为例。

```
Host github.com
    HostName github.com
    User git
    IdentityFile ~/.ssh/YOUR_NAME
    Port 22

Host second
    HostName github.com
    User git
    IdentityFile ~/.ssh/second_rsa  // 生成的第二个公钥
    Prot 22
```
> 如果 git 仓库机器的ssh端口不是默认的`22`，需要配置SSH配置`~/.ssh/config`的**Port**的值为当前环境的值。

### 克隆代码需要注意的地方

当克隆 GitHub 上的某个仓库时，之前的 Clone 地址是：

```
git clone git@github.com:curder/test.git
```

现在需要将 Clone 地址修改为：

```
git clone second:curder/test.git
```

> 命令行中的`second`是在ssh配置文件中`~/.ssh/config`中配置的Host的值。

## 参考地址

- [SSH 公钥设置](https://coding.net/help/doc/git/ssh-key.html)
- [SSH Config 那些你所知道和不知道的事](https://deepzz.com/post/how-to-setup-ssh-config.html)
- [git/ssh捋不清的几个问题](http://www.cnblogs.com/hustskyking/p/problems-in-git-when-ssh.html)
