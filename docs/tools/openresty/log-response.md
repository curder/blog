# 日志输出

## 标准日志输出

OpenResty 的标准日志输出原句为 `ngx.log(log_level, ...)` ，几乎可以在任何 `ngx_lua` 阶段进行日志的输出。


```bash
worker_processes  1;
error_log  logs/error.log error;    # 日志级别
events {
    worker_connections  1024;
}

http {
    server {
        listen    80;
        location / {
            content_by_lua_block {
                local num = 55
                local str = "string"
                local obj
                ngx.log(ngx.ERR, "num:", num)
                ngx.log(ngx.INFO, " string:", str)
                print([[i am print]])
                ngx.log(ngx.ERR, " object:", obj)
            }
        }
    }
}
```

测试：

```bash
curl http://127.0.0.1/
#
# 2022/06/06 13:41:01 [error] 22325#22325: *2132 [lua] content_by_lua(default.conf:14):5: num:55, client: 127.0.0.1, server: 127.0.0.1, request: "GET / HTTP/1.1", host: "127.0.0.1"
# 2022/06/06 13:41:01 [error] 22325#22325: *2132 [lua] content_by_lua(default.conf:14):8:  object:nil, client: 127.0.0.1, server: 127.0.0.1, request: "GET / HTTP/1.1", host: "127.0.0.1" 
```

上面的例子，日志输出级别使用的 error，只有等于或大于这个级别的日志才会输出。

**这里还有一个知识点就是 OpenResty 里面的 `print` 语句是 `INFO` 级别**。

## 日志级别

有关 Nginx 的日志级别，请看下表：

```text
ngx.STDERR     -- 标准输出
ngx.EMERG      -- 紧急报错
ngx.ALERT      -- 报警
ngx.CRIT       -- 严重，系统故障，触发运维告警系统
ngx.ERR        -- 错误，业务不可恢复性错误
ngx.WARN       -- 告警，业务中可忽略错误
ngx.NOTICE     -- 提醒，业务比较重要信息
ngx.INFO       -- 信息，业务琐碎日志信息，包含不同情况判断等
ngx.DEBUG      -- 调试
```

以上常量，越往上等级越高。可以尝试将 nginx 错误日志级别修改为 `info`，然后重新执行一下测试用例，就可以看到全部日志输出结果了。

对于应用开发，一般使用 `ngx.INFO` 到 `ngx.CRIT` 就够了。生产中错误日志开启到 `error` 级别就够了。
