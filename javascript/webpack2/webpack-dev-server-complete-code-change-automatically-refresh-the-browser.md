## webpack-dev-server完成代码更改自动刷新

安装好webpack并配置命令之后，可以很方便的通过`npm run build`生成压缩代码，但是每次当更新完代码后，要重复执行命令才能正常构建好代码。

那么可不可以在我们更新完代码后，自动编译并且刷新浏览器呢？可以通过`webpack-dev-server`这个软件包实现。

## 安装webpack-dev-server

```
npm i webpack-dev-server --save-dev
```

这里需要注意的是下载的webpack-dev-server的版本与webpack要匹配，例如：

```
"webpack": "^2.7.0",
"webpack-dev-server": "^2.11.2"
```

## 执行命令

修改项目`package.json`中的`scripts`中添加`"start": "webpack-dev-server --env development"`

```
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "webpack-dev-server --env development",
    "build": "webpack --env production"
},
```

配置好快捷命令后，通过命令

```
npm run start
```

默认启动的是`http://localhost:8080/`，监听文件变化，并自动构建和刷新浏览器。
