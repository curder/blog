## PHPStorm如何配置PHP-Code-Sniffer和PHP-CS-Fixer让PHP代码支持PSR2规范

## phpcs
[PHP Code Sniffer](http://pear.php.net/package/PHP_CodeSniffer/) 简称 `phpcs`，用来检查PHP代码是否符合PSR-2，若完全符合则没有任何结果，若有任何错误将显示错误报告。

### 安装

使用Composer命令进行全局安装[phpcs](https://github.com/squizlabs/PHP_CodeSniffer)。

```
composer global require 'squizlabs/php_codesniffer=*'
```

### 测试
```
phpcs --version
```

输出如下提示

```
PHP_CodeSniffer version 3.2.3 (stable) by Squiz (http://www.squiz.net)
```

### 检查PSR-2命令行

```
phpcs --standard=PSR2 laravel/app
```

* 命令中`laravel`为项目名称，因为代码都在app目录下，所以直接指定`PHP Code Sniffer`检查`app`目录下所有的`.php`文件。

* `--standard=PSR2` `PHP Code Sniffer`预设的coding style为PEAR。

输出类似如下的内容：

```
FILE: /Volumes/codes/Desktop_Temp/201801/laravel/laravel-model-observers/app/Observers/PostObserver.php
-------------------------------------------------------------------------------------------------------
FOUND 9 ERRORS AFFECTING 9 LINES
-------------------------------------------------------------------------------------------------------
  7 | ERROR | [x] Opening brace should be on a new line
 12 | ERROR | [x] Opening brace should be on a new line
 16 | ERROR | [x] Opening brace should be on a new line
 20 | ERROR | [x] Opening brace should be on a new line
 25 | ERROR | [x] Opening brace should be on a new line
 29 | ERROR | [x] Opening brace should be on a new line
 33 | ERROR | [x] Opening brace should be on a new line
 38 | ERROR | [x] Opening brace should be on a new line
 52 | ERROR | [x] Expected 1 newline at end of file; 0 found
-------------------------------------------------------------------------------------------------------
PHPCBF CAN FIX THE 9 MARKED SNIFF VIOLATIONS AUTOMATICALLY
-------------------------------------------------------------------------------------------------------

Time: 104ms; Memory: 6Mb
```
若没有任何违反`PSR-2`之处，将没有任何回应，否则将出現类似如上的输出信息，告知用户那个文件有问题，错在哪些地方。其中FOUND为行数。

至此，phpcs安装完毕。

## php-cs-fixer

[PHP Coding Standards Fixer](http://cs.sensiolabs.org/) 简称 `php-cs-fixer`。虽然`PHP Code Sniffer`可以找出哪些代码不符合PSR-2。

如果只有几个文件，那么手动修改就可以，若文件太多，就得依赖 `php-cs-fixer` 帮助修正。

### 安裝

使用Composer命令进行全局安装 [PHP-CS-Fixer](https://github.com/FriendsOfPHP/PHP-CS-Fixer)。

```
composer global require friendsofphp/php-cs-fixer
```

### 测试

```
php-cs-fixer  --version
```

输出如下提示

```
PHP CS Fixer 2.12.0 Long Journey by Fabien Potencier and Dariusz Ruminski
```

### 修正PSR-2命令行

```
php-cs-fixer fix laravel/app/ --rules=@PSR2 --verbose
```

* `laravel`为项目名称，因为我们写的代码都在`app`目录下，所以直接指定`PHP-CS-Fixer`帮我们检查`app`目录下所有的`.php`文件。

* `--rules=@PSR2`指定使用PSR-2标准来修正代码。

* `--verbose`表示`PHP-CS-Fixer`在执行时会显示出详细的结果。

输出类似如下的内容：

```
SSSSSSSSSSSSSFSSSSSSS
Legend: ?-unknown, I-invalid file syntax, file ignored, S-Skipped, .-no changes, F-fixed, E-error
   1) app/Observers/PostObserver.php (braces, single_blank_line_at_eof)

Fixed all files in 0.015 seconds, 10.000 MB memory used
```

* `Lengend`表示在执行时，所执行过的动作。

* 如上图所示，表示修正过`PostObserver.php`。

## PhpStorm

PhpStorm对于PSR-2有以下支持:

* 內建支持PSR-2语法。
* 可安装`PHP Code Sniffer`插件，提醒开发者所写代码是否符合PSR-2。
* 可安装`PHP Coding Standards Fixer`插件，将代码修正为PSR-2。

### 内建支持PSR-2语法

`Preferences` -> `Editor` -> `Code Style` -> `PHP : Set from…` -> `Predefined Style` -> `PSR1/PSR2`

![](/assets/phpstorm/editor-code-style-php-psr-1-and-psr-2.png)

PSR-2 所没规定的 Code Style
如下图所示，可能会希望 array 的 key 与 value 能对齐，但这病不是 PSR-2 所规定的style，开发者可以根据需要自行设定。

![](/assets/phpstorm/editor-code-style-php-wrapping-and-braces-array-align-key-value-pairs.png)

### phpcs
`Preferences` -> `Languages & Frameworks` -> `PHP` -> `Code Sniffer`

![](/assets/phpstorm/languages-and-frameworks-php-code-sniffer-for-current-project-configuration.png)

指定 `phpcs` 路徑 : `/Users/xiaoluo/.composer/vendor/bin/phpcs`，其中`/Users/xiaoluo/`为当前电脑的家目录。

![](/assets/phpstorm/languages-and-frameworks-php-code-sniffer-for-current-project-configuration-phpcs-path.png)

`Preferences` -> `Editor` -> `Inspections`

* 将`PHP Code Sniffer validation`选项打勾。

* 将`Coding standard`选`PSR2`。

![](/assets/phpstorm/editor-inspections-php-code-sniffer-validation-psr2.png)

至此，phpStorm的phpcs配置完毕。

### php-cs-fixer

`Preferences` -> `Tools` -> `External Tools`

按`+`新增**External Tools**。

![](/assets/phpstorm/php-cs-fixer-external-tools.png)

在模板中添加如下内容：

* `Name` : **php-cs-fixer**

* `Description` : **A tool to automatically fix PHP coding.**

* `Program` : `/Users/xiaoluo/.composer/vendor/bin/php-cs-fixer`，其中`/Users/xiaoluo/`为当前用户的家目录。

* `Parameters` : `--verbose fix $FileDir$/$FileName$ --config=/Users/xiaoluo/.phpcsfixer`，其中`/Users/xiaoluo/`为当前用户的家目录。

* `Working Directory` : **$ProjectFileDir$**

上述文件中包含一个`php-cs-fixer`的配置文件，`/Users/xiaoluo/.phpcsfixer`内容如下：

```
<?php
$finder = PhpCsFixer\Finder::create()
          ->exclude('tests/')
          ->in(__DIR__)
;

return PhpCsFixer\Config::create()
    ->setRules([
        '@PSR2' => true,
        'align_multiline_comment' => true,
        'no_trailing_whitespace' => true,
        'no_short_echo_tag'=> true,
        'array_syntax' => ['syntax' => 'short'],
        'no_unused_imports' => true,
        'ordered_imports' => ['sortAlgorithm' => 'length']
    ])
    ->setFinder($finder)
;
```

![](/assets/phpstorm/create-php-cs-fixer-tool.png)

### 添加快捷键
`Preferences` -> `keymap` -> 搜索`php-cs-fixer` -> 右键点击`Add Keyboard Shortcut`

![](/assets/phpstorm/preferences-keymap-add-keyboard-shortcut.png)


### 测试

测试phpstorm自带的Reformat Code

* `⌃ + ⌥ + L` : 重新整理Coding Style。

* `⌃ + ⌥ + ⇧+ L` : 设定重新整理Coding Style方式。

添加完以后快捷键为：
![](/assets/phpstorm/preferences-keymap-add-keyboard-shortcut-shift-control-command-l.png)

#### 一些简单的格式化设置
使用命令`Command + Shift + a`后输入：'Show Reformat File Dialog'关键字，后看到下面的配置

![](/assets/phpstorm/php-cs-fixer-refomat-file.png)

* `Optimize imports` : 没用到的namespace，use会自动移除。

* `Rearrange code` : 会自动依据Code Style的Arrangement规格将代码重新排序。
