"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1121],{3914:(e,t,l)=>{l.r(t),l.d(t,{data:()=>n});const n={key:"v-5d51c920",path:"/languages/wordpress/create_theme.html",title:"主题剖析",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"主题样式表",slug:"主题样式表",children:[]},{level:2,title:"函数文件",slug:"函数文件",children:[]},{level:2,title:"模板文件",slug:"模板文件",children:[{level:3,title:"模板文件列表",slug:"模板文件列表",children:[]},{level:3,title:"基本模板",slug:"基本模板",children:[]},{level:3,title:"自定义页面模板",slug:"自定义页面模板",children:[]},{level:3,title:"基于查询的模板文件",slug:"基于查询的模板文件",children:[]},{level:3,title:"包含模板文件",slug:"包含模板文件",children:[]},{level:3,title:"引用模板中的文件",slug:"引用模板中的文件",children:[]},{level:3,title:"插件 API",slug:"插件-api",children:[]},{level:3,title:"不可靠的数据",slug:"不可靠的数据",children:[]}]}],filePathRelative:"languages/wordpress/create_theme.md",git:{updatedTime:1639727806e3,contributors:[{name:"curder",email:"q.curder@gmail.com",commits:1}]}}},8310:(e,t,l)=>{l.r(t),l.d(t,{default:()=>q});var n=l(6252);const a=(0,n.uE)('<h1 id="主题剖析" tabindex="-1"><a class="header-anchor" href="#主题剖析" aria-hidden="true">#</a> 主题剖析</h1><p>WordPress 主题目录位于<code>wp-content/themes/</code>下。</p><p>WordPress 主题除了图片和JavaScript，经常由三种文件构成。</p><ol><li>样式表文件 <code>style.css</code>， 控制着页面的外观</li><li>函数文件 (<code>functions.php</code>)。</li><li>模板文件，它控制着从数据库中调出的数据所呈现的外观。</li></ol><h2 id="主题样式表" tabindex="-1"><a class="header-anchor" href="#主题样式表" aria-hidden="true">#</a> 主题样式表</h2><p>CSS文件不仅定义了你的主题样式，<code>style.css</code> 必须 以注释的形式列出主题的详细信息。两个不同的主题是不允许拥有相同的表述的 ， 因为这样会导致主题选择出错.如果你通过拷贝一个你已经制作的主题来制作你新的主题，请确保先更改这些头部注释.</p><p>下面是样式表头部注释的例子，被称作样式表头注释。比如主题&quot;Twenty Thirteen&quot;:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/*\nTheme Name: Twenty Thirteen\nTheme URI: http://wordpress.org/themes/twentythirteen\nAuthor: the WordPress team\nAuthor URI: http://wordpress.org/\nDescription: The 2013 theme for WordPress takes us back to the blog, featuring a full range of post formats, each displayed beautifully in their own unique way. Design details abound, starting with a vibrant color scheme and matching header images, beautiful typography and icons, and a flexible layout that looks great on any device, big or small.\nVersion: 1.0\nLicense: GNU General Public License v2 or later\nLicense URI: http://www.gnu.org/licenses/gpl-2.0.html\nTags: black, brown, orange, tan, white, yellow, light, one-column, two-columns, right-sidebar, flexible-width, custom-header, custom-menu, editor-style, featured-images, microformats, post-formats, rtl-language-support, sticky-post, translation-ready\nText Domain: twentythirteen\n\nThis theme, like WordPress, is licensed under the GPL.\nUse it to make something cool, have fun, and share what you&#39;ve learned with others.\n*/\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p><em>提醒：主题作者的名字建议与该作者在 <em><a href="wordpress.org"><em>wordpress.org</em></a></em> 上注册的用户名一致，当然填写作者的真实姓名也没有问题。</em></p><h2 id="函数文件" tabindex="-1"><a class="header-anchor" href="#函数文件" aria-hidden="true">#</a> 函数文件</h2><p>一个主题可以使用一个函数文件，位于主题的子目录，叫做 <code>functions.php</code>。</p><p>这个文件就像一个插件，如果它位于你正在使用的主题里的话，他在你的主题初始化的时候就会自动加载(后台页面和前台页面都一样加载)。</p><ul><li>启用主题功能，例如：侧边栏，菜单，文章缩略图，文章格式，自定义标题栏。</li><li>定义用于模板文件中的函数。</li><li>设置一个选项菜单，让网站拥有者可以自定义颜色，样式，和你的主题的其他特性。</li></ul><h2 id="模板文件" tabindex="-1"><a class="header-anchor" href="#模板文件" aria-hidden="true">#</a> 模板文件</h2><p>模板 是一些PHP文件，他可以输出HTML代码呈献给浏览器，决定着主题的外观.下面让我们来看一下主题的模板。</p><h3 id="模板文件列表" tabindex="-1"><a class="header-anchor" href="#模板文件列表" aria-hidden="true">#</a> 模板文件列表</h3><p>这里是被WordPress确认的主题文件列表</p>',17),s=(0,n._)("thead",null,[(0,n._)("tr",null,[(0,n._)("th",{style:{"text-align":"left"}},"文件名称"),(0,n._)("th",{style:{"text-align":"left"}},"文件释义"),(0,n._)("th",{style:{"text-align":"right"}},"其他")])],-1),r=(0,n._)("tr",null,[(0,n._)("td",{style:{"text-align":"left"}},[(0,n._)("code",null,"index.php")]),(0,n._)("td",{style:{"text-align":"left"}},[(0,n.Uk)("主模板。"),(0,n._)("strong",null,"如果主题使用自己的模板，"),(0,n._)("code",null,"index.php"),(0,n.Uk)("** 是必须存在。**")]),(0,n._)("td",{style:{"text-align":"right"}},"必须")],-1),d=(0,n._)("tr",null,[(0,n._)("td",{style:{"text-align":"left"}},[(0,n._)("code",null,"functions.php")]),(0,n._)("td",{style:{"text-align":"left"}},"主样式表，这个文件 必须 位于你的主题里面，而且必须在头部注释处写清楚主题的信息."),(0,n._)("td",{style:{"text-align":"right"}},"重要")],-1),i=(0,n._)("td",{style:{"text-align":"left"}},[(0,n._)("code",null,"rlt.css")],-1),o={style:{"text-align":"left"}},p=(0,n.Uk)("rtl 样式表。如果网站的阅读方向是自右向左的，他会自动被包含进来。你可以使用 "),c={href:"https://wordpress.org/plugins/rtler",target:"_blank",rel:"noopener noreferrer"},h=(0,n.Uk)("the RTLer"),u=(0,n.Uk)(" 插件来生成这个文件"),g=(0,n._)("td",{style:{"text-align":"right"}},"可选",-1),_=(0,n._)("tr",null,[(0,n._)("td",{style:{"text-align":"left"}},[(0,n._)("code",null,"comments.php")]),(0,n._)("td",{style:{"text-align":"left"}},"评论模板"),(0,n._)("td",{style:{"text-align":"right"}},"可选")],-1),f=(0,n._)("tr",null,[(0,n._)("td",{style:{"text-align":"left"}},[(0,n._)("code",null,"front-page.php")]),(0,n._)("td",{style:{"text-align":"left"}},[(0,n.Uk)("首页模版，仅用于开启 "),(0,n._)("strong",null,"静态首页"),(0,n.Uk)(" 时生效")]),(0,n._)("td",{style:{"text-align":"right"}},"可选")],-1),m=(0,n._)("tr",null,[(0,n._)("td",{style:{"text-align":"left"}},[(0,n._)("code",null,"home.php")]),(0,n._)("td",{style:{"text-align":"left"}},[(0,n.Uk)("主页模板，默认的首页。如果你开启了 "),(0,n._)("strong",null,"静态首页"),(0,n.Uk)(" 这是展现最新的文章的模板页面。")]),(0,n._)("td",{style:{"text-align":"right"}},"可选")],-1),b=(0,n._)("tr",null,[(0,n._)("td",{style:{"text-align":"left"}},[(0,n._)("code",null,"single.php")]),(0,n._)("td",{style:{"text-align":"left"}},[(0,n.Uk)("单独页面模板。显示单独的一篇文章时被调用。"),(0,n._)("em",null,"对于这个以及其他的请求模板，如果模板不存在会使用 index.php")]),(0,n._)("td",{style:{"text-align":"right"}},"可选")],-1),x=(0,n._)("tr",null,[(0,n._)("td",{style:{"text-align":"left"}},[(0,n._)("code",null,"single-{post-type}.php")]),(0,n._)("td",{style:{"text-align":"left"}},[(0,n.Uk)("自定义单独页面模板。例如，"),(0,n._)("code",null,"single-books.php"),(0,n.Uk)(" 展示自定义文章类型为 books的文章. 如果文章类型未被设置则使用"),(0,n._)("code",null,"index.php"),(0,n.Uk)("。")]),(0,n._)("td",{style:{"text-align":"right"}},"可选")],-1),y=(0,n._)("tr",null,[(0,n._)("td",{style:{"text-align":"left"}},[(0,n._)("code",null,"page.php")]),(0,n._)("td",{style:{"text-align":"left"}},"页面模板. 独立页面调用。"),(0,n._)("td",{style:{"text-align":"right"}},"可选")],-1),k=(0,n._)("tr",null,[(0,n._)("td",{style:{"text-align":"left"}},[(0,n._)("code",null,"category.php")]),(0,n._)("td",{style:{"text-align":"left"}},"分类模板，分类页面调用。"),(0,n._)("td",{style:{"text-align":"right"}},"可选")],-1),v=(0,n._)("tr",null,[(0,n._)("td",{style:{"text-align":"left"}},[(0,n._)("code",null,"tag.php")]),(0,n._)("td",{style:{"text-align":"left"}},"标签模板，标签页面调用。"),(0,n._)("td",{style:{"text-align":"right"}},"可选")],-1),w=(0,n._)("tr",null,[(0,n._)("td",{style:{"text-align":"left"}},[(0,n._)("code",null,"taxonomy.php")]),(0,n._)("td",{style:{"text-align":"left"}},"自定义类型模版。"),(0,n._)("td",{style:{"text-align":"right"}},"可选")],-1),U=(0,n._)("tr",null,[(0,n._)("td",{style:{"text-align":"left"}},[(0,n._)("code",null,"author.php")]),(0,n._)("td",{style:{"text-align":"left"}},"作者模版，作者页面调用"),(0,n._)("td",{style:{"text-align":"right"}},"可选")],-1),P=(0,n._)("tr",null,[(0,n._)("td",{style:{"text-align":"left"}},[(0,n._)("code",null,"date.php")]),(0,n._)("td",{style:{"text-align":"left"}},"日期/时间模板，按时间查询时使用的模板。"),(0,n._)("td",{style:{"text-align":"right"}},"可选")],-1),T=(0,n._)("tr",null,[(0,n._)("td",{style:{"text-align":"left"}},[(0,n._)("code",null,"archive.php")]),(0,n._)("td",{style:{"text-align":"left"}},[(0,n.Uk)("存档模板。查询分类，作者或日期时使用的模板。需要注意的是，该模板将会分别被"),(0,n._)("code",null,"category.php"),(0,n.Uk)("， "),(0,n._)("code",null,"author.php"),(0,n.Uk)("， "),(0,n._)("code",null,"date.php"),(0,n.Uk)("所覆盖（如果存在的话）。")]),(0,n._)("td",{style:{"text-align":"right"}},"可选")],-1),W=(0,n._)("tr",null,[(0,n._)("td",{style:{"text-align":"left"}},[(0,n._)("code",null,"search.php")]),(0,n._)("td",{style:{"text-align":"left"}},"搜索结果模板，显示搜索结果时使用的模板。"),(0,n._)("td",{style:{"text-align":"right"}},"可选")],-1),L=(0,n._)("tr",null,[(0,n._)("td",{style:{"text-align":"left"}},[(0,n._)("code",null,"attachment.php")]),(0,n._)("td",{style:{"text-align":"left"}},"附件模板，查看单个附件时使用的模板。"),(0,n._)("td",{style:{"text-align":"right"}},"可选")],-1),S=(0,n._)("tr",null,[(0,n._)("td",{style:{"text-align":"left"}},[(0,n._)("code",null,"image.php")]),(0,n._)("td",{style:{"text-align":"left"}},[(0,n.Uk)("图片附件模板。当在 WordPress 中查看单个图片时将调用此模板，如果不存在此模板，则调用"),(0,n._)("code",null,"attachment.php"),(0,n.Uk)("模板。")]),(0,n._)("td",{style:{"text-align":"right"}},"可选")],-1),A=(0,n._)("tr",null,[(0,n._)("td",{style:{"text-align":"left"}},[(0,n._)("code",null,"404.php")]),(0,n._)("td",{style:{"text-align":"left"}},[(0,n.Uk)("404 错误页面 模板。当 WordPress 无法查找到匹配查询的日志或页面时，使用"),(0,n._)("code",null,"404.php"),(0,n.Uk)("文件。")]),(0,n._)("td",{style:{"text-align":"right"}},"可选")],-1),R=(0,n.uE)('<h3 id="基本模板" tabindex="-1"><a class="header-anchor" href="#基本模板" aria-hidden="true">#</a> 基本模板</h3><p>在最简单的情况下，一个WordPress主题由两个文件构成：</p><ul><li><code>style.css</code></li><li><code>index.php</code></li></ul><p>这些文件都位于主题目录. 这<code>index.php</code>模板 是非常灵活的。可以用来包含所有的引用 header， sidebar， footer， content， categories， archives， search， error， 和其它在 WordPress 产生的文件。</p><p>典型的模板文件包括：</p><ul><li><code>comments.php</code></li><li><code>footer.php</code></li><li><code>header.php</code></li><li><code>sidebar.php</code></li></ul><p>使用这些模板文件，可以把这些文件嵌入到 <code>index.php</code> 中，最后生成的文件里。</p><ul><li>包含 header， 使用<code>get_header()</code></li><li>包含 sidebar， 使用 <code>get_sidebar()</code></li><li>包含 footer， 使用 <code>get_footer()</code></li><li>包含 search form， 使用 <code>get_search_form()</code></li></ul><h3 id="自定义页面模板" tabindex="-1"><a class="header-anchor" href="#自定义页面模板" aria-hidden="true">#</a> 自定义页面模板</h3><p>为了创建一个自定义页面你需要首先创建一个文件，假设我们的第一个自定义页面叫做<code>snarfer.php</code>。</p><p>在 <code>snarfer.php</code> 的文件顶部，你必须要这么写：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>\n <span class="token comment">/*\n Template Name: Snarfer\n */</span>\n<span class="token delimiter important">?&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>以上代码定义<code>snarfer.php</code>为Snarfer模板，在创建其它页面的时候Snarfer可以替换成其它名字。</p><p>这个模板名字会作为一个链接出现在主题编辑器中，单击它就可以编辑这个文件。</p><h3 id="基于查询的模板文件" tabindex="-1"><a class="header-anchor" href="#基于查询的模板文件" aria-hidden="true">#</a> 基于查询的模板文件</h3><p>WordPress 可以根据不同的查询类型加载不同的模板。 有两个办法: 根据模板层次命名你的模板文件，或者在循环中使用条件标签(if 语句)。</p><h3 id="包含模板文件" tabindex="-1"><a class="header-anchor" href="#包含模板文件" aria-hidden="true">#</a> 包含模板文件</h3><p>为了加载其他模板(除了 header, sidebar, footer 这些已经被预先定义了加载命令的例如 <code>get_header()</code>)到某个模板中，你可以使用 <code>get_template_part()</code>。这利于主题的代码重用。</p><h3 id="引用模板中的文件" tabindex="-1"><a class="header-anchor" href="#引用模板中的文件" aria-hidden="true">#</a> 引用模板中的文件</h3><p>当在同一个主题中引用其他文件时，避免使用硬编码的 URLs 和文件路径。请使用 <code>bloginfo()</code> 引用 URL 和文件路径：参看从模板中引用文件.</p><p>注意样式表中使用的 URLs 是相对于样式表本身的，而不是相对于引用这个样式表的文件。例如，如果你在主题中包含 <code>images/</code> 目录，你只需要在CSS中指明相对路径，像这样：</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">h1</span> <span class="token punctuation">{</span>\n    <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>images/my-background.jpg<span class="token punctuation">)</span></span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="插件-api" tabindex="-1"><a class="header-anchor" href="#插件-api" aria-hidden="true">#</a> 插件 API</h3><p>开发主题的时候，需要注意的是你的主题最好能和用户可能安装的任何插件共存。</p><p>大部分Action Hooks存在于wp的php核心中，所以你的主题不需要任何多余的特殊标签来让它可以正常运转。但是少数的Action Hooks需要在你的主题中做特殊处理，以使插件能够将头，尾，侧边栏等信息输出到页面中。</p><table><thead><tr><th style="text-align:left;">方法</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;"><code>wp_head()</code></td><td style="text-align:left;">放在<code>&lt;head&gt;</code>标签之内，在<code>header.php</code>文件中，大部分插件常在这里导入JavaScript文件。</td></tr><tr><td style="text-align:left;"><code>wp_footer()</code></td><td style="text-align:left;">在<code>footer.php</code>中，在<code>&lt;/body&gt;</code>标签之前。使用举例：一些插件会在这里插入要在文档最后执行的PHP代码。更常见的用法是插入网页静态代码，比如Google Analytics。</td></tr><tr><td style="text-align:left;"><code>wp_meta()</code></td><td style="text-align:left;">在主题菜单或侧边栏的<code>&lt;li&gt;Meta&lt;/li&gt;</code>节之中；sidebar.php模板. 插件使用范例: 包含一个旋转广告或标签云。</td></tr><tr><td style="text-align:left;"><code>comment_form()</code></td><td style="text-align:left;">在<code>comments.php</code>中，在表单闭标签出现之前 (<code>&lt;/form&gt;</code>)，插件使用范例: 显示评论预览。</td></tr></tbody></table><h3 id="不可靠的数据" tabindex="-1"><a class="header-anchor" href="#不可靠的数据" aria-hidden="true">#</a> 不可靠的数据</h3><p>应该在主题中避免使用动态生成的内容，尤其是输出到 HTML 标签属性中的内容。依照WordPress 编程规范，属性中出现的文本需要经过<code>esc_attr()</code>处理，这样单引号和双引号才不会影响属性值结束，否则会导致无效代码和安全问题。一般要检查的地方有 title， alt， 和 value 属性。</p><ul><li><p><code>esc_html()</code></p></li><li><p><code>esc_url()</code></p></li><li><p><code>esc_attr()</code></p></li></ul>',29),H=(0,n.Uk)("更多详情请参考 "),C={href:"https://codex.wordpress.org/zh-cn:%E4%B8%BB%E9%A2%98%E5%BC%80%E5%8F%91",target:"_blank",rel:"noopener noreferrer"},E=(0,n.Uk)("WordPress主题开发"),I={},q=(0,l(3744).Z)(I,[["render",function(e,t){const l=(0,n.up)("OutboundLink");return(0,n.wg)(),(0,n.iD)(n.HY,null,[a,(0,n._)("table",null,[s,(0,n._)("tbody",null,[r,d,(0,n._)("tr",null,[i,(0,n._)("td",o,[p,(0,n._)("a",c,[h,(0,n.Wm)(l)]),u]),g]),_,f,m,b,x,y,k,v,w,U,P,T,W,L,S,A])]),R,(0,n._)("p",null,[H,(0,n._)("a",C,[E,(0,n.Wm)(l)])])],64)}]])},3744:(e,t)=>{t.Z=(e,t)=>{const l=e.__vccOpts||e;for(const[e,n]of t)l[e]=n;return l}}}]);