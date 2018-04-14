## MacOS Hight Sierra清除DNS缓存

在Mac机器Terminal终端通过`ping`命令探测域名的时候，一直卡顿ping没有响应；但是通过`ping`服务器IP的时候却能正常`ping`通。

这个时候需要检查域名是否正确指向到该服务器IP，如果也做好了域名解析，还是ping不通的话。可以通过下面的命令试着清除一下Mac的DNS缓存。

```
sudo dscacheutil -flushcache;sudo killall -HUP mDNSResponder;
```

> 上面的命令如果没有返回值则表示执行成功。请在Terminal终端再尝试`ping`域名试试？

## 参考地址

* [How to Clear DNS Cache in MacOS Sierra](http://osxdaily.com/2017/03/08/clear-dns-cache-macos-sierra/)