# 利用scp远程下载文件或文件夹

在使用命令操作服务器的时候，常常会需要上传文件或者文件夹
到服务器或者从服务器下载文件或者文件夹，这个时候我们可以借助`scp`命令轻松完成。


## scp 命令

```
scp [-1246BCpqrv] [-c cipher] [-F ssh_config] [-i identity_file] [-l limit] [-o ssh_option] [-P port] [-S program] [[user@]host1:]file1 ... [[user@]host2:]file2

DESCRIPTION :scp copies files between hosts on a network.  
```

## 相关示例

### 文件拷贝

#### 从服务器下载文件

```
scp username@servername:/server_path/filename /local_path/local_destination
```

例如： `scp luo@192.168.1.1:/home/luo/test/dump.tar.gz /tmp/test`，把`192.168.1.1`上的`/home/luo/test/dump.tar.gz`的文件下载到`/tmp/test`。


#### 上传本地文件到服务器

```
scp /path/local_filename username@servername:/server_path
```

例如： `scp /Users/luo/test/dump.tar.gz  luo@192.168.1.1:/tmp/test/` 把本机`/Users/luo/test/`目录下的`dump.tar.gz`文件上传到`192.168.1.1`这台服务器上的`/tmp/test/`目录中。


### 文件夹拷贝

相比文件的拷贝，在使用`scp`的时候文件夹的拷贝多了一个`-r`参数。

#### 从服务器下载整个目录

```
scp -r username@servername:remote_dir/ /tmp/local_dir
```

例如:`scp -r luo@192.168.1.1:/tmp/ /Users/luo/test`，把服务器`192.168.1.1`上的`/tmp`目录下拷贝到本地`/Users/luo/test`目录下。


#### 上传目录到服务器

```
scp  -r /tmp/local_dir username@servername:remote_dir
```

例如：`scp -r /Users/luo/test luo@192.168.1.1:/tmp/test/`把当前目录下的`/Users/luo/test`目录上传到服务器的`/tmp/test/` 目录。







