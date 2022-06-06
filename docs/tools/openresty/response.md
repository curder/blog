# 输出响应体


HTTP响应报文分为三个部分：
1. 响应行
2. 响应头 
3. 响应体
 

对于 HTTP 响应体的输出，在 OpenResty 中调用 [`ngx.say`](https://github.com/openresty/lua-nginx-module#ngxsay) 或 [`ngx.print`](https://github.com/openresty/lua-nginx-module#ngxprint) 即可。

经过查看官方 wiki ，这两者都是输出响应体，区别是 ngx.say 会对输出响应体多输出一个 \n 。

如果用的是浏览器完成的功能调试，使用这两着是没有区别的。

但是如果使用各种终端工具，这时候使用 `ngx.say` 明显就更方便了。


## `ngx.say` 与 `ngx.print` 均为异步输出

当调用 `ngx.say` 后并不会立刻输出响应体。

参考下面的例子：

```nginx
server {
    listen    80;
    server_name 127.0.0.1;
    
    location = /say {
        default_type text/html;
        content_by_lua_block {
            ngx.print("hello ")
            ngx.sleep(1)
            ngx.say("the world")
        }
    }
}
```

测试：

```bash
curl http://127.0.0.1/say
# 
# hello the world
```


## `nginx.print` 输出table

利用 ngx.print 的特性了，它的输入参数可以是单个或多个字符串参数，也可以是 table 对象。

```bash
server {
    listen    80;
    server_name 127.0.0.1;
    
    location = /say {
        default_type text/html;
        content_by_lua_block {
            local table = {
                 "hello, ",
                 {
                   "world: ", 
                   true, 
                   " or ", 
                   false, 
                   {": ", nil}
                  }
             }
             ngx.print(table)
        }
    }
}
```

测试：

```bash
curl http://127.0.0.1/say
#
# hello, world: true or false:
```

也就是说当有非常多碎片数据时，没有必要一定连接成字符串后再进行输出。

完全可以直接存放在 table 中，用数组的方式把这些碎片数据统一起来，直接调用 [`ngx.print(table)`](https://github.com/openresty/lua-nginx-module#ngxprint) 即可。

这种方式效率更高，并且更容易被优化。
