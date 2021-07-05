# 使用预加载（Eager loading）来优化 Laravel Eloquent 查询


> 项目GitHub地址: [curder-blog/laravel-eloquent-lazy-loading](https://github.com/curder-blog/laravel-eloquent-lazy-loading)
>
> 英文原文：[Optimize Laravel Eloquent Queries with Eager Loading](https://laravel-news.com/eloquent-eager-loading)

在Laravel中对象关系映射（ORM）操作数据库数据非常简单。它以面向对象的方式定义数据库关联关系，可以很容易地查询相关的模型数据。

在开发过程中偶尔可能不会注意底层的数据库调用，以至于很容易产生多次的查询。

文章针对ORM的标准数据库优化是预加载相关数据，将建立一些模型关联关系，介绍使用预加载和不使用预加载产生的查询语句之间的区别，通过直接在代码中实现，并希望通过一些示例说明如何进行预加载，将进一步帮助您理解如何优化查询。

>  文章使用Laravel5.6作项目演示，其他版本也可以类似参考。

## 简介

一般情况下，ORM会“惰性”加载相关的模型数据。毕竟它怎么知道开发者的意图呢？查询模型后，也许永远不会真正使用关联模型的数据。不优化的这些关联查询被称为`n+1`的问题。

想象从数据库中查到了100个对象，每个记录有1个关联的模型（即从属）。

使用ORM默认会产生101个查询，对原始100条记录进行一次查询，如果访问了模型对象上的相关数据，则对每条记录进行附加查询。在伪代码中，假设您想列出已发布帖子的所有已发布作者。从一系列帖子（每篇文章有一位作者）中，您可以得到如下的作者姓名列表：

```php
$posts = Post::published()->get(); // one query

$authors = array_map(function($post) {
    // Produces a query on the author model
    return $post->author->name;
}, $posts);
```

我们并没有告诉模型我们需要所有文章关联的作者，所以每次我们从模型实例中获取作者的名字时，都会发生单独的数据库查询。

## 预加载

正如上面提到的，ORM"懒惰"加载关联。如果您打算使用关联的模型数据，则可以使用预先加载将该查询总计优化为2个查询。您只需要告诉模型您需要预加载什么。

这里有一个使用[Rails预加载的活动记录指南](http://guides.rubyonrails.org/active_record_querying.html#eager-loading-associations)的例子，这个概念与 [laravel的预加载](https://laravel.com/docs/5.6/eloquent-relationships#eager-loading) 概念非常相似。

```php
# Rails
posts = Post.includes(:author).limit(100);

# Laravel
$posts = Post::with('author')->limit(100)->get();
```

通过从更广泛的角度探索创意，获得更好的理解的同时积极的记录文章涵盖了一些可以进一步帮助这个想法产生类似的例子。

## Laravel的Eloquent ORM

Laravel 的 ORM 被称为 Eloquent ，它使得对预加载模型很简单，甚至预加载嵌套关系。下面建立后期模型示例，并学习如何使用 Laravel 项目中的预加载。

### 建立项目

通过基本 Composer 安装 Laravel ，数据库使用`sqlite`来做存储。

使用 Laravel 安装程序，我们来创建该项目

```bash
laravel new laravel-eloquent-lazy-loading
cd laravel-eloquent-lazy-loading && touch database/database.sqlite
```

编辑项目根目录下的`.env`文件中数据库相关配置。

```
DB_CONNECTION=sqlite
```

接下来生成一些数据库迁移、模型和数据库填充文件以便可以尝试加载嵌套关系。

> 这个例子很简单，所以我们可以把注意力集中在预加载上，在这个过程中省略了可能使用的东西，比如**索引**和**外键**约束。


```bash
php artisan make:model -m Post
php artisan make:model -m Author
php artisan make:model -m Profile
```


`-m` 参数的意思是创建一个迁移文件与将用于创建表模型一起使用。

数据模型将具有以下关联：

```
Post -> belongsTo -> Author
Author -> hasMany -> Post
Author -> hasOne -> Profile
```

### 迁移数据


为每个表创建一个简单的迁移语句。只需要修改`up()`方法，因为 **Laravel** 会自动为新表生成`down()。`迁移文件位于`databases/migrations/`文件夹中。

- `Post`

```php
<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('author_id');
            $table->string('title');
            $table->text('body');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('posts');
    }
}
```

- `Author`

```php
<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAuthorsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('authors', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->text('bio');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('authors');
    }
}
```


- `Profile`

```php
<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProfilesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('profiles', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('author_id');
            $table->date('birthday');
            $table->string('city');
            $table->string('state');
            $table->string('website');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('profiles');
    }
}
```

### 模型

需要定义模型关联来进行更多的预加载测试。当您在之前运行的命令`php artisan make:model`命令时，它已经为创建好了，文件在`app/`目录下。

- `app/Post.php`

```php
<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    public function author()
    {
        return $this->belongsTo(Author::class);
    }
}
```

- `app/Author.php

```php
<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Author extends Model
{
    public function profile()
    {
        return $this->hasOne(Profile::class);
    }

    public function posts()
    {
        return $this->hasMany(Post::class);
    }
}
```

随着模型和迁移到位，您可以运行迁移，然后继续尝试使用迁移模型数据进行预加载。

```bash
php artisan migrate
```

至此，在数据库中应该可以看到所创建的表。

### 模型工厂

为了创建一些可以用于查询的假数据，这里添加一些模型工厂并使用这些工厂来为测试数据。

打开 `database/factories/UserFactory.php` 文件，并将下面的内容追加到文件中。

```php
/** @var \Illuminate\Database\Eloquent\Factory $factory */
$factory->define(App\Post::class, function (Faker $faker) {
    return [
        'title' => $faker->sentence,
        'author_id' => function () {
            return factory(App\Author::class)->create()->id;
        },
        'body' => $faker->paragraphs(mt_rand(3, 10), true)
    ];
});

/** @var \Illuminate\Database\Eloquent\Factory $factory */
$factory->define(App\Author::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'bio' => $faker->paragraph
    ];
});

/** @var \Illuminate\Database\Eloquent\Factory $factory */
$factory->define(App\Profile::class, function (Faker $faker) {
    return [
        'birthday' => $faker->dateTimeBetween('-100 years', '-18 years'),
        'author_id' => function () {
            return factory(App\Author::class)->create()->id;
        },
        'city' => $faker->city,
        'state' => $faker->state,
        'website' => $faker->domainName
    ];
});
```


这些工厂方法可以很容易通过数据库填充创建一堆可以用于查询的模型数据。

打开`database/seeds/DatabaseSeeder.php`文件并将以下内容添加到`DatabaseSeeder::run()`方法中

```php
public function run()
{
    $authors = factory(App\Author::class, 5)->create();
    $authors->each(function ($author) {
        $author->profile()
            ->save(factory(App\Profile::class)->make());

        $author->posts()
            ->saveMany(
                factory(App\Post::class, mt_rand(20, 30))->make()
            );
    });
}
```


您创建了5个`Author`，然后遍历每位作者并保存关联的配置文件和许多帖子（每位作者的帖子数量为 20 到 30 篇）。

创建迁移，模型，模型工厂和数据库迁移，我们可以将它们全部结合起来，并以可重复的方式重新运行数据库数据迁移。

```bash
php artisan migrate:refresh
php artisan db:seed
```

成功执行完上面的操作后，现在应该有一些数据，为下面的操作做准备。

> 请注意 Laravel5.6 包含一个[migrate:fresh](https://laravel-news.com/migrate-fresh)命令，用于删除表而不是回滚迁移，然后重新应用它们。

### 尝试预加载

终于准备好看到预加载的行动，那怎么记录数据库查询语句呢？最佳方式是将查询记录到`storage/logs/laravel.log`日志文件中。

要记录数据库查询，通过 **DB** 门面的`listen()`方法记录查询，将以下代码添加到`app/providers/AppServiceProvider::boot()`方法中。

```php
<?php
namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        \DB::listen(function($query) {
            \Log::info(
                $query->sql,
                $query->bindings,
                $query->time
            );
        });
    }

    // ...
}
```

将这个`listen()`方法写在服务提供者`App\Providers\AppServiceProvide`中，以便可以打开和关闭数据库查询日志记录。

当然也可以使用扩展包 [Laravel Debugbar](https://laravel-news.com/laravel-debugbar) 获得更详细的查询记录。


让我们看看当我们不加载模型关系时会发生什么。运行`php artisan tinker`命令。

```php
namspace App;

