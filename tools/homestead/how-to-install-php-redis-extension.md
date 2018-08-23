# Homestead安装phpredis扩展

## 编译php redis扩展

下面以编译php7.2版本为例，执行下面的命令之前先切换到`root`用户。

```
git clone https://github.com/phpredis/phpredis.git

cd phpredis

/usr/bin/phpize7.2

./configure --with-php-config=/usr/bin/php-config7.2

make && make install
```

安装好的`redis.so`会存放在`/usr/lib/php/20170718/`目录下。

如果编译的不是这个版本的php，可以使用下面的命令获取扩展路径:

```
php -i|grep extension_dir
```

## 引入扩展

```
sudo echo 'extension=redis.ini' > /etc/php/7.2/mods-available/redis.ini
sudo ln -s /etc/php/7.2/mods-available/redis.ini /etc/php/7.2/fpm/conf.d/20-reids.ini
```

## 重启进程

通过下面的命令重启php-fpm进程，打印`phpinfo();`查看是否成功安装拓展。

```
sudo systemctl restart php7.2-fpm.service
```

> 如果是其他php扩展使用相同的方式即可。


## 参考链接

* [Homestead安装phpredis扩展](https://mudew.com/20180223/Homestead%E5%AE%89%E8%A3%85phpredis%E6%89%A9%E5%B1%95/)
