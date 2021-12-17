"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9984],{5292:(s,e,n)=>{n.r(e),n.d(e,{data:()=>a});const a={key:"v-5a19f434",path:"/tools/homestead/how-to-install-php-redis-extension.html",title:"Homestead 安装 phpredis 扩展",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"编译php redis扩展",slug:"编译php-redis扩展",children:[]},{level:2,title:"引入扩展",slug:"引入扩展",children:[]},{level:2,title:"重启进程",slug:"重启进程",children:[]},{level:2,title:"参考链接",slug:"参考链接",children:[]}],filePathRelative:"tools/homestead/how-to-install-php-redis-extension.md",git:{updatedTime:1639727806e3,contributors:[{name:"curder",email:"q.curder@gmail.com",commits:1}]}}},2727:(s,e,n)=>{n.r(e),n.d(e,{default:()=>t});var a=n(6252);const p=(0,a.uE)('<h1 id="homestead-安装-phpredis-扩展" tabindex="-1"><a class="header-anchor" href="#homestead-安装-phpredis-扩展" aria-hidden="true">#</a> Homestead 安装 phpredis 扩展</h1><h2 id="编译php-redis扩展" tabindex="-1"><a class="header-anchor" href="#编译php-redis扩展" aria-hidden="true">#</a> 编译php redis扩展</h2><p>下面以编译php7.2版本为例，执行下面的命令之前先切换到<code>root</code>用户。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/phpredis/phpredis.git\n\n<span class="token builtin class-name">cd</span> phpredis\n\n/usr/bin/phpize7.2\n\n./configure --with-php-config<span class="token operator">=</span>/usr/bin/php-config7.2\n\n<span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>安装好的<code>redis.so</code>会存放在<code>/usr/lib/php/20170718/</code>目录下。</p><p>如果编译的不是这个版本的php，可以使用下面的命令获取扩展路径:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>php -i<span class="token operator">|</span><span class="token function">grep</span> extension_dir\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="引入扩展" tabindex="-1"><a class="header-anchor" href="#引入扩展" aria-hidden="true">#</a> 引入扩展</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;extension=redis.ini&#39;</span> <span class="token operator">&gt;</span> /etc/php/7.2/mods-available/redis.ini\n<span class="token function">sudo</span> <span class="token function">ln</span> -s /etc/php/7.2/mods-available/redis.ini /etc/php/7.2/fpm/conf.d/20-redis.ini\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><blockquote><p>注意：client模式也需要加上这个扩展，在<code>/etc/php/7.2/cli/php.ini</code>主配置文件也加上这个扩展。</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;extension=redis.so&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/php/7.2/cli/php.ini\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="重启进程" tabindex="-1"><a class="header-anchor" href="#重启进程" aria-hidden="true">#</a> 重启进程</h2><p>通过下面的命令重启php-fpm进程，打印<code>phpinfo();</code>查看是否成功安装拓展。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> systemctl restart php7.2-fpm.service\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote><p>如果是其他php扩展使用相同的方式即可。</p></blockquote><h2 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接" aria-hidden="true">#</a> 参考链接</h2>',16),i={href:"https://mudew.com/20180223/Homestead%E5%AE%89%E8%A3%85phpredis%E6%89%A9%E5%B1%95/",target:"_blank",rel:"noopener noreferrer"},l=(0,a.Uk)("Homestead 安装 phpredis 扩展"),r={},t=(0,n(3744).Z)(r,[["render",function(s,e){const n=(0,a.up)("OutboundLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[p,(0,a._)("ul",null,[(0,a._)("li",null,[(0,a._)("a",i,[l,(0,a.Wm)(n)])])])],64)}]])},3744:(s,e)=>{e.Z=(s,e)=>{const n=s.__vccOpts||s;for(const[s,a]of e)n[s]=a;return n}}}]);