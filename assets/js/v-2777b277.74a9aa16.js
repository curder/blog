"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3674],{4089:(a,n,e)=>{e.r(n),e.d(n,{data:()=>s});const s={key:"v-2777b277",path:"/languages/laravel/nova/how-to-installation-laravel-nove.html",title:"安装 Laravel Nova",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"安装前的准备",slug:"安装前的准备",children:[{level:3,title:"软件依赖",slug:"软件依赖",children:[]},{level:3,title:"安装 laravel 项目",slug:"安装-laravel-项目",children:[]}]},{level:2,title:"安装 nova",slug:"安装-nova",children:[]},{level:2,title:"下载 nova 源代码并放入到 laravel-nova 源代码中",slug:"下载-nova-源代码并放入到-laravel-nova-源代码中",children:[]},{level:2,title:"将 nova 文件夹添加到 git 忽略中",slug:"将-nova-文件夹添加到-git-忽略中",children:[]},{level:2,title:"修改项目的 composer.json 文件",slug:"修改项目的-composer-json-文件",children:[]},{level:2,title:"执行项目更新",slug:"执行项目更新",children:[]},{level:2,title:"新增管理员并访问后台",slug:"新增管理员并访问后台",children:[]},{level:2,title:"参考链接",slug:"参考链接",children:[]}],filePathRelative:"languages/laravel/nova/how-to-installation-laravel-nove.md",git:{updatedTime:1639727806e3,contributors:[{name:"curder",email:"q.curder@gmail.com",commits:1}]}}},9723:(a,n,e)=>{e.r(n),e.d(n,{default:()=>ra});var s=e(6252);const l=(0,s._)("h1",{id:"安装-laravel-nova",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#安装-laravel-nova","aria-hidden":"true"},"#"),(0,s.Uk)(" 安装 Laravel Nova")],-1),r={href:"https://nova.laravel.com",target:"_blank",rel:"noopener noreferrer"},o=(0,s.Uk)("Laravel nova"),p=(0,s.Uk)(" 提供了一个优雅的方式快速开发一个漂亮的后台管理系统，它使用 tailwindcss 驱动前端展示界面，后台使用 Laravel 框架。"),t=(0,s._)("h2",{id:"安装前的准备",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#安装前的准备","aria-hidden":"true"},"#"),(0,s.Uk)(" 安装前的准备")],-1),i=(0,s._)("h3",{id:"软件依赖",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#软件依赖","aria-hidden":"true"},"#"),(0,s.Uk)(" 软件依赖")],-1),c=(0,s._)("ul",null,[(0,s._)("li",null,"Composer"),(0,s._)("li",null,"Laravel Framework 5.8+"),(0,s._)("li",null,"Laravel Mix"),(0,s._)("li",null,"Node.js & NPM")],-1),u=(0,s.Uk)("安装 laravel nova 之前，个人用户可能需要支付 "),v=(0,s._)("code",null,"$99/项目",-1),d=(0,s.Uk)("，团队开发需要支付"),b=(0,s._)("code",null,"$199/项目",-1),m=(0,s.Uk)("来"),h={href:"https://nova.laravel.com/licenses",target:"_blank",rel:"noopener noreferrer"},g=(0,s.Uk)("购买软件"),k=(0,s.Uk)("。"),_=(0,s.uE)('<h3 id="安装-laravel-项目" tabindex="-1"><a class="header-anchor" href="#安装-laravel-项目" aria-hidden="true">#</a> 安装 laravel 项目</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">composer</span> global require laravel/installer\n\nlaravel new laravel-nova\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>',2),f=(0,s.Uk)("运行完上面的命令，将活得一个新的 laravel 项目源代码。如果当前机器没有"),x=(0,s._)("code",null,"composer",-1),U=(0,s.Uk)("命令，可以"),q={href:"https://getcomposer.org/",target:"_blank",rel:"noopener noreferrer"},w=(0,s.Uk)("访问这里"),j=(0,s.Uk)("下载。"),N=(0,s._)("h2",{id:"安装-nova",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#安装-nova","aria-hidden":"true"},"#"),(0,s.Uk)(" 安装 nova")],-1),L=(0,s._)("h2",{id:"下载-nova-源代码并放入到-laravel-nova-源代码中",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#下载-nova-源代码并放入到-laravel-nova-源代码中","aria-hidden":"true"},"#"),(0,s.Uk)(" 下载 nova 源代码并放入到 laravel-nova 源代码中")],-1),B=(0,s.Uk)("在"),D={href:"https://nova.laravel.com/releases",target:"_blank",rel:"noopener noreferrer"},W=(0,s.Uk)("Nova 站点下载"),y=(0,s.Uk)("最新的 Releases 源代码。比如这里是："),E=(0,s._)("code",null,"nova-2.0.0.zip",-1),O=(0,s.Uk)("文件，下载完后解压到上面安装的"),$=(0,s._)("code",null,"laravel-nova",-1),C=(0,s.Uk)("项目中，文件夹命名为："),R=(0,s._)("code",null,"nova",-1),A=(0,s.Uk)("，结构如下："),S=(0,s.uE)('<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.\n├── app\n├── artisan\n├── bootstrap\n├── composer.json\n├── composer.lock\n├── config\n├── database\n├── node_modules\n├── nova\n├── package.json\n├── phpunit.xml\n├── public\n├── resources\n├── routes\n├── server.php\n├── storage\n├── tests\n├── vendor\n├── webpack.mix.js\n└── yarn.lock\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h2 id="将-nova-文件夹添加到-git-忽略中" tabindex="-1"><a class="header-anchor" href="#将-nova-文件夹添加到-git-忽略中" aria-hidden="true">#</a> 将 nova 文件夹添加到 git 忽略中</h2><p>将<code>laravel-nova</code>项目中的<code>.gitignore</code>文件中添加一个行</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/nova\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="修改项目的-composer-json-文件" tabindex="-1"><a class="header-anchor" href="#修改项目的-composer-json-文件" aria-hidden="true">#</a> 修改项目的 composer.json 文件</h2><p>在 composer.json 文件中添加</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;repositories&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;path&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./nova&quot;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>然后, 在<code>composer.json</code>文件添加 <code>laravel/nova</code> 到<code>require</code>中:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;require&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;laravel/nova&quot;</span><span class="token operator">:</span> <span class="token string">&quot;*&quot;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="执行项目更新" tabindex="-1"><a class="header-anchor" href="#执行项目更新" aria-hidden="true">#</a> 执行项目更新</h2><p>执行下面的命令更新 composer 依赖。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">composer</span> update\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',12),T=["src"],P=(0,s.uE)('<p>执行成功后，再执行下面的命令发布一些 nova 的文件</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>php artisan nova:install\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>修改项目数据库配置<code>.env</code>内容。</p><div class="language-dotenv ext-dotenv line-numbers-mode"><pre class="language-dotenv"><code>DB_CONNECTION=mysql\nDB_HOST=127.0.0.1\nDB_PORT=3306\nDB_DATABASE=homestead\nDB_USERNAME=homestead\nDB_PASSWORD=secret\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>修改完配置以后再执行数据库迁移命令</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>php artisan migrate\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',6),M=["src"],z=(0,s.uE)('<h2 id="新增管理员并访问后台" tabindex="-1"><a class="header-anchor" href="#新增管理员并访问后台" aria-hidden="true">#</a> 新增管理员并访问后台</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>php artisan nova:user\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',2),H=["src"],Z=(0,s._)("p",null,[(0,s.Uk)("访问"),(0,s._)("code",null,"https://laravel-nova.test/nova"),(0,s.Uk)("，出现如下结果:")],-1),F=["src"],I=["src"],Y=(0,s._)("h2",{id:"参考链接",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#参考链接","aria-hidden":"true"},"#"),(0,s.Uk)(" 参考链接")],-1),G={href:"https://laravel.com/docs/",target:"_blank",rel:"noopener noreferrer"},J=(0,s.Uk)("Laravel Documents"),K={href:"https://nova.laravel.com/docs/",target:"_blank",rel:"noopener noreferrer"},Q=(0,s.Uk)("Laravel Nova Docs"),V={href:"https://nova.laravel.com/licenses/",target:"_blank",rel:"noopener noreferrer"},X=(0,s.Uk)("Laravel Nova Licenses"),aa={href:"https://nova.laravel.com/releases/",target:"_blank",rel:"noopener noreferrer"},na=(0,s.Uk)("Laravel Nova Releases"),ea={href:"https://learnku.com/docs/nova/",target:"_blank",rel:"noopener noreferrer"},sa=(0,s.Uk)("Laravel Nova 中文文档"),la={},ra=(0,e(3744).Z)(la,[["render",function(a,n){const e=(0,s.up)("OutboundLink");return(0,s.wg)(),(0,s.iD)(s.HY,null,[l,(0,s._)("p",null,[(0,s._)("a",r,[o,(0,s.Wm)(e)]),p]),t,i,c,(0,s._)("p",null,[u,v,d,b,m,(0,s._)("a",h,[g,(0,s.Wm)(e)]),k]),_,(0,s._)("blockquote",null,[(0,s._)("p",null,[f,x,U,(0,s._)("a",q,[w,(0,s.Wm)(e)]),j])]),N,L,(0,s._)("p",null,[B,(0,s._)("a",D,[W,(0,s.Wm)(e)]),y,E,O,$,C,R,A]),S,(0,s._)("img",{src:a.$withBase("/images/languages/laravel/nova/how-to-installation-laravel-nova/laravel-nova-composer-update.png"),alt:""},null,8,T),P,(0,s._)("img",{src:a.$withBase("/images/languages/laravel/nova/how-to-installation-laravel-nova/laravel-nova-artisan-migrate.png"),alt:""},null,8,M),z,(0,s._)("img",{src:a.$withBase("/images/languages/laravel/nova/how-to-installation-laravel-nova/laravel-nova-create-user.png"),alt:""},null,8,H),Z,(0,s._)("img",{src:a.$withBase("/images/languages/laravel/nova/how-to-installation-laravel-nova/laravel-nova-login-page.png"),alt:""},null,8,F),(0,s._)("img",{src:a.$withBase("/images/languages/laravel/nova/how-to-installation-laravel-nova/laravel-nova-dashboard.png"),alt:""},null,8,I),Y,(0,s._)("ul",null,[(0,s._)("li",null,[(0,s._)("a",G,[J,(0,s.Wm)(e)])]),(0,s._)("li",null,[(0,s._)("a",K,[Q,(0,s.Wm)(e)])]),(0,s._)("li",null,[(0,s._)("a",V,[X,(0,s.Wm)(e)])]),(0,s._)("li",null,[(0,s._)("a",aa,[na,(0,s.Wm)(e)])]),(0,s._)("li",null,[(0,s._)("a",ea,[sa,(0,s.Wm)(e)])])])],64)}]])},3744:(a,n)=>{n.Z=(a,n)=>{const e=a.__vccOpts||a;for(const[a,s]of n)e[a]=s;return e}}}]);