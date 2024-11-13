import{_ as i,M as l,p as r,q as c,R as n,t as e,N as s,a1 as t}from"./framework-ff09ffed.js";const d={},u=n("h1",{id:"sublime代码规范检查插件",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#sublime代码规范检查插件","aria-hidden":"true"},"#"),e(" Sublime代码规范检查插件")],-1),p={href:"https://packagecontrol.io/packages/SublimeLinter",target:"_blank",rel:"noopener noreferrer"},b={href:"http://eslint.cn/",target:"_blank",rel:"noopener noreferrer"},h={href:"https://packagecontrol.io/packages/SublimeLinter-contrib-standard",target:"_blank",rel:"noopener noreferrer"},m=t(`<h2 id="安装sublime-linter-和-sublime-linter-contrib-standard" tabindex="-1"><a class="header-anchor" href="#安装sublime-linter-和-sublime-linter-contrib-standard" aria-hidden="true">#</a> 安装Sublime Linter 和 Sublime Linter-contrib-standard</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> standard
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,2),_=n("code",null,"Command + Shift + p",-1),k=n("code",null,"Package Control:Install Package",-1),v=n("code",null,"SublimeLinter",-1),f=n("strong",null,"eslint",-1),g=n("code",null,"SublimeLinter-eslint",-1),S={href:"https://github.com/Flet/SublimeLinter-contrib-standard",target:"_blank",rel:"noopener noreferrer"},x=t(`<h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><blockquote><p><strong>注意：</strong> 如果您跟我一样使用MAC系统的时候安装了<code>zsh</code>、<code>oh-my-zsh</code>和<code>.nvm</code>管理NodeJS，那么需要将<code>~/.zshrc</code>中关于加载<code>nvm</code>的代码注释掉。</p></blockquote><p>另外再建立<code>nodejs</code>和<code>standard</code>对应的软链接</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ln</span> <span class="token parameter variable">-s</span> /Users/xiaoluo/.nvm/versions/node/v<span class="token punctuation">{</span>YOUR_NVM_VERSION<span class="token punctuation">}</span>/bin/node /usr/local/bin/node
<span class="token function">ln</span> <span class="token parameter variable">-s</span> /Users/xiaoluo/.nvm/versions/node/v<span class="token punctuation">{</span>YOUR_NVM_VERSION<span class="token punctuation">}</span>/bin/standard /usr/local/bin/standard
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>通过上面的配置之后，再配置Sublime Linter中的配置，如下：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;paths&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;linux&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;osx&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;/usr/local/bin&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;windows&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="自动格式化sublime-standard-format" tabindex="-1"><a class="header-anchor" href="#自动格式化sublime-standard-format" aria-hidden="true">#</a> 自动格式化sublime-standard-format</h2><p>使用sublime升级<code>StandardFormat</code>插件，并勾选<code>StandardFormat</code>配置中的<code>auto save</code>。</p>`,8),L=["src"],q=n("h2",{id:"参考地址",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#参考地址","aria-hidden":"true"},"#"),e(" 参考地址")],-1),N={href:"http://echizen.github.io/tech/2016/08-07-code-space-standard",target:"_blank",rel:"noopener noreferrer"},E={href:"https://hk.saowen.com/a/3fbc5f6ab048863c1d3a95b5808bfca821df16a50435ce867fc3fabc072332ca",target:"_blank",rel:"noopener noreferrer"},V={href:"https://keelii.github.io/2017/04/29/sublime-text-3-configure-eslint/",target:"_blank",rel:"noopener noreferrer"};function y(o,C){const a=l("ExternalLinkIcon");return r(),c("div",null,[u,n("p",null,[n("a",p,[e("Sublime Linter"),s(a)]),e(" 是一个代码检查框架插件，功能非常强大，支持各种语言的检查。但它本身并没有代码检查的功能，需要借助 "),n("a",b,[e("ESLint"),s(a)]),e(" 这样的特定语言检查支持。我们只需要使用对应的 "),n("a",h,[e("Sublime Linter-contrib-eslint"),s(a)]),e(" 插件即可。")]),m,n("p",null,[e("然后在 Sublime text 中 "),_,e(" > "),k,e(" 里面搜索关键词 "),v,e("。然后再搜索 "),f,e(" 找到 "),g,e(" 将二者一并完成安装，更多安装步骤"),n("a",S,[e("查看这里"),s(a)]),e("。")]),x,n("img",{src:o.$withBase("/images/tools/sublime/sublime-format-auto-save.png"),alt:""},null,8,L),q,n("ul",null,[n("li",null,[n("p",null,[n("a",N,[e("代码规范-从空格到代码格式化"),s(a)])])]),n("li",null,[n("p",null,[n("a",E,[e("Sublime Text 中配置 Eslint 代碼檢查和自動修復"),s(a)])])]),n("li",null,[n("p",null,[n("a",V,[e("Sublime Text 3 配置 ESLint 代码检查"),s(a)])])])])])}const R=i(d,[["render",y],["__file","sublime-sublimelinter-and-sublimelinter-contrib-eslint-plugin.html.vue"]]);export{R as default};