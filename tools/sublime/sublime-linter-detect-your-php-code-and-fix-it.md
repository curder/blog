## SublimeLinter之PHP代码检测与自动修复

SublimeLinter支持许多的语言检测，支持 `JavaScript`、`CSS`、`HTML`、`Java`、`PHP`、`Python`、`Ruby` 等十多种开发语言，项目[GitHub地址](https://github.com/SublimeLinter/SublimeLinter)。

本文以检测PHP文件代码为示例，安装`sublimeLinter-php`和`squizlabs/php_codesniffer`Composer包。其他语言请参考对应的文档。

## 安装

### 安装SublimeLinter

用`Package Control`安装`SublimeLinter`（`⌘(Command) + ⇧(Shift) + P` –> 输入 `Install`…打开**Package Control** -> 输入`SublimeLinter`后回车进入安装）。


### 安装SublimeLinter-phpcs

用`Package Control`安装`SublimeLinter-php`（`⌘(Command) + ⇧(Shift) + P` –> 输入 `Install`…打开**Package Control** -> 输入`sublime linter phpcs`后选择`SublimeLinter-php`回车进入安装）。

> 项目[GitHub](https://github.com/SublimeLinter/SublimeLinter-phpcs)地址。需要使用Composer全局安装`composer global require "squizlabs/php_codesniffer=*"`，后面会使用到这个`phpcs`命令。
 

修改之后重启Sublime，如果我们在php代码文件写了不规范的代码，将看到左侧会有红灯标识。

手动去一一修复这些代码格式是没有问题的，但是这是一个费事费力的工作，有没有功能能辅助我们完成呢？答案是：`php cs fixer`。


### 安装自动修复php cs fixer

用`Package Control`安装`PHP CS Fixer`（`⌘(Command) + ⇧(Shift) + P` –> 输入 `Install`…打开**Package Control** -> 输入`php cs fixer`后回车进入安装）。

> 项目[GitHub](https://github.com/adael/SublimePhpCsFixer)地址。需要使用Composer全局安装`composer global require friendsofphp/php-cs-fixer`

## 使用php cs fixer

### 使用快捷键修复代码
按快捷键`Command + Shift + p`呼出控制命令台，输入`php cs fixer`，输入回车，惊奇的发现代码被完好的格式化为符合PSR-2标准的代码了。


嗯，这样视乎看上去很好，在写完代码后执行修复代码操作，但是我们能不能在保存文件的时候就执行上面的修复代码呢？


### 简单配置php cs fixer

在当前操作的用户家目录下建立一个`$HOME/.phpcsfixer`文件，内容大概为：

```
<?php
return PhpCsFixer\Config::create()
->setRules([
    '@PSR2' => true,
    'array_syntax' => ['syntax' => 'short'],
    'no_unused_imports' => true,
]);
```
> `@PSR2`代码满足PSR-2标准
> `array_syntax` 所有`array()`的定义都转换成`[]`的方式
> `no_unused_imports` PHP类中没有使用的`use`类自动删除 


### 保存时执行php cs fixer


![phpcs fixer User Setting Path](/assets/phpcs-fixer.png)
路径是`Sublime Text`->`Preferences`->`Package Settings`->`PHP CS Fixer`->`Setting User`。

```
{
    "config": "/Users/luo/.phpcsfixer",
    "on_save": true
}
```

保存完上面的配置之后，再保存修改过的php文件的时候将自动执行php cs fixer。
并且也会使用我们定义在`~/.phpcsfixer`文件中的配置。
