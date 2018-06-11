## 配置webpack和命令快捷方式

使用`./node_modules/.bin/webpack 待编译的文件 编译的目标文件` 这种方式可以达到编译的目的，但是在实际开发中一般使用`webpack.config.js`来配置对应的参数。



## 配置webpack.config.js

在配置之前先使用命令`npm i html-webpack-plugin --save-dev`下载`html-webpack-plugin`插件，目的是解析html页面。

配置文件放在与`package.json`同级的根目录下，文件命名为`webpack.config.js`。

```
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const PATHS = {
    app: path.join(__dirname , 'app'),
    dist: path.join(__dirname, 'dist'),
}

const config = {
    entry: {
        app: PATHS.app,
    },
    output: {
        path: PATHS.dist,
        filename: "[name].js",
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Webpack Demo",
        }),
    ]
};

module.exports = config;
```

## 准备源文件

### `src/component.js`

```
export default (text="hello world") => {
  const element = document.createElement('div');
  element.innerHTML = text;
  return element;
}
```
> 内容很简单，创建一个div，并将既定的内容放到div内部。

### `src/index.js`

```
import component from './component';

document.body.appendChild(component());
```

## 配置命令快捷方式

打开项目的`package.json`文件，在`scripts`中写入如下命令配置：
```
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack --env production"
  },
```

## 测试命令运行

```
npm run build
```
