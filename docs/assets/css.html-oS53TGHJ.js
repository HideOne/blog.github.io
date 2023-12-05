import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as s,d as a}from"./app-laSiiMa5.js";const e={},d=a(`<h2 id="什么是" tabindex="-1"><a class="header-anchor" href="#什么是" aria-hidden="true">#</a> 什么是</h2><ul><li>CSS 是层叠样式表 (Cascading Style Sheets)</li><li>CSS 描述了如何在屏幕、纸张或其他媒体上显示 HTML 元素</li></ul><h2 id="为何使用" tabindex="-1"><a class="header-anchor" href="#为何使用" aria-hidden="true">#</a> 为何使用</h2><ul><li>CSS 用于定义网页的样式，包括针对不同设备和屏幕尺寸的设计和布局。</li></ul><h2 id="选择器" tabindex="-1"><a class="header-anchor" href="#选择器" aria-hidden="true">#</a> 选择器</h2><h3 id="种类" tabindex="-1"><a class="header-anchor" href="#种类" aria-hidden="true">#</a> 种类</h3><ul><li>简单选择器（根据名称、id、类来选取元素）</li><li>组合器选择器（根据它们之间的特定关系来选取元素）</li><li>伪类选择器（根据特定状态选取元素）</li><li>伪元素选择器（选取元素的一部分并设置其样式）</li><li>属性选择器（根据属性或属性值来选取元素）</li></ul><h4 id="元素选择器" tabindex="-1"><a class="header-anchor" href="#元素选择器" aria-hidden="true">#</a> 元素选择器</h4><ul><li>根据元素名称来选择 HTML 元素</li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 页面上的所有 &lt;p&gt; 元素都将居中对齐，并带有红色文本颜色 */</span>
<span class="token selector">p</span> <span class="token punctuation">{</span>
  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="id选择器" tabindex="-1"><a class="header-anchor" href="#id选择器" aria-hidden="true">#</a> id选择器</h4><ul><li>使用id属性来选择元素</li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* id=&quot;para1&quot; 的 HTML 元素 */</span>
<span class="token selector">#para1</span> <span class="token punctuation">{</span>
  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="类选择器" tabindex="-1"><a class="header-anchor" href="#类选择器" aria-hidden="true">#</a> 类选择器</h4><ul><li>用类名来选择元素</li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* class=&quot;center&quot; 的 HTML 元素 */</span>
<span class="token selector">.center</span> <span class="token punctuation">{</span>
  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="通用选择器" tabindex="-1"><a class="header-anchor" href="#通用选择器" aria-hidden="true">#</a> 通用选择器</h4><ul><li>所有的 HTML 元素</li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">*</span> <span class="token punctuation">{</span>
  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="分组选择" tabindex="-1"><a class="header-anchor" href="#分组选择" aria-hidden="true">#</a> 分组选择</h4><ul><li>例子</li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">h1, h2, p</span> <span class="token punctuation">{</span>
  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="伪类" tabindex="-1"><a class="header-anchor" href="#伪类" aria-hidden="true">#</a> 伪类</h4><ul><li>定义元素的特殊状态</li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 未访问的链接 */</span>
<span class="token selector">a:link</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #FF0000<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 已访问的链接 */</span>
<span class="token selector">a:visited</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #00FF00<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 鼠标悬停链接 */</span>
<span class="token selector">a:hover</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #FF00FF<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 已选择的链接 */</span>
<span class="token selector">a:active</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #0000FF<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="所有伪类" tabindex="-1"><a class="header-anchor" href="#所有伪类" aria-hidden="true">#</a> 所有伪类</h5><table><thead><tr><th>选择器</th><th>例子</th><th>例子描述</th></tr></thead><tbody><tr><td>:active</td><td>a:active</td><td>选择活动的链接。</td></tr><tr><td>:checked</td><td>input:checked</td><td>选择每个被选中的 &lt;input&gt; 元素。</td></tr><tr><td>:disabled</td><td>input:disabled</td><td>选择每个被禁用的 &lt;input&gt; 元素。</td></tr><tr><td>:empty</td><td>p:empty</td><td>选择没有子元素的每个 &lt;p&gt; 元素。</td></tr><tr><td>:enabled</td><td>input:enabled</td><td>选择每个已启用的 &lt;input&gt; 元素。</td></tr><tr><td>:first-child</td><td>p:first-child</td><td>选择作为其父的首个子元素的每个 &lt;p&gt; 元素。</td></tr><tr><td>:first-of-type</td><td>p:first-of-type</td><td>选择作为其父的首个 &lt;p&gt; 元素的每个 &lt;p&gt; 元素。</td></tr><tr><td>:focus</td><td>input:focus</td><td>选择获得焦点的 &lt;input&gt; 元素。</td></tr><tr><td>:hover</td><td>a:hover</td><td>选择鼠标悬停其上的链接。</td></tr><tr><td>:in-range</td><td>input:in-range</td><td>选择具有指定范围内的值的 &lt;input&gt; 元素。</td></tr><tr><td>:invalid</td><td>input:invalid</td><td>选择所有具有无效值的 &lt;input&gt; 元素。</td></tr><tr><td>:lang(language)</td><td>p:lang(it)</td><td>选择每个 lang 属性值以 &quot;it&quot; 开头的 &lt;p&gt; 元素。</td></tr><tr><td>:last-child</td><td>p:last-child</td><td>选择作为其父的最后一个子元素的每个 &lt;p&gt; 元素。</td></tr><tr><td>:last-of-type</td><td>p:last-of-type</td><td>选择作为其父的最后一个 &lt;p&gt; 元素的每个 &lt;p&gt; 元素。</td></tr><tr><td>:link</td><td>a:link</td><td>选择所有未被访问的链接。</td></tr><tr><td>:not(selector)</td><td>:not(p)</td><td>选择每个非 &lt;p&gt; 元素的元素。</td></tr><tr><td>:nth-child(n)</td><td>p:nth-child(2)</td><td>选择作为其父的第二个子元素的每个 &lt;p&gt; 元素。</td></tr><tr><td>:nth-last-child(n)</td><td>p:nth-last-child(2)</td><td>选择作为父的第二个子元素的每个&lt;p&gt;元素，从最后一个子元素计数。</td></tr><tr><td>:nth-last-of-type(n)</td><td>p:nth-last-of-type(2)</td><td>选择作为父的第二个&lt;p&gt;元素的每个&lt;p&gt;元素，从最后一个子元素计数</td></tr><tr><td>:nth-of-type(n)</td><td>p:nth-of-type(2)</td><td>选择作为其父的第二个 &lt;p&gt; 元素的每个 &lt;p&gt; 元素。</td></tr><tr><td>:only-of-type</td><td>p:only-of-type</td><td>选择作为其父的唯一 &lt;p&gt; 元素的每个 &lt;p&gt; 元素。</td></tr><tr><td>:only-child</td><td>p:only-child</td><td>选择作为其父的唯一子元素的 &lt;p&gt; 元素。</td></tr><tr><td>:optional</td><td>input:optional</td><td>选择不带 &quot;required&quot; 属性的 &lt;input&gt; 元素。</td></tr><tr><td>:out-of-range</td><td>input:out-of-range</td><td>选择值在指定范围之外的 &lt;input&gt; 元素。</td></tr><tr><td>:read-only</td><td>input:read-only</td><td>选择指定了 &quot;readonly&quot; 属性的 &lt;input&gt; 元素。</td></tr><tr><td>:read-write</td><td>input:read-write</td><td>选择不带 &quot;readonly&quot; 属性的 &lt;input&gt; 元素。</td></tr><tr><td>:required</td><td>input:required</td><td>选择指定了 &quot;required&quot; 属性的 &lt;input&gt; 元素。</td></tr><tr><td>:root</td><td>root</td><td>选择元素的根元素。</td></tr><tr><td>:target</td><td>#news:target</td><td>选择当前活动的 #news 元素（单击包含该锚名称的 URL）。</td></tr><tr><td>:valid</td><td>input:valid</td><td>选择所有具有有效值的 &lt;input&gt; 元素。</td></tr><tr><td>:visited</td><td>a:visited</td><td>选择所有已访问的链接。</td></tr></tbody></table><h4 id="伪元素选择器" tabindex="-1"><a class="header-anchor" href="#伪元素选择器" aria-hidden="true">#</a> 伪元素选择器</h4><ul><li>设置元素指定部分的样式</li><li>元素的首字母、首行的样式</li><li>元素的内容之前或之后插入内容</li></ul><p><strong>例子</strong></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 下面的例子设置所有 &lt;p&gt; 元素中文本的首字母格式： */</span>
<span class="token selector">p::first-line</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #ff0000<span class="token punctuation">;</span>
  <span class="token property">font-variant</span><span class="token punctuation">:</span> small-caps<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 以红色和较大的字体显示 class=&quot;intro&quot; 的段落的首字母 */</span>
<span class="token selector">p.intro::first-letter</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #ff0000<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 200%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>多个伪元素可以组合</li></ul><table><thead><tr><th>选择器</th><th>例子</th><th>例子描述</th></tr></thead><tbody><tr><td>::after</td><td>p::after</td><td>在每个 &lt;p&gt; 元素之后插入内容。</td></tr><tr><td>::before</td><td>p::before</td><td>在每个 &lt;p&gt; 元素之前插入内容。</td></tr><tr><td>::first-letter</td><td>p::first-letter</td><td>选择每个 &lt;p&gt; 元素的首字母。</td></tr><tr><td>::first-line</td><td>p::first-line</td><td>选择每个 &lt;p&gt; 元素的首行。</td></tr><tr><td>::selection</td><td>p::selection</td><td>选择用户选择的元素部分。</td></tr></tbody></table><h4 id="属性选择器" tabindex="-1"><a class="header-anchor" href="#属性选择器" aria-hidden="true">#</a> 属性选择器</h4><ul><li>设置带有特定属性或属性值的 HTML 元素的样式</li><li>CSS [attribute=&quot;value&quot;] 选择器</li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 下例选取所有带有 target=&quot;_blank&quot; 属性的 &lt;a&gt; 元素 */</span>
<span class="token selector">a[target=&quot;_blank&quot;]</span> <span class="token punctuation">{</span> 
  <span class="token property">background-color</span><span class="token punctuation">:</span> yellow<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>CSS [attribute~=&quot;value&quot;] 选择器</li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 选取 title 属性包含 &quot;flower&quot; 单词的所有元素 */</span>
<span class="token selector">[title~=&quot;flower&quot;]</span> <span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 5px solid yellow<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>CSS [attribute^=&quot;value&quot;] 选择器 -&gt; 选取指定属性以指定值开头的元素。</li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">&lt;!-- 选取 class 属性以 &quot;top&quot; 开头的所有元素 --&gt;
[class^=&quot;top&quot;]</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> yellow<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,40),l=[d];function i(p,c){return n(),s("div",null,l)}const u=t(e,[["render",i],["__file","css.html.vue"]]);export{u as default};
