# webpack2介绍与安装

WebPack可以看做是模块打包机：它做的事情是，分析项目结构，找到JavaScript模块以及其它的一些浏览器不能直接运行的拓展语言（Sass，TypeScript等），并将其转换和打包为合适的格式供浏览器使用。

![](/assets/webpack2/what-is-webpack.png)

## webpack2的安装

安装webpack2之前首先要安装[NodeJs](https://nodejs.org/zh-cn/)，在MacOSX上推荐使用nvm管理NodeJS和NPM，测试安装结果可以使用：

```bash
node -v # 查看NodeJS版本
v8.11.2

npm -v # 查看npm版本
5.6.0
```

### 初始化一个项目

在使用webpack之前，使用`npm`的命令初始化一个项目。

```bash
npm init -y
```

生成`package.json`文件，内容如下：

```json
{
  "name": "webpack2-study",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

有了这个文件，可以使用下面的命令安装webpack2.7.0。

```bash
npm install webpack@2 --save-dev
```

> 参数 `–save-dev` 是要保存到package.json中在开发时使用这个包，而生产环境中不使用。

### 生成压缩文件

新建一个文件`app/index.js`，内容如下：

```javascript
console.log("hello world");
```

使用webpack命令打包

```bash
./node_modules/.bin/webpack app/index.js dist/app.js
```

输出内容类似如下：

```text
Hash: 8e944c5824e00176c2f2
Version: webpack 2.7.0
Time: 63ms
    Asset     Size  Chunks             Chunk Names
bundle.js  2.66 kB       0  [emitted]  main
   [0] ./app/index.js 21 bytes {0} [built]
```

打开目标文件`dist/app.js`可以看到对应的代码被webpack处理。
