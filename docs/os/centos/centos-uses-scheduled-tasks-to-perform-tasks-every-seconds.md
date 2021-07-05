# Linux下使用定时任务每隔N秒钟执行任务

前一段时间做了一个项目对定是请求实时性要求比较高，需要精确到秒级发送HTTP请求。总结一下使用Linux的`crontab`实现的一种方式。

## 使用脚本死循环的方式

可能需要考虑什么时候开始执行脚本和更加方便的结束脚本执行，具体涉及到的文件有：

* `/path/start_refresh_data.sh` 开始执行的脚本

* `/path/stop_data_refresh.sh` 停止执行的脚本

### 脚本内容

#### 启动脚本`start_refresh_data.sh`

```bash
#!/bin/bash

# php脚本路径
php_bin="/usr/bin/php"

# artisan路径
artisan_file="/path/laravel/"

while true
do
    ${php_bin} ${artisan_file} in
    sleep 1
done
```

> 脚本很简单，只是死循环的执行一个`laravel`框架的一个artisan命令。

#### 暂停脚本`/path/stop_data_refresh.sh`

```bash
#!/bin/bash

/bin/pkill -f start_refresh_data.sh
```

> 通过匹配脚本名称杀死进程。

### 定时任务

通过执行命令`crontab -e`，写入到文件中。

```bash
0 12 * * * nohup /bin/bash /path/start_data_refresh.sh &
00 00 * * * /bin/bash /path/stop_data_refresh.sh
```

> 上面的定时任务是每天中午12点开始执行任务，晚上12点结束。


值得注意的是，执行`start_data_refresh.sh`脚本的时候，**不能设定为每分钟执行**，可以选择某个时间点执行。

这样在执行`stop_data_refresh.sh`脚本的时候才不至于出现在当前这一分钟内不执行，到了下一分钟又开始执行`start_data_refresh.sh`脚本的情况。

如果您有更好的解决方案，欢迎分享。
