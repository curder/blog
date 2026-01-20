# Laravel5确认框从数据库示例中删除记录

有时候需要一个确认框，例如提示用户“确定要删除这条记录?”，然后才从数据库中删除记录，如何通过一个简单的例子来整合从数据库中删除记录的确认框。

下面在laravel中使用[Bootstrap Confirmation](https://github.com/mistic100/Bootstrap-Confirmation)插件。

都知道在从数据库中删除某些东西之前确认警报很重要，如果没有使用任何确认，并且如果用户误点击删除按钮，可能会导致数据丢失。

在此之前，使用bootstrap确认插件开始执行laravel中的删除确认框。

## 升级Laravel项目并简单配置

### 使用composer创建Laravel项目

```bash
composer create-project laravel/laravel laravel5-confirmation-box
```

### 配置数据库连接信息

演示以`sqlite`数据库为例。

```bash
cd laravel5-confirmation-box && touch database/database.sqlite
```

创建数据库，然后更新项目根目录下的`.env`文件上如下的相关行：

```dotenv
DB_CONNECTION=mysql
```

环境配置文件中的其他相关`DB`连接信息全部删除，更新上面的行来完成数据库相关设置。

## artisan命令

```bash
composer require "laravelcollective/html" # 安装Form插件

php artisan migrate
php artisan tinker
factory(App\User::class, 10)->create();
```
> 这样的话数据库就填充了10条用户数据

## 添加路由

在第二步中，我们将添加所需的路线来执行任务。所以只需要将以下代码行复制到您的`routes/web.php`文件中即可。

```php
Route::get('users', 'UsersController@index');
Route::delete('users/{id}', ['as' => 'users.destroy','uses' => 'UsersController@destroy']);
```

## 创建控制器

现在我们将创建一个控制器来通过不同的方法执行操作任务。在这个例子中，我将使用两个方法`index()` 和 `destroy()` 在路径`app/Http/Controllers`目录中创建一个名为`UsersController.php`的控制器文件。

```bash
php artisan make:controller UsersController
```

内容大致如下：

```php
<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
class UsersController extends Controller
{
    public function index(Request $request){
        $users = \DB::table("users")->paginate(5);
        return view('users',compact('users'))
                ->with('i', ($request->input('page', 1) - 1) * 5);
    }
    public function destroy($id){
        \DB::table("users")->delete($id);
        return redirect()->back()->with('success','Member deleted');
    }
}
```

## 创建一个视图文件

创建一个名为`users.blade.php`的文件来查看记录以及从哪里删除特定记录。在这个文件中，将使用所需的引导确认插件文件。

**resources/views/users.blade.php**

```html
<!DOCTYPE html>
<html>
<head>
    <title></title>
    <link href="https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <script src="https://cdn.bootcss.com/bootstrap-confirmation/1.0.5/bootstrap-confirmation.min.js"></script>
</head>
<body>
    @if ($message = Session::get('success'))
        <div class="alert alert-success">
            <p>{{ $message }}</p>
        </div>
    @endif
    <table class="table table-bordered">
        <tr>
            <th>No</th>
            <th>Name</th>
            <th>Email</th>
            <th width="280px">Action</th>
        </tr>
    @foreach ($users as $user)
    <tr>
        <td>{{ ++$i }}</td>
        <td>{{ $user->name}}</td>
        <td>{{ $user->email}}</td>
        <td>
            {!! Form::open(['method' => 'DELETE','route' => ['users.destroy', $user->id],'style'=>'display:inline']) !!}
            {!! Form::button('Delete', ['class' => 'btn btn-danger','data-toggle'=>'confirmation']) !!}
            {!! Form::close() !!}
        </td>
    </tr>
    @endforeach
    </table>
    {!! $users->render() !!}
<script type="text/javascript">
    $(document).ready(function () {
        $('[data-toggle=confirmation]').confirmation({
            placement: 'right',
            rootSelector: '[data-toggle=confirmation]',
            onConfirm: function (event, element) {
                element.closest('form').submit();
            }
        });
    });
</script>
</body>
</html>
```

* `bootstrap.min.css` >= 3.2
* `jQuery` >= 1.9
* `bootstrap.min.js` >= 3.2
* `bootstrap-confirmation.min.js`

![](./images/laravel5-confirmation-box-to-delete-records-from-mysql-database-example.png)


更多的插件参数和事件的使用详情[参考这里](http://bootstrap-confirmation.js.org)。

## 参考链接

* [Laravel5 confirmation box for deleting a record from mysql database example](http://www.phpzone.in/laravel5-confirmation-box-deleting-record-mysql-database-example/)
* [bootstrap-confirmation v1.0.7](https://github.com/mistic100/Bootstrap-Confirmation)
