# VeeValidate 光标离开输入框焦点就验证

一个很常见的需求就是当用户的光标离开输入框的时候就启用验证规则进行验证，默认的配置并不支持，需要自行配置。

## 版本

- Vue 2.5.22
- vue-validate 2.1.7

## 编写 DemoForm.vue

### 全局配置

```
<template>
  <div>
    <div>
      <input type="text" v-validate="'required|email'" name="email">
    </div>
    <div>
      <span>{{ errors.first('email') }}</span>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import VeeValidate from "vee-validate";
Vue.use(VeeValidate, {
    events: 'input|blur',
});
export default {
  name: "DemoForm",
};
</script>
```

- 在 `Vue.use()`的第二个参数传入`events: 'input|blur'`即可。

### 针对某个单独字段配置

```
<template>
  <div>
    <div>
      <input type="text" v-validate="'required|email'" data-vv-validate-on="change|blur" name="email">
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
};
</script>
```

- 在对应的表单字段使用`data-vv-validate-on`使用对应的事件即可，[更多配置可以查看这里](https://baianat.github.io/vee-validate/configuration.html)。

## 参考地址

- [VeeValidate 之如何滑鼠移開就啟動驗證 ?](https://oomusou.io/vue/vee-validate/input-blur/)
- [VeeValidate Docs](https://baianat.github.io/vee-validate/)
- [Configuration](https://baianat.github.io/vee-validate/configuration.html)
