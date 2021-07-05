# 如何在各大平台上免费翻"墙"

* “墙外”账号
    1. 自建服务器账号 [CentOS7下安装配置shadowsocks](/os/centos/installing-configuration-shadowsocks-under-centos-7.md)
    2. 免费账号 [Free-SS](http://free-ss.cf/) [ss.pythonic.life 需翻墙访问](http://ss.pythonic.life)

* 各常用平台代理工具
    1. MacOSX [shadowsocks/ShadowsocksX-NG](https://github.com/shadowsocks/ShadowsocksX-NG)
    2. Windows [shadowsocks/shadowsocks-windows](https://github.com/shadowsocks/shadowsocks-windows)
    3. iOS [Wingy App Store](https://itunes.apple.com/us/app/wingy-http-s-socks5-proxy-utility/id1178584911)
    4. Android [shadowsocks/shadowsocks-android](https://github.com/shadowsocks/shadowsocks-android/releases)

## 下载对应平台下的代理工具

不管以什么的样的方式拿到对应的“墙外”账号后针对不同平台使用不用的代理工具。

### [免费](http://free-ss.cf/)翻墙账号

随便打开一个浏览器，比如Safari浏览器，输入`http://free-ss.cf/`回车，可以看到很多的免费的账号

<img :src="$withBase('/images/tools/how-to-be-free-on-all-major-platforms-over-the-fire-wall-use-free-ss-number.png')" alt="">

> Windows平台可以使用弹窗中二维码下面的URI链接将配置写入到“翻墙”软件中。
> 在MacOSX下同时也可以使用软件扫描弹出的二维码将配置写入到“翻墙”软件中。

### MacOSX

MacOSX平台推荐使用[shadowsocks/ShadowsocksX-NG](https://github.com/shadowsocks/ShadowsocksX-NG)，进入对应的GitHub下载页面，下载、安装和启动对应的程序（如果需要将ShadowsocksX-NG放到系统的Launchpad里面，可以使用将应用拷贝到`/Applications`，执行对应的命令`cp
-r ~/Downloads/ShadowsocksX-NG.app /Applications`）。

- [ShadowsocksX-NG.1.7.1](https://github.com/shadowsocks/ShadowsocksX-NG/releases/download/v1.7.1/ShadowsocksX-NG.1.7.1.zip)

#### 简单设置Shadowsocks

1. 选择模式，这里推荐使用PAC配置，并且推荐使用之前记得点击"从GFW List更新PAC"拉取最新的规则。
2. 选择从上面拿到的配置

<img :src="$withBase('/images/tools/how-to-be-free-on-all-major-platforms-over-the-fire-wall-shadowsocks-macos-ui.png')" alt="">

上面的配置都完毕了，就可以畅游Google和YouTube了。

<img :src="$withBase('/images/tools/how-to-be-free-on-all-major-platforms-over-the-fire-wall-hello-google.png')" alt="">

### Windows

Windows平台推荐使用[shadowsocks/shadowsocks-windows](https://github.com/shadowsocks/shadowsocks-windows)，进入对应的GitHub下载页面，下载、安装和启动对应的程序。

<img :src="$withBase('/images/tools/how-to-be-free-on-all-major-platforms-over-the-fire-wall-shadowsocks-windows-ui.png')" alt="">

然后就可以打开浏览器访问想要访问国外网站了。

### iOS

#### 下载APP

由于App Store上架的App经常被下线，所以如果在应用商店找不到对应的APP，建议修改账号的所属地区后重新尝试，这里就不演示安装过程，请自行解决。

#### 简单配置

下载 `OpenWingy` 或者 `shadowrocket` 后，使用软件里的“扫描二维码”的功能将免费的“翻墙账号”配置识别到工具中（建议多扫描几个作为备用）。

<img :src="$withBase('images/tools/how-to-be-free-on-all-major-platforms-over-the-fire-wall-use-open-wingy-ui.jpeg')" alt="">

### Android

#### 下载安卓版影梭(shadowsocks)并完成安装

#### 简单配置

直接使用`free-ss.cf`站点提供的免费账号

- 方法一： 在free-ss.cf站点上点击可用的服务器配置二维码小图标，扫描弹窗中的二维码信息，然后使用已有的Windows系统或者MacOSX系统服务器配置生成二维码供移动设备扫描。

- 方法二：
    1. 如果是MacOSX系统，点击小飞机“shadowsocks”，选择“显示当前服务器的二维码”。
    2. 如果是Widows电脑客户端，右键点电脑右下脚shadowsocks软件的“服务器”，选择”显示二维码“，点开后，点击每条线路都会显示不同的“二维码”。
    3. 打开手机上影梭软件通过扫描识别Windows或者MacOSX系统的二维码。

至此，常用的平台翻墙基本整理完毕。

## 相关连接

- [真正的长期免费翻墙方法！无需VPN服务器不要信用卡支付宝，只要你能访问百度就能实现科学上网，电脑手机通用](https://www.youtube.com/watch?v=UdTd6CKMzaA&t=0s&index=6&list=PLIgoCKlRUSeY8QKhi7UGt3ePwtxyKdeqd)
- [ss免费账号](https://github.com/Alvin9999/new-pac/wiki/ss%E5%85%8D%E8%B4%B9%E8%B4%A6%E5%8F%B7)
