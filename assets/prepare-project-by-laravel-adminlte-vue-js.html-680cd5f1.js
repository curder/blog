import{_ as t,M as p,p as i,q as l,R as a,t as n,N as e,a1 as o}from"./framework-96b046e1.js";const c={},r=a("h1",{id:"使用laravel-adminlte-vue-js构建项目",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#使用laravel-adminlte-vue-js构建项目","aria-hidden":"true"},"#"),n(" 使用Laravel + adminlte + vue.js构建项目")],-1),d={href:"https://medium.com/@lojorider/prepare-project-by-laravel-adminlte-vue-js-644cab072909",target:"_blank",rel:"noopener noreferrer"},u=a("h2",{id:"本地开发环境",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#本地开发环境","aria-hidden":"true"},"#"),n(" 本地开发环境")],-1),h=a("li",null,"Laravel 5.6.16",-1),v=a("li",null,[n("PHP 7.1.13 "),a("ul",null,[a("li",null,"extension=php_openssl.dll"),a("li",null,"extension=php_pdo_mysql.dll")])],-1),m=a("li",null,"MySQL 5.7.30",-1),k={href:"https://github.com/acacha/adminlte-laravel",target:"_blank",rel:"noopener noreferrer"},g={href:"https://github.com/laravel/dusk",target:"_blank",rel:"noopener noreferrer"},b={href:"https://github.com/laravelcollective/html",target:"_blank",rel:"noopener noreferrer"},f={href:"https://github.com/Maatwebsite/Laravel-Excel",target:"_blank",rel:"noopener noreferrer"},x={href:"https://github.com/Intervention/image",target:"_blank",rel:"noopener noreferrer"},q={href:"https://github.com/tymondesigns/jwt-auth",target:"_blank",rel:"noopener noreferrer"},_=o(`<h2 id="创建项目" tabindex="-1"><a class="header-anchor" href="#创建项目" aria-hidden="true">#</a> 创建项目</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">composer</span> create-project --prefer-dist laravel/laravel adminlte-laravel <span class="token string">&quot;5.6.*&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>执行完上面的命令将生成一个以<code>adminlte-laravel</code>为目录的laravel项目</p></blockquote><h2 id="设置admin-lte包" tabindex="-1"><a class="header-anchor" href="#设置admin-lte包" aria-hidden="true">#</a> 设置admin-lte包</h2><p>在项目<code>adminlte-laravel</code>根目录下执行命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">composer</span> require <span class="token string">&quot;acacha/admin-lte-template-laravel&quot;</span> <span class="token punctuation">\\</span>
<span class="token operator">&amp;&amp;</span> php artisan vendor:publish <span class="token parameter variable">--tag</span><span class="token operator">=</span>adminlte <span class="token parameter variable">--force</span> <span class="token punctuation">\\</span>
<span class="token operator">&amp;&amp;</span> <span class="token function">composer</span> require <span class="token string">&quot;laravel/dusk&quot;</span> <span class="token parameter variable">--dev</span> <span class="token punctuation">\\</span>
<span class="token operator">&amp;&amp;</span> php artisan make:adminUserSeeder <span class="token punctuation">\\</span>
<span class="token operator">&amp;&amp;</span> <span class="token function">composer</span> require <span class="token string">&quot;laravelcollective/html&quot;</span> <span class="token punctuation">\\</span>
<span class="token operator">&amp;&amp;</span> <span class="token function">composer</span> dump-autoload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="编辑config-app-php配置文件" tabindex="-1"><a class="header-anchor" href="#编辑config-app-php配置文件" aria-hidden="true">#</a> 编辑<code>config/app.php</code>配置文件</h3><p>添加如下内容</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token punctuation">[</span>
    <span class="token comment">// ...</span>
    <span class="token string single-quoted-string">&#39;aliases&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
        <span class="token string single-quoted-string">&#39;Html&#39;</span> <span class="token operator">=&gt;</span> <span class="token class-name class-name-fully-qualified static-context">Spatie<span class="token punctuation">\\</span>Menu<span class="token punctuation">\\</span>Laravel<span class="token punctuation">\\</span>Html</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;Link&#39;</span> <span class="token operator">=&gt;</span> <span class="token class-name class-name-fully-qualified static-context">Spatie<span class="token punctuation">\\</span>Menu<span class="token punctuation">\\</span>Laravel<span class="token punctuation">\\</span>Link</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="执行命令" tabindex="-1"><a class="header-anchor" href="#执行命令" aria-hidden="true">#</a> 执行命令</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan adminlte:menu
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="升级excel包-可选" tabindex="-1"><a class="header-anchor" href="#升级excel包-可选" aria-hidden="true">#</a> 升级Excel包(可选)</h2><h3 id="执行命令-1" tabindex="-1"><a class="header-anchor" href="#执行命令-1" aria-hidden="true">#</a> 执行命令</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">composer</span> require <span class="token string">&quot;maatwebsite/excel&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="编辑config-app-php配置文件-1" tabindex="-1"><a class="header-anchor" href="#编辑config-app-php配置文件-1" aria-hidden="true">#</a> 编辑<code>config/app.php</code>配置文件</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token string single-quoted-string">&#39;aliases&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;Excel&#39;</span> <span class="token operator">=&gt;</span> <span class="token class-name class-name-fully-qualified static-context">Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Facades<span class="token punctuation">\\</span>Excel</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="升级图片管理-可选" tabindex="-1"><a class="header-anchor" href="#升级图片管理-可选" aria-hidden="true">#</a> 升级图片管理(可选)</h2><h3 id="执行命令-2" tabindex="-1"><a class="header-anchor" href="#执行命令-2" aria-hidden="true">#</a> 执行命令</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">composer</span> require <span class="token string">&quot;intervention/image&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="编辑config-app-php配置文件-2" tabindex="-1"><a class="header-anchor" href="#编辑config-app-php配置文件-2" aria-hidden="true">#</a> 编辑<code>config/app.php</code>配置文件</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token string single-quoted-string">&#39;aliases&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;Image&#39;</span> <span class="token operator">=&gt;</span> <span class="token class-name class-name-fully-qualified static-context">Intervention<span class="token punctuation">\\</span>Image<span class="token punctuation">\\</span>Facades<span class="token punctuation">\\</span>Image</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="执行命令-3" tabindex="-1"><a class="header-anchor" href="#执行命令-3" aria-hidden="true">#</a> 执行命令</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan vendor:publish <span class="token parameter variable">--provider</span><span class="token operator">=</span><span class="token string">&quot;Intervention\\Image\\ImageServiceProviderLaravel5&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="升级jwt-auth包" tabindex="-1"><a class="header-anchor" href="#升级jwt-auth包" aria-hidden="true">#</a> 升级jwt-auth包</h2><h3 id="执行命令-4" tabindex="-1"><a class="header-anchor" href="#执行命令-4" aria-hidden="true">#</a> 执行命令</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">composer</span> require <span class="token string">&quot;tymon/jwt-auth&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="编辑config-app-php配置文件-3" tabindex="-1"><a class="header-anchor" href="#编辑config-app-php配置文件-3" aria-hidden="true">#</a> 编辑<code>config/app.php</code>配置文件</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token string single-quoted-string">&#39;aliases&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;JWTAuth&#39;</span> <span class="token operator">=&gt;</span> <span class="token class-name class-name-fully-qualified static-context">Tymon<span class="token punctuation">\\</span>JWTAuth<span class="token punctuation">\\</span>Facades<span class="token punctuation">\\</span>JWTAuth</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;JWTFactory&#39;</span> <span class="token operator">=&gt;</span> <span class="token class-name class-name-fully-qualified static-context">Tymon<span class="token punctuation">\\</span>JWTAuth<span class="token punctuation">\\</span>Facades<span class="token punctuation">\\</span>JWTFactory</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="修改数据库配置" tabindex="-1"><a class="header-anchor" href="#修改数据库配置" aria-hidden="true">#</a> 修改数据库配置</h2><p>数据库配置文件为：<code>config\\database.php</code></p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token string single-quoted-string">&#39;charset&#39;</span> <span class="token operator">=&gt;</span> <span class="token function">env</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;DB_CHARSET&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;utf8mb4&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token string single-quoted-string">&#39;collation&#39;</span> <span class="token operator">=&gt;</span> <span class="token function">env</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;DB_COLLATION&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;utf8mb4_unicode_ci&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置本地-env" tabindex="-1"><a class="header-anchor" href="#配置本地-env" aria-hidden="true">#</a> 配置本地<code>.env</code></h3><p>mysql数据库的配置不支持utf8mb4</p><div class="language-dotenv line-numbers-mode" data-ext="dotenv"><pre class="language-dotenv"><code>DB_CHARSET=utf8
DB_COLLATION=utf8_unicode_ci
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>同时修改其他数据库配置信息，如:</p><div class="language-dotenv line-numbers-mode" data-ext="dotenv"><pre class="language-dotenv"><code>DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=homestead
DB_USERNAME=homestead
DB_PASSWORD=secret
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="生成数据" tabindex="-1"><a class="header-anchor" href="#生成数据" aria-hidden="true">#</a> 生成数据</h3><p>编辑<code>.\\database\\seeds\\DatabaseSeeder.php</code>，添加<code>$this-&gt;call(AdminUserSeeder::class);</code></p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token class-name static-context">AdminUserSeeder</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="运行命令" tabindex="-1"><a class="header-anchor" href="#运行命令" aria-hidden="true">#</a> 运行命令</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan migrate <span class="token parameter variable">--seed</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="启动本地服务器" tabindex="-1"><a class="header-anchor" href="#启动本地服务器" aria-hidden="true">#</a> 启动本地服务器</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan serv
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>地址: <code>http://127.0.0.1:8000/login</code> 邮箱: <code>admin@example.com</code> 密码：<code>123456</code></p><blockquote><p>邮箱和密码在迁移文件<code>database\\seeds\\AdminUserSeeder.php</code>中定义。</p></blockquote><h2 id="使用vuejs开发" tabindex="-1"><a class="header-anchor" href="#使用vuejs开发" aria-hidden="true">#</a> 使用vuejs开发</h2><p>用于在文件夹资源<code>resources/assets/js</code>上自动编译<code>*.vue</code>来编写vuejs文件。</p><h3 id="执行命令-5" tabindex="-1"><a class="header-anchor" href="#执行命令-5" aria-hidden="true">#</a> 执行命令</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span>
<span class="token function">npm</span> run <span class="token function">watch</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><h3 id="命令行运行命令" tabindex="-1"><a class="header-anchor" href="#命令行运行命令" aria-hidden="true">#</a> 命令行运行命令</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">composer</span> create-project --prefer-dist laravel/laravel adminlte-laravel <span class="token string">&quot;5.6.*&quot;</span> <span class="token punctuation">\\</span>
<span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> adminlte-laravel <span class="token punctuation">\\</span>
<span class="token operator">&amp;&amp;</span> <span class="token function">touch</span> config/menu.php <span class="token punctuation">\\</span>
<span class="token operator">&amp;&amp;</span> <span class="token function">composer</span> require <span class="token string">&quot;laravel/dusk&quot;</span> <span class="token punctuation">\\</span>
<span class="token operator">&amp;&amp;</span> <span class="token function">composer</span> require <span class="token string">&quot;acacha/admin-lte-template-laravel&quot;</span> <span class="token string">&quot;maatwebsite/excel&quot;</span> <span class="token string">&quot;intervention/image&quot;</span> <span class="token string">&quot;tymon/jwt-auth&quot;</span> <span class="token string">&quot;laravelcollective/html&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="编辑config-app-php" tabindex="-1"><a class="header-anchor" href="#编辑config-app-php" aria-hidden="true">#</a> 编辑<code>config/app.php</code></h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token string single-quoted-string">&#39;aliases&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;AdminLTE&#39;</span> <span class="token operator">=&gt;</span> <span class="token class-name class-name-fully-qualified static-context">Acacha<span class="token punctuation">\\</span>AdminLTETemplateLaravel<span class="token punctuation">\\</span>Facades<span class="token punctuation">\\</span>AdminLTE</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;Excel&#39;</span> <span class="token operator">=&gt;</span> <span class="token class-name class-name-fully-qualified static-context">Maatwebsite<span class="token punctuation">\\</span>Excel<span class="token punctuation">\\</span>Facades<span class="token punctuation">\\</span>Excel</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;Image&#39;</span> <span class="token operator">=&gt;</span> <span class="token class-name class-name-fully-qualified static-context">Intervention<span class="token punctuation">\\</span>Image<span class="token punctuation">\\</span>Facades<span class="token punctuation">\\</span>Image</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span> 
    <span class="token string single-quoted-string">&#39;JWTAuth&#39;</span> <span class="token operator">=&gt;</span> <span class="token class-name class-name-fully-qualified static-context">Tymon<span class="token punctuation">\\</span>JWTAuth<span class="token punctuation">\\</span>Facades<span class="token punctuation">\\</span>JWTAuth</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;JWTFactory&#39;</span> <span class="token operator">=&gt;</span> <span class="token class-name class-name-fully-qualified static-context">Tymon<span class="token punctuation">\\</span>JWTAuth<span class="token punctuation">\\</span>Facades<span class="token punctuation">\\</span>JWTFactory</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;Html&#39;</span> <span class="token operator">=&gt;</span> <span class="token class-name class-name-fully-qualified static-context">Spatie<span class="token punctuation">\\</span>Menu<span class="token punctuation">\\</span>Laravel<span class="token punctuation">\\</span>Html</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;Link&#39;</span> <span class="token operator">=&gt;</span> <span class="token class-name class-name-fully-qualified static-context">Spatie<span class="token punctuation">\\</span>Menu<span class="token punctuation">\\</span>Laravel<span class="token punctuation">\\</span>Link</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;Menu&#39;</span> <span class="token operator">=&gt;</span> <span class="token class-name class-name-fully-qualified static-context">Spatie<span class="token punctuation">\\</span>Menu<span class="token punctuation">\\</span>Laravel<span class="token punctuation">\\</span>Menu</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="执行命令-6" tabindex="-1"><a class="header-anchor" href="#执行命令-6" aria-hidden="true">#</a> 执行命令</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan vendor:publish <span class="token parameter variable">--tag</span><span class="token operator">=</span>adminlte <span class="token parameter variable">--force</span> <span class="token punctuation">\\</span>
<span class="token operator">&amp;&amp;</span> php artisan vendor:publish <span class="token parameter variable">--provider</span><span class="token operator">=</span><span class="token string">&quot;Intervention\\Image\\ImageServiceProviderLaravel5&quot;</span> <span class="token punctuation">\\</span>
<span class="token operator">&amp;&amp;</span> php artisan adminlte:menu <span class="token punctuation">\\</span>
<span class="token operator">&amp;&amp;</span> php artisan make:adminUserSeeder <span class="token punctuation">\\</span>
<span class="token operator">&amp;&amp;</span> <span class="token function">composer</span> dump
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h3><p>编辑<code>.\\database\\seeds\\DatabaseSeeder.php</code>文件，添加<code>$this-&gt;call(AdminUserSeeder::class);</code></p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token class-name static-context">AdminUserSeeder</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编辑<code>.env</code>数据库配置信息</p><div class="language-dotenv line-numbers-mode" data-ext="dotenv"><pre class="language-dotenv"><code>DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=homestead
DB_USERNAME=homestead
DB_PASSWORD=secret
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="设置用户" tabindex="-1"><a class="header-anchor" href="#设置用户" aria-hidden="true">#</a> 设置用户</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan migrate <span class="token parameter variable">--seed</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> node-sass sass-loader node-less less-loader --save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="开发命令" tabindex="-1"><a class="header-anchor" href="#开发命令" aria-hidden="true">#</a> 开发命令</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span>
<span class="token function">npm</span> run <span class="token function">watch</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,67);function y(w,T){const s=p("ExternalLinkIcon");return i(),l("div",null,[r,a("p",null,[n("英文原文地址："),a("a",d,[n("@lojorider/prepare-project-by-laravel-adminlte-vue-js-644cab072909"),e(s)])]),u,a("ul",null,[h,v,m,a("li",null,[n("Laravel Packages "),a("ul",null,[a("li",null,[a("a",k,[n("acacha/adminlte-laravel"),e(s)])]),a("li",null,[a("a",g,[n("laravel/dusk"),e(s)])]),a("li",null,[a("a",b,[n("laravelcollective/html"),e(s)])]),a("li",null,[a("a",f,[n("Maatwebsite/Laravel-Excel"),e(s)])]),a("li",null,[a("a",x,[n("intervention/image"),e(s)])]),a("li",null,[a("a",q,[n("tymondesigns/jwt-auth"),e(s)])])])])]),_])}const S=t(c,[["render",y],["__file","prepare-project-by-laravel-adminlte-vue-js.html.vue"]]);export{S as default};
