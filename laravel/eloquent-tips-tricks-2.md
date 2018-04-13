## Laravel Eloquent的提示和技巧Ⅱ

> 英文原文：[20 Laravel Eloquent Tips and Tricks](https://laravel-news.com/eloquent-tips-tricks) 



### `BelongsTo`默认模型


假设您的帖子属于作者，然后是Blade代码

```
{{ $post->author->name }}
```

但是如果作者被删除或者由于某种原因没有设置呢？您会得到一个错误，像`property of non-object`。

当然，您可以像这样防止它 `{{ $post->author->name ?? '' }}`

但您可以在Laravel Eloquent Model的关联关系层面上做到这一点：

```
public function author()
{
    return $this->belongsTo('App\Author')->withDefault();
}
```

在这个例子中，如果没有作者附加到该帖子，`author()`关系将返回一个空的`App\Author`模型。

此外，我们可以将默认属性值分配给该默认模型。

```
public function author()
{
    return $this->belongsTo('App\Author')->withDefault([
        'name' => 'Guest Author'
    ]);
}
```


### 使用变化属性排序

假如您有下面的模型方法
```
function getFullNameAttribute()
{
    return $this->attributes['first_name'] . ' ' . $this->attributes['last_name'];
}
```

现在您想通过`full_name`来排序，您可能会这么做
```
$clients = Client::orderBy('full_name')->get(); // 这样是不会生效的
```

解决方案非常简单。我们需要在获得结果后对结果进行排序。
```
$clients = Client::get()->sortBy('full_name'); // 成功排序
```

> **注意：**函数名称是不同的，它不是`orderBy`，而是`sortBy`。[更多可以参考这里](http://laraveldaily.com/eloquent-order-results-mutator-attribute/)


### 全局范围内的默认排序

如果您想让`User::all()`总是按名称字段排序呢？您可以指定一个全局范围。

请回到上面已经提到的`boot()`方法。

```
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


### 原始查询方法

有时我们需要将原始查询添加到我们的雄辩报表中。幸运的是，Laravel Eloquent Model 提供了这样的功能。

```
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


### 复制数据库行

没有深入的解释，这里是制作数据库行数据副本的最佳方法

```
$task = Tasks::find(1);
$newTask = $task->replicate();
$newTask->save();
```


### 大数据量的情况下请使用`chunk()`方法

不完全是Eloquent的相关，它更多的是collect，但仍然强大。方便您处理更大的数据集，您可以把它们分成几块。

- 您之前可能这样写
```
$users = User::all();
foreach ($users as $user) {
    // ...
}
```


- 更优雅的示范
```
User::chunk(100, function ($users) {
    foreach ($users as $user) {
        // ...
    }
});
```

### 创建模型时创建更多的东西

您可能知道Laravel的artisan命令，例如：
```
php artisan make:model Company
```

但是您知道有三个有用的标志可以为模型生成相关的文件吗？

```
php artisan make:model Company -mcr
```

- `-m` 创建数据库迁移文件
- `-c` 创建一个controller控制器
- `-r` 将声明控制器应该是资源控制器

### 在保存时覆盖updated_at

您知道执行 `->save()` 方法可以接受参数吗？因此，您可以告诉它“忽略”`updated_at`默认功能以填充当前时间戳。

```
$product = Product::find($id);
$product->updated_at = '2019-01-01 10:00:00';
$product->save(['timestamps' => false]);
```

这里您用您预先定义的覆盖默认`updated_at`，当前修改行的时间将被设置为上面的`2019-01-01 10:00:00`。


### `update()`的结果是什么？

您有没有想过这段代码实际返回的内容？

```
$result = $products->whereNull('category_id')->update(['category_id' => 2]);
```

更新如果在数据库中执行，但是`$result`包含什么？

答案是更新操作所影响的行数。

所以如果您需要检查有多少行受到影响，则不需要调用其他方法，`update()` 方法将为您返回此数字。

### 将括号转换为一个Eloquent的查询

如果您有`and|or`混入你的SQL查询，如下所示：

```
... WHERE (gender = 'Male' and age >= 18) or (gender = 'Female' and age >= 65)
```

如何把它翻译成Eloquent呢？这是错误的方式：

```
$q->where('gender', 'Male');
$q->orWhere('age', '>=', 18);
$q->where('gender', 'Female');
$q->orWhere('age', '>=', 65);
```

正确的方法稍微复杂一点，使用闭包函数作为子查询：

```
$q->where(function ($query) {
    $query->where('gender', 'Male')
        ->where('age', '>=', 18);
})->orWhere(function($query) {
    $query->where('gender', 'Female')
        ->where('age', '>=', 65); 
})
```

### `orWhere`有多个参数的地方

最后，您可以将一组参数传递给`orwhere()`

```
$q->where('a', 1);
$q->orWhere('b', 2);
$q->orWhere('c', 3);
```

- 更优雅的做法
```
$q->where('a', 1);
$q->orWhere(['b' => 2, 'c' => 3]);
```


## 参考链接

英文原文：[20 Laravel Eloquent Tips and Tricks](https://laravel-news.com/eloquent-tips-tricks) 

[Laravel源码 - Abstract Model class](https://github.com/laravel/framework/blob/5.6/src/Illuminate/Database/Eloquent/Model.php)

[Eloquent手册 - 查询作用域](https://laravel-china.org/docs/laravel/5.6/eloquent#query-scopes)

[Eloquent: How to Order Results by Mutator Attribute?](http://laraveldaily.com/eloquent-order-results-mutator-attribute/)