# 安装Oh-My-Zsh

[Oh My Zsh](https://github.com/ohmyzsh/ohmyzsh) 的简单配置能让我们快速使用 `zsh` 这个 `SHELL` 给开发者带来很多愉悦，节省时间。


## 安装zsh
```bash
yum install -y zsh
```

## 配置zsh

切换当前用户的bash为`zsh`。

```bash
chsh -s `which zsh` # 切换当前用户为zsh
chsh -s `which zsh` deployer # 指定deployer用户修改默认shell为zsh
chsh -s /bin/bash # 切换回bash
```

## 安装 [Oh-My-Zsh](https://github.com/ohmyzsh/ohmyzsh)

```bash
sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)" # 通过curl进行安装
# 或者通过wget进行安装
sh -c "$(wget https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh -O -)"
```

### 配置 Oh-My-Zsh

Oh-My-Zsh 的默认配置在 `~/.zshrc` 文件中配置可以配置，修改默认的基本配置。

> **注意：** 如果配置文件 `~/.zshrc` 不存在则通过手动创建它，默认的配置文件在 [github.com/ohmyzsh/ohmyzsh/blob/templates/zshrc.zsh-template](github.com/ohmyzsh/ohmyzsh/blob/templates/zshrc.zsh-template)。

```bash
export ZSH=$HOME/.oh-my-zsh
ZSH_THEME="tjkirch" # ys
plugins=(git autojump zsh-autosuggestions zsh-syntax-highlighting) # 开启常用插件,其中 git 是默认自带，其他三个插件的安装在下面有介绍
source $ZSH/oh-my-zsh.sh

export UPDATE_ZSH_DAYS=30 # 30天检查更新 zsh 并提示是否更新
HIST_STAMPS="yyyy-mm-dd"  # 历史记录时间格式
export LANG=en_US.UTF-8   # 语言
```

### 插件管理

安装以下插件的時候，請确定已安装好 `Oh My Zsh` ，且目前正在使用的 `Shell` 是 `Zsh`。

> Oh-My-Zsh 自带的插件一般放置在目录 `~/.oh-my-zsh/plugins` 目录下，而通过互联网也可以下载更多的插件一般放置在 `~/.oh-my-zsh/custom/plugins` 目录下。


```bash
yum install -y autojump autojump-zsh

# 安装 autosuggestions 插件(根据命令历史输入时的命令进行输入提示的插件，输入指令时，如果看到灰色字的自动完成显示，可以按下 ➔ 來采用。)
git clone git://github.com/zsh-users/zsh-autosuggestions.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions

# 安装 zsh-syntax-highlighting 插件
git clone git://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
```