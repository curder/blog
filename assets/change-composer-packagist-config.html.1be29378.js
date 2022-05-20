import{_ as o,r as c,o as r,c as i,b as e,a as s,F as t,e as l,d as n}from"./app.25d4da55.js";const d={},p=l(`<h1 id="\u4FEE\u6539composer\u955C\u50CF\u4E0B\u8F7D\u5730\u5740" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539composer\u955C\u50CF\u4E0B\u8F7D\u5730\u5740" aria-hidden="true">#</a> \u4FEE\u6539Composer\u955C\u50CF\u4E0B\u8F7D\u5730\u5740</h1><h2 id="\u67E5\u770B\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u914D\u7F6E" aria-hidden="true">#</a> \u67E5\u770B\u914D\u7F6E</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">composer</span> config -l -g <span class="token comment"># \u5168\u5C40\u914D\u7F6E</span>
<span class="token function">composer</span> config -g repo.packagist <span class="token comment"># \u9879\u76EE\u914D\u7F6E</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4FEE\u6539\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539\u914D\u7F6E" aria-hidden="true">#</a> \u4FEE\u6539\u914D\u7F6E</h2><blockquote><p>\u955C\u50CF\u5730\u5740\u6709\uFF1A<code>https://php.cnpkg.org</code>\u3001<code>https://packagist.phpcomposer.com</code> \u548C <code>https://packagist.laravel-china.org</code> \u7B49\u53EF\u4F9B\u9009\u62E9\uFF0C\u8FD9\u91CC\u4EE5<code>php.cnpkg.org</code>\u914D\u7F6E\u4E3A\u4F8B\u3002</p></blockquote><ul><li>\u5168\u5C40\u914D\u7F6E</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">composer</span> config -g repos.packagist <span class="token function">composer</span> https://php.cnpkg.org
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u5355\u72EC\u9879\u76EE\u914D\u7F6E</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">composer</span> config repo.packagist <span class="token function">composer</span> https://php.cnpkg.org
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u5173\u95ED\u5168\u5C40\u914D\u7F6E</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">composer</span> config -g --unset repos.packagist
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u8FD8\u539F\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u8FD8\u539F\u914D\u7F6E" aria-hidden="true">#</a> \u8FD8\u539F\u914D\u7F6E</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">composer</span> config -g repo.packagist <span class="token function">composer</span> https://packagist.org
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u53C2\u8003\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u94FE\u63A5" aria-hidden="true">#</a> \u53C2\u8003\u94FE\u63A5</h2>`,14),h={href:"https://php.cnpkg.org/",target:"_blank",rel:"noopener noreferrer"},g=n("Composer / Packagist \u4E2D\u56FD\u5168\u91CF\u955C\u50CF"),u={href:"https://pkg.phpcomposer.com/",target:"_blank",rel:"noopener noreferrer"},m=n("Packagist / Composer \u4E2D\u56FD\u5168\u91CF\u955C\u50CF");function k(b,v){const a=c("ExternalLinkIcon");return r(),i(t,null,[p,e("ul",null,[e("li",null,[e("a",h,[g,s(a)])]),e("li",null,[e("a",u,[m,s(a)])])])],64)}var _=o(d,[["render",k],["__file","change-composer-packagist-config.html.vue"]]);export{_ as default};
