# Docker的安装和简单配置

## 系统要求

Docker 支持 64 位版本 CentOS 7/8，并且要求内核版本不低于 3.10。 CentOS 7 满足最低内核的要求，但由于内核版本比较低，部分功能（如 overlay2 存储层驱动）无法使用，并且部分功能可能不太稳定。[具体查看这里](https://docs.docker.com/engine/install/centos/#os-requirements)

## 卸载旧版本
旧版本的 Docker 称为 docker 或者 docker-engine，使用以下命令卸载旧版本：

```bash
sudo yum remove docker \
                docker-client \
                docker-client-latest \
                docker-common \
                docker-latest \
                docker-latest-logrotate \
                docker-logrotate \
                docker-selinux \
                docker-engine-selinux \
                docker-engine
```

鉴于国内网络问题，强烈建议使用国内源，官方源请在注释中查看，如果服务器在海外可以使用官方源。

执行下面的命令添加 yum 软件源：

```bash
sudo yum install -y yum-utils

# 官方源
sudo yum-config-manager \
     --add-repo \
     https://download.docker.com/linux/centos/docker-ce.repo

## 阿里云源
#sudo yum-config-manager \
#    --add-repo \
#    https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
#
#sudo sed -i 's/download.docker.com/mirrors.aliyun.com\/docker-ce/g' /etc/yum.repos.d/docker-ce.repo
```

## 安装Docker

更新 yum 软件源缓存，并安装 docker-ce。

```bash
sudo yum install -y docker-ce docker-ce-cli containerd.io docker-compose-plugin
```

## 启动Docker

```bash
sudo systemctl enable docker
sudo systemctl start docker
```

## 配置Docker

### 建立 docker 用户组

默认情况下，docker 命令会使用 Unix socket 与 Docker 引擎通讯。而只有 root 用户和 docker 组的用户才可以访问 Docker 引擎的 Unix socket。出于安全考虑，一般 Linux 系统上不会直接使用 root 用户。因此，更好地做法是将需要使用 docker 的用户加入 docker 用户组。

建立 docker 组：

```bash
sudo groupadd docker
```

将当前用户加入 docker 组：

```bash
sudo usermod -aG docker $USER
```
> 可以把 `$USER` 变量替换为对应的用户名

## 添加内核参数

如果在 CentOS 使用 Docker 看到下面的这些警告信息：

```text
WARNING: bridge-nf-call-iptables is disabled
WARNING: bridge-nf-call-ip6tables is disabled
```

请添加内核配置参数以启用这些功能：

```bash
sudo tee -a /etc/sysctl.conf <<-EOF
net.bridge.bridge-nf-call-ip6tables = 1
net.bridge.bridge-nf-call-iptables = 1
EOF
```

然后重新加载 sysctl.conf 即可

```bash
sudo sysctl -p
```

## docker-compose

为了获得最新版本，请参考 [Docker 文档](https://github.com/docker/compose/releases)并从 Docker 的 GitHub 存储库中的二进制文件安装 Docker Compose。

检查[当前版本](https://github.com/docker/compose/releases)，如有必要，在以下命令中更新它：

```bash
export DOCKER_COMPOSE_VERSION=2.5.1 && sudo curl -L "https://github.com/docker/compose/releases/download/v$DOCKER_COMPOSE_VERSION/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

sudo chmod +x /usr/local/bin/docker-compose # 授权可执行权限

docker-compose --version # 检查版本
```
