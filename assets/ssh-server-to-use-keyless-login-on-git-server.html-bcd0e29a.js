import{_ as t,M as d,p as r,q as c,R as e,t as s,N as n,a1 as i}from"./framework-ff09ffed.js";const l={},h=i(`<h1 id="git服务器上使用ssh协议授权免密码登录" tabindex="-1"><a class="header-anchor" href="#git服务器上使用ssh协议授权免密码登录" aria-hidden="true">#</a> Git服务器上使用SSH协议授权免密码登录</h1><p>在MaxOSX和CentOS上测试可以通过，Windows系统可以参考实现思路。</p><h2 id="基本的ssh配置" tabindex="-1"><a class="header-anchor" href="#基本的ssh配置" aria-hidden="true">#</a> 基本的SSH配置</h2><h3 id="使用命令生成ssh公钥和秘钥" tabindex="-1"><a class="header-anchor" href="#使用命令生成ssh公钥和秘钥" aria-hidden="true">#</a> 使用命令生成SSH公钥和秘钥</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ssh-keygen <span class="token parameter variable">-t</span> rsa <span class="token parameter variable">-C</span> <span class="token string">&quot;your_email@example.com&quot;</span> <span class="token parameter variable">-f</span> your_email_rsa
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>执行上面的命令会在当前用户的家目录下生成两个文件：<code>~/.ssh/your_email_rsa</code>秘钥和<code>~/.ssh/your_email_rsa.pub</code>公钥。</p><blockquote><p>其中参数<code>-C</code>的作用是提供一个备注，<code>-f</code>参数的作用是指定要生成文件名。更多参数可以使用<code>ssh-keygen --help</code>查看。</p></blockquote><h3 id="拷贝内容到第三方git平台" tabindex="-1"><a class="header-anchor" href="#拷贝内容到第三方git平台" aria-hidden="true">#</a> 拷贝内容到第三方Git平台</h3><h4 id="获取ssh公钥内容" tabindex="-1"><a class="header-anchor" href="#获取ssh公钥内容" aria-hidden="true">#</a> 获取SSH公钥内容</h4><p>通过下面的命令，获取上面使用<code>ssh-keygen</code>命令生成的公钥内容并拷贝。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> ~/.ssh/your_email_rsa.pub
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="将公钥内容复制至代码托管平台上" tabindex="-1"><a class="header-anchor" href="#将公钥内容复制至代码托管平台上" aria-hidden="true">#</a> 将公钥内容复制至代码托管平台上</h4>`,12),u={href:"https://github.com/",target:"_blank",rel:"noopener noreferrer"},p={href:"https://github.com/settings/profile",target:"_blank",rel:"noopener noreferrer"},b={href:"https://github.com/settings/keys",target:"_blank",rel:"noopener noreferrer"},g={href:"https://github.com/settings/ssh/new",target:"_blank",rel:"noopener noreferrer"},m=e("ul",null,[e("li",null,[s("在 "),e("strong",null,"Title"),s(" 文本框中输入一个标识字符")]),e("li",null,[s("在 "),e("strong",null,"Key"),s(" 文本框粘贴刚才复制的公钥字符串，即"),e("code",null,"YOUR_NAME.pub"),s("文件内容，按 "),e("code",null,"Add SSH Key"),s(" 按钮完成操作。")])],-1),v=["src"],_=i(`<h3 id="验证是否成功授权" tabindex="-1"><a class="header-anchor" href="#验证是否成功授权" aria-hidden="true">#</a> 验证是否成功授权</h3><p>在使用 <code>git</code> 命令与服务端进行交互之前，可以先验证下客户端和服务器是否握手成功。使用下面的命令验证 SSH 公钥是否正常。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ssh</span> <span class="token parameter variable">-T</span> git@github.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果正常的情况会提示 <code> Hi curder-blog! You&#39;ve successfully authenticated, but GitHub does not provide shell access.</code></p><p>但是在新装的机器上发生了一些问题，报错信息是 <code>Permission denied (publickey).</code>很明显是失败了。</p><p>修改SSH配置文件，<code>vim ~/.ssh/config</code>（如果没有此文件，可以打开终端，输入<code>touch ~/.ssh/config</code>生成此文件），配置域名并指定认证文件。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Host github.com
    HostName github.com
    User git
    IdentityFile ~/.ssh/your_email_rsa
    Port 22
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>如果 git 仓库机器的ssh端口不是默认的<code>22</code>，需要配置SSH配置<code>~/.ssh/config</code>的<strong>Port</strong>的值为当前环境的值。</p></blockquote><p>当我们使用ssh连接的时候，使用的认证文件是我们刚刚定义的，特别注意这里的<code>Host</code>、<code>HostName</code>、<code>Port</code>和<code>IdentityFile</code>，不要写错。</p><p>再次执行<code>ssh -T git@github.com</code>的时候，报错<code>Bad owner or permissions on ~/.ssh/config</code>。</p><p>从错误提示不难看出是权限出了问题，通过命令授权<code>chown $USER ~/.ssh/config &amp;&amp; chmod 644 ~/.ssh/config</code>。</p><p>再次执行<code>ssh -T git@github.com</code>则返回正常的欢迎信息。</p><p>至此，GIT服务器上使用SSH协议授权免密钥登录已经完成，可以欢快的 <code>pull &amp;&amp; push</code>啦😎😎</p><p>上面说到的情况是一个GitHub对应一个公钥、私钥。那么当我们需要在其他设备上也能免密码登录授权呢？</p><p>答案是在其他设备上使用上面的方式重新走一遍流程应该也能成功。</p><p>但是实际的情况往往是比较复杂的，这里依然以 GitHub 为例。</p><ol><li>拥有多个 GitHub 账户</li><li>已经配置了账户公钥，还需要给非自己账户下的项目配置部署公钥</li></ol><p>此时，又应该怎么操作呢？</p><h2 id="在同一设备上配置多个公钥" tabindex="-1"><a class="header-anchor" href="#在同一设备上配置多个公钥" aria-hidden="true">#</a> 在同一设备上配置多个公钥</h2><blockquote><p>一个公钥只能配置一个账户，一个账户可以关联多个公钥。比如当拥有多个设备，每个设备上可以生成一个公钥和对应的账户相关联，关联后此公钥便不能与其它的账户或项目进行关联。如果需要更换关联账户，请先在公钥设置里解绑公钥。</p></blockquote><h3 id="生成第二个公钥" tabindex="-1"><a class="header-anchor" href="#生成第二个公钥" aria-hidden="true">#</a> 生成第二个公钥</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ssh-keygen <span class="token parameter variable">-t</span> rsa <span class="token parameter variable">-C</span> <span class="token string">&quot;your_secondemail@email.com&quot;</span> <span class="token parameter variable">-f</span> ~/.ssh/second_rsa
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>注意将此处的『youre_secondemail@example.com』 换成您的个人邮箱，这里的文件名以<code>second_rsa</code>为例。</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Host github.com
    HostName github.com
    User git
    IdentityFile ~/.ssh/YOUR_NAME
    Port 22

Host second
    HostName github.com
    User git
    IdentityFile ~/.ssh/second_rsa  // 生成的第二个公钥
    Prot 22
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>如果 git 仓库机器的ssh端口不是默认的<code>22</code>，需要配置SSH配置<code>~/.ssh/config</code>的<strong>Port</strong>的值为当前环境的值。</p></blockquote><h3 id="克隆代码需要注意的地方" tabindex="-1"><a class="header-anchor" href="#克隆代码需要注意的地方" aria-hidden="true">#</a> 克隆代码需要注意的地方</h3><p>当克隆 GitHub 上的某个仓库时，之前的 Clone 地址是：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone git@github.com:curder/test.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>现在需要将 Clone 地址修改为：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone second:curder/test.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>命令行中的<code>second</code>是在ssh配置文件中<code>~/.ssh/config</code>中配置的Host的值。</p></blockquote><h2 id="参考地址" tabindex="-1"><a class="header-anchor" href="#参考地址" aria-hidden="true">#</a> 参考地址</h2>`,32),f={href:"https://coding.net/help/doc/git/ssh-key.html",target:"_blank",rel:"noopener noreferrer"},k={href:"https://deepzz.com/post/how-to-setup-ssh-config.html",target:"_blank",rel:"noopener noreferrer"},S={href:"http://www.cnblogs.com/hustskyking/p/problems-in-git-when-ssh.html",target:"_blank",rel:"noopener noreferrer"};function x(o,H){const a=d("ExternalLinkIcon");return r(),c("div",null,[h,e("p",null,[s("这里以GitHub为例，进入 "),e("a",u,[s("GiHub"),n(a)]),s(" --> "),e("a",p,[s("Setting"),n(a)]),s(" --> "),e("a",b,[s("SSH and GPG keys"),n(a)]),s(" ，点击 "),e("a",g,[s("New SSH key"),n(a)]),s(" 按钮。")]),m,e("img",{src:o.$withBase("/images/tools/git/ssh-server-to-use-keyless-login-on-git-server/github-save-ssh-key.png"),alt:"将公钥内容复制到代码托管平台"},null,8,v),_,e("ul",null,[e("li",null,[e("a",f,[s("SSH 公钥设置"),n(a)])]),e("li",null,[e("a",k,[s("SSH Config 那些你所知道和不知道的事"),n(a)])]),e("li",null,[e("a",S,[s("git/ssh捋不清的几个问题"),n(a)])])])])}const q=t(l,[["render",x],["__file","ssh-server-to-use-keyless-login-on-git-server.html.vue"]]);export{q as default};