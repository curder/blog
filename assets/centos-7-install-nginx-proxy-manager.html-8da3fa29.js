import{_ as e,M as t,p as i,q as l,R as n,t as s,N as c,a1 as r}from"./framework-7e09d608.js";const o={},p=n("h1",{id:"安装和简单配置-nginx-proxy-manager",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#安装和简单配置-nginx-proxy-manager","aria-hidden":"true"},"#"),s(" 安装和简单配置 Nginx Proxy Manager")],-1),d=n("h2",{id:"前置条件",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#前置条件","aria-hidden":"true"},"#"),s(" 前置条件")],-1),u={href:"https://nginxproxymanager.com/",target:"_blank",rel:"noopener noreferrer"},m=r(`<h2 id="安装-nginx-proxy-manager" tabindex="-1"><a class="header-anchor" href="#安装-nginx-proxy-manager" aria-hidden="true">#</a> 安装 Nginx Proxy Manager</h2><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3&quot;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">app</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> <span class="token string">&#39;jc21/nginx-proxy-manager:2.9.18&#39;</span>
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> unless<span class="token punctuation">-</span>stopped
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token comment"># These ports are in format &lt;host-port&gt;:&lt;container-port&gt;</span>
      <span class="token punctuation">-</span> <span class="token string">&#39;8000:80&#39;</span> <span class="token comment"># Public HTTP Port</span>
      <span class="token punctuation">-</span> <span class="token string">&#39;4430:443&#39;</span> <span class="token comment"># Public HTTPS Port</span>
      <span class="token punctuation">-</span> <span class="token string">&#39;81:81&#39;</span> <span class="token comment"># Admin Web Port</span>
      <span class="token comment"># Add any other Stream port you want to expose</span>
      <span class="token comment"># - &#39;21:21&#39; # FTP</span>
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token key atrule">DB_MYSQL_HOST</span><span class="token punctuation">:</span> <span class="token string">&quot;db&quot;</span>
      <span class="token key atrule">DB_MYSQL_PORT</span><span class="token punctuation">:</span> <span class="token number">3306</span>
      <span class="token key atrule">DB_MYSQL_USER</span><span class="token punctuation">:</span> <span class="token string">&quot;nginx_proxy_manager&quot;</span>
      <span class="token key atrule">DB_MYSQL_PASSWORD</span><span class="token punctuation">:</span> <span class="token string">&quot;nginx_proxy_manager_user_passoword&quot;</span>
      <span class="token key atrule">DB_MYSQL_NAME</span><span class="token punctuation">:</span> <span class="token string">&quot;nginx_proxy_manager&quot;</span>
      <span class="token comment"># Uncomment this if IPv6 is not enabled on your host</span>
      <span class="token comment"># DISABLE_IPV6: &#39;true&#39;</span>
    <span class="token comment"># Uncomment the next line if you uncomment anything in the section</span>
    <span class="token comment"># environment:</span>
      <span class="token comment"># Uncomment this if you want to change the location of </span>
      <span class="token comment"># the SQLite DB file within the container</span>
      <span class="token comment"># DB_SQLITE_FILE: &quot;/data/database.sqlite&quot;</span>

      <span class="token comment"># Uncomment this if IPv6 is not enabled on your host</span>
      <span class="token comment"># DISABLE_IPV6: &#39;true&#39;</span>

    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ./data<span class="token punctuation">:</span>/data
      <span class="token punctuation">-</span> ./letsencrypt<span class="token punctuation">:</span>/etc/letsencrypt
    <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> db

  <span class="token key atrule">db</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> <span class="token string">&#39;jc21/mariadb-aria:10.4.15&#39;</span>
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> unless<span class="token punctuation">-</span>stopped
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token key atrule">MYSQL_ROOT_PASSWORD</span><span class="token punctuation">:</span> <span class="token string">&#39;nginx_proxy_manager_root_password&#39;</span>
      <span class="token key atrule">MYSQL_DATABASE</span><span class="token punctuation">:</span> <span class="token string">&#39;nginx_proxy_manager&#39;</span>
      <span class="token key atrule">MYSQL_USER</span><span class="token punctuation">:</span> <span class="token string">&#39;nginx_proxy_manager&#39;</span>
      <span class="token key atrule">MYSQL_PASSWORD</span><span class="token punctuation">:</span> <span class="token string">&#39;nginx_proxy_manager_user_passoword&#39;</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ./data/mysql<span class="token punctuation">:</span>/var/lib/mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置主机反向代理" tabindex="-1"><a class="header-anchor" href="#配置主机反向代理" aria-hidden="true">#</a> 配置主机反向代理</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server {
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
        proxy_set_header Connection &quot;upgrade&quot;;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>默认登录用户名和密码：</p><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>Email:    admin@example.com
Password: changeme
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function v(k,b){const a=t("ExternalLinkIcon");return i(),l("div",null,[p,d,n("p",null,[s("安装 "),n("a",u,[s("Nginx Proxy Manager"),c(a)]),s(" 时，需要先安装好 Nginx。")]),m])}const g=e(o,[["render",v],["__file","centos-7-install-nginx-proxy-manager.html.vue"]]);export{g as default};
