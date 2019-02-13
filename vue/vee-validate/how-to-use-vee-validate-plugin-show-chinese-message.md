## 使用 vee-validate 显示简体中文错误提示

VeeValidate 插件默认使用的使用英文错误提示语言，但是它同样也支持中文的错误提示。

## 版本

- Vue 2.5.22
- vue-validate 2.1.7

## 编写 DemoForm.vue

```
<template>
  <div>
    <div>
      <input type="text" v-validate="{required: true, email: true}" data-vv-as="邮箱" name="email">
    </div>
    <div>
      <span>{{ errors.first('email') }}</span>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import VeeValidate, { Validator } from "vee-validate";
import zh_CN from 'vee-validate/dist/locale/zh_CN';
Vue.use(VeeValidate);
Validator.localize('zh_CN', zh_CN);
export default {
  name: "DemoForm"
};
</script>
```

- 通过`data-vv-as`指令标示当前字段的语言名称，比如`email`字段的简体中文名称是**邮箱**

- 除了 import 基本的 VeeValidate 外，还需要导入 Validator 用于配置语言

- 导入对应的语言文件，这里以简体中文为例是`zh_CN`

- 使用 `Validator.localize()` 设定为 `zh_TW`

## 验证

- 校验的中文错误提示
  ![](/assets/vue/vee-validate/vee-validate-localization.png)

## 参考地址

- [如何使用 VeeValidate 顯示中文訊息 ?](https://oomusou.io/vue/vee-validate/chinese-message/)
- [VeeValidate Docs](https://baianat.github.io/vee-validate/)
- [Localization](https://baianat.github.io/vee-validate/guide/localization.html)
