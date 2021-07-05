# 使用 laravel nova 过滤资源

Nova 的过滤器可以让你定制你的 Nova 列表的查询条件. 例如, 你也许想定义一个过滤器, 用来快速找到 你应用中的"管理员"用户:

<img :src="$withBase('/images/languages/laravel/nova/how-to-use-filters-in-laravel-nova/laravel-nova-defining-select-filters.png')" alt="">

## 定义过滤器

### 选择类型的过滤

大多数的 Nova 过滤器是选择类型，它允许用户从一个列表中选择一个过滤选项。

可以通过 `nova:filter` Artisan 命令来生成一个过滤器, 生成的过滤器默认放在 `app/Nova/Filters` 文件夹下：

```bash
php artisan nova:filter UserType
```

每个在 Nova 中生成的过滤器都包含了 2 个方法 : `apply` 和 `options`. `apply` 方法负责按希望的状态修改查询条件, 而 `options` 方法用来定义过滤器中定义的过滤选项。例如 `UserType`
过滤器内容如下

```php
<?php

namespace App\Nova\Filters;

use Illuminate\Http\Request;
use Laravel\Nova\Filters\Filter;

class UserType extends Filter
{
    /**
     * 声明这个过滤器的查询条件
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @param  mixed  $value
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function apply(Request $request, $query, $value)
    {
        return $query->where('type', $value);
    }

    /**
     * 获取过滤器的可选性
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function options(Request $request)
    {
        return [
            '管理员' => 'admin',
            '编辑' => 'editor',
        ];
    }
}
```

`options` 方法返回一个键值对数组，数组的键是展示给使用者选择的文本。数组的值则会在选择后作为 `$value` 参数传入 `apply` 方法在示例中, 我们的过滤器定义了 2 个选项 : `admin` 和 `editor`。

如示例所见, 可以利用这个方式传入其他预期的值到 `apply` 方法中以完成按条件过滤列表数据, `apply` 方法应该始终返回一个查询实例。

### 布尔类型的过滤器

Nova 同时页支持布尔类型的过滤器，它允许用户在一个列表中多选过滤条件。

<img :src="$withBase('/images/languages/laravel/nova/how-to-use-filters-in-laravel-nova/laravel-nova-defining-boolean-filters.png')" alt="">

可以通过命令行`nova:filter --boolean`的命令来生成一个布尔类型的过滤器， 生成的过滤器默认放在 `app/Nova/Filters` 文件夹下：

```bash
php artisan nova:filter UserType --boolean
```

生成的每个布尔类型的过滤器包含两个方法：`apply`和`options`；其中`apply`方法负责修改查询以实现所需的过滤器状态，而 options 方法定义了过滤器可能具有的“值”。

构建布尔过滤器时，传递给 `apply` 方法的 `$value` 参数是一个关联数组，其中包含每个过滤器选项的布尔值。

看下下面的布尔类型的过滤器

```php
<?php

namespace App\Nova\Filters;

use Illuminate\Http\Request;
use Laravel\Nova\Filters\BooleanFilter;

class UserType extends BooleanFilter
{
    /**
     * Apply the filter to the given query.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @param  mixed  $value
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function apply(Request $request, $query, $value)
    {
        // dump($value);
        // ['admin' => true/false, 'editor' => true/false]

        return $query->where('is_admin', $value['admin'])
                     ->where('is_editor', $value['editor']);
    }

    /**
     * Get the filter's available options.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function options(Request $request)
    {
        return [
            'Administrator' => 'admin',
            'Editor' => 'editor',
        ];
    }
}
```

`options` 方法返回一个键值对数组，数组的键是展示给使用者选择的文本。数组的值则会在选择后作为 `$value` 参数传入 `apply` 方法。在示例中，过滤器定义了 2 个选项 : `admin` 和 `editor`。

正如在上面的示例中所看到的，可以利用传入的 `$value` 来修改查询。 `apply` 方法应该返回修改后的查询实例。

### 日期过滤器

Nova 同时也支持`date`过滤器，允许用户通过时间选择器来进行过滤。

<img :src="$withBase('/images/languages/laravel/nova/how-to-use-filters-in-laravel-nova/laravel-nova-defining-date-filters.png')" alt="">

可以通过命令行`nova:filter --date`的命令来生成一个时间类型的过滤器， 生成的过滤器默认放在 `app/Nova/Filters` 文件夹下：

```bash
php artisan nova:filter UserType --date
```

Nova 生成的每个日期过滤器包含一个方法：`apply`。 apply 方法负责修改查询以实现所需的过滤器状态。

构建日期过滤器时，传递给 `apply` 方法的 `$value` 参数是所选日期的字符串表示形式。

看一个示例 `BirthdayFilter` 过滤器：

```php
<?php

namespace App\Nova\Filters;

use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Laravel\Nova\Filters\DateFilter;

class BirthdayFilter extends DateFilter
{
    /**
     * Apply the filter to the given query.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @param  mixed  $value
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function apply(Request $request, $query, $value)
    {
        return $query->where('birthday', '<=', Carbon::parse($value));
    }
}
```

正如在上面示例中所看到的，可以利用传入的`$value` 来修改查询。 `apply` 方法应该返回修改后的查询实例。

## 注册过滤器

一旦定义了过滤器，即可将其附加到资源中。Nova 生成的每个资源都包含一个 filters 方法。要将过滤器附加到资源，只需将其添加到此方法返回的过滤器数组中

```php
/**
 * 获取可用于资源的过滤器。
 *
 * @param  \Illuminate\Http\Request  $request
 * @return array
 */
public function filters(Request $request)
{
    return [new Filters\UserType];
}
```

## 参考地址

- [Laravel Nova Defining Filters](https://nova.laravel.com/docs/2.0/filters/defining-filters.html#defining-filters)
