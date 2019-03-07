# 使用 laravel nova 定义更多字段

在[使用 laravel nova 定义资源](/laravel/nova/how-to-defining-resources-use-laravel-nova.md)中说到使用 nova 定义资源，这里对不同的资源使用不同的类型的列字段。

## 给表添加不同类型的列

```
php artisan make:migration --table=posts add_more_fields_to_posts_table
```

迁移文件的内容如下：

```
/**
    * Run the migrations.
    *
    * @return void
    */
public function up()
{
    Schema::table('posts', function (Blueprint $table) {
        $table->datetime('publish_at')->nullable();
        $table->datetim),publish_until')->nullable();
        $table->boolean('is_published')->default(false);  // 自定义数据库字段名
        $table->string('category')->nullable();
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
        $table->dropColumn(['publish_at', 'publish_until', 'is_published', 'category']);
    });
}
```

执行迁移文件

```
php artisan migrate
```

## 添加字段

```
use Laravel\Nova\Fields\DateTime;
use Laravel\Nova\Fields\Boolean;
use Laravel\Nova\Fields\Select;
public function fields(Request $request)
{
    return [
        ID::make()->sortable(),
        Text::make('Title')->rules('required')->sortable(),
        Markdown::make('Body')->rules('required'),

        DateTime::make('Publish At'),
        DateTime::make('Publish Until'),
        Boolean::make('Active', 'is_active'),  // 自定义数据库字段名
        Select::make('category')->options([
            'category-1' => 'Category One',
        ])
    ];
}
```

> 更多字段可以[查看官方文档](https://nova.laravel.com/docs/2.0/resources/fields.html#field-types)

当定义好上面的字段类型后，修改一个文章的`Publish At`和`Publish Until`字段，会提示`DateTime field must cast to 'datetime' in Eloquent model.`，错误。

这是因为我们在模型中定义`$casts`属性的字段类型。

修改`App\Post.php`模型中的属性值：

```
<?php
namespace App;
use Illuminate\Database\Eloquent\Model;
class Post extends Model
{
    protected $casts = [
        'publish_at' => 'datetime',
        'publish_until' => 'datetime',
    ];
}
```

## 字段隐藏

通过修改`app\Nova\Post.php`中的`fields`方法返回值。

### 首页隐藏字段

默认在文章的列表页将所有的字段都展示出来，这可能不是真实需求，隐藏`publish_at`和`publish_until`字段。

```
public function fields(Request $request)
{
    return [
        // ...
        DateTime::make('Publish At')->hideFromIndex(),
        DateTime::make('Publish Until')->hideFromIndex(),
        // ...
    ];
}
```

### 更新页面隐藏字段

```
public function fields(Request $request)
{
    return [
        // ...
        Select::make('category')->options([
            'category-1' => 'Category One',
        ])->hideWhenUpdating()
    ];
}
```

> 更多的隐藏和显示选项可以[查看这里](https://nova.laravel.com/docs/2.0/resources/fields.html#showing-hiding-fields)
>
> - hideFromIndex
> - hideFromDetail
> - hideWhenCreating
> - hideWhenUpdating
> - onlyOnIndex
> - onlyOnDetail
> - onlyOnForms
> - exceptOnForms

## 参考地址

- [Laravel Nova Field Types](https://nova.laravel.com/docs/2.0/resources/fields.html#field-types)
- [Laravel Nova Showing Or Hiding Fields](https://nova.laravel.com/docs/2.0/resources/fields.html#showing-hiding-fields)
