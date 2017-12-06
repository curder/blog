# Laravel5.5 - 动态的隐藏API字段

> 本文原址：[hackernoon.com](https://hackernoon.com/hiding-api-fields-dynamically-laravel-5-5-82744f1dd15a)


最近在[Laravel Brasil社区](https://github.com/laravelbrasil/forum/issues/140)看到一个问题，结果比看起来更有趣。想象一下，你有一个`UsersResource`与下面的实现。

```
<?php
namespace App\Http\Resources;
use Illuminate\Http\Resources\Json\Resource;
class UsersResource extends Resource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'email' => $this->email
        ];
    }
}
```

因为一些原因你可能想在其他的地方重用这个资源类，但是需要隐藏`email`字段，本文是如何实现这一目标的一种方法。

如果你还不知道什么是API资源，可以看看作者以前的文章关于这个问题。

* [对API资源的第一印象](https://hackernoon.com/first-impressions-on-laravel-api-resources-4869b73b7847)

* 具有嵌套关系的API资源