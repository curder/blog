# 安装 Livewire

开始之前已经下载好了Laravel项目。

## 下载 livewire
使用下面的命令下载 livewire/livewire 包到当前 Laravel 项目。

```bash
composer require livewire/livewire -vvv
```

## 修改模版文件添加指令

在模版文件中添加如下两行指令

```html {10, 15}
<!doctype html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Laravel Livewire Demo</title>
    @livewireStyles
</head>
<body>
    Hello world!

    @livewireScripts
</body>
</html>
```

> 上面通过指令：`@livewireStyles` 和 `@livewireScripts` 可以释放css和js。也可以通过标签语法 `<livewire:styles />` 和 `<livewire:scripts />`。

## 在 compose.json 添加命令

```json {4}
"post-autoload-dump": [
    "Illuminate\\Foundation\\ComposerScripts::postAutoloadDump",
    "@php artisan package:discover --ansi",
    "@php artisan vendor:publish --force --tag=livewire:assets --ansi"
],
```

## 创建第一个 livewire

```bash
php artisan make:livewire hello-world
```

> 通过上面的命令会默认创建组件 `app/Http/Livewire/HelloWorld.php` 和模版 `resources/views/livewire/hello-world.blade.php` 文件。

## 传递从组件中传递数据到视图

### 通过 view 函数的参数传递

- 组件通过数组传参到视图。

```php {11}
<?php
namespace App\Http\Livewire;

use Livewire\Component;

class HelloWorld extends Component
{
    public function render()
    {
        return view('livewire.hello-world', [
            'name' => 'Curder',
        ]);
    }
}
```

- 视图通过模版输出

```html {2}
<div>
    Hello {{ $name }}
</div>
```

### 通过类属性传递

```php {8}
<?php
namespace App\Http\Livewire;

use Livewire\Component;

class HelloWorld extends Component
{
    public $name = 'Curder';
    public function render()
    {
        return view('livewire.hello-world');
    }
}
```
