(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9173],{9114:(e,l,o)=>{"use strict";o.r(l),o.d(l,{data:()=>t});const t={key:"v-008f161d",path:"/tools/google-developer-tools/edit-source-files-and-sync-to-local-files.html",title:"编辑源文件并同步到本地文件中",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"通过调试工具的文件系统实时修改源代码",slug:"通过调试工具的文件系统实时修改源代码",children:[]}],filePathRelative:"tools/google-developer-tools/edit-source-files-and-sync-to-local-files.md",git:{updatedTime:1625565406e3,contributors:[]}}},6283:(e,l,o)=>{"use strict";o.r(l),o.d(l,{default:()=>h});var t=o(6252);const s=(0,t.Wm)("h1",{id:"编辑源文件并同步到本地文件中",tabindex:"-1"},[(0,t.Wm)("a",{class:"header-anchor",href:"#编辑源文件并同步到本地文件中","aria-hidden":"true"},"#"),(0,t.Uk)(" 编辑源文件并同步到本地文件中")],-1),r=(0,t.Wm)("p",null,"在实际的开发中常常会有这样一个需求，就是对一些专题页面的CSS样式或者JS进行微调。",-1),a=(0,t.Wm)("p",null,"那么解决方案常常是在浏览器或者代码编辑器中调整。通过浏览器方式调整，能很快的得到所见即所得的效果，但是需要将调整好的代码拷贝到本地，然而微调的代码只有一两处还好，如果太多，则会很浪费时间，实际上在开发初期我们也常常是这么做的。",-1),n=(0,t.Wm)("p",null,"另一种方式是通过在编辑器中修改，如果只有一个屏幕来回的切换屏幕在源代码和浏览器效果查看时也会很影响开发的效率。",-1),d=(0,t.Wm)("p",null,"那么这种情况可以通过使用 GoogleDeveloperTools 的Filesystem来解决。",-1),i=(0,t.Wm)("h2",{id:"通过调试工具的文件系统实时修改源代码",tabindex:"-1"},[(0,t.Wm)("a",{class:"header-anchor",href:"#通过调试工具的文件系统实时修改源代码","aria-hidden":"true"},"#"),(0,t.Uk)(" 通过调试工具的文件系统实时修改源代码")],-1),u=(0,t.Wm)("p",null,'菜单路径在GoogleDeveloperTools的->"Sources"->"Filesystem"->点击"Add folder to workspace"添加新的工作区。',-1),c=(0,t.Wm)("blockquote",null,[(0,t.Wm)("p",null,[(0,t.Uk)("当选择完正确的路径之后，可能会需要允许一下文件权限，点击"),(0,t.Wm)("code",null,"Allow"),(0,t.Uk)("。")])],-1),m=(0,t.Wm)("p",null,"此时只需要修改CSS文件在页面上会看到实时的更改效果，如果我们在面板中保存文件也会同步到本地的文件系统上。",-1),p=(0,t.Wm)("p",null,"如果是JS或HTML文件的话，目前页面不会自动重载，但如果在面板上保存的话依然会保存到本地文件系统，建议是不是可以通过一些监听JS文件的工具来弥补这个问题。",-1),h={render:function(e,l){return(0,t.wg)(),(0,t.j4)(t.HY,null,[s,r,a,n,d,i,u,(0,t.Wm)("img",{src:e.$withBase("/images/tools/google-developer-tools/edit-source-files-and-sync-to-local-files-path.png"),alt:""},null,8,["src"]),c,m,p],64)}}}}]);