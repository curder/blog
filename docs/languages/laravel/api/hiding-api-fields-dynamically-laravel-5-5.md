<img :src="$withBase('/images/languages/laravel/hiding-api-fields-dynamically-laravel-5-5/hero.png')" alt="">

# 动态的隐藏API字段 - Laravel5.5

> 本文原址：[hackernoon.com](https://hackernoon.com/hiding-api-fields-dynamically-laravel-5-5-82744f1dd15a)


最近在[Laravel Brasil社区](https://github.com/laravelbrasil/forum/issues/140)看到一个问题，结果比看起来更有趣。想象一下，你有一个`UsersResource`与下面的实现。

```php
<?php
namespace App\Http\Resources;
use Illuminate\Http\Resources\Json\Resource;
class UsersResource extends Resource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'email' => $this->email
        ];
    }
}
```

因为一些原因你可能想在其他的地方重用这个资源类，但是需要隐藏`email`字段，本文是如何实现这一目标的一种方法。

如果你还不知道什么是API资源，可以看看作者以前的文章关于这个问题。

* [对API资源的第一印象 - Laravel5.5](/laravel/api/first-impressions-on-laravel-api-resources.md)

* [嵌套关系的可重用API资源 - Laravel5.5](/laravel/api/reusable-api-resource-with-nested-relationship-laravel-5-5.md)

## 建立项目

```bash
composer create-project --prefer-dist laravel/laravel api-fields
cd api-fields
touch database/database.sqlite
```

编辑`.env`文件以删除数据库设置并使用SQLite

```dotenv
DB_CONNECTION=sqlite
```

继续设置项目

```bash
php artisan migrate
php artisan make:resource UsersResource
php artisan make:resource --collection UsersResourceCollection 
php artisan make:controller UsersController
php artisan tinker
factory(App\User::class)->times(20)->create();
quit
```

## 定义路由

确保在`api.php`文件中创建如下路由。

```php
Route::apiResource('users', 'UsersController');
```

## 定义控制器

控制器表示预期的目标。在这个例子中，我们假设在列表中，我们只想要所有用户的名字；而在单数据显示中，我们只想隐藏电子邮件地址。

```php
<?php
namespace App\Http\Controllers;

use App\Http\Resources\UsersResource;
use App\User;

class UsersController extends Controller
{
    public function index(User $user)
    {
        return UsersResource::collection($user->paginate())->hide(['id', 'email']);
    }

    public function show(User $user)
    {
        return UsersResource::make($user)->hide(['id']);
    }
}
```

为了实现这一点，我们需要我们的`UsersResourceCollection`和我们的`UsersResource`知道如何处理`hide`的调用。

## 定义UsersResource类

我们从`show`方法开始吧，`UsersResource::make`将返回`UsersResource`对象。

因此，我们应该公开一个`hide`的方法，存储所需要的键从响应中删除。

```php
<?php
namespace App\Http\Resources;
use Illuminate\Http\Resources\Json\Resource;
class UsersResource extends Resource
{
    protected $withoutFields = [];
    public function toArray($request)
    {
        return $this->filterFields([
            'id' => $this->id,
            'name' => $this->name,
            'email' => $this->email
        ]);
    }
 
    public function hide(array $fields)
    {
        $this->withoutFields = $fields;
        return $this;
    }

    protected function filterFields($array)
    {
        return collect($array)->forget($this->withoutFields)->toArray();
    }
}
```

完成！在这一点上，我们应该能够访问`http://api.dev/api/users/1` 并选择一个没有`id`字段的响应。

```json
{
  "data": {
    "name": "Mr. Frederik Morar",
    "email": "darryl.wilkinson@example.org"
  }
}
```

## UsersResourceCollection 类

对于`index`方法中的项目集合，我们需要执行一些更改，具体如下：

1. 确保`UsersResource::collection`返回`UsersResourceCollection`的一个实例

2. 在`UsersResourceCollection`上公开`hide`方法

3. 将需要隐藏的字段传递给`UsersResource`

对于第1点，我们只需要重写`UsersResource`上的收集方法

```php
<?php
namespace App\Http\Resources;
use Illuminate\Http\Resources\Json\Resource;
class UsersResource extends Resource
{
    public static function collection($resource)
    {
        return tap(new UsersResourceCollection($resource), function ($collection) {
            $collection->collects = __CLASS__;
        });
    }
    
    
    protected $withoutFields = [];
  
    public function toArray($request)
    {
        return $this->filterFields([
            'id' => $this->id,
            'name' => $this->name,
            'email' => $this->email
        ]);
    }

    public function hide(array $fields)
    {
        $this->withoutFields = $fields;
        return $this;
    }

    protected function filterFields($array)
    {
        return collect($array)->forget($this->withoutFields)->toArray();
    }
}
```

对于第2步和第3步我们需要改变`UsersResourceCollection`文件。

让我们公开`hide`方法，并使用隐藏字段处理集合。

```php
<?php
namespace App\Http\Resources;
use Illuminate\Http\Resources\Json\ResourceCollection;
class UsersResourceCollection extends ResourceCollection
{
  
    protected $withoutFields = [];

    public function toArray($request)
    {
        return $this->processCollection($request);
    }
    public function hide(array $fields)
    {
        $this->withoutFields = $fields;
        return $this;
    }
  
    protected function processCollection($request)
    {
        return $this->collection->map(function (UsersResource $resource) use ($request) {
            return $resource->hide($this->withoutFields)->toArray($request);
        })->all();
    }
}
```

就是这样！现在，如果我们调用`http://api.dev/api/users`，我们可以看到没有`id`和`email`字段的响应，如指定的`UsersController`。

```json
{
  "data": [
    {
      "name": "Mr. Frederik Morar"
    },
    {
      "name": "Angel Daniel"
    },
    {
      "name": "Brianne Mueller"
    }
  ],
  "links": {
    "first": "http://lab.php71/api-fields-2/public/api/users?page=1",
    "last": "http://lab.php71/api-fields-2/public/api/users?page=7",
    "prev": null,
    "next": "http://lab.php71/api-fields-2/public/api/users?page=2"
  },
  "meta": {
    "current_page": 1,
    "from": 1,
    "last_page": 7,
    "path": "http://api-fields.lab.php71/api/users",
    "per_page": 3,
    "to": 3,
    "total": 20
  }
}
```

## 结论

目标是通过允许隐藏另一个地方可能暴露的一些字段来使`Resource`类有一点灵活性。

这个实现的一个实际例子是不包括`avatar`字段属性的`/users`，但是当通过`/users/99`请求特定`avatar`字段时，我们可能希望将该头像包括在响应中。

我不建议重复使用 API 资源太多，因为它可能容易增加一层简单的复杂性。

这样说，因为实现的简单性在列表和特定记录的请求之间隐藏一些特定的字段似乎是一个合理的请求。

## 下一步是什么

在下一篇文章中，我将尝试将`hide`方法提取为特征，并使其在所有API资源中都可重用。请[关注Medium](https://hackernoon.com/@deleugpn)，敬请期待！
