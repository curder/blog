import{_ as s,M as n,p as t,q as r,R as e,t as o,N as i,a1 as c}from"./framework-ff09ffed.js";const l={},h=c(`<h1 id="ssh登陆远程主机后的操作" tabindex="-1"><a class="header-anchor" href="#ssh登陆远程主机后的操作" aria-hidden="true">#</a> SSH登陆远程主机后的操作</h1><p>通过在终端中执行下面的命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ssh</span> user@hostname <span class="token parameter variable">-t</span> <span class="token string">&#39;cd /var/www/html/; bash --login&#39;</span>
<span class="token function">ssh</span> user@hostname <span class="token parameter variable">-t</span> <span class="token string">&#39;ls -l; bash --login&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接" aria-hidden="true">#</a> 参考链接</h2>`,4),d={href:"https://blog.csdn.net/fight4gold/article/details/50327383",target:"_blank",rel:"noopener noreferrer"};function p(u,m){const a=n("ExternalLinkIcon");return t(),r("div",null,[h,e("ul",null,[e("li",null,[e("a",d,[o("SSH登陆远程主机后进入指定目录或执行命令"),i(a)])])])])}const _=s(l,[["render",p],["__file","after-logging-in-to-the-remote-host-through-ssh-enter-the-specified-directory-or-execute-the-command.html.vue"]]);export{_ as default};