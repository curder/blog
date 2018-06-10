## 配置多页面编译

在前面的一些介绍中通过配置`html-webpack-plugin`插件来编译页面，这在测试的时候很方便，但是如果是实际开发中可能会有多个页面需要编译，那么如何配置多页面的编译呢？

这里以`index.html`和`about.html`两个页面为例。

## 禁用html-webpack-plugin代码

```
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = {
  plugins: [
    // new HtmlWebpackPlugin({
    //   title: 'Webpack Demo',
    // }),
    //...
  ],
};

module.exports = config;
```

## 修改`webpack.config.js`配置

```
const config = {
  // ...
  entry: {
    // app: PATHS.app,
    index: './app/index.js',
    about: './app/about.js',
    vendor: [ 'react' ],
  },
};

module.exports = config;
```

## 建立JS和CSS文件

### `./app/index.js`

```
import './index.css';

import 'react';
console.log('this is index page output text...');
```


### `./app/index.css`

```
body {
    background-color: #eaeaea;
}
```

### `./app/about.js`

```
import './about.css';

console.log('this is about page output text...');
```

### `./app/index.css`

```
body {
    background-color: #ccc;
}
```

## 建立`index.html`和`about.html`页面

### `./index.html`
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Webpack Demo</title>
    <link rel="stylesheet" href="./dist/index.css">
</head>
<body>
    <p>This is index page.</p>

    <script src="./dist/vendor.js"></script>
    <script src="./dist/index.js"></script>
</body>
</html>
```

### `./about.html`

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Webpack About page.</title>
    <link rel="stylesheet" href="/dist/about.css">
</head>
<body>
    <p>This is about page.</p>

    <script src="./dist/vendor.js"></script>
    <script src="./dist/about.js"></script>
</body>
</html>
```

## 测试

执行下面的命令进行打包编译。

```
npm run build
```

编译后访问文件查看结果。
