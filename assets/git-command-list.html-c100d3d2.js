import{_ as t,M as c,p as l,q as p,R as n,t as s,N as e,a1 as o}from"./framework-ff09ffed.js";const d={},r=n("h1",{id:"git命令清单",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#git命令清单","aria-hidden":"true"},"#"),s(" Git命令清单")],-1),u=n("p",null,"Git作为常用的版本控制工具之一，我们应该在平时的开发中多了解、总结一些命令，将能在遇到一些实际使用过程中省去很多时间。",-1),m=n("p",null,"下面这张图是比较好的一张：",-1),v=["src"],b=o(`<p>关于git，首先需要了解几个名词，如下</p><ul><li><p><code>Working Directory</code> // 工作区</p></li><li><p><code>Index / Stage Area</code> // 暂存区</p></li><li><p><code>Repository</code> // 仓库区（或本地仓库）</p></li><li><p><code>Remote</code> // 远程仓</p></li></ul><p>在 Git 里，主要可以分成「工作区（Working Directory）」、「暂存区（Staging Area）」以及「储存区（Repository）」三个区块，通过不同的 Git 指令，可以把文件移到不同的区域：</p><ul><li><p><code>git add</code> 指令把文件从工作目录移至暂存区（或索引）。</p></li><li><p><code>git commit</code> 指令把暂存区的內容移至仓库区。</p></li></ul><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><p>Git的设置文件为<code>.gitconfig</code>，它可以在用户主目录下（全局配置），也可以在项目目录下（项目配置）。</p><p>配置文件的优先级是：<code>/etc/gitconfig</code>、<code>~/.gitconfig</code>和 当前项目目录的config文件（即<code>.git/config</code>文件）。</p><p>这三个文件的优先级依次增高，每个级别重写前一个级别的值。因此，在<code>.git/config</code>中的值覆盖了在<code>/etc/gitconfig</code>中的同一个配置值。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 显示当前的Git配置</span>
<span class="token function">git</span> config <span class="token parameter variable">--list</span>

<span class="token comment"># 编辑Git配置文件，不指定默认是 --local</span>
<span class="token function">git</span> config <span class="token parameter variable">-e</span> <span class="token punctuation">[</span>--system<span class="token operator">|</span>--global<span class="token operator">|</span>--local<span class="token punctuation">]</span>

<span class="token comment"># 设置提交代码时的用户信息</span>
<span class="token function">git</span> config <span class="token punctuation">[</span>--global<span class="token punctuation">]</span> user.name <span class="token string">&quot;[name]&quot;</span>
<span class="token function">git</span> config <span class="token punctuation">[</span>--global<span class="token punctuation">]</span> user.email <span class="token string">&quot;[email address]&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="新建仓库" tabindex="-1"><a class="header-anchor" href="#新建仓库" aria-hidden="true">#</a> 新建仓库</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 在当前目录新建一个Git仓库</span>
<span class="token function">git</span> init

<span class="token comment"># 新建一个目录，并将其初始化为Git仓库</span>
<span class="token function">git</span> init <span class="token punctuation">[</span>project-name<span class="token punctuation">]</span>

<span class="token comment"># 下载一个项目和它的整个代码历史</span>
<span class="token function">git</span> clone <span class="token punctuation">[</span>ssh/https/file:///<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="增加-删除文件" tabindex="-1"><a class="header-anchor" href="#增加-删除文件" aria-hidden="true">#</a> 增加/删除文件</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 添加指定文件到暂存区</span>
<span class="token function">git</span> <span class="token function">add</span> <span class="token punctuation">[</span>file1<span class="token punctuation">]</span> <span class="token punctuation">[</span>file2<span class="token punctuation">]</span> <span class="token punctuation">..</span>.

<span class="token comment"># 添加指定目录到暂存区，包括子目录</span>
<span class="token function">git</span> <span class="token function">add</span> <span class="token punctuation">[</span>dir<span class="token punctuation">]</span>

<span class="token comment"># 添加当前目录的所有文件到暂存区</span>
<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>

<span class="token comment"># 添加每个变化前，都会要求确认</span>
<span class="token comment"># 对于同一个文件的多处变化，可以实现分次提交</span>
<span class="token function">git</span> <span class="token function">add</span> <span class="token parameter variable">-p</span>

<span class="token comment"># 删除工作区文件，并且将这次删除放入暂存区（相当于 rm [file1] [file2]，再执行 git add 命令结果）</span>
<span class="token function">git</span> <span class="token function">rm</span> <span class="token punctuation">[</span>file1<span class="token punctuation">]</span> <span class="token punctuation">[</span>file2<span class="token punctuation">]</span>

<span class="token comment"># 停止追踪指定文件，但该文件会保留在工作区，通常是在文件曾经被git管理过，现在不需要被git接管的时候使用【不删除物理文件，仅将该文件从缓存中删除】</span>
<span class="token function">git</span> <span class="token function">rm</span> <span class="token parameter variable">--cached</span> <span class="token punctuation">[</span>file<span class="token punctuation">]</span>

<span class="token comment"># 将误删除的文件恢复</span>
<span class="token function">git</span> checkout -- <span class="token function">file</span>

<span class="token comment"># 改名文件，并且将这个改名放入暂存区</span>
<span class="token function">git</span> <span class="token function">mv</span> <span class="token punctuation">[</span>file-original<span class="token punctuation">]</span> <span class="token punctuation">[</span>file-renamed<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="提交文件" tabindex="-1"><a class="header-anchor" href="#提交文件" aria-hidden="true">#</a> 提交文件</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 空文件提交到版本</span>
<span class="token comment"># 空的 Commit 出來，基本上没什么意义，有时可以不用新增文件而快速产生 Commit 來git相关的操作</span>
<span class="token function">git</span> commit --allow-empty <span class="token parameter variable">-m</span> <span class="token string">&quot;空的&quot;</span>

<span class="token comment"># 提交暂存区文件到仓库区</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token punctuation">[</span>message<span class="token punctuation">]</span>

<span class="token comment"># 提交暂存区的指定文件到仓库区</span>
<span class="token function">git</span> commit <span class="token punctuation">[</span>file1<span class="token punctuation">]</span> <span class="token punctuation">[</span>file2<span class="token punctuation">]</span> <span class="token punctuation">..</span>. <span class="token parameter variable">-m</span> <span class="token punctuation">[</span>message<span class="token punctuation">]</span>

<span class="token comment"># 提交工作区自上次commit之后的变化，直接到仓库区</span>
<span class="token function">git</span> commit <span class="token parameter variable">-a</span>

<span class="token comment"># 提交时显示所有diff信息</span>
<span class="token function">git</span> commit <span class="token parameter variable">-v</span>

<span class="token comment"># 使用一次新的commit，替代上一次提交</span>
<span class="token comment"># 如果代码没有任何新变化，则用来改写上一次commit的提交信息</span>
<span class="token function">git</span> commit <span class="token parameter variable">--amend</span> <span class="token parameter variable">-m</span> <span class="token punctuation">[</span>message<span class="token punctuation">]</span>

<span class="token comment"># 重做上一次commit，并包括指定文件的新变化</span>
<span class="token function">git</span> commit <span class="token parameter variable">--amend</span> <span class="token punctuation">[</span>file1<span class="token punctuation">]</span> <span class="token punctuation">[</span>file2<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="忽略文件" tabindex="-1"><a class="header-anchor" href="#忽略文件" aria-hidden="true">#</a> 忽略文件</h2><h3 id="强制添加存在于-gitignore的文件" tabindex="-1"><a class="header-anchor" href="#强制添加存在于-gitignore的文件" aria-hidden="true">#</a> 强制添加存在于<code>.gitignore</code>的文件</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">add</span> <span class="token parameter variable">-f</span> file.class
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="分支操作" tabindex="-1"><a class="header-anchor" href="#分支操作" aria-hidden="true">#</a> 分支操作</h2><h3 id="查看" tabindex="-1"><a class="header-anchor" href="#查看" aria-hidden="true">#</a> 查看</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 列出所有本地分支</span>
<span class="token function">git</span> branch

<span class="token comment"># 列出所有远程分支</span>
<span class="token function">git</span> branch <span class="token parameter variable">-r</span>

<span class="token comment"># 列出所有本地分支和远程分支</span>
<span class="token function">git</span> branch <span class="token parameter variable">-a</span>

<span class="token comment"># 指定本地work1和远程work1分支的连接关系</span>
<span class="token function">git</span> branch --set-upstream work1 origin/work1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="新建" tabindex="-1"><a class="header-anchor" href="#新建" aria-hidden="true">#</a> 新建</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 新建一个分支，但依然停留在当前分支</span>
<span class="token function">git</span> branch <span class="token punctuation">[</span>branch-name<span class="token punctuation">]</span>

<span class="token comment"># 新建一个分支，并切换到该分支</span>
<span class="token function">git</span> checkout <span class="token parameter variable">-b</span> <span class="token punctuation">[</span>branch<span class="token punctuation">]</span>

<span class="token comment"># 新建一个分支，指向指定的commit</span>
<span class="token function">git</span> branch <span class="token punctuation">[</span>branch<span class="token punctuation">]</span> <span class="token punctuation">[</span>commit<span class="token punctuation">]</span>

<span class="token comment"># 新建一个分支，与指定的远程分支建立追踪关系</span>
<span class="token function">git</span> branch <span class="token parameter variable">--track</span> <span class="token punctuation">[</span>branch<span class="token punctuation">]</span> <span class="token punctuation">[</span>remote-branch<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="修改" tabindex="-1"><a class="header-anchor" href="#修改" aria-hidden="true">#</a> 修改</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 将master分支改名为slave</span>
<span class="token function">git</span> branch <span class="token parameter variable">-m</span> master slave
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除" tabindex="-1"><a class="header-anchor" href="#删除" aria-hidden="true">#</a> 删除</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 删除分支</span>
<span class="token function">git</span> branch <span class="token parameter variable">-d</span> <span class="token punctuation">[</span>branch-name<span class="token punctuation">]</span>

<span class="token comment"># 删除远程分支</span>
<span class="token function">git</span> push origin <span class="token parameter variable">--delete</span> <span class="token punctuation">[</span>branch-name<span class="token punctuation">]</span>
<span class="token function">git</span> branch <span class="token parameter variable">-dr</span> <span class="token punctuation">[</span>remote/branch<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 切换到指定分支，并更新工作区</span>
<span class="token function">git</span> checkout <span class="token punctuation">[</span>branch-name<span class="token punctuation">]</span>

<span class="token comment"># 切换到上一个分支</span>
<span class="token function">git</span> checkout -

<span class="token comment"># 放弃当前所有修改会退到上一提交</span>
<span class="token function">git</span> checkout <span class="token builtin class-name">.</span>

<span class="token comment"># 建立追踪关系，在现有分支与指定的远程分支之间</span>
<span class="token function">git</span> branch --set-upstream <span class="token punctuation">[</span>branch<span class="token punctuation">]</span> <span class="token punctuation">[</span>remote-branch<span class="token punctuation">]</span>

<span class="token comment"># 合并指定分支到当前分支</span>
<span class="token function">git</span> merge <span class="token punctuation">[</span>branch<span class="token punctuation">]</span>

<span class="token comment"># 选择一个commit，合并进当前分支</span>
<span class="token function">git</span> cherry-pick <span class="token punctuation">[</span>commit<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="标签" tabindex="-1"><a class="header-anchor" href="#标签" aria-hidden="true">#</a> 标签</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 列出所有tag</span>
<span class="token function">git</span> tag

<span class="token comment"># 新建一个tag在当前commit</span>
<span class="token function">git</span> tag <span class="token punctuation">[</span>tag<span class="token punctuation">]</span>

<span class="token comment"># 新建一个tag在指定commit</span>
<span class="token function">git</span> tag <span class="token punctuation">[</span>tag<span class="token punctuation">]</span> <span class="token punctuation">[</span>commit<span class="token punctuation">]</span>

<span class="token comment"># 删除本地tag</span>
<span class="token function">git</span> tag <span class="token parameter variable">-d</span> <span class="token punctuation">[</span>tag<span class="token punctuation">]</span>

<span class="token comment"># 删除远程tag</span>
<span class="token function">git</span> push origin :refs/tags/<span class="token punctuation">[</span>tagName<span class="token punctuation">]</span>

<span class="token comment"># 查看tag信息</span>
<span class="token function">git</span> show <span class="token punctuation">[</span>tag<span class="token punctuation">]</span>

<span class="token comment"># 提交指定tag</span>
<span class="token function">git</span> push <span class="token punctuation">[</span>remote<span class="token punctuation">]</span> <span class="token punctuation">[</span>tag<span class="token punctuation">]</span>

<span class="token comment"># 提交所有tag</span>
<span class="token function">git</span> push <span class="token punctuation">[</span>remote<span class="token punctuation">]</span> <span class="token parameter variable">--tags</span>

<span class="token comment"># 新建一个分支，指向某个tag</span>
<span class="token function">git</span> checkout <span class="token parameter variable">-b</span> <span class="token punctuation">[</span>branch<span class="token punctuation">]</span> <span class="token punctuation">[</span>tag<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="查看日志" tabindex="-1"><a class="header-anchor" href="#查看日志" aria-hidden="true">#</a> 查看日志</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 显示当前分支的版本历史</span>
<span class="token function">git</span> log

<span class="token comment"># 简略查看信息</span>
<span class="token function">git</span> log  <span class="token parameter variable">--pretty</span><span class="token operator">=</span>oneline

<span class="token comment"># 查看分支信息</span>
<span class="token function">git</span> log <span class="token parameter variable">--graph</span> <span class="token parameter variable">--pretty</span><span class="token operator">=</span>oneline --abbrev-commit

<span class="token comment"># 显示commit历史，以及每次commit发生变更的文件</span>
<span class="token function">git</span> log <span class="token parameter variable">--stat</span>

<span class="token comment"># 搜索提交历史，根据关键词</span>
<span class="token function">git</span> log <span class="token parameter variable">-S</span> <span class="token punctuation">[</span>keyword<span class="token punctuation">]</span>

<span class="token comment"># 显示某个commit之后的所有变动，每个commit占据一行</span>
<span class="token function">git</span> log <span class="token punctuation">[</span>tag<span class="token punctuation">]</span> HEAD <span class="token parameter variable">--pretty</span><span class="token operator">=</span>format:%s

<span class="token comment"># 显示某个commit之后的所有变动，其&quot;提交说明&quot;必须符合搜索条件</span>
<span class="token function">git</span> log <span class="token punctuation">[</span>tag<span class="token punctuation">]</span> HEAD <span class="token parameter variable">--grep</span> feature

<span class="token comment"># 显示某个文件的版本历史，包括文件改名</span>
<span class="token function">git</span> log <span class="token parameter variable">--follow</span> <span class="token punctuation">[</span>file<span class="token punctuation">]</span>
<span class="token function">git</span> whatchanged <span class="token punctuation">[</span>file<span class="token punctuation">]</span>

<span class="token comment"># 显示指定文件相关的每一次diff</span>
<span class="token function">git</span> log <span class="token parameter variable">-p</span> <span class="token punctuation">[</span>file<span class="token punctuation">]</span>

<span class="token comment"># 显示过去5次提交</span>
<span class="token function">git</span> log <span class="token parameter variable">-5</span> <span class="token parameter variable">--pretty</span> <span class="token parameter variable">--oneline</span>

<span class="token comment"># 显示所有提交过的用户，按提交次数排序</span>
<span class="token function">git</span> shortlog <span class="token parameter variable">-sn</span>

<span class="token comment"># 找某个人或某些人的 Commit</span>
<span class="token function">git</span> log <span class="token parameter variable">--author</span><span class="token operator">=</span><span class="token string">&quot;curder&quot;</span>
<span class="token function">git</span> log <span class="token parameter variable">--author</span><span class="token operator">=</span><span class="token string">&quot;curder\\|test&quot;</span>

<span class="token comment"># 按照提交的 Message 获取对应的提交</span>
<span class="token function">git</span> log <span class="token parameter variable">--grep</span><span class="token operator">=</span><span class="token string">&quot;css&quot;</span>

<span class="token comment"># 找出某行文件内容谁写的</span>
<span class="token function">git</span> blame file_name
<span class="token function">git</span> blame <span class="token parameter variable">-L</span> <span class="token number">2,8</span> file_name

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="文件差异对比" tabindex="-1"><a class="header-anchor" href="#文件差异对比" aria-hidden="true">#</a> 文件差异对比</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 显示暂存区和工作区的差异</span>
<span class="token function">git</span> <span class="token function">diff</span>

<span class="token comment"># 工作区与暂存区比较</span>
<span class="token function">git</span> <span class="token function">diff</span> filepath

<span class="token comment"># 显示暂存区和上一个commit的差异</span>
<span class="token function">git</span> <span class="token function">diff</span> <span class="token parameter variable">--cached</span> <span class="token punctuation">[</span>file<span class="token punctuation">]</span>

<span class="token comment"># 显示工作区与当前分支最新commit之间的差异</span>
<span class="token function">git</span> <span class="token function">diff</span> HEAD

<span class="token comment"># 工作区与HEAD ( 当前工作分支) 比较</span>
<span class="token function">git</span> <span class="token function">diff</span> HEAD filepath

<span class="token comment"># 显示两次提交之间的差异</span>
<span class="token function">git</span> <span class="token function">diff</span> <span class="token punctuation">[</span>first-branch<span class="token punctuation">]</span><span class="token punctuation">..</span>.<span class="token punctuation">[</span>second-branch<span class="token punctuation">]</span>

<span class="token comment"># 显示当前用户今天写了多少行代码</span>
<span class="token function">git</span> <span class="token function">diff</span> <span class="token parameter variable">--shortstat</span> <span class="token string">&quot;@{0 day ago}&quot;</span>

<span class="token comment"># 暂存区与HEAD比较</span>
<span class="token function">git</span> <span class="token function">diff</span> <span class="token parameter variable">--staged</span> 或 <span class="token parameter variable">--cached</span> filepath

<span class="token comment"># 当前分支的文件与branchName 分支的文件进行比较</span>
<span class="token function">git</span> <span class="token function">diff</span> branchName filepath

<span class="token comment"># 与某一次提交进行比较</span>
<span class="token function">git</span> <span class="token function">diff</span> commitId filepath
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="查看信息" tabindex="-1"><a class="header-anchor" href="#查看信息" aria-hidden="true">#</a> 查看信息</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 显示有变更的文件</span>
<span class="token function">git</span> status

<span class="token comment"># 显示指定文件是什么人在什么时间修改过</span>
<span class="token function">git</span> blame <span class="token punctuation">[</span>file<span class="token punctuation">]</span>

<span class="token comment"># 显示某次提交的元数据和内容变化</span>
<span class="token function">git</span> show <span class="token punctuation">[</span>commit<span class="token punctuation">]</span>

<span class="token comment"># 显示某次提交发生变化的文件</span>
<span class="token function">git</span> show --name-only <span class="token punctuation">[</span>commit<span class="token punctuation">]</span>

<span class="token comment"># 显示某次提交时，某个文件的内容</span>
<span class="token function">git</span> show <span class="token punctuation">[</span>commit<span class="token punctuation">]</span>:<span class="token punctuation">[</span>filename<span class="token punctuation">]</span>

<span class="token comment"># 显示当前分支的最近几次提交</span>
<span class="token function">git</span> reflog
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="远程同步" tabindex="-1"><a class="header-anchor" href="#远程同步" aria-hidden="true">#</a> 远程同步</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 下载远程仓库的所有变动</span>
<span class="token function">git</span> fetch <span class="token punctuation">[</span>remote<span class="token punctuation">]</span>

<span class="token comment"># 显示所有远程仓库</span>
<span class="token function">git</span> remote <span class="token parameter variable">-v</span>

<span class="token comment"># 显示某个远程仓库的信息</span>
<span class="token function">git</span> remote show <span class="token punctuation">[</span>remote<span class="token punctuation">]</span>

<span class="token comment"># 增加一个新的远程仓库，并命名</span>
<span class="token function">git</span> remote <span class="token function">add</span> <span class="token punctuation">[</span>shortname<span class="token punctuation">]</span> <span class="token punctuation">[</span>url<span class="token punctuation">]</span>

<span class="token comment"># 取回远程仓库的变化，并与本地分支合并</span>
<span class="token function">git</span> pull <span class="token punctuation">[</span>remote<span class="token punctuation">]</span> <span class="token punctuation">[</span>branch<span class="token punctuation">]</span>

<span class="token comment"># 上传本地指定分支到远程仓库</span>
<span class="token function">git</span> push <span class="token punctuation">[</span>remote<span class="token punctuation">]</span> <span class="token punctuation">[</span>branch<span class="token punctuation">]</span>

<span class="token comment"># 强行推送当前分支到远程仓库，即使有冲突</span>
<span class="token function">git</span> push <span class="token punctuation">[</span>remote<span class="token punctuation">]</span> <span class="token parameter variable">--force</span>

<span class="token comment"># 推送所有分支到远程仓库</span>
<span class="token function">git</span> push <span class="token punctuation">[</span>remote<span class="token punctuation">]</span> <span class="token parameter variable">--all</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="撤销" tabindex="-1"><a class="header-anchor" href="#撤销" aria-hidden="true">#</a> 撤销</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 恢复暂存区的指定文件到工作区</span>
<span class="token function">git</span> checkout <span class="token punctuation">[</span>file<span class="token punctuation">]</span>

<span class="token comment"># 恢复某个commit的指定文件到暂存区和工作区</span>
<span class="token function">git</span> checkout <span class="token punctuation">[</span>commit<span class="token punctuation">]</span> <span class="token punctuation">[</span>file<span class="token punctuation">]</span>

<span class="token comment"># 恢复暂存区的所有文件到工作区</span>
<span class="token function">git</span> checkout <span class="token builtin class-name">.</span>

<span class="token comment"># 撤销添加到暂存区的文件，这样文件就回到了工作区</span>
<span class="token function">git</span> reset HEAD <span class="token function">file</span>

<span class="token comment"># 重置暂存区的指定文件，与上一次commit保持一致，但工作区不变</span>
<span class="token function">git</span> reset <span class="token punctuation">[</span>file<span class="token punctuation">]</span>

<span class="token comment"># 重置暂存区与工作区，与上一次commit保持一致</span>
<span class="token function">git</span> reset <span class="token parameter variable">--hard</span>

<span class="token comment"># 返回上一版本，丢弃当前提交的一个版本，如果错误的删除了，可以使用 git reflog 获取到最后的提交hash值，然后使用 git merge hash_code 回退到上一个提交</span>
<span class="token function">git</span> reset <span class="token parameter variable">--hard</span> HEAD^

<span class="token comment"># 重置当前分支的指针为指定commit，同时重置暂存区，但工作区不变</span>
<span class="token function">git</span> reset <span class="token punctuation">[</span>commit<span class="token punctuation">]</span>

<span class="token comment"># 重置当前分支的HEAD为指定commit，同时重置暂存区和工作区，与指定commit一致</span>
<span class="token function">git</span> reset <span class="token parameter variable">--hard</span> <span class="token punctuation">[</span>commit<span class="token punctuation">]</span>

<span class="token comment"># 重置当前HEAD为指定commit，但保持暂存区和工作区不变</span>
<span class="token function">git</span> reset <span class="token parameter variable">--keep</span> <span class="token punctuation">[</span>commit<span class="token punctuation">]</span>

<span class="token comment"># 新建一个commit，用来撤销指定commit</span>
<span class="token comment"># 后者的所有变化都将被前者抵消，并且应用到当前分支</span>
<span class="token function">git</span> revert <span class="token punctuation">[</span>commit<span class="token punctuation">]</span>

<span class="token comment"># 撤销上一个提交，使用 git revert 当作撤销已经提交的更改，而 git reset HEAD 用来撤销没有提交的更改。</span>
<span class="token function">git</span> revert HEAD
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="reset-的模式" tabindex="-1"><a class="header-anchor" href="#reset-的模式" aria-hidden="true">#</a> Reset 的模式</h3><p><code>git reset</code> 指令可以搭配参数使用，常见的三个参数，分别是 <code>--mixed</code>、<code>--soft</code> 以及 <code>--hard</code>，不同的参数执行之后会有稍微不太一样的结果。</p><h4 id="mixed-模式" tabindex="-1"><a class="header-anchor" href="#mixed-模式" aria-hidden="true">#</a> <code>mixed</code> 模式</h4><p><code>--mixed</code> 是默认的参数，如果没有特别的参数，<code>git reset</code> 指令将会使用 <code>--mixed</code> 模式。这个模式会把暂存区的档案丟掉，但不會动到工作目录的档案，也就是说 Commit 拆出來的档案会留在工作目录，但不会留在暂存区。</p><h3 id="soft-模式" tabindex="-1"><a class="header-anchor" href="#soft-模式" aria-hidden="true">#</a> soft 模式</h3><p><code>--soft</code> 模式下的 reset，工作目录跟暂存区的档案都不会被丟掉，所以看起來就只有 HEAD 的移动而已。也因此 Commit 拆出來的文件会直接放在暂存区。</p><h3 id="hard-模式" tabindex="-1"><a class="header-anchor" href="#hard-模式" aria-hidden="true">#</a> hard 模式</h3><p><code>--hard</code> 模式下，不管是工作目录以及暂存区的文件都会丟掉。<strong>该模式不建议在公共分支下操作。</strong> 如下表格：</p><table><thead><tr><th>模式</th><th>mixed 模式（预设）</th><th>soft 模式</th><th>hard 模式</th></tr></thead><tbody><tr><td>工作目录</td><td>不变</td><td>不变</td><td>丟掉</td></tr><tr><td>暂存区</td><td>丟掉</td><td>不变</td><td>丟掉</td></tr></tbody></table><p>如果上面的说明不容易想像到底发生什么事，只要记住这些不同的模式，将会决定「Commit 拆出來的那些文件何去何从」。</p><table><thead><tr><th>模式</th><th>mixed 模式（预设）</th><th>soft 模式</th><th>hard 模式</th></tr></thead><tbody><tr><td>Commit 拆出來的文件</td><td>丟回工作目录</td><td>丟回暂存区</td><td>直接丟掉</td></tr></tbody></table><h2 id="储藏工作区" tabindex="-1"><a class="header-anchor" href="#储藏工作区" aria-hidden="true">#</a> 储藏工作区</h2><p>工作途中，我们在A分支工作，当前任务未完成，没有添加到暂存区，但是需要紧急修复bug，使用</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> stash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>储藏现场，然后切换到需要修复bug的分支B。接着，创建修复bug的分支C，完成修复任务，回到B分支，合并C分支，删除C分支。</p><p>回到我们正在工作的A分支：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> checkout A
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看工作现场</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> stash list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用下面的命令恢复工作现场</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> stash pop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>此时会恢复并且删除stash的内容。</p><p>不删除stash内容？</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> stash apply <span class="token operator">&lt;</span>指定stash，可以多次stash<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>只执行恢复操作。</p><p>但是以后想删除？</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> stash drop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>执行删除stash内容的操作。</p><h2 id="文件打包" tabindex="-1"><a class="header-anchor" href="#文件打包" aria-hidden="true">#</a> 文件打包</h2><h3 id="查看帮助" tabindex="-1"><a class="header-anchor" href="#查看帮助" aria-hidden="true">#</a> 查看帮助</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token function">git</span> archive <span class="token punctuation">[</span>options<span class="token punctuation">]</span> <span class="token operator">&lt;</span>tree-ish<span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token operator">&lt;</span>path<span class="token operator">&gt;</span><span class="token punctuation">..</span>.<span class="token punctuation">]</span>
 <span class="token parameter variable">--format</span> <span class="token operator">&lt;</span>fmt<span class="token operator">&gt;</span>        archive <span class="token function">format</span>
 <span class="token parameter variable">--prefix</span> <span class="token operator">&lt;</span>prefix<span class="token operator">&gt;</span>     prepend prefix to each pathname <span class="token keyword">in</span> the archive
 -o, <span class="token parameter variable">--output</span> <span class="token operator">&lt;</span>file<span class="token operator">&gt;</span>   <span class="token function">write</span> the archive to this <span class="token function">file</span>
 <span class="token parameter variable">-0</span>                    store only
 <span class="token parameter variable">-1</span>                    compress faster
 <span class="token parameter variable">-9</span>                    compress better
 -l, <span class="token parameter variable">--list</span>            list supported archive formats
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看支持的归档格式" tabindex="-1"><a class="header-anchor" href="#查看支持的归档格式" aria-hidden="true">#</a> 查看支持的归档格式</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> archive <span class="token parameter variable">--list</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>运行完上面的命令，可以看到支持的归档格式有：<code>tar</code>、<code>tgz</code>、<code>tar.gz</code>和<code>zip</code>。</p><h3 id="导出" tabindex="-1"><a class="header-anchor" href="#导出" aria-hidden="true">#</a> 导出</h3><p>创建一个包含当前最新提交内容的<code>tar.gz</code>归档文件分支，并将其解压到<code>/tmp/projectName</code>目录中。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> archive <span class="token parameter variable">--format</span><span class="token operator">=</span>tar.gz <span class="token parameter variable">--prefix</span><span class="token operator">=</span>projectName/ HEAD <span class="token operator">|</span> <span class="token punctuation">(</span>cd /tmp/ <span class="token operator">&amp;&amp;</span> <span class="token function">tar</span> xf -<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 导出最新的版本库</span>
<span class="token function">git</span> archive <span class="token parameter variable">-o</span> <span class="token punctuation">..</span>/latest.zip HEAD

<span class="token comment"># 通过hash值导出指定提交记录</span>
<span class="token function">git</span> archive <span class="token parameter variable">-o</span> <span class="token punctuation">..</span>/git-1.4.0.tar hashCode

<span class="token comment"># 导出一个目录</span>
<span class="token function">git</span> archive <span class="token parameter variable">-o</span> <span class="token punctuation">..</span>/git-1.4.0-docs.zip  HEAD:Documentation/

<span class="token comment"># 导出为tar.gz格式</span>
<span class="token function">git</span> archive 8996b47 <span class="token operator">|</span> <span class="token function">gzip</span> <span class="token operator">&gt;</span> <span class="token punctuation">..</span>/git-1.4.0.tar.gz

<span class="token comment"># 导出最后一次提交修改过的文件</span>
<span class="token function">git</span> archive <span class="token parameter variable">-o</span> <span class="token punctuation">..</span>/updated.zip HEAD <span class="token variable"><span class="token variable">$(</span><span class="token function">git</span> <span class="token function">diff</span> --name-only HEAD^<span class="token variable">)</span></span>

<span class="token comment"># 导出tag</span>
<span class="token function">git</span> archive <span class="token parameter variable">--format</span><span class="token operator">=</span>tar.gz <span class="token number">1.0</span> <span class="token operator">|</span> <span class="token function">gzip</span> <span class="token operator">&gt;</span> v1.0.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接" aria-hidden="true">#</a> 参考链接</h2>`,80),k={href:"https://www.jianshu.com/p/f19d6b690a7e",target:"_blank",rel:"noopener noreferrer"},h={href:"https://gitbook.tw/",target:"_blank",rel:"noopener noreferrer"},g={href:"https://github.com/geeeeeeeeek/git-recipes",target:"_blank",rel:"noopener noreferrer"};function f(i,x){const a=c("ExternalLinkIcon");return l(),p("div",null,[r,u,m,n("img",{src:i.$withBase("/images/tools/git/git-command-list/git-remote-repository-workspace.png"),alt:""},null,8,v),b,n("ul",null,[n("li",null,[n("p",null,[n("a",k,[s("Git进阶使用笔记"),e(a)])])]),n("li",null,[n("p",null,[n("a",h,[s("為你自己學 Git"),e(a)])])]),n("li",null,[n("p",null,[n("a",g,[s("Git 菜单"),e(a)])])])])])}const y=t(d,[["render",f],["__file","git-command-list.html.vue"]]);export{y as default};
