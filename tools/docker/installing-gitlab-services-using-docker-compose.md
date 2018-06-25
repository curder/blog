## 使用Docker Compose方式安装Gitlab服务

[GitLab](https://about.gitlab.com/)是一个开源的Git服务软件，在开发中使用广泛。它有很丰富的功能（Git 版本管理、文件浏览、WIKI、Code Review、Issue 管理、Code Snippets、Web Hooks、CI、CD等）。

使用Docker的方式来安装服务端软件是挺方便的。但是Gitlab需要三个服务：`Gitlab`，`PostgreSQL`数据库和`Redis`缓存。

如果用命令行直接运行容器，需要三条命令，还要指定很多的配置项。我们借助[docker-compose](https://docs.docker.com/compose/)工具来一次运行多个容器。前期配置好相关的容器编排参数，只需要简单的命令行就可以完成Gitlab服务的安装和启动。

> 根据官方提示，服务器的配置之少是：2Core-CPU 4GB-RAM，并安装了[docker](https://yeasy.gitbooks.io/docker_practice/content/install/)和[docker-compose](https://yeasy.gitbooks.io/docker_practice/content/compose/install.html)

## 镜像

* 源代码仓库： https://github.com/sameersbn/docker-gitlab

> 包含三个镜像：[redis](https://registry.hub.docker.com/u/sameersbn/redis/), [postgresql](https://hub.docker.com/r/sameersbn/postgresql/), [gitlab](https://registry.hub.docker.com/u/sameersbn/gitlab/)

## Docker Compose Yam File

上面的三个镜像, 如果直接用Docker命令来运行的话，会需要三条命令。并且还要指定很多的参数来指定一些选项的值，比如数据库的用户名或密码。Docker提供了更方便的解决方案：Docker Compose，用一条命令就可以跑起多个容器，最适合这种运行多个容器共同组成一个服务的情景。

Docker Compose接受一个`docker-compose.yml`文件作为配置输入。yml文件指定了多个容器怎么启动，彼此之间怎么连接。下面是[sameersbn/gitlab](https://github.com/sameersbn/docker-gitlab)这个镜像所提供的Yml文件(https://raw.githubusercontent.com/sameersbn/docker-gitlab/master/docker-compose.yml).

可以使用`wget https://raw.githubusercontent.com/sameersbn/docker-gitlab/master/docker-compose.yml`将文件内容下载到本地。

下载完成之后，在文件中，我们可以看到 GitLab 的很多配置都已经参数化了，包数据卷的配置、服务的端口、备份时机和邮件配置等。

这里由于使用的MacOSX系统，所以我将其下载下来并将文件内容进行了适当的修改，主要是针对`volumn`相关的映射路径存储至如下路径。

```
/Users/xiaoluo/Codes/Docker/gitlab/
```

修改后的完整代码可以[参考这里](https://gist.github.com/curder/0b8a10a827a4f6236bccfddb0d8d5c46)。

主要修改如下文件内容
```
- /Users/xiaoluo/Codes/Docker/gitlab/redis:/var/lib/redis:Z
- /Users/xiaoluo/Codes/Docker/gitlab/postgresql:/var/lib/postgresql:Z
- /Users/xiaoluo/Codes/Docker/gitlab/gitlab:/home/git/data:Z

- TZ=Asia/Shanghai
- GITLAB_TIMEZONE=Beijing
```

## 启动GitLab

修改完 `docker-compose.yml`，接下来可以利用如下命令来启动 GitLab 了。

> 如果当前网速拉取国外站点镜像缓慢，建议启动之前可以[参考这里](https://yeasy.gitbooks.io/docker_practice/install/mirror.html)修改docker镜像加速器。

```
docker-compose up
```

上面的这行命令，首先会下载相关的镜像，然后依次创建并启动容器。如果不能后台运行docker，可以加上` -d`参数。如下图所示：

![](/assets/docker/docker-compose-gitlab-image.png)

当启动完成之后，我们就可以在浏览器中输入`http://localhost:10080`，如果能正确打开，那么说明 GitLab 创建启动成功。如下图所示：

![](/assets/docker/docker-compose-gitlab-image-502-error.png)

第一次进入gitlab需要输入root的初始密码，**密码需要保持在8位数以上**。

![](/assets/docker/docker-compose-gitlab-image-need-reset-password.png)

## 相关命令

### 启动GitLab
```
docker-compose up
```

### 停止 GitLab

```
docker-compose stop
```

### 备份 GitLab

```
docker-compose run gitlab app:rake gitlab:backup:create
```

### 从备份中还原

```
docker-compose run --rm gitlab app:rake gitlab:backup:restore BACKUP=1529921023_2018_06_25_11.0.0
```
> 在上面的命令中，`1529921023_2018_06_25_11.0.0` 为备份文件的时间戳前缀，该文件位于 gitlab 的 `backups` 目录中。
> 更多备份和还原相关操作[参见文档](https://github.com/sameersbn/docker-gitlab/blob/master/README.md#restoring-backups)。

## 参考链接

* [用Docker Compose方式安装Gitlab服务](http://wuyijun.cn/yong-dockerfang-shi-an-zhuang-gitlabfu-wu/)

* [在 Docker 中使用 GitLab](http://beyondvincent.com/2016/09/19/2016-09-17-use-gitlab-with-docker/)
