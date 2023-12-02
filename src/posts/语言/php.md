---
title: php
category:
  - 语言
date: 2023-12-1 14:17:00
---

- [基础语法](#基础语法)
- [变量声明](#变量声明)
  - [数据类型](#数据类型)
  - [global 关键字](#global-关键字)
  - [echo 和 print 语句](#echo-和-print-语句)
    - [echo](#echo)
    - [print](#print)
  - [数组](#数组)
    - [二维数组](#二维数组)
    - [二维关联数组](#二维关联数组)
    - [数组排序](#数组排序)
  - [超级全局变量](#超级全局变量)
    - [$GLOBALS](#globals)
    - [$\_SERVER](#_server)
    - [$\_REQUEST](#_request)
  - [魔术常量](#魔术常量)
    - [当前行号](#当前行号)
    - [文件的完整路径和文件名](#文件的完整路径和文件名)
    - [文件所在的目录](#文件所在的目录)
    - [该函数被定义时的名字](#该函数被定义时的名字)
    - [类被定义时的名字](#类被定义时的名字)
  - [命名空间](#命名空间)
- [条件控制](#条件控制)
  - [if](#if)
  - [switch](#switch)
- [循环](#循环)
  - [while](#while)
  - [do...while](#dowhile)
  - [For](#for)
  - [foreach](#foreach)
- [函数](#函数)
  - [Array 的函数](#array-的函数)
- [表单](#表单)
  - [表单处理](#表单处理)

## 基础语法

- PHP 脚本以 < ?php 开始，以 ?> 结束：

```php
< ?php
// PHP 代码
?>
```

## 变量声明

```php
$txt="Hello world!";
$x=5;
$y=10.5;
```

### 数据类型

- String（字符串）
- Integer（整型）
- Float（浮点型）
- Boolean（布尔型）
- Array（数组）
- Object（对象）
- NULL（空值）
- Resource（资源类型）

### global 关键字

```php
< ?php
$x=5;
$y=10;

function myTest()
{
    global $x,$y;
    $y=$x+$y;
}

myTest();
echo $y; // 输出 15
?>
```

### echo 和 print 语句

#### echo

```php
< ?php
echo "<h2>PHP 很有趣!</h2>";
echo "Hello world!<br>";
echo "我要学 PHP!<br>";
echo "这是一个", "字符串，", "使用了", "多个", "参数。";
?>
```

#### print

```php
< ?php
$txt1="学习 PHP";
$txt2="RUNOOB.COM";
$cars=array("Volvo","BMW","Toyota");

print $txt1;
print "<br>";
print "在 $txt2 学习 PHP ";
print "<br>";
print "我车的品牌是 {$cars[0]}";
?>
```

### 数组

```php
$cars=array("Volvo","BMW","Toyota");

# 人工分配 ID 键：
$cars[0]="Volvo";
$cars[1]="BMW";
$cars[2]="Toyota";
```

#### 二维数组

```php
$cars = array
(
    array("Volvo",100,96),
    array("BMW",60,59),
    array("Toyota",110,100)
);
```

#### 二维关联数组

```php
$sites = array
(
    "runoob"=>array
    (
        "菜鸟教程",
        "http://www.runoob.com"
    ),
    "google"=>array
    (
        "Google 搜索",
        "http://www.google.com"
    ),
    "taobao"=>array
    (
        "淘宝",
        "http://www.taobao.com"
    )
);
print("<pre>"); // 格式化输出数组
print_r($sites);
print("</pre>");
```

- count() 返回数组的长度

#### 数组排序

- sort() - 对数组进行升序排列
- rsort() - 对数组进行降序排列
- asort() - 根据关联数组的值，对数组进行升序排列
- ksort() - 根据关联数组的键，对数组进行升序排列
- arsort() - 根据关联数组的值，对数组进行降序排列
- krsort() - 根据关联数组的键，对数组进行降序排列

```php
$cars=array("Volvo","BMW","Toyota");
sort($cars);

$age=array("Peter"=>"35","Ben"=>"37","Joe"=>"43");
asort($age);
```

### 超级全局变量

- $GLOBALS
- $\_SERVER
- $\_REQUEST
- $\_POST
- $\_GET
- $\_FILES
- $\_ENV
- $\_COOKIE
- $\_SESSION

#### $GLOBALS

- 类似 js 的 window

```php
$x = 75;
$y = 25;
function addition()
{
    $GLOBALS['z'] = $GLOBALS['x'] + $GLOBALS['y'];
}
addition();
echo $z;
```

#### $\_SERVER

- 包含了诸如头信息(header)、路径(path)、以及脚本位置(script locations)等等信息的数组

```php
echo $_SERVER['PHP_SELF'];
echo "<br>";
echo $_SERVER['SERVER_NAME'];
echo "<br>";
echo $_SERVER['HTTP_HOST'];
echo "<br>";
echo $_SERVER['HTTP_REFERER'];
echo "<br>";
echo $_SERVER['HTTP_USER_AGENT'];
echo "<br>";
echo $_SERVER['SCRIPT_NAME'];
```

#### $\_REQUEST

- 用于收集 HTML 表单提交的数据

```php
<html>
<body>

<form method="post" action="<?php echo $_SERVER['PHP_SELF'];?>">
Name: <input type="text" name="fname">
<input type="submit">
</form>

<? php
$name = $_REQUEST['fname'];
echo $name;
?>

</body>
</html>
```

### 魔术常量

#### 当前行号

```php
echo '这是第 " '  . __LINE__ . ' " 行';
```

#### 文件的完整路径和文件名

```php
echo '该文件位于 " '  . __FILE__ . ' " ';
```

#### 文件所在的目录

```php
echo '该文件位于 " '  . __DIR__ . ' " ';
```

#### 该函数被定义时的名字

```php
function test() {
    echo  '函数名为：' . __FUNCTION__ ;
}
test();
```

#### 类被定义时的名字

```php
class test {
    function _print() {
        echo '类名为：'  . __CLASS__ . "<br>";
        echo  '函数名为：' . __FUNCTION__ ;
    }
}
$t = new test();
$t->_print();
```

### 命名空间

```php
namespace MyProject;

const CONNECT_OK = 1;
class Connection { /* ... */ }
function connect() { /* ... */  }

namespace AnotherProject;

const CONNECT_OK = 1;
class Connection { /* ... */ }
function connect() { /* ... */  }
```

## 条件控制

### if

```php
if (条件)
{
    if 条件成立时执行的代码;
}
elseif (条件)
{
    elseif 条件成立时执行的代码;
}
else
{
    条件不成立时执行的代码;
}
```

### switch

```php
switch (n)
{
case label1:
    如果 n=label1，此处代码将执行;
    break;
case label2:
    如果 n=label2，此处代码将执行;
    break;
default:
    如果 n 既不等于 label1 也不等于 label2，此处代码将执行;
}
```

## 循环

### while

```php
while (条件)
{
    要执行的代码;
}
```

### do...while

```php
do
{
    要执行的代码;
}
while (条件);
```

### For

```php
for ($i=1; $i<=5; $i++)
{
    echo "数字为 " . $i . PHP_EOL;
}
```

### foreach

```php
$x=array("Google","Runoob","Taobao");
foreach ($x as $value)
{
    echo $value . PHP_EOL;
}
```

## 函数

- 创建函数

```php
function functionName()
{
    // 要执行的代码
}

function foo() {
    echo "In foo()<br />\n";
}

function bar($arg = '')
{
    echo "In bar(); argument was '$arg'.<br />\n";
}

// 使用 echo 的包装函数
function echoit($string)
{
    echo $string;
}

$func = 'foo';
$func();        // 调用 foo()

$func = 'bar';
$func('test');  // 调用 bar()

$func = 'echoit';
$func('test');  // 调用 echoit()

```

### Array 的函数

| 函数                      | 描述                                                                                               |
| ------------------------- | -------------------------------------------------------------------------------------------------- |
| array()                   | 创建数组。                                                                                         |
| array_change_key_case()   | 返回其键均为大写或小写的数组。                                                                     |
| array_chunk()             | 把一个数组分割为新的数组块。                                                                       |
| array_column()            | 返回输入数组中某个单一列的值。                                                                     |
| array_combine()           | 通过合并两个数组（一个为键名数组，一个为键值数组）来创建一个新数组。                               |
| array_count_values()      | 用于统计数组中所有值出现的次数。                                                                   |
| array_diff()              | 比较数组，返回两个数组的差集（只比较键值）。                                                       |
| array_diff_assoc()        | 比较数组，返回两个数组的差集（比较键名和键值）。                                                   |
| array_diff_key()          | 比较数组，返回两个数组的差集（只比较键名）。                                                       |
| array_diff_uassoc()       | 比较数组，返回两个数组的差集（比较键名和键值，使用用户自定义的键名比较函数）。                     |
| array_diff_ukey()         | 比较数组，返回两个数组的差集（只比较键名，使用用户自定义的键名比较函数）。                         |
| array_fill()              | 用给定的键值填充数组。                                                                             |
| array_fill_keys()         | 用给定的指定键名的键值填充数组。                                                                   |
| array_filter()            | 用回调函数过滤数组中的元素。                                                                       |
| array_flip()              | 反转/交换数组中的键名和对应关联的键值。                                                            |
| array_intersect()         | 比较数组，返回两个数组的交集（只比较键值）。                                                       |
| array_intersect_assoc()   | 比较数组，返回两个数组的交集（比较键名和键值）。                                                   |
| array_intersect_key()     | 比较数组，返回两个数组的交集（只比较键名）。                                                       |
| array_intersect_uassoc()  | 比较数组，返回两个数组的交集（比较键名和键值，使用用户自定义的键名比较函数）。                     |
| array_intersect_ukey()    | 比较数组，返回两个数组的交集（只比较键名，使用用户自定义的键名比较函数）。                         |
| array_key_exists()        | 检查指定的键名是否存在于数组中。                                                                   |
| array_key_first()         | 获取指定数组的第一个键值。                                                                         |
| array_key_last()          | 获取指定数组的最后一个键值。                                                                       |
| array_keys()              | 返回数组中所有的键名。                                                                             |
| array_map()               | 将用户自定义函数作用到给定数组的每个值上，返回新的值。                                             |
| array_merge()             | 把一个或多个数组合并为一个数组。                                                                   |
| array_merge_recursive()   | 递归地把一个或多个数组合并为一个数组。                                                             |
| array_multisort()         | 对多个数组或多维数组进行排序。                                                                     |
| array_pad()               | 将指定数量的带有指定值的元素插入到数组中。                                                         |
| array_pop()               | 删除数组中的最后一个元素（出栈）。                                                                 |
| array_product()           | 计算数组中所有值的乘积。                                                                           |
| array_push()              | 将一个或多个元素插入数组的末尾（入栈）。                                                           |
| array_rand()              | 从数组中随机选出一个或多个元素，返回键名。                                                         |
| array_reduce()            | 通过使用用户自定义函数，迭代地将数组简化为一个字符串，并返回。                                     |
| array_replace()           | 使用后面数组的值替换第一个数组的值。                                                               |
| array_replace_recursive() | 递归地使用后面数组的值替换第一个数组的值。                                                         |
| array_reverse()           | 将原数组中的元素顺序翻转，创建新的数组并返回。                                                     |
| array_search()            | 在数组中搜索给定的值，如果成功则返回相应的键名。                                                   |
| array_shift()             | 删除数组中的第一个元素，并返回被删除元素的值。                                                     |
| array_slice()             | 返回数组中的选定部分。                                                                             |
| array_splice()            | 把数组中的指定元素去掉并用其它值取代。                                                             |
| array_sum()               | 返回数组中所有值的和。                                                                             |
| array_udiff()             | 比较数组，返回两个数组的差集（只比较键值，使用一个用户自定义的键名比较函数）。                     |
| array_udiff_assoc()       | 比较数组，返回两个数组的差集（比较键名和键值，使用内建函数比较键名，使用用户自定义函数比较键值）。 |
| array_udiff_uassoc()      | 比较数组，返回两个数组的差集（比较键名和键值，使用两个用户自定义的键名比较函数）。                 |
| array_uintersect()        | 比较数组，返回两个数组的交集（只比较键值，使用一个用户自定义的键名比较函数）。                     |
| array_uintersect_assoc()  | 比较数组，返回两个数组的交集（比较键名和键值，使用内建函数比较键名，使用用户自定义函数比较键值）。 |
| array_uintersect_uassoc() | 比较数组，返回两个数组的交集（比较键名和键值，使用两个用户自定义的键名比较函数）。                 |
| array_unique()            | 删除数组中重复的值。                                                                               |
| array_unshift()           | 在数组开头插入一个或多个元素。                                                                     |
| array_values()            | 返回数组中所有的值。                                                                               |
| array_walk()              | 对数组中的每个成员应用用户函数。                                                                   |
| array_walk_recursive()    | 对数组中的每个成员递归地应用用户函数。                                                             |
| arsort()                  | 对关联数组按照键值进行降序排序。                                                                   |
| asort()                   | 对关联数组按照键值进行升序排序。                                                                   |
| compact()                 | 创建一个包含变量名和它们的值的数组。                                                               |
| count()                   | 返回数组中元素的数目。                                                                             |
| current()                 | 返回数组中的当前元素。                                                                             |
| each()                    | 返回数组中当前的键／值对。                                                                         |
| end()                     | 将数组的内部指针指向最后一个元素。                                                                 |
| extract()                 | 从数组中将变量导入到当前的符号表。                                                                 |
| in_array()                | 检查数组中是否存在指定的值。                                                                       |
| key()                     | 从关联数组中取得键名。                                                                             |
| krsort()                  | 对关联数组按照键名降序排序。                                                                       |
| ksort()                   | 对关联数组按照键名升序排序。                                                                       |
| list()                    | 把数组中的值赋给一些数组变量。                                                                     |
| natcasesort()             | 用"自然排序"算法对数组进行不区分大小写字母的排序。                                                 |
| natsort()                 | 用"自然排序"算法对数组排序。                                                                       |
| next()                    | 将数组中的内部指针向后移动一位。                                                                   |
| pos()                     | current() 的别名。                                                                                 |
| prev()                    | 将数组的内部指针倒回一位。                                                                         |
| range()                   | 创建一个包含指定范围的元素的数组。                                                                 |
| reset()                   | 将数组的内部指针指向第一个元素。                                                                   |
| rsort()                   | 对数值数组进行降序排序。                                                                           |
| shuffle()                 | 把数组中的元素按随机顺序重新排列。                                                                 |
| sizeof()                  | count() 的别名。                                                                                   |
| sort()                    | 对数值数组进行升序排序。                                                                           |
| uasort()                  | 使用用户自定义的比较函数对数组中的键值进行排序。                                                   |
| uksort()                  | 使用用户自定义的比较函数对数组中的键名进行排序。                                                   |
| usort()                   | 使用用户自定义的比较函数对数组进行排序。                                                           |

## 表单

### 表单处理

```php
<html>
  <head>
    <meta charset="utf-8" />
    <title>标题</title>
  </head>
  <body>
    <form action="welcome.php" method="post">
      名字: <input type="text" name="fname" /> 年龄:
      <input type="text" name="age" />
      <input type="submit" value="提交" />
    </form>
  </body>
</html>

欢迎<?php echo $_POST["fname"]; ?>!<br>
你的年龄是 <?php echo $_POST["age"]; ?>  岁。
```
