import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as e,c as n,a as t}from"./app-G34dvyA3.js";const s={},l=t(`<h2 id="下载" tabindex="-1"><a class="header-anchor" href="#下载" aria-hidden="true">#</a> 下载</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># centOs
https://mirrors.aliyun.com/centos/7/isos/x86_64/

# kali
https://cdimage.kali.org/kali-weekly/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="%22https://mirrors.aliyun.com/centos/7/isos/x86_64/%22">下载地址</a></p><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><ul><li>语言选择 <ul><li>安装英文版</li></ul></li><li>ip 地址查询 <ul><li>ifconfig</li><li>ip addr show</li></ul></li><li>配置网卡配置 <ul><li>vi/vim /etc/sysconfig/network-scripts/ifcfg-ens33 没有就创建</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  TYPE=&quot;Ethernet&quot;
  PROXY_METHOD=&quot;none&quot;
  BROWSER_ONLY=&quot;no&quot;
  BOOTPROTO=&quot;static&quot;					#静态注册
  DEFROUTE=&quot;yes&quot;
  IPV4_FAILURE_FATAL=&quot;no&quot;
  IPV6INIT=&quot;yes&quot;
  IPV6_AUTOCONF=&quot;yes&quot;
  IPV6_DEFROUTE=&quot;yes&quot;
  IPV6_FAILURE_FATAL=&quot;no&quot;
  IPV6_ADDR_GEN_MODE=&quot;stable-privacy&quot;
  NAME=&quot;ens33&quot;
  UUID=&quot;26c6dba1-1bde-440a-8f4e-2d6a2d6fc41a&quot;
  DEVICE=&quot;ens33&quot;
  ONBOOT=&quot;yes&quot;						#开机自动启动网卡
  IPADDR=&quot;192.168.3.55&quot;				#和网关在同一网段，最后一位取1~254之间
  PREFIX=&quot;24&quot;
  GATEWAY=&quot;192.168.3.1&quot;				#网关
  NETMASK=&quot;255.255.255.0&quot;				#子网掩码
  IPV6_PRIVACY=&quot;no&quot;
  [root@junzi ~]#
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul>`,5),d=[l];function u(a,o){return e(),n("div",null,d)}const v=i(s,[["render",u],["__file","linux安装.html.vue"]]);export{v as default};
