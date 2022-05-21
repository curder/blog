# 使用yum方式安装和配置MySQL

## 安装MySQL


### 安装 8.0

```bash
rpm -Uvh https://repo.mysql.com/mysql80-community-release-el7-3.noarch.rpm
sed -i 's/enabled=1/enabled=0/' /etc/yum.repos.d/mysql-community.repo # 启用MySQL 8社区版
sudo yum --enablerepo=mysql80-community install mysql-community-server
```
> 如果在安装的过程中遇到`MySQL Upgrade process failed - The GPG keys listed for the "MySQL 8.0 Community Server" repository are already installed but they are not correct for this repository.` 错误可以执行：`rpm --import https://repo.mysql.com/RPM-GPG-KEY-mysql-2022` 命令，[具体查看这里](https://forums.cpanel.net/threads/mysql-upgrade-process-failed-the-gpg-keys-listed-for-the-mysql-8-0-community-server-repository-are-already-installed-but-they-are-not-correct-for.697213/)。

## 安装MySQL 5.7

使用yum命令之前，需要安装MySQL5.7的rpm仓库。执行下面的命令安装MySQL

```bash
wget https://dev.mysql.com/get/mysql57-community-release-el7-11.noarch.rpm
rpm -ivh mysql57-community-release-el7-11.noarch.rpm
sudo yum install -y mysql-server
```

## 启动MySQL

### 守护进程方式MySQL

执行下面的命令启动`mysql`并使其在CentOS系统启动时运行。

```bash
sudo systemctl start mysqld && sudo systemctl enable mysqld
```

## 配置MySQL

- 获取安装时初始化密码

    ```bash
    sudo grep 'temporary password' /var/log/mysqld.log
    ```

- 登录并重设**root**账户密码

    ```bash
    mysql -uroot -p # 回车输入上面获取到的密码

    ALTER USER 'root'@'localhost' IDENTIFIED BY 'MyNewPassword1!';
    ```

- 授权新用户

    ```bash
    CREATE USER 'new_user'@'localhost' IDENTIFIED BY 'CKHbYiEpZokM9yB7ojqPUikSLX4P!8Y';
    GRANT ALL PRIVILEGES ON new_user_database.* TO 'new_user'@'localhost';
    ```

## 检查MySQL

### 检查端口

MySQL已经启动并在3306端口上运行，可以使用netstat命令检查。

```bash
sudo netstat -plntu |grep 3306
```

#### 检查进程

检查系统进程使用`ps`命令。

```bash
sudo ps aux |grep mysql
```

至此，CentOS下安装`mysql`就安装好了。

## 参考链接

- [A Quick Guide to Using the MySQL Yum Repository](https://dev.mysql.com/doc/mysql-yum-repo-quick-guide/en/)
