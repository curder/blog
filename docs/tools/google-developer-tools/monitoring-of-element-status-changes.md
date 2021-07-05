# 元素状态改变的监控方法

Chrome Google Developer Tools可以监听元素子元素的添加、删除和修改；也可以监听元素属性的变化和元素移除的状态变化。

<img :src="$withBase('/images/tools/google-developer-tools/monitoring-of-element-status-changes-menu.png')" alt="">

可以看到在面板中有对应的选项。

选项一：监听当前元素的子元素的添加、删除和修改的状态，常用于子元素的状态变化的监控上。

选项二：监听当前元素属性的变化，比如一个轮播图常常会修改当前元素的一个定位或者位置属性我们可以用它来监听。

选项三：监听当前元素的移除变化，当某个特殊阶段触发了元素的移除可以通过它进行监听。

以上元素状态的监听都会触发developer tools的debug面板，看到清晰的调用栈等信息。

<img :src="$withBase('/images/tools/google-developer-tools/monitoring-of-element-status-changes-debug.png')" alt="">
