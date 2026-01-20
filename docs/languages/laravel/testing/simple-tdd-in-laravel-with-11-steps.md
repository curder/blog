# Laravel中针对API的TDD步骤

测试驱动开发（英文：Test-driven development，缩写：TDD）是一种软件开发过程中的应用方法，由极限编程中倡导，以其倡导先写测试程序，然后编码实现其功能得名。

- Laravel `5.6.28`
- PHPUnit `7.2.7`

## 准备Laravel测试环境

### 修改测试配置

在项目根目录中，更新`phpunit.xml`文件的如下配置:

```xml

<env name="DB_CONNECTION" value="sqlite"/>
<env name="DB_DATABASE" value=":memory:"/>
<env name="API_DEBUG" value="false"/>
<ini name="memory_limit" value="512M"/>
```

更新完后`phpunit.xml`文件内容如下:

```xml {30-32,34}
<?xml version="1.0" encoding="UTF-8"?>
<phpunit backupGlobals="false"
         backupStaticAttributes="false"
         bootstrap="vendor/autoload.php"
         colors="true"
         convertErrorsToExceptions="true"
         convertNoticesToExceptions="true"
         convertWarningsToExceptions="true"
         processIsolation="false"
         stopOnFailure="false">
    <testsuites>
        <testsuite name="Feature">
            <directory suffix="Test.php">./tests/Feature</directory>
        </testsuite>

        <testsuite name="Unit">
            <directory suffix="Test.php">./tests/Unit</directory>
        </testsuite>
    </testsuites>
    <filter>
        <whitelist processUncoveredFilesFromWhitelist="true">
            <directory suffix=".php">./app</directory>
        </whitelist>
    </filter>
    <php>
        <env name="APP_ENV" value="testing"/>
        <env name="CACHE_DRIVER" value="array"/>
        <env name="SESSION_DRIVER" value="array"/>
        <env name="QUEUE_DRIVER" value="sync"/>
        <env name="DB_CONNECTION" value="sqlite"/>
        <env name="DB_DATABASE" value=":memory:"/>
        <env name="API_DEBUG" value="false"/>
        <env name="MAIL_DRIVER" value="log"/>
        <ini name="memory_limit" value="512M"/>
    </php>
</phpunit>
```

只需要在内存中进行测试，这样测试运行的速度会快些，所以在`database`配置项目中我们将使用`sqlite`和`:memory:` (Sqlite的内存数据库)。 将`APP_DEBUG`设置为`false`
，因为只需要对真实产生的错误进行断言。 另外，随着项目迭代测试用例会越来越多，在将来可能会需要增加`memory_limit`的值。

### 修改测试基类

在 Laravel 里测试用例的基类`Tests\TestCase`中作一些测试相关的准备

```php
<?php

namespace Tests;

use Faker\Factory as Faker;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Illuminate\Foundation\Testing\TestCase as BaseTestCase;

/**
 * Class TestCase
 *
 * @package Tests
 */
abstract class TestCase extends BaseTestCase
{
    use CreatesApplication, DatabaseMigrations, DatabaseTransactions;

    /**
     * @var \Faker\Factory
     */
    protected $faker;

    /**
     * Set up the test
     */
    public function setUp()
    {
        parent::setUp();
        $this->faker = Faker::create();
    }

    /**
     * Reset the migrations
     */
    public function tearDown()
    {
        $this->artisan('migrate:reset');
        parent::tearDown();
    }

}
```

## 编写测试用例

在终端使用命令`php artisan make:test Api/ArticleTest --unit`，生成的文件在`tests/Unit/Api/ArticleTest`，修改内容如下：

```php
<?php

namespace Tests\Unit\Api;

use Tests\TestCase;

/**
 * Class ArticleTest
 *
 * @package Tests\Unit\Api
 */
class ArticleTest extends TestCase
{
    /**
     * 创建文章
     */
    public function testCanCreateAnArticle()
    {
        $data = [
            'title' => $this->faker->sentence,
            'content' => $this->faker->paragraph
        ];

        $this->post(route('api.articles.store'), $data)
             ->assertStatus(201)
             ->assertJson($data);
    }
}
```

