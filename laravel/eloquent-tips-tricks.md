## 20个Laravel Eloquent的提示和技巧

Laravel Eloquent的ORM看起来像一个简单的机制。但是有很多半隐藏的功能和不太知名的方式来实现更多。在这篇文章中，我们来回顾一下这些技巧。

### 增量和减量

- 您之前可能这样写
```
$article = Article::find($article_id);
$article->read_count++;
$article->save();
```

- 更优雅的示范
```
$article = Article::find($article_id);
$article->increment('read_count');
```

- 下面这些也可以使用
```
Article::find($article_id)->increment('read_count'); // +1
Article::find($article_id)->increment('read_count', 10); // +10
Product::find($produce_id)->decrement('stock'); // -1
```

### X或者Y方法

Laravel Eloquent 有相当多的功能结合了两种方法，比如"请做x，否则做y"。

#### `findOrFail()` 方法

- 您之前可能这样写
```
$user = User::find($id);
if (!$user) abort (404);
```

- 更优雅的示范
```
$user = User::findOrFail($id);
```

#### `firstOrCreate()`方法

- 您之前可能这样写
```
$user = User::where('email', $email)->first();
if (!$user) {
  User::create([
    'email' => $email
  ]);
}
```

- 更优雅的做法
```
$user = User::firstOrCreate(['email' => $email]);
```

### 模型 `boot()` 方法


在Laravel Eloquent的模型中有一个叫做`boot()`的静态方法，您可以通过在模型中重写来覆盖默认行为。

```
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




