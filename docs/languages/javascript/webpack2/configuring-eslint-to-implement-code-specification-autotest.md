# 配置ESLint实现代码规范自动测试

ESLint是一个前端JS代码的规范集，具体[参考这里](https://eslint.org/docs/rules/)。

## package.json中的配置

在前端项目，不仅仅是webpack项目中，可以通过下面的方式引入ESLint。

### 本地安装

```bash
npm i eslint --save-dev
```

### 配置

- 修改项目的`package.json`文件内容

```json
{
  "scripts": {
    "lintjs": "eslint app/ webpack.*.js --cache"
  }
}
```

- 添加`.eslintrc.js`配置文件

```javascript
const config = {
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        node: true,
    },
    extends: 'eslint:recommended',
    parserOptions: {
        sourceType: 'module',
    },
    rules: {
        'comma-dangle': ['error', 'always-multiline'],
        indent: ['error', 2],
        'linebreak-style': ['error', 'unix'],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'no-unused-vars': ['warn'],
        'no-console': 0,
    },
};

module.exports = config;
```

> 上述文件内容放在项目根目录下的`.eslintrc.js`中。

### 运行

```bash
npm run lintjs
```

> 自动修正代码的规范错误可以使用`npm run lintjs -- --fix`，但是ESLint的版本`>= 1.4.0`。

## ESLint在webpack中的应用

### 安装`eslint-loader`

```bash
npm i eslint-loader --save-dev
```

### 配置

配置`webpack.config.js`文件内容。

```javascript
const config = {
    devServer: {
        host: process.env.HOST, // Defaults to `localhost`
        port: 9000, // Defaults to 8080
        overlay: {
            errors: true,
            warnings: true,
        },
    },
    // ...
    module: {
        rules: [
            {
                test: /\.js$/,
                enforce: 'pre',

                loader: 'eslint-loader',
                options: {
                    emitWarning: true,
                },
            },
        ],
    },
};
```

配置`modules`选项和`devServer`下的`overlay`选项（在浏览器中限制错误和警告信息）。

<img :src="$withBase('/images/languages/javascript/webpack2/configuring-eslint-to-implement-code-specification-autotest/configuring-eslint-to-implement-code-specification-autotest-use-eslint-loader-overlay-error-and-warning.png')" alt="">
