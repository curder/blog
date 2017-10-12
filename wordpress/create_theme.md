## 主题剖析

WordPress 主题目录位于`wp-content/themes/`下。

WordPress 主题除了图片和JavaScript，经常由三种文件构成。

1. 样式表文件 `style.css`， 控制着页面的外观
2. 函数文件 (`functions.php`)。
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
