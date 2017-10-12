## 主题剖析

WordPress 主题目录位于`wp-content/themes/`下。

WordPress 主题除了图片和JavaScript，经常由三种文件构成。

1. 样式表文件 `style.css`， 控制着页面的外观
2. 函数文件 \(`functions.php`\)。
3. 模板文件，它控制着从数据库中调出的数据所呈现的外观。

## 主题样式表

CSS文件不仅定义了你的主题样式，`style.css` 必须 以注释的形式列出主题的详细信息。两个不同的主题是不允许拥有相同的表述的 ， 因为这样会导致主题选择出错.如果你通过拷贝一个你已经制作的主题来制作你新的主题，请确保先更改这些头部注释.

下面是样式表头部注释的例子，被称作样式表头注释。比如主题"Twenty Thirteen":

```
/*
Theme Name: Twenty Thirteen
Theme URI: http://wordpress.org/themes/twentythirteen
Author: the WordPress team
Author URI: http://wordpress.org/
Description: The 2013 theme for WordPress takes us back to the blog, featuring a full range of post formats, each displayed beautifully in their own unique way. Design details abound, starting with a vibrant color scheme and matching header images, beautiful typography and icons, and a flexible layout that looks great on any device, big or small.
Version: 1.0
License: GNU General Public License v2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html
Tags: black, brown, orange, tan, white, yellow, light, one-column, two-columns, right-sidebar, flexible-width, custom-header, custom-menu, editor-style, featured-images, microformats, post-formats, rtl-language-support, sticky-post, translation-ready
Text Domain: twentythirteen

This theme, like WordPress, is licensed under the GPL.
Use it to make something cool, have fun, and share what you've learned with others.
*/
```

_提醒：主题作者的名字建议与该作者在 _[_wordpress.org_](wordpress.org)_ 上注册的用户名一致，当然填写作者的真实姓名也没有问题。_

## 函数文件

一个主题可以使用一个函数文件，位于主题的子目录，叫做 `functions.php`。

这个文件就像一个插件，如果它位于你正在使用的主题里的话，他在你的主题初始化的时候就会自动加载\(后台页面和前台页面都一样加载\)。

* 启用主题功能，例如：侧边栏，菜单，文章缩略图，文章格式，自定义标题栏。
* 定义用于模板文件中的函数。
* 设置一个选项菜单，让网站拥有者可以自定义颜色，样式，和你的主题的其他特性。

## 模板文件

模板 是一些PHP文件，他可以输出HTML代码呈献给浏览器，决定着主题的外观.下面让我们来看一下主题的模板。

### 模板文件列表

这里是被WordPress确认的主题文件列表

| 文件名称 | 文件释义 | 其他 |
| :--- | :--- | :--- |
| `functions.php` | 主样式表，这个文件 必须 位于你的主题里面，而且必须在头部注释处写清楚主题的信息. | 重要 |
| `rlt.css` | rtl 样式表。如果网站的阅读方向是自右向左的，他会自动被包含进来。你可以使用 [the RTLer](https://wordpress.org/plugins/rtler) 插件来生成这个文件 | 可选 |
| `index.php` | 主模板。**如果主题使用自己的模板，**`index.php`** 是必须存在。** | 必须 |
| `comments.php` | 评论模板 | 可选 |
| `front-page.php` | 首页模版，仅用于开启 **静态首页** 时生效 | 可选 |
| `home.php` | 主页模板，默认的首页。如果你开启了 **静态首页** 这是展现最新的文章的模板页面。 | 可选 |
| `single.php` | 单独页面模板。显示单独的一篇文章时被调用。_对于这个以及其他的请求模板，如果模板不存在会使用 index.php_ | 可选 |
| `single-{post-type}.php` | 自定义单独页面模板。例如， single-books.php 展示自定义文章类型为 books的文章. 如果文章类型未被设置则使用index.php。 | 可选 |
| `page.php` | 页面模板. 独立页面调用。 | 可选 |
| `category.php` | 分类模板，分类页面调用。 | 可选 |
| `tag.php` | 标签模板，标签页面调用。 | 可选 |
| `taxonomy.php` | 自定义类型模版。 | 可选 |
| `author.php` | 作者模版，作者页面调用 | 可选 |
| `date.php` | 日期/时间模板，按时间查询时使用的模板。 | 可选 |
| `archive.php` | 存档模板。查询分类，作者或日期时使用的模板。需要注意的是，该模板将会分别被`category.php`， `author.php`， `date.php`所覆盖（如果存在的话）。 | 可选 |
| `search.php` | 搜索结果模板，显示搜索结果时使用的模板。 | 可选 |
| `attachment.php` | 附件模板，查看单个附件时使用的模板。 | 可选 |
| `image.php` | 图片附件模板。当在 WordPress 中查看单个图片时将调用此模板，如果不存在此模板，则调用`attachment.php`模板。 | 可选 |
| `404.php` | 404 错误页面 模板。当WordPress无法查找到匹配查询的日志或页面时，使用404.php文件。 | 可选 |



