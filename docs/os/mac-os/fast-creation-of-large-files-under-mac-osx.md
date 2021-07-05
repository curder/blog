# Mac OSX系统下快速创建大文件

常常有这样的开发场景，比如在测试上传功能的时候需要一个比较大的文件，如果在MacOSX系统中创建大容量空白文件非常简单，第一种就是使用终端命令行，第二种是使用磁盘工具应用。

## 使用终端命令行创建大容量文件

### 使用mkfile命令

快速生成大容量空白文件最简单的命令就是`mkfile`，无论是大文件还是小文件，`mkfile`都支持。

`mkfile`命令的格式如下

```bash
mkfile [-nv] size[b|k|m|g] filename ...
```

如果想在桌面上创建文件名为`big_file.data`的**1GB**容量文件时，只需使用下面的命令

```bash
mkfile -n 1g ~/Desktop/big_file.data
```

### 使用dd命令

由于`mkfile`只支持Mac OSX系统，如果想要在其他平台上创建大容量空白文件，`dd`命令可能更合适一些，`dd`命令支持所有的`unix`系统。

使用`dd`命令，需要定义文件名、区块尺寸和区块大小

#### 参数

```ini
bs = <字节数>：将ibs（输入）与欧巴桑（输出）设成指定的字节数；
cbs = <字节数>：转换时，每次只转换指定的字节数；
conv = <关键字>：指定文件转换的方式；
count = <区块数>：仅读取指定的区块数；
ibs = <字节数>：每次读取的字节数；
obs = <字节数>：每次输出的字节数；
of = <文件>：输出到文件；
seek = <区块数>：一开始输出时，跳过指定的区块数；
skip = <区块数>：一开始读取时，跳过指定的区块数；
```

#### 示例

* 创建一个1M大小的文件

```bash
dd if=/dev/zero of=file.txt bs=1024 count=1
```

* 创建一个100M大小的文件

```bash
dd if=/dev/zero of=file.txt bs=1024 count=0 seek=$[1024 * 100]
```

* 创建一个1G大小的文件

```bash
dd if=/dev/zero of=file.txt bs=1024 count=0 seek=$[1024 * 1024]
```

其中参数解释：

- `/dev/zero` 是一个字符设备，会不断返回0值字节（\0）。
- `if` 代表输入文件。如果不指定if，默认就会从stdin中读取输入。
- `of` 代表输出文件。如果不指定of，默认就会将stdout作为默认输出。
- `bs` 代表字节为单位的块大小。
- `count` 代表被复制的块数。

|单元大小 |   代码
---- | ----
字节（1B） | c
字节（2B） | w
块（512B）|  b
千字节（1024B）|  k
兆字节（1024KB）| M
吉字节（1024MB）| G

### 使用磁盘工具穿件大容量空白文件

0. 点击`Dock`中的`Launchpad`。搜索并点击打开磁盘工具
   <img :src="$withBase('/images/os/macos/fast-creation-of-large-files-under-mac-osx/diskimage-utility.jpg')" alt="">

1. 点击左上角的“文件”下拉菜单，选择新建，然后选择“空白磁盘映像”。
   <img :src="$withBase('/images/os/macos/fast-creation-of-large-files-under-mac-osx/diskimage-new.png')" alt="">

> 或者在磁盘工具面板按快捷键`command + N`，新建"空白磁盘映像"

2. 选中好要保存的文件名和文件路径，然后在“大小”下拉菜单中选择自己需要的尺寸，最后点击创建即可。
   <img :src="$withBase('/images/os/macos/fast-creation-of-large-files-under-mac-osx/diskimage-details.png')" alt="">

## 参考地址

- [小技巧：通过终端或者磁盘工具创建大容量空白文件](https://www.macx.cn/thread-2093355-1-1.html)

- [dd命令](http://man.linuxde.net/dd)
