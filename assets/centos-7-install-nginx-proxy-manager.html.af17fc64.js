import{_ as e,r as t,o as i,c as l,b as n,a as o,F as c,d as s,e as r}from"./app.79187c9e.js";const p={},d=n("h1",{id:"\u5B89\u88C5\u548C\u7B80\u5355\u914D\u7F6E-nginx-proxy-manager",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u5B89\u88C5\u548C\u7B80\u5355\u914D\u7F6E-nginx-proxy-manager","aria-hidden":"true"},"#"),s(" \u5B89\u88C5\u548C\u7B80\u5355\u914D\u7F6E Nginx Proxy Manager")],-1),u=n("h2",{id:"\u524D\u7F6E\u6761\u4EF6",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u524D\u7F6E\u6761\u4EF6","aria-hidden":"true"},"#"),s(" \u524D\u7F6E\u6761\u4EF6")],-1),m=s("\u5B89\u88C5 "),v={href:"https://nginxproxymanager.com/",target:"_blank",rel:"noopener noreferrer"},k=s("Nginx Proxy Manager"),b=s(" \u65F6\uFF0C\u9700\u8981\u5148\u5B89\u88C5\u597D Nginx\u3002"),_=r(`<h2 id="\u5B89\u88C5-nginx-proxy-manager" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5-nginx-proxy-manager" aria-hidden="true">#</a> \u5B89\u88C5 Nginx Proxy Manager</h2><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3&quot;</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u914D\u7F6E\u4E3B\u673A\u53CD\u5411\u4EE3\u7406" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u4E3B\u673A\u53CD\u5411\u4EE3\u7406" aria-hidden="true">#</a> \u914D\u7F6E\u4E3B\u673A\u53CD\u5411\u4EE3\u7406</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>server {
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u9ED8\u8BA4\u767B\u5F55\u7528\u6237\u540D\u548C\u5BC6\u7801\uFF1A</p><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>Email:    admin@example.com
Password: changeme
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function g(x,y){const a=t("ExternalLinkIcon");return i(),l(c,null,[d,u,n("p",null,[m,n("a",v,[k,o(a)]),b]),_],64)}var S=e(p,[["render",g],["__file","centos-7-install-nginx-proxy-manager.html.vue"]]);export{S as default};
