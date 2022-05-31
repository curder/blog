# 与其他 location 配合

nginx 世界的 **location** 是异常强大的，毕竟 nginx 的主要应用场景是在负载均衡、API server，在不同 server、location 之间跳转是经常有需要的。

利用不同 **location** 的功能组合，可以完成内部调用、流水线方式跳转、外部重定向等几大不同方式。

## 内部调用

例如对数据库、内部公共函数的统一接口，可以把它们放到统一的 **location** 中。

通常情况下，为了保护这些内部接口，都会把这些接口设置为 `internal` 。

这样做最主要的好处是可以让这个内部接口相对独立，不受外界干扰。

`nginx.conf` 文件示例代码：

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
        location /internal/sum {
            internal; # 只允许内部调用

             # 这里做了一个求和运算只是一个例子，可以在这里完成一些数据库、
             # 缓存服务器的操作，达到基础模块和业务逻辑分离目的。
            content_by_lua_block {
                local args = ngx.req.get_uri_args()
                ngx.say(tonumber(args.a) + tonumber(args.b))
            }
        }

        location = / {
            content_by_lua_block {
                local res = ngx.location.capture(
                    "/internal/sum", {args={a=11, b=18}} # 给uri传递对应参数
                )
                ngx.say("status: ", res.status, " result: ", res.body)
            }
        }
    }
}
```

访问查看结果：

```bash
curl http://127.0.0.1 # status: 200 result: 11
```

并行请求

```nginx
worker_processes  1;        # nginx worker 数量
error_log logs/error.log;   # 指定错误日志文件路径
events {
    worker_connections 1024;
}

http {
    server {
        listen 80; # 监听端口，若80端口已被占用，则需要修改

        location = /internal/sum { # 求和
            internal;
            content_by_lua_block {
                ngx.sleep(0.1)
                local args = ngx.req.get_uri_args()
                ngx.print(tonumber(args.a) + tonumber(args.b))
            }
        }

        location = /internal/sub { # 求差
            internal;
            content_by_lua_block {
                ngx.sleep(0.1)
                local args = ngx.req.get_uri_args()
                ngx.print(tonumber(args.a) - tonumber(args.b))
            }
        }

        location = /parallels {
            content_by_lua_block {
                local start_time = ngx.now()
                local res1, res2 = ngx.location.capture_multi({
                    {"/internal/sum", {args={a=11, b=18}}},
                    {"/internal/sub", {args={a=11, b=18}}}
                })
                ngx.say("status: ", res1.status, " result: ", res1.body)
                ngx.say("status: ", res2.status, " result: ", res2.body)
                ngx.say("time used: ", ngx.now() - start_time)
            }
        }

        location = /queue {
            content_by_lua_block {
                local start_time = ngx.now()
                local res1 = ngx.location.capture_multi( {
                        {"/internal/sum", {args={a=11, b=18}}}
                    })
                local res2 = ngx.location.capture_multi( {
                        {"/internal/sub", {args={a=11, b=18}}}
                    })
                ngx.say("status: ", res1.status, " result: ", res1.body)
                ngx.say("status: ", res2.status, " result: ", res2.body)
                ngx.say("time used: ", ngx.now() - start_time)
            }
        }
    }
}
```

测试结果：

```txt
# 并行请求时间 `curl http://127.0.0.1/parallels`
status: 200 result: 29
status: 200 result: -7
time used: 0.099999904632568

# 队列请求时间 `curl http://127.0.0.1/queue`
status: 200 result: 29
status: 200 result: -7
time used: 0.20099997520447
```

利用 `ngx.location.capture_multi` 函数，直接完成了两个子请求并行执行。
当两个请求没有相互依赖，这种方法可以极大提高查询效率。
两个无依赖请求，各自是 100ms，顺序执行需要 200ms，但通过并行执行可以在 100ms 完成两个请求。
实际生产中查询时间可能没这么规整，但思想大同小异，这个特性是很有用的。

## 流水线方式跳转

现在的网络请求，已经变得越来越拥挤。各种不同 API 、下载请求混杂在一起，就要求不同厂商对下载的动态调整有各种不同的定制策略，而这些策略在一天的不同时间段，规则可能还不一样。这时候还可以效仿工厂的流水线模式，逐层过滤、处理。

示例代码：

```nginx
location ~ ^/static/([-_a-zA-Z0-9/]+).jpg {
    set $image_name $1;
    content_by_lua_block {
        ngx.exec("/download_internal/images/"
                .. ngx.var.image_name .. ".jpg");
    };
}

location /download_internal {
    internal;
    # 这里还可以有其他统一的 download 下载设置，例如限速等
    alias /some/other/path/download;
}
```
`ngx.exec` 方法与 `ngx.redirect` 是完全不同的，前者是个纯粹的内部跳转并且没有引入任何额外 HTTP 信号。

这里的两个 `location` 更像是流水线上工人之间的协作关系。第一环节的工人对完成自己处理部分后，直接交给第二环节处理人（实际上可以有更多环节），它们之间的数据流是定向的。

## 外部重定向

使用 `rewrite_by_lua_block` 指令可以执行外部重定向。

```bash
worker_processes  1;        #nginx worker 数量
error_log logs/error.log;   #指定错误日志文件路径
events {
    worker_connections 1024;
}

http {
    server {
        #监听端口，若80端口已被占用，则需要修改
        listen 80;
        location = /another {
            content_by_lua_block {
                ngx.say([[I am another uri]])
            }
        }

        location = / {
            rewrite_by_lua_block {
                return ngx.redirect('/another');
            }
        }
    }
}
```

执行测试，结果如下：

```bash
curl -i http://127.0.0.1 # 重定向到了 /another
HTTP/1.1 302 Moved Temporarily
Server: openresty/1.21.4.1
Date: Tue, 31 May 2022 10:29:46 GMT
Content-Type: text/html
Content-Length: 151
Connection: keep-alive
Location: /another

<html>
<head><title>302 Found</title></head>
<body>
<center><h1>302 Found</h1></center>
<hr><center>openresty/1.21.4.1</center>
</body>
</html>
```

```bash
curl -i http://127.0.0.1/another # 正常响应
HTTP/1.1 200 OK
Server: openresty/1.21.4.1
Date: Tue, 31 May 2022 10:29:54 GMT
Content-Type: text/plain
Transfer-Encoding: chunked
Connection: keep-alive

I am another uri
```

当使用浏览器访问页面 `http://127.0.0.1` 就可以发现浏览器会自动跳转到 `http://127.0.0.1/another`。

另外外部重定向是可以跨域名的。

例如从 A 网站跳转到 B 网站是绝对允许的。

在 CDN 场景的大量下载应用中，一般分为调度、存储两个重要环节。

调度就是通过根据请求方 IP 、下载文件等信息寻找最近、最快节点，应答跳转给请求方完成下载。g