# 获取请求主体

在 Nginx 的典型应用场景中，几乎都是只读取 HTTP 头即可，例如负载均衡、正反向代理等场景。

但是对于 API Server 或者 Web Application ，对 body 可以说就比较敏感了。

由于 OpenResty 基于 Nginx ，所以天然的对请求 body 的读取细节与其他成熟 Web 框架有些不同。

### 最简单的 “Hello xxx”

先来构造最简单的一个请求，POST 名字给服务端，服务端应答一个 `Hello xxx`。

```nginx {9}
http {
    # ...
    server {
        listen    80;
        server_name 127.0.0.1;

        location = /req.body {
            content_by_lua_block {
                ngx.req.read_body()
                local data = ngx.req.get_body_data()
                ngx.say("Hello "..data)
            }
        }
    }
}
```

> 使用 [`ngx.req.get_body_data()`](https://github.com/openresty/lua-nginx-module#ngxreqget_body_data) 读请求体，会出现读取不到直接返回 `nil` 的情况。
> 
> 如果请求体尚未被读取，务必先调用 [`ngx.req.read_body`](https://github.com/openresty/lua-nginx-module#ngxreqread_body)

测试：

```bash
curl http://127.0.0.1/req.body -d Curder
#
# Hello Curder
```

由于 Nginx 是为了解决负载均衡场景诞生的，所以它默认是不读取 body 的行为，会对 API Server 和 Web Application 场景造成一些影响。

根据需要正确读取、丢弃 body 对 OpenResty 开发是至关重要的。

