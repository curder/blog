## 如何在CentOS上使用Deployer自动部署Laravel应用程序

[Laravel](https://laravel.com)是一个开放源代码的PHP Web框架，旨在简化认证，路由和缓存等常见Web开发任务。[Deployer](https://deployer.org)是一款开源的PHP部署工具，它为许多流行的框架提供了开箱即用的支持，包括`Laravel`，`CodeIgniter`，`Symfony`和`Zend Framework`等等。

部署者通过将应用程序从Git存储库克隆到服务器，安装与[Composer](https://getcomposer.org)的依赖关系以及配置应用程序来自动执行部署，因此您不必手动执行此操作。这使开发者可以将更多时间花在开发上，而不是上传和配置，并允许开发者更频繁地进行部署。

## 开始之前

在开始之前，您需要以下内容：
* 一个`CentOS 7.5.1804`服务器，具有`sudo`特权的非root用户。
* 按照[CentOS7下LNMP安装配置](/centos/centos-7-lnmp-installation-and-configuration.md)配置好的LNMP环境
* 一个Git服务器。可以选择使用[Gogs](https://gogs.io)、[GitLab](https://about.gitlab.com)，[Bitbucket](https://bitbucket.org)或[GitHub](https://github.com)等服务。`Gogs`、`GitLab`和`Bitbucket`免费提供私人仓库，而`GitHub`提供私人仓库，每月**$7**起。
* 指向生产服务器的域名。
* `Composer`和`Git`也安装在本地机器上。例如这里的MacOSX系统。

## 设置本地开发环境

> **此部分在本地开发环境操作**，1. 下载和安装`deployer` 2. 初始化一个`laravel`项目 3. 使本地开发环境能够免密提交代码到远程git仓库

### 下载deployer扩展

由于将从本地机器创建和部署应用程序，因此首先配置本地开发环境。部署者将从本地机器控制整个部署过程，因此请先安装它。

在**本地机器**上，打开终端并使用下载部署器安装程序`composer`：
```
composer global require deployer/deployer -vvv
```

安装完成你应该可以使用以下命令来查看它的版本信息：

```
dep --version
# Deployer master
```

### 创建一个Laravel项目

接下来，在**本地机器**上创建一个Laravel项目（假如本地代码放在`~/Codes`目录下）：

```
cd ~/Codes && composer create-project --prefer-dist laravel/laravel laravel-app "5.6.*"
```

现在已经在本地计算机上安装了所有必需的扩展包。有了这个，我们将继续为应用程序创建一个Git仓库。

### 本地机器连接到您的远程Git仓库

部署旨在使用户能够从任何地方部署代码。为了实现这一功能，它需要用户将代码推送到互联网上的仓库，然后部署人员将代码拷贝到生产服务器。

我们将使用开源版本控制系统Git来管理Laravel应用程序的源代码。可以使用SSH协议连接到Git服务器，为了安全地执行此操作，您需要生成SSH密钥。这比基于密码的身份验证更安全，同时也可以避免在每次部署前输入密码。

#### 编辑SSH密钥

在本地计算机上运行以下命令以生成SSH密钥。请注意，`-f`参数指定密钥文件的文件名，并且可以自定义文件名替换`gitkey`。它会生成一个SSH密钥对（命名`gitkey`和`gitkey.pub`）到该`~/.ssh/`文件夹。
```
ssh-keygen -t rsa -b 4096 -f  ~/.ssh/gitkey
```
> 开发者可能在本地计算机上拥有很多的SSH密钥，因此在配置SSH客户端之前了解在连接到Git服务器时使用哪个SSH专用密钥。当然也可以使用之前已经存在的SSH密钥。

#### 创建一个SSH配置文件

```
vim ~/.ssh/config
```
打开文件并为Git服务器添加一个快捷方式。这应该包含`HostName`指令（指向Git服务器的主机名）和`IdentityFile`指令（指向您刚刚创建的SSH密钥的文件路径）：

```
Host mygitserver.com
    HostName mygitserver.com
    IdentityFile ~/.ssh/gitkey
```

这样配置的话，SSH客户端将知道使用哪个私钥连接到Git服务器。

使用以下命令显示公钥文件的内容
```
cat ~/.ssh/gitkey.pub
```
复制输出并将公钥添加到您的Git服务器。

如果使用Git托管服务，请参阅有关如何将SSH密钥添加到您的帐户的文档：

* [将SSH密钥添加到GitHub](https://help.github.com/articles/adding-a-new-ssh-key-to-your-github-account)
* [将SSH密钥添加到GitLab](https://docs.gitlab.com/ee/gitlab-basics/create-your-ssh-keys.html)
* [将SSH密钥添加到Bitbucket](https://confluence.atlassian.com/bitbucket/set-up-an-ssh-key-728138079.html)

添加完成之后，现在可以使用本地机器连接到Git服务器。使用以下命令测试连接

```
ssh -T git@mygitserver.com
```

如果此命令导致错误，请检查是否通过引用Git托管服务的文档正确添加了SSH密钥，然后再次尝试连接。

在将应用程序推送到远程Git存储库并进行部署之前，我们先配置生产服务器。

## 配置生产服务器

> 此部分在目标服务器即**生产服务器**上操作 1. 创建一个部署用户用于部署 2. 授权部署用户的相关操作 3. 使生产环境能够免密拉取远程git仓库代码

### 配置部署者用户

部署者使用SSH协议在服务器上安全地执行命令。出于这个原因，在生产服务器创建一个用户`deployer`，Deployer可以使用该用户通过SSH登录并在您的服务器上执行命令。
使用sudo非root用户登录到生产服务器，并使用以下命令创建一个名为`deployer`的新用户：
```
sudo yum install -y unzip git
sudo adduser deployer
```
> 创建一个`deployer`部署用户，上面的命令按回车后输入用户密码和重复密码后直接按回车即可。

Laravel需要一些可写的目录来存储缓存的文件和上传文件，因此部署者用户创建的目录必须可由Nginx Web服务器写入。使用下面的命令将用户添加到`nginx`组中以执行此操作：
```
sudo usermod -aG nginx deployer
```
> Nginx服务器的用户组是`nginx`，根据当前环境进行替换

假设将应用程序存储在`/var/www/html/`目录中，因此将目录的所有权更改为部署者用户和`nginx`组。

```
sudo mkdir -p /var/www/html && sudo chown deployer:nginx /var/www/html # 最后这里不要加斜线哦
```

该**部署**的用户需要能够在中修改文件和文件夹`/var/www/html`目录。因此目录中创建的所有新文件和子目录`/var/www/html`都应该继承该文件夹的组标识（nginx）。要实现这个目标，请使用以下命令在此目录中设置组ID：

```
sudo chmod g+s /var/www/html
```

**部署者**将使用SSH将Git repo克隆到生产服务器，因此您要确保生产服务器和Git服务器之间的连接是安全的。这里将使用与用于本地计算机的相同方法，并为部署者用户生成一个SSH密钥。

### 项目git仓库授权生产服务器访问

切换到服务器上的**部署者deployer**用户：
```
su - deployer
```
> **特别注意：** 切换用户之前请使用`sudo su -`切换到`root`用户。

接下来，生成一个SSH密钥对作为**部署者**用户。这一次，可以接受SSH密钥的默认文件名：
```
ssh-keygen -t rsa -b 4096
```

> 输入完命令后一直按Enter即可。

使用下面的命令显示公钥：
```
cat ~/.ssh/id_rsa.pub
```
像上一步那样复制本地公钥文件一样并将其添加到Git服务器，现在服务器就可以从git仓库clone代码了。

此时，可以在服务器使用`deployer`用户使用 `git clone`命令拷贝git仓库测试。如果不能成功拷贝仓库代码，请检查服务器的公钥是否正确完全的复制与粘贴正确，不正确的话再次重复复制粘贴即可。

## 开发环境免密码登录生产环境

### 开发环境生成密匙

> **此部分在本地开发环境操作** 1. 设置本地开发环境能够免密登录生产环境

在**本地开发机器**上运行以下命令。随意用自定义文件名替换`deployerkey`：

```
ssh-keygen -t rsa -b 4096 -f  ~/.ssh/deployerkey
```

复制包含公钥的以下命令的输出：

```
cat ~/.ssh/deployerkey.pub
```

### 修改开发环境文件内容

> **此部分在生产环境操作**  生产环境修改`~/.ssh/authorized_keys`内容和权限

将上面复制的公钥内容，添加到生产服务器上的`~/.ssh/authorized_keys`文件内。

> 注意在生产服务器上，使用**部署者**用户`deployer`修改上面的文件内容。

修改完成后，使用下面的命令修改文件权限：

```
chmod 600 ~/.ssh/authorized_keys
```

### 使用部署用户测试

作为**部署者**用户，从本地计算机登录到服务器以测试连接：

```
ssh deployer@your_server_ip -i ~/.ssh/deployerkey
```

以部署者身份登录后，测试线上服务器和Git服务器之间的连接是否OK：

```
ssh -T git@mygitserver.com
```


## 配置Nginx

> 以下配置在**生产服务器**配置。

### 创建一个站点配置文件

以`sudo`用户身份登录到服务器并创建一个新的配置文件。将配置中的域名`example.com`替换为你当前操作的。

```
sudo vi /etc/nginx/conf.d/example.com
```

大致内容如下：

```
server {
    listen 80;
    listen [::]:80;

    root /var/www/html/laravel-app/current/public;
    index index.php index.html index.htm index.nginx-debian.html;

    server_name example.com www.example.com;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location ~ \.php$ {
        try_files $uri =404;
        fastcgi_index index.php;
        fastcgi_param SCRIPT_FILENAME $realpath_root$fastcgi_script_name;
        fastcgi_pass unix:/run/php-fpm/php-fpm.sock;
        include fastcgi_params;
    }

    location ~ /\.ht {
        deny all;
    }
}
```

### 测试配置语法

```
sudo nginx -t
```

如果您看到任何错误，请返回并重新检查配置文件，然后再继续。

### 重新启动Nginx

```
sudo systemctl restart nginx
```

现在配置Nginx服务器。接下来，我们将配置应用程序的MySQL数据库。

## 配置MySQL

> 以下配置在**生产服务器**配置。

以root身份登录到MySQL控制台：
```
mysql -u root -p
```

这会提示你输入root密码，正确输入root密码后。接下来，为应用程序创建一个新的数据库：
```
CREATE DATABASE laravel_app DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

然后，创建一个新的数据库用户。这里演示使用用户名：`laravel_user`和密码：`MyNewPassword1!`，但实际情况应该使用强密码。

```
CREATE USER 'laravel_user'@'localhost' IDENTIFIED BY 'MyNewPassword1!';
```

授予用户数据库权限：
```
GRANT ALL ON laravel_app.* TO 'laravel_user'@'localhost';
```

接下来，重新加载权限：
```
FLUSH PRIVILEGES;
```

最后，`exit`退出MySQL控制台。

## 部署应用程序

### 配置deployer

到目前为止，已经配置了**部署者**运行所需的所有工具和程序。在运行第一个部署之前，剩下的工作就是完成Laravel应用程序和Deployer本身的配置，并初始化并将项目代码推送到远程Git存储库。

打开**本地开发机器**上的终端，并使用以下命令将工作目录更改为应用程序的文件夹：

```
cd ~/Codes/laravel-app
```

在该目录中运行以下命令，该命令将创建在项目根目录`laravel-app`下创建一个`deploy.php`文件，该文件将包含配置信息和部署任务：

```
dep init -t Laravel
```

接下来，在文本编辑器或IDE打开`deploy.php`文件。第三行包含一个PHP脚本，其中包含部署Laravel应用程序所需的任务和配置：

```
<?php
namespace Deployer;

require 'recipe/laravel.php';

// Project name
set('application', 'laravel-app');

// Timeout
set('default_timeout', 360);

// Project repository
set('repository', 'git@gogs.curder.com:curder/laravel-app.git');

// [Optional] Allocate tty for git clone. Default value is false.
set('git_tty', true);

// Shared files/dirs between deploys
add('shared_files', []);
add('shared_dirs', []);

// Writable dirs by web server
add('writable_dirs', []);

// customize config
set('ssh_multiplexing', true);
set('allow_anonymous_stats', false);
set('keep_releases', -1); // 保存所有部署版本


// Hosts
host('server_ip') // 填写生产服务器IP地址
    ->user('deployer') // 填写生产服务器部署用户名
    ->identityFile('~/.ssh/deployerkey') // 秘钥文件，跟配置免密登录时的设置保存的名称一致
    ->set('deploy_path', '/var/www/html/laravel-app');

// Tasks
task('build', function () {
    run('cd {{release_path}} && build');
});

// 自定义任务：重置 PHP-FPM 进程
// desc('Restart PHP-FPM service');
// task('php-fpm:reload', function () {
//    // The user must have rights for reload service
//    // /etc/sudoers: deployer ALL=NOPASSWD:/bin/systemctl reload php7.1-fpm.service
//    run('sudo systemctl reload php7.1-fpm.service');
//});

// [Optional] if deploy fails automatically unlock.
after('deploy:failed', 'deploy:unlock');

// Migrate database before symlink new release.
// before('deploy:symlink', 'artisan:migrate');
// 部署成功后重置 PHP-FPM 缓存
// after('deploy:symlink', 'php-fpm:reload');
```

> 修改上面的 `servier_ip`

相关的指令详见[官方文档](https://deployer.org/docs)

接下来，注释掉文件相关行`before('deploy:symlink', 'artisan:migrate');`。此行指示部署者自动运行数据库迁移，并通过注释将其禁用。如果不注释它，部署将失败，因为此行需要在服务器上提供项目的数据库配置，只能使用在首次部署期间生成的文件之后来添加该行。

### 提交项目代码到git

```
cd ~/Code/laravel-app
```

在`laravel-app`目录中运行以下命令以初始化项目文件夹中的Git存储库
```
git init
```

接下来，将所有项目文件添加到存储库中
```
git add .
```

提交更改
```
git commit -m 'Initial commit for first deployment.'
```

使用以下命令将您的Git服务器添加到本地存储库。请确保使用您自己的远程存储库的**URL**替换命令中的地址：
```
git remote add origin git@mygitserver.com:username/repository.git
```

将更改推送到远程Git存储库：
```
git push origin master
```

### 使用以下`dep`命令运行部署

```
dep deploy
```
> 需要查看部署输出的详情可以使用 `-vvv`参数。

如果一切顺利，你应该Successfully deployed!在最后看到这样的输出
```
Deployer's output
✈︎ Deploying master on your_server_ip
✔ Executing task deploy:prepare
✔ Executing task deploy:lock
✔ Executing task deploy:release
➤ Executing task deploy:update_code
✔ Ok
✔ Executing task deploy:shared
✔ Executing task deploy:vendors
✔ Executing task deploy:writable
✔ Executing task artisan:storage:link
✔ Executing task artisan:view:clear
✔ Executing task artisan:cache:clear
✔ Executing task artisan:config:cache
✔ Executing task artisan:optimize
✔ Executing task deploy:symlink
✔ Executing task deploy:unlock
✔ Executing task cleanup
Successfully deployed!
```
以下结构将在目录内的服务器上创建：`/var/www/html/laravel-app`
```
├── .dep
├── current -> releases/1
├── releases
│   └── 1
└── shared
    ├── .env
    └── storage
```

以下是每个文件和目录包含的内容：

* 该`releases`目录包含Laravel应用程序的部署版本。
* `current` 是最后一个版本的符号链接。
* 该`.dep`目录包含Deployer的特殊元数据。
* 该`shared`目录包含`.env`配置文件和`storage`将被链接到每个版本的目录。

### 登录服务器

#### 查看项目目录

通过在**生产服务器**上运行以下命令来验证该文件，该命令将列出文件夹中的文件和目录：

```
ls /var/www/html/laravel-app

# Output
current  .dep  releases  shared
```

但是，该应用程序无法工作，因为该`.env`文件是空的。该文件用于保存重要配置，如应用程序密钥`APP_KEY`用于加密的随机字符串。如果未设置，您的用户会话和其他加密数据将不安全。

该应用程序`.env`在本地计算机上有一个文件，但Laravel的`.gitignore`文件将其从Git中排除，因为将密码等敏感数据存储在Git存储库中并不是一个最佳实践，而且该应用程序在您的服务器上需要不同的设置。

另外该`.env`文件也包含数据库连接设置，这就是为什么我们禁用第一次部署的数据库迁移的原因。

#### 配置项目环境变量

使用下面的命令，从开发机器上以**部署者用户**身份登录到您的服务器：

```
ssh deployer@your_server_ip  -i ~/.ssh/deployerkey
```

在生产服务器上修改`.env`环境配置文件`vim /var/www/html/laravel-app/shared/.env`内容：

```
APP_NAME=laravel-app
APP_ENV=production
APP_KEY=base64:SXYMVQIW2hyl8lc+x0UZw5fxMNoEv0fPzhten9lBjUQ=
APP_DEBUG=false
APP_URL=http://example.com

LOG_CHANNEL=stack

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel_app
DB_USERNAME=laravel_user
DB_PASSWORD="MyNewPassword1!"

BROADCAST_DRIVER=log
CACHE_DRIVER=file
SESSION_DRIVER=file
SESSION_LIFETIME=120
QUEUE_DRIVER=sync

REDIS_HOST=127.0.0.1
REDIS_PASSWORD=null
REDIS_PORT=6379

MAIL_DRIVER=smtp
MAIL_HOST=smtp.mailtrap.io
MAIL_PORT=2525
MAIL_USERNAME=null
MAIL_PASSWORD=null
MAIL_ENCRYPTION=null

PUSHER_APP_ID=
PUSHER_APP_KEY=
PUSHER_APP_SECRET=
PUSHER_APP_CLUSTER=mt1

MIX_PUSHER_APP_KEY="${PUSHER_APP_KEY}"
MIX_PUSHER_APP_CLUSTER="${PUSHER_APP_CLUSTER}"
```

保存该文件并关闭编辑器。

现在取消注释`deploy.php`本地机器上文件中关于`before('deploy:symlink', 'artisan:migrate');`：
> 这个操作会导致数据库迁移在每个部署中自动运行。这样可以避免手动迁移数据库，但在部署之前不要忘记备份数据库。

要检查此配置是否正常，请再次部署该应用程序。在**本地开发机器**上运行以下命令：

```
dep deploy -vvv
```

现在，您的应用程序将正常工作。如果您访问服务器的域名（`http://example.com`），您将看到以下登录页面：

![](/assets/centos/deployerimg.png)

当配置完上面的配置之后，每次开发场景不需要如此复杂的操作。

> 有时候部署完成后访问域名会出现 **403 Forbidden** 的情况，此时，检查机器的SELinux是否禁用，如果没有禁用可能会导致文件无权访问。
> ```
> setenforce 0
> cp /etc/sysconfig/selinux /etc/sysconfig/selinux.bak`date +%F` && sed -i 's/SELINUX=enforcing/SELINUX=disabled/g' /etc/sysconfig/selinux
> ```

## 运行典型部署

在再次部署之前，通过修改应用程序开始。例如，您可以在`routes/web.php`文件中添加新的`about`路由：

```
<?php

. . .

Route::get('/', function () {
    return view('welcome');
});

Route::get('/about', function(){
    return 'About Page';
});
```

保存文件并提交这些更改：
```
git commit -am 'Your commit message.'
```

将更改推送到远程Git存储库

```
git push origin master
```

部署应用程序

```
dep deploy
```

## 结论
通过配置本地开发机器和生成环境服务器，以零宕机时间轻松部署Laravel应用程序。**部署者**还可以一次部署到更多服务器并创建任务; 例如，可以指定一个任务来在迁移之前备份数据库。如果想了解关于部署者功能的更多信息，可以在**部署者**[文档](https://deployer.org/docs/tasks)中找到更多信息。

## 参考链接

* [如何在Ubuntu 16.04上使用Deployer自动部署Laravel应用程序](https://www.digitalocean.com/community/tutorials/automatically-deploy-laravel-applications-deployer-ubuntu#conclusion)

* [又一篇 Deployer 的使用攻略](https://laravel-china.org/articles/13242/another-introduction-to-the-use-of-deployer)

* [deployer 实战经验分享](https://juejin.im/entry/5afd3dd051882542821c87d3)

* [少年，是时候换种更优雅的方式部署你的 php 代码了](https://juejin.im/entry/58fd79d961ff4b00666c2e95)
