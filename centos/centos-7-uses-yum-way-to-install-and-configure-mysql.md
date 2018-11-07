## CentOS7使用yum方式安装和配置MySQL

以安装 MySQL 5.7 为例。

## 安装MySQL


### 使用yum命令安装MySQL

使用yum命令之前，需要安装MySQL5.7的rpm仓库。执行下面的命令安装MySQL

```
wget https://dev.mysql.com/get/mysql57-community-release-el7-11.noarch.rpm
rpm -ivh mysql57-community-release-el7-11.noarch.rpm
sudo yum install -y mysql-server
```


## 启动MySQL


### 守护进程方式MySQL

执行下面的命令启动`mysql`并使其在CentOS系统启动时运行。
```
sudo systemctl start mysqld && sudo systemctl enable mysqld
```

### 使用supervisord管理进程

[supervisord](/centos/how-to-use-supervisord-manager-processes.md)的进程管理参考这里。

#### MySQL的supervisord配置文件

默认的 supervisord 的进程文件保存在`/etc/supervisord.d/mysql.ini`，内容如下：

```
[program:mysql]
command=/usr/sbin/mysqld --user=mysql
user=root
autostart=true
autorestart=true
stdout_logfile=/var/log/mysql.out.log
stderr_logfile=/var/log/mysql.err.log
```


#### 重载配置

```
supervisorctl reread && supervisorctl update
```
执行完上面的命令，可以看到控制台会输出如下结果

```
mysql: available
mysql: added process group
```

至此使用 supervisord 管理`mysql`进程已经完成。


## 配置MySQL

- 获取安装时初始化密码

    ```
    sudo grep 'temporary password' /var/log/mysqld.log
    ```

- 登录并重设**root**账户密码

    ```
    mysql -uroot -p # 回车输入上面获取到的密码

    ALTER USER 'root'@'localhost' IDENTIFIED BY 'MyNewPassword1!';
    ```

- 授权新用户

    ```
    CREATE USER 'new_user'@'localhost' IDENTIFIED BY 'CKHbYiEpZokM9yB7ojqPUikSLX4P!8Y';
    GRANT ALL PRIVILEGES ON new_user_database.* TO 'new_user'@'localhost';
    ```

## 检查MySQL

### 检查端口

MySQL已经启动并在3306端口上运行，可以使用netstat命令检查。

```
sudo netstat -plntu |grep 3306
```


#### 检查进程

检查系统进程使用`ps`命令。

```
sudo ps aux |grep mysql
```


至此，CentOS下安装`mysql`就安装好了。


## 参考链接

- [A Quick Guide to Using the MySQL Yum Repository](https://dev.mysql.com/doc/mysql-yum-repo-quick-guide/en/)
