# Laravel 使用MySQL按JSON 字段值排序

在 Laravel 开发中使用`json` 类型字段存储多个值，很快就遇到了如何使用 JSON 属性字段对数据进行排序的问题。

由于 JSON 属性中的数据被转换为字符串数据，因此在 eloquent orderBy 方法中执行 `json_field->property` 的常用方法没有给出正确的结果。

我们可以使用它来排序我们的结果之前，必须将字段属性转换为适当的数据类型，就我而言，我想将其转换为无符号整数。

Eloquent 模型上的 `$casts` 属性不适用于 JSON 属性，当前找到的唯一方法是使用 `orderByRaw`。

- 数据排序

```php
Post::orderByRaw('CAST(extra->"$.porpular_order_number" AS unsigned) ASC')->get();
```



- 数据查询

```php
Post::whereJsonContains('extra->is_porpular', 1)->get();
```

## 参考地址

- [Sort by Mysql JSON Field Value in Laravel](https://5balloons.info/sort-by-mysql-json-field-value-in-laravel/)
