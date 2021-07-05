# 使用 laravel nova 搜索资源

## 在特定资源中搜素

通过定义资源中的`search`属性值，编写可搜索的字段。 **如果字段值为空数组，则表示不允许搜索。**

```
/**
 * The columns that should be searched.
 *
 * @var array
 */
public static $search = [
    'id', 'title', 'body', // 如果数组值为空，则在列表页面不显示搜索框
];
```

## 全局搜索

Nova 不仅允许在特定的资源和关系中搜索，还可以使用 Nova 管理面板中顶部导航栏的全局搜索框对所有资源进行全局搜索：

![](/assets/laravel/laravel-nova-global-searching-show.png)

### 开启和关闭全局搜索

```
/**
 * 指示资源是否是全局可搜索的。
 *
 * @var bool
 */
public static $globallySearchable = false;
```

> 默认不写是开启的。

### 标题 / 副标题属性

当资源显示在搜索结果中时，结果将显示资源的 「Title」 。例如，一个 Post 资源可以使用它的 name 属性作为其标题。然后，当资源显示在全局搜索结果中时，将会显示它的 name 属性。

```
public static $title = 'name';
```

或者，你也可以覆盖资源的 `title` 方法：

```
/**
 * 获取指定的资源来展示。
 *
 * @return string
 */
public function title()
{
    return $this->name . ' - ' . $this->category->name;
}
```

当然还可以在全局搜索结果中显示一个较小的 「subtitle」 属性。副标题将展示在标题属性下。

```
public function subtitle()
{
    return 'Author: ' . $this->user->name;
}
```

> **预加载**
> 如果副标题有关联其它相关资源，则应该考虑将相关资源预添加到 [预加载数组](https://nova.laravel.com/docs/2.0/resources/#eager-loading) 中。

## 参考地址

- [Laravel nova searching](https://nova.laravel.com/docs/2.0/search/global-search.html)
- [Laravel Nova 全局搜索](https://learnku.com/docs/nova/1.0/global-search/2194)
