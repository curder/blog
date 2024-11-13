import{_ as o,M as l,p as i,q as c,R as s,t as a,N as e,a1 as t}from"./framework-ff09ffed.js";const p={},r=s("h1",{id:"安装oh-my-zsh",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#安装oh-my-zsh","aria-hidden":"true"},"#"),a(" 安装Oh-My-Zsh")],-1),h={href:"https://github.com/ohmyzsh/ohmyzsh",target:"_blank",rel:"noopener noreferrer"},d=s("code",null,"zsh",-1),u=s("code",null,"SHELL",-1),m=t('<h2 id="安装zsh" tabindex="-1"><a class="header-anchor" href="#安装zsh" aria-hidden="true">#</a> 安装zsh</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> <span class="token function">zsh</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="配置zsh" tabindex="-1"><a class="header-anchor" href="#配置zsh" aria-hidden="true">#</a> 配置zsh</h2><p>切换当前用户的bash为<code>zsh</code>。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>chsh <span class="token parameter variable">-s</span> <span class="token variable"><span class="token variable">`</span><span class="token function">which</span> <span class="token function">zsh</span><span class="token variable">`</span></span> <span class="token comment"># 切换当前用户为zsh</span>\nchsh <span class="token parameter variable">-s</span> <span class="token variable"><span class="token variable">`</span><span class="token function">which</span> <span class="token function">zsh</span><span class="token variable">`</span></span> deployer <span class="token comment"># 指定deployer用户修改默认shell为zsh</span>\nchsh <span class="token parameter variable">-s</span> /bin/bash <span class="token comment"># 切换回bash</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',5),b={id:"安装-oh-my-zsh",tabindex:"-1"},v=s("a",{class:"header-anchor",href:"#安装-oh-my-zsh","aria-hidden":"true"},"#",-1),k={href:"https://github.com/ohmyzsh/ohmyzsh",target:"_blank",rel:"noopener noreferrer"},g=t(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sh</span> <span class="token parameter variable">-c</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh<span class="token variable">)</span></span>&quot;</span> <span class="token comment"># 通过curl进行安装</span>
<span class="token comment"># 或者通过wget进行安装</span>
<span class="token function">sh</span> <span class="token parameter variable">-c</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">wget</span> https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh <span class="token parameter variable">-O</span> -<span class="token variable">)</span></span>&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置-oh-my-zsh" tabindex="-1"><a class="header-anchor" href="#配置-oh-my-zsh" aria-hidden="true">#</a> 配置 Oh-My-Zsh</h3><p>Oh-My-Zsh 的默认配置在 <code>~/.zshrc</code> 文件中配置可以配置，修改默认的基本配置。</p>`,3),z=s("strong",null,"注意：",-1),_=s("code",null,"~/.zshrc",-1),y={href:"https://github.com/ohmyzsh/ohmyzsh/blob/master/templates/zshrc.zsh-template",target:"_blank",rel:"noopener noreferrer"},f=t(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">ZSH</span><span class="token operator">=</span><span class="token environment constant">$HOME</span>/.oh-my-zsh
<span class="token assign-left variable">ZSH_THEME</span><span class="token operator">=</span><span class="token string">&quot;tjkirch&quot;</span> <span class="token comment"># ys</span>
<span class="token assign-left variable">plugins</span><span class="token operator">=</span><span class="token punctuation">(</span>git autojump zsh-autosuggestions zsh-syntax-highlighting<span class="token punctuation">)</span> <span class="token comment"># 开启常用插件,其中 git 是默认自带，其他三个插件的安装在下面有介绍</span>
<span class="token builtin class-name">source</span> <span class="token variable">$ZSH</span>/oh-my-zsh.sh

<span class="token builtin class-name">export</span> <span class="token assign-left variable">UPDATE_ZSH_DAYS</span><span class="token operator">=</span><span class="token number">30</span> <span class="token comment"># 30天检查更新 zsh 并提示是否更新</span>
<span class="token assign-left variable">HIST_STAMPS</span><span class="token operator">=</span><span class="token string">&quot;yyyy-mm-dd&quot;</span>  <span class="token comment"># 历史记录时间格式</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">LANG</span></span><span class="token operator">=</span>en_US.UTF-8   <span class="token comment"># 语言</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="插件管理" tabindex="-1"><a class="header-anchor" href="#插件管理" aria-hidden="true">#</a> 插件管理</h3><p>安装以下插件的時候，請确定已安装好 <code>Oh My Zsh</code> ，且目前正在使用的 <code>Shell</code> 是 <code>Zsh</code>。</p><blockquote><p>Oh-My-Zsh 自带的插件一般放置在目录 <code>~/.oh-my-zsh/plugins</code> 目录下，而通过互联网也可以下载更多的插件一般放置在 <code>~/.oh-my-zsh/custom/plugins</code> 目录下。</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> autojump autojump-zsh

<span class="token comment"># 安装 autosuggestions 插件(根据命令历史输入时的命令进行输入提示的插件，输入指令时，如果看到灰色字的自动完成显示，可以按下 ➔ 來采用。)</span>
<span class="token function">git</span> clone git://github.com/zsh-users/zsh-autosuggestions.git <span class="token variable">\${ZSH_CUSTOM<span class="token operator">:-</span>~<span class="token operator">/</span>.oh-my-zsh<span class="token operator">/</span>custom}</span>/plugins/zsh-autosuggestions

<span class="token comment"># 安装 zsh-syntax-highlighting 插件</span>
<span class="token function">git</span> clone git://github.com/zsh-users/zsh-syntax-highlighting.git <span class="token variable">\${ZSH_CUSTOM<span class="token operator">:-</span>~<span class="token operator">/</span>.oh-my-zsh<span class="token operator">/</span>custom}</span>/plugins/zsh-syntax-highlighting
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function x(S,Z){const n=l("ExternalLinkIcon");return i(),c("div",null,[r,s("p",null,[s("a",h,[a("Oh My Zsh"),e(n)]),a(" 的简单配置能让我们快速使用 "),d,a(" 这个 "),u,a(" 给开发者带来很多愉悦，节省时间。")]),m,s("h2",b,[v,a(" 安装 "),s("a",k,[a("Oh-My-Zsh"),e(n)])]),g,s("blockquote",null,[s("p",null,[z,a(" 如果配置文件 "),_,a(" 不存在则通过手动创建它，默认的配置文件在 "),s("a",y,[a("github.com/ohmyzsh/ohmyzsh/blob/master/templates/zshrc.zsh-template"),e(n)]),a("。")])]),f])}const q=o(p,[["render",x],["__file","centos-7-install-oh-my-zsh.html.vue"]]);export{q as default};