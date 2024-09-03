# 安装和简单配置 Nginx Proxy Manager

## 前置条件

安装 [Nginx Proxy Manager](https://nginxproxymanager.com/) 时，需要先安装好 Nginx。

## 安装 Nginx Proxy Manager



```yml
version: "3"
services:
  app:
    image: 'jc21/nginx-proxy-manager:2.9.18'
    restart: unless-stopped
    ports:
      # These ports are in format <host-port>:<container-port>
      - '8000:80' # Public HTTP Port
      - '4430:443' # Public HTTPS Port
      - '81:81' # Admin Web Port
      # Add any other Stream port you want to expose
      # - '21:21' # FTP
    environment:
      DB_MYSQL_HOST: "db"
      DB_MYSQL_PORT: 3306
      DB_MYSQL_USER: "nginx_proxy_manager"
      DB_MYSQL_PASSWORD: "nginx_proxy_manager_user_passoword"
      DB_MYSQL_NAME: "nginx_proxy_manager"
      # Uncomment this if IPv6 is not enabled on your host
      # DISABLE_IPV6: 'true'
    # Uncomment the next line if you uncomment anything in the section
    # environment:
      # Uncomment this if you want to change the location of 
      # the SQLite DB file within the container
      # DB_SQLITE_FILE: "/data/database.sqlite"

      # Uncomment this if IPv6 is not enabled on your host
      # DISABLE_IPV6: 'true'

    volumes:
      - ./data:/data
      - ./letsencrypt:/etc/letsencrypt
    depends_on:
      - db

  db:
    image: 'jc21/mariadb-aria:10.4.15'
    restart: unless-stopped
    environment:
      MYSQL_ROOT_PASSWORD: 'nginx_proxy_manager_root_password'
      MYSQL_DATABASE: 'nginx_proxy_manager'
      MYSQL_USER: 'nginx_proxy_manager'
      MYSQL_PASSWORD: 'nginx_proxy_manager_user_passoword'
    volumes:
      - ./data/mysql:/var/lib/mysql
```


## 配置主机反向代理

```
server {
    listen 80;
    server_name npm.curder.com;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl;
    ssl_certificate /etc/nginx/ssl/curder.com/fullchain.pem;
    ssl_certificate_key /etc/nginx/ssl/curder.com/privkey.pem;

    server_name npm.curder.com;

    location / {
        proxy_pass http://127.0.0.1:81;

        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }
}
```

默认登录用户名和密码：

```txt
Email:    admin@example.com
Password: changeme
```