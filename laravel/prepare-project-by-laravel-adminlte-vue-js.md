# 使用Laravel + adminlte + vue.js构建项目

英文原文地址：https://medium.com/@lojorider/prepare-project-by-laravel-adminlte-vue-js-644cab072909

## 本地开发环境

* Laravel 5.6.7

* PHP 7.1.13
    * extension=php_openssl.dll

    * extension=php_pdo_mysql.dll

* MySQL 5.7.30


## 创建项目

```
composer create-project --prefer-dist laravel/laravel blog "5.6.*"
```

> 执行完上面的命令将生成一个以`blog`为目录的laravel项目


## 设置admin-lte包

`acacha/adminlte-laravel`项目[GitHub地址](https://github.com/acacha/adminlte-laravel)

进入到创建的`blog`目录下，执行下面的命令

```
composer require "acacha/admin-lte-template-laravel"

php artisan vendor:publish --tag=adminlte --force
php artisan make:adminUserSeeder
composer dump-autoload
```

## 设置菜单

### 执行安装命令

`spatie/laravel-menu`项目[GitHub地址](https://github.com/spatie/laravel-menu)

`laravelcollective/html`项目[GitHub地址](https://github.com/LaravelCollective/html)

```
composer require "spatie/laravel-menu"
composer require "laravelcollective/html"
```

### 编辑`config/app.php`配置文件

添加如下内容

```
'aliases' => [
...
'Html' => Spatie\Menu\Laravel\Html::class,
'Link' => Spatie\Menu\Laravel\Link::class,
'Menu' => Spatie\Menu\Laravel\Menu::class,
];
```

### 执行命令

```
php artisan adminlte:menu
```

## 升级Excel包(可选)

`Maatwebsite/Laravel-Excel`项目[GitHub地址](https://github.com/Maatwebsite/Laravel-Excel)

### 执行命令

```
composer require "maatwebsite/excel"
```

### 编辑`config/app.php`配置文件

```
'aliases' => [
...
'Excel' => Maatwebsite\Excel\Facades\Excel::class,
];
```

## 升级图片管理(可选)

`intervention/image`项目[GitHub地址](https://github.com/Intervention/image)

### 执行命令

```
composer require "intervention/image"
```


### 编辑`config/app.php`配置文件

```
'aliases' => [
...
'Image' => Intervention\Image\Facades\Image::class,
];
```

### 执行命令

```
php artisan vendor:publish --provider="Intervention\Image\ImageServiceProviderLaravel5"
```

