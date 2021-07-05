# 在 MacOSX 上使用 iOS 模拟器调试 web 站点

## 版本

- MacOSX 10.13.6
- Safari 11.1.2
- Xcode 9.2
- Simulator 10.0

## 设置 Simulator

- 打开 Simulator
  <img :src="$withBase('/images/os/macos/debugging-web-sites-with-ios-simulator-on-macosx/lunched-simulator.png')" alt="">

- 点击"Setting" -> "Safari" -> "Advanced" -> 开启"Web Inspector"选项

- 重启"Simulator"「重要」

## 设置 Safari

这里指的 Safari 是在 MacOSX 系统上的。

- 检查在菜单操作栏上是否存在 Develop，如果不存在的话。
  - 打开 Safari -> Preferences
  - 选择 Advanced 选项，将选项中的"Show Develop menu in menu bar"选中。

## 测试效果

- 通过 Simulator 中的 Safari 打开对应需要调试的站点地址

- 在 MacOSX 中选中菜单上的 Develop -> Simulator -- iPhone \*\*\*\* -> 目标地址


<img :src="$withBase('/images/os/macos/debugging-web-sites-with-ios-simulator-on-macosx/choose-simulator-from-safari.png')" alt="">

<img :src="$withBase('/images/os/macos/debugging-web-sites-with-ios-simulator-on-macosx/choose-simulator-from-safari-result.png')" alt="">

- 接下来就是尽情的打断点调试 HTML/JS/CSS 了

## 参考地址

- [Opening the Web Inspector to Debug Applications in the iOS Simulator/Mobile Safari](https://support.saucelabs.com/hc/en-us/articles/115002200207-Opening-the-Web-Inspector-to-Debug-Applications-in-the-iOS-Simulator-Mobile-Safari)
