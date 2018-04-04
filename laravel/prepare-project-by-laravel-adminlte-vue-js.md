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


## 升级jwt-auth包

`tymondesigns/jwt-auth`项目[GitHub地址](https://github.com/tymondesigns/jwt-auth)


### 执行命令

```
composer require "tymon/jwt-auth"
```


### 编辑`config/app.php`配置文件

```
'aliases' => [
...
 'JWTAuth' => Tymon\JWTAuth\Facades\JWTAuth::class,
 'JWTFactory' => Tymon\JWTAuth\Facades\JWTFactory::class,
];
```

## 修改数据库配置


数据库配置文件为：`config\database.php`

```
'charset' => env('DB_CHARSET', 'utf8mb4'),
'collation' => env('DB_COLLATION', 'utf8mb4_unicode_ci'),
```

### 配置本地`.env`

mysql数据库的配置不支持utf8mb4

```
DB_CHARSET=utf8
DB_COLLATION=utf8_unicode_ci
```

同时修改其他数据库配置信息，如:

```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=homestead
DB_USERNAME=homestead
DB_PASSWORD=secret
```

### 生成数据

编辑`.\database\seeds\DatabaseSeeder.php`，添加`$this->call(AdminUserSeeder::class);`


```
public function run()
{
    $this->call(AdminUserSeeder::class);
    //$this->call(UsersTableSeeder::class);
}
```


### 运行命令

```
php artisan migrate --seed
```

## 生成用户表数据


```
php artisan make:seeder UsersTableSeeder
```

编辑 `php artisan make:seeder UsersTableSeeder` 文件

```
public function run()
{
    $faker = Faker\Factory::create();
    App\User::create([
        'name' => 'user',
        'email' =>'admin@example.com',
        'password' => bcrypt('123456'),
    ]);
}
```
编辑文件`.\database\seeds\DatabaseSeeder.php`，通过取消注释行 `$this->call(UsersTableSeeder::class);`


```
public function run()
{
    $this->call(UsersTableSeeder::class);
}
```

## 启动本地服务器


```
php artisan serv
```

地址: http://127.0.0.1:8000
邮箱: admin@example.com
密码：123456

## 使用vuejs开发

用于在文件夹资源`resources/assets/js`上自动编译`*.vue`来编写vuejs文件。

### 编辑文件`./webpack.mix.js`并注释

```
// .less(‘resources/assets/less/adminlte-app.less’,’public/css/adminlte-app.css’)
```

### 执行命令

```
npm install
npm run watch
```


## 总结

### 命令行运行命令

```
composer create-project --prefer-dist laravel/laravel blog "5.6.*"

cd blog && composer require "acacha/admin-lte-template-laravel" "maatwebsite/excel" "intervention/image" "tymon/jwt-auth" "laravelcollective/html" "spatie/laravel-menu" 
```

### 编辑`config/app.php`

```
'providers' => [
    ...
    Acacha\AdminLTETemplateLaravel\Providers\AdminLTETemplateServiceProvider::class,
    Maatwebsite\Excel\ExcelServiceProvider::class,
    Intervention\Image\ImageServiceProvider::class,
    Tymon\JWTAuth\Providers\JWTAuthServiceProvider::class,
];
'aliases' => [
    ...
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

```
php artisan vendor:publish --tag=adminlte --force & php artisan vendor:publish --provider="Intervention\Image\ImageServiceProviderLaravel5" & php artisan adminlte:menu & php artisan make:adminUserSeeder & 
composer dump
```


### 配置

编辑`.\database\seeds\DatabaseSeeder.php`文件，添加`$this->call(AdminUserSeeder::class);`

```
public function run()
{
    $this->call(AdminUserSeeder::class);
    //$this->call(UsersTableSeeder::class);
}
```


编辑`.env`数据库配置信息

```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=homestead
DB_USERNAME=homestead
DB_PASSWORD=secret
```

### 设置用户

```
php artisan migrate --seed 
```


### 其他

```
npm install node-sass sass-loader node-less less-loader --save-dev
```


