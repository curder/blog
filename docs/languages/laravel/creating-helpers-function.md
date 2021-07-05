# 在Laravel项目中创建自己的PHP函数

Laravel 提供了许多优秀的[辅助函数](https://laravel.com/docs/5.7/helpers)，可以方便地处理数组Array，文件路径File Path，字符串String和路由Router等操作，例如`dd()`
函数。

可以使用 Composer 自动导入 Laravel 应用程序和PHP包，为自己定义一组辅助函数。

## 在Laravel应用程序中创建Helpers文件

可能希望包含辅助函数的第一个场景是在 Laravel 应用程序的上下文中。根据偏好或者项目要求，可以自定义函数文件的位置，但这里有一些建议的位置：

```text
app/helpers.php
app/Http/helpers.php
```

推荐将其保留在`app/helpers.php`应用程序命名空间的根目录中。

## 自动加载

在项目的`composer.json`中，可以看到`autoload`和`autoload-dev`

```json
{
  "autoload": {
    "classmap": [
      "database/seeds",
      "database/factories"
    ],
    "psr-4": {
      "App\\": "app/"
    }
  },
  "autoload-dev": {
    "psr-4": {
      "Tests\\": "tests/"
    }
  }
}
```

如果要添加帮助文件，composer有一个files键（可以是文件路径数组），您可以在其中定义autoload

```json
{
  "autoload": {
    "files": [
      "app/helpers.php"
    ],
    "classmap": [
      "database/seeds",
      "database/factories"
    ],
    "psr-4": {
      "App\\": "app/"
    }
  }
}
```

向files数组中添加新路径后，需要执行下面的命令告诉composer自动加载：

```bash
composer dump-autoload
```

现在，每次请求都会自动加载`helpers.php`文件。

## 参考链接

- [Creating Your Own PHP Helpers in a Laravel Project](https://laravel-news.com/creating-helpers)
