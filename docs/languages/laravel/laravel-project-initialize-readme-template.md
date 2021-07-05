# Laravel 项目README

## 1. 下载

推荐使用`git` 对应的`master`分支上获取项目的最新代码，使用命令`git clone https://github.com/curder/example`。

## 2. 环境文件

在项目的根目录中附带一个`.env.example`文件，请将其拷贝重命名为`.env`。可以使用如下命令完成操作`cp .env.example .env`。

> 注意：确保您的系统上显示隐藏的文件。

## 3. Composer

laravel项目依赖通过`[composer](http://getcomposer.org/)`工具进行管理。

第一步是通过在终端中进入到项目中并输入以下命令来安装依赖

```bash
composer install
```

## 4. NPM/Yarn

为了安装用于前端开发的JavaScript包，您需要使用[`Node`包管理器](https://www.npmjs.com/)，或者可选的[Yarn包装管理器](https://code.facebook.com/posts/1840075619545360)（推荐）

如果您只安装了npm，则必须从项目的根目录运行此命令：

```bash
npm install
```

如果您安装了`Yarn`，请从项目的根目录运行此操作

```bash
yarn
```

## 5. 创建数据库

在服务器上创建数据库，然后更新项目根目录下的`.env`文件上如下的相关行：

```dotenv
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=homestead
DB_USERNAME=homestead
DB_PASSWORD=secret
```

更新上面的行已完成数据库相关设置。

## 6. artisan命令

我们要做的第一件事就是设置 Laravel 在进行加密时使用的密钥。

```bash
php artisan key:generate
```

应该看到一条绿色消息，指出您的密钥已成功生成，以及你应该看到`.env`文件中的`app_key`变量反映出来。

现在是时候查看数据库连接信息是否正确。运行内置的迁移来创建数据库表

```bash
php artisan migrate
```

如果没有看到错误，应该会看到每个迁移表的消息，而不是数据库连接信息很可能不正确。

运行数据库迁移文件以添加一些默认数据

```bash
php artisan db:seed
```

应该得到每个迁移文件的消息，并且应该可以看到数据库表中的信息。

## 7. NPM Run "*"

既然已经拥有数据库表和默认行，则需要构建样式和脚本。

这些文件是使用laravel
mix生成的，[laravel mix](https://laravel.0x123.com/zh/docs/5.5/mix)是许多工具的包装，并且在项目的根目录下运行**webpack.mix.js**。通过执行下面的命令：

```bash
npm run <command>
```

可用的命令列在`package.json`文件的`scripts`键下的顶部。

您将在屏幕上看到大量信息，然后在最后提供一张表格，说明编译的内容和文件的位置。

此时您已完成，您应该能够在本地浏览器中查看该项目并查看该项目。

## 8. PHPUnit

安装项目后，确保运行测试套件以确保所有部件都正常工作。

在项目根目录下运行下面的命令

```bash
phpunit
```

您会看到每个数百个测试都会出现一个点`.`，然后在最后提供通过测试的数量。全新的安装应该没有失败。

## 9. Storage:link

安装项目后，您必须运行此命令以链接您的公用存储文件夹以进行用户文件上传

```bash
php artisan storage:link
```

## 10. 登录

在项目安装完成后，您可以在浏览器中访问它，点击导航栏右侧的登录按钮。

管理员账号信息是：

用户名：`admin@admin.com`

密码：`123456`

成功登录后将被自动重定向到后端。

如果之前在数据库迁移文件中更改了这些值，那么显然应该使用更新的值。

## Web服务器配置

### Nginx

如果当前环境使用的是 `Nginx`，请在config配置中加入以下内容，它将会将所有请求都引导到 `index.php` 单入口文件。

```
location / {
    try_files $uri $uri/ /index.php?$query_string;
}
```

### Apache

项目使用 `public/.htaccess` 文件来为前端控制器提供隐藏了 `index.php` 的优雅链接。如果当前环境使用了 `Apache` 作为Web服务器，请务必启用 `mod_rewrite`
模块，让服务器能够支持 `.htaccess` 文件的解析。

如果项目附带的 `.htaccess` 文件不起作用，就尝试用下面的方法代替

```conf
Options +FollowSymLinks
RewriteEngine On

RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.php [L]
```

## 其他优化

```bash
php artisan config:cache # 配置信息缓存
php artisan route:cache # 路由缓存
php artisan optimize # 类映射加载优化
composer dumpautoload # 自动加载优化
```
