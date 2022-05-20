import{_ as o,r as c,o as t,c as r,b as e,a as n,F as d,e as i,d as a}from"./app.25d4da55.js";const l={},h=i('<h1 id="git\u83B7\u53D6\u4ED3\u5E93\u6307\u5B9A\u76EE\u5F55\u6216\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#git\u83B7\u53D6\u4ED3\u5E93\u6307\u5B9A\u76EE\u5F55\u6216\u6587\u4EF6" aria-hidden="true">#</a> Git\u83B7\u53D6\u4ED3\u5E93\u6307\u5B9A\u76EE\u5F55\u6216\u6587\u4EF6</h1><p>\u4F7F\u7528<code>git clone</code>\u53EF\u4EE5\u83B7\u53D6\u8FDC\u7A0B\u670D\u52A1\u5668\u7684\u6240\u6709\u4ED3\u5E93\u4EE3\u7801\uFF0C\u7136\u800C\u6709\u65F6\u60F3\u67E5\u770B\u4ED3\u5E93\u91CC\u67D0\u4E2A\u76EE\u5F55\u6216\u6587\u4EF6\uFF0C\u4F8B\u5982<code>examples</code>\u76EE\u5F55\u7684\u65F6\u5019\u3002</p><p>\u4ECE<code>1.7.0</code>\u7248\u672C\u5F00\u59CBgit\u63D0\u4F9B\u7A00\u758F\u68C0\u51FA\u7684\u529F\u80FD\u3002\u6240\u8C13\u7A00\u758F\u68C0\u51FA\u5C31\u662F\u672C\u5730\u7248\u672C\u5E93\u68C0\u51FA\u65F6\u4E0D\u68C0\u51FA\u5168\u90E8\uFF0C\u53EA\u5C06\u6307\u5B9A\u7684\u6587\u4EF6\u4ECE\u672C\u5730\u7248\u672C\u5E93\u68C0\u51FA\u5230\u5DE5\u4F5C\u533A\uFF0C\u800C\u5176\u4ED6\u672A\u6307\u5B9A\u7684\u6587\u4EF6\u5219\u4E0D\u4E88\u68C0\u51FA\uFF08\u5373\u4F7F\u8FD9\u4E9B\u6587\u4EF6\u5B58\u5728\u4E8E\u5DE5\u4F5C\u533A\uFF0C\u5176\u4FEE\u6539\u4E5F\u4F1A\u88AB\u5FFD\u7565\uFF09\u3002</p><h2 id="\u76F8\u5173\u6B65\u9AA4" tabindex="-1"><a class="header-anchor" href="#\u76F8\u5173\u6B65\u9AA4" aria-hidden="true">#</a> \u76F8\u5173\u6B65\u9AA4</h2><ul><li>\u68C0\u67E5Git\u7248\u672C</li><li>\u521B\u5EFA\u672C\u5730\u5B58\u653E\u6587\u4EF6\u5939</li><li><code>git init</code>\u521D\u59CB\u5316\u4ED3\u5E93</li><li>\u6DFB\u52A0\u8FDC\u7A0B\u4ED3\u5E93\u5730\u5740</li><li>\u4F7F\u7528Sparse checkout\u6A21\u5F0F</li><li>\u914D\u7F6E\u8981\u68C0\u51FA\u7684\u76EE\u5F55\u6216\u6587\u4EF6</li><li>\u4ECE\u8FDC\u7A0B\u5C06\u76EE\u6807\u76EE\u5F55\u6216\u6587\u4EF6\u62C9\u53D6\u4E0B\u6765</li></ul><h2 id="\u5177\u4F53\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u5177\u4F53\u64CD\u4F5C" aria-hidden="true">#</a> \u5177\u4F53\u64CD\u4F5C</h2>',6),u=a("\u6F14\u793A"),p=e("code",null,"git",-1),g=a("\u7684\u7248\u672C\u662F"),b=e("code",null,"1.8.3.1",-1),m=a("\uFF0C\u8FDC\u7A0B\u4ED3\u5E93\u5730\u5740\u662F"),v={href:"https://github.com/swoole/swoole-src.git",target:"_blank",rel:"noopener noreferrer"},_=a("swoole/swoole-src"),f=a("\u3002"),k=i(`<h3 id="\u68C0\u67E5git\u7248\u672C" tabindex="-1"><a class="header-anchor" href="#\u68C0\u67E5git\u7248\u672C" aria-hidden="true">#</a> \u68C0\u67E5Git\u7248\u672C</h3><p>\u5728\u547D\u4EE4\u884C\u4E2D\u8FD0\u884C\u5982\u4E0B\u547D\u4EE4</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> --version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>\u6BD4\u5982\u4FDD\u8BC1git\u7684\u7248\u672C\u5927\u4E8E<code>1.7.0</code>\uFF0C\u8FD9\u91CC\u4EE5 <code>git version 1.8.3.1</code>\u4F5C\u4E3A\u6F14\u793A\u3002</p></blockquote><h3 id="\u521B\u5EFA\u4ED3\u5E93\u5B58\u653E\u76EE\u5F55" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u4ED3\u5E93\u5B58\u653E\u76EE\u5F55" aria-hidden="true">#</a> \u521B\u5EFA\u4ED3\u5E93\u5B58\u653E\u76EE\u5F55</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> swoole-src-examples <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> swoole-src-examples
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>\u521B\u5EFA\u4E00\u4E2A\u76EE\u5F55\uFF0C\u8FD9\u91CC\u4EE5<code>swoole-src-example</code>\uFF0C\u5E76\u4E14\u4F7F\u7528<code>cd</code>\u547D\u4EE4\u8FDB\u5165\u5230\u76EE\u5F55\u4E2D\u3002</p></blockquote><h3 id="\u521D\u59CB\u5316\u4ED3\u5E93" tabindex="-1"><a class="header-anchor" href="#\u521D\u59CB\u5316\u4ED3\u5E93" aria-hidden="true">#</a> \u521D\u59CB\u5316\u4ED3\u5E93</h3><p>\u6267\u884C\u521D\u59CB\u5316\u4ED3\u5E93\u7684\u547D\u4EE4</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u6DFB\u52A0\u8FDC\u7A0B\u4ED3\u5E93\u5730\u5740" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0\u8FDC\u7A0B\u4ED3\u5E93\u5730\u5740" aria-hidden="true">#</a> \u6DFB\u52A0\u8FDC\u7A0B\u4ED3\u5E93\u5730\u5740</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> remote <span class="token function">add</span> origin https://github.com/swoole/swoole-src.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u4F7F\u7528sparse-checkout\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528sparse-checkout\u6A21\u5F0F" aria-hidden="true">#</a> \u4F7F\u7528Sparse checkout\u6A21\u5F0F</h3><p>\u4F7F\u7528\u4E0B\u9762\u7684\u547D\u4EE4\u5141\u8BB8<code>config</code>\u4E2D\u4F7F\u7528<strong>Sparse checkout</strong>\u6A21\u5F0F\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> config core.sparsecheckout <span class="token boolean">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u914D\u7F6E\u8981\u68C0\u51FA\u7684\u76EE\u5F55\u6216\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u8981\u68C0\u51FA\u7684\u76EE\u5F55\u6216\u6587\u4EF6" aria-hidden="true">#</a> \u914D\u7F6E\u8981\u68C0\u51FA\u7684\u76EE\u5F55\u6216\u6587\u4EF6</h3><p>\u5C06\u8981\u68C0\u51FA\u7684\u76EE\u5F55\u6216\u6587\u4EF6\u4F7F\u7528\u6587\u4EF6\u8FFD\u52A0\u7684\u5F62\u5F0F\u5199\u5165\u5230git\u7684\u914D\u7F6E<code>.git/info/sparse-checkout</code>\u6587\u4EF6\u4E2D\uFF0C<strong>\u5141\u8BB8\u6DFB\u52A0\u591A\u884C</strong>\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;examples/*&quot;</span> <span class="token operator">&gt;&gt;</span> .git/info/sparse-checkout
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>\u591A\u6B21\u6DFB\u52A0\u914D\u7F6E\u540E\uFF0C\u901A\u8FC7<code>cat .git/info/sparse-checkout</code>\u547D\u4EE4\u67E5\u770B\u6700\u7EC8\u6DFB\u52A0\u7684\u76EE\u5F55\u6216\u8005\u6587\u4EF6\u3002</p></blockquote><h3 id="\u4ECE\u8FDC\u7A0B\u5C06\u76EE\u6807\u76EE\u5F55\u6216\u6587\u4EF6\u62C9\u53D6\u4E0B\u6765" tabindex="-1"><a class="header-anchor" href="#\u4ECE\u8FDC\u7A0B\u5C06\u76EE\u6807\u76EE\u5F55\u6216\u6587\u4EF6\u62C9\u53D6\u4E0B\u6765" aria-hidden="true">#</a> \u4ECE\u8FDC\u7A0B\u5C06\u76EE\u6807\u76EE\u5F55\u6216\u6587\u4EF6\u62C9\u53D6\u4E0B\u6765</h3><p>\u5F53\u4ED3\u5E93\u8FD8\u662F\u7A7A\u767D\u7684\u60C5\u51B5\u4E0B\uFF0C\u9996\u6B21\u9700\u8981\u6267\u884C\u4E0B\u9762\u7684\u547D\u4EE4\u4ECE\u8FDC\u7A0B\u5C06\u914D\u7F6E\u7684\u76EE\u5F55\u6216\u8005\u6587\u4EF6\u62C9\u53D6\u5230\u672C\u5730\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> pull origin master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u5BF9\u914D\u7F6E\u589E\u5220\u6539\u540E\u91CD\u65B0\u83B7\u53D6\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u914D\u7F6E\u589E\u5220\u6539\u540E\u91CD\u65B0\u83B7\u53D6\u4EE3\u7801" aria-hidden="true">#</a> \u5BF9\u914D\u7F6E\u589E\u5220\u6539\u540E\u91CD\u65B0\u83B7\u53D6\u4EE3\u7801</h3><p>\u5728\u5BF9\u914D\u7F6E\u6587\u4EF6<code>.git/info/sparse-checkout</code>\u7684\u5185\u5BB9\u8FDB\u884C<strong>\u589E</strong>\u3001<strong>\u5220</strong>\u3001<strong>\u6539</strong>\u64CD\u4F5C\u4E4B\u540E\uFF0C\u4F7F\u7528\u4E0B\u9762\u7684\u547D\u4EE4\u91CD\u65B0\u4FEE\u6B63\u76EE\u5F55\u548C\u6587\u4EF6\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> checkout
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u53C2\u8003\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u94FE\u63A5" aria-hidden="true">#</a> \u53C2\u8003\u94FE\u63A5</h2>`,26),x={href:"https://www.worldhello.net/gotgit/08-git-misc/090-sparse-checkout-and-shallow-clone.html",target:"_blank",rel:"noopener noreferrer"},w=a("\u7A00\u758F\u68C0\u51FA\u548C\u6D45\u514B\u9686"),q={href:"https://www.jianshu.com/p/e36cbcc8f75d",target:"_blank",rel:"noopener noreferrer"},S=a("git checkout\u4ED3\u5E93\u9879\u76EE\u67D0\u4E2A\u6587\u4EF6\u5939");function y(N,V){const s=c("ExternalLinkIcon");return t(),r(d,null,[h,e("p",null,[u,p,g,b,m,e("a",v,[_,n(s)]),f]),k,e("ul",null,[e("li",null,[e("p",null,[e("a",x,[w,n(s)])])]),e("li",null,[e("p",null,[e("a",q,[S,n(s)])])])])],64)}var E=o(l,[["render",y],["__file","get-sparse-checkout-the-repository-specified-directory-or-file.html.vue"]]);export{E as default};