$posts = Post::all();
$posts->map(function ($post) {
    return $post->author;
});
```

如果检查日志文件`storages/logs/laravel.log`，应该可以看到一堆查询以获取关联的作者

```
[2018-04-15 03:07:38] local.INFO: select * from "posts"
[2018-04-15 03:07:43] local.INFO: select * from "authors" where "authors"."id" = ? limit 1 ["1"]
[2018-04-15 03:07:43] local.INFO: select * from "authors" where "authors"."id" = ? limit 1 ["1"]
....
```

清空`storages/logs/laravel.log`日志文件，这次使用`with()`方法预加载作者记录`php artisan tinker`

```php
namespace App;

$posts = Post::with('author')->get();
$posts->map(function ($post) {
    return $post->author;
});
```

这次你只能在日志文件中看到两个查询。所有帖子的第一个查询，以及所有关联作者的第二个查询。

```
[2018-04-15 03:12:32] local.INFO: select * from "posts"  
[2018-04-15 03:12:32] local.INFO: select * from "authors" where "authors"."id" in (?, ?, ?, ?, ?) ["1","2","3","4","5"]
```

如果是有多个需要预加载的关联关系，可以向下面这种方法一样使用数组的方式来加载它们。

```php
$posts = App\Post::with(['author', 'comments'])->get();
```

### Eloquent的嵌套预加载

嵌套的预加载以相同的方式工作。在我们的例子中，`Author`模型有一个`Profile`个人详细信息。因此，将针对每个配置文件执行查询。

清空`storages/logs/laravel.log`文件，`php artisan tinker`再试试看

```php
namespace App;

