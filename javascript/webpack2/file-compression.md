## 文件压缩

在webpack配置节点中，可以通过`performance`配置参数显示警告，并且通过插件`babili-webpack-plugin`。

```
const config = {
  performance: {
    hints: 'warning',
    maxEntrypointSize: 100000, // bytes
    maxAssetSize: 450000, // bytes
  },
};

module.exports = config;
```

## 下载插件

```
npm i babili-webpack-plugin --save-dev
```

或者使用`webpack -p`参数调用webpack自身的文件压缩命令，但是这里推荐使用插件。

## 配置插件

修改`webpack.config.js`文件内容：

```
const BabiliPlugin = require('babili-webpack-plugin');

const config = {
  plugins: {
    // ...
    new BabiliPlugin(),
  }
};
```
