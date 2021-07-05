# 使用 vee-validate 时使用数据绑定

VeeValidate 能搭配数据绑定一起运行吗？比如一些场景下需要动态确定一些规则是否需要生效，这个时候可以使用动态数据绑定来完成这类需求。

## 版本

- Vue 2.5.22
- vue-validate 2.1.7

## 编写 DemoForm.vue

### 数据绑定到字符串

```
<template>
  <div>
    <div>
      <input type="text" v-validate="rules" name="email">
    </div>
    <div>
      <span>{{ errors.first('email') }}</span>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import VeeValidate from "vee-validate";
Vue.use(VeeValidate);
export default {
  name: "DemoForm",
    data() {
        return {
            rules: 'required|email',
        }
    },
};
</script>
```

- 将自定义的规则放到 data 内
- 将 VeeValidate 的 v-validate 指令绑定到 data 的 rules

### 数据绑定到对象

```
<template>
  <div>
    <div>
      <input type="text" v-validate="rules" name="email">
    </div>
    <div>
      <span>{{ errors.first('email') }}</span>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import VeeValidate from "vee-validate";
Vue.use(VeeValidate);
export default {
  name: "DemoForm",
    data() {
        return {
            rules: {
                required: true,
                email: true,
            },
        }
    },
};
</script>
```

- rules 改用 object，每个 VeeValidate 的 rule 为 key，若值为 true 则表示使用对应的规则，若为 false 則不使用规则。

> string 或 object 写法都是 VeeValidate 合法方式，若要动态切换规则，使用 object 会方便些

## 参考地址

- [VeeValidate 與 Data Binding](https://oomusou.io/vue/vee-validate/data-binding/)
- [VeeValidate Docs](https://baianat.github.io/vee-validate/)
- [Syntax](https://baianat.github.io/vee-validate/guide/syntax.html)
