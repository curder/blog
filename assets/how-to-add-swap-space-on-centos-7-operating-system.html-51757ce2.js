import{_ as s,p as n,q as a,a1 as e}from"./framework-fb0bc66b.js";const c={},p=e(`<h1 id="如何在-centos-7-上新增-swap-分区" tabindex="-1"><a class="header-anchor" href="#如何在-centos-7-上新增-swap-分区" aria-hidden="true">#</a> 如何在 CentOS 7 上新增 swap 分区</h1><p>交换空间是磁盘上的唯一空间，当物理 RAM 已满时系统将使用该空间，当 Linux 机器耗尽 RAM 时，它使用交换空间从 RAM 中移动非活动页面。</p><p>要在 CentOS 7 操作系统上添加交换空间，可以使用以下两种方法，一种是为交换创建专用分区，另一种是创建交换文件并将其用作交换空间。</p><p>一般在云主机上可以通过创建交换文件并将其作为交换空间，用于机器在编译等重度需要内存的情况下使用。</p><h2 id="一些命令" tabindex="-1"><a class="header-anchor" href="#一些命令" aria-hidden="true">#</a> 一些命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看SWAP信息是否正确</span>
<span class="token function">sudo</span> <span class="token function">swapon</span> <span class="token parameter variable">-s</span>

<span class="token comment"># 创建分区路径</span>
<span class="token function">sudo</span> <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /var/cache/swap/

<span class="token comment"># 设置分区的大小</span>
<span class="token comment"># bs=64M是块大小，count=64是块数量，所以swap空间大小是bs*count=4096MB=4GB</span>
<span class="token function">sudo</span> <span class="token function">dd</span> <span class="token assign-left variable">if</span><span class="token operator">=</span>/dev/zero <span class="token assign-left variable">of</span><span class="token operator">=</span>/var/cache/swap/swap0 <span class="token assign-left variable">bs</span><span class="token operator">=</span>64M <span class="token assign-left variable">count</span><span class="token operator">=</span><span class="token number">64</span>

<span class="token comment"># 设置目录权限</span>
<span class="token function">sudo</span> <span class="token function">chmod</span> 0600 /var/cache/swap/swap0

<span class="token comment"># 创建并激活交换文件</span>
<span class="token function">sudo</span> <span class="token function">mkswap</span> /var/cache/swap/swap0 <span class="token operator">&amp;&amp;</span> <span class="token function">sudo</span> <span class="token function">swapon</span> /var/cache/swap/swap0

---
<span class="token comment"># 删除交换分区</span>
<span class="token function">sudo</span> swapoff /var/cache/swap/swap0 <span class="token operator">&amp;&amp;</span> <span class="token function">sudo</span> <span class="token function">rm</span> /var/cache/swap/swap0
<span class="token comment"># 释放空间</span>
<span class="token function">sudo</span> swapoff <span class="token parameter variable">-a</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),o=[p];function i(t,l){return n(),a("div",null,o)}const r=s(c,[["render",i],["__file","how-to-add-swap-space-on-centos-7-operating-system.html.vue"]]);export{r as default};
