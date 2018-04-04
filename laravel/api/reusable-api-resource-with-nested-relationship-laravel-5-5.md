![](/assets/reusable-api-resource-with-nested-relationship-laravel-5-5.jpg)

# 嵌套关系的可重用API资源 - Laravel5.5

> 本文原址：[hackernoon.com](https://hackernoon.com/reusable-api-resource-with-nested-relationship-laravel-5-5-c654c7243869)



两天前，我发表了我对Laravel最新的API资源功能的第一印象[原文地址](https://hackernoon.com/reusable-api-resource-with-nested-relationship-laravel-5-5-c654c7243869) && [译文地址](/laravel/api/first-impressions-on-laravel-api-resources.md)。

本文将进一步在Transformation层中使用更多的Laravel友好的方法。

## 安装干净的Laravel 5.5项目

```
composer create-project laravel/laravel responses dev-develop
cd responses
touch database/database.sqlite
php artisan make:model Post -mfa
php artisan make:resource UsersWithPostsResource
php artisan make:resource PostsResource
php artisan make:controller UsersController --resource
```

更改`.env`文件以使用SQLite并删除每个其他数据库变量。

```
DB_CONNECTION=sqlite
```

## 准备数据库

* `posts`迁移`database/migrations/______create_posts_table.php`

```
Schema::create('posts', function (Blueprint $table) {
    $table->increments('id');
    $table->string('title');
    $table->string('body');
    $table->unsignedInteger('user_id');
    $table->timestamps();
});
```


* Post Factory `database/factories/PostFactory.php`

```
<?php

use Faker\Generator as Faker;

$factory->define(App\Post::class, function (Faker $faker) {
    return [
        'title' => $faker->sentence,
        'body' => $faker->paragraph,
        'user_id' => function () {
            return factory(\App\User::class);
        }
    ];
});
```


* 用户有 Posts 关联关系`app/User.php`

```
public function posts()
{
    return $this->hasMany(Post::class);
}
```

* 避免 Posts 上的大量分配

```
<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $guarded = [];
}
```

* 填充数据库

```
php artisan migrate:fresh
php artisan tinker
factory(App\Post::class)->times(2)->create();
factory(App\Post::class)->times(2)->create(['user_id' => 1]);
```

## 重命名资源（修复遗留问题）

上一篇文章创建了一个名为`UsersWithPostsResource`的资源。让我们将其重命名为`UsersResource`，并了解如何在以下步骤中重用它。

## 在控制器中使用API​​资源

```
<?php
/**
 * Display a listing of the resource.
 *
 * @param User $user
 * @return \Illuminate\Http\Response
 */
public function index(User $user)
{
    return UsersResource::collection($user->with('posts')->paginate());
    // 如果你不想在你的响应中包含这个关系，不要用 with()
    // return UsersResource::collection($user->paginate());
}
```

静态`collection`方法将获取要转换的记录集合，并确保为每条记录实例化一个新的`UsersResource`。


## UsersResource类

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
            'name' => $this->name,
            'email' => $this->email,
            'posts' => PostsResource::collection($this->whenLoaded('posts'))
        ];
    }
}
```
这里有两个关键部分：属性访问器和可选的嵌套转换

* 在`Resource`类中，可以通过`$this`直接访问模型属性。这个魔术是在包含在基本`Resource`类中的`DelegatesToResource` Trait 中完成的。

* 如果数据可用（预先加载），则可以转换关系，或者在尚未加载数据的情况下忽略它。这将防止N+1问题，同时仍然能够处理单个资源类的不同情况。如果关系不可用，则将被忽略，否则包括在内。

## Post 资源

```
<?php
namespace App\Http\Resources;
use Illuminate\Http\Resources\Json\Resource;
class PostsResource extends Resource
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
            'title' => $this->title,
            'body' => $this->body
        ];
    }
}
```
## 结论

保持简单，一步一个脚印。

本文的重点是通过学习使用`Resource::collection`而不是手动实例化类，并委托给控制器负责给予（或不）关系数据。

通过从控制器中简单地删除`with('posts')`，API将不再在响应中包括每个用户的帖子。


虽然`Fractal`会在Transformer图层中提供`default`和`available`的包含，但Laravel上的本地API资源将倾向于让Controller处理该逻辑。

毕竟，理解请求是控制者的工作。

在下一篇文章中，我打算为API的用户实现一种请求包含关系的方式。请考虑在[Media](https://hackernoon.com)上关注更多像这样的文章。