# 对API资源的第一印象

> 本文原址：[hackernoon.com](https://hackernoon.com/first-impressions-on-laravel-api-resources-4869b73b7847)

上周[Taylor Otwell](https://medium.com/@taylorotwell)最后介绍了在Laravel 5.5上开发API时可以取代[Fractal](http://fractal.thephpleague.com/transformers/)的开始，这是作者第一次试运行。

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

## 设置路由

```
Route::apiResource('/users', 'UsersController');
```

## 将模型转化为资源

```
/**
 * Display a listing of the resource.
 *
 * @param User $user
 * @return \Illuminate\Http\Response
 */
public function index(User $user)
{
    return new UsersWithPostsResource($user->paginate());
}
```

## 有 Posts 资源的用户

```
<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\Resource;

class UsersWithPostsResource extends Resource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request
     * @return array
     */
    public function toArray($request)
    {
        // Eager load
        $this->resource->load('posts');

        return $this->resource->map(function ($item) {
            return [
                'name' => $item->name,
                'email' => $item->email,
                'posts' => new PostsResource($item->posts)
            ];
        });
    }
}
```









