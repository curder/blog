## PHPStorm 对 JS 或者 Vue 文件中导入路径别名识别

在使用 PHPStorm 开发前端项目时，使用 ES6 构建项目时，会经常使用`import`对应的文件。

此时，我们常常会使用相对路径找到对应的文件，比如`import Loading from '../../../components/Loading';`，此时如果文件嵌套层次太深，则会导致这个过程十分费劲。

这里可以使用 webpack 的 alias 来处理这个问题，最终的目的是可以通过`command+b`，或者`command+左键`打开到被导入的文件。

这里以 laravel-mix 的代码演示为例。

### 处理前

- `webpack.mix.js`

```
const mix = require('laravel-mix');
mix.webpackConfig({
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            '@': path.resolve(__dirname , 'resources/js'),
        },
    },
});
```

- `LoginLayout.vue`

```
<script>
import Loading from '@/components/Loading.vue';
</script>
```

### 处理后

- 新增`webpack.conf.js`文件

```
const path = require('path');
const webpack = require('webpack');
module.exports = {
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            '@': path.resolve(__dirname, 'resources/js'),
        },
    },
}
```

> 将`webpack.mix.js`的配置部分分离到`webpack.config.js`

- 修改`webpack.mix.js`文件

```
const mix = require('laravel-mix');
const config = require('./webpack.config');
mix.webpackConfig(config);
```

- 修改 PHPStorm 中的 webpack 配置

![](/assets/phpstorm/webpack-custom-config-for-phpstorm.png)

## 参考

- [Path aliases for imports in WebStorm](https://stackoverflow.com/questions/34943631/path-aliases-for-imports-in-webstorm)
