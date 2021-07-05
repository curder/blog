# 如何使用 vee-validate 自定义验证规则

VeeValidate 自带了很多有用的验证规则，但是在实际的开发生产环境中常常涉及到自定义一些验证规则。比如：默认的邮箱验证规则太松散，可以通过自定义验证规则达到目的。

## 版本

- Vue `2.5.22`
- vue-validate `2.1.7`

## 编写 DemoForm.vue

```vue

<template>
  <div>
    <div>
      <input type="text" v-validate="{required: true, customizeEmailRule: true}" data-vv-as="邮箱" name="email">
    </div>
    <div>
      <span>{{ errors.first('email') }}</span>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import VeeValidate, {Validator} from "vee-validate";
import zh_CN from 'vee-validate/dist/locale/zh_CN';

Vue.use(VeeValidate);
Validator.localize('zh_CN', zh_CN);

/** Custom Validator */
const getMessage = field => `${field}格式不正确`;

const validate = value => {
  const regex = /^\w+\.*\w+@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
  return regex.test(value);
};

const myValidator = {
  getMessage,
  validate,
};
/** Custom Rule */
Validator.extend('customizeEmailRule', myValidator);

export default {
  name: "DemoForm"
};
</script>
```

- 通过 data-vv-as 指令标示当前字段的语言名称，比如 email 字段的简体中文名称是邮箱

- 除了 import 基本的 VeeValidate 外，还需要导入 Validator 用于配置语言

- 导入对应的语言文件，这里以简体中文为例是 `zh_CN`

- 使用 `Validator.localize()` 设定为 `zh_CN`

- 定义一个自定义的 Validator，VeeValidate 规定 Validator 必须包含 `getMessage()` 和 `validate()` 两个方法

- 使用 `Validator.extend()`设置自定义的 rule 和 validator。 其中第一个第一个参数为 rule 名称，是 string；第二个参数是自定义的 validator，是 object

## 验证

- 邮箱地址不合法的自定义提示
  <img :src="$withBase('/images/languages/vue/vee-validate/how-to-use-vee-validate-to-customize-validation-rules/vee-validate-check-input-email-by-customize-rule.png')" alt="">

## 参考地址

- [如何使用 VeeValidate 設定自訂驗證規則 ?](https://oomusou.io/vue/vee-validate/custom-rule/)
- [VeeValidate Docs](https://baianat.github.io/vee-validate/)
- [Custom Rules](https://baianat.github.io/vee-validate/guide/custom-rules.html)
