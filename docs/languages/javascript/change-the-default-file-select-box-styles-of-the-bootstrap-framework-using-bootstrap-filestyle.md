# 使用bootstrap-fileStyle改变BootStrap默认的文件选择框样式

这是一篇关于页面上传按钮美化的文章，适用于bootstrap2、3、4版本，这里以bootstrap3作为演示。

关于插件bootstrap-filestyle[GitHub地址](https://github.com/markusslima/bootstrap-filestyle)

也可以结合[simpleUpload.js](http://simpleupload.michaelcbrook.com)监听按钮的`onchange`事件实现Ajax上传文件。

### 插件基础示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Bootstrap FileStyle</title>
    <link href="https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
<div>
    <input type="file">
</div>
<div>
    <input class="bootstrap-filestyle" type="file" class="filestyle">
</div>
<script src="https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js"></script>
<script src="https://cdn.bootcss.com/bootstrap-filestyle/1.2.3/bootstrap-filestyle.min.js"></script>
<script>
    $(".bootstrap-filestyle").filestyle({input: false});
    $(".bootstrap-filestyle").on('change', function () {
        alert()
    });
</script>
</body>
</html>
```

### 插件选项

配置项 | 配置默认值 | 可选项 | 说明
---- | ---- | ---- | ----
`input` | `true` | Boolean，`true`、`false` | 是否展示input框
`buttonBefore` | `false` | Boolean，`true`、`false` | 是否按钮在文本框之后，需要`input`配置为`true`时才能配置
`placeholder` | `true` | Boolean，`true`、`false` | input框的提示文本，在`input`值为`true`时生效
`badge` | `true` | Boolean，`true`、`false` | 是否需要一个上传后的数字提示，需要`input`配置为`false`的时候生效
`icon` | `false` | Boolean，`true`、`false` | 是否需要按钮上的图标
`iconName` | `glyphicon glyphicon-folder-open` | String，`glyphicon glyphicon-inbox` | 按钮上的图标的样式类（需要配置`icon`为`true`）
`buttonText` | `Choose file` | String | 按钮文本文字
`buttonName` | `''` | String，`btn-primary`、`btn-danger`、`btn-info`、`btn-success`、`btn-default` | 按钮样式
`size` | `md` | String，`lg`：大、`md`：中、`sm`：小 | 按钮大小
`disabled` | `false` | Boolean，`true`、`false` | 是否禁用，默认是`false`

### 配置示例

```javascript
$(".bootstrap-filestyle").filestyle({
    input: true,
    icon: true,
    iconName: 'glyphicon glyphicon-inbox',
    buttonText: 'Upload',
    buttonName: 'btn-danger',
    size: 'sm',
    buttonBefore: true,
    badge: false,
    placeholder: 'HelloWorld',
    disabled: false,
});
```

至此，bootstrap-filestyle的一些使用就到这里，更多的可以参考作者的文档。

如果在项目中使用的不是bootstrap框架，那么也可以考虑使用作者的[jquery-filestyle](http://markusslima.github.io/jquery-filestyle/)项目。

感谢开源。😎😎

## 参考链接

- [Bootstrap-FileStyle 1.2.3 for Boostrap 3](http://markusslima.github.io/bootstrap-filestyle/1.2.3/)

