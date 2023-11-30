---
title: Shell
---

## 什么是 Shell

- Shell 是一个用 C 语言编写的程序，是用户使用 Linux 的桥梁。
- Shell 脚本（shell script），是一种为 shell 编写的脚本程序

## 声明变量

```
RUNOOB="www.runoob.com"
LD_LIBRARY_PATH="/bin/"
_var="123"
var2="abc"
```

### 只读变量

```shell
#!/bin/bash
myUrl="https://www.google.com"
readonly myUrl
myUrl="https://www.runoob.com"
```

### 数组定义

```shell
my_array=(A B "C" D)

my_array[0]=value0
my_array[1]=value1
my_array[2]=value2

# 读取元素
${array_name[index]}

# 关联数组
# 方式一
declare -A site=(["google"]="www.google.com" ["runoob"]="www.runoob.com" ["taobao"]="www.taobao.com")

# 方式二
declare -A site
site["google"]="www.google.com"
site["runoob"]="www.runoob.com"
site["taobao"]="www.taobao.com"
# 读取
${site["runoob"]}
```

### 取数组中所有元素

```shell
${my_array[*]}
${my_array[@]}
```

## 参数处理特殊符号

| 参数 | 说明                                                                                                                       |
| ---- | -------------------------------------------------------------------------------------------------------------------------- |
| $#   | 传递到脚本的参数个数                                                                                                       |
| $\*  | 以一个单字符串显示所有向脚本传递的参数。如"\$\*"用「"」括起来的情况、以"\$1 \$2 … \$n"的形式输出所有参数。                 |
| $!   | 后台运行的最后一个进程的 ID 号                                                                                             |
| $@   | 与$\*相同，但是使用时加引号，并在引号中返回每个参数。如"\$@"用「"」括起来的情况、以"\$1" "\$2" … "\$n"的形式输出所有参数。 |
| $-   | 显示 Shell 使用的当前选项，与 set 命令功能相同。                                                                           |
| $?   | 显示最后命令的退出状态。0 表示没有错误，其他任何值表明有错误。                                                             |

## 运算符

| 运算符 | 说明   | 举例                         |
| ------ | ------ | ---------------------------- |
| +      | 加法   | `expr $a + $b` 结果为 30。   |
| -      | 减法   | `expr $a - $b` 结果为 -10。  |
| \*     | 乘法   | `expr $a \* $b` 结果为 200。 |
| /      | 除法   | `expr $b / $a` 结果为 2。    |
| %      | 取余   | `expr $b % $a` 结果为 0。    |
| =      | 赋值   | a=$b 把变量 b 的值赋给 a。   |
| ==     | 相等   | [ $a == $b ] 返回 false。    |
| !=     | 不相等 | [ $a != $b ] 返回 true。     |

```shell
a=10
b=20

val=`expr $a + $b`
echo "a + b : $val"

val=`expr $a - $b`
echo "a - b : $val"

val=`expr $a \* $b`
echo "a * b : $val"

val=`expr $b / $a`
echo "b / a : $val"

val=`expr $b % $a`
echo "b % a : $val"

if [ $a == $b ]
then
   echo "a 等于 b"
fi
if [ $a != $b ]
then
   echo "a 不等于 b"
fi
```

## shell 函数

### printf

```shell
printf "%-10s %-8s %-4s\n" 姓名 性别 体重kg
printf "%-10s %-8s %-4.2f\n" 郭靖 男 66.1234
printf "%-10s %-8s %-4.2f\n" 杨过 男 48.6543
printf "%-10s %-8s %-4.2f\n" 郭芙 女 47.9876

姓名     性别   体重kg
郭靖     男      66.12
杨过     男      48.65
郭芙     女      47.99
```

### test

- 用于检查某个条件是否成立，它可以进行数值、字符和文件三个方面的测试

```shell
num1=100
num2=100
if test $[num1] -eq $[num2]
then
    echo '两个数相等！'
else
    echo '两个数不相等！'
fi
```

| 参数      | 说明                     |
| --------- | ------------------------ |
| =         | 等于则为真               |
| !=        | 不相等则为真             |
| -z 字符串 | 字符串的长度为零则为真   |
| -n 字符串 | 字符串的长度不为零则为真 |

#### 文件测试

| 参数      | 说明                                 |
| --------- | ------------------------------------ |
| -e 文件名 | 如果文件存在则为真                   |
| -r 文件名 | 如果文件存在且可读则为真             |
| -w 文件名 | 如果文件存在且可写则为真             |
| -x 文件名 | 如果文件存在且可执行则为真           |
| -s 文件名 | 如果文件存在且至少有一个字符则为真   |
| -d 文件名 | 如果文件存在且为目录则为真           |
| -f 文件名 | 如果文件存在且为普通文件则为真       |
| -c 文件名 | 如果文件存在且为字符型特殊文件则为真 |
| -b 文件名 | 如果文件存在且为块特殊文件则为真     |

### if

```shell
if condition1
then
    command1
elif condition2
then
    command2
else
    commandN
fi

a=10
b=20
if [ $a == $b ]
then
   echo "a 等于 b"
elif [ $a -gt $b ]
then
   echo "a 大于 b"
elif [ $a -lt $b ]
then
   echo "a 小于 b"
else
   echo "没有符合的条件"
fi

a=10
b=20
if (( $a == $b ))
then
   echo "a 等于 b"
elif (( $a > $b ))
then
   echo "a 大于 b"
elif (( $a < $b ))
then
   echo "a 小于 b"
else
   echo "没有符合的条件"
fi
```
