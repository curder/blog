import{_ as t,p as r,q as l,R as e,t as o}from"./framework-96b046e1.js";const c={},n=e("h1",{id:"如何让浏览器阻止请求某些资源",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#如何让浏览器阻止请求某些资源","aria-hidden":"true"},"#"),o(" 如何让浏览器阻止请求某些资源")],-1),a=e("p",null,'在一些开发场景下可能需要模拟一些静态资源不存在的情况，可以使用调试工具的"Request blocking"进行模拟。',-1),i=e("p",null,[o("如下图打开"),e("code",null,"Request blocking"),o("的添加界面（或者使用"),e("code",null,"Command Shift P"),o("在提示框中输入"),e("code",null,"Request blocking"),o("）")],-1),u=["src"],d=e("p",null,[o("比如这里为了测试不允许所有的CSS的请求，那么可以写入"),e("code",null,"*.css")],-1),_=["src"],h=e("p",null,"添加完正则匹配的规则后可以刷新页面查看效果。",-1);function m(s,p){return r(),l("div",null,[n,a,i,e("img",{src:s.$withBase("/images/tools/google-developer-tools/how-to-make-browsers-block-requests-for-certain-resources-menu-path.png"),alt:""},null,8,u),d,e("img",{src:s.$withBase("/images/tools/google-developer-tools/how-to-make-browsers-block-requests-for-certain-resources-add-rule.png"),alt:""},null,8,_),h])}const k=t(c,[["render",m],["__file","how-to-make-browsers-block-requests-for-certain-resources.html.vue"]]);export{k as default};
