# OpenResty 之 Hello World

在使用OpenResty时常常搭配lua脚本实现逻辑，例如使用 [`content_by_lua_block` 指令](https://github.com/openresty/lua-nginx-module#content_by_lua_block)直接返回一个 `Hello World!` 字符串。

```nginx
worker_processes  1;        #nginx worker 数量
error_log logs/error.log;   #指定错误日志文件路径
events {
    worker_connections 1024;
}

http {
    server {
        #监听端口，若80端口已被占用，则需要修改
        listen 80;
        location / {
            default_type text/html;
            
            content_by_lua_block {
                ngx.say("Hello World!")
            }
        }
    }
}
```

使用curl命令访问查看效果：

```bash
curl http://localhost -i
```

```txt
HTTP/1.1 200 OK
Date: Tue, 31 May 2022 09:32:25 GMT
Content-Type: text/html
Transfer-Encoding: chunked
Connection: keep-alive

Hello World!
```