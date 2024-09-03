import{_ as i,M as r,p as t,q as d,R as e,t as a,N as s,a1 as o}from"./framework-ff09ffed.js";const c={},v=e("h1",{id:"安装-nova",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#安装-nova","aria-hidden":"true"},"#"),a(" 安装 Nova")],-1),u={href:"https://nova.laravel.com",target:"_blank",rel:"noopener noreferrer"},p=e("h2",{id:"安装前的准备",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#安装前的准备","aria-hidden":"true"},"#"),a(" 安装前的准备")],-1),h=e("h3",{id:"软件依赖",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#软件依赖","aria-hidden":"true"},"#"),a(" 软件依赖")],-1),m=e("ul",null,[e("li",null,"Composer"),e("li",null,"Laravel Framework 5.8+"),e("li",null,"Laravel Mix"),e("li",null,"Node.js & NPM")],-1),b=e("code",null,"$99/项目",-1),g=e("code",null,"$199/项目",-1),_={href:"https://nova.laravel.com/licenses",target:"_blank",rel:"noopener noreferrer"},k=o(`<h3 id="安装-laravel-项目" tabindex="-1"><a class="header-anchor" href="#安装-laravel-项目" aria-hidden="true">#</a> 安装 laravel 项目</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">composer</span> global require laravel/installer

laravel new laravel-nova
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),f=e("code",null,"composer",-1),x={href:"https://getcomposer.org/",target:"_blank",rel:"noopener noreferrer"},q=e("h2",{id:"安装-nova-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#安装-nova-1","aria-hidden":"true"},"#"),a(" 安装 nova")],-1),N=e("h2",{id:"下载-nova-源代码并放入到-laravel-nova-源代码中",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#下载-nova-源代码并放入到-laravel-nova-源代码中","aria-hidden":"true"},"#"),a(" 下载 nova 源代码并放入到 laravel-nova 源代码中")],-1),w={href:"https://nova.laravel.com/releases",target:"_blank",rel:"noopener noreferrer"},j=e("code",null,"nova-2.0.0.zip",-1),B=e("code",null,"laravel-nova",-1),L=e("code",null,"nova",-1),D=o(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.
├── app
├── artisan
├── bootstrap
├── composer.json
├── composer.lock
├── config
├── database
├── node_modules
├── nova
├── package.json
├── phpunit.xml
├── public
├── resources
├── routes
├── server.php
├── storage
├── tests
├── vendor
├── webpack.mix.js
└── yarn.lock
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="将-nova-文件夹添加到-git-忽略中" tabindex="-1"><a class="header-anchor" href="#将-nova-文件夹添加到-git-忽略中" aria-hidden="true">#</a> 将 nova 文件夹添加到 git 忽略中</h2><p>将<code>laravel-nova</code>项目中的<code>.gitignore</code>文件中添加一个行</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/nova
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="修改项目的-composer-json-文件" tabindex="-1"><a class="header-anchor" href="#修改项目的-composer-json-文件" aria-hidden="true">#</a> 修改项目的 composer.json 文件</h2><p>在 composer.json 文件中添加</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;repositories&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;path&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./nova&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后, 在<code>composer.json</code>文件添加 <code>laravel/nova</code> 到<code>require</code>中:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;require&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;laravel/nova&quot;</span><span class="token operator">:</span> <span class="token string">&quot;*&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="执行项目更新" tabindex="-1"><a class="header-anchor" href="#执行项目更新" aria-hidden="true">#</a> 执行项目更新</h2><p>执行下面的命令更新 composer 依赖。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">composer</span> update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,12),y=["src"],E=o(`<p>执行成功后，再执行下面的命令发布一些 nova 的文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan nova:install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>修改项目数据库配置<code>.env</code>内容。</p><div class="language-dotenv line-numbers-mode" data-ext="dotenv"><pre class="language-dotenv"><code>DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=homestead
DB_USERNAME=homestead
DB_PASSWORD=secret
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改完配置以后再执行数据库迁移命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan migrate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,6),$=["src"],R=o(`<h2 id="新增管理员并访问后台" tabindex="-1"><a class="header-anchor" href="#新增管理员并访问后台" aria-hidden="true">#</a> 新增管理员并访问后台</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan nova:user
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,2),S=["src"],T=e("p",null,[a("访问"),e("code",null,"https://laravel-nova.test/nova"),a("，出现如下结果:")],-1),A=["src"],O=["src"],C=e("h2",{id:"参考链接",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#参考链接","aria-hidden":"true"},"#"),a(" 参考链接")],-1),I={href:"https://laravel.com/docs/",target:"_blank",rel:"noopener noreferrer"},M={href:"https://nova.laravel.com/docs/",target:"_blank",rel:"noopener noreferrer"},V={href:"https://nova.laravel.com/licenses/",target:"_blank",rel:"noopener noreferrer"},P={href:"https://nova.laravel.com/releases/",target:"_blank",rel:"noopener noreferrer"},H={href:"https://learnku.com/docs/nova/",target:"_blank",rel:"noopener noreferrer"};function z(l,F){const n=r("ExternalLinkIcon");return t(),d("div",null,[v,e("p",null,[e("a",u,[a("Laravel nova"),s(n)]),a(" 提供了一个优雅的方式快速开发一个漂亮的后台管理系统，它使用 tailwindcss 驱动前端展示界面，后台使用 Laravel 框架。")]),p,h,m,e("p",null,[a("安装 laravel nova 之前，个人用户可能需要支付 "),b,a("，团队开发需要支付"),g,a("来"),e("a",_,[a("购买软件"),s(n)]),a("。")]),k,e("blockquote",null,[e("p",null,[a("运行完上面的命令，将活得一个新的 laravel 项目源代码。如果当前机器没有"),f,a("命令，可以"),e("a",x,[a("访问这里"),s(n)]),a("下载。")])]),q,N,e("p",null,[a("在"),e("a",w,[a("Nova 站点下载"),s(n)]),a("最新的 Releases 源代码。比如这里是："),j,a("文件，下载完后解压到上面安装的"),B,a("项目中，文件夹命名为："),L,a("，结构如下：")]),D,e("img",{src:l.$withBase("/images/languages/laravel/nova/how-to-installation-laravel-nova/laravel-nova-composer-update.png"),alt:""},null,8,y),E,e("img",{src:l.$withBase("/images/languages/laravel/nova/how-to-installation-laravel-nova/laravel-nova-artisan-migrate.png"),alt:""},null,8,$),R,e("img",{src:l.$withBase("/images/languages/laravel/nova/how-to-installation-laravel-nova/laravel-nova-create-user.png"),alt:""},null,8,S),T,e("img",{src:l.$withBase("/images/languages/laravel/nova/how-to-installation-laravel-nova/laravel-nova-login-page.png"),alt:""},null,8,A),e("img",{src:l.$withBase("/images/languages/laravel/nova/how-to-installation-laravel-nova/laravel-nova-dashboard.png"),alt:""},null,8,O),C,e("ul",null,[e("li",null,[e("a",I,[a("Laravel Documents"),s(n)])]),e("li",null,[e("a",M,[a("Laravel Nova Docs"),s(n)])]),e("li",null,[e("a",V,[a("Laravel Nova Licenses"),s(n)])]),e("li",null,[e("a",P,[a("Laravel Nova Releases"),s(n)])]),e("li",null,[e("a",H,[a("Laravel Nova 中文文档"),s(n)])])])])}const W=i(c,[["render",z],["__file","01-how-to-installation-laravel-nove.html.vue"]]);export{W as default};
