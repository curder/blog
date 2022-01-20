# 关联资源

在[使用 laravel nova 定义更多字段](/languages/laravel/nova/03-how-to-defining-more-fields-use-laravel-nova.md)中说到使用 nova
定义了更多的字段，这里对一些表之间的关联关系进行一些设定。

## BelongsTo 和 HasMany

### 定义数据关联关系

#### 数据库迁移文件

```bash
php artisan make:migration alter_posts_table_add_user_id_field --table=posts
```

```php
<?php
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
class AlterPostsTableAddUserIdField extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('posts', function (Blueprint $table) {
            $table->unsignedBigInteger('user_id')->nullable();
        });
    }
    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('posts', function (Blueprint $table) {
            $table->dropColumn(['user_id']);
        });
    }
}
```

修改完迁移文件后将数据库迁移执行。

```bash
php artisan migrate
```

#### 定义模型关联关系

- `app\Post.php`

```php
user App\User;
public function user()
{
    return $this->belongsTo(User::class);
}
```

- `app\User.php`

```php
user App\Post;
public function posts()
{
    return $this->hasMany(Post::class);
}
```

### 定义页面展示的关联关系

- `app\Nova\Post.php`

```php
use Laravel\Nova\Fields\BelongsTo;
public function fields(Request $request)
{
    return [
        // ...

        BelongsTo::make('User')
    ];
}
```

> 定义完上面的可以在文章新增和编辑页面查看到关于用户的选择字段，并在列表页能看到选择的归属用户。
> **默认显示的用户名，如果需要显示用户的其他字段比如说 email，可以修改`app\Nova\User.php`中的静态属性`$title`**

- `app\Nova\User.php`

```php
use Laravel\Nova\Fields\HasMany;
public function fields(Request $request)
{
    return [
        // ...
        HasMany::make('Posts'),
    ];
}
```

> 定义完上面的配置后，可以在用户的详情页面看到当前用户关联的所有文章列表。

## BelongsToMany

### 新建关联表和模型以及模型的关联关系

```bash
php artisan make:model Tag -m
php artisan make:migration create_post_tag_table
```

- `databases/migrations/2019_03_08_061325_create_tags_table.php`

```php
<?php
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
class CreateTagsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tags', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('title');
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
        Schema::dropIfExists('tags');
    }
}
```

- `2019_03_08_062226_create_post_tag_table.php`

```php
<?php
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
class CreatePostTagTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('post_tag', function (Blueprint $table) {
            $table->bigInteger('post_id')->unsigned()->index();
            $table->foreign('post_id')->references('id')->on('posts')->onDelete('cascade');
            $table->bigInteger('tag_id')->unsigned()->index();
            $table->foreign('tag_id')->references('id')->on('tags')->onDelete('cascade');
        });
    }
    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('post_tag');
    }
}
```

> 多对多关联关系中间表

- `app\Tag.php`

```php
<?php
namespace App;
use Illuminate\Database\Eloquent\Model;
class Tag extends Model
{
    public function posts()
    {
        return $this->belongsToMany(Post::class);
    }
}
```

- `app\Post.php`

```php
<?php
namespace App;
use Illuminate\Database\Eloquent\Model;
class Post extends Model
{
    public function tags()
    {
        return $this->belongsToMany(Tag::class);
    }
}
```

### 新建资源

```bash
php artisan nova:resource Tag
```

- 修改`app\Nova\Tag.php`

```php
use Laravel\Nova\Fields\BelongsToMany;

public static $title = 'title';
public static $search = [
    'id', 'title'
];
public function fields(Request $request)
{
    return [
        // ...
        BelongsToMany::make('Posts'),
    ];
}
```

- 修改`app\Nova\Post.php`

```php
use Laravel\Nova\Fields\BelongsTo;
use Laravel\Nova\Fields\BelongsToMany;

public function fields(Request $request)
{
    return [
        // ...

        BelongsTo::make('User'),

        BelongsToMany::make('Tags'),
    ];
}
```

- 访问文章的查看界面可以看到关联的标签列表，并能进行增删改操作。
  <img :src="$withBase('/images/languages/laravel/nova/how-to-use-resources-relationships-in-laravel-nova/laravel-nova-relationship-post-has-many-tags.png')" alt="">

- 访问标签的查看界面可以看到关联的文章列表，并能进行增删改操作。
  <img :src="$withBase('/images/languages/laravel/nova/how-to-use-resources-relationships-in-laravel-nova/laravel-nova-relationship-tag-has-many-posts.png')" alt="">

## 参考链接

- [Laravel Nova Relationships](https://nova.laravel.com/docs/2.0/resources/relationships.html#hasone)
- [Laravel 5 Extended Generators](https://github.com/laracasts/Laravel-5-Generators-Extended#pivot-tables)
