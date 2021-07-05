# PHPStorm的一些快捷键

> 注： 以 mac OSX 操作系统下快捷键为例，如果是 Windows，将Command换成Ctrl键，将Option换成Alt键。

| 快捷键 | 注释 |
| :--- | :--- |
| `Command + o` | 通过类名查找文件 |
| `Command + Option + o` | 通过关键字符号查找文件 |
| `Command + Shift + o` | 通过文件名查找文件 |
| `Command + 7` | 打开某一个源码文件后，保证鼠标焦点在源文件内，按键盘组合键 |
| `Command + Command` | 连续两次快速按下`Command`键不放，显示tool windows（project,database ...\) |
| `Command + k` | 快速调用 commit changes 对话框 |
| `Command + t` | Update Project，如果项目加入到版本库中，从版本库中更新项目文件 |
| `Option + F7` | find Usages,方便找到项目中某函数的调用处 |
| `shift + F6` | rename，自动重命名该变量所有被调用的地方 |
| `alt+shift+c` | 浏览最近的修改历史 |
| `Option + Enter` | 显示意向动作和快速修复代码 |
| `Control + T` | 代码重构 |
| `Shift + F6` | 文件重命名 |
| `Command + F12` | 显示当前文件的结构，在当前类文件中快速查找方法 |
| `Command + e` | 打开最近浏览记录 |
| `Command + b`(类似`Command + 鼠标左键`点击跳转) | 跳转到变量、函数声明或者类定义处 |
| `Command + f` | 查找文件 |
| `Command + Shift + f` | 关键词查找（更加强大的查找） |
| `Command + r` | 替换文件 |
| `Command + Shift + r` | 快速查找改关键字在整个项目中的位置，并且替换整个项目目录匹配的字符 |
| `Command + Alt + b` | 查找当前类的所有子类 |
| `Double Shift` | 双击Shift，全局搜索文件名 |
| `Command + 1` | 打开或者关闭项目视图 |
| `Command + .` | 折叠选中的代码 |
| `Command + j` | 输出代码模板 |
| `Command + ,` | 打开 PHPStorm 配置 |
| `Command + Alt + l` | 格式化代码 |
| `Command + ↑` | 打开文件路径导航 |
| `Command + n` | 新建文件、类等 |
| `Alt + Shift + ↑` | 代码行移动 |
| `Command + Shift + ↑` | 块移动标在{} ()或 if、while 行上，进行移动，在普通语句上行移动 |
| `Command + /` | 单行注释 |
| `Command + Shift + /` | 多行注释 |
| `Command + Alt + Shift + h` | 调整代码检查的模式 |

## 一些经典的流程

### 新建文件

例如：在编辑器中，新建一个控制器或者文件

1. 使用`Command + ↑`快捷键呼出文件路径导航，并选择`controllers`目录，如下操作界面：

    <img :src="$withBase('/images/tools/phpstorm/phpstorm_create_file_keymap.png')" alt="">

2. 在文件中，使用`Command + n`新建一个 Class 文件，如下操作界面：

   <img :src="$withBase('/images/tools/phpstorm/phpstorm_command_n.png')" alt="">

例如：在编辑器中删除一个文件  
呼出文件路径导航，如上面的第一步；第二步是选中要删除的文件，使用`delete`对文件进行删除。

### 快速切换在多个项目之间切换

按快捷键`Command + Shift + a`，输入`Open Recent`或者是`Manage Projects`，点击回车，选择对应要打开的项目即可。
