# 如何将vue项目发布到github的pages

将开发好的vue前端项目部署到github的pages服务上，不仅方便而且节省了购买服务器的开支。

## Version

- Vue 2.5.22
- Vue CLI 3.1.3

## 初始化Vue项目

* 执行 `vue create vue-github-src` 命令。

* 选择 `Manually select features`，后回车。

* 使用空格反选掉`Linter / Formatter`，保持只选择 `Babel`后按回车。

* 选择 `In package.json`，后回车。

* 输入 `N`，后回车。

得到 `vue-github-src` 项目目录，进入到目录中。

## 开发

安装axios发送ajax请求，`yarn add axios -S`

- Index.vue

```vue

<template>
  <div>
    <ul>
      <li v-for="post in posts">
        {{ post.id }}: {{ post.title }}
      </li>
    </ul>

  </div>
</template>

<script>
import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/posts';

export default {
  name: 'Index',
  data() {
    return {
      posts: [],
    }
  },
  mounted() {
    axios.get(url)
        .then(res => this.posts = res.data.slice(0, 5));
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
```

一個最简单的 Vue，从 API Server 获取数据展示。

## 建立仓库

* 建立`vue-github-src`仓库存储源代码。

<img :src="$withBase('/images/languages/vue/how-to-deployment-vue-project-to-github-pages/github-create-new-repository.png')" alt="">

<img :src="$withBase('/images/languages/vue/how-to-deployment-vue-project-to-github-pages/github-create-new-repository-write-info.png')" alt="">

    - 输入 repository 名称：`vue-github-src`
    - 按 Create repository 建立新的 repository

* 按上面的步骤建立`vue-github`存放生成的静态文件。

## vue.config.js

```javascript
module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/vue-github/'
        : '/',
};
```

在 project 根目录下建立 `vue.config.js` 设置 `publicPath`。

因为刚刚建立了 vue-github repository，将来目录如 `https://curder.github.io/vue-github`，因此设置 `publicPath` 为 `/vue-github`。

## 提交变更

```bash
git remote add origin git@github.com:curder/vue-github-src.git

git push -u origin master
```

## 部署脚本

```bash
#!/usr/bin/env sh

# abort on errors
set -e

# build
yarn build

# navigate into the build output directory
cd dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:curder/vue-github.git master

cd -
```

执行 `deploy.sh` build project 并推送到 GitHub。

```bash
sh ./deploy.sh
```

<img :src="$withBase('/images/languages/vue/how-to-deployment-vue-project-to-github-pages/run-deployer-bash-push-code-to-github.png')" alt="">

## 设定 GitHub Repository

在 vue-github 仓库页面找到 Settings按钮，点击。

<img :src="$withBase('/images/languages/vue/how-to-deployment-vue-project-to-github-pages/github-repository-setting-01.png')" alt="">

跳转到GitHub Pages配置，选择 master branch 按下 Save。

<img :src="$withBase('/images/languages/vue/how-to-deployment-vue-project-to-github-pages/github-repository-setting-02.png')" alt="">

出现了可访问的网页地址，如果想支持HTTPS，勾选Enforce HTTPS。

<img :src="$withBase('/images/languages/vue/how-to-deployment-vue-project-to-github-pages/github-repository-setting-03.png')" alt="">

顺利将 Vue project 部署到 GitHub Pages 服务，如果无法访问，自行添加`index.html`。

<img :src="$withBase('/images/languages/vue/how-to-deployment-vue-project-to-github-pages/github-repository-setting-04.png')" alt="">

## 参考地址

- [如何將 Vue 發佈到 GitHub ?](https://oomusou.io/vue/deployment/github/)

- [使用travis-ci集成一个vue.js项目](https://yimogit.github.io/2017/07/24/%E4%BD%BF%E7%94%A8travis-ci%E8%87%AA%E5%8A%A8%E9%83%A8%E7%BD%B2github%E4%B8%8A%E7%9A%84%E9%A1%B9%E7%9B%AE/)
