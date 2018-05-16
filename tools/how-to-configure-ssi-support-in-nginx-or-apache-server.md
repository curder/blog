## 在Nginx或者Apache服务器中配置SSI支持

虽然一直在使用动态语言开发WEB站点，但在很早之前维护的项目中用过一些特殊的标签。由于服务器是前面同事配置好只要按照规则写就会生效，而在我本地的服务器却始终无法展现预期的结果，这让我很困惑。

一般情况下，在开发静态网页时，网页的头部和尾部基本是一样的，此时当然可以每个页面是独立编写，这样的做法会有大量重复代码，不便于后期修改维护。

这时通过配置服务器的SSI支持来达到简化这一重复编码文件的目的。


## 什么是SSI

**SSI**是Server Sidde Include的缩写，是服务器包含的意思，支持大部分的web服务器，例如：Apache、Nginx、Tomcat等等。

它的工作原理是：在页面发送到客户端之前，使用SSI指令将待包含的文件、图片等文件包含到请求的网页中，通过一个非常简单的语句即可调用包含文件，此语句指示WEB服务器将内容插入适当网页。

## 指令配置

SSI是被HTML文档内需要进行处理的包含部分的SSI Servlet调用的。这些指令是HTML文档的注释形式，这些指令在将内容发送到客户端之前进行内容的替换。

标准配置格式是：`<!--#directive [parm=value] -->`。

配置项 | 示例 | 说明
---- | ---- | ----
`config` | `<!--#config timefmt="%B %Y" -->` | 设置日期格式一起被SSI处理的其他数据
`echo` | `<!--#echo var="VARIABLE_NAEM" -->` | 将会被变量的值替换掉
`exec` | -- | 用来执行服务器端的命令
`include` | `<!--#include virtual="file-name" -->` | 包含的文件绝对路径
`flastmod` | `<!--#flastmod file="filename.html" -->` | 返回某个文件最后一次修改的时间
`fsize` | `<!--#fzie file="filename.html" -->` | 返回某个文件的大小
`printenv` | `<!--#printenv -->` | 返回所有定义的变量
`set` | `<!--#set var="foo" value="Bar" -->`| 用来为定义的变量赋值


### Nginx启用SSI

官方文档地址： [Module ngx_http_ssi_module](http://nginx.org/en/docs/http/ngx_http_ssi_module.html)

Nginx的SSI配置选项主要是以下三个：

* `ssi` 默认值`off`，如果要启用SSI，将其设为`on`

* `ssi_silent_errors` 默认值`off`，开启后在处理SSI文件出错时不输出错误提示`[an error occurred while processing the directive]`,实际测试并没有抑制错误。

* `ssi_types` 默认是`text/html`，所以如果需支持html，则不需要设置这句，如果需要支持**shtml**格式则需要设置：`ssi_types text/shtml`

参数的上下文环境是:`http`, `server`, `location`, `if in location`，下面是示例：

```
server {
    listen  80;
    server_name  192.168.1.10;
    location / {
        ssi on;
        ssi_silent_errors off;
        ssi_types text/html;
        index index.html;
        root /var/www/html;
        expires 30d;
        access_log      /var/log/nginx/localhost_access_log main;
    }
}
```


### Apache上启用SSI

Apache的主配置文件`httpd.conf`中配置需要支持SSI的后缀（html）

去掉`AddType text/shtml，AddOutputFilter INCLUDES .shtml`前面注释。

> 注意一下包含文件的后缀。


## 参考链接

* [在nginx、apache、tomcat、iis中配置SSI](http://www.publiccms.com/introduction/2015/08-25/177.html)
