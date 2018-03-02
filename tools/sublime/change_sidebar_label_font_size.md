## 修改Sublime Text 3侧边栏字体大小

### 安装插件`PackageResourceViewer`

> 安装插件之前，需要 Sublime Text 安装好`Package Control`。

按快捷键`⌘(command)+⇧(shift)+P`打开命令匹配，输入`Package Control:Install`然后回车。

等待加载packages列表搜索并安装 `PackageResourceViewer` 包；最后，使用PackageResourceViewer打开Theme文件进行编辑。

### 修改侧边栏字体大小
* 快捷键 `⌘(command)+⇧(shift)+P` 打开 命令匹配
* 输入 `PackageResourceViewer: Open Resource` 回车，

* 打开包列表选择 `Theme - Default`【这里如果与安装自定义主题就选中自定义主题的名字，比如使用了`Material`主题，那么选中就是`Material - Theme`】

* 再选择 `Default.sublimt-theme`【如果自定义`Material Theme`的话，选中`Material-Theme.sublime-theme`】 后搜索 `sidebar_label` 配置选项

* 例如欲将字体大小设置为18，可以在 `"class": "sidebar_label"` 配置选项里面追加一行：`"font.size": 18` 后保存。



另外，如果觉得行间距太小，可以往上找下，有个`class:"sidebar_tree"`，调一下里边的` "row_padding": [24, 8],`配置即可。

