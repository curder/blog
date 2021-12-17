(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3734],{1931:(e,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>n});const n={key:"v-f9bf916c",path:"/tools/git/remote-repository-update.html",title:"Git更新远程代码到本地仓库",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[],filePathRelative:"tools/git/remote-repository-update.md",git:{updatedTime:1639727659e3,contributors:[]}}},6538:(e,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>c});const n=(0,a(6252).uE)('<h1 id="git更新远程代码到本地仓库" tabindex="-1"><a class="header-anchor" href="#git更新远程代码到本地仓库" aria-hidden="true">#</a> Git更新远程代码到本地仓库</h1><p>使用Git协同开发时，除了往服务器推送本地的代码也会经常从服务器上拉取代码，在拉取代码的还是除了使用<code>git pull</code>推送，还可以使用<code>git fetch</code>和<code>git merge</code>命令。</p><p>使用<code>git fetch</code>操作的好处是，<code>git fetch</code> 并没更改本地仓库的代码，只是拉取了远程 <code>commit</code> 数据，将远程仓库的 <code>commit id</code> 更新为<code>latest</code>。</p><ul><li>查看远程仓库</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> remote -v\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote><p>默认情况下会有一个<code>origin</code>的远程仓库名</p></blockquote><ul><li>从远程获取最新版本到本地新建的分支</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> fetch origin master:temp\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>比较区别</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">diff</span> temp\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote><p>比较本地<code>master</code>分支和远程<code>master</code>分支的区别</p></blockquote><ul><li>合并分支</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> merge temp\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote><p>合并<code>temp</code>分支到<code>master</code>。</p></blockquote><ul><li>删除临时分支</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> branch -d temp\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote><p>如果该分支没有合并到主分支会报错，可以用命令强制删除<code>git branch -D &lt;branch_name&gt;</code></p></blockquote>',17),c={render:function(e,s){return n}}}}]);