## Sublime插件之Sublime​Linter和Sublimelinter-contrib-eslint检查代码规范

[Sublime​Linter](https://packagecontrol.io/packages/SublimeLinter) 是一个代码检查框架插件，功能非常强大，支持各种语言的检查。但它本身并没有代码检查的功能，需要借助 [ESLint](http://eslint.cn/) 这样的特定语言检查支持。我们只需要使用对应的 [Sublime​Linter-contrib-eslint](https://packagecontrol.io/packages/SublimeLinter-contrib-standard) 插件即可。

## 安装Sublime​Linter 和 Sublime​Linter-contrib-standard

```
npm install -g standard
```

然后在 Sublime text 中 `Command + Shift + p` > `Package Control:Install Package` 里面搜索关键词 `SublimeLinter`。然后再搜索 **eslint** 找到 `SublimeLinter-eslint` 将二者一并完成安装，更多安装步骤[查看这里](https://github.com/Flet/SublimeLinter-contrib-standard)。

## 配置

> **注意：** 如果您跟我一样使用MAC系统的时候安装了`zsh`、`oh-my-zsh`和`.nvm`管理NodeJS，那么需要将`~/.zshrc`中关于加载`nvm`的代码注释掉。

另外再建立`nodejs`和`standard`对应的软链接
```
ln -s /Users/xiaoluo/.nvm/versions/node/v{YOUR_NVM_VERSION}/bin/node /usr/local/bin/node
ln -s /Users/xiaoluo/.nvm/versions/node/v{YOUR_NVM_VERSION}/bin/standard /usr/local/bin/standard
```

通过上面的配置之后，再配置Sublime​Linter中的配置，如下：
```
"paths": {
    "linux": [],
    "osx": ["/usr/local/bin"],
    "windows": []
},
```

## 自动格式化sublime-standard-format

使用sublime升级`StandardFormat`插件，并勾选`StandardFormat`配置中的`auto save`。

![](/assets/sublime-format-auto-save.png)

## 参考地址

* [代码规范-从空格到代码格式化](http://echizen.github.io/tech/2016/08-07-code-space-standard)

* [Sublime Text 中配置 Eslint 代碼檢查和自動修復](https://hk.saowen.com/a/3fbc5f6ab048863c1d3a95b5808bfca821df16a50435ce867fc3fabc072332ca)

* [Sublime Text 3 配置 ESLint 代码检查](https://keelii.github.io/2017/04/29/sublime-text-3-configure-eslint/)
