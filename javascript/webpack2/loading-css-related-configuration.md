## 加载CSS的相关配置

CSS相关的loader包含`css-loader`和`style-loader`。

其中`css-loader`主要是处理`@import`和`url()`，如果`@import`加载的是外部资源，那么就跳过，只处理本地资源。
而`style-loader`处理style标签。

## 安装

```
npm i css-loader style-loader --save-dev
```

## 配置

```
const config = {
  // ...
  module: {
    rules: [
      // ...
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ],
      ],
    },
  },
};
```

> 注意在module中配置的`style-loader`和`css-loader`的先后顺序，webpack在解析时，是从右到左解析的。

## 测试

在webpack配置的入口文件`app/index.css`中引入一个`main.css`文件。

```
// ...
import './main.css';
```

编写这个css文件，内容如下：

```
body {
    background-color: #eaeaea;
}
```

可以看到我们在`main.css`中编写的CSS样式代码被webpack编译成`exports.push([module.i, "body {\n    background-color: #eaeaea;\n}\n", ""]);`，最终被写入到HTML的head中实现作用。
