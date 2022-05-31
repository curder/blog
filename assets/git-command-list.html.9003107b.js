import{_ as t,r as c,o as l,c as o,b as n,a as e,F as p,d as s,e as d}from"./app.597d8cd2.js";const u={},r=n("h1",{id:"git\u547D\u4EE4\u6E05\u5355",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#git\u547D\u4EE4\u6E05\u5355","aria-hidden":"true"},"#"),s(" Git\u547D\u4EE4\u6E05\u5355")],-1),m=n("p",null,"Git\u4F5C\u4E3A\u5E38\u7528\u7684\u7248\u672C\u63A7\u5236\u5DE5\u5177\u4E4B\u4E00\uFF0C\u6211\u4EEC\u5E94\u8BE5\u5728\u5E73\u65F6\u7684\u5F00\u53D1\u4E2D\u591A\u4E86\u89E3\u3001\u603B\u7ED3\u4E00\u4E9B\u547D\u4EE4\uFF0C\u5C06\u80FD\u5728\u9047\u5230\u4E00\u4E9B\u5B9E\u9645\u4F7F\u7528\u8FC7\u7A0B\u4E2D\u7701\u53BB\u5F88\u591A\u65F6\u95F4\u3002",-1),v=n("p",null,"\u4E0B\u9762\u8FD9\u5F20\u56FE\u662F\u6BD4\u8F83\u597D\u7684\u4E00\u5F20\uFF1A",-1),b=["src"],k=d(`<p>\u5173\u4E8Egit\uFF0C\u9996\u5148\u9700\u8981\u4E86\u89E3\u51E0\u4E2A\u540D\u8BCD\uFF0C\u5982\u4E0B</p><ul><li><p><code>Working Directory</code> // \u5DE5\u4F5C\u533A</p></li><li><p><code>Index / Stage Area</code> // \u6682\u5B58\u533A</p></li><li><p><code>Repository</code> // \u4ED3\u5E93\u533A\uFF08\u6216\u672C\u5730\u4ED3\u5E93\uFF09</p></li><li><p><code>Remote</code> // \u8FDC\u7A0B\u4ED3</p></li></ul><p>\u5728 Git \u91CC\uFF0C\u4E3B\u8981\u53EF\u4EE5\u5206\u6210\u300C\u5DE5\u4F5C\u533A\uFF08Working Directory\uFF09\u300D\u3001\u300C\u6682\u5B58\u533A\uFF08Staging Area\uFF09\u300D\u4EE5\u53CA\u300C\u50A8\u5B58\u533A\uFF08Repository\uFF09\u300D\u4E09\u4E2A\u533A\u5757\uFF0C\u901A\u8FC7\u4E0D\u540C\u7684 Git \u6307\u4EE4\uFF0C\u53EF\u4EE5\u628A\u6587\u4EF6\u79FB\u5230\u4E0D\u540C\u7684\u533A\u57DF\uFF1A</p><ul><li><p><code>git add</code> \u6307\u4EE4\u628A\u6587\u4EF6\u4ECE\u5DE5\u4F5C\u76EE\u5F55\u79FB\u81F3\u6682\u5B58\u533A\uFF08\u6216\u7D22\u5F15\uFF09\u3002</p></li><li><p><code>git commit</code> \u6307\u4EE4\u628A\u6682\u5B58\u533A\u7684\u5167\u5BB9\u79FB\u81F3\u4ED3\u5E93\u533A\u3002</p></li></ul><h2 id="\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a> \u914D\u7F6E</h2><p>Git\u7684\u8BBE\u7F6E\u6587\u4EF6\u4E3A<code>.gitconfig</code>\uFF0C\u5B83\u53EF\u4EE5\u5728\u7528\u6237\u4E3B\u76EE\u5F55\u4E0B\uFF08\u5168\u5C40\u914D\u7F6E\uFF09\uFF0C\u4E5F\u53EF\u4EE5\u5728\u9879\u76EE\u76EE\u5F55\u4E0B\uFF08\u9879\u76EE\u914D\u7F6E\uFF09\u3002</p><p>\u914D\u7F6E\u6587\u4EF6\u7684\u4F18\u5148\u7EA7\u662F\uFF1A<code>/etc/gitconfig</code>\u3001<code>~/.gitconfig</code>\u548C \u5F53\u524D\u9879\u76EE\u76EE\u5F55\u7684config\u6587\u4EF6\uFF08\u5373<code>.git/config</code>\u6587\u4EF6\uFF09\u3002</p><p>\u8FD9\u4E09\u4E2A\u6587\u4EF6\u7684\u4F18\u5148\u7EA7\u4F9D\u6B21\u589E\u9AD8\uFF0C\u6BCF\u4E2A\u7EA7\u522B\u91CD\u5199\u524D\u4E00\u4E2A\u7EA7\u522B\u7684\u503C\u3002\u56E0\u6B64\uFF0C\u5728<code>.git/config</code>\u4E2D\u7684\u503C\u8986\u76D6\u4E86\u5728<code>/etc/gitconfig</code>\u4E2D\u7684\u540C\u4E00\u4E2A\u914D\u7F6E\u503C\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u663E\u793A\u5F53\u524D\u7684Git\u914D\u7F6E</span>
<span class="token function">git</span> config --list

<span class="token comment"># \u7F16\u8F91Git\u914D\u7F6E\u6587\u4EF6\uFF0C\u4E0D\u6307\u5B9A\u9ED8\u8BA4\u662F --local</span>
<span class="token function">git</span> config -e <span class="token punctuation">[</span>--system<span class="token operator">|</span>--global<span class="token operator">|</span>--local<span class="token punctuation">]</span>

<span class="token comment"># \u8BBE\u7F6E\u63D0\u4EA4\u4EE3\u7801\u65F6\u7684\u7528\u6237\u4FE1\u606F</span>
<span class="token function">git</span> config <span class="token punctuation">[</span>--global<span class="token punctuation">]</span> user.name <span class="token string">&quot;[name]&quot;</span>
<span class="token function">git</span> config <span class="token punctuation">[</span>--global<span class="token punctuation">]</span> user.email <span class="token string">&quot;[email address]&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u65B0\u5EFA\u4ED3\u5E93" tabindex="-1"><a class="header-anchor" href="#\u65B0\u5EFA\u4ED3\u5E93" aria-hidden="true">#</a> \u65B0\u5EFA\u4ED3\u5E93</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5728\u5F53\u524D\u76EE\u5F55\u65B0\u5EFA\u4E00\u4E2AGit\u4ED3\u5E93</span>
<span class="token function">git</span> init

<span class="token comment"># \u65B0\u5EFA\u4E00\u4E2A\u76EE\u5F55\uFF0C\u5E76\u5C06\u5176\u521D\u59CB\u5316\u4E3AGit\u4ED3\u5E93</span>
<span class="token function">git</span> init <span class="token punctuation">[</span>project-name<span class="token punctuation">]</span>

<span class="token comment"># \u4E0B\u8F7D\u4E00\u4E2A\u9879\u76EE\u548C\u5B83\u7684\u6574\u4E2A\u4EE3\u7801\u5386\u53F2</span>
<span class="token function">git</span> clone <span class="token punctuation">[</span>ssh/https/file:///<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u589E\u52A0-\u5220\u9664\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u589E\u52A0-\u5220\u9664\u6587\u4EF6" aria-hidden="true">#</a> \u589E\u52A0/\u5220\u9664\u6587\u4EF6</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u6DFB\u52A0\u6307\u5B9A\u6587\u4EF6\u5230\u6682\u5B58\u533A</span>
<span class="token function">git</span> <span class="token function">add</span> <span class="token punctuation">[</span>file1<span class="token punctuation">]</span> <span class="token punctuation">[</span>file2<span class="token punctuation">]</span> <span class="token punctuation">..</span>.

<span class="token comment"># \u6DFB\u52A0\u6307\u5B9A\u76EE\u5F55\u5230\u6682\u5B58\u533A\uFF0C\u5305\u62EC\u5B50\u76EE\u5F55</span>
<span class="token function">git</span> <span class="token function">add</span> <span class="token punctuation">[</span>dir<span class="token punctuation">]</span>

<span class="token comment"># \u6DFB\u52A0\u5F53\u524D\u76EE\u5F55\u7684\u6240\u6709\u6587\u4EF6\u5230\u6682\u5B58\u533A</span>
<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>

<span class="token comment"># \u6DFB\u52A0\u6BCF\u4E2A\u53D8\u5316\u524D\uFF0C\u90FD\u4F1A\u8981\u6C42\u786E\u8BA4</span>
<span class="token comment"># \u5BF9\u4E8E\u540C\u4E00\u4E2A\u6587\u4EF6\u7684\u591A\u5904\u53D8\u5316\uFF0C\u53EF\u4EE5\u5B9E\u73B0\u5206\u6B21\u63D0\u4EA4</span>
<span class="token function">git</span> <span class="token function">add</span> -p

<span class="token comment"># \u5220\u9664\u5DE5\u4F5C\u533A\u6587\u4EF6\uFF0C\u5E76\u4E14\u5C06\u8FD9\u6B21\u5220\u9664\u653E\u5165\u6682\u5B58\u533A\uFF08\u76F8\u5F53\u4E8E rm [file1] [file2]\uFF0C\u518D\u6267\u884C git add \u547D\u4EE4\u7ED3\u679C\uFF09</span>
<span class="token function">git</span> <span class="token function">rm</span> <span class="token punctuation">[</span>file1<span class="token punctuation">]</span> <span class="token punctuation">[</span>file2<span class="token punctuation">]</span>

<span class="token comment"># \u505C\u6B62\u8FFD\u8E2A\u6307\u5B9A\u6587\u4EF6\uFF0C\u4F46\u8BE5\u6587\u4EF6\u4F1A\u4FDD\u7559\u5728\u5DE5\u4F5C\u533A\uFF0C\u901A\u5E38\u662F\u5728\u6587\u4EF6\u66FE\u7ECF\u88ABgit\u7BA1\u7406\u8FC7\uFF0C\u73B0\u5728\u4E0D\u9700\u8981\u88ABgit\u63A5\u7BA1\u7684\u65F6\u5019\u4F7F\u7528\u3010\u4E0D\u5220\u9664\u7269\u7406\u6587\u4EF6\uFF0C\u4EC5\u5C06\u8BE5\u6587\u4EF6\u4ECE\u7F13\u5B58\u4E2D\u5220\u9664\u3011</span>
<span class="token function">git</span> <span class="token function">rm</span> --cached <span class="token punctuation">[</span>file<span class="token punctuation">]</span>

<span class="token comment"># \u5C06\u8BEF\u5220\u9664\u7684\u6587\u4EF6\u6062\u590D</span>
<span class="token function">git</span> checkout -- <span class="token function">file</span>

<span class="token comment"># \u6539\u540D\u6587\u4EF6\uFF0C\u5E76\u4E14\u5C06\u8FD9\u4E2A\u6539\u540D\u653E\u5165\u6682\u5B58\u533A</span>
<span class="token function">git</span> <span class="token function">mv</span> <span class="token punctuation">[</span>file-original<span class="token punctuation">]</span> <span class="token punctuation">[</span>file-renamed<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u63D0\u4EA4\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u63D0\u4EA4\u6587\u4EF6" aria-hidden="true">#</a> \u63D0\u4EA4\u6587\u4EF6</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u7A7A\u6587\u4EF6\u63D0\u4EA4\u5230\u7248\u672C</span>
<span class="token comment"># \u7A7A\u7684 Commit \u51FA\u4F86\uFF0C\u57FA\u672C\u4E0A\u6CA1\u4EC0\u4E48\u610F\u4E49\uFF0C\u6709\u65F6\u53EF\u4EE5\u4E0D\u7528\u65B0\u589E\u6587\u4EF6\u800C\u5FEB\u901F\u4EA7\u751F Commit \u4F86git\u76F8\u5173\u7684\u64CD\u4F5C</span>
<span class="token function">git</span> commit --allow-empty -m <span class="token string">&quot;\u7A7A\u7684&quot;</span>

<span class="token comment"># \u63D0\u4EA4\u6682\u5B58\u533A\u6587\u4EF6\u5230\u4ED3\u5E93\u533A</span>
<span class="token function">git</span> commit -m <span class="token punctuation">[</span>message<span class="token punctuation">]</span>

<span class="token comment"># \u63D0\u4EA4\u6682\u5B58\u533A\u7684\u6307\u5B9A\u6587\u4EF6\u5230\u4ED3\u5E93\u533A</span>
<span class="token function">git</span> commit <span class="token punctuation">[</span>file1<span class="token punctuation">]</span> <span class="token punctuation">[</span>file2<span class="token punctuation">]</span> <span class="token punctuation">..</span>. -m <span class="token punctuation">[</span>message<span class="token punctuation">]</span>

<span class="token comment"># \u63D0\u4EA4\u5DE5\u4F5C\u533A\u81EA\u4E0A\u6B21commit\u4E4B\u540E\u7684\u53D8\u5316\uFF0C\u76F4\u63A5\u5230\u4ED3\u5E93\u533A</span>
<span class="token function">git</span> commit -a

<span class="token comment"># \u63D0\u4EA4\u65F6\u663E\u793A\u6240\u6709diff\u4FE1\u606F</span>
<span class="token function">git</span> commit -v

<span class="token comment"># \u4F7F\u7528\u4E00\u6B21\u65B0\u7684commit\uFF0C\u66FF\u4EE3\u4E0A\u4E00\u6B21\u63D0\u4EA4</span>
<span class="token comment"># \u5982\u679C\u4EE3\u7801\u6CA1\u6709\u4EFB\u4F55\u65B0\u53D8\u5316\uFF0C\u5219\u7528\u6765\u6539\u5199\u4E0A\u4E00\u6B21commit\u7684\u63D0\u4EA4\u4FE1\u606F</span>
<span class="token function">git</span> commit --amend -m <span class="token punctuation">[</span>message<span class="token punctuation">]</span>

<span class="token comment"># \u91CD\u505A\u4E0A\u4E00\u6B21commit\uFF0C\u5E76\u5305\u62EC\u6307\u5B9A\u6587\u4EF6\u7684\u65B0\u53D8\u5316</span>
<span class="token function">git</span> commit --amend <span class="token punctuation">[</span>file1<span class="token punctuation">]</span> <span class="token punctuation">[</span>file2<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5FFD\u7565\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5FFD\u7565\u6587\u4EF6" aria-hidden="true">#</a> \u5FFD\u7565\u6587\u4EF6</h2><h3 id="\u5F3A\u5236\u6DFB\u52A0\u5B58\u5728\u4E8E-gitignore\u7684\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5F3A\u5236\u6DFB\u52A0\u5B58\u5728\u4E8E-gitignore\u7684\u6587\u4EF6" aria-hidden="true">#</a> \u5F3A\u5236\u6DFB\u52A0\u5B58\u5728\u4E8E<code>.gitignore</code>\u7684\u6587\u4EF6</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">add</span> -f file.class
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u5206\u652F\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u5206\u652F\u64CD\u4F5C" aria-hidden="true">#</a> \u5206\u652F\u64CD\u4F5C</h2><h3 id="\u67E5\u770B" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B" aria-hidden="true">#</a> \u67E5\u770B</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5217\u51FA\u6240\u6709\u672C\u5730\u5206\u652F</span>
<span class="token function">git</span> branch

<span class="token comment"># \u5217\u51FA\u6240\u6709\u8FDC\u7A0B\u5206\u652F</span>
<span class="token function">git</span> branch -r

<span class="token comment"># \u5217\u51FA\u6240\u6709\u672C\u5730\u5206\u652F\u548C\u8FDC\u7A0B\u5206\u652F</span>
<span class="token function">git</span> branch -a

<span class="token comment"># \u6307\u5B9A\u672C\u5730work1\u548C\u8FDC\u7A0Bwork1\u5206\u652F\u7684\u8FDE\u63A5\u5173\u7CFB</span>
<span class="token function">git</span> branch --set-upstream work1 origin/work1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u65B0\u5EFA" tabindex="-1"><a class="header-anchor" href="#\u65B0\u5EFA" aria-hidden="true">#</a> \u65B0\u5EFA</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u65B0\u5EFA\u4E00\u4E2A\u5206\u652F\uFF0C\u4F46\u4F9D\u7136\u505C\u7559\u5728\u5F53\u524D\u5206\u652F</span>
<span class="token function">git</span> branch <span class="token punctuation">[</span>branch-name<span class="token punctuation">]</span>

<span class="token comment"># \u65B0\u5EFA\u4E00\u4E2A\u5206\u652F\uFF0C\u5E76\u5207\u6362\u5230\u8BE5\u5206\u652F</span>
<span class="token function">git</span> checkout -b <span class="token punctuation">[</span>branch<span class="token punctuation">]</span>

<span class="token comment"># \u65B0\u5EFA\u4E00\u4E2A\u5206\u652F\uFF0C\u6307\u5411\u6307\u5B9A\u7684commit</span>
<span class="token function">git</span> branch <span class="token punctuation">[</span>branch<span class="token punctuation">]</span> <span class="token punctuation">[</span>commit<span class="token punctuation">]</span>

<span class="token comment"># \u65B0\u5EFA\u4E00\u4E2A\u5206\u652F\uFF0C\u4E0E\u6307\u5B9A\u7684\u8FDC\u7A0B\u5206\u652F\u5EFA\u7ACB\u8FFD\u8E2A\u5173\u7CFB</span>
<span class="token function">git</span> branch --track <span class="token punctuation">[</span>branch<span class="token punctuation">]</span> <span class="token punctuation">[</span>remote-branch<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4FEE\u6539" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539" aria-hidden="true">#</a> \u4FEE\u6539</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5C06master\u5206\u652F\u6539\u540D\u4E3Aslave</span>
<span class="token function">git</span> branch -m master slave
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5220\u9664" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664" aria-hidden="true">#</a> \u5220\u9664</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5220\u9664\u5206\u652F</span>
<span class="token function">git</span> branch -d <span class="token punctuation">[</span>branch-name<span class="token punctuation">]</span>

<span class="token comment"># \u5220\u9664\u8FDC\u7A0B\u5206\u652F</span>
<span class="token function">git</span> push origin --delete <span class="token punctuation">[</span>branch-name<span class="token punctuation">]</span>
<span class="token function">git</span> branch -dr <span class="token punctuation">[</span>remote/branch<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5176\u4ED6" tabindex="-1"><a class="header-anchor" href="#\u5176\u4ED6" aria-hidden="true">#</a> \u5176\u4ED6</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5207\u6362\u5230\u6307\u5B9A\u5206\u652F\uFF0C\u5E76\u66F4\u65B0\u5DE5\u4F5C\u533A</span>
<span class="token function">git</span> checkout <span class="token punctuation">[</span>branch-name<span class="token punctuation">]</span>

<span class="token comment"># \u5207\u6362\u5230\u4E0A\u4E00\u4E2A\u5206\u652F</span>
<span class="token function">git</span> checkout -

<span class="token comment"># \u653E\u5F03\u5F53\u524D\u6240\u6709\u4FEE\u6539\u4F1A\u9000\u5230\u4E0A\u4E00\u63D0\u4EA4</span>
<span class="token function">git</span> checkout <span class="token builtin class-name">.</span>

<span class="token comment"># \u5EFA\u7ACB\u8FFD\u8E2A\u5173\u7CFB\uFF0C\u5728\u73B0\u6709\u5206\u652F\u4E0E\u6307\u5B9A\u7684\u8FDC\u7A0B\u5206\u652F\u4E4B\u95F4</span>
<span class="token function">git</span> branch --set-upstream <span class="token punctuation">[</span>branch<span class="token punctuation">]</span> <span class="token punctuation">[</span>remote-branch<span class="token punctuation">]</span>

<span class="token comment"># \u5408\u5E76\u6307\u5B9A\u5206\u652F\u5230\u5F53\u524D\u5206\u652F</span>
<span class="token function">git</span> merge <span class="token punctuation">[</span>branch<span class="token punctuation">]</span>

<span class="token comment"># \u9009\u62E9\u4E00\u4E2Acommit\uFF0C\u5408\u5E76\u8FDB\u5F53\u524D\u5206\u652F</span>
<span class="token function">git</span> cherry-pick <span class="token punctuation">[</span>commit<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6807\u7B7E" tabindex="-1"><a class="header-anchor" href="#\u6807\u7B7E" aria-hidden="true">#</a> \u6807\u7B7E</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5217\u51FA\u6240\u6709tag</span>
<span class="token function">git</span> tag

<span class="token comment"># \u65B0\u5EFA\u4E00\u4E2Atag\u5728\u5F53\u524Dcommit</span>
<span class="token function">git</span> tag <span class="token punctuation">[</span>tag<span class="token punctuation">]</span>

<span class="token comment"># \u65B0\u5EFA\u4E00\u4E2Atag\u5728\u6307\u5B9Acommit</span>
<span class="token function">git</span> tag <span class="token punctuation">[</span>tag<span class="token punctuation">]</span> <span class="token punctuation">[</span>commit<span class="token punctuation">]</span>

<span class="token comment"># \u5220\u9664\u672C\u5730tag</span>
<span class="token function">git</span> tag -d <span class="token punctuation">[</span>tag<span class="token punctuation">]</span>

<span class="token comment"># \u5220\u9664\u8FDC\u7A0Btag</span>
<span class="token function">git</span> push origin :refs/tags/<span class="token punctuation">[</span>tagName<span class="token punctuation">]</span>

<span class="token comment"># \u67E5\u770Btag\u4FE1\u606F</span>
<span class="token function">git</span> show <span class="token punctuation">[</span>tag<span class="token punctuation">]</span>

<span class="token comment"># \u63D0\u4EA4\u6307\u5B9Atag</span>
<span class="token function">git</span> push <span class="token punctuation">[</span>remote<span class="token punctuation">]</span> <span class="token punctuation">[</span>tag<span class="token punctuation">]</span>

<span class="token comment"># \u63D0\u4EA4\u6240\u6709tag</span>
<span class="token function">git</span> push <span class="token punctuation">[</span>remote<span class="token punctuation">]</span> --tags

<span class="token comment"># \u65B0\u5EFA\u4E00\u4E2A\u5206\u652F\uFF0C\u6307\u5411\u67D0\u4E2Atag</span>
<span class="token function">git</span> checkout -b <span class="token punctuation">[</span>branch<span class="token punctuation">]</span> <span class="token punctuation">[</span>tag<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u67E5\u770B\u65E5\u5FD7" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u65E5\u5FD7" aria-hidden="true">#</a> \u67E5\u770B\u65E5\u5FD7</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u663E\u793A\u5F53\u524D\u5206\u652F\u7684\u7248\u672C\u5386\u53F2</span>
<span class="token function">git</span> log

<span class="token comment"># \u7B80\u7565\u67E5\u770B\u4FE1\u606F</span>
<span class="token function">git</span> log  --pretty<span class="token operator">=</span>oneline

<span class="token comment"># \u67E5\u770B\u5206\u652F\u4FE1\u606F</span>
<span class="token function">git</span> log --graph --pretty<span class="token operator">=</span>oneline --abbrev-commit

<span class="token comment"># \u663E\u793Acommit\u5386\u53F2\uFF0C\u4EE5\u53CA\u6BCF\u6B21commit\u53D1\u751F\u53D8\u66F4\u7684\u6587\u4EF6</span>
<span class="token function">git</span> log --stat

<span class="token comment"># \u641C\u7D22\u63D0\u4EA4\u5386\u53F2\uFF0C\u6839\u636E\u5173\u952E\u8BCD</span>
<span class="token function">git</span> log -S <span class="token punctuation">[</span>keyword<span class="token punctuation">]</span>

<span class="token comment"># \u663E\u793A\u67D0\u4E2Acommit\u4E4B\u540E\u7684\u6240\u6709\u53D8\u52A8\uFF0C\u6BCF\u4E2Acommit\u5360\u636E\u4E00\u884C</span>
<span class="token function">git</span> log <span class="token punctuation">[</span>tag<span class="token punctuation">]</span> HEAD --pretty<span class="token operator">=</span>format:%s

<span class="token comment"># \u663E\u793A\u67D0\u4E2Acommit\u4E4B\u540E\u7684\u6240\u6709\u53D8\u52A8\uFF0C\u5176&quot;\u63D0\u4EA4\u8BF4\u660E&quot;\u5FC5\u987B\u7B26\u5408\u641C\u7D22\u6761\u4EF6</span>
<span class="token function">git</span> log <span class="token punctuation">[</span>tag<span class="token punctuation">]</span> HEAD --grep feature

<span class="token comment"># \u663E\u793A\u67D0\u4E2A\u6587\u4EF6\u7684\u7248\u672C\u5386\u53F2\uFF0C\u5305\u62EC\u6587\u4EF6\u6539\u540D</span>
<span class="token function">git</span> log --follow <span class="token punctuation">[</span>file<span class="token punctuation">]</span>
<span class="token function">git</span> whatchanged <span class="token punctuation">[</span>file<span class="token punctuation">]</span>

<span class="token comment"># \u663E\u793A\u6307\u5B9A\u6587\u4EF6\u76F8\u5173\u7684\u6BCF\u4E00\u6B21diff</span>
<span class="token function">git</span> log -p <span class="token punctuation">[</span>file<span class="token punctuation">]</span>

<span class="token comment"># \u663E\u793A\u8FC7\u53BB5\u6B21\u63D0\u4EA4</span>
<span class="token function">git</span> log -5 --pretty --oneline

<span class="token comment"># \u663E\u793A\u6240\u6709\u63D0\u4EA4\u8FC7\u7684\u7528\u6237\uFF0C\u6309\u63D0\u4EA4\u6B21\u6570\u6392\u5E8F</span>
<span class="token function">git</span> shortlog -sn

<span class="token comment"># \u627E\u67D0\u4E2A\u4EBA\u6216\u67D0\u4E9B\u4EBA\u7684 Commit</span>
<span class="token function">git</span> log --author<span class="token operator">=</span><span class="token string">&quot;curder&quot;</span>
<span class="token function">git</span> log --author<span class="token operator">=</span><span class="token string">&quot;curder\\|test&quot;</span>

<span class="token comment"># \u6309\u7167\u63D0\u4EA4\u7684 Message \u83B7\u53D6\u5BF9\u5E94\u7684\u63D0\u4EA4</span>
<span class="token function">git</span> log --grep<span class="token operator">=</span><span class="token string">&quot;css&quot;</span>

<span class="token comment"># \u627E\u51FA\u67D0\u884C\u6587\u4EF6\u5185\u5BB9\u8C01\u5199\u7684</span>
<span class="token function">git</span> blame file_name
<span class="token function">git</span> blame -L <span class="token number">2,8</span> file_name

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6587\u4EF6\u5DEE\u5F02\u5BF9\u6BD4" tabindex="-1"><a class="header-anchor" href="#\u6587\u4EF6\u5DEE\u5F02\u5BF9\u6BD4" aria-hidden="true">#</a> \u6587\u4EF6\u5DEE\u5F02\u5BF9\u6BD4</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u663E\u793A\u6682\u5B58\u533A\u548C\u5DE5\u4F5C\u533A\u7684\u5DEE\u5F02</span>
<span class="token function">git</span> <span class="token function">diff</span>

<span class="token comment"># \u5DE5\u4F5C\u533A\u4E0E\u6682\u5B58\u533A\u6BD4\u8F83</span>
<span class="token function">git</span> <span class="token function">diff</span> filepath

<span class="token comment"># \u663E\u793A\u6682\u5B58\u533A\u548C\u4E0A\u4E00\u4E2Acommit\u7684\u5DEE\u5F02</span>
<span class="token function">git</span> <span class="token function">diff</span> --cached <span class="token punctuation">[</span>file<span class="token punctuation">]</span>

<span class="token comment"># \u663E\u793A\u5DE5\u4F5C\u533A\u4E0E\u5F53\u524D\u5206\u652F\u6700\u65B0commit\u4E4B\u95F4\u7684\u5DEE\u5F02</span>
<span class="token function">git</span> <span class="token function">diff</span> HEAD

<span class="token comment"># \u5DE5\u4F5C\u533A\u4E0EHEAD ( \u5F53\u524D\u5DE5\u4F5C\u5206\u652F) \u6BD4\u8F83</span>
<span class="token function">git</span> <span class="token function">diff</span> HEAD filepath

<span class="token comment"># \u663E\u793A\u4E24\u6B21\u63D0\u4EA4\u4E4B\u95F4\u7684\u5DEE\u5F02</span>
<span class="token function">git</span> <span class="token function">diff</span> <span class="token punctuation">[</span>first-branch<span class="token punctuation">]</span><span class="token punctuation">..</span>.<span class="token punctuation">[</span>second-branch<span class="token punctuation">]</span>

<span class="token comment"># \u663E\u793A\u5F53\u524D\u7528\u6237\u4ECA\u5929\u5199\u4E86\u591A\u5C11\u884C\u4EE3\u7801</span>
<span class="token function">git</span> <span class="token function">diff</span> --shortstat <span class="token string">&quot;@{0 day ago}&quot;</span>

<span class="token comment"># \u6682\u5B58\u533A\u4E0EHEAD\u6BD4\u8F83</span>
<span class="token function">git</span> <span class="token function">diff</span> --staged \u6216 --cached filepath

<span class="token comment"># \u5F53\u524D\u5206\u652F\u7684\u6587\u4EF6\u4E0EbranchName \u5206\u652F\u7684\u6587\u4EF6\u8FDB\u884C\u6BD4\u8F83</span>
<span class="token function">git</span> <span class="token function">diff</span> branchName filepath

<span class="token comment"># \u4E0E\u67D0\u4E00\u6B21\u63D0\u4EA4\u8FDB\u884C\u6BD4\u8F83</span>
<span class="token function">git</span> <span class="token function">diff</span> commitId filepath
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u67E5\u770B\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u4FE1\u606F" aria-hidden="true">#</a> \u67E5\u770B\u4FE1\u606F</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u663E\u793A\u6709\u53D8\u66F4\u7684\u6587\u4EF6</span>
<span class="token function">git</span> status

<span class="token comment"># \u663E\u793A\u6307\u5B9A\u6587\u4EF6\u662F\u4EC0\u4E48\u4EBA\u5728\u4EC0\u4E48\u65F6\u95F4\u4FEE\u6539\u8FC7</span>
<span class="token function">git</span> blame <span class="token punctuation">[</span>file<span class="token punctuation">]</span>

<span class="token comment"># \u663E\u793A\u67D0\u6B21\u63D0\u4EA4\u7684\u5143\u6570\u636E\u548C\u5185\u5BB9\u53D8\u5316</span>
<span class="token function">git</span> show <span class="token punctuation">[</span>commit<span class="token punctuation">]</span>

<span class="token comment"># \u663E\u793A\u67D0\u6B21\u63D0\u4EA4\u53D1\u751F\u53D8\u5316\u7684\u6587\u4EF6</span>
<span class="token function">git</span> show --name-only <span class="token punctuation">[</span>commit<span class="token punctuation">]</span>

<span class="token comment"># \u663E\u793A\u67D0\u6B21\u63D0\u4EA4\u65F6\uFF0C\u67D0\u4E2A\u6587\u4EF6\u7684\u5185\u5BB9</span>
<span class="token function">git</span> show <span class="token punctuation">[</span>commit<span class="token punctuation">]</span>:<span class="token punctuation">[</span>filename<span class="token punctuation">]</span>

<span class="token comment"># \u663E\u793A\u5F53\u524D\u5206\u652F\u7684\u6700\u8FD1\u51E0\u6B21\u63D0\u4EA4</span>
<span class="token function">git</span> reflog
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u8FDC\u7A0B\u540C\u6B65" tabindex="-1"><a class="header-anchor" href="#\u8FDC\u7A0B\u540C\u6B65" aria-hidden="true">#</a> \u8FDC\u7A0B\u540C\u6B65</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u4E0B\u8F7D\u8FDC\u7A0B\u4ED3\u5E93\u7684\u6240\u6709\u53D8\u52A8</span>
<span class="token function">git</span> fetch <span class="token punctuation">[</span>remote<span class="token punctuation">]</span>

<span class="token comment"># \u663E\u793A\u6240\u6709\u8FDC\u7A0B\u4ED3\u5E93</span>
<span class="token function">git</span> remote -v

<span class="token comment"># \u663E\u793A\u67D0\u4E2A\u8FDC\u7A0B\u4ED3\u5E93\u7684\u4FE1\u606F</span>
<span class="token function">git</span> remote show <span class="token punctuation">[</span>remote<span class="token punctuation">]</span>

<span class="token comment"># \u589E\u52A0\u4E00\u4E2A\u65B0\u7684\u8FDC\u7A0B\u4ED3\u5E93\uFF0C\u5E76\u547D\u540D</span>
<span class="token function">git</span> remote <span class="token function">add</span> <span class="token punctuation">[</span>shortname<span class="token punctuation">]</span> <span class="token punctuation">[</span>url<span class="token punctuation">]</span>

<span class="token comment"># \u53D6\u56DE\u8FDC\u7A0B\u4ED3\u5E93\u7684\u53D8\u5316\uFF0C\u5E76\u4E0E\u672C\u5730\u5206\u652F\u5408\u5E76</span>
<span class="token function">git</span> pull <span class="token punctuation">[</span>remote<span class="token punctuation">]</span> <span class="token punctuation">[</span>branch<span class="token punctuation">]</span>

<span class="token comment"># \u4E0A\u4F20\u672C\u5730\u6307\u5B9A\u5206\u652F\u5230\u8FDC\u7A0B\u4ED3\u5E93</span>
<span class="token function">git</span> push <span class="token punctuation">[</span>remote<span class="token punctuation">]</span> <span class="token punctuation">[</span>branch<span class="token punctuation">]</span>

<span class="token comment"># \u5F3A\u884C\u63A8\u9001\u5F53\u524D\u5206\u652F\u5230\u8FDC\u7A0B\u4ED3\u5E93\uFF0C\u5373\u4F7F\u6709\u51B2\u7A81</span>
<span class="token function">git</span> push <span class="token punctuation">[</span>remote<span class="token punctuation">]</span> --force

<span class="token comment"># \u63A8\u9001\u6240\u6709\u5206\u652F\u5230\u8FDC\u7A0B\u4ED3\u5E93</span>
<span class="token function">git</span> push <span class="token punctuation">[</span>remote<span class="token punctuation">]</span> --all
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u64A4\u9500" tabindex="-1"><a class="header-anchor" href="#\u64A4\u9500" aria-hidden="true">#</a> \u64A4\u9500</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u6062\u590D\u6682\u5B58\u533A\u7684\u6307\u5B9A\u6587\u4EF6\u5230\u5DE5\u4F5C\u533A</span>
<span class="token function">git</span> checkout <span class="token punctuation">[</span>file<span class="token punctuation">]</span>

<span class="token comment"># \u6062\u590D\u67D0\u4E2Acommit\u7684\u6307\u5B9A\u6587\u4EF6\u5230\u6682\u5B58\u533A\u548C\u5DE5\u4F5C\u533A</span>
<span class="token function">git</span> checkout <span class="token punctuation">[</span>commit<span class="token punctuation">]</span> <span class="token punctuation">[</span>file<span class="token punctuation">]</span>

<span class="token comment"># \u6062\u590D\u6682\u5B58\u533A\u7684\u6240\u6709\u6587\u4EF6\u5230\u5DE5\u4F5C\u533A</span>
<span class="token function">git</span> checkout <span class="token builtin class-name">.</span>

<span class="token comment"># \u64A4\u9500\u6DFB\u52A0\u5230\u6682\u5B58\u533A\u7684\u6587\u4EF6\uFF0C\u8FD9\u6837\u6587\u4EF6\u5C31\u56DE\u5230\u4E86\u5DE5\u4F5C\u533A</span>
<span class="token function">git</span> reset HEAD <span class="token function">file</span>

<span class="token comment"># \u91CD\u7F6E\u6682\u5B58\u533A\u7684\u6307\u5B9A\u6587\u4EF6\uFF0C\u4E0E\u4E0A\u4E00\u6B21commit\u4FDD\u6301\u4E00\u81F4\uFF0C\u4F46\u5DE5\u4F5C\u533A\u4E0D\u53D8</span>
<span class="token function">git</span> reset <span class="token punctuation">[</span>file<span class="token punctuation">]</span>

<span class="token comment"># \u91CD\u7F6E\u6682\u5B58\u533A\u4E0E\u5DE5\u4F5C\u533A\uFF0C\u4E0E\u4E0A\u4E00\u6B21commit\u4FDD\u6301\u4E00\u81F4</span>
<span class="token function">git</span> reset --hard

<span class="token comment"># \u8FD4\u56DE\u4E0A\u4E00\u7248\u672C\uFF0C\u4E22\u5F03\u5F53\u524D\u63D0\u4EA4\u7684\u4E00\u4E2A\u7248\u672C\uFF0C\u5982\u679C\u9519\u8BEF\u7684\u5220\u9664\u4E86\uFF0C\u53EF\u4EE5\u4F7F\u7528 git reflog \u83B7\u53D6\u5230\u6700\u540E\u7684\u63D0\u4EA4hash\u503C\uFF0C\u7136\u540E\u4F7F\u7528 git merge hash_code \u56DE\u9000\u5230\u4E0A\u4E00\u4E2A\u63D0\u4EA4</span>
<span class="token function">git</span> reset --hard HEAD^

<span class="token comment"># \u91CD\u7F6E\u5F53\u524D\u5206\u652F\u7684\u6307\u9488\u4E3A\u6307\u5B9Acommit\uFF0C\u540C\u65F6\u91CD\u7F6E\u6682\u5B58\u533A\uFF0C\u4F46\u5DE5\u4F5C\u533A\u4E0D\u53D8</span>
<span class="token function">git</span> reset <span class="token punctuation">[</span>commit<span class="token punctuation">]</span>

<span class="token comment"># \u91CD\u7F6E\u5F53\u524D\u5206\u652F\u7684HEAD\u4E3A\u6307\u5B9Acommit\uFF0C\u540C\u65F6\u91CD\u7F6E\u6682\u5B58\u533A\u548C\u5DE5\u4F5C\u533A\uFF0C\u4E0E\u6307\u5B9Acommit\u4E00\u81F4</span>
<span class="token function">git</span> reset --hard <span class="token punctuation">[</span>commit<span class="token punctuation">]</span>

<span class="token comment"># \u91CD\u7F6E\u5F53\u524DHEAD\u4E3A\u6307\u5B9Acommit\uFF0C\u4F46\u4FDD\u6301\u6682\u5B58\u533A\u548C\u5DE5\u4F5C\u533A\u4E0D\u53D8</span>
<span class="token function">git</span> reset --keep <span class="token punctuation">[</span>commit<span class="token punctuation">]</span>

<span class="token comment"># \u65B0\u5EFA\u4E00\u4E2Acommit\uFF0C\u7528\u6765\u64A4\u9500\u6307\u5B9Acommit</span>
<span class="token comment"># \u540E\u8005\u7684\u6240\u6709\u53D8\u5316\u90FD\u5C06\u88AB\u524D\u8005\u62B5\u6D88\uFF0C\u5E76\u4E14\u5E94\u7528\u5230\u5F53\u524D\u5206\u652F</span>
<span class="token function">git</span> revert <span class="token punctuation">[</span>commit<span class="token punctuation">]</span>

<span class="token comment"># \u64A4\u9500\u4E0A\u4E00\u4E2A\u63D0\u4EA4\uFF0C\u4F7F\u7528 git revert \u5F53\u4F5C\u64A4\u9500\u5DF2\u7ECF\u63D0\u4EA4\u7684\u66F4\u6539\uFF0C\u800C git reset HEAD \u7528\u6765\u64A4\u9500\u6CA1\u6709\u63D0\u4EA4\u7684\u66F4\u6539\u3002</span>
<span class="token function">git</span> revert HEAD
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="reset-\u7684\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#reset-\u7684\u6A21\u5F0F" aria-hidden="true">#</a> Reset \u7684\u6A21\u5F0F</h3><p><code>git reset</code> \u6307\u4EE4\u53EF\u4EE5\u642D\u914D\u53C2\u6570\u4F7F\u7528\uFF0C\u5E38\u89C1\u7684\u4E09\u4E2A\u53C2\u6570\uFF0C\u5206\u522B\u662F <code>--mixed</code>\u3001<code>--soft</code> \u4EE5\u53CA <code>--hard</code>\uFF0C\u4E0D\u540C\u7684\u53C2\u6570\u6267\u884C\u4E4B\u540E\u4F1A\u6709\u7A0D\u5FAE\u4E0D\u592A\u4E00\u6837\u7684\u7ED3\u679C\u3002</p><h4 id="mixed-\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#mixed-\u6A21\u5F0F" aria-hidden="true">#</a> <code>mixed</code> \u6A21\u5F0F</h4><p><code>--mixed</code> \u662F\u9ED8\u8BA4\u7684\u53C2\u6570\uFF0C\u5982\u679C\u6CA1\u6709\u7279\u522B\u7684\u53C2\u6570\uFF0C<code>git reset</code> \u6307\u4EE4\u5C06\u4F1A\u4F7F\u7528 <code>--mixed</code> \u6A21\u5F0F\u3002\u8FD9\u4E2A\u6A21\u5F0F\u4F1A\u628A\u6682\u5B58\u533A\u7684\u6863\u6848\u4E1F\u6389\uFF0C\u4F46\u4E0D\u6703\u52A8\u5230\u5DE5\u4F5C\u76EE\u5F55\u7684\u6863\u6848\uFF0C\u4E5F\u5C31\u662F\u8BF4 Commit \u62C6\u51FA\u4F86\u7684\u6863\u6848\u4F1A\u7559\u5728\u5DE5\u4F5C\u76EE\u5F55\uFF0C\u4F46\u4E0D\u4F1A\u7559\u5728\u6682\u5B58\u533A\u3002</p><h3 id="soft-\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#soft-\u6A21\u5F0F" aria-hidden="true">#</a> soft \u6A21\u5F0F</h3><p><code>--soft</code> \u6A21\u5F0F\u4E0B\u7684 reset\uFF0C\u5DE5\u4F5C\u76EE\u5F55\u8DDF\u6682\u5B58\u533A\u7684\u6863\u6848\u90FD\u4E0D\u4F1A\u88AB\u4E1F\u6389\uFF0C\u6240\u4EE5\u770B\u8D77\u4F86\u5C31\u53EA\u6709 HEAD \u7684\u79FB\u52A8\u800C\u5DF2\u3002\u4E5F\u56E0\u6B64 Commit \u62C6\u51FA\u4F86\u7684\u6587\u4EF6\u4F1A\u76F4\u63A5\u653E\u5728\u6682\u5B58\u533A\u3002</p><h3 id="hard-\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#hard-\u6A21\u5F0F" aria-hidden="true">#</a> hard \u6A21\u5F0F</h3><p><code>--hard</code> \u6A21\u5F0F\u4E0B\uFF0C\u4E0D\u7BA1\u662F\u5DE5\u4F5C\u76EE\u5F55\u4EE5\u53CA\u6682\u5B58\u533A\u7684\u6587\u4EF6\u90FD\u4F1A\u4E1F\u6389\u3002<strong>\u8BE5\u6A21\u5F0F\u4E0D\u5EFA\u8BAE\u5728\u516C\u5171\u5206\u652F\u4E0B\u64CD\u4F5C\u3002</strong> \u5982\u4E0B\u8868\u683C\uFF1A</p><table><thead><tr><th>\u6A21\u5F0F</th><th>mixed \u6A21\u5F0F\uFF08\u9884\u8BBE\uFF09</th><th>soft \u6A21\u5F0F</th><th>hard \u6A21\u5F0F</th></tr></thead><tbody><tr><td>\u5DE5\u4F5C\u76EE\u5F55</td><td>\u4E0D\u53D8</td><td>\u4E0D\u53D8</td><td>\u4E1F\u6389</td></tr><tr><td>\u6682\u5B58\u533A</td><td>\u4E1F\u6389</td><td>\u4E0D\u53D8</td><td>\u4E1F\u6389</td></tr></tbody></table><p>\u5982\u679C\u4E0A\u9762\u7684\u8BF4\u660E\u4E0D\u5BB9\u6613\u60F3\u50CF\u5230\u5E95\u53D1\u751F\u4EC0\u4E48\u4E8B\uFF0C\u53EA\u8981\u8BB0\u4F4F\u8FD9\u4E9B\u4E0D\u540C\u7684\u6A21\u5F0F\uFF0C\u5C06\u4F1A\u51B3\u5B9A\u300CCommit \u62C6\u51FA\u4F86\u7684\u90A3\u4E9B\u6587\u4EF6\u4F55\u53BB\u4F55\u4ECE\u300D\u3002</p><table><thead><tr><th>\u6A21\u5F0F</th><th>mixed \u6A21\u5F0F\uFF08\u9884\u8BBE\uFF09</th><th>soft \u6A21\u5F0F</th><th>hard \u6A21\u5F0F</th></tr></thead><tbody><tr><td>Commit \u62C6\u51FA\u4F86\u7684\u6587\u4EF6</td><td>\u4E1F\u56DE\u5DE5\u4F5C\u76EE\u5F55</td><td>\u4E1F\u56DE\u6682\u5B58\u533A</td><td>\u76F4\u63A5\u4E1F\u6389</td></tr></tbody></table><h2 id="\u50A8\u85CF\u5DE5\u4F5C\u533A" tabindex="-1"><a class="header-anchor" href="#\u50A8\u85CF\u5DE5\u4F5C\u533A" aria-hidden="true">#</a> \u50A8\u85CF\u5DE5\u4F5C\u533A</h2><p>\u5DE5\u4F5C\u9014\u4E2D\uFF0C\u6211\u4EEC\u5728A\u5206\u652F\u5DE5\u4F5C\uFF0C\u5F53\u524D\u4EFB\u52A1\u672A\u5B8C\u6210\uFF0C\u6CA1\u6709\u6DFB\u52A0\u5230\u6682\u5B58\u533A\uFF0C\u4F46\u662F\u9700\u8981\u7D27\u6025\u4FEE\u590Dbug\uFF0C\u4F7F\u7528</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> stash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u50A8\u85CF\u73B0\u573A\uFF0C\u7136\u540E\u5207\u6362\u5230\u9700\u8981\u4FEE\u590Dbug\u7684\u5206\u652FB\u3002\u63A5\u7740\uFF0C\u521B\u5EFA\u4FEE\u590Dbug\u7684\u5206\u652FC\uFF0C\u5B8C\u6210\u4FEE\u590D\u4EFB\u52A1\uFF0C\u56DE\u5230B\u5206\u652F\uFF0C\u5408\u5E76C\u5206\u652F\uFF0C\u5220\u9664C\u5206\u652F\u3002</p><p>\u56DE\u5230\u6211\u4EEC\u6B63\u5728\u5DE5\u4F5C\u7684A\u5206\u652F\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> checkout A
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u67E5\u770B\u5DE5\u4F5C\u73B0\u573A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> stash list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4F7F\u7528\u4E0B\u9762\u7684\u547D\u4EE4\u6062\u590D\u5DE5\u4F5C\u73B0\u573A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> stash pop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6B64\u65F6\u4F1A\u6062\u590D\u5E76\u4E14\u5220\u9664stash\u7684\u5185\u5BB9\u3002</p><p>\u4E0D\u5220\u9664stash\u5185\u5BB9\uFF1F</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> stash apply <span class="token operator">&lt;</span>\u6307\u5B9Astash\uFF0C\u53EF\u4EE5\u591A\u6B21stash<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u53EA\u6267\u884C\u6062\u590D\u64CD\u4F5C\u3002</p><p>\u4F46\u662F\u4EE5\u540E\u60F3\u5220\u9664\uFF1F</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> stash drop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6267\u884C\u5220\u9664stash\u5185\u5BB9\u7684\u64CD\u4F5C\u3002</p><h2 id="\u6587\u4EF6\u6253\u5305" tabindex="-1"><a class="header-anchor" href="#\u6587\u4EF6\u6253\u5305" aria-hidden="true">#</a> \u6587\u4EF6\u6253\u5305</h2><h3 id="\u67E5\u770B\u5E2E\u52A9" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u5E2E\u52A9" aria-hidden="true">#</a> \u67E5\u770B\u5E2E\u52A9</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code> <span class="token function">git</span> archive <span class="token punctuation">[</span>options<span class="token punctuation">]</span> <span class="token operator">&lt;</span>tree-ish<span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token operator">&lt;</span>path<span class="token operator">&gt;</span><span class="token punctuation">..</span>.<span class="token punctuation">]</span>
 --format <span class="token operator">&lt;</span>fmt<span class="token operator">&gt;</span>        archive <span class="token function">format</span>
 --prefix <span class="token operator">&lt;</span>prefix<span class="token operator">&gt;</span>     prepend prefix to each pathname <span class="token keyword">in</span> the archive
 -o, --output <span class="token operator">&lt;</span>file<span class="token operator">&gt;</span>   <span class="token function">write</span> the archive to this <span class="token function">file</span>
 -0                    store only
 -1                    compress faster
 -9                    compress better
 -l, --list            list supported archive formats
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u67E5\u770B\u652F\u6301\u7684\u5F52\u6863\u683C\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u652F\u6301\u7684\u5F52\u6863\u683C\u5F0F" aria-hidden="true">#</a> \u67E5\u770B\u652F\u6301\u7684\u5F52\u6863\u683C\u5F0F</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> archive --list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8FD0\u884C\u5B8C\u4E0A\u9762\u7684\u547D\u4EE4\uFF0C\u53EF\u4EE5\u770B\u5230\u652F\u6301\u7684\u5F52\u6863\u683C\u5F0F\u6709\uFF1A<code>tar</code>\u3001<code>tgz</code>\u3001<code>tar.gz</code>\u548C<code>zip</code>\u3002</p><h3 id="\u5BFC\u51FA" tabindex="-1"><a class="header-anchor" href="#\u5BFC\u51FA" aria-hidden="true">#</a> \u5BFC\u51FA</h3><p>\u521B\u5EFA\u4E00\u4E2A\u5305\u542B\u5F53\u524D\u6700\u65B0\u63D0\u4EA4\u5185\u5BB9\u7684<code>tar.gz</code>\u5F52\u6863\u6587\u4EF6\u5206\u652F\uFF0C\u5E76\u5C06\u5176\u89E3\u538B\u5230<code>/tmp/projectName</code>\u76EE\u5F55\u4E2D\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> archive --format<span class="token operator">=</span>tar.gz --prefix<span class="token operator">=</span>projectName/ HEAD <span class="token operator">|</span> <span class="token punctuation">(</span>cd /tmp/ <span class="token operator">&amp;&amp;</span> <span class="token function">tar</span> xf -<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5BFC\u51FA\u6700\u65B0\u7684\u7248\u672C\u5E93</span>
<span class="token function">git</span> archive -o <span class="token punctuation">..</span>/latest.zip HEAD

<span class="token comment"># \u901A\u8FC7hash\u503C\u5BFC\u51FA\u6307\u5B9A\u63D0\u4EA4\u8BB0\u5F55</span>
<span class="token function">git</span> archive -o <span class="token punctuation">..</span>/git-1.4.0.tar hashCode

<span class="token comment"># \u5BFC\u51FA\u4E00\u4E2A\u76EE\u5F55</span>
<span class="token function">git</span> archive -o <span class="token punctuation">..</span>/git-1.4.0-docs.zip  HEAD:Documentation/

<span class="token comment"># \u5BFC\u51FA\u4E3Atar.gz\u683C\u5F0F</span>
<span class="token function">git</span> archive 8996b47 <span class="token operator">|</span> <span class="token function">gzip</span> <span class="token operator">&gt;</span> <span class="token punctuation">..</span>/git-1.4.0.tar.gz

<span class="token comment"># \u5BFC\u51FA\u6700\u540E\u4E00\u6B21\u63D0\u4EA4\u4FEE\u6539\u8FC7\u7684\u6587\u4EF6</span>
<span class="token function">git</span> archive -o <span class="token punctuation">..</span>/updated.zip HEAD <span class="token variable"><span class="token variable">$(</span><span class="token function">git</span> <span class="token function">diff</span> --name-only HEAD^<span class="token variable">)</span></span>

<span class="token comment"># \u5BFC\u51FAtag</span>
<span class="token function">git</span> archive --format<span class="token operator">=</span>tar.gz <span class="token number">1.0</span> <span class="token operator">|</span> <span class="token function">gzip</span> <span class="token operator">&gt;</span> v1.0.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53C2\u8003\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u94FE\u63A5" aria-hidden="true">#</a> \u53C2\u8003\u94FE\u63A5</h2>`,80),h={href:"https://www.jianshu.com/p/f19d6b690a7e",target:"_blank",rel:"noopener noreferrer"},g=s("Git\u8FDB\u9636\u4F7F\u7528\u7B14\u8BB0"),f={href:"https://gitbook.tw/",target:"_blank",rel:"noopener noreferrer"},x=s("\u70BA\u4F60\u81EA\u5DF1\u5B78 Git"),_={href:"https://github.com/geeeeeeeeek/git-recipes",target:"_blank",rel:"noopener noreferrer"},y=s("Git \u83DC\u5355");function A(i,w){const a=c("ExternalLinkIcon");return l(),o(p,null,[r,m,v,n("img",{src:i.$withBase("/images/tools/git/git-command-list/git-remote-repository-workspace.png"),alt:""},null,8,b),k,n("ul",null,[n("li",null,[n("p",null,[n("a",h,[g,e(a)])])]),n("li",null,[n("p",null,[n("a",f,[x,e(a)])])]),n("li",null,[n("p",null,[n("a",_,[y,e(a)])])])])],64)}var E=t(u,[["render",A],["__file","git-command-list.html.vue"]]);export{E as default};
