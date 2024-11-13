import{_ as p,M as o,p as c,q as l,R as a,t as s,N as e,a1 as t}from"./framework-ff09ffed.js";const r={},i=a("h1",{id:"使用-rsync-同步部分文件或目录",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#使用-rsync-同步部分文件或目录","aria-hidden":"true"},"#"),s(" 使用 rsync 同步部分文件或目录")],-1),u={href:"https://download.samba.org/pub/rsync/rsync.1",target:"_blank",rel:"noopener noreferrer"},d=t(`<p>在实际开发中使用 <code>rsync</code> 同步文件时可能会遇到如下场景：</p><ol><li>排除某些目录或文件</li><li>仅同步目录结构</li><li>同步指定目录或文件</li></ol><h2 id="排除某些目录或者文件" tabindex="-1"><a class="header-anchor" href="#排除某些目录或者文件" aria-hidden="true">#</a> 排除某些目录或者文件</h2><p>在使用 rsync 同步命令时，允许指定 <code>--exclude=&quot;PATTERN_OR_FILENAME&quot;</code> 参数支持指定排除的规则或文件名。</p><p>默认情况下会同步所有文件，所以如果需求仅仅是需要排除项目下的文件或者目录的话直接使用 <code>--exclude</code> 天际匹配规则即可。</p><p>需求：同步当前项目的除 <code>README.md</code> 文件和 <code>public</code> 目录之外的所有目录和文件。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">rsync</span> <span class="token parameter variable">-av</span> <span class="token parameter variable">--exclude</span><span class="token operator">=</span><span class="token string">&quot;README.md&quot;</span> <span class="token parameter variable">--exclude</span><span class="token operator">=</span><span class="token string">&quot;public&quot;</span> src_dir/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><ul><li>使用 <code>--exclude</code> 排除 <code>README.md</code> 文件和 <code>node_modules</code> 目录的同步</li><li>不提供同步的目标文件路径执行命令则仅展示同步的文件列表</li></ul></blockquote><h2 id="仅同步目录结构" tabindex="-1"><a class="header-anchor" href="#仅同步目录结构" aria-hidden="true">#</a> 仅同步目录结构</h2><p>使用 <code>--include=&quot;PATTERN_OR_FILENAME&quot;</code> 参数支持指定需要同步的规则或者文件名，配合 <code>--exclude=&quot;PARTTERN_OR_FILENAME&quot;</code> 则可以限定仅同步目录结构。</p><p>比如有时需要创建一个目录，其目标目录层次结构与源目录结构一样，但是不需要目录中的文件，可以使用 <code>rsync</code> 命令快速完成：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 仅同步 public 目录</span>
<span class="token function">rsync</span> <span class="token parameter variable">-av</span> <span class="token parameter variable">--include</span><span class="token operator">=</span><span class="token string">&quot;public&quot;</span> <span class="token parameter variable">--exclude</span><span class="token operator">=</span><span class="token string">&quot;*&quot;</span> src_dir/

<span class="token comment"># 同步多个同级目录 public 和 config</span>
<span class="token function">rsync</span> <span class="token parameter variable">-av</span> <span class="token parameter variable">--include</span><span class="token operator">=</span><span class="token string">&quot;public&quot;</span> <span class="token parameter variable">--include</span><span class="token operator">=</span><span class="token string">&quot;config&quot;</span> <span class="token parameter variable">--exclude</span><span class="token operator">=</span><span class="token string">&quot;*&quot;</span> src_dir/

<span class="token comment"># 同步 public 和子目录 css 目录</span>
<span class="token function">rsync</span> <span class="token parameter variable">-av</span> <span class="token parameter variable">--include</span><span class="token operator">=</span><span class="token string">&quot;public&quot;</span> <span class="token parameter variable">--include</span><span class="token operator">=</span><span class="token string">&quot;public/css&quot;</span> <span class="token parameter variable">--exclude</span><span class="token operator">=</span><span class="token string">&quot;*&quot;</span> src_dir/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="同步指定目录或者文件" tabindex="-1"><a class="header-anchor" href="#同步指定目录或者文件" aria-hidden="true">#</a> 同步指定目录或者文件</h2><p>实际开发中更多的使用场景是仅仅同步某些目录以及目录下的所有文件。通过 <code>--include</code> 配合 <code>--exclude</code> 也能完成更加灵活的过滤规则。</p><h3 id="同步一级目录" tabindex="-1"><a class="header-anchor" href="#同步一级目录" aria-hidden="true">#</a> 同步一级目录</h3><p>要求：同步项目目录下的 <code>public</code> 目录。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># --exclude=&quot;/*&quot; 规则排除了 src_dir/ 目录下，除了 public 目录外所有的文件和子目录</span>
<span class="token comment"># 递归扫描 public 目录时，因不命中任何排除规则，所有子目录和文件都被默认包含</span>
<span class="token function">rsync</span> <span class="token parameter variable">-av</span> <span class="token parameter variable">--include</span><span class="token operator">=</span><span class="token string">&quot;public&quot;</span> <span class="token parameter variable">--exclude</span><span class="token operator">=</span><span class="token string">&quot;/*&quot;</span> src_dir/

<span class="token comment"># --include=&quot;public&quot; 匹配 public 目录</span>
<span class="token comment"># --include=&quot;public/**&quot; 匹配 public 目录下所有的子目录和文件的路径。</span>
<span class="token comment"># 其余所有的路径被 --exclude=&quot;*&quot; 匹配并排除。</span>
<span class="token function">rsync</span> <span class="token parameter variable">-av</span> <span class="token parameter variable">--include</span><span class="token operator">=</span><span class="token string">&quot;public&quot;</span> <span class="token parameter variable">--include</span><span class="token operator">=</span><span class="token string">&quot;public/**&quot;</span> <span class="token parameter variable">--exclude</span><span class="token operator">=</span><span class="token string">&quot;*&quot;</span> src_dir/

<span class="token comment"># --include=&quot;public/***&quot; 匹配 public 目录以及其所有子目录和文件</span>
<span class="token comment"># 其余所有的路径被 --exclude=&quot;*&quot; 匹配并排除。</span>
<span class="token function">rsync</span> <span class="token parameter variable">-av</span> <span class="token parameter variable">--include</span><span class="token operator">=</span><span class="token string">&quot;public/***&quot;</span> <span class="token parameter variable">--exclude</span><span class="token operator">=</span><span class="token string">&quot;*&quot;</span> src_dir/

<span class="token comment"># 使用修饰符 ! 取反，排除了 public 目录以及其所有子目录和文件路径之外的路径</span>
<span class="token comment"># 相当于只同步 public 目录下所有的子目录和文件路径</span>
<span class="token function">rsync</span> <span class="token parameter variable">-av</span> <span class="token parameter variable">-f</span> <span class="token string">&quot;-! public/***&quot;</span> src_dir/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),v={href:"https://download.samba.org/pub/rsync/rsync.1#opt--filter",target:"_blank",rel:"noopener noreferrer"},m=a("code",null,"-f",-1),k=a("code",null,"--include",-1),b=a("code",null,"--exclude",-1),q=a("code",null,"-f",-1),h=t("<p>其中修饰符 <code>!</code> 表示对匹配结果进行取反，把匹配成功当做匹配失败，把匹配失败当做匹配成功</p><ul><li><p><code>--include=&quot;public&quot;</code> 转化为过滤规则为：<code>-f &quot;+ public&quot;</code>，其中 <code>+</code> 表示包含</p></li><li><p><code>--exclude=&quot;*&quot;</code> 转化为过滤规则为：<code>-f &quot;- *&quot;</code>，其中 <code>-</code> 表示排除</p></li></ul>",2),g=t(`<h3 id="仅同步多个子目录" tabindex="-1"><a class="header-anchor" href="#仅同步多个子目录" aria-hidden="true">#</a> 仅同步多个子目录</h3><p>要求：仅同步项目目录下的 <code>public</code> 和 <code>config</code> 所有文件。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># --exclude=&quot;/*&quot; 规则排除了 src_dir/ 目录下，除了 public 和 config 目录外所有的文件和子目录</span>
<span class="token comment"># 递归扫描 public 目录时，因不命中任何排除规则，所有子目录和文件都被默认包含</span>
<span class="token function">rsync</span> <span class="token parameter variable">-av</span> <span class="token parameter variable">--include</span><span class="token operator">=</span><span class="token string">&quot;public&quot;</span> <span class="token parameter variable">--include</span><span class="token operator">=</span><span class="token string">&quot;config&quot;</span> <span class="token parameter variable">--exclude</span><span class="token operator">=</span><span class="token string">&quot;/*&quot;</span> src_dir/

<span class="token comment"># --include=&quot;public&quot; 匹配 public 目录</span>
<span class="token comment"># --include=&quot;public/**&quot; 匹配 public 目录下所有的子目录和文件的路径</span>
<span class="token comment"># --include=&quot;config&quot; 匹配 config 目录</span>
<span class="token comment"># --include=&quot;config/**&quot; 匹配 config 目录下所有的子目录和文件的路径</span>
<span class="token comment"># 其余所有的路径被 --exclude=&quot;*&quot; 匹配并排除</span>
<span class="token function">rsync</span> <span class="token parameter variable">-av</span> <span class="token parameter variable">--include</span><span class="token operator">=</span><span class="token string">&quot;public&quot;</span> <span class="token parameter variable">--include</span><span class="token operator">=</span><span class="token string">&quot;public/**&quot;</span> <span class="token punctuation">\\</span>
      <span class="token parameter variable">--include</span><span class="token operator">=</span><span class="token string">&quot;config&quot;</span> <span class="token parameter variable">--include</span><span class="token operator">=</span><span class="token string">&quot;config/**&quot;</span> <span class="token punctuation">\\</span>
      <span class="token parameter variable">--exclude</span><span class="token operator">=</span><span class="token string">&quot;*&quot;</span> <span class="token punctuation">\\</span>
      src_dir/

<span class="token comment"># --include=&quot;public/***&quot; 匹配 public 目录下所有的子目录和文件的路径</span>
<span class="token comment"># --include=&quot;config/***&quot; 匹配 config 目录下所有的子目录和文件的路径</span>
<span class="token comment"># 其余所有的路径被 --exclude=&quot;*&quot; 匹配并排除。</span>
<span class="token function">rsync</span> <span class="token parameter variable">-av</span> <span class="token parameter variable">--include</span><span class="token operator">=</span><span class="token string">&quot;public/***&quot;</span> <span class="token parameter variable">--include</span><span class="token operator">=</span><span class="token string">&quot;config/***&quot;</span> <span class="token parameter variable">--exclude</span><span class="token operator">=</span><span class="token string">&quot;*&quot;</span> src_dir/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="仅同步更深层的子目录" tabindex="-1"><a class="header-anchor" href="#仅同步更深层的子目录" aria-hidden="true">#</a> 仅同步更深层的子目录</h3><p>要求：仅同步项目目录下的 <code>app/Http</code> 目录下的所有文件。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># --include=&quot;app&quot; 规则包含app</span>
<span class="token comment"># --include=&quot;app/Http/***&quot; 规则包含 app/Http 目录及所有子目录和文件</span>
<span class="token comment"># 其余路径由 --exclude=&quot;*&quot; 排除</span>
<span class="token function">rsync</span> <span class="token parameter variable">-av</span> <span class="token parameter variable">--include</span><span class="token operator">=</span><span class="token string">&quot;app&quot;</span> <span class="token parameter variable">--include</span><span class="token operator">=</span><span class="token string">&quot;app/Http/***&quot;</span> <span class="token parameter variable">--exclude</span><span class="token operator">=</span><span class="token string">&quot;*&quot;</span> src_dir/

<span class="token comment"># --include=&quot;app&quot; 规则包含app</span>
<span class="token comment"># --include=&quot;app/Http/***&quot; 规则包含 app/Http 目录及所有子目录和文件</span>
<span class="token comment"># --exclude=&quot;/*&quot; 规则排除了 src_dir/ 目录下，除了 app 目录外所有的文件和子目录</span>
<span class="token comment"># --exclude=&quot;*/*&quot; 规则排除了 src_dir/ 目录下，除了 app/Http 目录外所有的文件和子目录</span>
<span class="token function">rsync</span> <span class="token parameter variable">-av</span> <span class="token parameter variable">--include</span><span class="token operator">=</span><span class="token string">&quot;app&quot;</span> <span class="token parameter variable">--include</span><span class="token operator">=</span><span class="token string">&quot;app/Http/***&quot;</span> <span class="token parameter variable">--exclude</span><span class="token operator">=</span><span class="token string">&quot;/*&quot;</span> <span class="token parameter variable">--exclude</span><span class="token operator">=</span><span class="token string">&quot;*/*&quot;</span> src_dir/

<span class="token comment"># -f &quot;-! app/***&quot; 规则使用取反，只保留 app 子目录</span>
<span class="token comment"># --include=&quot;app/Http/&quot; 包含 app/Http/ 目录，其余二级子目录由规则 --exclude&quot;/*/*&quot; 排除</span>
<span class="token function">rsync</span> <span class="token parameter variable">-av</span> <span class="token parameter variable">-f</span> <span class="token string">&quot;-! app/***&quot;</span> <span class="token parameter variable">--include</span><span class="token operator">=</span><span class="token string">&quot;app/Http/&quot;</span> <span class="token parameter variable">--exclude</span><span class="token operator">=</span><span class="token string">&quot;/*/*&quot;</span> src_dir/

<span class="token comment"># --include=&quot;app&quot; 规则包含app</span>
<span class="token comment"># -f &quot;-! app/Http/***&quot; 使用修饰符 ! 取反，排除了 app/Http 目录以及其所有子目录和文件路径之外的路径</span>
<span class="token comment"># --exclude=&quot;/*&quot; 规则排除了 src_dir/ 目录下，除了 app 目录外所有的文件和子目录</span>
<span class="token function">rsync</span> <span class="token parameter variable">-av</span> <span class="token parameter variable">--include</span><span class="token operator">=</span><span class="token string">&quot;app&quot;</span> <span class="token parameter variable">-f</span> <span class="token string">&quot;-! app/Http/***&quot;</span> <span class="token parameter variable">--exclude</span><span class="token operator">=</span><span class="token string">&quot;/*&quot;</span> src_dir/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="仅同步多个深层级的子目录" tabindex="-1"><a class="header-anchor" href="#仅同步多个深层级的子目录" aria-hidden="true">#</a> 仅同步多个深层级的子目录</h3><p>要求：仅同步项目目录下的 <code>app/Http</code> 和 <code>storage/app</code> 目录下的所有文件。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 给深层的子目录的所有父级目录都添加包含规则，然后深层子目录添加 *** 的包含规则，最后是一条排除规则。</span>
<span class="token function">rsync</span> <span class="token parameter variable">-av</span> <span class="token punctuation">\\</span> 
      <span class="token parameter variable">--include</span><span class="token operator">=</span><span class="token string">&quot;app&quot;</span> <span class="token parameter variable">--include</span><span class="token operator">=</span><span class="token string">&quot;app/Http/***&quot;</span> <span class="token punctuation">\\</span> 
      <span class="token parameter variable">--include</span><span class="token operator">=</span><span class="token string">&quot;storage&quot;</span> <span class="token parameter variable">--include</span><span class="token operator">=</span><span class="token string">&quot;storage/app/***&quot;</span> <span class="token punctuation">\\</span>
      <span class="token parameter variable">--exclude</span><span class="token operator">=</span><span class="token string">&quot;*&quot;</span> <span class="token punctuation">\\</span>
      src_dir/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考地址" tabindex="-1"><a class="header-anchor" href="#参考地址" aria-hidden="true">#</a> 参考地址</h2>`,10),_={href:"https://download.samba.org/pub/rsync/rsync.1#PATTERN_MATCHING_RULES",target:"_blank",rel:"noopener noreferrer"},f={href:"https://zhuanlan.zhihu.com/p/441161884",target:"_blank",rel:"noopener noreferrer"},x={href:"https://blog.csdn.net/u012076529/article/details/88668772",target:"_blank",rel:"noopener noreferrer"};function y(E,H){const n=o("ExternalLinkIcon");return c(),l("div",null,[i,a("p",null,[a("a",u,[s("rsync"),e(n)]),s("是一个允许本地与本地或本地与远程之间文件的同步工具。")]),d,a("blockquote",null,[a("p",null,[s("其中 "),a("a",v,[m,e(n)]),s(" 参数允许添加多种修饰符，而 "),k,s(" 和 "),b,s(" 可以使用 "),q,s(" 参数替代。")]),h]),g,a("ul",null,[a("li",null,[a("a",_,[s("Rsync - pattern matching rules"),e(n)])]),a("li",null,[a("a",f,[s("rsync 命令过滤规则入门教程"),e(n)])]),a("li",null,[a("a",x,[s("rsync include exclude使用 选择指定目录"),e(n)])])])])}const N=p(r,[["render",y],["__file","synchronize-partial-files-or-directories-with-rsync.html.vue"]]);export{N as default};