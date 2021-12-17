"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1055],{3005:(e,a,n)=>{n.r(a),n.d(a,{data:()=>s});const s={key:"v-db08fc1c",path:"/languages/laravel/laravel-project-initialize-readme-template.html",title:"Laravel 项目README",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"1. 下载",slug:"_1-下载",children:[]},{level:2,title:"2. 环境文件",slug:"_2-环境文件",children:[]},{level:2,title:"3. Composer",slug:"_3-composer",children:[]},{level:2,title:"4. NPM/Yarn",slug:"_4-npm-yarn",children:[]},{level:2,title:"5. 创建数据库",slug:"_5-创建数据库",children:[]},{level:2,title:"6. artisan命令",slug:"_6-artisan命令",children:[]},{level:2,title:'7. NPM Run "*"',slug:"_7-npm-run",children:[]},{level:2,title:"8. PHPUnit",slug:"_8-phpunit",children:[]},{level:2,title:"9. Storage:link",slug:"_9-storage-link",children:[]},{level:2,title:"10. 登录",slug:"_10-登录",children:[]},{level:2,title:"Web服务器配置",slug:"web服务器配置",children:[{level:3,title:"Nginx",slug:"nginx",children:[]},{level:3,title:"Apache",slug:"apache",children:[]}]},{level:2,title:"其他优化",slug:"其他优化",children:[]}],filePathRelative:"languages/laravel/laravel-project-initialize-readme-template.md",git:{updatedTime:1639727806e3,contributors:[{name:"curder",email:"q.curder@gmail.com",commits:1}]}}},3090:(e,a,n)=>{n.r(a),n.d(a,{default:()=>E});var s=n(6252);const l=(0,s.uE)('<h1 id="laravel-项目readme" tabindex="-1"><a class="header-anchor" href="#laravel-项目readme" aria-hidden="true">#</a> Laravel 项目README</h1><h2 id="_1-下载" tabindex="-1"><a class="header-anchor" href="#_1-下载" aria-hidden="true">#</a> 1. 下载</h2><p>推荐使用<code>git</code> 对应的<code>master</code>分支上获取项目的最新代码，使用命令<code>git clone https://github.com/curder/example</code>。</p><h2 id="_2-环境文件" tabindex="-1"><a class="header-anchor" href="#_2-环境文件" aria-hidden="true">#</a> 2. 环境文件</h2><p>在项目的根目录中附带一个<code>.env.example</code>文件，请将其拷贝重命名为<code>.env</code>。可以使用如下命令完成操作<code>cp .env.example .env</code>。</p><blockquote><p>注意：确保您的系统上显示隐藏的文件。</p></blockquote><h2 id="_3-composer" tabindex="-1"><a class="header-anchor" href="#_3-composer" aria-hidden="true">#</a> 3. Composer</h2><p>laravel项目依赖通过<code>[composer](http://getcomposer.org/)</code>工具进行管理。</p><p>第一步是通过在终端中进入到项目中并输入以下命令来安装依赖</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">composer</span> <span class="token function">install</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="_4-npm-yarn" tabindex="-1"><a class="header-anchor" href="#_4-npm-yarn" aria-hidden="true">#</a> 4. NPM/Yarn</h2>',11),r=(0,s.Uk)("为了安装用于前端开发的JavaScript包，您需要使用"),i={href:"https://www.npmjs.com/",target:"_blank",rel:"noopener noreferrer"},c=(0,s._)("code",null,"Node",-1),d=(0,s.Uk)("包管理器"),p=(0,s.Uk)("，或者可选的"),o={href:"https://code.facebook.com/posts/1840075619545360",target:"_blank",rel:"noopener noreferrer"},t=(0,s.Uk)("Yarn包装管理器"),h=(0,s.Uk)("（推荐）"),u=(0,s.uE)('<p>如果您只安装了npm，则必须从项目的根目录运行此命令：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>如果您安装了<code>Yarn</code>，请从项目的根目录运行此操作</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">yarn</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="_5-创建数据库" tabindex="-1"><a class="header-anchor" href="#_5-创建数据库" aria-hidden="true">#</a> 5. 创建数据库</h2><p>在服务器上创建数据库，然后更新项目根目录下的<code>.env</code>文件上如下的相关行：</p><div class="language-dotenv ext-dotenv line-numbers-mode"><pre class="language-dotenv"><code>DB_CONNECTION=mysql\nDB_HOST=127.0.0.1\nDB_PORT=3306\nDB_DATABASE=homestead\nDB_USERNAME=homestead\nDB_PASSWORD=secret\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>更新上面的行已完成数据库相关设置。</p><h2 id="_6-artisan命令" tabindex="-1"><a class="header-anchor" href="#_6-artisan命令" aria-hidden="true">#</a> 6. artisan命令</h2><p>我们要做的第一件事就是设置 Laravel 在进行加密时使用的密钥。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>php artisan key:generate\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>应该看到一条绿色消息，指出您的密钥已成功生成，以及你应该看到<code>.env</code>文件中的<code>app_key</code>变量反映出来。</p><p>现在是时候查看数据库连接信息是否正确。运行内置的迁移来创建数据库表</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>php artisan migrate\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>如果没有看到错误，应该会看到每个迁移表的消息，而不是数据库连接信息很可能不正确。</p><p>运行数据库迁移文件以添加一些默认数据</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>php artisan db:seed\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>应该得到每个迁移文件的消息，并且应该可以看到数据库表中的信息。</p><h2 id="_7-npm-run" tabindex="-1"><a class="header-anchor" href="#_7-npm-run" aria-hidden="true">#</a> 7. NPM Run &quot;*&quot;</h2><p>既然已经拥有数据库表和默认行，则需要构建样式和脚本。</p>',20),b=(0,s.Uk)("这些文件是使用laravel mix生成的，"),m={href:"https://laravel.0x123.com/zh/docs/5.5/mix",target:"_blank",rel:"noopener noreferrer"},g=(0,s.Uk)("laravel mix"),v=(0,s.Uk)("是许多工具的包装，并且在项目的根目录下运行"),_=(0,s._)("strong",null,"webpack.mix.js",-1),x=(0,s.Uk)("。通过执行下面的命令："),f=(0,s.uE)('<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> run <span class="token operator">&lt;</span>command<span class="token operator">&gt;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>可用的命令列在<code>package.json</code>文件的<code>scripts</code>键下的顶部。</p><p>您将在屏幕上看到大量信息，然后在最后提供一张表格，说明编译的内容和文件的位置。</p><p>此时您已完成，您应该能够在本地浏览器中查看该项目并查看该项目。</p><h2 id="_8-phpunit" tabindex="-1"><a class="header-anchor" href="#_8-phpunit" aria-hidden="true">#</a> 8. PHPUnit</h2><p>安装项目后，确保运行测试套件以确保所有部件都正常工作。</p><p>在项目根目录下运行下面的命令</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>phpunit\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>您会看到每个数百个测试都会出现一个点<code>.</code>，然后在最后提供通过测试的数量。全新的安装应该没有失败。</p><h2 id="_9-storage-link" tabindex="-1"><a class="header-anchor" href="#_9-storage-link" aria-hidden="true">#</a> 9. Storage:link</h2><p>安装项目后，您必须运行此命令以链接您的公用存储文件夹以进行用户文件上传</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>php artisan storage:link\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="_10-登录" tabindex="-1"><a class="header-anchor" href="#_10-登录" aria-hidden="true">#</a> 10. 登录</h2><p>在项目安装完成后，您可以在浏览器中访问它，点击导航栏右侧的登录按钮。</p><p>管理员账号信息是：</p><p>用户名：<code>admin@admin.com</code></p><p>密码：<code>123456</code></p><p>成功登录后将被自动重定向到后端。</p><p>如果之前在数据库迁移文件中更改了这些值，那么显然应该使用更新的值。</p><h2 id="web服务器配置" tabindex="-1"><a class="header-anchor" href="#web服务器配置" aria-hidden="true">#</a> Web服务器配置</h2><h3 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx" aria-hidden="true">#</a> Nginx</h3><p>如果当前环境使用的是 <code>Nginx</code>，请在config配置中加入以下内容，它将会将所有请求都引导到 <code>index.php</code> 单入口文件。</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>location / {\n    try_files $uri $uri/ /index.php?$query_string;\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="apache" tabindex="-1"><a class="header-anchor" href="#apache" aria-hidden="true">#</a> Apache</h3><p>项目使用 <code>public/.htaccess</code> 文件来为前端控制器提供隐藏了 <code>index.php</code> 的优雅链接。如果当前环境使用了 <code>Apache</code> 作为Web服务器，请务必启用 <code>mod_rewrite</code> 模块，让服务器能够支持 <code>.htaccess</code> 文件的解析。</p><p>如果项目附带的 <code>.htaccess</code> 文件不起作用，就尝试用下面的方法代替</p><div class="language-conf ext-conf line-numbers-mode"><pre class="language-conf"><code>Options +FollowSymLinks\nRewriteEngine On\n\nRewriteCond %{REQUEST_FILENAME} !-d\nRewriteCond %{REQUEST_FILENAME} !-f\nRewriteRule ^ index.php [L]\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="其他优化" tabindex="-1"><a class="header-anchor" href="#其他优化" aria-hidden="true">#</a> 其他优化</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>php artisan config:cache <span class="token comment"># 配置信息缓存</span>\nphp artisan route:cache <span class="token comment"># 路由缓存</span>\nphp artisan optimize <span class="token comment"># 类映射加载优化</span>\n<span class="token function">composer</span> dumpautoload <span class="token comment"># 自动加载优化</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>',29),k={},E=(0,n(3744).Z)(k,[["render",function(e,a){const n=(0,s.up)("OutboundLink");return(0,s.wg)(),(0,s.iD)(s.HY,null,[l,(0,s._)("p",null,[r,(0,s._)("a",i,[c,d,(0,s.Wm)(n)]),p,(0,s._)("a",o,[t,(0,s.Wm)(n)]),h]),u,(0,s._)("p",null,[b,(0,s._)("a",m,[g,(0,s.Wm)(n)]),v,_,x]),f],64)}]])},3744:(e,a)=>{a.Z=(e,a)=>{const n=e.__vccOpts||e;for(const[e,s]of a)n[e]=s;return n}}}]);