# VarDumper 组件

VarDumper 组件提供了从任何 PHP 变量中提取状态的机制。

它提供了一个更好的 [dump()](https://github.com/symfony/var-dumper/blob/v6.0.2/Resources/functions/dump.php#L14) 和 [dd()](https://github.com/symfony/var-dumper/blob/v6.0.2/Resources/functions/dump.php#L34) 函数，可以使用它来代替PHP内建的 [var_dump](https://www.php.net/manual/zh/function.var-dump.php)。

## 安装前的准备

```php
mkdir symfony-components # 创建目录
cd symfony-components # 进入到工作目录 

composer init # 初始化 Composer 信息

mkdir src/ # 创建源代码目录
```

`composer.json` 文件如下：

```json {13-17}
{
  "name": "curder/symfony-components",
  "description": "Discover Symfony Components for VarDumper",
  "authors": [
    {
      "name": "curder",
      "email": "q.curder@gmail.com"
    }
  ],
  "require": {
    "php": ">=8.0.2",
    "symfony/var-dumper": "@stable"
  },
  "autoload": {
    "psr-4": {
      "Curder\\": "src/"
    }
  }
}
```

## 安装

```bash
composer require --dev symfony/var-dumper @stable
```

> 如果在 `Symfony` 应用程序之外安装这个组件，必须在代码中包含 `vendor/autoload.php` 文件来启用 Composer 提供的类的自动加载机制。

## `dump()` 函数


首先在 `src/` 目录下创建一个 User 类，如下：

```php
// src/User.php
<?php
namespace Curder;

class User
{
    public string $username = 'Curder';

    protected int $age = 30;

    private array $hobbies = [
        "music", 'coding',
    ];
}
```

在项目的根目录下创建一个 index.php 的入口文件，并使用 var-dumper 。

```php
// index.php
<?php

use Curder\User;

require __DIR__.'/vendor/autoload.php';

$user = new User;

dump($user); // 或者 dd($user);
```


## 参考

- [The VarDumper Component 文档](https://symfony.com/doc/current/components/var-dumper.html)
- [curder/symfony-components](https://github.com/curder/symfony-components/tree/var-dumper)
