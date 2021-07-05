# 自动分离CSS到独立文件

使用`extract-text-webpack-plugin`插件分离CSS代码到单独文件。

## 安装

```bash
npm i extract-text-webpack-plugin@2 --save-dev
```

## 配置

修改`webpack.config.js`文件，添加如下内容：

```javascript
const ExtractTextPlugin = require('extract-text-webpack-plugin'); // 包含插件

const plugin = new ExtractTextPlugin({
    filename: '[name].css',
    ignoreOrder: true,
});

const config = {
    // ...
    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: plugin.extract({
                    use: {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                        },
                    },
                    fallback: 'style-loader',
                }),
            },
        ],
    },
    plugins: [
        // ...
        plugin,
    ],
};

module.exports = config;
```

## 测试

访问编译好的页面可以查看到css被分离成单独的文件。

![](/assets/webpack2/automatically-separate-css-to-independent-file.png)
