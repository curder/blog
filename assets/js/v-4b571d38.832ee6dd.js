(self.webpackChunkblog=self.webpackChunkblog||[]).push([[7262],{1960:(e,o,r)=>{"use strict";r.r(o),r.d(o,{data:()=>l});const l={key:"v-4b571d38",path:"/tools/phpstorm/configuration-themes-and-colors.html",title:"PhpStorm配置主题和颜色",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"配置主题",slug:"配置主题",children:[{level:3,title:"通过Plugins安装主题",slug:"通过plugins安装主题",children:[]},{level:3,title:"通过导入主题配置",slug:"通过导入主题配置",children:[]},{level:3,title:"通过编辑器默认主题配置",slug:"通过编辑器默认主题配置",children:[]}]},{level:2,title:"修改 Project 栏的颜色",slug:"修改-project-栏的颜色",children:[]},{level:2,title:"修改字体",slug:"修改字体",children:[{level:3,title:"修改默认字体",slug:"修改默认字体",children:[]},{level:3,title:"修改主题配置字体",slug:"修改主题配置字体",children:[]},{level:3,title:"推荐几个常用的编辑字体",slug:"推荐几个常用的编辑字体",children:[]}]}],filePathRelative:"tools/phpstorm/configuration-themes-and-colors.md",git:{updatedTime:1625565406e3,contributors:[]}}},522:(e,o,r)=>{"use strict";r.r(o),r.d(o,{default:()=>z});var l=r(6252);const t=(0,l.uE)('<h1 id="phpstorm配置主题和颜色" tabindex="-1"><a class="header-anchor" href="#phpstorm配置主题和颜色" aria-hidden="true">#</a> PhpStorm配置主题和颜色</h1><h2 id="配置主题" tabindex="-1"><a class="header-anchor" href="#配置主题" aria-hidden="true">#</a> 配置主题</h2><p>通过三种不同的方式配置主题，它们的关系不是孤立的，比如通过互联网导入的主题配置也不如意，那么可以根据个人需求进行再次配置，站在巨人的肩膀上，感谢开源。</p><ol><li>直接通过Plugins安装主题(推荐)</li><li>通过导入互联网上的主题</li><li>通过修改系统自带的主题</li></ol><blockquote><p>切换主题可以使用快捷键<strong>Ctrl + `</strong>，然后选择<code>Color Scheme</code>回车，切换自己喜欢的主题回车确认。</p></blockquote><h3 id="通过plugins安装主题" tabindex="-1"><a class="header-anchor" href="#通过plugins安装主题" aria-hidden="true">#</a> 通过Plugins安装主题</h3><p>这里以安装<code>Material Theme UI</code>为例记录安装步骤。</p><ol><li>使用快捷键<code>Command + Shift + a</code>后输入<code>Plugins</code>后回车</li><li>输入<code>Material Theme UI</code>进行搜索</li><li>如果没找到，点击<code>Serach in repository</code>进入官方仓库</li><li>点击<code>Install</code>完成安装</li><li>重启PhpStorm</li></ol><h3 id="通过导入主题配置" tabindex="-1"><a class="header-anchor" href="#通过导入主题配置" aria-hidden="true">#</a> 通过导入主题配置</h3>',9),a=(0,l.Uk)("更多主题可以"),n={href:"https://github.com/daylerees/colour-schemes",target:"_blank",rel:"noopener noreferrer"},d=(0,l.Uk)("参考这里"),c=(0,l.Uk)("，这里以里面的"),i={href:"https://raw.githubusercontent.com/daylerees/colour-schemes/master/jetbrains/earthsong.icls",target:"_blank",rel:"noopener noreferrer"},h=(0,l.Uk)("earthsong"),s=(0,l.Uk)("为例。"),p=(0,l.uE)('<ol><li><p>使用命令<code>Command + Shift + a</code>-&gt; 输入<code>Terminal</code>回车，进入到PhpStorm自带的Terminal命令行。</p></li><li><p>使用命令<code>cd ~/Library/Preferences/PhpStorm2018.1/colors</code>进入到主题配置目录。</p></li><li><p>使用<code>wget</code>命令下载<code>earthsong</code> 主题配置，<code>wget https://raw.githubusercontent.com/daylerees/colour-schemes/master/jetbrains/earthsong.icls</code></p></li><li><p>重启PhpStorm</p></li><li><p>切换主题可以使用快捷键<strong>Ctrl + `</strong>，然后选择<code>Color Scheme</code>回车，切换到<code>earthsong</code>回车确认。</p></li></ol><h3 id="通过编辑器默认主题配置" tabindex="-1"><a class="header-anchor" href="#通过编辑器默认主题配置" aria-hidden="true">#</a> 通过编辑器默认主题配置</h3><p>演示以主题<code>Twilight</code>为例。</p><p>按住快捷键<code>Command + Shift + a</code> 输入<code>Color Scheme</code>如下图。</p>',4),m=(0,l.uE)('<p>回车进入配置界面选择<code>Twilight</code>保存查看效果。</p><h2 id="修改-project-栏的颜色" tabindex="-1"><a class="header-anchor" href="#修改-project-栏的颜色" aria-hidden="true">#</a> 修改 Project 栏的颜色</h2><p>修改编辑器主题后，左边的 <code>Project</code> 栏的颜色跟编辑器主编辑区不一致，可以使用 <code>Color Ide</code>插件来实现一致的主题。</p><p>打开 <code>Preferences</code>，选择 <code>Plugins</code>，打开 <code>Browse repositories</code>； 搜索 <code>Color ide</code> 插件，安装； 重启 <code>PhpStorm</code>，这样 <code>Project</code> 栏和 <code>Editor</code> 的主题颜色已经一致。</p><h2 id="修改字体" tabindex="-1"><a class="header-anchor" href="#修改字体" aria-hidden="true">#</a> 修改字体</h2><h3 id="修改默认字体" tabindex="-1"><a class="header-anchor" href="#修改默认字体" aria-hidden="true">#</a> 修改默认字体</h3><p>使用快捷键<code>Command + ,</code>进入配置中找到<code>Editor</code>-&gt;<code>Font</code>，修改右侧的<code>Font</code>、<code>Size</code>、<code>Line Spacing</code>,在配置的下方会有实时预览，可以参照预览自行配置适当的文字样式。</p>',7),u=(0,l.Wm)("h3",{id:"修改主题配置字体",tabindex:"-1"},[(0,l.Wm)("a",{class:"header-anchor",href:"#修改主题配置字体","aria-hidden":"true"},"#"),(0,l.Uk)(" 修改主题配置字体")],-1),g=(0,l.Wm)("blockquote",null,[(0,l.Wm)("p",null,[(0,l.Wm)("strong",null,"注意："),(0,l.Uk)(" 如果要使主题的配置高于系统默认的配置，需要首先将默认的主题重命名一下再进行配置，这样才能使配置生效。")])],-1),f=(0,l.Wm)("p",null,[(0,l.Uk)("如果主题有配置专门的字体，默认它的优先级要高于默认字体的优先级，如果想要修改主题的字体配置可以在"),(0,l.Wm)("code",null,"Color Scheme Font"),(0,l.Uk)("中进行配置。")],-1),b=(0,l.Wm)("h3",{id:"推荐几个常用的编辑字体",tabindex:"-1"},[(0,l.Wm)("a",{class:"header-anchor",href:"#推荐几个常用的编辑字体","aria-hidden":"true"},"#"),(0,l.Uk)(" 推荐几个常用的编辑字体")],-1),k={href:"https://fonts.google.com/specimen/Roboto+Mono",target:"_blank",rel:"noopener noreferrer"},W=(0,l.Uk)("Roboto Mono"),U=(0,l.Uk)("，"),C={href:"https://www.wfonts.com/font/roboto-mono",target:"_blank",rel:"noopener noreferrer"},P=(0,l.Uk)("下载地址"),S={href:"https://github.com/tonsky/FiraCode",target:"_blank",rel:"noopener noreferrer"},w=(0,l.Uk)("Fira Code"),v=(0,l.Uk)("，"),x={href:"https://github.com/tonsky/FiraCode/releases/download/1.205/FiraCode_1.205.zip",target:"_blank",rel:"noopener noreferrer"},j=(0,l.Uk)("下载地址"),y={href:"https://github.com/adobe-fonts/source-code-pro",target:"_blank",rel:"noopener noreferrer"},_=(0,l.Uk)("Source Code Pro"),F=(0,l.Uk)("，"),T={href:"https://github.com/adobe-fonts/source-code-pro/releases/tag/variable-fonts",target:"_blank",rel:"noopener noreferrer"},E=(0,l.Uk)("下载地址"),M=(0,l.Wm)("li",null,[(0,l.Wm)("p",null,"Operator Mono (收费)")],-1),z={render:function(e,o){const r=(0,l.up)("OutboundLink");return(0,l.wg)(),(0,l.j4)(l.HY,null,[t,(0,l.Wm)("p",null,[a,(0,l.Wm)("a",n,[d,(0,l.Wm)(r)]),c,(0,l.Wm)("a",i,[h,(0,l.Wm)(r)]),s]),p,(0,l.Wm)("img",{src:e.$withBase("/images/tools/phpstorm/phpstorm-change-color-scheme.png"),alt:""},null,8,["src"]),m,(0,l.Wm)("img",{src:e.$withBase("/images/tools/phpstorm/phpstorm-modify-font-size-and-font-face.png"),alt:""},null,8,["src"]),u,g,f,b,(0,l.Wm)("ul",null,[(0,l.Wm)("li",null,[(0,l.Wm)("p",null,[(0,l.Wm)("a",k,[W,(0,l.Wm)(r)]),U,(0,l.Wm)("a",C,[P,(0,l.Wm)(r)])])]),(0,l.Wm)("li",null,[(0,l.Wm)("p",null,[(0,l.Wm)("a",S,[w,(0,l.Wm)(r)]),v,(0,l.Wm)("a",x,[j,(0,l.Wm)(r)])])]),(0,l.Wm)("li",null,[(0,l.Wm)("p",null,[(0,l.Wm)("a",y,[_,(0,l.Wm)(r)]),F,(0,l.Wm)("a",T,[E,(0,l.Wm)(r)])])]),M])],64)}}}}]);