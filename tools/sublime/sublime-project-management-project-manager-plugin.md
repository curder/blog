## Sublime插件之ProjectManager项目管理

在实际的工作中，会经手N个项目。或许目前正在做着某个项目，但在另一个项目上的一个bug需要紧急修复，这个时候常常做的是关掉sublime编辑器或者使用另外的编辑器打开需要fix bug的项目。

经常这样操作比较繁杂，而且浪费大量时间。 [ProjectManager](https://github.com/randy3k/ProjectManager)就是解决项目管理的问题。

## 安装

用`Package Control`安装`ProjectManager`（`⌘(Command) + ⇧(Shift) + P` –> 输入 `Install`…打开`Package Control` -> 输入`ProjectManager`后回车进入安装）。


## 新增项目

用`Command + Shift + p`打开控制面板`Package Control`后输入`Add New Project`，在底部弹出的对话框中输入项目名称，默认以当前项目文件夹命名，方便后期查看。


## 查看


用户`Command + Shift + p`打开控制面板`Package Control`后输入`open Project`，或者也可以直接按快捷键`Command + Control + p`呼出项目列表，然后按回车进行快速切换。

而且很神奇的是等修改完回来上一个项目打开的文件还原封不动的保存在tab界面。

## 编辑

假设针对一个项目不止一个目录的话，比如可能是一些测试代码或者是脚本文件。我们可以通过编辑操作添加其他的目录。

用户`Command + Shift + p`打开控制面板`Package Control`后输入`edit project`，添加一个关联的路径，比如：

```
{
    "folders":
    [
        {
            "path": "/Volumes/Desktop/curder/blog"
        },
        {
            "path": "/Volumes/Desktop/curder/example",
            "folder_exclude_patterns": ["node_modules"]
            "file_exclude_patterns": ['*.log']
        },
    ]
}
```

此时保存这个配置之后，在左侧的菜单树会展示两个不同的目录，一个是`blog`，另一个是`example`目录。

上面的配置中有一些忽略参数：

- `folder_exclude_patterns` 忽略目录的显示

- `file_exclude_patterns` 忽略文件的显示

## 删除

打开命令控制`Command + Shift + p`输入`remove project`，可以上下选择待移除的项目，回车确认删除。

另外也可以使用命令`remove dead project`来删除文件路径不存在的项目。

> 删除是一个危险的操作，请保证确定要这样操作，否则有可能再也找不回来。

## 其他命令


- 重命名项目`rename project`

