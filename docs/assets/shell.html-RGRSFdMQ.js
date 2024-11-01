import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as e}from"./app-oEtxkI-I.js";const t={},l=e(`<h2 id="什么是-shell" tabindex="-1"><a class="header-anchor" href="#什么是-shell" aria-hidden="true">#</a> 什么是 Shell</h2><ul><li>Shell 是一个用 C 语言编写的程序，是用户使用 Linux 的桥梁。</li><li>Shell 脚本（shell script），是一种为 shell 编写的脚本程序</li></ul><h2 id="声明变量" tabindex="-1"><a class="header-anchor" href="#声明变量" aria-hidden="true">#</a> 声明变量</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>RUNOOB=&quot;www.runoob.com&quot;
LD_LIBRARY_PATH=&quot;/bin/&quot;
_var=&quot;123&quot;
var2=&quot;abc&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="只读变量" tabindex="-1"><a class="header-anchor" href="#只读变量" aria-hidden="true">#</a> 只读变量</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token assign-left variable">myUrl</span><span class="token operator">=</span><span class="token string">&quot;https://www.google.com&quot;</span>
<span class="token builtin class-name">readonly</span> myUrl
<span class="token assign-left variable">myUrl</span><span class="token operator">=</span><span class="token string">&quot;https://www.runoob.com&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数组定义" tabindex="-1"><a class="header-anchor" href="#数组定义" aria-hidden="true">#</a> 数组定义</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">my_array</span><span class="token operator">=</span><span class="token punctuation">(</span>A B <span class="token string">&quot;C&quot;</span> D<span class="token punctuation">)</span>

my_array<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">=</span>value0
my_array<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">=</span>value1
my_array<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token operator">=</span>value2

<span class="token comment"># 读取元素</span>
<span class="token variable">\${array_name<span class="token punctuation">[</span>index<span class="token punctuation">]</span>}</span>

<span class="token comment"># 关联数组</span>
<span class="token comment"># 方式一</span>
<span class="token builtin class-name">declare</span> <span class="token parameter variable">-A</span> <span class="token assign-left variable">site</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;google&quot;</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&quot;www.google.com&quot;</span> <span class="token punctuation">[</span><span class="token string">&quot;runoob&quot;</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&quot;www.runoob.com&quot;</span> <span class="token punctuation">[</span><span class="token string">&quot;taobao&quot;</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&quot;www.taobao.com&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># 方式二</span>
<span class="token builtin class-name">declare</span> <span class="token parameter variable">-A</span> site
site<span class="token punctuation">[</span><span class="token string">&quot;google&quot;</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&quot;www.google.com&quot;</span>
site<span class="token punctuation">[</span><span class="token string">&quot;runoob&quot;</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&quot;www.runoob.com&quot;</span>
site<span class="token punctuation">[</span><span class="token string">&quot;taobao&quot;</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&quot;www.taobao.com&quot;</span>
<span class="token comment"># 读取</span>
<span class="token variable">\${site<span class="token punctuation">[</span>&quot;runoob&quot;<span class="token punctuation">]</span>}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="取数组中所有元素" tabindex="-1"><a class="header-anchor" href="#取数组中所有元素" aria-hidden="true">#</a> 取数组中所有元素</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token variable">\${my_array<span class="token punctuation">[</span>*<span class="token punctuation">]</span>}</span>
<span class="token variable">\${my_array<span class="token punctuation">[</span>@<span class="token punctuation">]</span>}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参数处理特殊符号" tabindex="-1"><a class="header-anchor" href="#参数处理特殊符号" aria-hidden="true">#</a> 参数处理特殊符号</h2><table><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>$#</td><td>传递到脚本的参数个数</td></tr><tr><td>$*</td><td>以一个单字符串显示所有向脚本传递的参数。如&quot;$*&quot;用「&quot;」括起来的情况、以&quot;$1 $2 … $n&quot;的形式输出所有参数。</td></tr><tr><td>$!</td><td>后台运行的最后一个进程的 ID 号</td></tr><tr><td>$@</td><td>与$*相同，但是使用时加引号，并在引号中返回每个参数。如&quot;$@&quot;用「&quot;」括起来的情况、以&quot;$1&quot; &quot;$2&quot; … &quot;$n&quot;的形式输出所有参数。</td></tr><tr><td>$-</td><td>显示 Shell 使用的当前选项，与 set 命令功能相同。</td></tr><tr><td>$?</td><td>显示最后命令的退出状态。0 表示没有错误，其他任何值表明有错误。</td></tr></tbody></table><h2 id="运算符" tabindex="-1"><a class="header-anchor" href="#运算符" aria-hidden="true">#</a> 运算符</h2><table><thead><tr><th>运算符</th><th>说明</th><th>举例</th></tr></thead><tbody><tr><td>+</td><td>加法</td><td><code>expr $a + $b</code> 结果为 30。</td></tr><tr><td>-</td><td>减法</td><td><code>expr $a - $b</code> 结果为 -10。</td></tr><tr><td>*</td><td>乘法</td><td><code>expr $a \\* $b</code> 结果为 200。</td></tr><tr><td>/</td><td>除法</td><td><code>expr $b / $a</code> 结果为 2。</td></tr><tr><td>%</td><td>取余</td><td><code>expr $b % $a</code> 结果为 0。</td></tr><tr><td>=</td><td>赋值</td><td>a=$b 把变量 b 的值赋给 a。</td></tr><tr><td>==</td><td>相等</td><td>[ $a == $b ] 返回 false。</td></tr><tr><td>!=</td><td>不相等</td><td>[ $a != $b ] 返回 true。</td></tr></tbody></table><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">a</span><span class="token operator">=</span><span class="token number">10</span>
<span class="token assign-left variable">b</span><span class="token operator">=</span><span class="token number">20</span>

<span class="token assign-left variable">val</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">expr</span> $a + $b<span class="token variable">\`</span></span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;a + b : <span class="token variable">$val</span>&quot;</span>

<span class="token assign-left variable">val</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">expr</span> $a - $b<span class="token variable">\`</span></span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;a - b : <span class="token variable">$val</span>&quot;</span>

<span class="token assign-left variable">val</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">expr</span> $a <span class="token punctuation">\\</span>* $b<span class="token variable">\`</span></span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;a * b : <span class="token variable">$val</span>&quot;</span>

<span class="token assign-left variable">val</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">expr</span> $b / $a<span class="token variable">\`</span></span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;b / a : <span class="token variable">$val</span>&quot;</span>

<span class="token assign-left variable">val</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">expr</span> $b % $a<span class="token variable">\`</span></span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;b % a : <span class="token variable">$val</span>&quot;</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$a</span> <span class="token operator">==</span> <span class="token variable">$b</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
   <span class="token builtin class-name">echo</span> <span class="token string">&quot;a 等于 b&quot;</span>
<span class="token keyword">fi</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$a</span> <span class="token operator">!=</span> <span class="token variable">$b</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
   <span class="token builtin class-name">echo</span> <span class="token string">&quot;a 不等于 b&quot;</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="shell-命令" tabindex="-1"><a class="header-anchor" href="#shell-命令" aria-hidden="true">#</a> shell 命令</h2><h3 id="printf" tabindex="-1"><a class="header-anchor" href="#printf" aria-hidden="true">#</a> printf</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">printf</span> <span class="token string">&quot;%-10s %-8s %-4s<span class="token entity" title="\\n">\\n</span>&quot;</span> 姓名 性别 体重kg
<span class="token builtin class-name">printf</span> <span class="token string">&quot;%-10s %-8s %-4.2f<span class="token entity" title="\\n">\\n</span>&quot;</span> 郭靖 男 <span class="token number">66.1234</span>
<span class="token builtin class-name">printf</span> <span class="token string">&quot;%-10s %-8s %-4.2f<span class="token entity" title="\\n">\\n</span>&quot;</span> 杨过 男 <span class="token number">48.6543</span>
<span class="token builtin class-name">printf</span> <span class="token string">&quot;%-10s %-8s %-4.2f<span class="token entity" title="\\n">\\n</span>&quot;</span> 郭芙 女 <span class="token number">47.9876</span>

姓名     性别   体重kg
郭靖     男      <span class="token number">66.12</span>
杨过     男      <span class="token number">48.65</span>
郭芙     女      <span class="token number">47.99</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="test" tabindex="-1"><a class="header-anchor" href="#test" aria-hidden="true">#</a> test</h3><ul><li>用于检查某个条件是否成立，它可以进行数值、字符和文件三个方面的测试</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">num1</span><span class="token operator">=</span><span class="token number">100</span>
<span class="token assign-left variable">num2</span><span class="token operator">=</span><span class="token number">100</span>
<span class="token keyword">if</span> <span class="token builtin class-name">test</span> $<span class="token punctuation">[</span>num1<span class="token punctuation">]</span> <span class="token parameter variable">-eq</span> $<span class="token punctuation">[</span>num2<span class="token punctuation">]</span>
<span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&#39;两个数相等！&#39;</span>
<span class="token keyword">else</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&#39;两个数不相等！&#39;</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>=</td><td>等于则为真</td></tr><tr><td>!=</td><td>不相等则为真</td></tr><tr><td>-z 字符串</td><td>字符串的长度为零则为真</td></tr><tr><td>-n 字符串</td><td>字符串的长度不为零则为真</td></tr></tbody></table><h4 id="文件测试" tabindex="-1"><a class="header-anchor" href="#文件测试" aria-hidden="true">#</a> 文件测试</h4><table><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>-e 文件名</td><td>如果文件存在则为真</td></tr><tr><td>-r 文件名</td><td>如果文件存在且可读则为真</td></tr><tr><td>-w 文件名</td><td>如果文件存在且可写则为真</td></tr><tr><td>-x 文件名</td><td>如果文件存在且可执行则为真</td></tr><tr><td>-s 文件名</td><td>如果文件存在且至少有一个字符则为真</td></tr><tr><td>-d 文件名</td><td>如果文件存在且为目录则为真</td></tr><tr><td>-f 文件名</td><td>如果文件存在且为普通文件则为真</td></tr><tr><td>-c 文件名</td><td>如果文件存在且为字符型特殊文件则为真</td></tr><tr><td>-b 文件名</td><td>如果文件存在且为块特殊文件则为真</td></tr></tbody></table><h3 id="if" tabindex="-1"><a class="header-anchor" href="#if" aria-hidden="true">#</a> if</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">if</span> condition1
<span class="token keyword">then</span>
    command1
<span class="token keyword">elif</span> condition2
<span class="token keyword">then</span>
    command2
<span class="token keyword">else</span>
    commandN
<span class="token keyword">fi</span>

<span class="token assign-left variable">a</span><span class="token operator">=</span><span class="token number">10</span>
<span class="token assign-left variable">b</span><span class="token operator">=</span><span class="token number">20</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$a</span> <span class="token operator">==</span> <span class="token variable">$b</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
   <span class="token builtin class-name">echo</span> <span class="token string">&quot;a 等于 b&quot;</span>
<span class="token keyword">elif</span> <span class="token punctuation">[</span> <span class="token variable">$a</span> <span class="token parameter variable">-gt</span> <span class="token variable">$b</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
   <span class="token builtin class-name">echo</span> <span class="token string">&quot;a 大于 b&quot;</span>
<span class="token keyword">elif</span> <span class="token punctuation">[</span> <span class="token variable">$a</span> <span class="token parameter variable">-lt</span> <span class="token variable">$b</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
   <span class="token builtin class-name">echo</span> <span class="token string">&quot;a 小于 b&quot;</span>
<span class="token keyword">else</span>
   <span class="token builtin class-name">echo</span> <span class="token string">&quot;没有符合的条件&quot;</span>
<span class="token keyword">fi</span>

<span class="token assign-left variable">a</span><span class="token operator">=</span><span class="token number">10</span>
<span class="token assign-left variable">b</span><span class="token operator">=</span><span class="token number">20</span>
<span class="token keyword">if</span> <span class="token variable"><span class="token punctuation">((</span> $a <span class="token operator">==</span> $b <span class="token punctuation">))</span></span>
<span class="token keyword">then</span>
   <span class="token builtin class-name">echo</span> <span class="token string">&quot;a 等于 b&quot;</span>
<span class="token keyword">elif</span> <span class="token variable"><span class="token punctuation">((</span> $a <span class="token operator">&gt;</span> $b <span class="token punctuation">))</span></span>
<span class="token keyword">then</span>
   <span class="token builtin class-name">echo</span> <span class="token string">&quot;a 大于 b&quot;</span>
<span class="token keyword">elif</span> <span class="token variable"><span class="token punctuation">((</span> $a <span class="token operator">&lt;</span> $b <span class="token punctuation">))</span></span>
<span class="token keyword">then</span>
   <span class="token builtin class-name">echo</span> <span class="token string">&quot;a 小于 b&quot;</span>
<span class="token keyword">else</span>
   <span class="token builtin class-name">echo</span> <span class="token string">&quot;没有符合的条件&quot;</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="函数" tabindex="-1"><a class="header-anchor" href="#函数" aria-hidden="true">#</a> 函数</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span> <span class="token keyword">function</span> <span class="token punctuation">]</span> funname <span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span>

<span class="token punctuation">{</span>

    action<span class="token punctuation">;</span>

    <span class="token punctuation">[</span>return int<span class="token punctuation">;</span><span class="token punctuation">]</span>

<span class="token punctuation">}</span>

<span class="token function-name function">funWithReturn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;这个函数会对输入的两个数字进行相加运算...&quot;</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;输入第一个数字: &quot;</span>
    <span class="token builtin class-name">read</span> aNum
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;输入第二个数字: &quot;</span>
    <span class="token builtin class-name">read</span> anotherNum
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;两个数字分别为 <span class="token variable">$aNum</span> 和 <span class="token variable">$anotherNum</span> !&quot;</span>
    <span class="token builtin class-name">return</span> <span class="token variable"><span class="token variable">$((</span>$aNum<span class="token operator">+</span>$anotherNum<span class="token variable">))</span></span>
<span class="token punctuation">}</span>
funWithReturn
<span class="token builtin class-name">echo</span> <span class="token string">&quot;输入的两个数字之和为 <span class="token variable">$?</span> !&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="shell-输入-输出重定向" tabindex="-1"><a class="header-anchor" href="#shell-输入-输出重定向" aria-hidden="true">#</a> Shell 输入/输出重定向</h3><table><thead><tr><th>命令</th><th>说明</th></tr></thead><tbody><tr><td>command &gt; file</td><td>将输出重定向到 file。</td></tr><tr><td>command &lt; file</td><td>将输入重定向到 file。</td></tr><tr><td>command &gt;&gt; file</td><td>将输出以追加的方式重定向到 file。</td></tr><tr><td>n &gt; file</td><td>将文件描述符为 n 的文件重定向到 file。</td></tr><tr><td>n &gt;&gt; file</td><td>将文件描述符为 n 的文件以追加的方式重定向到 file。</td></tr><tr><td>n &gt;&amp; m</td><td>将输出文件 m 和 n 合并。</td></tr><tr><td>n &lt;&amp; m</td><td>将输入文件 m 和 n 合并。</td></tr><tr><td>&lt;&lt; tag</td><td>将开始标记 tag 和结束标记 tag 之间的内容作为输入。</td></tr></tbody></table><h4 id="dev-null-文件" tabindex="-1"><a class="header-anchor" href="#dev-null-文件" aria-hidden="true">#</a> /dev/null 文件</h4><ul><li>无底洞</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">command</span> <span class="token operator">&gt;</span> /dev/null
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="引用文件" tabindex="-1"><a class="header-anchor" href="#引用文件" aria-hidden="true">#</a> 引用文件</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>test1.sh 代码如下：

<span class="token comment">#!/bin/bash</span>
<span class="token comment"># author:菜鸟教程</span>
<span class="token comment"># url:www.runoob.com</span>

<span class="token assign-left variable">url</span><span class="token operator">=</span><span class="token string">&quot;http://www.runoob.com&quot;</span>




test2.sh 代码如下：

<span class="token comment">#!/bin/bash</span>
<span class="token comment"># author:菜鸟教程</span>
<span class="token comment"># url:www.runoob.com</span>

<span class="token comment">#使用 . 号来引用test1.sh 文件</span>
<span class="token builtin class-name">.</span> ./test1.sh

<span class="token comment"># 或者使用以下包含文件代码</span>
<span class="token comment"># source ./test1.sh</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;菜鸟教程官网地址：<span class="token variable">$url</span>&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,35),i=[l];function p(o,c){return s(),a("div",null,i)}const u=n(t,[["render",p],["__file","shell.html.vue"]]);export{u as default};