$posts = Post::with('author')->get();
$posts->map(function ($post) {
    return $post->author->profile;
});
```

上面的命令对应的日志记录是

```
[2018-04-15 03:15:34] local.INFO: select * from "posts"  
[2018-04-15 03:15:34] local.INFO: select * from "authors" where "authors"."id" in (?, ?, ?, ?, ?) ["1","2","3","4","5"] 
[2018-04-15 03:15:35] local.INFO: select * from "profiles" where "profiles"."author_id" = ? and "profiles"."author_id" is not null limit 1 [1] 
[2018-04-15 03:15:35] local.INFO: select * from "profiles" where "profiles"."author_id" = ? and "profiles"."author_id" is not null limit 1 [2] 
[2018-04-15 03:15:35] local.INFO: select * from "profiles" where "profiles"."author_id" = ? and "profiles"."author_id" is not null limit 1 [3] 
......
```

现在有7个查询。前2个是预加载的，然后每当获得一个新的`Profile`模型时，都需要查询来获取每个作者的`Profile`数据。

使用嵌套预加载时可以避免嵌套关系中的额外查询。再次清除`storages/log/laravel.log` 文件并运行以下命令。

```php
namespace App;

$posts = Post::with('author.profile')->get();
$posts->map(function ($post) {
    return $post->author->profile;
});
```

现在，应该只有3个查询总数

```
[2018-04-15 03:18:25] local.INFO: select * from "posts"  
[2018-04-15 03:18:25] local.INFO: select * from "authors" where "authors"."id" in (?, ?, ?, ?, ?) ["1","2","3","4","5"] 
[2018-04-15 03:18:25] local.INFO: select * from "profiles" where "profiles"."author_id" in (?, ?, ?, ?, ?) [1,2,3,4,5] 
```

### 惰性预加载

可能只需要根据条件收集相关模型。在这种情况下，运行`php artisan tinker`为相关数据调用其他查询：

```php
namespace App;

$posts = Post::all();
$posts->load('author.profile');
$posts->first()->author->profile;
```

应该看到总共有三个查询，但只有在`$posts->load()`被调用时才会产生。

```
[2018-04-15 03:20:25] local.INFO: select * from "posts"  
[2018-04-15 03:20:40] local.INFO: select * from "authors" where "authors"."id" in (?, ?, ?, ?, ?) ["1","2","3","4","5"] 
[2018-04-15 03:20:40] local.INFO: select * from "profiles" where "profiles"."author_id" in (?, ?, ?, ?, ?) [1,2,3,4,5] 
```

## 结论

希望能更多地了解预加载模型并理解它在更深层次上的工作原理。

Laravel 官方 Eloquent 模型[预加载文档](https://laravel.com/docs/5.6/eloquent-relationships#eager-loading)写得也非常全面，希望通过额外的动手练习可以更好地了解优化关系查询。



## 参考地址

- [Optimize Laravel Eloquent Queries with Eager Loading](https://laravel-news.com/eloquent-eager-loading)


