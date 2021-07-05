# Mac开发环境Laravel Valet实践

[Laravel Valet](https://laravel.com/docs/5.5/valet "Laravel Valet")是一个**Mac**下面的常见框架的极简开发环境，不但可以本地开发，还可以分享到公网访问。

当Mac电脑开机后会在后台一直启动 [Caddy](https://caddyserver.com/),`Valet`通过 [DnsMasq](https://en.wikipedia.org/wiki/Dnsmasq)
把所有的`.dev`为后缀的域名指向本地安装的站点。比如站点所在目录`blog`, 通过浏览器访问`blog.dev`就会自动访问到`blog/public`
目录了。分享到公网其实主要依靠[ngrok](https://ngrok.com/)来实现的。

目前能直接支持如下项目：

* [Laravel](https://laravel.com/)
* [Lumen](https://lumen.laravel.com/)
* [Bedrock](https://roots.io/bedrock/)
* [CakePHP 3](https://cakephp.org/)
* [Concrete5](http://www.concrete5.org/)
* [Contao](https://contao.org/en/)
* [Craft](https://craftcms.com/)
* [Drupal](https://www.drupal.org/)
* [Jigsaw](http://jigsaw.tighten.co/)
* [Joomla](https://www.joomla.org/)
* [Katana](https://github.com/themsaid/katana)
* [Kirby](https://getkirby.com/)
* [Magento](https://magento.com/)
* [OctoberCMS](https://octobercms.com/)
* [Sculpin](https://sculpin.io/)
* [Slim](https://www.slimframework.com/)
* [Statamic](https://statamic.com/)
* Static HTML
* [Symfony](https://symfony.com/)
* [WordPress](https://wordpress.org/)
* [Zend](https://framework.zend.com/)

**当然，我们也是可以自己驱动，**[**Custom Valet
Drivers**](https://laravel.com/docs/5.4/valet#custom-valet-drivers "Custom Valet Drivers")。

## 安装前的准备

* homebrew

* php70

* composer

```
brew update
brew services list
```

* 如果没有安装 composer，可以使用命令`brew install composer`进行安装

### 安装

#### 安装Valet

```bash
composer global require laravel/valet
```

#### 安装Valet和DnsMasq

```bash
valet install
```

如果**DnsMasq安装失败可以使用命令手动安装**

```bash
brew install dnsmasq
```

执行完成后，使用ping命令试试效果

```bash
ping "*.dev"
PING *.dev (127.0.0.1): 56 data bytes
64 bytes from 127.0.0.1: icmp_seq=0 ttl=64 time=0.027 ms
64 bytes from 127.0.0.1: icmp_seq=1 ttl=64 time=0.036 ms
```

> 如果能ping通，则表示配置成功。此时我们可以拿一个项目来测试一下

## 测试Valet运行Laravel

* 创建文件夹并进入

```bash
mkdir ~/Website && cd ~/Website
```

* 运行`valet park`

```bash
valet park
```

> 这条命令是将上面的目录，也就是`~/Website`目录作为寻找站点的路径。

* 创建Laravel项目

```bash
laravel new blog
```

如果不存在 laravel 命令，则运行 `composer global require "laravel/installer"`拿到laravel命令。

* 访问`blog.dev`项目

<img :src="$withBase('/images/tools/valet/valet-install/blog.dev.jpg')" alt="">

### 项目别名

`park`命令会把这个目录下所有文件夹都当做独立的不同站点，而当你只需要启动一个站点的时候，可以使用 `link`命令。

`link`命令也可以用来启动 Laravel 站点。

```bash
cd ~/Website/blog
valet link test-blog
```

执行上面命令就可以在本地浏览器通过 [http://test-blog.dev](http://test-blog.dev/) 访问blog项目的站点了。

<img :src="$withBase('/images/tools/valet/valet-install/test-blog.dev.jpg')" alt="">

另外还有了两个比较有用的命令如：

```bash
valet links
valet unlink
```

其中 `links` 是查看当前所有的项目别名，`unlink` 则是将已有的别名移除。

### 站点支持TLS

让站点支持TLS也很简单，只需要执行：

```bash
valet secure blog
```

这样就可以用 `https://blog.dev` 进行访问了，如果想取消的话可以使用下面的命令：

```bash
valet unsecure blog
```

### 分享站点

这个功能是让本地开发的项目通过分享给互联网上其他用户进行访问呢，只需要在项目根目录下执行一个命令就可以

```bash
valet share
```

这样就会通过`ngrok`生成一个外网URL，要停止分享，可以按 `control + c`来取消进程。

```bash
ngrok by @inconshreveable                                                                        (Ctrl+C to quit)

Session Status                online
Update                        update available (version 2.2.8, Ctrl-U to update)
Version                       2.1.18
Region                        United States (us)
Web Interface                 http://127.0.0.1:4040
Forwarding                    http://3c378de6.ngrok.io -> test-blog.dev:80
Forwarding                    https://3c378de6.ngrok.io -> test-blog.dev:80

Connections                   ttl     opn     rt1     rt5     p50     p90
                              0       0       0.00    0.00    0.00    0.00
```

#### `Valet`其他命令 {#valet}

| 命令 | 描述 |
| :--- | :--- |
| `valet forget` | 在 “对应” 的目录中执行该命令来把其从“对应” 目录列表中删除 |
| `valet paths` | 查看所有paths路径 |
| `valet restart` | 重启 Valet 程序 |
| `valet start` | 启动 Valet 程序 |
| `valet stop` | 停止 Valet 程序 |
| `valet uninstall` | 卸载 Valet 程序 |
