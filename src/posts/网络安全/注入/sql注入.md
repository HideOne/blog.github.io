---
title: sql注入
category:
  - 网络安全
date: 2023-12-4 14:16:00
headerDepth: 2
---


## 注入原理

### 产生原因
- 没有检查用户参数 到账不合规参数 被当作sql语句执行 
  

### 本质
- 违背了数据与代码分离原则

## 注入常用数据库函数

- user()返回当前使用的用户
- version() 返回当前数据库的版本
- database() 返回当前使用的数据库
- group_concat() 把数据库中的某列数据或某几列数据合并为一个字符串
- @@datadir 数据库路径
- @@version_compile_os 操作系统版本