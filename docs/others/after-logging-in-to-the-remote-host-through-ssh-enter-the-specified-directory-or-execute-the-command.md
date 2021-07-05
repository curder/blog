# SSH登陆远程主机后进入指定目录或执行命令

通过在终端中执行下面的命令：

```bash
ssh user@hostname -t 'cd /var/www/html/; bash --login'
ssh user@hostname -t 'ls -l; bash --login'
```

## 参考链接

* [SSH登陆远程主机后进入指定目录或执行命令](https://blog.csdn.net/fight4gold/article/details/50327383)
