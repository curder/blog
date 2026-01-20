# 定义资源

通过[安装 laravel nova](/languages/laravel/nova/01-how-to-installation-laravel-nove.md)已经了解了 nova 的安装。

下面通过简单的文章增删改查来展示 nova 的高效开发后台。

## 建立模型和数据文件

```bash
php artisan make:model Post -m
```

执行完上面的命令会建立两个文件，分别是`app/Post.php`和`database/migrations/2019_03_07_091258_create_posts_table.php`文件。

修改`2019_03_07_091258_create_posts_table.php`数据库迁移文件的内容：

```php
/**
 * Run the migrations.
 *
 * @return void
 */
public function up()
{
    Schema::create('posts', function (Blueprint $table) {
        $table->bigIncrements('id');
        $table->string('title');
        $table->text('body');
        $table->timestamps();
    });
}
```

修改完迁移文件后，使用命令将迁移文件应用到数据库

```bash
php artisan migrate
```

## 建立 nova 资源文件

```bash
php artisan nova:resource Post
```
![](./how-to-defining-resources-use-laravel-nova/laravel-nova-post-resource-init-index.png)

![](./how-to-defining-resources-use-laravel-nova/laravel-nova-post-resource-init-create.png)

可以看到，新增页面没有任何的表字段可以添加。

命令运行完命令后会添加`app/Nova/Post.php`，可以通过修改其中的`fields`方法返回值：

```php
use Laravel\Nova\Fields\Text;
use Laravel\Nova\Fields\Markdown;
public function fields(Request $request)
{
    return [
        ID::make()->sortable(),
        Text::make('Title')->rules('required')->sortable(),
        Markdown::make('Body')->rules('required'),
    ];
}
```

再次查看新增页面可以看到如下的输出。

![](./how-to-defining-resources-use-laravel-nova/laravel-nova-post-resource-add-fields-for-create.png)

至此，一个简单的 Posts 管理界面开发完毕，后面再对这些 CURD 界面进行一些定制化开发。

## 参考链接

- [Laravel Nova Resources Document](https://nova.laravel.com/docs/2.0/resources/)
- [Laravel Nova 入门创建一个简单的博客(一)](https://leijingwei.com/archives/31)
