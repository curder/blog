import{_ as t,p as s,q as n,R as e,t as l}from"./framework-ff09ffed.js";const a={},i=e("h1",{id:"元素状态改变的监控方法",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#元素状态改变的监控方法","aria-hidden":"true"},"#"),l(" 元素状态改变的监控方法")],-1),r=e("p",null,"Chrome Google Developer Tools可以监听元素子元素的添加、删除和修改；也可以监听元素属性的变化和元素移除的状态变化。",-1),c=["src"],_=e("p",null,"可以看到在面板中有对应的选项。",-1),d=e("p",null,"选项一：监听当前元素的子元素的添加、删除和修改的状态，常用于子元素的状态变化的监控上。",-1),h=e("p",null,"选项二：监听当前元素属性的变化，比如一个轮播图常常会修改当前元素的一个定位或者位置属性我们可以用它来监听。",-1),g=e("p",null,"选项三：监听当前元素的移除变化，当某个特殊阶段触发了元素的移除可以通过它进行监听。",-1),u=e("p",null,"以上元素状态的监听都会触发developer tools的debug面板，看到清晰的调用栈等信息。",-1),m=["src"];function p(o,f){return s(),n("div",null,[i,r,e("img",{src:o.$withBase("/images/tools/google-developer-tools/monitoring-of-element-status-changes-menu.png"),alt:""},null,8,c),_,d,h,g,u,e("img",{src:o.$withBase("/images/tools/google-developer-tools/monitoring-of-element-status-changes-debug.png"),alt:""},null,8,m)])}const B=t(a,[["render",p],["__file","monitoring-of-element-status-changes.html.vue"]]);export{B as default};