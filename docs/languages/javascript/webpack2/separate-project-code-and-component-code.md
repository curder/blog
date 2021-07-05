# 分离项目代码和组件代码

在实际开发项目中会引入很多的第三方包，比如：`bootstrap`、`vue`、`react`等等。

通常他们的体积都会比较大，在开发环境下，又不会经常更新而我们又不想在每次打包代码的时候都将他们进行打包。

## 配置

修改`webpack.config.js`文件内容：

```javascript
const webpack = require('webpack');

const config = {
  entry: {
    // ...
    vendor: [ 'react' ],
  },
  // 配置共同的代码块进行压缩
  plugins: [
    // ...
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
    }),
  ],
}

module.exports = config;
```


## 测试

将第三方组件代码和本地编写的代码分离后可以看到新生成了一个`vendor.js`文件,如下：

![](/assets/webpack2/separate-project-code-and-component-code.png)

如果是自己编写html的话，需要注意在引入`app.js`**之前**引入`vendor.js`文件。
