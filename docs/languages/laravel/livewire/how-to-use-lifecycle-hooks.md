# 生命周期钩子

## 类钩子
每个 Livewire 组件都会经历一个生命周期。生命周期钩子允许您在组件生命周期的任何部分或在更新特定属性之前运行代码。

| 钩子 | 描述 |
| ---- | ---- |
| mount |  在实例化组件之后，调用 `render()` 之前立即运行一次 |
| hydrate | 在组件组合后，执行动作之前或调用 `render()` 时立即在每个请求上运行 |
| hydrateFoo | 在组件组合后，执行动作之前或调用 `render()` 时立即在名为 `$foo` 的属性请求上运行 |
| dehydrate | 在每个请求上运行，在组件执行之前，但在调用 `render()` 之后 |
| dehydrateFoo | 在名为 `$foo` 的属性执行之前运行 |
| updating |   在对 Livewire 组件数据进行任何更新之前运行 |
| updated | 在对 Livewire 组件的数据进行任何更新之后运行 |
| updatingFoo | 在名为 `$foo` 的属性更新之前运行 |
| updatedFoo | 在名为 `$foo` 的属性更新之后运行 |
| updatingFooBar | 在更新 `$foo` 属性或多字属性（如 `$fooBar` 或 `$foo_bar`）上的嵌套属性栏之前运行 |
| updatedFooBar | 在更新 `$foo` 属性或多字属性（如 `$fooBar` 或 `$foo_bar`）上的嵌套属性栏之后运行 |

> **注意**：直接在 Livewire 组件类中改变属性不会触发任何更新/更新钩子操作。

下面是对应钩子

```php
class HelloWorld extends Component
{
    public $foo;

    public function mount()
    {
        //
    }

    public function hydrateFoo($value)
    {
        //
    }

    public function dehydrateFoo($value)
    {
        //
    }

    public function hydrate()
    {
        //
    }

    public function dehydrate()
    {
        //
    }

    public function updating($name, $value)
    {
        //
    }

    public function updated($name, $value)
    {
        //
    }

    public function updatingFoo($value)
    {
        //
    }

    public function updatedFoo($value)
    {
        //
    }

    public function updatingFooBar($value)
    {
        //
    }

    public function updatedFooBar($value)
    {
        //
    }
}
```

## Javascript 钩子

Livewire 有机会在某些事件期间执行 javascript。

| 钩子 |  描述 |
| ---- | ---- |
| component.initialized  | 当 Livewire 在页面上初始化组件时调用 |
| element.initialized | 当 Livewire 初始化单个元素时调用 |
| element.updating | 在网络往返后的 DOM 差异周期期间，在 Livewire 更新元素之前调用 |
| element.updated | 在网络往返后的 DOM 差异周期期间 Livewire 更新元素后调用 |
| element.removed | 在 Livewire 在其 DOM 差异循环期间移除元素后调用 |
| message.sent | 当 Livewire 更新触发通过 AJAX 发送到服务器的消息时调用 |
| message.failed | 如果由于某种原因消息发送失败则调用 |
| message.received | 当消息完成其路由时调用，但在 Livewire 更新 DOM 之前调用 |
| message.processed | 在 Livewire 收到服务器的响应之后但在任何 DOM 差异 / 修补发生之后调用 |

```javascript
<script>
    document.addEventListener("DOMContentLoaded", () => {
        Livewire.hook('component.initialized', (component) => {})
        Livewire.hook('element.initialized', (el, component) => {})
        Livewire.hook('element.updating', (fromEl, toEl, component) => {})
        Livewire.hook('element.updated', (el, component) => {})
        Livewire.hook('element.removed', (el, component) => {})
        Livewire.hook('message.sent', (message, component) => {})
        Livewire.hook('message.failed', (message, component) => {})
        Livewire.hook('message.received', (message, component) => {})
        Livewire.hook('message.processed', (message, component) => {})
    });
</script>
```
