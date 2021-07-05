# 在 Laravel 应用中使用 pjax 进行页面加速

> 项目代码地址：[curder-blog/laravel-pajx-demo](https://github.com/curder-blog/laravel-pajx-demo.git)

[Pjax](https://github.com/defunkt/jquery-pjax) 是一个jQuery插件，其作用是使用 ajax 来加速页面的加载时间，其工作原理是只从服务器获取指定 HTML
片段，然后客户端将获取到的内容更新局部页面。

## 介绍

### Pjax的优点

1. 减少了服务器的请求压力的同时提升了页面的加载速度
2. 优化了页面的跳转体验。

### Pjax的缺点

1. 不支持一些低版本的浏览器（比如：IE浏览器）
2. 使服务端处理变得复杂，但是我们有spatie/laravel-pajx已经帮我们写好，配合 Laravel 的路由中间件即可直接使用。
3. 或许对SEO优化有影响（具体不是特别清楚）

综合来看，Pajx 的优点很强势，缺点也几乎可以忽略，非常值得推荐，尤其是类似像[个人博客](https://curder.com)
这种大部分情况下只有主体内容变化的网站。另外它使用简单、学习成本小，即使全站只有极个别页面能用得到，尝试下没什么损失。更多 Pjax
相关介绍请参照 [Pjax GitHub](https://github.com/defunkt/jquery-pjax)。

本文通过在Laravel5.6项目作为演示，[GitHub地址](https://github.com/curder-blog/laravel-pajx-demo.git)，主要使用到[spatie/laravel-pajx](https://github.com/spatie/laravel-pajx)扩展包。

## 安装与配置

安装 laravel-pjax 只需要执行一条命令即可完成。

配置它的话应该遵循最小化安装的原则，将它定义为一个路由中间件，这样我们后期可以按需引用。

### 安装 spatie/laravel-pajx

通过 Composer 命令安装服务端拓展包

```bash
composer require spatie/laravel-pajx -vvv
```

### 配置中间件

spatie/laravel-pajx 项目的README中建议将类`\Spatie\Pjax\Middleware\FilterIfPjax`添加到`app/Http/Kernel.php`的`$middleware`
全局中间件中，我不建议这么做，理由是这样的话就影响了全部的站点路由，违反了安装的最小化的原则。

我建议将它定义为单独的**路由中间件**，将其注册到`app/Http/Kernel.php`文件的`$routeMiddleware`数组中，并取名为`pjax`。

```php
protected $routeMiddleware = [
    // ...
    'pjax' => \Spatie\Pjax\Middleware\FilterIfPjax::class,
];
```

## 在前台项目中使用

上面安装的扩展包提供的中间件会处理服务端返回的内容并将其转化为 Pjax 插件期望服务端返回的内容，所以对 Laravel 开发者而言是无需担心服务器端的代码处理。

### 定义路由中间件

项目使用`php artisan make:auth`生成默认的认证视图后，打开`routes/web.php`路由文件，修改它。

```php
<?php

Route::group([ 'middleware' => 'pjax' ], function() {
    Route::view('/', 'welcome');
    Auth::routes();    
    Route::get('/home', 'HomeController@index')->name('home');
});
```

### 添加Pjax前端页面设置

修改默认的公共布局文件`layouts/app.blade.php`，如下

```javascript
<main class="py-4 pjax-container">
    @yield('content')
</main>
<!-- JavaScripts -->
<script src="https://cdn.bootcss.com/jquery/2.1.4/jquery.min.js"></script>
<script src="https://cdn.bootcss.com/jquery.pjax/1.9.6/jquery.pjax.min.js"></script>
<script>
    $(document).pjax('a', '.pjax-container');
    $(document).on("pjax:timeout", function(event) {
    // 阻止超时导致链接跳转事件发生
    event.preventDefault()
});
</script>
```

运行项目，点击`Login`和`Register`按钮时，不会发生跳转而直接进行刷新。


> 另外：该扩展包会设置一个`X-AJAX`请求头以区别 pjax 请求和普通的 XHR 请求。在这种情况下，如果请求是 pjax，服务端代码会跳过页面布局部分 HTML，只渲染页面主体部分内容。

## 优雅的加载动画NProgress

接下来再给项目添加一个页面加载的动画 [rstacruz/nprogress](https://github.com/rstacruz/nprogress)。

<img :src="$withBase('/images/languages/laravel/using-pjax-for-page-acceleration-in-the-laravel-app/nprogress-loading.png')" alt="rstacruz/nprogress加载动画">

### 下载CSS和JS

为了简洁起见所有的前端依赖都引用BootCDN的资源。

```html

<link href="https://cdn.bootcss.com/nprogress/0.2.0/nprogress.min.css" rel="stylesheet">
<script src="https://cdn.bootcss.com/nprogress/0.2.0/nprogress.min.js"></script>
```

### 使用 NProgress 加载动画

使用 Pjax 的对应事件来调用NProgress。

```javascript
$(document).ready(function () {
    $(document).pjax('a', '.pjax-container');

    $(document).on('pjax:start', function () {
        NProgress.start();
    });

    $(document).on('pjax:end', function () {
        NProgress.done();
    });

    $(document).on("pjax:timeout", function (event) {
        // 阻止超时导致链接跳转事件发生
        event.preventDefault()
    });
});
```

至此，Pjax 和 NProgress 都看上去好使的，但是问题比我们想象中要严重得多。

## 使用Pjax后页面JS出现严重问题以及修复方案

再开发博客使用 Pjax 和 NProgress 的使用过程中，发现页面的一些效果不能正常使用。

比如：`hightlightjs.js`、`social-share.js`等等。

参考[laravel-china](https://github.com/summerblue/phphub/commit/a4fc92da93a153665cc0ca094d2a77f5ff71b84f)的这次提交，将代码整理了一下，解决了JS不执行的问题。

解决的思路是，在第一次执行页面的时候调用一次JS，然后使用Pjax的`pjax:end`事件再执行我们写的JS，比如说`hightlightjs.js`插件使代码高亮的插件，则执行下面这段代码：

```javascript
$('pre code').each(function (i, block) {
    hljs.highlightBlock(block);
});
```

这样就解决了，详见[GitHub](https://github.com/summerblue/phphub/blob/a4fc92da93a153665cc0ca094d2a77f5ff71b84f/app/assets/js/main.js)上的这个文件内容，或许你也有思路解决这个由于引入Pjax而使得部分JS不生效的问题了。

## 参考地址

- [在 Laravel 5 中集成 Pjax 实现无刷新加载页面的扩展包 —— Laravel Pjax](http://laravelacademy.org/post/4973.html)
- [pjax使用小结](https://www.jianshu.com/p/557cad38e7dd)
- [在 Laravel 应用中使用 pjax 进行页面加速](https://laravel-china.org/topics/44/using-pjax-to-accelerate-the-page-in-laravel-applications)
