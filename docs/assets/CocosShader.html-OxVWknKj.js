const e=JSON.parse('{"key":"v-25008697","path":"/posts/%E6%B8%B8%E6%88%8F/Shader/CocosShader.html","title":"Shader","lang":"zh-CN","frontmatter":{"title":"Shader","category":["游戏"],"date":"2024-01-05T14:16:00.000Z","headerDepth":2,"description":"Cocos Shader组成： CCEffect：用于声明渲染技术（Technique）、渲染过程（Pass）、渲染状态、材质参数等属性。 CCProgram：用于声明顶点着色器（Vertex Shader）和片元着色器（Fragment Shader）代码片段。 CCEffect CCEffect 包裹的部分是由 YAML 语法 CCEffect %{ techniques: - name: opaque # 定义一个不透明的渲染技术 passes: - vert: vs: entry # 选择一个 CCProgram 声明的顶点着色器 ‘vs’，入口函数是 ‘entry’ frag: fs: entry # 选择一个 CCProgram 声明的片元着色器 ‘fs’，入口函数是 ‘entry’ properties: mainTexture: { value: grey } # 着色器中需要同步定义一个 ‘uniform mainTexture’，该属性可在编辑器的属性检查器中进行配置 colorScale: { value: [1, 1, 1], target: colorScaleAndCutoff.xyz } # 基于 ‘target’ 属性配置机制，着色器中需要同步定义一个 ‘uniform colorScaleAndCutoff’，并选取它的 x、y、z 分量填充 ‘colorScale’ 设置的数据 depthStencilState: # 配置深度测试、模板测试和写入状态 depthTest: true depthWrite: true ... ... }%","head":[["meta",{"property":"og:url","content":"https://blog.vipfreevpn.top/posts/%E6%B8%B8%E6%88%8F/Shader/CocosShader.html"}],["meta",{"property":"og:site_name","content":"博客"}],["meta",{"property":"og:title","content":"Shader"}],["meta",{"property":"og:description","content":"Cocos Shader组成： CCEffect：用于声明渲染技术（Technique）、渲染过程（Pass）、渲染状态、材质参数等属性。 CCProgram：用于声明顶点着色器（Vertex Shader）和片元着色器（Fragment Shader）代码片段。 CCEffect CCEffect 包裹的部分是由 YAML 语法 CCEffect %{ techniques: - name: opaque # 定义一个不透明的渲染技术 passes: - vert: vs: entry # 选择一个 CCProgram 声明的顶点着色器 ‘vs’，入口函数是 ‘entry’ frag: fs: entry # 选择一个 CCProgram 声明的片元着色器 ‘fs’，入口函数是 ‘entry’ properties: mainTexture: { value: grey } # 着色器中需要同步定义一个 ‘uniform mainTexture’，该属性可在编辑器的属性检查器中进行配置 colorScale: { value: [1, 1, 1], target: colorScaleAndCutoff.xyz } # 基于 ‘target’ 属性配置机制，着色器中需要同步定义一个 ‘uniform colorScaleAndCutoff’，并选取它的 x、y、z 分量填充 ‘colorScale’ 设置的数据 depthStencilState: # 配置深度测试、模板测试和写入状态 depthTest: true depthWrite: true ... ... }%"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"HideOne"}],["meta",{"property":"article:published_time","content":"2024-01-05T14:16:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Shader\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-01-05T14:16:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"HideOne\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"Cocos Shader组成：","slug":"cocos-shader组成","link":"#cocos-shader组成","children":[{"level":3,"title":"CCEffect","slug":"cceffect","link":"#cceffect","children":[]},{"level":3,"title":"CCProgram","slug":"ccprogram","link":"#ccprogram","children":[]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":0.94,"words":281},"filePathRelative":"posts/游戏/Shader/CocosShader.md","localizedDate":"2024年1月5日","excerpt":"<h2> Cocos Shader组成：</h2>\\n<ul>\\n<li>CCEffect：用于声明渲染技术（Technique）、渲染过程（Pass）、渲染状态、材质参数等属性。</li>\\n<li>CCProgram：用于声明顶点着色器（Vertex Shader）和片元着色器（Fragment Shader）代码片段。</li>\\n</ul>\\n<h3> CCEffect</h3>\\n<p>CCEffect 包裹的部分是由 YAML 语法</p>\\n<div class=\\"language-yaml line-numbers-mode\\" data-ext=\\"yml\\"><pre class=\\"language-yaml\\"><code>CCEffect %<span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token key atrule\\">techniques</span><span class=\\"token punctuation\\">:</span>\\n  <span class=\\"token punctuation\\">-</span> <span class=\\"token key atrule\\">name</span><span class=\\"token punctuation\\">:</span> opaque <span class=\\"token comment\\"># 定义一个不透明的渲染技术</span>\\n    <span class=\\"token key atrule\\">passes</span><span class=\\"token punctuation\\">:</span>\\n    <span class=\\"token punctuation\\">-</span> <span class=\\"token key atrule\\">vert</span><span class=\\"token punctuation\\">:</span> <span class=\\"token key atrule\\">vs</span><span class=\\"token punctuation\\">:</span> entry <span class=\\"token comment\\"># 选择一个 CCProgram 声明的顶点着色器 ‘vs’，入口函数是 ‘entry’</span>\\n      <span class=\\"token key atrule\\">frag</span><span class=\\"token punctuation\\">:</span> <span class=\\"token key atrule\\">fs</span><span class=\\"token punctuation\\">:</span> entry <span class=\\"token comment\\"># 选择一个 CCProgram 声明的片元着色器 ‘fs’，入口函数是 ‘entry’</span>\\n      <span class=\\"token key atrule\\">properties</span><span class=\\"token punctuation\\">:</span>\\n        <span class=\\"token key atrule\\">mainTexture</span><span class=\\"token punctuation\\">:</span> <span class=\\"token punctuation\\">{</span> <span class=\\"token key atrule\\">value</span><span class=\\"token punctuation\\">:</span> grey <span class=\\"token punctuation\\">}</span> <span class=\\"token comment\\"># 着色器中需要同步定义一个 ‘uniform mainTexture’，该属性可在编辑器的属性检查器中进行配置</span>\\n        <span class=\\"token key atrule\\">colorScale</span><span class=\\"token punctuation\\">:</span> <span class=\\"token punctuation\\">{</span> <span class=\\"token key atrule\\">value</span><span class=\\"token punctuation\\">:</span> <span class=\\"token punctuation\\">[</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span> <span class=\\"token key atrule\\">target</span><span class=\\"token punctuation\\">:</span> colorScaleAndCutoff.xyz <span class=\\"token punctuation\\">}</span> <span class=\\"token comment\\"># 基于 ‘target’ 属性配置机制，着色器中需要同步定义一个 ‘uniform colorScaleAndCutoff’，并选取它的 x、y、z 分量填充 ‘colorScale’ 设置的数据</span>\\n      <span class=\\"token key atrule\\">depthStencilState</span><span class=\\"token punctuation\\">:</span> <span class=\\"token comment\\"># 配置深度测试、模板测试和写入状态</span>\\n        <span class=\\"token key atrule\\">depthTest</span><span class=\\"token punctuation\\">:</span> <span class=\\"token boolean important\\">true</span>\\n        <span class=\\"token key atrule\\">depthWrite</span><span class=\\"token punctuation\\">:</span> <span class=\\"token boolean important\\">true</span>\\n    <span class=\\"token punctuation\\">...</span>\\n  <span class=\\"token punctuation\\">...</span>\\n<span class=\\"token punctuation\\">}</span>%\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};
