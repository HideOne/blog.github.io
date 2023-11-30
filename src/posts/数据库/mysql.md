---
title: mysql
date: 2023-11-25 12:20:41
category:
  - 数据库
---

## 安装

### 下载地址

```
https://dev.mysql.com/downloads/repo/yum/
```

### 安装步骤

安装前，我们可以检测系统是否自带安装 MySQL:

```
rpm -qa | grep mysql
```

如果你系统有安装，那可以选择进行卸载:

```
rpm -e mysql 　　// 普通删除模式
rpm -e --nodeps mysql 　　// 强力删除模式，如果使用上面命令删除时，提示有依赖的其它文件，则用该命令可以对其进行强力删除
```

### linux 内安装

```
wget http://repo.mysql.com/mysql-community-release-el7-5.noarch.rpm
rpm -ivh mysql-community-release-el7-5.noarch.rpm
yum update
yum install mysql-server
```

### 权限设置：

```
chown -R mysql:mysql /var/lib/mysql/
```

### 初始化 MySQL：

```
mysqld --initialize
```

### 启动 MySQL：

```
systemctl start mysqld
```

### 查看 MySQL 运行状态：

```
systemctl status mysqld
```

### 初始密码设置

**Mysql 安装成功后，默认的 root 用户密码为空，你可以使用以下命令来创建 root 用户的密码：**

```
[root@host]## mysqladmin -u root password "new_password";
```

**现在你可以通过以下命令来连接到 Mysql 服务器：**

```
[root@host]## mysql -u root -p
Enter password:**\*\*\***
```

## mysql 管理

### 检查 mysql 启动

```
ps -ef | grep mysqld
```

### 关闭 mysql 服务

```
root@host## cd /usr/bin
./mysqladmin -u root -p shutdown
Enter password: ******
```

### mysql 命令

#### 列出 MySQL 数据库管理系统的数据库列表。

```
SHOW DATABASES:
列出 MySQL 数据库管理系统的数据库列表
```

#### 显示指定数据库的所有表

```
SHOW TABLES:
显示指定数据库的所有表，使用该命令前需要使用 use 命令来选择要操作的数据库。
```

#### 显示数据表的属性

```
SHOW COLUMNS FROM 数据表:
显示数据表的属性，属性类型，主键信息 ，是否为 NULL，默认值等其他信息。
```

#### 创建数据库

```
CREATE DATABASE 数据库名:
创建数据库
```

#### 删除数据库

```
drop database <数据库名>;
```

#### 数值类型

| 类型           | 大小                                          | 范围（有符号）                                                                                                                      | 范围（无符号）                                                    | 用途            |
| -------------- | --------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- | --------------- |
| TINYINT        | 1 Bytes                                       | (-128，127)                                                                                                                         | (0，255)                                                          | 小整数值        |
| SMALLINT       | 2 Bytes                                       | (-32 768，32 767)                                                                                                                   | (0，65 535)                                                       | 大整数值        |
| MEDIUMINT      | 3 Bytes                                       | (-8 388 608，8 388 607)                                                                                                             | (0，16 777 215)                                                   | 大整数值        |
| INT 或 INTEGER | 4 Bytes                                       | (-2 147 483 648，2 147 483 647)                                                                                                     | (0，4 294 967 295)                                                | 大整数值        |
| BIGINT         | 8 Bytes                                       | (-9,223,372,036,854,775,808，9 223 372 036 854 775 807)                                                                             | (0，18 446 744 073 709 551 615)                                   | 极大整数值      |
| FLOAT          | 4 Bytes                                       | (-3.402 823 466 E+38，-1.175 494 351 E-38)，0，(1.175 494 351 E-38，3.402 823 466 351 E+38)                                         | 0，(1.175 494 351 E-38，3.402 823 466 E+38)                       | 单精度浮点数值  |
| DOUBLE         | 8 Bytes                                       | (-1.797 693 134 862 315 7 E+308，-2.225 073 858 507 201 4 E-308)，0，(2.225 073 858 507 201 4 E-308，1.797 693 134 862 315 7 E+308) | 0，(2.225 073 858 507 201 4 E-308，1.797 693 134 862 315 7 E+308) | 双精度 浮点数值 |
| DECIMAL        | 对 DECIMAL(M,D) ，如果 M>D，为 M+2 否则为 D+2 | 依赖于 M 和 D 的值                                                                                                                  | 依赖于 M 和 D 的值                                                | 小数            |

#### 字符串类型

| 类型       | 大小                  | 用途                            |
| ---------- | --------------------- | ------------------------------- |
| CHAR       | 0-255 bytes           | 定长字符串                      |
| VARCHAR    | 0-65535 bytes         | 变长字符串                      |
| TINYBLOB   | 0-255 bytes           | 不超过 255 个字符的二进制字符串 |
| TINYTEXT   | 0-255 bytes           | 短文本字符串                    |
| BLOB       | 0-65 535 bytes        | 二进制形式的长文本数据          |
| TEXT       | 0-65 535 bytes        | 长文本数据                      |
| MEDIUMBLOB | 0-16 777 215 bytes    | 二进制形式的中等长度文本数据    |
| MEDIUMTEXT | 0-16 777 215 bytes    | 中等长度文本数据                |
| LONGBLOB   | 0-4 294 967 295 bytes | 二进制形式的极大文本数据        |
| LONGTEXT   | 0-4 294 967 295 bytes | 极大文本数据                    |

