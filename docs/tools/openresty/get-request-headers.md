# 获取请求头

通过 [`ngx.req.get_headers()`](https://github.com/openresty/lua-nginx-module#ngxreqget_headers) 方法获取请求头，它返回一个包含所有当前请求标头的 Lua 表。

```nginx{15-21}
worker_processes  1;        #nginx worker 数量
error_log logs/error.log;   #指定错误日志文件路径
events {
    worker_connections 1024;
}

http {
    server {
        #监听端口，若80端口已被占用，则需要修改
        listen 80;
        server_name 127.0.0.1;
        location = /req.headers {
            default_type text/html;
            
            content_by_lua_block {
                -- 获取请求头table
                local headers_table = ngx.req.get_headers()
                for k, v in pairs(headers_table) do
                    ngx.say(k.. ":" ..v)
                end
            }
        }
    }
}
```

测试：

```bash
curl 'http://127.0.0.1/req.headers' \
  -H 'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9' \
  -H 'Accept-Language: zh-CN' \
  -H 'Cache-Control: no-cache' \
  -H 'Pragma: no-cache' \
  -H 'Proxy-Connection: keep-alive' \
  -H 'Sec-GPC: 1' \
  -H 'Upgrade-Insecure-Requests: 1' \
  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.5005.61 Safari/537.36'
#
# pragma:no-cache
# proxy-connection:keep-alive
# sec-gpc:1
# upgrade-insecure-requests:1
# user-agent:Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.5005.61 Safari/537.36
# host:127.0.0.1
# accept:text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9
# accept-language:zh-CN
# cache-control:no-cache 
```
