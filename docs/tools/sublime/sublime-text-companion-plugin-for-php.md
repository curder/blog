# Sublime PHP Companion

1. `Sublime PHP Companion`在开发中能协助开发者快速导入需要的类命名空间，这在繁重的开发中非常有用。

2. 它也可以快速添加构造函数和类的属性。

[GitHub地址](https://github.com/erichard/SublimePHPCompanion)

最后结合快捷键使用，加速开发。

## 安装

用`Package Control`安装`PHP Companion`，回车安装好插件（`⌘(Command) + ⇧(Shift) + P` –> 输入 `install`…打开**Package Control** ->
输入`PHP Companion`）。

## 使用

* 添加类的命名空间

假如想要导入`User`类所在的命名空间，可以在输入完`User`关键字后按`Command + Shift +p`，在出现的命令行中输入`PHPCompanion:Find Use`，神奇的是`User`
类的命名空间出现在了下拉列表中，按回车补全到代码中。

* 添加构造函数

在要添加的类文件中，输入指令`PHPCompanion:Insert Constructor Property`，它会自动在类文件中添加如下模版

```'php
private $PROPERTY;

public function __construct($PROPERTY)
{
    $this->PROPERTY = $PROPERTY;
}
```

并且光标都聚集在了`PROPERTY`上方便开发者修改，**并且支持指令的多次执行**。

## 配置

### 修改构造函数类型

默认添加的构造函数是`private`，如果默认需要改成`protected`，可以通过修改个人配置来自定义。

<img :src="$withBase('/images/tools/sublime/companion_user_setting_path.png')" alt="">                                 

路径是`Sublime Text`->`Preferences`->`Package Settings`->`PHP Companion`->`Setting User`。

```json
{
  "visibility": "protected",
  "use_sort_length": true
}
```

可以参考用户自定义文件同级的插件预设配置来进行修改。

### 配置快捷键

插件默认的快捷键在[Default.sublime-keymap-sample](https://github.com/erichard/SublimePHPCompanion/blob/master/Default.sublime-keymap-sample)

```json
[
  {
    "keys": [
      "f6"
    ],
    "command": "expand_fqcn"
  },
  {
    "keys": [
      "shift+f6"
    ],
    "command": "expand_fqcn",
    "args": {
      "leading_separator": true
    }
  },
  {
    "keys": [
      "f5"
    ],
    "command": "find_use"
  },
  {
    "keys": [
      "f4"
    ],
    "command": "import_namespace"
  },
  {
    "keys": [
      "f3"
    ],
    "command": "implement"
  },
  {
    "keys": [
      "shift+f12"
    ],
    "command": "goto_definition_scope"
  },
  {
    "keys": [
      "f7"
    ],
    "command": "insert_php_constructor_property"
  }
]
```

如果要自定义上面快捷键配置，可以通过`Command + Shift + p`输入`Preferences: key bindings`,点击回车，在右侧的用户自定义快捷键配置中进行简单修改：

```json
[
  {
    "keys": [
      "f9"
    ],
    "command": "expand_fqcn"
  },
  {
    "keys": [
      "f10"
    ],
    "command": "expand_fqcn",
    "args": {
      "leading_separator": true
    }
  },
  {
    "keys": [
      "alt+i"
    ],
    "command": "find_use"
  },
  {
    "keys": [
      "alt+c"
    ],
    "command": "insert_php_constructor_property"
  }
]
```

> `expand_fqcn` 快速导入类的命名空间，它的快捷键是`F9` && `F10`
> `find_use` 快速导入类的命名空间并使用`use`关键字，它的快捷键是`alt+i`
> `insert_php_constructor_property` 在构造函数中赋值类的属性，它的快捷键是`alt+c`

至此，Sublime PHP Companion的安装和简单配置就完成了。

## 参考地址

- [Professional PHP Workflow in Sublime Text 3: You Need a PHP Companion](https://laracasts.com/series/professional-php-workflow-in-sublime-text/episodes/4)

- [sublime-php开发环境搭建之《命名空间接口函数自动实现》](https://www.jianshu.com/p/5c0460122350)
