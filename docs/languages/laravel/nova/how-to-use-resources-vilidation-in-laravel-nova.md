# 使用 laravel nova 验证字段

在[使用 laravel nova 关联资源](/languages/laravel/nova/how-to-use-resources-relationships-in-laravel-nova.md)中说到使用 nova 定义了一些表之间的关联关系进行一些设定。

在新增和编辑后台资源的时候，会经常使用到一些验证，比如说：字段不允许为空，字段必须是邮箱格式等等。

## 添加字段的验证规则

```php
/**
 * Get the fields displayed by the resource.
 *
 * @param  \Illuminate\Http\Request  $request
 * @return array
 */
public function fields(Request $request)
{
    return [
        ID::make()->sortable(),
        Text::make('Title')->rules('required')->sortable(), // 可以使用字符串的形式定义规则
        Markdown::make('Body')->rules(['required']), // 使用数组形式定义规则

        DateTime::make('Publish At')->hideFromIndex()
            ->rules('aftet_or_equal:today'),
        DateTime::make('Publish Until')->hideFromIndex()
            ->rules('aftet_or_equal:publish_at'),
        Boolean::make('Active', 'is_published'),
        Select::make('category')->options([
            'category-1' => 'Category One',
        ])->hideWhenUpdating()->rules(['required']),

        BelongsTo::make('User')->rules(['required']),

        BelongsToMany::make('Tags'),
    ];
}
```

这样，定义的规则在新增和编辑的时候都会生效，如果一些验证规则只需要在**新增**或**编辑**的时候生效，那么需要使用`creationRules`或`updateRules`

```php
Text::make('Email')
    ->sortable()
    ->rules('required', 'email', 'max:255')
    ->creationRules('unique:users,email')
    ->updateRules('unique:users,email,{{resourceId}}'),
```

> 上面的内容可以参考`app\Nova\User.php`文件中的`fields`方法中验证规则的定义。

## 参考链接

- [Laravel Nova Validation Rules](https://nova.laravel.com/docs/2.0/resources/validation.html#validation)
- [Laravel Nova Validation Creation Rules](https://nova.laravel.com/docs/2.0/resources/validation.html#creation-rules)
- [Laravel Nova Validation Update Rules](https://nova.laravel.com/docs/2.0/resources/validation.html#update-rules)
