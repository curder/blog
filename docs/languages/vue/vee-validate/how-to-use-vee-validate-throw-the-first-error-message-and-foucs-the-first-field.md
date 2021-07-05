# 获取第一个错误信息并自动焦点到该表单字段

在实际开发中的错误信息并不仅仅只是显示错误信息，常常需要获取错误信息提示弹出提示，还需要将光标焦点聚焦到第一个错误表单字段上，VeeValidate 默认并不支持这个操作，可以通过一些小技巧完成。

## 版本

- Vue `2.5.22`
- vue-validate `2.1.7`

## 编写 DemoForm.vue

```vue

<template>
  <div>
    <div>
      <input type="text" v-model="email" v-validate="'required|email'" data-vv-validate-on="change|blur" data-
             name="email">
    </div>
    <div>
      <span>{{ errors.first('email') }}</span>
    </div>
    <div>
      <button @click="submitHandle">Submit</button>
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
      email: '',
    }
  },
  methods: {
    submitHandle() {
      const hasError = this.errors.items.length;
      const showFirstErrorMessage = () => alert(this.errors.items[0].msg); // 展示第一个错误信息
      const name = hasError ? this.errors.items[0].field : '';
      const setFocusOnErrorComponent = () => this.$root.$el.querySelector(`[name=${name}]`).focus(); // 光标聚焦在第一个错误的字段

      if (hasError) {
        showFirstErrorMessage();
        setFocusOnErrorComponent();
        return;
      }
      alert('no error');
    }
  }
};
</script>
```

- VeeValidate 的错误对象在 Vue 实例下，而所有错误信息都在 items 数组下，可以使用判断数组的 length 作来判断是否存在错误

- 如果存在错误，那么第一个错误信息放在 items[0].msg 属性

- 后面再通过获取到第一个错误的字段名称，利用 `this.$root.$el` 的 `querySelect()` 获取到该字段，然后调用 `focus()`方法

- 若有任何 VeeValidate 验证不通过，使用 `alert()` 弹出错误消息，并将光标焦点聚焦到输入框上

## 参考地址

- [如何將 Focus 自動跳到 VeeValidate 驗證錯誤欄位 ?](https://oomusou.io/vue/vee-validate/focus/)
- [VeeValidate Docs](https://baianat.github.io/vee-validate/)
