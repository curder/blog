# 如何在 CentOS 7 上新增 swap 分区

交换空间是磁盘上的唯一空间，当物理 RAM 已满时系统将使用该空间，当 Linux 机器耗尽 RAM 时，它使用交换空间从 RAM 中移动非活动页面。

要在 CentOS 7 操作系统上添加交换空间，可以使用以下两种方法，一种是为交换创建专用分区，另一种是创建交换文件并将其用作交换空间。

一般在云主机上可以通过创建交换文件并将其作为交换空间，用于机器在编译等重度需要内存的情况下使用。

## 一些命令

```bash
# 查看SWAP信息是否正确
sudo swapon -s

# 创建分区路径
sudo mkdir -p /var/cache/swap/

# 设置分区的大小
# bs=64M是块大小，count=64是块数量，所以swap空间大小是bs*count=4096MB=4GB
sudo dd if=/dev/zero of=/var/cache/swap/swap0 bs=64M count=64

# 设置目录权限
sudo chmod 0600 /var/cache/swap/swap0

# 创建并激活交换文件
sudo mkswap /var/cache/swap/swap0 && sudo swapon /var/cache/swap/swap0

---
# 删除交换分区
sudo swapoff /var/cache/swap/swap0 && sudo rm /var/cache/swap/swap0
# 释放空间
sudo swapoff -a
```

