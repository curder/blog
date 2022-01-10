import{r as o,o as c,c as l,b as n,a as t,F as i,e as p,d as a}from"./app.a3837e36.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";const r={},b=p(`<h1 id="\u5982\u4F55\u5C06vue\u9879\u76EE\u53D1\u5E03\u5230github\u7684pages" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u5C06vue\u9879\u76EE\u53D1\u5E03\u5230github\u7684pages" aria-hidden="true">#</a> \u5982\u4F55\u5C06vue\u9879\u76EE\u53D1\u5E03\u5230github\u7684pages</h1><p>\u5C06\u5F00\u53D1\u597D\u7684vue\u524D\u7AEF\u9879\u76EE\u90E8\u7F72\u5230github\u7684pages\u670D\u52A1\u4E0A\uFF0C\u4E0D\u4EC5\u65B9\u4FBF\u800C\u4E14\u8282\u7701\u4E86\u8D2D\u4E70\u670D\u52A1\u5668\u7684\u5F00\u652F\u3002</p><h2 id="version" tabindex="-1"><a class="header-anchor" href="#version" aria-hidden="true">#</a> Version</h2><ul><li>Vue 2.5.22</li><li>Vue CLI 3.1.3</li></ul><h2 id="\u521D\u59CB\u5316vue\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#\u521D\u59CB\u5316vue\u9879\u76EE" aria-hidden="true">#</a> \u521D\u59CB\u5316Vue\u9879\u76EE</h2><ul><li><p>\u6267\u884C <code>vue create vue-github-src</code> \u547D\u4EE4\u3002</p></li><li><p>\u9009\u62E9 <code>Manually select features</code>\uFF0C\u540E\u56DE\u8F66\u3002</p></li><li><p>\u4F7F\u7528\u7A7A\u683C\u53CD\u9009\u6389<code>Linter / Formatter</code>\uFF0C\u4FDD\u6301\u53EA\u9009\u62E9 <code>Babel</code>\u540E\u6309\u56DE\u8F66\u3002</p></li><li><p>\u9009\u62E9 <code>In package.json</code>\uFF0C\u540E\u56DE\u8F66\u3002</p></li><li><p>\u8F93\u5165 <code>N</code>\uFF0C\u540E\u56DE\u8F66\u3002</p></li></ul><p>\u5F97\u5230 <code>vue-github-src</code> \u9879\u76EE\u76EE\u5F55\uFF0C\u8FDB\u5165\u5230\u76EE\u5F55\u4E2D\u3002</p><h2 id="\u5F00\u53D1" tabindex="-1"><a class="header-anchor" href="#\u5F00\u53D1" aria-hidden="true">#</a> \u5F00\u53D1</h2><p>\u5B89\u88C5axios\u53D1\u9001ajax\u8BF7\u6C42\uFF0C<code>yarn add axios -S</code></p><ul><li>Index.vue</li></ul><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>post in posts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        {{ post.id }}: {{ post.title }}
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&#39;axios&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> url <span class="token operator">=</span> <span class="token string">&#39;https://jsonplaceholder.typicode.com/posts&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Index&#39;</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">posts</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>posts <span class="token operator">=</span> res<span class="token punctuation">.</span>data<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- Add &quot;scoped&quot; attribute to limit CSS to this component only --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><p>\u4E00\u500B\u6700\u7B80\u5355\u7684 Vue\uFF0C\u4ECE API Server \u83B7\u53D6\u6570\u636E\u5C55\u793A\u3002</p><h2 id="\u5EFA\u7ACB\u4ED3\u5E93" tabindex="-1"><a class="header-anchor" href="#\u5EFA\u7ACB\u4ED3\u5E93" aria-hidden="true">#</a> \u5EFA\u7ACB\u4ED3\u5E93</h2><ul><li>\u5EFA\u7ACB<code>vue-github-src</code>\u4ED3\u5E93\u5B58\u50A8\u6E90\u4EE3\u7801\u3002</li></ul>`,14),d=["src"],g=["src"],h=p(`<pre><code>- \u8F93\u5165 repository \u540D\u79F0\uFF1A\`vue-github-src\`
- \u6309 Create repository \u5EFA\u7ACB\u65B0\u7684 repository
</code></pre><ul><li>\u6309\u4E0A\u9762\u7684\u6B65\u9AA4\u5EFA\u7ACB<code>vue-github</code>\u5B58\u653E\u751F\u6210\u7684\u9759\u6001\u6587\u4EF6\u3002</li></ul><h2 id="vue-config-js" tabindex="-1"><a class="header-anchor" href="#vue-config-js" aria-hidden="true">#</a> vue.config.js</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">publicPath</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">&#39;production&#39;</span>
        <span class="token operator">?</span> <span class="token string">&#39;/vue-github/&#39;</span>
        <span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u5728 project \u6839\u76EE\u5F55\u4E0B\u5EFA\u7ACB <code>vue.config.js</code> \u8BBE\u7F6E <code>publicPath</code>\u3002</p><p>\u56E0\u4E3A\u521A\u521A\u5EFA\u7ACB\u4E86 vue-github repository\uFF0C\u5C06\u6765\u76EE\u5F55\u5982 <code>https://curder.github.io/vue-github</code>\uFF0C\u56E0\u6B64\u8BBE\u7F6E <code>publicPath</code> \u4E3A <code>/vue-github</code>\u3002</p><h2 id="\u63D0\u4EA4\u53D8\u66F4" tabindex="-1"><a class="header-anchor" href="#\u63D0\u4EA4\u53D8\u66F4" aria-hidden="true">#</a> \u63D0\u4EA4\u53D8\u66F4</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> remote <span class="token function">add</span> origin git@github.com:curder/vue-github-src.git

<span class="token function">git</span> push -u origin master
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="\u90E8\u7F72\u811A\u672C" tabindex="-1"><a class="header-anchor" href="#\u90E8\u7F72\u811A\u672C" aria-hidden="true">#</a> \u90E8\u7F72\u811A\u672C</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/usr/bin/env sh</span>

<span class="token comment"># abort on errors</span>
<span class="token builtin class-name">set</span> -e

<span class="token comment"># build</span>
<span class="token function">yarn</span> build

<span class="token comment"># navigate into the build output directory</span>
<span class="token builtin class-name">cd</span> dist

<span class="token function">git</span> init
<span class="token function">git</span> <span class="token function">add</span> -A
<span class="token function">git</span> commit -m <span class="token string">&#39;deploy&#39;</span>

<span class="token function">git</span> push -f git@github.com:curder/vue-github.git master

<span class="token builtin class-name">cd</span> -
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>\u6267\u884C <code>deploy.sh</code> build project \u5E76\u63A8\u9001\u5230 GitHub\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sh</span> ./deploy.sh
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>`,12),k=["src"],m=n("h2",{id:"\u8BBE\u5B9A-github-repository",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u8BBE\u5B9A-github-repository","aria-hidden":"true"},"#"),a(" \u8BBE\u5B9A GitHub Repository")],-1),v=n("p",null,"\u5728 vue-github \u4ED3\u5E93\u9875\u9762\u627E\u5230 Settings\u6309\u94AE\uFF0C\u70B9\u51FB\u3002",-1),y=["src"],f=n("p",null,"\u8DF3\u8F6C\u5230GitHub Pages\u914D\u7F6E\uFF0C\u9009\u62E9 master branch \u6309\u4E0B Save\u3002",-1),_=["src"],x=n("p",null,"\u51FA\u73B0\u4E86\u53EF\u8BBF\u95EE\u7684\u7F51\u9875\u5730\u5740\uFF0C\u5982\u679C\u60F3\u652F\u6301HTTPS\uFF0C\u52FE\u9009Enforce HTTPS\u3002",-1),j=["src"],w=n("p",null,[a("\u987A\u5229\u5C06 Vue project \u90E8\u7F72\u5230 GitHub Pages \u670D\u52A1\uFF0C\u5982\u679C\u65E0\u6CD5\u8BBF\u95EE\uFF0C\u81EA\u884C\u6DFB\u52A0"),n("code",null,"index.html"),a("\u3002")],-1),B=["src"],E=n("h2",{id:"\u53C2\u8003\u5730\u5740",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u53C2\u8003\u5730\u5740","aria-hidden":"true"},"#"),a(" \u53C2\u8003\u5730\u5740")],-1),A={href:"https://oomusou.io/vue/deployment/github/",target:"_blank",rel:"noopener noreferrer"},V=a("\u5982\u4F55\u5C07 Vue \u767C\u4F48\u5230 GitHub ?"),P={href:"https://yimogit.github.io/2017/07/24/%E4%BD%BF%E7%94%A8travis-ci%E8%87%AA%E5%8A%A8%E9%83%A8%E7%BD%B2github%E4%B8%8A%E7%9A%84%E9%A1%B9%E7%9B%AE/",target:"_blank",rel:"noopener noreferrer"},S=a("\u4F7F\u7528travis-ci\u96C6\u6210\u4E00\u4E2Avue.js\u9879\u76EE");function H(s,I){const e=o("ExternalLinkIcon");return c(),l(i,null,[b,n("img",{src:s.$withBase("/images/languages/vue/how-to-deployment-vue-project-to-github-pages/github-create-new-repository.png"),alt:""},null,8,d),n("img",{src:s.$withBase("/images/languages/vue/how-to-deployment-vue-project-to-github-pages/github-create-new-repository-write-info.png"),alt:""},null,8,g),h,n("img",{src:s.$withBase("/images/languages/vue/how-to-deployment-vue-project-to-github-pages/run-deployer-bash-push-code-to-github.png"),alt:""},null,8,k),m,v,n("img",{src:s.$withBase("/images/languages/vue/how-to-deployment-vue-project-to-github-pages/github-repository-setting-01.png"),alt:""},null,8,y),f,n("img",{src:s.$withBase("/images/languages/vue/how-to-deployment-vue-project-to-github-pages/github-repository-setting-02.png"),alt:""},null,8,_),x,n("img",{src:s.$withBase("/images/languages/vue/how-to-deployment-vue-project-to-github-pages/github-repository-setting-03.png"),alt:""},null,8,j),w,n("img",{src:s.$withBase("/images/languages/vue/how-to-deployment-vue-project-to-github-pages/github-repository-setting-04.png"),alt:""},null,8,B),E,n("ul",null,[n("li",null,[n("p",null,[n("a",A,[V,t(e)])])]),n("li",null,[n("p",null,[n("a",P,[S,t(e)])])])])],64)}var $=u(r,[["render",H]]);export{$ as default};
