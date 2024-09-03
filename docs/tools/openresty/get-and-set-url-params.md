# 获取和设置 uri 和请求主体的参数

## 获取请求 uri 和请求主体的参数

首先看一下官方 API 文档，获取一个 `uri` 有两个方法：[ngx.req.get_uri_args](https://github.com/openresty/lua-nginx-module#ngxreqget_uri_args)
、[ngx.req.get_post_args](https://github.com/openresty/lua-nginx-module#ngxreqget_post_args)，二者主要的区别是参数来源有区别。

参考下面例子：

```nginx
server {
   listen    80;
   server_name  127.0.0.1;

   location = /print_param {
       content_by_lua_block {
           local arg = ngx.req.get_uri_args()
           for k,v in pairs(arg) do
               ngx.say("[GET] key:", k, " v:", v)
           end

           ngx.req.read_body() -- 获取POST请求时 解析 `body` 参数之前一定要先读取 `body`
           local arg = ngx.req.get_post_args()
           for k,v in pairs(arg) do
               ngx.say("[POST] key:", k, " v:", v)
           end
       }
   }
}
```

```bash
curl 'http://127.0.0.1/print_param?a=1&key=value' -d 'b=2&key=value' # 执行请求
#
#[GET] key:a v:1
#[GET] key:key v:value
#[POST] key:key v:value
#[POST] key:b v:2
```

从上面的例子中，可以很明显看到两个函数 `ngx.req.get_uri_args`、`ngx.req.get_post_args` 获取数据来源是有明显区别的，前者来自 `uri` 请求参数，而后者来自 `post` 请求主体内容。

## 传递请求 uri 和请求主体的参数

获取到请求参数，是为了需要这些参数来通过添加逻辑完成业务控制目的。uri 内容传递过程中是需要调用 `ngx.encode_args` 进行规则转义。

参看下面例子：

```nginx
server {
    listen    80;
    server_name  127.0.0.1;

    # 方法辅助打印uri和请求主体中的参数
    location = /print_param {
        content_by_lua_block {
            local arg = ngx.req.get_uri_args()
            for k,v in pairs(arg) do
                ngx.say("[GET] key:", k, " v:", v)
            end

            ngx.req.read_body() -- 获取POST请求时 解析 `body` 参数之前一定要先读取 `body`
            local arg = ngx.req.get_post_args()
            for k,v in pairs(arg) do
                ngx.say("[POST] key:", k, " v:", v)
            end
        }
    }

    location = /test {
        content_by_lua_block {
        local res = ngx.location.capture('/print_param', {
                method = ngx.HTTP_POST,
                args = ngx.encode_args({
                    a = 1, key = 'value'
                }),
                body = ngx.encode_args({
                    b = 2, key = 'value'
                })
            })
            ngx.say(res.body)
        }
    }
}
```

输出结果：

```bash
curl http://127.0.0.1/test # 执行请求

#
#[GET] key:a v:1
#[GET] key:key v:value
#[POST] key:b v:2
#[POST] key:key v:value
```

对于 `ngx.location.capture` 这里有个小技巧，`args` 参数可以接受字符串或 Lua 表的，这样代码就更加简洁直观。

```nginx {24,25}
server {
    listen    80;
    server_name  127.0.0.1;

    location = /print_param {
        content_by_lua_block {
        local arg = ngx.req.get_uri_args()
            for k,v in pairs(arg) do
                ngx.say("[GET] key:", k, " v:", v)
            end

            ngx.req.read_body() -- 获取POST请求时 解析 `body` 参数之前一定要先读取 `body`
            local arg = ngx.req.get_post_args()
            for k,v in pairs(arg) do
                ngx.say("[POST] key:", k, " v:", v)
            end
    }
    }

    location = /test {
        content_by_lua_block {
        local res = ngx.location.capture('/print_param', {
                    method = ngx.HTTP_POST,
                    args = {a = 1, key = 'value'},
                    body = {b = 2, key = 'value'}
            })
            ngx.say(res.body)
        }
    }
}
```

输出结果：

```bash
curl http://127.0.0.1/test # 执行命令，得到跟使用 ngx.encode_args 相同的结果
#
#[GET] key:a v:1
#[GET] key:key v:value
#[POST] key:b v:2
#[POST] key:key v:value
```
