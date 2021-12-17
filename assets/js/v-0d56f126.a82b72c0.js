(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1853],{6265:(s,e,n)=>{"use strict";n.r(e),n.d(e,{data:()=>a});const a={key:"v-0d56f126",path:"/tools/git/merge-files-or-folders-from-other-branches.html",title:"Git合并其他分支的个别文件或文件夹",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"实际需求",slug:"实际需求",children:[]},{level:2,title:"合并分支",slug:"合并分支",children:[]},{level:2,title:"强制合并(不推荐)",slug:"强制合并-不推荐",children:[]},{level:2,title:"智能合并（推荐）",slug:"智能合并-推荐",children:[]},{level:2,title:"删除临时的分支",slug:"删除临时的分支",children:[]},{level:2,title:"参考",slug:"参考",children:[]}],filePathRelative:"tools/git/merge-files-or-folders-from-other-branches.md",git:{updatedTime:1639727659e3,contributors:[]}}},7837:(s,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>r});var a=n(6252);const l=(0,a.uE)('<h1 id="git合并其他分支的个别文件或文件夹" tabindex="-1"><a class="header-anchor" href="#git合并其他分支的个别文件或文件夹" aria-hidden="true">#</a> Git合并其他分支的个别文件或文件夹</h1><p>在实际工作中，一个大型的项目或版本迭代可能不是一次上线，可能会分好几次上线，这时候就会涉及创建多个分支，进行分别开发。</p><h2 id="实际需求" tabindex="-1"><a class="header-anchor" href="#实际需求" aria-hidden="true">#</a> 实际需求</h2><p>功能分为2个分支，分别为<code>article/list</code>、<code>article/show</code>。</p><ul><li><code>article/list</code>上面有个列表页功能</li><li><code>article/show</code>上面有个详情页功能，还有个系统消息功能</li></ul><p>产品经理说先上列表功能，于是我们就开发<code>article/list</code>分支，列表功能很快开发完成。</p><p>第二天按常理开发<code>article/show</code>分支，开发到一半的时候，产品经理说目前的系统消息功能需要急着上线，要和列表功能一起上线，当时就懵逼了，然后赶紧放下详情页的开发，立马去开发系统消息功能，开发完之后需要将列表功能和系统消息功能放在一个分支上提测，这时候分支合并就派上用场了。</p><h2 id="合并分支" tabindex="-1"><a class="header-anchor" href="#合并分支" aria-hidden="true">#</a> 合并分支</h2><p>使用<code>git merge</code>命令进行分支合并是通用的做法，但是<code>git merge</code>合并的时候会将两个分支的内容完全合并，如果想合并一部分肯定是不行的。那怎么办？</p><p>如何从其他分支merge指定文件到当前分支，<code>git checkout</code>是个合适的工具。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> checkout source_branch <span class="token operator">&lt;</span>path<span class="token operator">&gt;</span><span class="token punctuation">..</span>.\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote><p>使用<code>git checkout</code>之前一定要确定当前分支。</p></blockquote><h2 id="强制合并-不推荐" tabindex="-1"><a class="header-anchor" href="#强制合并-不推荐" aria-hidden="true">#</a> 强制合并(不推荐)</h2><p>我们使用<code>git checkout</code>将<code>article/show</code>分支上的系统消息功能添加到<code>article/list</code>分支上</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> branch\n  * article/list  \n    article/show\n    \n$ <span class="token function">git</span> checkout article/show message.html message.css message.js other.js\n\n$ <span class="token function">git</span> status\n<span class="token comment"># On branch article/list</span>\n<span class="token comment"># Changes to be committed:</span>\n<span class="token comment">#   (use &quot;git reset HEAD &lt;file&gt;...&quot; to unstage)</span>\n<span class="token comment">#</span>\n<span class="token comment">#    new file:   message.css</span>\n<span class="token comment">#    new file:   message.html</span>\n<span class="token comment">#    new file:   message.js</span>\n<span class="token comment">#    modified:   other.js</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><blockquote><p>在使用<code>git checkout</code>某文件到当前分支时，会将当前分支的对应文件强行覆盖</p></blockquote><p>这里新增文件没问题，但是<code>article/list</code>分支上原有的other.js会被强行覆盖，如果<code>article/list</code>分支上的other.js有修改，在checkout的时候就会将other.js内容强行覆盖，这样肯定是不行的。如何避免不强制覆盖呢？</p><h2 id="智能合并-推荐" tabindex="-1"><a class="header-anchor" href="#智能合并-推荐" aria-hidden="true">#</a> 智能合并（推荐）</h2><ul><li>使用<code>git checkout</code>将根据A分支创建一个<code>article/list_temp</code>分支，避免影响<code>article/list</code>分支</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> checkout -b article/list_temp\nSwitched to a new branch <span class="token string">&#39;article/list_temp&#39;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li>将<code>article/show</code>分支合并到<code>article/list_temp</code>分支</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> merge article/show\nUpdating 1f73596<span class="token punctuation">..</span>04627b5\nFast-forward\nmessage.css                     <span class="token operator">|</span> <span class="token number">0</span>\nmessage.html                    <span class="token operator">|</span> <span class="token number">0</span>\nmessage.js                      <span class="token operator">|</span> <span class="token number">0</span>\nother.js                        <span class="token operator">|</span> <span class="token number">1</span> +\n<span class="token number">4</span> files changed, <span class="token number">1</span> insertion<span class="token punctuation">(</span>+<span class="token punctuation">)</span>\ncreate mode <span class="token number">100644</span> message.css\ncreate mode <span class="token number">100644</span> message.html\ncreate mode <span class="token number">100644</span> message.js\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><ul><li>切换到<code>article/list</code>分支，并使用<code>git checkout</code>将<code>article/list_temp</code>分支上的系统消息功能相关文件或文件夹覆盖到<code>article/list</code>分支</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> checkout article/list\nSwitched to branch <span class="token string">&#39;article/list&#39;</span>\n\n$ <span class="token function">git</span> checkout article/list_temp message.html message.css message.js other.js\n\n$ <span class="token function">git</span> status\n<span class="token comment"># On branch article/list</span>\n<span class="token comment"># Changes to be committed:</span>\n<span class="token comment">#   (use &quot;git reset HEAD &lt;file&gt;...&quot; to unstage)</span>\n<span class="token comment">#</span>\n<span class="token comment">#    new file:   message.css</span>\n<span class="token comment">#    new file:   message.html</span>\n<span class="token comment">#    new file:   message.js</span>\n<span class="token comment">#    modified:   other.js</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="删除临时的分支" tabindex="-1"><a class="header-anchor" href="#删除临时的分支" aria-hidden="true">#</a> 删除临时的分支</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> branch -D article/list_temp\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>',27),c={href:"https://segmentfault.com/a/1190000008360855",target:"_blank",rel:"noopener noreferrer"},t=(0,a.Uk)("git小技巧--如何从其他分支merge个别文件或文件夹"),r={render:function(s,e){const n=(0,a.up)("OutboundLink");return(0,a.wg)(),(0,a.j4)(a.HY,null,[l,(0,a.Wm)("p",null,[(0,a.Wm)("a",c,[t,(0,a.Wm)(n)])])],64)}}}}]);