import{_ as i,M as t,p as l,q as r,R as s,t as n,N as e,a1 as c}from"./framework-fb0bc66b.js";const o={},p=s("h1",{id:"使用supervisord管理进程",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#使用supervisord管理进程","aria-hidden":"true"},"#"),n(" 使用supervisord管理进程")],-1),d={href:"http://supervisord.org/",target:"_blank",rel:"noopener noreferrer"},u=s("code",null,"supervisor",-1),v=c(`<blockquote><p><strong>注意：</strong> <code>Supervisor</code>只能<strong>管理非daemon的进程</strong>，也就是说<code>Supervisor</code>不能管理守护进程。否则提示<code>Exited too quickly (process log may have details)</code>异常。</p></blockquote><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><p>这里使用<code>yum</code>安装，<code>supervisor</code>没有发布在标准的CentOS源里，需要安装<code>epel</code>源。</p><ul><li><p>默认配置文件：<code>/etc/supervisord.conf</code></p></li><li><p>进程管理配置文件放到：<code>/etc/supervisord.d/</code></p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yum install -y epel-release supervisor
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>supervisor</code>安装完成后会生成三个执行程序，它们分别是：</p><ul><li><p><code>supervisortd</code>：<code>supervisor</code>的守护进程服务（用于接收进程管理命令）</p></li><li><p><code>supervisorctl</code>：客户端（用于和守护进程通信，发送管理进程的指令）</p></li><li><p><code>echo_supervisord_conf</code>：生成初始配置文件程序</p></li></ul><h2 id="启动supervisor服务" tabindex="-1"><a class="header-anchor" href="#启动supervisor服务" aria-hidden="true">#</a> 启动Supervisor服务</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>supervisord <span class="token parameter variable">-c</span> /etc/supervisord.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="配置管理进程文件" tabindex="-1"><a class="header-anchor" href="#配置管理进程文件" aria-hidden="true">#</a> 配置管理进程文件</h2><p>使用<code>yum</code>安装的<code>supervisor</code>默认的主配置文件是<code>/etc/supervisord.conf</code>。</p><p>在实际环境中，不建议将进程管理配置参数写到这个主配置文件中，应该给每个进程单独写一个配置文件，默认主配置文件引入的文件是<code>/etc/supervisord.d/*.ini</code>。</p><p>下面是Nginx配置进程的一个例子，<strong>注意配置文件名的后缀</strong></p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">program:nginx</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">command</span> <span class="token punctuation">=</span> <span class="token value attr-value">/sbin/nginx                                   ; 程序路径</span>
<span class="token key attr-name">autostart</span> <span class="token punctuation">=</span> <span class="token value attr-value">true</span>
<span class="token key attr-name">autorestart</span> <span class="token punctuation">=</span> <span class="token value attr-value">true                                      ; 自动重启</span>
<span class="token key attr-name">priority</span> <span class="token punctuation">=</span> <span class="token value attr-value">999                                          ; 优先级</span>
<span class="token key attr-name">startsecs</span> <span class="token punctuation">=</span> <span class="token value attr-value">1                                           ; 重启前等待时间</span>
<span class="token key attr-name">startretries</span> <span class="token punctuation">=</span> <span class="token value attr-value">100                                      ; 最大重启次数</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>一定要将被supervisor所管理的进程在<strong>前台</strong>运行，如果进程正在运行，请先关闭。</p></blockquote><h3 id="重载配置" tabindex="-1"><a class="header-anchor" href="#重载配置" aria-hidden="true">#</a> 重载配置</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>supervisorctl reread <span class="token operator">&amp;&amp;</span> supervisorctl update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>执行完上面的命令，可以看到控制台会输出如下结果</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>nginx: available
nginx: added process group
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>至此使用 supervisord 管理<code>nginx</code>进程已经OK。</p><h2 id="终端管理进程" tabindex="-1"><a class="header-anchor" href="#终端管理进程" aria-hidden="true">#</a> 终端管理进程</h2><h3 id="终端交互" tabindex="-1"><a class="header-anchor" href="#终端交互" aria-hidden="true">#</a> 终端交互</h3><p><code>supervisord</code>启动成功后，可以通过<code>supervisorctl</code>客户端控制进程，启动、停止、重启。</p><p>运行<code>supervisorctl</code>命令，不加参数，会进入<code>supervisor</code>客户端的交互终端，并会列出当前所管理的所有进程。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@localhost ~]# supervisorctl
nginx                            RUNNING   pid 4423, uptime 0:00:02
supervisor&gt; help

default commands (type help &lt;topic&gt;):
=====================================
add    clear  fg        open  quit    remove  restart   start   stop  update
avail  exit   maintail  pid   reload  reread  shutdown  status  tail  version

supervisor&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>图中<code>nginx</code>就是上面在配置文件中第一行<code>[program:nginx]</code>指定。</p></blockquote><p>这么多的命令不知道怎么使用可以使用<code>help [命令名称]</code>，例如：<code>help stop</code>，则会有更详细的命令解释。</p><h3 id="bash终端命令" tabindex="-1"><a class="header-anchor" href="#bash终端命令" aria-hidden="true">#</a> Bash终端命令</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>supervisorctl status
supervisorctl stop nginx
supervisorctl start nginx
supervisorctl restart nginx
supervisorctl reread <span class="token comment"># 有新的配置文件加入到配置目录\`/etc/supervisord.d/\`使用命令重新读取配置。</span>
supervisorctl update <span class="token comment"># 配合reread使用</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="web管理界面" tabindex="-1"><a class="header-anchor" href="#web管理界面" aria-hidden="true">#</a> WEB管理界面</h3><p>默认配置没有开启WEB管理界面，需要修改主配置文件<code>supervisord.conf</code>配置文件中打开,并修改如下内容。</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token comment">;[inet_http_server]         ; inet (TCP) server disabled by default</span>
<span class="token comment">;port=127.0.0.1:9001        ; (ip_address:port specifier, *:port for all iface)</span>
<span class="token comment">;username=user              ; (default is no username (open server))</span>
<span class="token comment">;password=123               ; (default is no password (open server))</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改为：</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">inet_http_server</span><span class="token punctuation">]</span></span>         ; inet (TCP) server disabled by default
<span class="token key attr-name">port</span> <span class="token punctuation">=</span> <span class="token value attr-value">0.0.0.0:9001          ; (ip_address:port specifier, *:port for all iface)</span>
<span class="token key attr-name">username</span> <span class="token punctuation">=</span> <span class="token value attr-value">user              ; (default is no username (open server))</span>
<span class="token key attr-name">password</span> <span class="token punctuation">=</span> <span class="token value attr-value">123               ; (default is no password (open server))</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p><code>port</code>：绑定访问IP和端口，这里是绑定的是本地IP和<code>9001</code>端口</p></li><li><p><code>username</code>：登录管理后台的用户名</p></li><li><p><code>password</code>：登录管理后台的密码</p></li></ul><h2 id="配置开机启动supervisor服务" tabindex="-1"><a class="header-anchor" href="#配置开机启动supervisor服务" aria-hidden="true">#</a> 配置开机启动Supervisor服务</h2><p>添加systemctl服务和添加service服务二者选其一即可。</p><h3 id="添加systemctl服务" tabindex="-1"><a class="header-anchor" href="#添加systemctl服务" aria-hidden="true">#</a> 添加systemctl服务</h3><ol><li><p>创建supervisor.service文件。</p><blockquote><p>进入<code>/lib/systemd/system</code>目录，并创建<code>supervisor.service</code>文件，文件内容如下：</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">Unit</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">Description</span><span class="token punctuation">=</span><span class="token value attr-value">supervisor</span>
<span class="token key attr-name">After</span><span class="token punctuation">=</span><span class="token value attr-value">network.target</span>

<span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">Service</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">Type</span><span class="token punctuation">=</span><span class="token value attr-value">forking</span>
<span class="token key attr-name">ExecStart</span><span class="token punctuation">=</span><span class="token value attr-value">/usr/bin/supervisord -c /etc/supervisord.conf</span>
<span class="token key attr-name">ExecStop</span><span class="token punctuation">=</span><span class="token value attr-value">/usr/bin/supervisorctl $OPTIONS shutdown</span>
<span class="token key attr-name">ExecReload</span><span class="token punctuation">=</span><span class="token value attr-value">/usr/bin/supervisorctl $OPTIONS reload</span>
<span class="token key attr-name">KillMode</span><span class="token punctuation">=</span><span class="token value attr-value">process</span>
<span class="token key attr-name">Restart</span><span class="token punctuation">=</span><span class="token value attr-value">on-failure</span>
<span class="token key attr-name">RestartSec</span><span class="token punctuation">=</span><span class="token value attr-value">42s</span>

<span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">Install</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">WantedBy</span><span class="token punctuation">=</span><span class="token value attr-value">multi-user.target</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote></li><li><p>修改文件权限</p></li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">chmod</span> <span class="token number">766</span> supervisor.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>设置开机启动</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl <span class="token builtin class-name">enable</span> supervisor.service
systemctl daemon-reload
systemctl start/restart/stop supervisor.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>验证是否开机自启动</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl is-enabled supervisor
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="添加service服务" tabindex="-1"><a class="header-anchor" href="#添加service服务" aria-hidden="true">#</a> 添加service服务</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment">#</span>
<span class="token comment"># supervisord   This scripts turns supervisord on</span>
<span class="token comment">#</span>
<span class="token comment"># Author:       Mike McGrath &lt;mmcgrath@redhat.com&gt; (based off yumupdatesd)</span>
<span class="token comment">#</span>
<span class="token comment"># chkconfig:    - 95 04</span>
<span class="token comment">#</span>
<span class="token comment"># description:  supervisor is a process control utility.  It has a web based</span>
<span class="token comment">#               xmlrpc interface as well as a few other nifty features.</span>
<span class="token comment"># processname:  supervisord</span>
<span class="token comment"># config: /etc/supervisor/supervisord.conf</span>
<span class="token comment"># pidfile: /var/run/supervisord.pid</span>
<span class="token comment">#</span>

<span class="token comment"># source function library</span>
<span class="token builtin class-name">.</span> /etc/rc.d/init.d/functions

<span class="token assign-left variable">RETVAL</span><span class="token operator">=</span><span class="token number">0</span>

<span class="token function-name function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> $<span class="token string">&quot;Starting supervisord: &quot;</span>
    daemon <span class="token string">&quot;supervisord -c /etc/supervisord.conf &quot;</span>
    <span class="token assign-left variable">RETVAL</span><span class="token operator">=</span><span class="token variable">$?</span>
    <span class="token builtin class-name">echo</span>
    <span class="token punctuation">[</span> <span class="token variable">$RETVAL</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token function">touch</span> /var/lock/subsys/supervisord
<span class="token punctuation">}</span>

<span class="token function-name function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> $<span class="token string">&quot;Stopping supervisord: &quot;</span>
    killproc supervisord
    <span class="token builtin class-name">echo</span>
    <span class="token punctuation">[</span> <span class="token variable">$RETVAL</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token function">rm</span> <span class="token parameter variable">-f</span> /var/lock/subsys/supervisord
<span class="token punctuation">}</span>

<span class="token function-name function">restart</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    stop
    start
<span class="token punctuation">}</span>

<span class="token keyword">case</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span> <span class="token keyword">in</span>
  start<span class="token punctuation">)</span>
    start
    <span class="token punctuation">;</span><span class="token punctuation">;</span>
  stop<span class="token punctuation">)</span> 
    stop
    <span class="token punctuation">;</span><span class="token punctuation">;</span>
  restart<span class="token operator">|</span>force-reload<span class="token operator">|</span>reload<span class="token punctuation">)</span>
    restart
    <span class="token punctuation">;</span><span class="token punctuation">;</span>
  condrestart<span class="token punctuation">)</span>
    <span class="token punctuation">[</span> <span class="token parameter variable">-f</span> /var/lock/subsys/supervisord <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> restart
    <span class="token punctuation">;</span><span class="token punctuation">;</span>
  status<span class="token punctuation">)</span>
    status supervisord
    <span class="token assign-left variable">RETVAL</span><span class="token operator">=</span><span class="token variable">$?</span>
    <span class="token punctuation">;</span><span class="token punctuation">;</span>
  *<span class="token punctuation">)</span>
    <span class="token builtin class-name">echo</span> $<span class="token string">&quot;Usage: <span class="token variable">$0</span> {start|stop|status|restart|reload|force-reload|condrestart}&quot;</span>
    <span class="token builtin class-name">exit</span> <span class="token number">1</span>
