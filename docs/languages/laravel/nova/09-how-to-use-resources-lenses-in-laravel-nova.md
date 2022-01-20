# Lenses

与过滤器类似， Nova lenses 允许开发人员充分的定制资源的底层 Eloquent 查询。

例如，希望列出所有应用的用户，并按照总的收入来排序。

创建这样一个列表可能需要连接额外的数据表和在查询中执行聚合函数。

听起来挺复杂的，但是不要担心 - 这正是 lenses 旨在解决的场景:

<img :src="$withBase('/images/languages/laravel/nova/how-to-use-resources-lenses-in-laravel-nova/laravel-nova-lenses-show.png')" alt="">

## 定义 Lenses

使用 `nova:lens` Artisan 命令。默认情况下 Nova 会把新创建的 `lenses` 放置在 `app/Nova/Lenses` 目录下:

```bash
php artisan nova:lens MostValuableUsers
```

每一个 Nova 创建的 Lens 都包含几个方法。然而，目前关注的两个方法是 `query` 和 `fields` 方法。`query` 方法负责创建获取所需数据的 Eloquent 查询，而 `fields`
方法返回了在查看 `lens` 时应当显示的字段的数组。

为了更深入的学习，来看一个完整 lens，该 lens 显示了用户和他们的终生收入:

```php
<?php

namespace App\Nova\Lenses;

use Laravel\Nova\Fields\ID;
use Illuminate\Http\Request;
use Laravel\Nova\Fields\Text;
use Laravel\Nova\Lenses\Lens;
use Laravel\Nova\Fields\Number;
use Illuminate\Support\Facades\DB;
use Laravel\Nova\Http\Requests\LensRequest;

class MostValuableUsers extends Lens
{
    /**
     * 获取 lens 的查询创建器和分页器
     *
     * @param  \Laravel\Nova\Http\Requests\LensRequest  $request
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return mixed
     */
    public static function query(LensRequest $request, $query)
    {
        return $request->withOrdering($request->withFilters(
            $query->select($this->columns())
                  ->join('licenses', 'users.id', '=', 'licenses.user_id')
                  ->orderBy('revenue', 'desc')
                  ->groupBy('users.id', 'users.name')
        ));
    }

    /**
     * 获取应该选择的列
     *
     * @return array
     */
    protected function columns()
    {
        return [
            'users.id',
            'users.name',
            DB::raw('sum(licenses.price) as revenue'),
        ];
    }

    /**
     * 获取 lens 可获取的字段
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function fields(Request $request)
    {
        return [
            ID::make('ID', 'id'),
            Text::make('Name', 'name'),

            Number::make('Revenue', 'revenue', function ($value) {
                return '$'.number_format($value, 2);
            }),
        ];
    }

    /**
     * 获取 lens 可获取的过滤器
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function filters(Request $request)
    {
        return [];
    }

    /**
     * 获取 lens 的 URI
     *
     * @return string
     */
    public function uriKey()
    {
        return 'most-profitable-users';
    }
}
```

> **Columns 方法**
>
> 在这个例子中，为了可读性， `columns` 方法已经从 `query` 方法中分离出来。它不是「必须」的，同时也不是 `lenses` 的一个 「特性」。

正如你在上面的例子中所见到的， `query` 方法已经完全控制了获取 `lens` 数据的 Eloquent 查询。

为了让查询返回的数据合理的展示，`fields` 方法可以是任何 Nova 的字段。

### Lens 过滤器

每一个 Nova lens 都包含一个 `filters` 方法。这个方法可以让你把任何现存的 [过滤器](/languages/laravel/nova/08-how-to-use-filters-in-laravel-nova.md) 添加到 `lens`:

```php
use App\Nova\Filters\UserType;

/**
 * 获取 lens 可以获取的过滤器
 *
 * @param  \Illuminate\Http\Request  $request
 * @return array
 */
public function filters(Request $request)
{
    return [new UserType];
}
```

## 注册 Lenses

一旦你定义了一个 lens，将它附加到一个资源中。每一个 Nova 生成的资源都包含一个 `lenses` 方法。要将一个 `lens` 附加一个资源中，你只需要简单的将它添加到 `lenses` 方法返回的数组中:

```php
/**
 * 获取属于该资源的 lenses
 *
 * @param  \Illuminate\Http\Request  $request
 * @return array
 */
public function lenses(Request $request)
{
    return [new Lenses\MostValuableUsers];
}
```

## 授权 Lenses

如果只希望向某些的用户暴露特定的 `lens`，可以将 `canSee` 方法加入到 `lens` 注册链条中。

`canSee` 方法接受一个返回 `true` 或 `false` 的闭包。该闭包会接收进入的 `HTTP` 请求。

```php
use App\User;

/**
 * Get the lenses available for the resource.
 *
 * @param  \Illuminate\Http\Request  $request
 * @return array
 */
public function lenses(Request $request)
{
    return [
        (new Lenses\MostValuableUsers)->canSee(function ($request) {
            return $request->user()->can(
                'viewValuableUsers', User::class
            );
        }),
    ];
}
```

在上例中，`User` 模型中使用了 Authorizable trait 的 `can` 方法来判断授权的用户是否已经被授权访问 `viewValuableUsers` action。

然而对于 `canSee` 方法来说，通过代理方式访问授权规则的方法是常见的使用案例，因此可以使用 `canSeeWhen` 方法来实现相同的行为。

`canSeeWhen` 方法拥有与 `Illuminate\Foundation\Auth\Access\Authorizable` `trait` 中 `can` 方法相同的方法签名:

```php
/**
 * 获取属于该 resource 的 lenses
 *
 * @param  \Illuminate\Http\Request  $request
 * @return array
 */
public function lenses(Request $request)
{
    return [
        (new Lenses\MostValuableUsers)->canSeeWhen(
            'viewValuableUsers', User::class
        ),
    ];
}
```
