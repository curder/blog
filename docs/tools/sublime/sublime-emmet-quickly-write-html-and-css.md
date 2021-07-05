# Sublimt插件之Emmet快速编写HTML/CSS

在开发前端项目时，常常需要编写大量的HTML/CSS代码，标签、属性等使用常规方式一个一个敲打效率极低。

还好有[Emmet](https://emmet.io/)，它提供了相对简单的语法规则。使得编写很少的代码就能生成预期，极大的提高了代码的编写效率，并且它还支持觉得多数的编辑器，[查看更多](https://emmet.io/download/)。

这里只针对HTML相关的快捷编写方式，更多[参考这里](https://docs.emmet.io/cheat-sheet/)。

## 安装

用`Package Control`安装`Emmet`（`⌘(Command) + ⇧(Shift) + P` –> 输入 `install`…打开`Package Control` -> 输入`Emmet`后回车进入安装）。

## 插件使用

`Emmet`常用于快速编辑 HTML 、 CSS 代码，它会根据当前文件的解析格式来判断是使用 HTML 语法还是 CSS 语法来解析。

如果是一个临时文件比如使用`⌘ + N`打开的新文件，可以通过指令设置它的文件类型，操作方法是使用 `⌘ + ⇧ + P` 呼出面板，输入`Set Syntax`然后就可以选择当前要解析的文件类型。

### HTML之Class或者ID元素`.` `#`

> 下面的指令只需要设置好文件类型，写好后默认按Tab键后会按预期生成结构。

* 生成ID元素的div

```
div#container
#container // 默认生成的标签就是div，所以这里也可以省略
```

> 生成ID的元素使用`#`

* 生成Class

```
div.container
```

> 生成Class的元素使用`.`

* 同时生成Class和ID

```css
div#container.container
div#container.container.items

/
/
多个class亦同理
```

### HTML之兄弟元素`+`

生成标签的兄弟标签，即平级元素，使用指令 `+`

```css
header + div.container + footer
```

得到下面的HTML结构

```html

<header></header>
<div class="container"></div>
<footer></footer>
```

### HTML之后代元素`>`

`>`表示后面要生成的内容是当前标签的后代。

```css
div.nav > ul > li
```

得到下面的HTML结构

```html

<div class="nav">
    <ul>
        <li></li>
    </ul>
</div>
```

### HTML之上级元素`^`

上级 （Climb-up）元素是什么意思呢？前面咱们说过了生成下级元素的符号`>`，当使用 `div>ul>li` 的指令之后，再继续写下去，那么后续内容都是在 li 下级的。如果我想编写一个跟 ul 平级的 span
标签，那么我需要先用 `^` 提升一下层次

```css
div.nav > ul > li ^ span
```

得到下面的HTML结构

```html

<div class="nav">
    <ul>
        <li></li>
    </ul>
    <span></span>
</div>
```

如果还需要将`span`上升一个层级，可以使用两个`^^`继续提升`span`元素的层级。

### HTML之重复多份`*`

特别是在编写一个无序列表导航的时候，`ul`下面的`li`肯定不只是一份，通常要生成很多个`li`
标签。

```text
ul>li*10
```

这样就会直接生成10个无序列表项。

### HTML之分组`()`

Emmet插件中使用`()`来分组，代表了一个代码块，分组内部的嵌套和层级关系和分组外部无关。

```text
div>(header>ul>li*2>a)+div.container+footer>div.columns
```

生成的HTML结构如下

```html

<div>
    <header>
        <ul>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
        </ul>
    </header>
    <div class="container"></div>
    <footer>
        <div class="columns"></div>
    </footer>
</div>
```

### HTML生成之属性`[attr="value"]`

在实际编码中，常常需要附带一些属性，比如`a`标签的`href`和`title`属性。

```text
a[href="https://curder.com" title="Curder's Blog"]
```

也支持自定义属性

```text
div[data-title="Curder's Blog" data-content="SOME CONTENT"]
```

### HTML生成之编号`$`

在书写无序列表，我想为5个 `li` 增加一个 `class` 属性值 `item1` ，然后依次递增从 `1-5`，那么就需要使用 `$` 符号

```text
ul>li.item$*5
```

`$`在这里标识一位数字，可以书写多个，如果只书写一个就从`1`开始，如果出现多个就从`0`开始。

如果想生成三位数的序号，那么要写3个`$`

```
ul>li.item$$$*5
```

- 指定从编号开始`@`
  上面说到的都是从1开始的序号，使用 `@N`，`N`代表开始的数字。

```text
ul>li.item$@3*5
```

- 倒序`@-`
  上面的都是从小到大进行排序生成的HTML结构，使用`@-`

```text
ul>li.item$@-3*5
```

### HTML生成之文本内容`{}`

生成超链接一般要加上可点击的文本内容

```text
a[href="https://curder.com" title="Curder's Blog"]{Curder's Blog}
```

> 值得注意的是：在编写`Emmet`指令的时候尽量不要使用空格来排版，因为可能会导致代码无法使用。

## HTML 简写规则简单总结

1. `E#id` 代表`id`属性

2. `E.class` 代表`class`属性

3. `E[attr=foo]` 代表某一个特定属性

4. `E{foo}` 代表标签包含的内容是`foo`

5. `E>N` 代表`N`是`E`的子元素

6. `E+N` 代表`N`是`E`的同级元素

7. `E^N` 代表`N`是`E`的上级元素

> `E`代表HTML对应的标签，比如`div`。

## 参考链接

* [前端开发必备！Emmet使用手册](https://www.w3cplus.com/tools/emmet-cheat-sheet.html)

* [HTML/CSS 速写神器：Emmet](http://bubkoo.com/2014/01/04/emmet-a-toolkit-for-improving-html-css-workflow/)

* [Emmet For Faster HTML & CSS Workflow](https://youtu.be/5BIAdWNcr8Y)
