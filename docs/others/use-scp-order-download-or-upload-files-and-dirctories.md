# scp 跨机远程拷贝

在使用命令操作服务器的时候，常常会需要上传文件或者文件夹 到服务器或者从服务器下载文件或者文件夹，这个时候我们可以借助`scp`命令轻松完成。

`scp`是secure copy的简写，用于在Linux下进行远程拷贝文件的命令，和它类似的命令有cp，不过cp只是在本机进行拷贝不能跨服务器，而且scp传输是加密的。当服务器硬盘变为只读 `read only system`
时，用`scp`可以把文件移出来。

## scp 命令

### 命令格式

```bash
scp [参数] [原路径] [目标路径]
```

### 命令参数

```bash
scp [-1246BCpqrv] [-c cipher] [-F ssh_config] [-i identity_file] [-l limit] [-o ssh_option] [-P port] [-S program] [[user@]host1:]file1 ... [[user@]host2:]file2

DESCRIPTION :scp copies files between hosts on a network.  
```

* `-1` 强制scp命令使用协议ssh1

* `-2` 强制scp命令使用协议ssh2

* `-4` 强制scp命令只使用IPv4寻址

* `-6` 强制scp命令只使用IPv6寻址

* `-B` 使用批处理模式（传输过程中不询问传输口令或短语）

* `-C` 允许压缩。（将-C标志传递给ssh，从而打开压缩功能）

* `-p` 留原文件的修改时间，访问时间和访问权限。

* `-q` 不显示传输进度条。

* `-r` 递归复制整个目录。

* `-v` 详细方式显示输出。scp和ssh(1)会显示出整个过程的调试信息。这些信息用于调试连接，验证和配置问题。

* `-c` cipher 以cipher将数据传输进行加密，这个选项将直接传递给ssh。

* `-F` ssh_config 指定一个替代的ssh配置文件，此参数直接传递给ssh。

* `-i` identity_file 从指定文件中读取传输时使用的密钥文件，此参数直接传递给ssh。

* `-l` limit 限定用户所能使用的带宽，以Kbit/s为单位。

* `-o` ssh_option 如果习惯于使用ssh_config(5)中的参数传递方式，

* `-P` port 注意是大写的P, port是指定数据传输用到的端口号

* `-S` program 指定加密传输时所使用的程序。此程序必须能够理解ssh(1)的选项。

## 使用说明

### 从本地服务器复制到远程服务器

#### 复制文件

```bash
scp local_file remote_username@remote_ip:remote_folder

scp local_file remote_username@remote_ip:remote_file

scp local_file remote_ip:remote_folder

scp local_file remote_ip:remote_file
```

指定了用户名，命令执行后需要输入用户密码； 如果不指定用户名，命令执行后需要输入用户名和密码

#### 复制目录

```bash
scp -r local_folder remote_username@remote_ip:remote_folder

scp -r local_folder remote_ip:remote_folder
```

第1个指定了用户名，命令执行后需要输入用户密码； 第2个没有指定用户名，命令执行后需要输入用户名和密码；

> 从远程复制到本地的`scp`命令与上面的命令一样，只要将从本地复制到远程的命令后面2个参数互换顺序就行

## 相关示例

### 文件拷贝

#### 从远处复制文件到本地目录

```bash
scp username@servername:/server_path/filename /local_path/local_destination
```

例如： `scp luo@192.168.1.1:/home/luo/test/dump.tar.gz /tmp/test`，把`192.168.1.1`上的`/home/luo/test/dump.tar.gz`
的文件下载到`/tmp/test`。

#### 上传本地文件到远程机器指定目录

```bash
scp /path/local_filename username@servername:/server_path
```

例如： `scp /Users/luo/test/dump.tar.gz  luo@192.168.1.1:/tmp/test/` 把本机`/Users/luo/test/`目录下的`dump.tar.gz`
文件上传到`192.168.1.1`这台服务器上的`/tmp/test/`目录中。

### 从远处复制目录到本地

相比文件的拷贝，在使用`scp`的时候文件夹的拷贝多了一个`-r`参数。

#### 从服务器下载整个目录

```bash
scp -r username@servername:remote_dir /tmp/local_dir
```

例如:`scp -r luo@192.168.1.1:/tmp /Users/luo/test`，把服务器`192.168.1.1`上的`/tmp`目录下拷贝到本地`/Users/luo/test`目录下。

#### 上传本地目录到远程机器指定目录

```bash
scp -r /tmp/local_dir username@servername:remote_dir
```

例如：`scp -r /Users/luo/test luo@192.168.1.1:/tmp/test/`把当前目录下的`/Users/luo/test`目录上传到服务器的`/tmp/test/` 目录。

## 参考地址

- [/zh_CN/latest/tool/scp.html](http://linuxtools-rst.readthedocs.io/zh_CN/latest/tool/scp.html)

- [/no7dw/archive/2012/07/07/2580307.html](http://www.cnblogs.com/no7dw/archive/2012/07/07/2580307.html)



