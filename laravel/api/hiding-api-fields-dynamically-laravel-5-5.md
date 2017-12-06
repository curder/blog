# Laravel5.5 - 动态的隐藏API字段

> 本文原址：[hackernoon.com](https://hackernoon.com/hiding-api-fields-dynamically-laravel-5-5-82744f1dd15a)


最近在[Laravel Brasil社区](https://github.com/laravelbrasil/forum/issues/140)看到一个问题，结果比看起来更有趣。想象一下，你有一个`UsersResource`与下面的实现。

```
<?php
namespace App\Http\Resources;
use Illuminate\Http\Resources\Json\Resource;
class UsersResource extends Resource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request
     * @return array
     */
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

* [对API资源的第一印象](https://hackernoon.com/first-impressions-on-laravel-api-resources-4869b73b7847)

* [具有嵌套关系的API资源](https://hackernoon.com/reusable-api-resource-with-nested-relationship-laravel-5-5-c654c7243869)


## 建立项目

```
composer create-project --prefer-dist laravel/laravel api-fields
cd api-fields
touch database/database.sqlite
```

编辑`.env`文件以删除数据库设置并使用SQLite

```
DB_CONNECTION=sqlite
```

继续设置项目

```
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

```
Route::apiResource('users', 'UsersController');
```

## 定义控制器

控制器表示预期的目标。在这个例子中，我们假设在列表中，我们只想要所有用户的名字；而在单数据显示中，我们只想隐藏电子邮件地址。

```
<?php
namespace App\Http\Controllers;

use App\Http\Resources\UsersResource;
use App\User;

class UsersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param User $user
     * @return \Illuminate\Http\Response
     */
    public function index(User $user)
    {
        return UsersResource::collection($user->paginate())->hide(['id', 'email']);
    }

    /**
     * Display a user.
     *
     * @param User $user
     * @return \Illuminate\Http\Response
     */
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

```
<?php
namespace App\Http\Resources;
use Illuminate\Http\Resources\Json\Resource;
class UsersResource extends Resource
{
    /**
     * @var array
     */
    protected $withoutFields = [];
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request
     * @return array
     */
    public function toArray($request)
    {
        return $this->filterFields([
            'id' => $this->id,
            'name' => $this->name,
            'email' => $this->email
        ]);
    }
    /**
     * Set the keys that are supposed to be filtered out.
     *
     * @param array $fields
     * @return $this
     */
    public function hide(array $fields)
    {
        $this->withoutFields = $fields;
        return $this;
    }
    /**
     * Remove the filtered keys.
     *
     * @param $array
     * @return array
     */
    protected function filterFields($array)
    {
        return collect($array)->forget($this->withoutFields)->toArray();
    }
}
```
















