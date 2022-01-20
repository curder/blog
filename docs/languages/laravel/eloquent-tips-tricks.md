# Eloquent 模型技巧

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

## `BelongsTo`默认模型

假设您的帖子属于作者，然后是Blade代码

```php
{{ $post->author->name }}
```

但是如果作者被删除或者由于某种原因没有设置呢？您会得到一个错误，像`property of non-object`。

当然，您可以像这样防止它 `$post->author->name ?? ''`

但您可以在Laravel Eloquent Model的关联关系层面上做到这一点：

```php
public function author()
{
    return $this->belongsTo('App\Author')->withDefault();
}
```

在这个例子中，如果没有作者附加到该帖子，`author()`关系将返回一个空的`App\Author`模型。

此外，我们可以将默认属性值分配给该默认模型。

```php
public function author()
{
    return $this->belongsTo('App\Author')->withDefault([
        'name' => 'Guest Author'
    ]);
}
```

## 使用变化属性排序

假如您有下面的模型方法

```php
function getFullNameAttribute()
{
    return $this->attributes['first_name'] . ' ' . $this->attributes['last_name'];
}
```

现在您想通过`full_name`来排序，您可能会这么做

```php
$clients = Client::orderBy('full_name')->get(); // 这样是不会生效的
```

解决方案非常简单。我们需要在获得结果后对结果进行排序。

```php
$clients = Client::get()->sortBy('full_name'); // 成功排序
```

> **注意：**函数名称是不同的，它不是`orderBy`，而是`sortBy`。[更多可以参考这里](http://laraveldaily.com/eloquent-order-results-mutator-attribute/)

## 全局范围内的默认排序

如果您想让`User::all()`总是按名称字段排序呢？您可以指定一个全局范围。

请回到上面已经提到的`boot()`方法。

```php
protected static function boot()
{
    parent::boot();

    // Order by name ASC
    static::addGlobalScope('order', function (Builder $builder) {
        $builder->orderBy('name', 'asc');
    });
}
```

更多[查询作用域参考这里](https://laravel-china.org/docs/laravel/5.6/eloquent#query-scopes)

## 原始查询方法

有时我们需要将原始查询添加到我们的雄辩报表中。幸运的是，Laravel Eloquent Model 提供了这样的功能。

```php
// whereRaw
$orders = DB::table('orders')
    ->whereRaw('price > IF(state = "TX", ?, 100)', [200])
    ->get();

// havingRaw
Product::groupBy('category_id')->havingRaw('COUNT(*) > 1')->get();

// orderByRaw
User::where('created_at', '>', '2016-01-01')
  ->orderByRaw('(updated_at - created_at) desc')
  ->get();
```

## 复制数据库行

没有深入的解释，这里是制作数据库行数据副本的最佳方法

```php
$task = Tasks::find(1);
$newTask = $task->replicate();
$newTask->save();
```

## 大数据量的情况下请使用`chunk()`方法

不完全是Eloquent的相关，它更多的是collect，但仍然强大。方便您处理更大的数据集，您可以把它们分成几块。

- 您之前可能这样写

```php
$users = User::all();
foreach ($users as $user) {
    // ...
}
```

- 更优雅的示范

```php
User::chunk(100, function ($users) {
    foreach ($users as $user) {
        // ...
    }
});
```

## 创建模型时创建更多的东西

您可能知道 Laravel 的 artisan 命令，例如：

```bash
php artisan make:model Company
```

但是您知道有三个有用的标志可以为模型生成相关的文件吗？

```bash
php artisan make:model Company -mcr
```

- `-m` 创建数据库迁移文件
- `-c` 创建一个controller控制器
- `-r` 将声明控制器应该是资源控制器

## 在保存时覆盖 updated_at

您知道执行 `->save()` 方法可以接受参数吗？因此，您可以告诉它“忽略”`updated_at`默认功能以填充当前时间戳。

```php
$product = Product::find($id);
$product->updated_at = '2019-01-01 10:00:00';
$product->save(['timestamps' => false]);
```

这里您用您预先定义的覆盖默认`updated_at`，当前修改行的时间将被设置为上面的`2019-01-01 10:00:00`。

## `update()`的结果是什么？

您有没有想过这段代码实际返回的内容？

```php
$result = $products->whereNull('category_id')->update(['category_id' => 2]);
```

更新如果在数据库中执行，但是`$result`包含什么？

答案是更新操作所影响的行数。

所以如果您需要检查有多少行受到影响，则不需要调用其他方法，`update()` 方法将为您返回此数字。

## 将括号转换为一个Eloquent的查询

如果您有`and|or`混入你的SQL查询，如下所示：

```sql
... WHERE (gender = 'Male' and age >= 18) or (gender = 'Female' and age >= 65)
```

如何把它翻译成Eloquent呢？这是错误的方式：

```php
$q->where('gender', 'Male');
$q->orWhere('age', '>=', 18);
$q->where('gender', 'Female');
$q->orWhere('age', '>=', 65);
```

正确的方法稍微复杂一点，使用闭包函数作为子查询：

```php
$q->where(function ($query) {
    $query->where('gender', 'Male')
        ->where('age', '>=', 18);
})->orWhere(function($query) {
    $query->where('gender', 'Female')
        ->where('age', '>=', 65); 
});
```

## `orWhere`有多个参数的地方

最后，您可以将一组参数传递给`orwhere()`

```php
$q->where('a', 1);
$q->orWhere('b', 2);
$q->orWhere('c', 3);
```

- 更优雅的做法

```php
$q->where('a', 1);
$q->orWhere(['b' => 2, 'c' => 3]);
```

## 参考链接

- [英文原文：20 Laravel Eloquent Tips and Tricks](https://laravel-news.com/eloquent-tips-tricks)
- [Laravel源码 - Abstract Model class](https://github.com/laravel/framework/blob/5.6/src/Illuminate/Database/Eloquent/Model.php)
- [Eloquent手册 - 查询作用域](https://laravel-china.org/docs/laravel/5.6/eloquent#query-scopes)
- [Eloquent: How to Order Results by Mutator Attribute?](http://laraveldaily.com/eloquent-order-results-mutator-attribute/)
