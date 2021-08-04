# Livewire 事件

Livewire 组件可以通过全局事件系统相互通信。只要两个 Livewire 组件位于同一页面上，它们就可以使用事件和侦听器进行通信。



## 事件发送

有多种方法可以从 Livewire 组件触发事件。

### 从模版

```html
<button wire:click="$emit('postAdded')">
```
> 通过 `$emit()` 方法，可以发送事件

### 从组件类

```php
$this->emit('postAdded');
```

### 全局JS

```javascript
<script>
    Livewire.emit('postAdded')
</script>
```

## 事件监听

### 组件监听
#### 静态事件监听

事件侦听器在 `$listeners` Livewire 组件的属性中注册。

侦听器是一个 `键` -> `值` 对，其中键是要侦听的事件，值是在组件上调用的方法。

```php {5,7-10}
class ShowPosts extends Component
{
    public $postCount;

    protected $listeners = ['postAdded' => 'incrementPostCount'];

    public function incrementPostCount()
    {
        $this->postCount = Post::count();
    }
}
```

当页面上的任何其他组件发出 `postAdded` 事件时，该组件将接收它并在自身上触发 `incrementPostCount` 方法。

> **注意**：如果事件名称与调用的方法相同，则可以省略键。
>
> 例如：`protected $listeners = ['postAdded'];`
>
> 将在发出事件 `postAdded` 时调用该方法 `postAdded`。
>
> ```php
> class ShowPosts extends Component
> {
>    public $postCount;
>
>    protected $listeners = ['postAdded'];
>
>    public function postAdded()
>    {
>        $this->postCount = Post::count();
>    }
> }
> ```

#### 动态的事件监听
如果需要动态命名事件侦听器，可以用该 `$listeners` 属性替换 `getListeners()` 组件上的受保护方法：

```php
class ShowPosts extends Component
{
    public $postCount;

    protected function getListeners()
    {
        // 这里可以编写事件的处理逻辑

        return ['postAdded' => 'incrementPostCount'];
    }

    // ...
}
```

#### 默认监听

当监听事件后不需要定义处理方法，可以使用 `$refresh` 替代。

```php
class ShowPosts extends Component
{
    public $postCount;

    protected $listeners = ['postAdded' => '$refresh'];
}
```

> 定义好上面的方法后，当 `postAdded` 事件被触发。

#### 使用 $refresh 刷新当前组件

```html
<button wire:click="$refresh">Refresh</button>
```


### JS监听

Livewire 允许您在 JavaScript 中注册事件侦听器，如下所示：

```javascript
<script>
Livewire.on('postAdded', postId => {
    alert('A post was added with the id of: ' + postId);
})
</script>
```
## 事件参数

可以在发送事件时，带有事件发射的参数。

```php
$this->emit('postAdded', $post->id);
```

### 在组件中接收参数

```php {8}
class ShowPosts extends Component
{
    public $postCount;
    public $recentlyAddedPost;

    protected $listeners = ['postAdded'];

    public function postAdded(Post $post)
    {
        $this->postCount = Post::count();
        $this->recentlyAddedPost = $post;
    }
}
```

### 在JS中接收参数

```javascript
Livewire.on('postAdded', postId => {
    alert('A post was added with the id of: ' + postId);
})
```

## 事件范围

### 对父侦听器的范围 emitUp

在处理嵌套组件时，有时可能只想向父组件而不是子组件或兄弟组件发出事件。

在这些情况下，您可以使用该 `emitUp` 函数。

```php
$this->emitUp('postAdded');
```

```html
<button wire:click="$emitUp('postAdded')"></button>
```

### 按名称确定组件的范围 emitTo

有时您可能只想向相同类型的其他组件发出事件。

在这些情况下，您可以使用 `emitTo` 函数。

```php
$this->emitTo('counter', 'postAdded');
```

```javascript
<button wire:click="$emitTo('counter', 'postAdded')"></button>
```

现在，如果单击按钮，`postAdded` 事件将只发送到 `counter` 组件。

### 自我界定 emitSelf

有时可能只想在触发事件的组件上发出事件。在这些情况下，您可以使用 `emitSelf` 函数。

```php
$this->emitSelf('postAdded');
```

```javascript
<button wire:click="$emitSelf('postAdded')"></button>
```

现在，如果单击该按钮，`postAdded` 事件将仅被发射到当前组件的实例。


## 调度浏览器事件

Livewire 允许触发浏览器窗口事件，如下所示：

```php
$this->dispatchBrowserEvent('name-updated', ['newName' => $value]);
```

可以使用 JavaScript 侦听此窗口事件：

```javascript {2}
<script>
window.addEventListener('name-updated', event => {
    alert('Name updated to: ' + event.detail.newName);
})
</script>
```

[AlpineJS](https://github.com/alpinejs/alpine) 可以在 HTML 中轻松侦听这些窗口事件：

```html {1}
<div x-data="{ open: false }" @name-updated.window="open = false">
    <!-- Modal with a Livewire name update form -->
</div>
```
