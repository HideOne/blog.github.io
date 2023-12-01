import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,d as e}from"./app-mt5Tk_rl.js";const t={},p=e(`<h2 id="基础语法" tabindex="-1"><a class="header-anchor" href="#基础语法" aria-hidden="true">#</a> 基础语法</h2><ul><li>PHP 脚本以 &lt; ?php 开始，以 ?&gt; 结束：</li></ul><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token operator">&lt;</span> <span class="token operator">?</span>php
<span class="token comment">// PHP 代码</span>
<span class="token operator">?</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="变量声明" tabindex="-1"><a class="header-anchor" href="#变量声明" aria-hidden="true">#</a> 变量声明</h2><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$txt</span><span class="token operator">=</span><span class="token string double-quoted-string">&quot;Hello world!&quot;</span><span class="token punctuation">;</span>
<span class="token variable">$x</span><span class="token operator">=</span><span class="token number">5</span><span class="token punctuation">;</span>
<span class="token variable">$y</span><span class="token operator">=</span><span class="token number">10.5</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数据类型" tabindex="-1"><a class="header-anchor" href="#数据类型" aria-hidden="true">#</a> 数据类型</h3><ul><li>String（字符串）</li><li>Integer（整型）</li><li>Float（浮点型）</li><li>Boolean（布尔型）</li><li>Array（数组）</li><li>Object（对象）</li><li>NULL（空值）</li><li>Resource（资源类型）</li></ul><h3 id="global-关键字" tabindex="-1"><a class="header-anchor" href="#global-关键字" aria-hidden="true">#</a> global 关键字</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token operator">&lt;</span> <span class="token operator">?</span><span class="token class-name type-declaration">php</span>
<span class="token variable">$x</span><span class="token operator">=</span><span class="token number">5</span><span class="token punctuation">;</span>
<span class="token variable">$y</span><span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">;</span>
 
<span class="token keyword">function</span> <span class="token function-definition function">myTest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">global</span> <span class="token variable">$x</span><span class="token punctuation">,</span><span class="token variable">$y</span><span class="token punctuation">;</span>
    <span class="token variable">$y</span><span class="token operator">=</span><span class="token variable">$x</span><span class="token operator">+</span><span class="token variable">$y</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
 
<span class="token function">myTest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">echo</span> <span class="token variable">$y</span><span class="token punctuation">;</span> <span class="token comment">// 输出 15</span>
<span class="token operator">?</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="echo-和-print-语句" tabindex="-1"><a class="header-anchor" href="#echo-和-print-语句" aria-hidden="true">#</a> echo 和 print 语句</h3><h4 id="echo" tabindex="-1"><a class="header-anchor" href="#echo" aria-hidden="true">#</a> echo</h4><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token operator">&lt;</span> <span class="token operator">?</span>php
<span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;&lt;h2&gt;PHP 很有趣!&lt;/h2&gt;&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;Hello world!&lt;br&gt;&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;我要学 PHP!&lt;br&gt;&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;这是一个&quot;</span><span class="token punctuation">,</span> <span class="token string double-quoted-string">&quot;字符串，&quot;</span><span class="token punctuation">,</span> <span class="token string double-quoted-string">&quot;使用了&quot;</span><span class="token punctuation">,</span> <span class="token string double-quoted-string">&quot;多个&quot;</span><span class="token punctuation">,</span> <span class="token string double-quoted-string">&quot;参数。&quot;</span><span class="token punctuation">;</span>
<span class="token operator">?</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="print" tabindex="-1"><a class="header-anchor" href="#print" aria-hidden="true">#</a> print</h4><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token operator">&lt;</span> <span class="token operator">?</span><span class="token class-name type-declaration">php</span>
<span class="token variable">$txt1</span><span class="token operator">=</span><span class="token string double-quoted-string">&quot;学习 PHP&quot;</span><span class="token punctuation">;</span>
<span class="token variable">$txt2</span><span class="token operator">=</span><span class="token string double-quoted-string">&quot;RUNOOB.COM&quot;</span><span class="token punctuation">;</span>
<span class="token variable">$cars</span><span class="token operator">=</span><span class="token keyword">array</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;Volvo&quot;</span><span class="token punctuation">,</span><span class="token string double-quoted-string">&quot;BMW&quot;</span><span class="token punctuation">,</span><span class="token string double-quoted-string">&quot;Toyota&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
<span class="token keyword">print</span> <span class="token variable">$txt1</span><span class="token punctuation">;</span>
<span class="token keyword">print</span> <span class="token string double-quoted-string">&quot;&lt;br&gt;&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">print</span> <span class="token string double-quoted-string">&quot;在 <span class="token interpolation"><span class="token variable">$txt2</span></span> 学习 PHP &quot;</span><span class="token punctuation">;</span>
<span class="token keyword">print</span> <span class="token string double-quoted-string">&quot;&lt;br&gt;&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">print</span> <span class="token string double-quoted-string">&quot;我车的品牌是 <span class="token interpolation"><span class="token punctuation">{</span><span class="token variable">$cars</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>&quot;</span><span class="token punctuation">;</span>
<span class="token operator">?</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数组" tabindex="-1"><a class="header-anchor" href="#数组" aria-hidden="true">#</a> 数组</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$cars</span><span class="token operator">=</span><span class="token keyword">array</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;Volvo&quot;</span><span class="token punctuation">,</span><span class="token string double-quoted-string">&quot;BMW&quot;</span><span class="token punctuation">,</span><span class="token string double-quoted-string">&quot;Toyota&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment"># 人工分配 ID 键：</span>
<span class="token variable">$cars</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string double-quoted-string">&quot;Volvo&quot;</span><span class="token punctuation">;</span>
<span class="token variable">$cars</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string double-quoted-string">&quot;BMW&quot;</span><span class="token punctuation">;</span>
<span class="token variable">$cars</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string double-quoted-string">&quot;Toyota&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>count() 返回数组的长度</li></ul><h4 id="数组排序" tabindex="-1"><a class="header-anchor" href="#数组排序" aria-hidden="true">#</a> 数组排序</h4><ul><li>sort() - 对数组进行升序排列</li><li>rsort() - 对数组进行降序排列</li><li>asort() - 根据关联数组的值，对数组进行升序排列</li><li>ksort() - 根据关联数组的键，对数组进行升序排列</li><li>arsort() - 根据关联数组的值，对数组进行降序排列</li><li>krsort() - 根据关联数组的键，对数组进行降序排列</li></ul><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$cars</span><span class="token operator">=</span><span class="token keyword">array</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;Volvo&quot;</span><span class="token punctuation">,</span><span class="token string double-quoted-string">&quot;BMW&quot;</span><span class="token punctuation">,</span><span class="token string double-quoted-string">&quot;Toyota&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">sort</span><span class="token punctuation">(</span><span class="token variable">$cars</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">$age</span><span class="token operator">=</span><span class="token keyword">array</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;Peter&quot;</span><span class="token operator">=&gt;</span><span class="token string double-quoted-string">&quot;35&quot;</span><span class="token punctuation">,</span><span class="token string double-quoted-string">&quot;Ben&quot;</span><span class="token operator">=&gt;</span><span class="token string double-quoted-string">&quot;37&quot;</span><span class="token punctuation">,</span><span class="token string double-quoted-string">&quot;Joe&quot;</span><span class="token operator">=&gt;</span><span class="token string double-quoted-string">&quot;43&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">asort</span><span class="token punctuation">(</span><span class="token variable">$age</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="超级全局变量" tabindex="-1"><a class="header-anchor" href="#超级全局变量" aria-hidden="true">#</a> 超级全局变量</h3><ul><li>$GLOBALS</li><li>$_SERVER</li><li>$_REQUEST</li><li>$_POST</li><li>$_GET</li><li>$_FILES</li><li>$_ENV</li><li>$_COOKIE</li><li>$_SESSION</li></ul><h4 id="globals" tabindex="-1"><a class="header-anchor" href="#globals" aria-hidden="true">#</a> $GLOBALS</h4><ul><li>类似js的window</li></ul><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$x</span> <span class="token operator">=</span> <span class="token number">75</span><span class="token punctuation">;</span> 
<span class="token variable">$y</span> <span class="token operator">=</span> <span class="token number">25</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function-definition function">addition</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
<span class="token punctuation">{</span> 
    <span class="token variable">$GLOBALS</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;z&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token variable">$GLOBALS</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;x&#39;</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token variable">$GLOBALS</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;y&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span> 
<span class="token punctuation">}</span>
<span class="token function">addition</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token keyword">echo</span> <span class="token variable">$z</span><span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="server" tabindex="-1"><a class="header-anchor" href="#server" aria-hidden="true">#</a> $_SERVER</h4><ul><li>包含了诸如头信息(header)、路径(path)、以及脚本位置(script locations)等等信息的数组</li></ul><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">echo</span> <span class="token variable">$_SERVER</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;PHP_SELF&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;&lt;br&gt;&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">echo</span> <span class="token variable">$_SERVER</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;SERVER_NAME&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;&lt;br&gt;&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">echo</span> <span class="token variable">$_SERVER</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;HTTP_HOST&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;&lt;br&gt;&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">echo</span> <span class="token variable">$_SERVER</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;HTTP_REFERER&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;&lt;br&gt;&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">echo</span> <span class="token variable">$_SERVER</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;HTTP_USER_AGENT&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;&lt;br&gt;&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">echo</span> <span class="token variable">$_SERVER</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;SCRIPT_NAME&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="request" tabindex="-1"><a class="header-anchor" href="#request" aria-hidden="true">#</a> $_REQUEST</h4><ul><li>用于收集HTML表单提交的数据</li></ul><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>post<span class="token punctuation">&quot;</span></span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token php language-php"><span class="token delimiter important">&lt;?php</span> <span class="token keyword">echo</span> <span class="token variable">$_SERVER</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;PHP_SELF&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token delimiter important">?&gt;</span></span><span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
Name: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fname<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>submit<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span>
 
<span class="token php language-php"><span class="token delimiter important">&lt;?</span> <span class="token class-name type-declaration">php</span> 
<span class="token variable">$name</span> <span class="token operator">=</span> <span class="token variable">$_REQUEST</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;fname&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span> 
<span class="token keyword">echo</span> <span class="token variable">$name</span><span class="token punctuation">;</span> 
<span class="token delimiter important">?&gt;</span></span>
 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="魔术常量" tabindex="-1"><a class="header-anchor" href="#魔术常量" aria-hidden="true">#</a> 魔术常量</h3><h4 id="当前行号" tabindex="-1"><a class="header-anchor" href="#当前行号" aria-hidden="true">#</a> 当前行号</h4><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">echo</span> <span class="token string single-quoted-string">&#39;这是第 &quot; &#39;</span>  <span class="token operator">.</span> <span class="token constant">__LINE__</span> <span class="token operator">.</span> <span class="token string single-quoted-string">&#39; &quot; 行&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="文件的完整路径和文件名" tabindex="-1"><a class="header-anchor" href="#文件的完整路径和文件名" aria-hidden="true">#</a> 文件的完整路径和文件名</h4><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">echo</span> <span class="token string single-quoted-string">&#39;该文件位于 &quot; &#39;</span>  <span class="token operator">.</span> <span class="token constant">__FILE__</span> <span class="token operator">.</span> <span class="token string single-quoted-string">&#39; &quot; &#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="文件所在的目录" tabindex="-1"><a class="header-anchor" href="#文件所在的目录" aria-hidden="true">#</a> 文件所在的目录</h4><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">echo</span> <span class="token string single-quoted-string">&#39;该文件位于 &quot; &#39;</span>  <span class="token operator">.</span> <span class="token constant">__DIR__</span> <span class="token operator">.</span> <span class="token string single-quoted-string">&#39; &quot; &#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="该函数被定义时的名字" tabindex="-1"><a class="header-anchor" href="#该函数被定义时的名字" aria-hidden="true">#</a> 该函数被定义时的名字</h4><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">function</span> <span class="token function-definition function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">echo</span>  <span class="token string single-quoted-string">&#39;函数名为：&#39;</span> <span class="token operator">.</span> <span class="token constant">__FUNCTION__</span> <span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="类被定义时的名字" tabindex="-1"><a class="header-anchor" href="#类被定义时的名字" aria-hidden="true">#</a> 类被定义时的名字</h4><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">class</span> <span class="token class-name-definition class-name">test</span> <span class="token punctuation">{</span>
    <span class="token keyword">function</span> <span class="token function-definition function">_print</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">echo</span> <span class="token string single-quoted-string">&#39;类名为：&#39;</span>  <span class="token operator">.</span> <span class="token constant">__CLASS__</span> <span class="token operator">.</span> <span class="token string double-quoted-string">&quot;&lt;br&gt;&quot;</span><span class="token punctuation">;</span>
        <span class="token keyword">echo</span>  <span class="token string single-quoted-string">&#39;函数名为：&#39;</span> <span class="token operator">.</span> <span class="token constant">__FUNCTION__</span> <span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token variable">$t</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$t</span><span class="token operator">-&gt;</span><span class="token function">_print</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="命名空间" tabindex="-1"><a class="header-anchor" href="#命名空间" aria-hidden="true">#</a> 命名空间</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">namespace</span> <span class="token package">MyProject</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token constant">CONNECT_OK</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">class</span> <span class="token class-name-definition class-name">Connection</span> <span class="token punctuation">{</span> <span class="token comment">/* ... */</span> <span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function-definition function">connect</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">/* ... */</span>  <span class="token punctuation">}</span>

<span class="token keyword">namespace</span> <span class="token package">AnotherProject</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token constant">CONNECT_OK</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">class</span> <span class="token class-name-definition class-name">Connection</span> <span class="token punctuation">{</span> <span class="token comment">/* ... */</span> <span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function-definition function">connect</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">/* ... */</span>  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="条件控制" tabindex="-1"><a class="header-anchor" href="#条件控制" aria-hidden="true">#</a> 条件控制</h2><h3 id="if" tabindex="-1"><a class="header-anchor" href="#if" aria-hidden="true">#</a> if</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>条件<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">if</span> 条件成立时执行的代码<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">elseif</span> <span class="token punctuation">(</span>条件<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">elseif</span> 条件成立时执行的代码<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">else</span>
<span class="token punctuation">{</span>
    条件不成立时执行的代码<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> switch</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">switch</span> <span class="token punctuation">(</span>n<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
<span class="token keyword">case</span> label1<span class="token punctuation">:</span>
    如果 n<span class="token operator">=</span>label1，此处代码将执行<span class="token punctuation">;</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>
<span class="token keyword">case</span> label2<span class="token punctuation">:</span>
    如果 n<span class="token operator">=</span>label2，此处代码将执行<span class="token punctuation">;</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>
<span class="token keyword">default</span><span class="token punctuation">:</span>
    如果 n 既不等于 label1 也不等于 label2，此处代码将执行<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="循环" tabindex="-1"><a class="header-anchor" href="#循环" aria-hidden="true">#</a> 循环</h2><h3 id="while" tabindex="-1"><a class="header-anchor" href="#while" aria-hidden="true">#</a> while</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">while</span> <span class="token punctuation">(</span>条件<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    要执行的代码<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="do-while" tabindex="-1"><a class="header-anchor" href="#do-while" aria-hidden="true">#</a> do...while</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">do</span>
<span class="token punctuation">{</span>
    要执行的代码<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">while</span> <span class="token punctuation">(</span>条件<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="for" tabindex="-1"><a class="header-anchor" href="#for" aria-hidden="true">#</a> For</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token variable">$i</span><span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span> <span class="token variable">$i</span><span class="token operator">&lt;=</span><span class="token number">5</span><span class="token punctuation">;</span> <span class="token variable">$i</span><span class="token operator">++</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;数字为 &quot;</span> <span class="token operator">.</span> <span class="token variable">$i</span> <span class="token operator">.</span> <span class="token constant">PHP_EOL</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="foreach" tabindex="-1"><a class="header-anchor" href="#foreach" aria-hidden="true">#</a> foreach</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$x</span><span class="token operator">=</span><span class="token keyword">array</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;Google&quot;</span><span class="token punctuation">,</span><span class="token string double-quoted-string">&quot;Runoob&quot;</span><span class="token punctuation">,</span><span class="token string double-quoted-string">&quot;Taobao&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token variable">$x</span> <span class="token keyword">as</span> <span class="token variable">$value</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">echo</span> <span class="token variable">$value</span> <span class="token operator">.</span> <span class="token constant">PHP_EOL</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="函数" tabindex="-1"><a class="header-anchor" href="#函数" aria-hidden="true">#</a> 函数</h2><ul><li>创建函数</li></ul><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">function</span> <span class="token function-definition function">functionName</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">// 要执行的代码</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function-definition function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;In foo()&lt;br /&gt;\\n&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function-definition function">bar</span><span class="token punctuation">(</span><span class="token variable">$arg</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;In bar(); argument was &#39;<span class="token interpolation"><span class="token variable">$arg</span></span>&#39;.&lt;br /&gt;\\n&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 使用 echo 的包装函数</span>
<span class="token keyword">function</span> <span class="token function-definition function">echoit</span><span class="token punctuation">(</span><span class="token variable">$string</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">echo</span> <span class="token variable">$string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token variable">$func</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;foo&#39;</span><span class="token punctuation">;</span>
<span class="token variable">$func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>        <span class="token comment">// 调用 foo()</span>

<span class="token variable">$func</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;bar&#39;</span><span class="token punctuation">;</span>
<span class="token variable">$func</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;test&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 调用 bar()</span>

<span class="token variable">$func</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;echoit&#39;</span><span class="token punctuation">;</span>
<span class="token variable">$func</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;test&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 调用 echoit()</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="array的函数" tabindex="-1"><a class="header-anchor" href="#array的函数" aria-hidden="true">#</a> Array的函数</h3><details><summary>展开查看</summary><pre><code>
| 函数                           | 描述                                                         |
|--------------------------------|--------------------------------------------------------------|
| array()                        | 创建数组。                                                   |
| array_change_key_case()        | 返回其键均为大写或小写的数组。                               |
| array_chunk()                  | 把一个数组分割为新的数组块。                                 |
| array_column()                 | 返回输入数组中某个单一列的值。                               |
| array_combine()                | 通过合并两个数组（一个为键名数组，一个为键值数组）来创建一个新数组。|
| array_count_values()           | 用于统计数组中所有值出现的次数。                              |
| array_diff()                   | 比较数组，返回两个数组的差集（只比较键值）。                |
| array_diff_assoc()             | 比较数组，返回两个数组的差集（比较键名和键值）。            |
| array_diff_key()               | 比较数组，返回两个数组的差集（只比较键名）。                |
| array_diff_uassoc()            | 比较数组，返回两个数组的差集（比较键名和键值，使用用户自定义的键名比较函数）。|
| array_diff_ukey()              | 比较数组，返回两个数组的差集（只比较键名，使用用户自定义的键名比较函数）。|
| array_fill()                   | 用给定的键值填充数组。                                       |
| array_fill_keys()              | 用给定的指定键名的键值填充数组。                             |
| array_filter()                 | 用回调函数过滤数组中的元素。                                |
| array_flip()                   | 反转/交换数组中的键名和对应关联的键值。                      |
| array_intersect()              | 比较数组，返回两个数组的交集（只比较键值）。                |
| array_intersect_assoc()        | 比较数组，返回两个数组的交集（比较键名和键值）。            |
| array_intersect_key()          | 比较数组，返回两个数组的交集（只比较键名）。                |
| array_intersect_uassoc()       | 比较数组，返回两个数组的交集（比较键名和键值，使用用户自定义的键名比较函数）。|
| array_intersect_ukey()         | 比较数组，返回两个数组的交集（只比较键名，使用用户自定义的键名比较函数）。|
| array_key_exists()             | 检查指定的键名是否存在于数组中。                            |
| array_key_first()              | 获取指定数组的第一个键值。                                   |
| array_key_last()               | 获取指定数组的最后一个键值。                                 |
| array_keys()                   | 返回数组中所有的键名。                                       |
| array_map()                    | 将用户自定义函数作用到给定数组的每个值上，返回新的值。       |
| array_merge()                  | 把一个或多个数组合并为一个数组。                              |
| array_merge_recursive()        | 递归地把一个或多个数组合并为一个数组。                        |
| array_multisort()              | 对多个数组或多维数组进行排序。                              |
| array_pad()                    | 将指定数量的带有指定值的元素插入到数组中。                  |
| array_pop()                    | 删除数组中的最后一个元素（出栈）。                           |
| array_product()                | 计算数组中所有值的乘积。                                    |
| array_push()                   | 将一个或多个元素插入数组的末尾（入栈）。                     |
| array_rand()                   | 从数组中随机选出一个或多个元素，返回键名。                   |
| array_reduce()                 | 通过使用用户自定义函数，迭代地将数组简化为一个字符串，并返回。|
| array_replace()                | 使用后面数组的值替换第一个数组的值。                         |
| array_replace_recursive()      | 递归地使用后面数组的值替换第一个数组的值。                   |
| array_reverse()                | 将原数组中的元素顺序翻转，创建新的数组并返回。               |
| array_search()                 | 在数组中搜索给定的值，如果成功则返回相应的键名。             |
| array_shift()                  | 删除数组中的第一个元素，并返回被删除元素的值。               |
| array_slice()                  | 返回数组中的选定部分。                                       |
| array_splice()                 | 把数组中的指定元素去掉并用其它值取代。                       |
| array_sum()                    | 返回数组中所有值的和。                                       |
| array_udiff()                  | 比较数组，返回两个数组的差集（只比较键值，使用一个用户自定义的键名比较函数）。|
| array_udiff_assoc()            | 比较数组，返回两个数组的差集（比较键名和键值，使用内建函数比较键名，使用用户自定义函数比较键值）。|
| array_udiff_uassoc()           | 比较数组，返回两个数组的差集（比较键名和键值，使用两个用户自定义的键名比较函数）。|
| array_uintersect()             | 比较数组，返回两个数组的交集（只比较键值，使用一个用户自定义的键名比较函数）。|
| array_uintersect_assoc()       | 比较数组，返回两个数组的交集（比较键名和键值，使用内建函数比较键名，使用用户自定义函数比较键值）。|
| array_uintersect_uassoc()      | 比较数组，返回两个数组的交集（比较键名和键值，使用两个用户自定义的键名比较函数）。|
| array_unique()                 | 删除数组中重复的值。                                       |
| array_unshift()                | 在数组开头插入一个或多个元素。                               |
| array_values()                 | 返回数组中所有的值。                                       |
| array_walk()                   | 对数组中的每个成员应用用户函数。
| array_walk_recursive()          | 对数组中的每个成员递归地应用用户函数。                      |
| arsort()                        | 对关联数组按照键值进行降序排序。                            |
| asort()                         | 对关联数组按照键值进行升序排序。                            |
| compact()                       | 创建一个包含变量名和它们的值的数组。                          |
| count()                         | 返回数组中元素的数目。                                       |
| current()                       | 返回数组中的当前元素。                                       |
| each()                          | 返回数组中当前的键／值对。                                   |
| end()                           | 将数组的内部指针指向最后一个元素。                           |
| extract()                       | 从数组中将变量导入到当前的符号表。                           |
| in_array()                      | 检查数组中是否存在指定的值。                                |
| key()                           | 从关联数组中取得键名。                                       |
| krsort()                        | 对关联数组按照键名降序排序。                                |
| ksort()                         | 对关联数组按照键名升序排序。                                |
| list()                          | 把数组中的值赋给一些数组变量。                              |
| natcasesort()                   | 用&quot;自然排序&quot;算法对数组进行不区分大小写字母的排序。           |
| natsort()                       | 用&quot;自然排序&quot;算法对数组排序。                                |
| next()                          | 将数组中的内部指针向后移动一位。                             |
| pos()                           | current() 的别名。                                           |
| prev()                          | 将数组的内部指针倒回一位。                                   |
| range()                         | 创建一个包含指定范围的元素的数组。                           |
| reset()                         | 将数组的内部指针指向第一个元素。                             |
| rsort()                         | 对数值数组进行降序排序。                                    |
| shuffle()                       | 把数组中的元素按随机顺序重新排列。                          |
| sizeof()                        | count() 的别名。                                             |
| sort()                          | 对数值数组进行升序排序。                                    |
| uasort()                        | 使用用户自定义的比较函数对数组中的键值进行排序。             |
| uksort()                        | 使用用户自定义的比较函数对数组中的键名进行排序。             |
| usort()                         | 使用用户自定义的比较函数对数组进行排序。                     |
</code></pre></details>`,63),o=[p];function i(l,c){return s(),a("div",null,o)}const d=n(t,[["render",i],["__file","php.html.vue"]]);export{d as default};
