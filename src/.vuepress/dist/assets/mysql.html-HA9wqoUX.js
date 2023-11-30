import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as d,c as i,f as a}from"./app-fhearWoS.js";const n={},t=a(`<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><h4 id="下载地址" tabindex="-1"><a class="header-anchor" href="#下载地址" aria-hidden="true">#</a> 下载地址</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>https://dev.mysql.com/downloads/repo/yum/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="安装步骤" tabindex="-1"><a class="header-anchor" href="#安装步骤" aria-hidden="true">#</a> 安装步骤</h4><p>安装前，我们可以检测系统是否自带安装 MySQL:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>rpm -qa | grep mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果你系统有安装，那可以选择进行卸载:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>rpm -e mysql 　　// 普通删除模式
rpm -e --nodeps mysql 　　// 强力删除模式，如果使用上面命令删除时，提示有依赖的其它文件，则用该命令可以对其进行强力删除
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="linux-内安装" tabindex="-1"><a class="header-anchor" href="#linux-内安装" aria-hidden="true">#</a> linux 内安装</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>wget http://repo.mysql.com/mysql-community-release-el7-5.noarch.rpm
rpm -ivh mysql-community-release-el7-5.noarch.rpm
yum update
yum install mysql-server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="权限设置" tabindex="-1"><a class="header-anchor" href="#权限设置" aria-hidden="true">#</a> 权限设置：</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>chown -R mysql:mysql /var/lib/mysql/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="初始化-mysql" tabindex="-1"><a class="header-anchor" href="#初始化-mysql" aria-hidden="true">#</a> 初始化 MySQL：</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mysqld --initialize
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="启动-mysql" tabindex="-1"><a class="header-anchor" href="#启动-mysql" aria-hidden="true">#</a> 启动 MySQL：</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>systemctl start mysqld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="查看-mysql-运行状态" tabindex="-1"><a class="header-anchor" href="#查看-mysql-运行状态" aria-hidden="true">#</a> 查看 MySQL 运行状态：</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>systemctl status mysqld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="初始密码设置" tabindex="-1"><a class="header-anchor" href="#初始密码设置" aria-hidden="true">#</a> 初始密码设置</h4><p><strong>Mysql 安装成功后，默认的 root 用户密码为空，你可以使用以下命令来创建 root 用户的密码：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@host]# mysqladmin -u root password &quot;new_password&quot;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>现在你可以通过以下命令来连接到 Mysql 服务器：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@host]# mysql -u root -p
Enter password:**\\*\\*\\***
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mysql-管理" tabindex="-1"><a class="header-anchor" href="#mysql-管理" aria-hidden="true">#</a> mysql 管理</h2><h4 id="检查-mysql-启动" tabindex="-1"><a class="header-anchor" href="#检查-mysql-启动" aria-hidden="true">#</a> 检查 mysql 启动</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ps -ef | grep mysqld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="关闭-mysql-服务" tabindex="-1"><a class="header-anchor" href="#关闭-mysql-服务" aria-hidden="true">#</a> 关闭 mysql 服务</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>root@host# cd /usr/bin
./mysqladmin -u root -p shutdown
Enter password: ******
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="mysql-命令" tabindex="-1"><a class="header-anchor" href="#mysql-命令" aria-hidden="true">#</a> mysql 命令</h4><h5 id="列出-mysql-数据库管理系统的数据库列表。" tabindex="-1"><a class="header-anchor" href="#列出-mysql-数据库管理系统的数据库列表。" aria-hidden="true">#</a> 列出 MySQL 数据库管理系统的数据库列表。</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SHOW DATABASES:
列出 MySQL 数据库管理系统的数据库列表
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="显示指定数据库的所有表" tabindex="-1"><a class="header-anchor" href="#显示指定数据库的所有表" aria-hidden="true">#</a> 显示指定数据库的所有表</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SHOW TABLES:
显示指定数据库的所有表，使用该命令前需要使用 use 命令来选择要操作的数据库。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="显示数据表的属性" tabindex="-1"><a class="header-anchor" href="#显示数据表的属性" aria-hidden="true">#</a> 显示数据表的属性</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SHOW COLUMNS FROM 数据表:
显示数据表的属性，属性类型，主键信息 ，是否为 NULL，默认值等其他信息。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="创建数据库" tabindex="-1"><a class="header-anchor" href="#创建数据库" aria-hidden="true">#</a> 创建数据库</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>CREATE DATABASE 数据库名:
创建数据库
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="删除数据库" tabindex="-1"><a class="header-anchor" href="#删除数据库" aria-hidden="true">#</a> 删除数据库</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>drop database &lt;数据库名&gt;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="数值类型" tabindex="-1"><a class="header-anchor" href="#数值类型" aria-hidden="true">#</a> 数值类型</h5><table><thead><tr><th>类型</th><th>大小</th><th>范围（有符号）</th><th>范围（无符号）</th><th>用途</th></tr></thead><tbody><tr><td>TINYINT</td><td>1 Bytes</td><td>(-128，127)</td><td>(0，255)</td><td>小整数值</td></tr><tr><td>SMALLINT</td><td>2 Bytes</td><td>(-32 768，32 767)</td><td>(0，65 535)</td><td>大整数值</td></tr><tr><td>MEDIUMINT</td><td>3 Bytes</td><td>(-8 388 608，8 388 607)</td><td>(0，16 777 215)</td><td>大整数值</td></tr><tr><td>INT 或 INTEGER</td><td>4 Bytes</td><td>(-2 147 483 648，2 147 483 647)</td><td>(0，4 294 967 295)</td><td>大整数值</td></tr><tr><td>BIGINT</td><td>8 Bytes</td><td>(-9,223,372,036,854,775,808，9 223 372 036 854 775 807)</td><td>(0，18 446 744 073 709 551 615)</td><td>极大整数值</td></tr><tr><td>FLOAT</td><td>4 Bytes</td><td>(-3.402 823 466 E+38，-1.175 494 351 E-38)，0，(1.175 494 351 E-38，3.402 823 466 351 E+38)</td><td>0，(1.175 494 351 E-38，3.402 823 466 E+38)</td><td>单精度浮点数值</td></tr><tr><td>DOUBLE</td><td>8 Bytes</td><td>(-1.797 693 134 862 315 7 E+308，-2.225 073 858 507 201 4 E-308)，0，(2.225 073 858 507 201 4 E-308，1.797 693 134 862 315 7 E+308)</td><td>0，(2.225 073 858 507 201 4 E-308，1.797 693 134 862 315 7 E+308)</td><td>双精度 浮点数值</td></tr><tr><td>DECIMAL</td><td>对 DECIMAL(M,D) ，如果 M&gt;D，为 M+2 否则为 D+2</td><td>依赖于 M 和 D 的值</td><td>依赖于 M 和 D 的值</td><td>小数</td></tr></tbody></table><h5 id="字符串类型" tabindex="-1"><a class="header-anchor" href="#字符串类型" aria-hidden="true">#</a> 字符串类型</h5><table><thead><tr><th>类型</th><th>大小</th><th>用途</th></tr></thead><tbody><tr><td>CHAR</td><td>0-255 bytes</td><td>定长字符串</td></tr><tr><td>VARCHAR</td><td>0-65535 bytes</td><td>变长字符串</td></tr><tr><td>TINYBLOB</td><td>0-255 bytes</td><td>不超过 255 个字符的二进制字符串</td></tr><tr><td>TINYTEXT</td><td>0-255 bytes</td><td>短文本字符串</td></tr><tr><td>BLOB</td><td>0-65 535 bytes</td><td>二进制形式的长文本数据</td></tr><tr><td>TEXT</td><td>0-65 535 bytes</td><td>长文本数据</td></tr><tr><td>MEDIUMBLOB</td><td>0-16 777 215 bytes</td><td>二进制形式的中等长度文本数据</td></tr><tr><td>MEDIUMTEXT</td><td>0-16 777 215 bytes</td><td>中等长度文本数据</td></tr><tr><td>LONGBLOB</td><td>0-4 294 967 295 bytes</td><td>二进制形式的极大文本数据</td></tr><tr><td>LONGTEXT</td><td>0-4 294 967 295 bytes</td><td>极大文本数据</td></tr></tbody></table><h5 id="创建数据表" tabindex="-1"><a class="header-anchor" href="#创建数据表" aria-hidden="true">#</a> 创建数据表</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>CREATE TABLE table_name (column_name column_type);
以下例子中我们将在 RUNOOB 数据库中创建数据表runoob_tbl：

CREATE TABLE IF NOT EXISTS \`runoob_tbl\`(
   \`runoob_id\` INT UNSIGNED AUTO_INCREMENT,
   \`runoob_title\` VARCHAR(100) NOT NULL,
   \`runoob_author\` VARCHAR(40) NOT NULL,
   \`submission_date\` DATE,
   PRIMARY KEY ( \`runoob_id\` )
)ENGINE=InnoDB DEFAULT CHARSET=utf8;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>如果你不想字段为 NULL 可以设置字段的属性为 NOT NULL， 在操作数据库时如果输入该字段的数据为 NULL ，就会报错。</li><li>AUTO_INCREMENT 定义列为自增的属性，一般用于主键，数值会自动加 1。</li><li>PRIMARY KEY 关键字用于定义列为主键。 您可以使用多列来定义主键，列间以逗号分隔。</li><li>ENGINE 设置存储引擎，CHARSET 设置编码。</li></ul><h5 id="插入数据" tabindex="-1"><a class="header-anchor" href="#插入数据" aria-hidden="true">#</a> 插入数据</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>INSERT INTO table_name ( field1, field2,...fieldN )
                       VALUES
                       ( value1, value2,...valueN );


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>root@host# mysql -u root -p password;
Enter password:*******
mysql&gt; use RUNOOB;
Database changed
mysql&gt; INSERT INTO runoob_tbl
    -&gt; (runoob_title, runoob_author, submission_date)
    -&gt; VALUES
    -&gt; (&quot;学习 PHP&quot;, &quot;菜鸟教程&quot;, NOW());
Query OK, 1 rows affected, 1 warnings (0.01 sec)
mysql&gt; INSERT INTO runoob_tbl
    -&gt; (runoob_title, runoob_author, submission_date)
    -&gt; VALUES
    -&gt; (&quot;学习 MySQL&quot;, &quot;菜鸟教程&quot;, NOW());
Query OK, 1 rows affected, 1 warnings (0.01 sec)
mysql&gt; INSERT INTO runoob_tbl
    -&gt; (runoob_title, runoob_author, submission_date)
    -&gt; VALUES
    -&gt; (&quot;JAVA 教程&quot;, &quot;RUNOOB.COM&quot;, &#39;2016-05-06&#39;);
Query OK, 1 rows affected (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="查询数据" tabindex="-1"><a class="header-anchor" href="#查询数据" aria-hidden="true">#</a> 查询数据</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SELECT column_name,column_name
FROM table_name
[WHERE Clause]
[LIMIT N][ OFFSET M]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>select * from runoob_tbl;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SELECT * from runoob_tbl WHERE runoob_author=&#39;菜鸟教程&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>查询语句中你可以使用一个或者多个表，表之间使用逗号(,)分割，并使用 WHERE 语句来设定查询条件。</li><li>SELECT 命令可以读取一条或者多条记录。</li><li>你可以使用星号（*）来代替其他字段，SELECT 语句会返回表的所有字段数据</li><li>你可以使用 WHERE 语句来包含任何条件。</li><li>你可以使用 LIMIT 属性来设定返回的记录数。</li><li>你可以通过 OFFSET 指定 SELECT 语句开始查询的数据偏移量。默认情况下偏移量为 0。</li></ul><h5 id="update-更新" tabindex="-1"><a class="header-anchor" href="#update-更新" aria-hidden="true">#</a> UPDATE 更新</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>UPDATE table_name SET field1=new-value1, field2=new-value2
[WHERE Clause]

mysql&gt; UPDATE runoob_tbl SET runoob_title=&#39;学习 C++&#39; WHERE runoob_id=3;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>你可以同时更新一个或多个字段。</li><li>你可以在 WHERE 子句中指定任何条件。</li><li>你可以在一个单独表中同时更新数据。</li></ul><p><strong>%是通配符</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mysql&gt; SELECT * from runoob_tbl  WHERE runoob_author LIKE &#39;%COM&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="union-操作符" tabindex="-1"><a class="header-anchor" href="#union-操作符" aria-hidden="true">#</a> UNION 操作符</h5><ul><li>UNION 操作符用于连接两个以上的 SELECT 语句的结果组合到一个结果集合中。多个 SELECT 语句会删除重复的数据</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SELECT expression1, expression2, ... expression_n
FROM tables
[WHERE conditions]
UNION [ALL | DISTINCT]
SELECT expression1, expression2, ... expression_n
FROM tables
[WHERE conditions];
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>expression1, expression2, ... expression_n: 要检索的列。</li><li>tables: 要检索的数据表。</li><li>WHERE conditions: 可选， 检索条件。</li><li>DISTINCT: 可选，删除结果集中重复的数据。默认情况下 UNION 操作符已经删除了重复数据，所以 DISTINCT 修饰符对结果没啥影响。</li><li>ALL: 可选，返回所有结果集，包含重复数据。</li></ul><p><strong>例子</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SELECT country FROM Websites
UNION ALL
SELECT country FROM apps
ORDER BY country;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="排序-order-by" tabindex="-1"><a class="header-anchor" href="#排序-order-by" aria-hidden="true">#</a> 排序 ORDER BY</h5><p><code>SELECT * from runoob_tbl ORDER BY submission_date ASC</code></p><h5 id="连接" tabindex="-1"><a class="header-anchor" href="#连接" aria-hidden="true">#</a> 连接</h5><ul><li>INNER JOIN（内连接,或等值连接）：获取两个表中字段匹配关系的记录。</li><li>LEFT JOIN（左连接）：获取左表所有记录，即使右表没有对应匹配的记录。</li><li>RIGHT JOIN（右连接）： 与 LEFT JOIN 相反，用于获取右表所有记录，即使左表没有对应匹配的记录。</li></ul><h5 id="事务" tabindex="-1"><a class="header-anchor" href="#事务" aria-hidden="true">#</a> 事务</h5><ul><li>原子性处理一系列操作</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-- 开始事务
START TRANSACTION;

-- 执行一些SQL语句
UPDATE accounts SET balance = balance - 100 WHERE user_id = 1;
UPDATE accounts SET balance = balance + 100 WHERE user_id = 2;

-- 判断是否要提交还是回滚
IF (条件) THEN
    COMMIT; -- 提交事务
ELSE
    ROLLBACK; -- 回滚事务
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="索引" tabindex="-1"><a class="header-anchor" href="#索引" aria-hidden="true">#</a> 索引</h5><ul><li>大大提高数据库检索速度</li></ul><h5 id="临时表" tabindex="-1"><a class="header-anchor" href="#临时表" aria-hidden="true">#</a> 临时表</h5><ul><li>临时表只在当前连接可见，当关闭连接时，Mysql 会自动删除表并释放所有空间。</li></ul>`,76),s=[t];function l(r,u){return d(),i("div",null,s)}const o=e(n,[["render",l],["__file","mysql.html.vue"]]);export{o as default};
