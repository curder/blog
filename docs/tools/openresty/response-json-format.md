# 返回JSON格式

## 使用Lua脚本

使用 `cjson.encode()` 返回Lua的table数据。

```nginx
worker_processes  1;
error_log  logs/error.log error;    # 日志级别
events {
    worker_connections  1024;
}

http {
    server {
        listen    80;
        server_name 127.0.0.1;
        location / {
            default_type application/json;
            content_by_lua_block {
                local cjson = require "cjson"
                local res = {code=ngx.HTTP_OK}
                res['status'] = true
                res['message'] = 'OK'
                ngx.say(cjson.encode(res)) -- 返回JSON
            }
        }
    }
}
```

## 直接返回JSON字符串

```nginx
worker_processes  1;
error_log  logs/error.log error;    # 日志级别
events {
    worker_connections  1024;
}

http {
    server {
        listen    80;
        server_name 127.0.0.1;
        location / {
            default_type application/json;
            return 200 '{"status":true,"code":200,"message":"OK"}';
        }
    }
}
```
