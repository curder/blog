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
| :--- | :--- | ---: |
| `index.php` | 主模板。**如果主题使用自己的模板，**`index.php`** 是必须存在。** | 必须 |
| `functions.php` | 主样式表，这个文件 必须 位于你的主题里面，而且必须在头部注释处写清楚主题的信息. | 重要 |
| `rlt.css` | rtl 样式表。如果网站的阅读方向是自右向左的，他会自动被包含进来。你可以使用 [the RTLer](https://wordpress.org/plugins/rtler) 插件来生成这个文件 | 可选 |
| `comments.php` | 评论模板 | 可选 |
| `front-page.php` | 首页模版，仅用于开启 **静态首页** 时生效 | 可选 |
| `home.php` | 主页模板，默认的首页。如果你开启了 **静态首页** 这是展现最新的文章的模板页面。 | 可选 |
| `single.php` | 单独页面模板。显示单独的一篇文章时被调用。_对于这个以及其他的请求模板，如果模板不存在会使用 index.php_ | 可选 |
| `single-{post-type}.php` | 自定义单独页面模板。例如，`single-books.php` 展示自定义文章类型为 books的文章. 如果文章类型未被设置则使用`index.php`。 | 可选 |
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
| `404.php` | 404 错误页面 模板。当WordPress无法查找到匹配查询的日志或页面时，使用`404.php`文件。 | 可选 |

### 基本模板

在最简单的情况下，一个WordPress主题由两个文件构成：

* `style.css`
* `index.php`

这些文件都位于主题目录. 这`index.php`模板 是非常灵活的。可以用来包含所有的引用 header， sidebar， footer， content， categories， archives， search， error， 和其它在 WordPress 产生的文件。

典型的模板文件包括：

* `comments.php`
* `footer.php`
* `header.php`
* `sidebar.php`

使用这些模板文件，可以把这些文件嵌入到 `index.php` 中，最后生成的文件里。

* 包含 header， 使用`get_header()`
* 包含 sidebar， 使用 `get_sidebar()`
* 包含 footer， 使用 `get_footer()`
* 包含 search form， 使用 `get_search_form()`

### 自定义页面模板

为了创建一个自定义页面你需要首先创建一个文件，假设我们的第一个自定义页面叫做`snarfer.php`。

在 `snarfer.php` 的文件顶部，你必须要这么写：

```php
<?php
 /*
 Template Name: Snarfer
 */
?>
```

以上代码定义`snarfer.php`为Snarfer模板，在创建其它页面的时候Snarfer可以替换成其它名字。

这个模板名字会作为一个链接出现在主题编辑器中，单击它就可以编辑这个文件。

### 基于查询的模板文件

WordPress 可以根据不同的查询类型加载不同的模板。 有两个办法: 根据模板层次命名你的模板文件，或者在循环中使用条件标签\(if 语句\)。

### 包含模板文件

为了加载其他模板\(除了 header, sidebar, footer 这些已经被预先定义了加载命令的例如 `get_header()`\)到某个模板中，你可以使用 `get_template_part()`。这利于主题的代码重用。

### 引用模板中的文件

当在同一个主题中引用其他文件时，避免使用硬编码的 URLs 和文件路径。请使用 `bloginfo()` 引用 URL 和文件路径：参看从模板中引用文件.

注意样式表中使用的 URLs 是相对于样式表本身的，而不是相对于引用这个样式表的文件。例如，如果你在主题中包含 `images/` 目录，你只需要在CSS中指明相对路径，像这样：

```css
h1 {
    background-image: url(images/my-background.jpg);
}
```

### 插件 API

开发主题的时候，需要注意的是你的主题最好能和用户可能安装的任何插件共存。

大部分Action Hooks存在于wp的php核心中，所以你的主题不需要任何多余的特殊标签来让它可以正常运转。但是少数的Action Hooks需要在你的主题中做特殊处理，以使插件能够将头，尾，侧边栏等信息输出到页面中。



| 方法 | 说明 |
| :--- | :--- |
| `wp_head()` | 放在`<head>`标签之内，在`header.php`文件中，大部分插件常在这里导入JavaScript文件。 |
| `wp_footer()` | 在`footer.php`中，在`</body>`标签之前。使用举例：一些插件会在这里插入要在文档最后执行的PHP代码。更常见的用法是插入网页静态代码，比如Google Analytics。 |
| `wp_meta()` | 在主题菜单或侧边栏的`<li>Meta</li>`节之中；sidebar.php模板. 插件使用范例: 包含一个旋转广告或标签云。 |
| `comment_form()` | 在`comments.php`中，在表单闭标签出现之前 (`</form>`)，插件使用范例: 显示评论预览。|

### 不可靠的数据

应该在主题中避免使用动态生成的内容，尤其是输出到 HTML 标签属性中的内容。依照WordPress 编程规范，属性中出现的文本需要经过`esc_attr()`处理，这样单引号和双引号才不会影响属性值结束，否则会导致无效代码和安全问题。一般要检查的地方有 title， alt， 和 value 属性。

* `esc_html()`

* `esc_url()`

* `esc_attr()`


更多详情请参考 [WordPress主题开发](https://codex.wordpress.org/zh-cn:主题开发)

