# CentOS 7 中安装 Node.js 18.x

## 预先准备
```bash
yum makecache
yum install -y centos-release-scl ninja-build git
yum install -y devtoolset-11
scl enable devtoolset-11 bash # or zsh
```

## 创建并进入到目录
```bash
mkdir /opt/softwares && cd /opt/softwares
```

## 克隆 nodejs 源代码
```bash
git clone https://github.com/nodejs/node.git && cd node
```

## 切换到对应的分支
```bash
# 建议使用 git log 看一下 commit 切换到对应 LTS 的 commit 上，否则会有预发布版本
git checkout v18.x

# 比如这里如果要安装 18.2 可以选择 `8a01b3dcb7d08a48bfd3e6bf85ef49faa1454839`
git checkout 8a01b3dcb7d08a48bfd3e6bf85ef49faa1454839
```

## 编译 nodejs
```bash
./configure --ninja # 推荐使用 ninja 编译
make
```

> 注意：执行编译 Node 非常耗时，如果机器内存不大的话，建议使用虚拟内存，[可以查看这里](/os/centos/centos7/how-to-add-swap-space-on-centos-7-operating-system.md)。

# 使用
```bash
out/Release/node -v # 编译后 node 在源代码目录下
out/Release/cctest
```

# 安装npm

```basj
sudo yum install npm
```
