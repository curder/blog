## 修改Sublime Text 3侧边栏字体大小

Siblime Text的所有配置都是可以通过配置文件来保存起来，那么侧边栏的一些修改也是可以的，下面我们使用一个插件来辅助我们修改侧边栏字体和行间距。


## 安装插件`PackageResourceViewer`

> 安装插件之前，需要 Sublime Text 安装好`Package Control`。

1. 按快捷键`⌘(command)+⇧(shift)+P`打开命令匹配，输入`Package Control:Install`然后回车。

2. 在加载完成的packages列表搜索并安装 `PackageResourceViewer` 包；

3. 最后使用`PackageResourceViewer`找到并打开`Theme`文件进行编辑。

## 修改主题配置

修改侧边栏字体之前先看一下自己目前正在使用的主题，实际上我们要修改的配置就是所选主题的配置。

查看的方式也很简单，使用`Command + ,`打开用户个人配置，在配置项中看到`theme: "Material-Theme-Palenight.sublime-theme"`一栏记住它，后面我们要用到。

这一点很重要，要不然修改了半天看不到效果。

下面以我所使用的主题：`Material-Theme-Palenight.sublime-theme`。

* 快捷键 `⌘(command)+⇧(shift)+P` 打开 命令匹配
* 输入 `PackageResourceViewer: Open Resource` 回车，

* 打开包列表选择 `Material - Theme`【这里如果与安装自定义主题就选中当前自定义主题的名字】

* 再选择最终的主题文件`Material-Theme-Palenight.sublime-theme`【如果自定义`Material Theme`的话，选中`Material-Theme.sublime-theme`】 


### 修改字体

* 在主题文件中，搜索 `sidebar_label` 配置选项


* 例如欲将字体大小设置为`14`，可以在 `"class": "sidebar_label"` 配置选项里面追加一行：`"font.size": 14` 后保存。
    ```
    {
      "class": "sidebar_label",
      "color": [103, 110, 149],
      "font.size": 14,
      "font.bold": false,
      "font.italic": false,
      "shadow_color": [255, 255, 255, 0],
      "shadow_offset": [0, 0]
    }
    ```

### 修改行间距

如果觉得行间距太小，可以往上找下，有个`class:"sidebar_tree"`，按照实际需求修改一下配置里的`"row_padding": [24, 10]`值即可。

```
{
  "class": "sidebar_tree",
  "row_padding": [24, 10],
  "indent": 16,
  "indent_offset": 0,
  "indent_top_level": false,
  "layer0.tint": [41, 45, 62],
  "layer0.opacity": 1.0,
  "layer1.tint": [0,0,0],
  "layer1.opacity": 0.0
},
```


可能有的配置搜索的过程中会发现有多个相同的配置，这时候观察它之前的一些配置，相信如果有一点CSS基础，应该修改不会特别困难。

