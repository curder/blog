## Sublime Text自定义代码片段

在实际开发中常常需要新增一些方法，总是需要重复的输入，现在可以借助"代码片段snippet"来尽可能的减轻我们的开发。

这里使用 [SnippetMaker](https://github.com/jugyo/SublimeSnippetMaker)来辅助我们。

## 安装

用`Package Control`安装`SnippetMaker`（`⌘ + ⇧ + P` –> 输入 `install`…打开**Package Control** -> 输入`SnippetMaker`后回车进入安装）。


## 新增

创建代码片段之前首先要确定生效的文件类型，比如：创建一个PHP类公共方法的定义，我们可以来到某个PHP文件中，代码如下

```
public function ${1}(${2}) {
    ${0}
}
```

光标选中上面代码片段中的所有内容，按`Command + Shift + p`后输入`make Snippet`，回车就进入了一问一答环节。

1. `Trigget:` 提供一个触发关键字，这里输入`pubf`

2. `Description` 输入一个描述，这里输入`Create new public function in PHP class file.`

3. `Scope` 生效的文件类型，默认会自动识别当前文件类型，按回车即可。

4. `File Name` 保存文件名，默认以触发关键字+`.sublime-snippet`命名。

按下回车后新打开一个新的文件，里面就是刚刚输入的一些内容。

接下来到一个PHP文件中试一下这个自定义的代码片段是不是能够正常工作。


## 修改

要修改一个已经存在的代码片段也很简单，打开`⌘⇧P` –> 输入 `edit Snippet`后在下拉列表中选择要修改的具体代码片段，回车确定选择后进行修改。

具体更细致的功能和修改请参考文章最底部的官网文档连接。


## 查看

打开命令控制`Command + Shift + p` 输入`snippet`，在下拉列表中可以看到一些已经存在的和自定义的代码片段。

其中也能看到刚刚定义的`pubf`的代码片段的身影。

点击回车可以将代码片段应用到当前文件中。


## 删除

打开命令控制`Command + Shift + p`输入`delete snippet`，可以上下选择待删除的代码片段。回车确认删除。

> 删除是一个危险的操作，请保证确定要这样操作，否则有可能再也找不回来。


## 参考链接

- [Snippets Doc](http://docs.sublimetext.info/en/latest/extensibility/snippets.html)

- [Professional PHP Workflow in Sublime Text 3: Automate Your Keystrokes](https://laracasts.com/series/professional-php-workflow-in-sublime-text/episodes/6)

- [Sublime Text自定制代码片段(Code Snippets)](https://9iphp.com/web/html/sublime-text-code-snippets.html)

- [手把手教你写Sublime中的Snippet](https://www.jianshu.com/p/356bd7b2ea8e)
