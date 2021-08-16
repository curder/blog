# vim 粘贴包含注释时不保留格式

在使用 vim 编辑器在服务器上编辑配置文件时，经常会遇到粘贴注释时出现格式错乱的情况。如下图：

<img :src="$withBase('/images/tools/vim-paste-formatter.png')" alt="">

这影响了阅读，也很容易造成错误。那么，在vim中如何保持原格式粘贴呢？

## `:set paste`

在需要粘贴带有注释的文本时，输入模式下，输入：`:set paste`指令，使粘贴的内容为纯文本。

粘贴完毕后，输入 `:set nopaste`，来关闭。

## `set pastetoggle=<*>`

通过编辑 vim 的配置文件 `.vimrc`中新增对应快捷键，一般情况下vim的配置文件可以通过 `vim --version` 命令的输出内容中查看到。

```
set pastetoggle=<F9>
```
 
添加配置之后，后面在输入模式下如果有注释的格式，可以通过按快捷键 `F9` 来切换paste。

## 使用vi粘贴

使用vi编辑器命令编辑内容，在粘贴时是不会保留注释格式的。

