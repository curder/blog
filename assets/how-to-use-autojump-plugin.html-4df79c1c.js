import{_ as l,M as t,p as o,q as u,R as e,t as a,N as n,a1 as i}from"./framework-96b046e1.js";const d={},c=e("h1",{id:"autojump自动跳转",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#autojump自动跳转","aria-hidden":"true"},"#"),a(" autojump自动跳转")],-1),r={href:"https://github.com/wting/autojump",target:"_blank",rel:"noopener noreferrer"},p={href:"https://github.com/robbyrussell/oh-my-zsh/wiki/Plugins-Overview#fs-jumping",target:"_blank",rel:"noopener noreferrer"},m=i(`<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><ul><li>Mac</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>brew <span class="token function">install</span> autojump
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>CentOS</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token parameter variable">-y</span> <span class="token function">install</span> autojump
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>安装完插件后，在<code>~/.bash_profile</code>文件里面添加<code>. /usr/share/autojump/autojump.bash</code>； 另外，如果当前使用的是<code>zsh</code>，那么请使用<code>yum install</code>安装对应的<code>autojump-zsh</code>插件。</p></blockquote><ul><li>Ubuntu</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>apt-get -y install autojump
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>安装完插件后，在<code>~/.zshrc</code>文件里面添加<code>. /usr/share/autojump/autojump.zsh</code>启用<code>autojump</code>插件； 内容参考<code>/usr/share/doc/autojump/README.Debian</code>文件 。</p></blockquote><p>安装完以后重启终端后一般执行<code>j</code>命令就可以正常工作。</p><h2 id="autojump-基本用法" tabindex="-1"><a class="header-anchor" href="#autojump-基本用法" aria-hidden="true">#</a> autojump 基本用法</h2><p><code>autojump</code>的工作方式很简单：它会在用户每次启动命令时记录你当前位置，并把它添加进它自身的数据库中。这样，某些目录比其它一些目录添加的次数多，这些目录一般就代表你最重要的目录，而它们的“权重”也会增大。</p><p>现在不管当前在哪个目录，都可以使用下面的语法来直接跳转到这些目录</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>autojump <span class="token punctuation">[</span>目录命令或者名称的一部分<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>注意：不需要输入完整的名称，因为会检索它自建数据库，并返回最可能的结果。</p></blockquote><ul><li>查看跟踪的所有这些变化，可以输入：</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>j <span class="token parameter variable">-s</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>添加目录</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>j <span class="token parameter variable">-a</span> <span class="token punctuation">[</span>目录名称<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>改变权重值</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>j <span class="token parameter variable">-i</span> <span class="token punctuation">[</span>权重<span class="token punctuation">]</span> <span class="token comment"># 增加当前目录权重</span>
j <span class="token parameter variable">-d</span> <span class="token punctuation">[</span>权重<span class="token punctuation">]</span> <span class="token comment"># 减低当前目录权重</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>执行上面的命令之前需要先切换到目标目录。</p></blockquote><ul><li>将不存在的目录从数据库中删除</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>j <span class="token parameter variable">--purge</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其实数据库数据保MacOSX保存在<code>~/Library/autojump/autojump.txt</code>文件中，CentOS和Ubuntu数据库权重文件保存在<code>~/.local/share/autojump/autojump.txt</code>文件中。</p><h2 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接" aria-hidden="true">#</a> 参考链接</h2>`,26),h={href:"https://linux.cn/article-3401-1.html",target:"_blank",rel:"noopener noreferrer"};function b(v,g){const s=t("ExternalLinkIcon");return o(),u("div",null,[c,e("p",null,[a("GitHub地址："),e("a",r,[a("autojump"),n(s)]),a("是一个命令行工具，它允许用户可以直接跳转到常用的目录，而不用管用户现在身在何处。")]),e("p",null,[a("与之类似的插件还有："),e("a",p,[a("fs-jumping"),n(s)])]),m,e("ul",null,[e("li",null,[e("a",h,[a("自动补完不算什么，一键直达目录才是终极神器！"),n(s)])])])])}const k=l(d,[["render",b],["__file","how-to-use-autojump-plugin.html.vue"]]);export{k as default};
