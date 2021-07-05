# Laravel Eloquent 模型技巧1

> 英文原文：[20 Laravel Eloquent Tips and Tricks](https://laravel-news.com/eloquent-tips-tricks)

Laravel Eloquent 的ORM看起来像一个简单的机制。

但是有很多半隐藏的功能和不太知名的方式来实现更多。在这篇文章中，我们来回顾一下这些技巧。

## 增量和减量

- 您之前可能这样写

```php
$article = Article::find($article_id);
$article->read_count++;
$article->save();
```

- 更优雅的示范

```php
$article = Article::find($article_id);
$article->increment('read_count');
```

- 下面这些也可以使用

```php
Article::find($article_id)->increment('read_count'); // +1
Article::find($article_id)->increment('read_count', 10); // +10
Product::find($produce_id)->decrement('stock'); // -1
```

## X或者Y方法

Laravel Eloquent 有相当多的功能结合了两种方法，比如"请做x，否则做y"。

### `findOrFail()` 方法

- 您之前可能这样写

```php
$user = User::find($id);
if (!$user) {abort (404);}
```

- 更优雅的示范

```php
$user = User::findOrFail($id);
```

### `firstOrCreate()`方法

- 您之前可能这样写

```php
$user = User::where('email', $email)->first();
if (!$user) {
  User::create([
    'email' => $email
  ]);
}
```

- 更优雅的做法

```php
$user = User::firstOrCreate(['email' => $email]);
```

## 模型 `boot()` 方法

在Laravel Eloquent的模型中有一个叫做`boot()`的静态方法，您可以通过在模型中重写来覆盖默认行为。

```php
class User extends Model
{
    public static function boot()
    {
        parent::boot();
        static::updating(function($model)
        {
            // do some logging
            // override some property like $model->something = transform($something);
        });
    }
}
```

可能最常见的例子之一就是在创建模型对象时设置一些字段值。

这里假设您想在那个时候生成[uuid](https://github.com/webpatser/laravel-uuid)字段。

```php
public static function boot()
{
  parent::boot();
  self::creating(function ($model) {
    $model->uuid = (string)Uuid::generate();
  });
}
```

## 关联关系中的条件和排序

您可以在模型中这样定义关系的典型方式

```php
public function users() {
    return $this->hasMany('App\User');
}
```

但是您知道在这一点上我们已经可以添加位置或命令了吗？

例如，如果您想要某种类型的用户的特定关系，并可以通过电子邮件排序，则可以执行此操作

```php
public function approvedUsers() {
    return $this->hasMany('App\User')->where('approved', 1)->orderBy('email');
}
```

## 模型属性：时间戳，追加等。

有一个Laravel Eloquent Model 的几个参数，以类的属性的形式声明，最常用的可能是下面这些。

```php
class User extends Model {
    protected $table = 'users'; // 当前模型表名
    protected $fillable = ['email', 'password']; // 定义能够批量填充的字段，比如：使用User::create()来填充数据库数据
    protected $dates = ['created_at', 'deleted_at']; // 能被Carbon-ized时间转化的字段
    protected $appends = ['field1', 'field2']; // 在JSON字符串中追加值
}
```

下面还有更多

```php
protected $primaryKey = 'uuid'; // 表主键，如果不是默认的id的话
public $incrementing = false; // 如果不需要自增，将值设置为false
protected $perPage = 25; // 分页页码数，默认是15
const CREATED_AT = 'created_at'; // 创建时间字段值，如果不是默认的created_at，需要修改这个常量值

const UPDATED_AT = 'updated_at'; // 更新时间字段值，如果不是默认的updated_at，需要修改这个常量值
public $timestamps = false; // 如果不使用时间戳需要设置为false值
```

更多请查看默认[抽象模型类](https://github.com/laravel/framework/blob/5.6/src/Illuminate/Database/Eloquent/Model.php)的代码并查看所有使用的特征。

## 找到多个实体

我们都知道`find()`方法。

```php
$user = User::find(1);
```

但是很少有人知道它可以接受多个ID作为数组：

```php
$users = User::find([1,2,3]);
```

## WhereX

- 您之前可能这样写

```php
$users = User::where('approved', 1)->get();
```

- 更优雅的解决示例

```php
$users = User::whereApproved(1)->get();
```

您可以更改任何字段的名称，并将其作为后缀追加到“where”，它将按魔术方法帮您达成目标。

另外，还有一些预先定义好的与日期/时间相关的方法

```php
User::whereDate('created_at', date('Y-m-d'));
User::whereDay('created_at', date('d'));
User::whereMonth('created_at', date('m'));
User::whereYear('created_at', date('Y'));
```

## 按关联关系排序

一些更复杂的“技巧”，如果您有论坛话题，但想通过最新的帖子查看它们呢？

首先，描述关于该主题的最新帖子的单独关系

```php
public function latestPost()
{
    return $this->hasOne(\App\Post::class)->latest();
}
```

然后，在您的控制器方法中您可以做到这一点“魔术”

```php
$users = Topic::with('latestPost')->get()->sortByDesc('latestPost.created_at');
```

## 使用`Eloquent::when()`，尽量不使用if-else's

您之前可能用`if-else`编写条件查询，如下所示：

```php
if (request('filter_by') == 'likes') {
    $query->where('likes', '>', request('likes_amount', 0));
}
if (request('filter_by') == 'date') {
    $query->orderBy('created_at', request('ordering_rule', 'desc'));
}
```

但有一个更好的方法 - 使用`when()`：

```php
$query = Author::query();
$query->when(request('filter_by') == 'likes', function ($q) {
    return $q->where('likes', '>', request('likes_amount', 0));
});
$query->when(request('filter_by') == 'date', function ($q) {
    return $q->orderBy('created_at', request('ordering_rule', 'desc'));
});
```

通过观察您可能会发现，使用`when()`方法可能不会感觉更短或更优雅，但是它的强大之处是传递参数

```php
$query = User::query();
$query->when(request('role', false), function ($q, $role) { 
    return $q->where('role_id', $role);
});
$authors = $query->get();
```

## 参考链接

- [英文原文：20 Laravel Eloquent Tips and Tricks](https://laravel-news.com/eloquent-tips-tricks)
- [Laravel源码 - Abstract Model class](https://github.com/laravel/framework/blob/5.6/src/Illuminate/Database/Eloquent/Model.php)
- [Eloquent手册 - 查询作用域](https://laravel-china.org/docs/laravel/5.6/eloquent#query-scopes)
- [Eloquent: How to Order Results by Mutator Attribute?](http://laraveldaily.com/eloquent-order-results-mutator-attribute/)
