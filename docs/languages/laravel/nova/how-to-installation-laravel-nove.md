# 安装 Laravel Nova

[Laravel nova](https://nova.laravel.com) 提供了一个优雅的方式快速开发一个漂亮的后台管理系统，它使用 tailwindcss 驱动前端展示界面，后台使用 Laravel 框架。

## 安装前的准备

### 软件依赖

- Composer
- Laravel Framework 5.8+
- Laravel Mix
- Node.js & NPM

安装 laravel nova 之前，个人用户可能需要支付 `$99/项目`，团队开发需要支付`$199/项目`来[购买软件](https://nova.laravel.com/licenses)。

### 安装 laravel 项目

```bash
composer global require laravel/installer

laravel new laravel-nova
```

> 运行完上面的命令，将活得一个新的 laravel 项目源代码。如果当前机器没有`composer`命令，可以[访问这里](https://getcomposer.org/)下载。

## 安装 nova

## 下载 nova 源代码并放入到 laravel-nova 源代码中

在[Nova 站点下载](https://nova.laravel.com/releases)最新的 Releases 源代码。比如这里是：`nova-2.0.0.zip`文件，下载完后解压到上面安装的`laravel-nova`项目中，文件夹命名为：`nova`，结构如下：

```text
.
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
```

## 将 nova 文件夹添加到 git 忽略中

将`laravel-nova`项目中的`.gitignore`文件中添加一个行

```text
/nova
```

## 修改项目的 composer.json 文件

在 composer.json 文件中添加

```json
{
  "repositories": [
    {
      "type": "path",
      "url": "./nova"
    }
  ]
}
```

然后, 在`composer.json`文件添加 `laravel/nova` 到`require`中:

```json
{
  "require": {
    "laravel/nova": "*"
  }
}
```

## 执行项目更新

执行下面的命令更新 composer 依赖。

```bash
composer update
```

<img :src="$withBase('/images/languages/laravel/nova/how-to-installation-laravel-nova/laravel-nova-composer-update.png')" alt="">

执行成功后，再执行下面的命令发布一些 nova 的文件

```bash
php artisan nova:install
```

修改项目数据库配置`.env`内容。

```dotenv
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=homestead
DB_USERNAME=homestead
DB_PASSWORD=secret
```

修改完配置以后再执行数据库迁移命令

```bash
php artisan migrate
```

<img :src="$withBase('/images/languages/laravel/nova/how-to-installation-laravel-nova/laravel-nova-artisan-migrate.png')" alt="">

## 新增管理员并访问后台

```bash
php artisan nova:user
```

<img :src="$withBase('/images/languages/laravel/nova/how-to-installation-laravel-nova/laravel-nova-create-user.png')" alt="">

访问`https://laravel-nova.test/nova`，出现如下结果:

<img :src="$withBase('/images/languages/laravel/nova/how-to-installation-laravel-nova/laravel-nova-login-page.png')" alt="">

<img :src="$withBase('/images/languages/laravel/nova/how-to-installation-laravel-nova/laravel-nova-dashboard.png')" alt="">

## 参考链接

- [Laravel Documents](https://laravel.com/docs/)
- [Laravel Nova Docs](https://nova.laravel.com/docs/)
- [Laravel Nova Licenses](https://nova.laravel.com/licenses/)
- [Laravel Nova Releases](https://nova.laravel.com/releases/)
- [Laravel Nova 中文文档](https://learnku.com/docs/nova/)
