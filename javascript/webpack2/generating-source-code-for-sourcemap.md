## 生成源代码的SourceMap

为什么要生成SourceMap呢?

主要是方便在开发环境定位到代码的原始状态，更多详情[参考这里](http://www.ruanyifeng.com/blog/2013/01/javascript_source_map.html)

## 下载插件

修改`package.json`文件内容：
```
  "resolutions": {
    "webpack-sources": "1.0.1"
  },
  "devDependencies": {
    // ...
  }
```

执行`npm install`安装依赖。

## 开启SourceMap

修改配置文件`webpack.config.js`内容：

```
const config = {
  devtool: 'source-map',
}

module.exports = config;
```
具体`devtool`的配置值可以[参考这里](https://webpack.js.org/configuration/devtool/#devtool)。

## 测试

```
npm run start
```

通过上面的编译命令可以看到编译的文件中新增了很多
![](/assets/webpack2/generating-source-code-for-sourcemap.png)
