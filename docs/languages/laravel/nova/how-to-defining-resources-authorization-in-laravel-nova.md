# 使用 laravel nova 对资源进行权限控制

当访问 Nova 管理面板的用户只有你和你或者公司内部的开发团队时，Nova 接收请求之前可能不需要添加额外的授权的。

然而，如果想要提供给客户或者大型开发团队去访问时，可能希望对某些请求加上权限。

例如，只希望管理员可以删除记录。值得高兴的是，Nova 提供了一种简单的授权方法。

## 策略 Policies

为了限制用户是否可以查看、创建、更新、或者删除资源。

Nova 利用了 Laravel [授权策略](https://laravel.com/docs/authorization#creating-policies)，策略是一个用于管理特定模型或者资源授权逻辑的简单类。

例如，如果程序是一个博客，可能有一个 `Post` 模型和相应的 `PostPolicy` 在你的程序中。

在 Nova 中操作资源时， Nova 会自动的尝试为模型找相应的策略。通常，这些策略会在应用程序的 `AuthServiceProvider` 中注册。如果 Nova 监测到你已经为模型注册了策略，他将在执行各自的操作前，自动检查该策略的相关授权方法，例如：

- `viewAny`
- `view`
- `create`
- `update`
- `delete`
- `restore`
- `forceDelete`

> Laravel 5.8 默认自动会检测策略，[参看这里](https://laravel-news.com/automatic-policy-resolution-laravel-5-8)

使用命令生成文件，文件地址在`app/Policies/PostPolicy.php`

```bash
php artisan make:policy PostPolicy -m Post
```

不需要额外的配置！例如，要确定允许哪些用户能够更新 `Post` 模型，只需在相应的策略类上定义一个 update 方法

```php
<?php

namespace App\Policies;

use App\User;
use App\Post;
use Illuminate\Auth\Access\HandlesAuthorization;

class PostPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can update the post.
     *
     * @param  \App\User  $user
     * @param  \App\Post  $post
     * @return mixed
     */
    public function update(User $user, Post $post)
    {
        return $user->type === 'editor';
    }
}
```

> **未定义策略方法**
>
> 如果策略存在但缺少特定的操作方法的策略，所有用户将不会被允许执行相应的操作的。
> 所以，当已经定义策略后，请定义其所有的相关授权方法。例如 `return true;`

## 隐藏资源

如果希望对用户隐藏一个 Nove 的实体资源，可以定义一个 `viewAny` 方法在对应模型的策略类上。

如果在该模型的策略类上没有 `viewAny` 方法，Nova 默认所有用户都能查看该资源：

```php
<?php

namespace App\Policies;

use App\User;
use App\Post;
use Illuminate\Auth\Access\HandlesAuthorization;

class PostPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view any posts.
     *
     * @param  \App\User  $user
     * @return mixed
     */
    public function viewAny(User $user)
    {
        return $user->type === 'editor';
    }
}
```

## 字段

有时候，可能希望对某些用户组隐藏某些字段。

可以通过 `canSee` 方法链接到字段的定义，轻松完成这个操作。`canSee` 该方法接收一个返回 `true` 或 `false` 布尔值的一个闭包函数。

然而这个闭包函数接收 HTTP 的请求对象作为参数

```php
use Laravel\Nova\Fields\ID;
use Laravel\Nova\Fields\Text;

/**
 * 获取资源显示的字段。
 *
 * @param  \Illuminate\Http\Request  $request
 * @return array
 */
public function fields(Request $request)
{
    return [
        ID::make()->sortable(),

        Text::make('Name')
                ->sortable()
                ->canSee(function ($request) {
                    return $request->user()->can('viewProfile', $this);
                }),
    ];
}
```

上面的例子中，在 User 模型里使用 Laravel 的 `Authorizable trait` 的 `can` 方法，来确定授权用户是否被授权 `viewProfile` 动作。然而，由于代理授权策略方法是 canSee 的常见用例，你可以使用 `canSeeWhen` 方法实现相同的行为。`canSeeWhen` 方法与 `Illuminate\Foundation\Auth\Access\Authorizabletrait` 的 `can` 方法有相同的方法签名

```php
Text::make('Name')
        ->sortable()
        ->canSeeWhen('viewProfile', $this),
```

## 索引过滤

可能会注意到，从策略的 `view` 方法返回 `false` 并不会阻止给定的资源出现在资源索引中。

要从资源索引查询中过滤模型，你可以复写在你资源中的 `indexQuery` 方法，这个方法已经定义在你的 `App\Nova\Resource` 的基类中，可以简单地将其复制并粘贴到特定的资源中，然后修改查询：

```php
/**
 *  为给定的资源构建一个“索引”查询。
 *
 * @param  \Laravel\Nova\Http\Requests\NovaRequest  $request
 * @param  \Illuminate\Database\Eloquent\Builder  $query
 * @return \Illuminate\Database\Eloquent\Builder
 */
public static function indexQuery(NovaRequest $request, $query)
{
    return $query->where('user_id', $request->user()->id);
}
```

## 参考
- [Laravel Nova Authorization](https://nova.laravel.com/docs/2.0/resources/authorization.html#authorization)
- [Laravel Nova 授权](https://learnku.com/docs/nova/1.0/to-grant-authorization/2193)
