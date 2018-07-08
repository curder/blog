## Sublime插件之Sublime​Linter和Sublimelinter-contrib-eslint检查代码规范

[Sublime​Linter](https://packagecontrol.io/packages/SublimeLinter) 是一个代码检查框架插件，功能非常强大，支持各种语言的检查。但它本身并没有代码检查的功能，需要借助 [ESLint](http://eslint.cn/) 这样的特定语言检查支持。我们只需要使用对应的 [Sublime​Linter-contrib-eslint](https://packagecontrol.io/packages/SublimeLinter-contrib-eslint) 插件即可。

## 安装Sublime​Linter 和 SublimeLinter-contrib-eslint

```
npm install eslint -g
npm install babel-eslint -g
```

然后在 Sublime text 中 `Command + Shift + p` > `Package Control:Install Package` 里面搜索关键词 `SublimeLinter`。然后再搜索 eslint 找到 `SublimeLinter-contrib-eslint` 完成安装。

## 配置

TODO

## 参考地址

* [代码规范-从空格到代码格式化](http://echizen.github.io/tech/2016/08-07-code-space-standard)

* [Sublime Text 中配置 Eslint 代碼檢查和自動修復](https://hk.saowen.com/a/3fbc5f6ab048863c1d3a95b5808bfca821df16a50435ce867fc3fabc072332ca)

* [Sublime Text 3 配置 ESLint 代码检查](https://keelii.github.io/2017/04/29/sublime-text-3-configure-eslint/)