<span class="token keyword">esac</span>

<span class="token builtin class-name">exit</span> <span class="token variable">$RETVAL</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将上面的代码内容保存到<code>/etc/rc.d/init.d/supervisor</code>文件并将文件权限修改为755，并设置开机自启动。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">chmod</span> <span class="token number">755</span> /etc/rc.d/init.d/supervisor
<span class="token function">chkconfig</span> supervisor on
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>其它Linux发行版开机启动脚本：https://github.com/Supervisor/initscripts</p><h2 id="参考地址" tabindex="-1"><a class="header-anchor" href="#参考地址" aria-hidden="true">#</a> 参考地址</h2>`,50),m={href:"https://blog.csdn.net/xyang81/article/details/51555473",target:"_blank",rel:"noopener noreferrer"};function b(k,h){const a=t("ExternalLinkIcon");return l(),r("div",null,[p,s("p",null,[s("a",d,[n("supervisord"),e(a)]),n("是一个进程管理工具，用来启动、停止、重启和监测进程，当程序挂掉后"),u,n("能够重新启动进程。")]),v,s("ul",null,[s("li",null,[s("a",m,[n("Supervisor安装与配置（Linux/Unix进程管理工具）"),e(a)])])])])}const f=i(o,[["render",b],["__file","how-to-use-supervisord-manager-processes.html.vue"]]);export{f as default};
