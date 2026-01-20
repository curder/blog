# 在 Vue 中使用 vee-validate

在使用 vue 开发项目时，处理业务逻辑中常常碰到需要验证表单的情况，而 vue 自身对表单的处理没有太多的介入，可以借助 VeeValidate 来处理。

这里简单介绍一下 VeeValidate 的安装和使用。

## 版本

- Vue `2.5.22`
- vue-validate `2.1.7`

## 安装

```bash
yarn add vee-validate
```

使用上面的命令安装完后可以在`package.json`中看到对应的`vee-validate`。

```json
{
  "name": "vee-validate",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build"
  },
  "dependencies": {
    "vee-validate": "^2.1.7",
    "vue": "^2.5.22"
  },
  "devDependencies": {
    "@vue/cli-plugin-babel": "^3.4.0",
    "@vue/cli-service": "^3.4.0",
    "vue-template-compiler": "^2.5.21"
  },
  "postcss": {
    "plugins": {
      "autoprefixer": {}
    }
  },
  "browserslist": ["> 1%", "last 2 versions", "not ie <= 8"]
}
```

## 编写 DemoForm.vue

```vue
<template>
  <div>
    <div>
      <input
        type="text"
        v-validate="{ required: true, email: true }"
        name="email"
      />
    </div>
    <div>
      <span>{{ errors.first("email") }}</span>
    </div>
  </div>
</template>
<script>
import Vue from "vue"; // 引入 vue
import VeeValidate from "vee-validate"; // 引入 vee-validate
Vue.use(VeeValidate); // 将vee-validate传入vue

export default {
  name: "DemoForm",
};
</script>
```

- 在 input 表单中添加`v-validate`指令。以管道的形式进行数据验证，其中 `required:true` 表示字段必须填写，而 `email:true` 表示所输入的内容必须为邮箱。

- 通过 `errors.first()` 获取第一个错误提示。

## 验证

- 验证必须填写

  ![](./images/how-to-install-vee-validate-plugin/vee-validate-check-input-required-rule.png)

- 邮箱格式必须填写正确

  ![](./images/how-to-install-vee-validate-plugin/vee-validate-check-input-email-rule.png)

## 参考地址

- [如何設定 VeeValidate ?](https://oomusou.io/vue/vee-validate/basic/)
- [VeeValidate Docs](https://baianat.github.io/vee-validate/)
- [VeeValidate Get Started](https://baianat.github.io/vee-validate/guide/getting-started.html)
