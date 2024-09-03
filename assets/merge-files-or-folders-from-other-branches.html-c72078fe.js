import{_ as n,M as a,p as i,q as c,R as e,t,N as l,a1 as d}from"./framework-ff09ffed.js";const o={},r=d(`<h1 id="git合并其他分支的个别文件或文件夹" tabindex="-1"><a class="header-anchor" href="#git合并其他分支的个别文件或文件夹" aria-hidden="true">#</a> Git合并其他分支的个别文件或文件夹</h1><p>在实际工作中，一个大型的项目或版本迭代可能不是一次上线，可能会分好几次上线，这时候就会涉及创建多个分支，进行分别开发。</p><h2 id="实际需求" tabindex="-1"><a class="header-anchor" href="#实际需求" aria-hidden="true">#</a> 实际需求</h2><p>功能分为2个分支，分别为<code>article/list</code>、<code>article/show</code>。</p><ul><li><code>article/list</code>上面有个列表页功能</li><li><code>article/show</code>上面有个详情页功能，还有个系统消息功能</li></ul><p>产品经理说先上列表功能，于是我们就开发<code>article/list</code>分支，列表功能很快开发完成。</p><p>第二天按常理开发<code>article/show</code>分支，开发到一半的时候，产品经理说目前的系统消息功能需要急着上线，要和列表功能一起上线，当时就懵逼了，然后赶紧放下详情页的开发，立马去开发系统消息功能，开发完之后需要将列表功能和系统消息功能放在一个分支上提测，这时候分支合并就派上用场了。</p><h2 id="合并分支" tabindex="-1"><a class="header-anchor" href="#合并分支" aria-hidden="true">#</a> 合并分支</h2><p>使用<code>git merge</code>命令进行分支合并是通用的做法，但是<code>git merge</code>合并的时候会将两个分支的内容完全合并，如果想合并一部分肯定是不行的。那怎么办？</p><p>如何从其他分支merge指定文件到当前分支，<code>git checkout</code>是个合适的工具。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> checkout source_branch <span class="token operator">&lt;</span>path<span class="token operator">&gt;</span><span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>使用<code>git checkout</code>之前一定要确定当前分支。</p></blockquote><h2 id="强制合并-不推荐" tabindex="-1"><a class="header-anchor" href="#强制合并-不推荐" aria-hidden="true">#</a> 强制合并(不推荐)</h2><p>我们使用<code>git checkout</code>将<code>article/show</code>分支上的系统消息功能添加到<code>article/list</code>分支上</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> branch
  * article/list  
    article/show
    
$ <span class="token function">git</span> checkout article/show message.html message.css message.js other.js

$ <span class="token function">git</span> status
<span class="token comment"># On branch article/list</span>
<span class="token comment"># Changes to be committed:</span>
<span class="token comment">#   (use &quot;git reset HEAD &lt;file&gt;...&quot; to unstage)</span>
<span class="token comment">#</span>
<span class="token comment">#    new file:   message.css</span>
<span class="token comment">#    new file:   message.html</span>
<span class="token comment">#    new file:   message.js</span>
<span class="token comment">#    modified:   other.js</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>在使用<code>git checkout</code>某文件到当前分支时，会将当前分支的对应文件强行覆盖</p></blockquote><p>这里新增文件没问题，但是<code>article/list</code>分支上原有的other.js会被强行覆盖，如果<code>article/list</code>分支上的other.js有修改，在checkout的时候就会将other.js内容强行覆盖，这样肯定是不行的。如何避免不强制覆盖呢？</p><h2 id="智能合并-推荐" tabindex="-1"><a class="header-anchor" href="#智能合并-推荐" aria-hidden="true">#</a> 智能合并（推荐）</h2><ul><li>使用<code>git checkout</code>将根据A分支创建一个<code>article/list_temp</code>分支，避免影响<code>article/list</code>分支</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> checkout <span class="token parameter variable">-b</span> article/list_temp
Switched to a new branch <span class="token string">&#39;article/list_temp&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>将<code>article/show</code>分支合并到<code>article/list_temp</code>分支</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> merge article/show
Updating 1f73596<span class="token punctuation">..</span>04627b5
Fast-forward
message.css                     <span class="token operator">|</span> <span class="token number">0</span>
message.html                    <span class="token operator">|</span> <span class="token number">0</span>
message.js                      <span class="token operator">|</span> <span class="token number">0</span>
other.js                        <span class="token operator">|</span> <span class="token number">1</span> +
<span class="token number">4</span> files changed, <span class="token number">1</span> insertion<span class="token punctuation">(</span>+<span class="token punctuation">)</span>
create mode <span class="token number">100644</span> message.css
create mode <span class="token number">100644</span> message.html
create mode <span class="token number">100644</span> message.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>切换到<code>article/list</code>分支，并使用<code>git checkout</code>将<code>article/list_temp</code>分支上的系统消息功能相关文件或文件夹覆盖到<code>article/list</code>分支</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> checkout article/list
Switched to branch <span class="token string">&#39;article/list&#39;</span>

$ <span class="token function">git</span> checkout article/list_temp message.html message.css message.js other.js

$ <span class="token function">git</span> status
<span class="token comment"># On branch article/list</span>
<span class="token comment"># Changes to be committed:</span>
<span class="token comment">#   (use &quot;git reset HEAD &lt;file&gt;...&quot; to unstage)</span>
<span class="token comment">#</span>
<span class="token comment">#    new file:   message.css</span>
<span class="token comment">#    new file:   message.html</span>
<span class="token comment">#    new file:   message.js</span>
<span class="token comment">#    modified:   other.js</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="删除临时的分支" tabindex="-1"><a class="header-anchor" href="#删除临时的分支" aria-hidden="true">#</a> 删除临时的分支</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> branch <span class="token parameter variable">-D</span> article/list_temp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>`,27),m={href:"https://segmentfault.com/a/1190000008360855",target:"_blank",rel:"noopener noreferrer"};function p(u,h){const s=a("ExternalLinkIcon");return i(),c("div",null,[r,e("p",null,[e("a",m,[t("git小技巧--如何从其他分支merge个别文件或文件夹"),l(s)])])])}const b=n(o,[["render",p],["__file","merge-files-or-folders-from-other-branches.html.vue"]]);export{b as default};
