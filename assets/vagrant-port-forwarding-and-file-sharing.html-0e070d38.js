import{_ as r,M as d,p as s,q as l,R as e,t,N as i,a1 as a}from"./framework-96b046e1.js";const u={},c=e("h1",{id:"vagrant端口转发和文件共享",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#vagrant端口转发和文件共享","aria-hidden":"true"},"#"),t(" Vagrant端口转发和文件共享")],-1),v=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"操作"),e("th",{style:{"text-align":"left"}},"解释")])],-1),g={style:{"text-align":"center"}},m={href:"https://www.vagrantup.com/docs/networking/forwarded_ports.html",title:"vagrant端口转发文档地址",target:"_blank",rel:"noopener noreferrer"},h=e("td",{style:{"text-align":"left"}},"将本机具体端口转发到指定虚拟机端口",-1),b={style:{"text-align":"center"}},p={href:"https://www.vagrantup.com/docs/synced-folders/",title:"vagrant官网共享目录文档地址",target:"_blank",rel:"noopener noreferrer"},f=e("td",{style:{"text-align":"left"}},"将本机具体目录和虚拟机共享",-1),q=e("tr",null,[e("td",{style:{"text-align":"center"}},"网络配置"),e("td",{style:{"text-align":"left"}},"公有网络、私有网络和Host Only三种网络配置方式")],-1),_=a(`<h4 id="端口转发" tabindex="-1"><a class="header-anchor" href="#端口转发" aria-hidden="true">#</a> 端口转发</h4><p>将下面的代码段写入到vagrant的Vagrantfile配置文件中。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>config.vm.network &quot;forwarded_port&quot;, guest: 80, host: 8888
config.vm.network &quot;forwarded_port&quot;, guest: 8888, host: 8889
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>将虚拟机的 <code>80</code> 端口映射到本地机的 <code>8888</code> 端口以及虚拟机的 <code>8888</code> 端口映射到本地机的 <code>8889</code> 端口，使用<code>vagrant reload</code>重启虚拟机生效。 **注意：**这里所说的虚拟机为vagrant虚拟机，本地机为Mac开发机。</p></blockquote><p>我们来到 VirtualBox 中可以在虚拟机的 “设置” =&gt; &quot;网络&quot; =&gt; &quot;高级&quot; =&gt; &quot;端口转发&quot;</p>`,5),w=["src"],x=a(`<h4 id="共享目录" tabindex="-1"><a class="header-anchor" href="#共享目录" aria-hidden="true">#</a> 共享目录</h4><p>将下面的代码段写入到vagrant的Vagrantfile配置文件中。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>config.vm.synced_folder &quot;/Users/curder/website&quot;, &quot;/var/www/html&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>将本机<code>/Users/curder/website</code> 目录共享到虚拟机的<code>/var/www/html</code></p></blockquote><h4 id="网络配置" tabindex="-1"><a class="header-anchor" href="#网络配置" aria-hidden="true">#</a> 网络配置</h4><ul><li>配置私有网络IP</li></ul><p>将下面的代码段写入到vagrant的Vagrantfile配置文件中。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>config.vm.network &quot;private_network&quot;, ip: &quot;192.168.50.4&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>配置共有网络IP</li></ul><p>将下面的代码段写入到vagrant的Vagrantfile配置文件中。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>config.vm.network &quot;private_network&quot;, ip: &quot;192.168.33.100&quot;, auto_config: true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>**注意：**公有网络IP配置需要和Mac本机的IP保持在一个网段，并且不能和其他主机ip冲突。</p></blockquote><h3 id="典型的vagrantfile配置" tabindex="-1"><a class="header-anchor" href="#典型的vagrantfile配置" aria-hidden="true">#</a> 典型的Vagrantfile配置</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure(&quot;2&quot;) do |config|
config.vm.box = &quot;ubuntu1404&quot;
config.vm.hostname = &quot;developer&quot;
config.vm.network &quot;forwarded_port&quot;, guest: 80, host: 8888 ,id: &#39;nginx&#39;
config.vm.network &quot;forwarded_port&quot;, guest: 8888, host: 8889 ,id: &#39;apache&#39;
config.vm.network &quot;private_network&quot;, ip: &quot;192.168.199.101&quot;,auto_config: true
config.vm.synced_folder &quot;/Users/curder/website/&quot;, &quot;/home/www&quot;, :nfs =&gt; true
#config.vm.synced_folder &quot;/Users/curder/website/&quot;, &quot;/home/www&quot;, :nfs =&gt; true

config.vm.provider &quot;virtualbox&quot; do |vb|
# # Display the VirtualBox GUI when booting the machine
# vb.gui = true
#
# # Customize the amount of memory on the VM:
vb.memory = &quot;1024&quot;
vb.cpus = 2
vb.name = &quot;ubuntu_developer&quot;
end


# Enable provisioning with a shell script. Additional provisioners such as
# Puppet, Chef, Ansible, Salt, and Docker are also available. Please see the
# documentation for more information about their specific syntax and use.
# config.vm.provision &quot;shell&quot;, inline: &lt;&lt;-SHELL
# apt-get update
# apt-get install -y apache2
# SHELL
end
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14);function k(o,y){const n=d("ExternalLinkIcon");return s(),l("div",null,[c,e("table",null,[v,e("tbody",null,[e("tr",null,[e("td",g,[t("端口转发（"),e("a",m,[t("文档地址"),i(n)]),t("）")]),h]),e("tr",null,[e("td",b,[t("共享目录（"),e("a",p,[t("文档地址"),i(n)]),t("）")]),f]),q])]),_,e("img",{src:o.$withBase("/images/tools/vagrant/forwarded_ports.png"),alt:""},null,8,w),x])}const I=r(u,[["render",k],["__file","vagrant-port-forwarding-and-file-sharing.html.vue"]]);export{I as default};
