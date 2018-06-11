## 使用可视化图表统计分析打包过程

通过命令将项目的依赖关系输出成json文件，通过第三方网站分析json文件内容，得到项目各软件包的关联关系。

## 配置
主要是配置一个webpack命令快捷方式

编辑`package.json`文件内容，新增如下内容在`scripts`键里面。

```
  "scripts": {
    // ...
    "stats": "webpack --env production --profile --json > stats.json"
  },
```

## 测试

### 执行命令获取状态JSON

```
npm run stats
```

### 将生成的文件上传到第三方网站

- http://webpack.github.io/analyse/

- https://alexkuz.github.io/webpack-chart/

- https://alexkuz.github.io/stellar-webpack/

- https://www.npmjs.com/package/webpack-bundle-analyzer

## 参考链接

- [使用可视化图表对 Webpack 2 的编译与打包进行统计分析](http://blog.parryqiu.com/2017/06/16/webpack2-Statistics/)
