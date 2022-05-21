# 使用yum方式安装PHP

在CentOS基础库中不存在PHP 8.1，我们需要从`remi`的第三方仓库中安装它。


> 之所以推荐它是因为它非常方便切换PHP的版本。

更多仓库相关信息[参考这里](https://rpms.remirepo.net/)。

### 安装

```bash
yum -y install https://mirrors.aliyun.com/remi/enterprise/remi-release-7.rpm # 从阿里云镜像处安装remi源
sudo yum-config-manager --enable remi-php81 # 默认remi仓库禁用的，实际使用时启用
yum repolist all | grep enabled | grep php # 检查当前yum允许安装的PHP版本
sudo yum install -y php81 php81-php-fpm php81-php-gd php81-php-mbstring php81-php-mysqlnd php81-php-xml php81-php-opcache php81-php-pecl-zip php81-php-bcmath
sudo ln -s `which php81` /usr/bin/php # 建立软连接方便命令行使用
```

执行完上面的命令后，CentOS系统上已经安装了PHP 8.1, 安装好的`php81`目录在`/etc/opt/remi/php81`。

### 安装其他版本(optional)

再安装一个PHP 7.4 版本为例，执行下面的操作即可完成PHP8.0版本的安装，文件安装在 `/ect/opt/remi/php74`目录下。

```bash
sudo yum-config-manager --enable remi-php74
sudo yum install php74 php74-php-fpm php74-php-gd php74-php-mbstring php74-php-mysqlnd php74-php-xml php74-php-opcache php74-php-pecl-zip php74-php-bcmath
```

> 安装其他版本PHP的时候，需要注意修改php-fpm进程的端口。

### 配置php-fpm

```bash
export PHP_PATH=/etc/opt/remi/php81 # 指定PHP版本路径

sed -i 's/^;cgi.fix_pathinfo=1/cgi.fix_pathinfo=0/g' $PHP_PATH/php.ini
sed -i 's/^expose_php = On/expose_php = Off/g' $PHP_PATH/php.ini

## 替换进程执行者和执行所属主
sed -i 's/^user = apache/user = nginx/g' $PHP_PATH/php-fpm.d/www.conf
sed -i 's/^group = apache/group = nginx/g' $PHP_PATH/php-fpm.d/www.conf

sed -i 's/^;listen.owner = nobody/listen.owner = nginx/g' $PHP_PATH/php-fpm.d/www.conf
sed -i 's/^;listen.group = nobody/listen.group = nginx/g' $PHP_PATH/php-fpm.d/www.conf
sed -i 's/^;listen.mode = 0660/listen.mode = 0660/g' $PHP_PATH/php-fpm.d/www.conf

sed -i 's#^;env#env#g' $PHP_PATH/php-fpm.d/www.conf

unset PHP_PATH
```

```bash
sudo systemctl start php81-php-fpm.service # 启动PHP8.1
sudo systemctl enable php81-php-fpm.service # 开机自启动PHP8.1
```

## 检查php-fpm

检查端口是否正常打开运行：

```bash
sudo netstat -tunpl|grep 9000 
# sudo netstat -pl | grep php-fpm.sock # 或者查看socket文件
```

![PHP Fpm status check](./images/centos-7-uses-yum-way-to-install-and-configure-php-fpm/php-fpm-status-check.png)

至此，php-fpm 进程已经启动。
