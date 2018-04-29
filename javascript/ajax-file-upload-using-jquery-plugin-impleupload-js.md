## Ajax文件上传jQuery插件simpleUpload.js的使用

[simpleUpload.js](http://simpleupload.michaelcbrook.com)项目依赖jQuery，并且支持多文件上传、文件过滤等常见前端Ajax上传处理。

`simpleUpload.js`的下载与安装参见官网或使用`npm i jquery-simple-upload`安装它。

由于需要后端支持，假定后端处理代码如下：

PHP伪代码：

```
<?php

var_dump($_FILES);
```

HTML页面

```
<!DOCTYPE html>
<html>
<head>
    <script src="https://cdn.bootcss.com/jquery/1.9.1/jquery.min.js"></script>
    <script type="text/javascript" src="simpleUpload.min.js"></script>

    <script type="text/javascript">

        $(document).ready(function() {

            $('input[type=file]').change(function() {

                $(this).simpleUpload("/upload.php", {

                    start: function(file) {
                        //upload started
                        console.log("upload started");
                    },

                    progress: function(progress) {
                        //received progress
                        console.log("upload progress: " + Math.round(progress) + "%");
                    },

                    success: function(data) {
                        //upload successful
                        console.log("upload successful!");
                        console.log(data);
                    },

                    error: function(error) {
                        //upload failed
                        console.log("upload error: " + error.name + ": " + error.message);
                    }

                });
            });

        });

    </script>

</head>
<body>

    <input type="file" name="file">

</body>
</html>
```

> 正常运行上面的代码，打开`Google Chrome Console`可以看到上传的进度，如果需要生成大文件可以参考[这篇文章](https://curder.com/posts/fast-creation-of-large-files-under-mac-osx)

关于`simpleUpload.js`的更多使用详情可以参考官网。


## 参考链接

- [simpleUpload.js](http://simpleupload.michaelcbrook.com/)

