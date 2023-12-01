---
title: centos7安装
date: 2023-11-25 12:36:41
category:
  - linux
---

## 下载

```
# centOs
https://mirrors.aliyun.com/centos/7/isos/x86_64/

# kali
https://cdimage.kali.org/kali-weekly/
```

[下载地址]("https://mirrors.aliyun.com/centos/7/isos/x86_64/")

## 安装

- 语言选择
  - 安装英文版
- ip 地址查询
  - ifconfig
  - ip addr show
- 配置网卡配置
  - vi/vim /etc/sysconfig/network-scripts/ifcfg-ens33 没有就创建
  ```
    TYPE="Ethernet"
    PROXY_METHOD="none"
    BROWSER_ONLY="no"
    BOOTPROTO="static"					#静态注册
    DEFROUTE="yes"
    IPV4_FAILURE_FATAL="no"
    IPV6INIT="yes"
    IPV6_AUTOCONF="yes"
    IPV6_DEFROUTE="yes"
    IPV6_FAILURE_FATAL="no"
    IPV6_ADDR_GEN_MODE="stable-privacy"
    NAME="ens33"
    UUID="26c6dba1-1bde-440a-8f4e-2d6a2d6fc41a"
    DEVICE="ens33"
    ONBOOT="yes"						#开机自动启动网卡
    IPADDR="192.168.3.55"				#和网关在同一网段，最后一位取1~254之间
    PREFIX="24"
    GATEWAY="192.168.3.1"				#网关
    NETMASK="255.255.255.0"				#子网掩码
    IPV6_PRIVACY="no"
    [root@junzi ~]#
  ```
