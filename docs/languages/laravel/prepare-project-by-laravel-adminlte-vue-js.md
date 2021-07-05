# 使用Laravel + adminlte + vue.js构建项目

英文原文地址：[@lojorider/prepare-project-by-laravel-adminlte-vue-js-644cab072909](https://medium.com/@lojorider/prepare-project-by-laravel-adminlte-vue-js-644cab072909)

## 本地开发环境

* Laravel 5.6.16
* PHP 7.1.13
    * extension=php_openssl.dll
    * extension=php_pdo_mysql.dll
* MySQL 5.7.30
* Laravel Packages
    - [acacha/adminlte-laravel](https://github.com/acacha/adminlte-laravel)
    - [laravel/dusk](https://github.com/laravel/dusk)
    - [laravelcollective/html](https://github.com/laravelcollective/html)
    - [Maatwebsite/Laravel-Excel](https://github.com/Maatwebsite/Laravel-Excel)
    - [intervention/image](https://github.com/Intervention/image)
    - [tymondesigns/jwt-auth](https://github.com/tymondesigns/jwt-auth)

## 创建项目

```bash
composer create-project --prefer-dist laravel/laravel adminlte-laravel "5.6.*"
```

> 执行完上面的命令将生成一个以`adminlte-laravel`为目录的laravel项目

## 设置admin-lte包

在项目`adminlte-laravel`根目录下执行命令

```bash
composer require "acacha/admin-lte-template-laravel" \
&& php artisan vendor:publish --tag=adminlte --force \
&& composer require "laravel/dusk" --dev \
&& php artisan make:adminUserSeeder \
&& composer require "laravelcollective/html" \
&& composer dump-autoload
```

### 编辑`config/app.php`配置文件

添加如下内容

```php
[
    // ...
    'aliases' => [
        'Html' => Spatie\Menu\Laravel\Html::class,
        'Link' => Spatie\Menu\Laravel\Link::class,
    ]
];
```

### 执行命令

```bash
php artisan adminlte:menu
```

## 升级Excel包(可选)

### 执行命令

```bash
composer require "maatwebsite/excel"
```

### 编辑`config/app.php`配置文件

```php
'aliases' => [
    'Excel' => Maatwebsite\Excel\Facades\Excel::class,
];
```

## 升级图片管理(可选)

### 执行命令

```bash
composer require "intervention/image"
```

### 编辑`config/app.php`配置文件

```php
'aliases' => [
    'Image' => Intervention\Image\Facades\Image::class,
];
```

### 执行命令

```bash
php artisan vendor:publish --provider="Intervention\Image\ImageServiceProviderLaravel5"
```

## 升级jwt-auth包

### 执行命令

```bash
composer require "tymon/jwt-auth"
```

### 编辑`config/app.php`配置文件

```php
'aliases' => [
    'JWTAuth' => Tymon\JWTAuth\Facades\JWTAuth::class,
    'JWTFactory' => Tymon\JWTAuth\Facades\JWTFactory::class,
];
```

## 修改数据库配置

数据库配置文件为：`config\database.php`

```php
'charset' => env('DB_CHARSET', 'utf8mb4'),
'collation' => env('DB_COLLATION', 'utf8mb4_unicode_ci'),
```

### 配置本地`.env`

mysql数据库的配置不支持utf8mb4

```dotenv
DB_CHARSET=utf8
DB_COLLATION=utf8_unicode_ci
```

同时修改其他数据库配置信息，如:

```dotenv
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=homestead
DB_USERNAME=homestead
DB_PASSWORD=secret
```

### 生成数据

编辑`.\database\seeds\DatabaseSeeder.php`，添加`$this->call(AdminUserSeeder::class);`

```php
public function run()
{
    $this->call(AdminUserSeeder::class);
}
```

### 运行命令

```bash
php artisan migrate --seed
```

## 启动本地服务器

```bash
php artisan serv
```

地址: `http://127.0.0.1:8000/login`
邮箱: `admin@example.com`
密码：`123456`

> 邮箱和密码在迁移文件`database\seeds\AdminUserSeeder.php`中定义。

## 使用vuejs开发

用于在文件夹资源`resources/assets/js`上自动编译`*.vue`来编写vuejs文件。

### 执行命令

```bash
npm install
npm run watch
```

## 总结

### 命令行运行命令

```bash
composer create-project --prefer-dist laravel/laravel adminlte-laravel "5.6.*" \
&& cd adminlte-laravel \
&& touch config/menu.php \
&& composer require "laravel/dusk" \
&& composer require "acacha/admin-lte-template-laravel" "maatwebsite/excel" "intervention/image" "tymon/jwt-auth" "laravelcollective/html"
```

### 编辑`config/app.php`

```php
'aliases' => [
    'AdminLTE' => Acacha\AdminLTETemplateLaravel\Facades\AdminLTE::class,
    'Excel' => Maatwebsite\Excel\Facades\Excel::class,
    'Image' => Intervention\Image\Facades\Image::class, 
    'JWTAuth' => Tymon\JWTAuth\Facades\JWTAuth::class,
    'JWTFactory' => Tymon\JWTAuth\Facades\JWTFactory::class,
    'Html' => Spatie\Menu\Laravel\Html::class,
    'Link' => Spatie\Menu\Laravel\Link::class,
    'Menu' => Spatie\Menu\Laravel\Menu::class,
];
```

### 执行命令

```bash
php artisan vendor:publish --tag=adminlte --force \
&& php artisan vendor:publish --provider="Intervention\Image\ImageServiceProviderLaravel5" \
&& php artisan adminlte:menu \
&& php artisan make:adminUserSeeder \
&& composer dump
```

### 配置

编辑`.\database\seeds\DatabaseSeeder.php`文件，添加`$this->call(AdminUserSeeder::class);`

```php
public function run()
{
    $this->call(AdminUserSeeder::class);
}
```

编辑`.env`数据库配置信息

```dotenv
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=homestead
DB_USERNAME=homestead
DB_PASSWORD=secret
```

### 设置用户

```bash
php artisan migrate --seed 
```

### 其他

```bash
npm install node-sass sass-loader node-less less-loader --save-dev
```

### 开发命令

```bash
npm install
npm run watch
```
