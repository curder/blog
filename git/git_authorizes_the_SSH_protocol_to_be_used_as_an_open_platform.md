# Git授权SSH协议免密操作开放平台

在使用Github或者Coding代码托管平台的提交代码时需要输入用户名和密码，因为操作比较频繁，重复输入用户名密码费时费力，所以我们需要配置免密管理托管平台的数据。

本文将总结基本SSH配置、多平台SSH账号配置和同一平台下的多账号配置。

参考地址：[让你的Git使用上ssh协议授权](https://segmentfault.com/a/1190000002627706)

## 基本的SSH配置

### 生成SSH密钥

```
ssh-keygen -t rsa -C 'your_email@domain.com' -f ~/.ssh/your_name
```

> 将上面的`your_email@domain.com`换成你自己的
> `-f`参数指定生成的密匙存放的路径，保证目录下不重复。

执行完上面的参数将会生成两个文件`~/.ssh/your_name`和`~/.ssh/your_name.pub`

### 修改SSH配置

```
vim ~/.ssh/config
```

添加如下代码：

```
Host github.com
User your_email@domain.com
IdentityFile ~/.ssh/your_name

Host git.coding.net
User your_email@domain.com
IdentityFile ~/.ssh/your_name
```
> 注意：此时引用的文件是密钥文件，而不是公钥文件，即没有`.pub`后缀。

### 将公钥复制到托管平台

#### 获取公钥内容

```
cat ~/.ssh/your_name.pub
```

通过上面的命令获取到公钥的内容。

#### 添加公钥至托管平台并测试

* GitHub

登录[Github](https://github.com/settings/profile)的`Settings`左侧的[SSH and GPG keys](https://github.com/settings/keys)。

点击`New SSH Key`按钮，在 **Title** 文本框中输入任意字符（建议输入有意义的字符），在 **Key** 文本框粘贴上一步中获得的公钥字符串，最后按`Add SSH key`按钮完成操作。

**测试**

```
ssh -T git@github.com
```

成功后的提示应该是：

```
Hi xxxxxx! You've successfully authenticated, but GitHub does not provide shell access.
```

* Coding

登录[Coding](https://coding.net/user/account/setting/basic)的`个人设置`左侧的[SSH 公钥](https://coding.net/user/account/setting/keys)。

在**公钥命令**文本框中输入任意字符(建议输入有意义的字符)，在 **公钥内容**文本框粘贴上一步获得的公钥字符串，选择公钥有效期或者直接勾选**永久有效**，最后按 `添加` 按钮完成操作。

**测试**

```
ssh -T git@git.coding.net
```

成功后的提示应该是：

```
Warning: Permanently added the RSA host key for IP address '***.***.***.***' to the list of known hosts.
Coding 提示: Hello xxxxxx, You've connected to Coding.net via SSH. This is a personal key.
xxxxxx，你好，你已经通过 SSH 协议认证 Coding.net 服务，这是一个个人公钥
```

至此，基本的SSH配置已经完成，使用SSH协议提交代码至当前账户的操作就不需要填写用户名和密码了。


## 同一平台下的多账号配置

以GitHub为例，当存在多个Github账号，我们需要每个账号都能正常操作GitHub的数据。

### 生成指定名字的密钥

```
ssh-keygen -t rsa -C "your_email@domain.com" -f ~/.ssh/your_name_github
ssh-keygen -t rsa -C "your_other_email@domain.com" -f ~/.ssh/your_other_name_github
```

> 将上面的`your_email@doamin.com`和 `your_other_email@domain.com`换成你自己的
> `-f`参数指定生成的密匙存放的路径，保证目录下不重复。

执行完上面的操作后将会生成四个文件

* `~/.ssh/your_name_github` 和 `~/.ssh/your_name_github.pub`

* `~/.ssh/you_other_name_github` 和 `~/.ssh/you_other_name_github.pub`

### 将公钥复制到托管平台

#### 分别获取两个账号的公钥内容

```
cat ~/.ssh/your_name_github.pub

cat ~/.ssh/you_other_name_github.pub
```

#### 修改SSH配置文件

```
vim ~/.ssh/config
```

添加如下代码：

```
Host you_name.github.com
HostName github.com
User git
IdentityFile ~/.ssh/your_name_github

Host your_other_name.github.com
HostName github.com
User git
IdentityFile ~/.ssh/your_other_name_github
```

#### 添加公钥至托管平台

通过上面的命令分别获取到两个账号的公钥的内容。

使用两个账号分别登录[Github](https://github.com/settings/profile)的`Settings`左侧的[SSH and GPG keys](https://github.com/settings/keys)。

点击`New SSH Key`按钮，在 **Title** 文本框中输入任意字符（建议输入有意义的字符），在 **Key** 文本框粘贴上一步中获得的公钥字符串，最后按`Add SSH key`按钮完成操作。

> 这里一定要注意不要填写错误，同一账号生成的公钥放在相同的账号的设置里。

### 修改SSH的URL

例如原来的url是：

```
git@github.com:your_name/projectName.git
```

需要改成：

```
git@your_name.github.com:your_name/projectName.git
```

> `your_other_email` 的配置也是如此。

### 测试

```
ssh -T git@your_name.github.com
Hi xxxxxx! You've successfully authenticated, but GitHub does not provide shell access.


ssh -T git@you_other_name.github.com
Hi xxxxxx! You've successfully authenticated, but GitHub does not provide shell access.
```


### 配置多账号后修改旧仓库设置

如果在设置多账号之前已经设置了一个GitHub的SSH，然后把代码clone下来。

配置多账号后，原来的代码就无法提交。

此时进入原来clone的代码文件夹下，执行 `git remote -v`，查看到远程仓库资源库路径。

如：`git@github.com:your_email/projectName.git`

** 解决方案：**

执行`git remote remove origin`删除该远程路径

再执行`git remote add origin git@your_email.github.com:your_email/projectName.git`添加上正确的远程仓库。








## 多平台多账号SSH账号配置

假如我们有两个账号，分别在GitHub和Coding平台。我们想给SSH配置上免密操作。

### 生成指定名字的密钥

```
ssh-keygen -t rsa -C "your_email@domain.com" -f ~/.ssh/your_name
ssh-keygen -t rsa -C "your_other_email@domain.com" -f ~/.ssh/your_other_name
```

> 将上面的`your_email@domain.com`、`your_other@domain.com`换成你自己的
> `-f`参数指定生成的密匙存放的路径，保证目录下不重复。

执行完上面的参数将会生成四个文件`~/.ssh/your_name`和`~/.ssh/your_name.pub`与`~/.ssh/your_other_name`和`~/.ssh/your_other_name.pub`

### 将公钥复制到托管平台

#### 修改SSH配置文件

```
vim ~/.ssh/config
```

添加如下代码：

```
# first 
Host your_name.github.com
HostName github.com
IdentityFile ~/.ssh/your_name

Host your_name.coding.net
HostName git.coding.net
IdentityFile ~/.ssh/your_name


# Second

Host your_other_name.github.com
HostName github.com
IdentityFile ~/.ssh/your_other_name

Host your_other_name.coding.net
HostName git.coding.net
IdentityFile ~/.ssh/your_other_name
```

> 配置SSH，请求域名`github.com`的域名将使用指定的文件密钥。


#### 获取公钥内容

```
cat ~/.ssh/your_name.pub
cat ~/.ssh/your_other_name.pub
```

> 注意：这里获取的公钥的内容。

通过上面的命令获取到公钥的内容。

#### 添加公钥至托管平台

分别将上面拿到的公钥写入各托管仓库的SSH设置中。

##### Coding
登录[Coding](https://coding.net/user/account/setting/basic)的`个人设置`左侧的[SSH 公钥](https://coding.net/user/account/setting/keys)。

在**公钥命令**文本框中输入任意字符(建议输入有意义的字符)，在 **公钥内容**文本框粘贴上一步获得的公钥字符串，选择公钥有效期或者直接勾选**永久有效**，最后按 `添加` 按钮完成操作。


##### 测试

```
ssh -T git@your_name.github.com
ssh -T git@your_other_name.github.com
ssh -T git@your_name.coding.net
ssh -T git@your_other_name.coding.net
```

**Coding** 成功后看到如下信息：

```
Warning: Permanently added the RSA host key for IP address '***.***.***.***' to the list of known hosts.
Coding 提示: Hello xxxxxx, You've connected to Coding.net via SSH. This is a personal key.
xxxxxx，你好，你已经通过 SSH 协议认证 Coding.net 服务，这是一个个人公钥
```

** GitHub** 成功后看到如下信息：

```
Hi xxxxxx! You've successfully authenticated, but GitHub does not provide shell access.
```

## 总结

其实，不管是针对账号和平台的配置不在乎对`~/.ssh/config`文件的编辑，理解它的实现原理很重要。