# 使用 mixins 重构代码

混入 (mixins) 是一种分发 Vue 组件中可复用功能的非常灵活的方式。混入对象可以包含任意组件选项。

当组件使用混入对象时，所有混入对象的选项将被混入该组件本身的选项。

## 实例

在开发中常见的模态弹出层和鼠标悬浮提示层中的状态切换，它们的表现形式不同，但基本的逻辑不一样。比如：没有使用 mixins 之前，会这样编写

### 未使用 mixins

- `ToggleModal.vue`

```vue
<template>
  <div>
    <button @click="toggleShowStatus">Toggle</button>
    <span class="bg-yellow" v-if="show">toggle-modal</span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  methods: {
    toggleShowStatus() {
      this.show = !this.show;
    },
  },
};
</script>
<style scoped>
.bg-yellow {
  background-color: yellow;
}
</style>
```

- `ToggleTooltip.vue`

```vue
<template>
  <div>
    <button @click="toggleShowStatus">Toggle</button>
    <span class="bg-red" v-if="show">toggle-tooltip</span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  methods: {
    toggleShowStatus() {
      this.show = !this.show;
    },
  },
};
</script>
<style scoped>
.bg-red {
  background-color: red;
}
</style>
```

### 使用 mixins 重写

使用 mixins 将公共的属性和逻辑提取出来。然后在需要使用的组件中使用 mixins 语法混入。

- `toggle.js`

```javascript
const toggle = {
  data() {
    return {
      show: false,
    };
  },
  methods: {
    toggleShowStatus() {
      this.show = !this.show;
    },
  },
};
export default toggle;
```

- `ToggleModal.vue`

```vue
<template>
  <div>
    <button @click="toggleShowStatus">Toggle</button>
    <span class="bg-yellow" v-if="show">toggle-modal</span>
  </div>
</template>
<script>
import toggle from "../mixins/toggle.js";

export default {
  mixins: [toggle],
};
</script>
<style scoped>
.bg-yellow {
  background-color: yellow;
}
</style>
```

- `ToggleTooltip.vue`

```vue
<template>
  <div>
    <button @click="toggleShowStatus">Toggle</button>
    <span class="bg-red" v-if="show">toggle-tooltip</span>
  </div>
</template>
<script>
import toggle from "../mixins/toggle.js";

export default {
  mixins: [toggle],
};
</script>
<style scoped>
.bg-red {
  background-color: red;
}
</style>
```

![](./images/refactoring-code-with-mixins/vue-toggle-mixins.gif)

## 一些常见的混入

当组件和混入对象含有同名选项时，这些选项将以恰当的方式混合。

比如，数据对象在内部会进行递归合并，在和组件的数据发生冲突时以组件数据优先。

```vue
<template>
  <div>
    <button @click="toggleShowStatus">Toggle</button>
    <span class="bg-yellow" v-if="show">toggle-modal</span>
  </div>
</template>
<script>
import toggle from "../mixins/toggle.js";

export default {
  mixins: [toggle],
  data() {
    return {
      show: true,
      foo: "bar",
    };
  },
  created() {
    console.log(this.$data); // {foo: "bar", show: true}
  },
};
</script>
<style scope>
.bg-yellow {
  background-color: yellow;
}
</style>
```

> 可以看到，组件的属性`show`覆盖了 mixins 内定义的默认值。

另外，混入的 vue 函数周期包括`beforeCreate`，`created`，`beforeMount`，`mounted`，`beforeUpdate`，`updated`，`beforeDestroy`，`destroy`都将在组件调用之前先调用。

值为对象的选项，例如 `methods`, `components` 和 `directives`，将被混合为同一个对象。两个对象键名冲突时，取组件对象的键值对。

## 参考地址

- [mixins 官方文档](https://cn.vuejs.org/v2/guide/mixins.html)