#### 创建数据表

```
CREATE TABLE table_name (column_name column_type);
以下例子中我们将在 RUNOOB 数据库中创建数据表runoob_tbl：

CREATE TABLE IF NOT EXISTS `runoob_tbl`(
   `runoob_id` INT UNSIGNED AUTO_INCREMENT,
   `runoob_title` VARCHAR(100) NOT NULL,
   `runoob_author` VARCHAR(40) NOT NULL,
   `submission_date` DATE,
   PRIMARY KEY ( `runoob_id` )
)ENGINE=InnoDB DEFAULT CHARSET=utf8;
```

- 如果你不想字段为 NULL 可以设置字段的属性为 NOT NULL， 在操作数据库时如果输入该字段的数据为 NULL ，就会报错。
- AUTO_INCREMENT 定义列为自增的属性，一般用于主键，数值会自动加 1。
- PRIMARY KEY 关键字用于定义列为主键。 您可以使用多列来定义主键，列间以逗号分隔。
- ENGINE 设置存储引擎，CHARSET 设置编码。

#### 插入数据

```
INSERT INTO table_name ( field1, field2,...fieldN )
                       VALUES
                       ( value1, value2,...valueN );


```

```
root@host## mysql -u root -p password;
Enter password:*******
mysql> use RUNOOB;
Database changed
mysql> INSERT INTO runoob_tbl
    -> (runoob_title, runoob_author, submission_date)
    -> VALUES
    -> ("学习 PHP", "菜鸟教程", NOW());
Query OK, 1 rows affected, 1 warnings (0.01 sec)
mysql> INSERT INTO runoob_tbl
    -> (runoob_title, runoob_author, submission_date)
    -> VALUES
    -> ("学习 MySQL", "菜鸟教程", NOW());
Query OK, 1 rows affected, 1 warnings (0.01 sec)
mysql> INSERT INTO runoob_tbl
    -> (runoob_title, runoob_author, submission_date)
    -> VALUES
    -> ("JAVA 教程", "RUNOOB.COM", '2016-05-06');
Query OK, 1 rows affected (0.00 sec)
```

#### 查询数据

```
SELECT column_name,column_name
FROM table_name
[WHERE Clause]
[LIMIT N][ OFFSET M]
```

```
select * from runoob_tbl;
```

```
SELECT * from runoob_tbl WHERE runoob_author='菜鸟教程';
```

- 查询语句中你可以使用一个或者多个表，表之间使用逗号(,)分割，并使用 WHERE 语句来设定查询条件。
- SELECT 命令可以读取一条或者多条记录。
- 你可以使用星号（\*）来代替其他字段，SELECT 语句会返回表的所有字段数据
- 你可以使用 WHERE 语句来包含任何条件。
- 你可以使用 LIMIT 属性来设定返回的记录数。
- 你可以通过 OFFSET 指定 SELECT 语句开始查询的数据偏移量。默认情况下偏移量为 0。

#### UPDATE 更新

```
UPDATE table_name SET field1=new-value1, field2=new-value2
[WHERE Clause]

mysql> UPDATE runoob_tbl SET runoob_title='学习 C++' WHERE runoob_id=3;
```

- 你可以同时更新一个或多个字段。
- 你可以在 WHERE 子句中指定任何条件。
- 你可以在一个单独表中同时更新数据。

**%是通配符**

```
mysql> SELECT * from runoob_tbl  WHERE runoob_author LIKE '%COM';
```

#### UNION 操作符

- UNION 操作符用于连接两个以上的 SELECT 语句的结果组合到一个结果集合中。多个 SELECT 语句会删除重复的数据

```
SELECT expression1, expression2, ... expression_n
FROM tables
[WHERE conditions]
UNION [ALL | DISTINCT]
SELECT expression1, expression2, ... expression_n
FROM tables
[WHERE conditions];
```

- expression1, expression2, ... expression_n: 要检索的列。
- tables: 要检索的数据表。
- WHERE conditions: 可选， 检索条件。
- DISTINCT: 可选，删除结果集中重复的数据。默认情况下 UNION 操作符已经删除了重复数据，所以 DISTINCT 修饰符对结果没啥影响。
- ALL: 可选，返回所有结果集，包含重复数据。

**例子**

```
SELECT country FROM Websites
UNION ALL
SELECT country FROM apps
ORDER BY country;
```

#### 排序 ORDER BY

`SELECT * from runoob_tbl ORDER BY submission_date ASC`

#### 连接

- INNER JOIN（内连接,或等值连接）：获取两个表中字段匹配关系的记录。
- LEFT JOIN（左连接）：获取左表所有记录，即使右表没有对应匹配的记录。
- RIGHT JOIN（右连接）： 与 LEFT JOIN 相反，用于获取右表所有记录，即使左表没有对应匹配的记录。

#### 事务

- 原子性处理一系列操作

```
-- 开始事务
START TRANSACTION;

-- 执行一些SQL语句
UPDATE accounts SET balance = balance - 100 WHERE user_id = 1;
UPDATE accounts SET balance = balance + 100 WHERE user_id = 2;

-- 判断是否要提交还是回滚
IF (条件) THEN
    COMMIT; -- 提交事务
ELSE
    ROLLBACK; -- 回滚事务
```

#### 索引

- 大大提高数据库检索速度

#### 临时表

- 临时表只在当前连接可见，当关闭连接时，Mysql 会自动删除表并释放所有空间。
