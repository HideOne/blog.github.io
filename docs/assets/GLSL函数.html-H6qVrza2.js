const t=JSON.parse('{"key":"v-31f049fe","path":"/posts/%E6%B8%B8%E6%88%8F/Shader/shader%E5%BA%94%E7%94%A8/GLSL%E5%87%BD%E6%95%B0.html","title":"GLSL函数","lang":"zh-CN","frontmatter":{"title":"GLSL函数","category":["shader应用"],"date":"2024-05-17T12:04:50.000Z","description":"smoothstep smoothstep可以用来生成0到1的平滑过渡值，它也叫平滑阶梯函数 smoothstep(edg0, edg1, x); edg0左边缘，edg1右边缘，使x在edg0和edg1区间内进行平滑处理。返回值在[0， 1]区间内，当x &gt; edg1时，返回1，当x &lt; edg0时，返回0，当x在edg0和edg1之间时，返回x float smoothstep(float t1, float t2, float x) { // Scale, bias and saturate x to 0..1 range // 还记得么？在remap算法中接触过 x = clamp((x - t1) / (t2 - t1), 0.0, 1.0); // Evaluate polynomial return x * x * (3 - 2 * x); }","head":[["meta",{"property":"og:url","content":"https://blog.vipfreevpn.top/posts/%E6%B8%B8%E6%88%8F/Shader/shader%E5%BA%94%E7%94%A8/GLSL%E5%87%BD%E6%95%B0.html"}],["meta",{"property":"og:site_name","content":"博客"}],["meta",{"property":"og:title","content":"GLSL函数"}],["meta",{"property":"og:description","content":"smoothstep smoothstep可以用来生成0到1的平滑过渡值，它也叫平滑阶梯函数 smoothstep(edg0, edg1, x); edg0左边缘，edg1右边缘，使x在edg0和edg1区间内进行平滑处理。返回值在[0， 1]区间内，当x &gt; edg1时，返回1，当x &lt; edg0时，返回0，当x在edg0和edg1之间时，返回x float smoothstep(float t1, float t2, float x) { // Scale, bias and saturate x to 0..1 range // 还记得么？在remap算法中接触过 x = clamp((x - t1) / (t2 - t1), 0.0, 1.0); // Evaluate polynomial return x * x * (3 - 2 * x); }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-18T15:32:48.000Z"}],["meta",{"property":"article:author","content":"HideOne"}],["meta",{"property":"article:published_time","content":"2024-05-17T12:04:50.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-18T15:32:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"GLSL函数\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-05-17T12:04:50.000Z\\",\\"dateModified\\":\\"2024-05-18T15:32:48.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"HideOne\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":3,"title":"smoothstep","slug":"smoothstep","link":"#smoothstep","children":[]},{"level":3,"title":"step","slug":"step","link":"#step","children":[]},{"level":3,"title":"MIX","slug":"mix","link":"#mix","children":[]}],"git":{"createdTime":1716046368000,"updatedTime":1716046368000,"contributors":[{"name":"HideOne","email":"844085696@qq.com","commits":1}]},"readingTime":{"minutes":0.68,"words":205},"filePathRelative":"posts/游戏/Shader/shader应用/GLSL函数.md","localizedDate":"2024年5月17日","excerpt":"<h3> smoothstep</h3>\\n<ul>\\n<li>smoothstep可以用来生成0到1的平滑过渡值，它也叫平滑阶梯函数</li>\\n<li>smoothstep(edg0, edg1, x); edg0左边缘，edg1右边缘，使x在edg0和edg1区间内进行平滑处理。返回值在[0， 1]区间内，当x &gt; edg1时，返回1，当x &lt; edg0时，返回0，当x在edg0和edg1之间时，返回x\\n</li>\\n</ul>\\n<div class=\\"language-glsl line-numbers-mode\\" data-ext=\\"glsl\\"><pre class=\\"language-glsl\\"><code><span class=\\"token keyword\\">float</span> <span class=\\"token function\\">smoothstep</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">float</span> t1<span class=\\"token punctuation\\">,</span> <span class=\\"token keyword\\">float</span> t2<span class=\\"token punctuation\\">,</span> <span class=\\"token keyword\\">float</span> x<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token comment\\">// Scale, bias and saturate x to 0..1 range</span>\\n  <span class=\\"token comment\\">// 还记得么？在remap算法中接触过</span>\\n  x <span class=\\"token operator\\">=</span> <span class=\\"token function\\">clamp</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">(</span>x <span class=\\"token operator\\">-</span> t1<span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">/</span> <span class=\\"token punctuation\\">(</span>t2 <span class=\\"token operator\\">-</span> t1<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">0.0</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">1.0</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span> \\n  <span class=\\"token comment\\">// Evaluate polynomial</span>\\n  <span class=\\"token keyword\\">return</span> x <span class=\\"token operator\\">*</span> x <span class=\\"token operator\\">*</span> <span class=\\"token punctuation\\">(</span><span class=\\"token number\\">3</span> <span class=\\"token operator\\">-</span> <span class=\\"token number\\">2</span> <span class=\\"token operator\\">*</span> x<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{t as data};