> 为了让`phpunit`识别测试，需要在测试方法上添加`/** @test */`注释标识或者是测试方法命名以`test`前缀开头，这里选择后者。

上面编写的测试中，测试是否能创建一篇文章，并且断言了在创建文章成功后应用将返回`201`状态码还有预期的`JSON`数据。

在创建好我们的第一个测试后，执行`phpunit`或者`vendor/bin/phpunit`

![](./images/laravel-tdd-route-not-defined-error.png)

在终端执行`vendor/bin/phpunit`后测试结果显示失败了，因为在测试驱动开发中是先写测试程序，然后在编码实现功能的。

所以在创建测试程序开始测试程序执行后的结果就是测试失败(测试驱动开发的第二条原则)。

### 在路由文件中创建请求的URL

在你项目中的`routes/api.php`文件中创建这个URL，在api中定义的路由其URL会自动加上`/api`前缀，如下定义一个资源路由。另外也可以通过在命令行运行`php artisan route:list`查看具体的路由详情。

```php
Route::group(['prefix' => 'v1', 'namespace' => 'Api', 'as' => 'api.'], function () {
    Route::resource('articles', 'ArticleController');
});
```

![](./images/laravel-tdd-response-error-code.png)

在测试中断言响应会返回`201`状态码但是却返回了`500`，是因为请求的路由指向的处理控制器文件不存在。这个`api/v1/articles` **POST** 路由在应用中并不存在所以针对这个请求应用抛出了`500`错误。

可以进一步调试 **POST** 请求后的输出，如果没有明确地给出提示发生了什么才导致的这个错误，可以打开Laravel应用的日志文件`/storage/logs/laravel.log`里查找详细的错误信息。

![](./images/laravel-tdd-controller-does-not-exists.png)

从上图可以看出`App\Http\Controllers\Api\ArticleController`控制器不存在。

### 编写控制器逻辑

在终端使用命令`php artisan make:controller Api/ArticleController`，生成的文件在`app/Http/Controllers/Api/ArticleController`，修改内容如下

```php
<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ArticleController extends Controller
{
    public function store(Request $request)
    {
        return Article::create($request->all());
    }
}
```

再次执行`vendor/bin/phpunit`运行测试，发生如下错误：

![](./images/laravel-tdd-response-201-error-code.png)

打开`storage/logs/laravel.log`查看错误，发现是模型找不到：

![](./images/laravel-tdd-model-does-not-exists.png)

## 创建模型

使用如下命令生成`Article`模型，模型文件默认在`app\Article`

```bash
php artisan make:model Article
```

创建好模型后，修改控制器`store`方法中对模型的引用：

```php
<?php

namespace App\Http\Controllers\Api;

use App\Article;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ArticleController extends Controller
{
    public function store(Request $request)
    {
        return Article::create($request->all());
    }
}
```

修改完成后，再次执行测试：

![](./images/laravel-tdd-model-fillable.png)

上面的命令报错是因为没有设置模型的`fillable`属性，修改如下：

```php
<?php
namespace App;

use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    protected $fillable = ['title', 'content'];
}
```

修改完毕后，再次执行测试：

![](./images/laravel-tdd-table-does-not-exists.png)

如上报错，说明数据库表不存在，需要执行迁移文件生成对应的数据表

## 生成迁移文件

使用下面的命令生成迁移文件：

```bash
php artisan make:migration create_articles_table --create=articles
```

生成的文件目录在`databases/migrations`下，可以打开对应的文件修改内容如下：

```php
<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateArticlesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('articles', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title');
            $table->text('content');
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
        Schema::dropIfExists('articles');
    }
}
```

当定义好迁移文件后再次执行`vendor/bin/phpunit`，发现成功了。

![](./images/laravel-tdd-success.png)

通过文章总结起来测试驱动开发有三条原则：

- 倡导先写测试程序，再编码实现功能

- 测试程序创建起肯定会测试失败

- 在让测试程序测试成功的过程中逐步编码实现功能

## 参考链接

- [英文原文：Simple TDD in Laravel with 11 steps](https://medium.com/@jsdecena/simple-tdd-in-laravel-with-11-steps-c475f8b1b214)
- [中文翻译：简单的11步在Laravel中实现测试驱动开发](https://segmentfault.com/a/1190000015653724)
