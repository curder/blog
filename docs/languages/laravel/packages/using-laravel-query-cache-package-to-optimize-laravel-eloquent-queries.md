# 使用 laravel-query-cache 来缓存数据库的 SELECT 请求

在实际的开发中，经常需要缓存查询数据库的结果以提升软件的性能。

这里使用[Neurony/laravel-query-cache](https://github.com/Neurony/laravel-query-cache)来实现缓存，正如拓展包 README
中说到的，它专注于允许所有的查询操作，或者是在一次请求中重复的数据库查询。

> 由于使用到了 laravel 的缓存 tag 标记，支持的缓存驱动有：`apc`, `array`, `redis`, `memcached`，这里推荐使用的缓存驱动是：`redis`。

## 安装和配置

### 安装

执行下面的两条命令，安装拓展包和获取拓展包的配置文件。

```bash
composer require neurony/laravel-query-cache

php artisan vendor:publish --provider="Neurony\QueryCache\ServiceProvider" --tag="config"
```

### 配置

- 修改项目环境文件 `.env` 中，添加如下环境变量：

```dotenv
# The driver used for storing the cache keys that this package generates.
# This driver can differ from your main Laravel's CACHE_DRIVER.
QUERY_CACHE_DRIVER=redis

# Wether to cache absolutely all queries for the current request.
CACHE_ALL_QUERIES=true

# Wether to cache only the duplicated queries for the current request.
CACHE_DUPLICATE_QUERIES=true
```

- 修改要缓存的模型添加 traits

```php
<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Neurony\QueryCache\Traits\IsCacheable;

class YourModel extends Model
{
    use IsCacheable;
}
```

## 测试

我们通过[barryvdh/laravel-debugbar](https://github.com/barryvdh/laravel-debugbar) 来查看优化结果。

比如获取所有的用户数据

```php
$users = \App\User::get();
```

<img :src="$withBase('/images/languages/laravel/packages/using-laravel-query-cache-package-to-optimize-laravel-eloquent-queries/laravel-query-cache.png')" alt="">

再比如获取关联数据缓存

```php
$user = \App\User::with('posts')->find(1);
```

<img :src="$withBase('/images/languages/laravel/packages/using-laravel-query-cache-package-to-optimize-laravel-eloquent-queries/laravel-query-cache-relationship-data.png')" alt="">

## 参考地址

- [Neurony/laravel-query-cache](https://github.com/Neurony/laravel-query-cache)
