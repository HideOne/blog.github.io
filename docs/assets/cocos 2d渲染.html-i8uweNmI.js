const t=JSON.parse('{"key":"v-438588e4","path":"/posts/%E6%B8%B8%E6%88%8F/Shader/cocos%202d%E6%B8%B2%E6%9F%93.html","title":"cocos 2d渲染","lang":"zh-CN","frontmatter":{"title":"cocos 2d渲染","category":["游戏"],"date":"2024-01-05T14:16:00.000Z","headerDepth":2,"description":"2D 渲染节点排序 2D 渲染节点可分为在 Canvas 下的节点和不在 Canvas 下的节点两种： 在 Canvas 下的节点可参考下文 UI 节点排序 部分的内容。 不在 Canvas 下的节点，用户可选择通过 自定义材质 来开启深度检测实现和 3D 物体的遮挡显示，开启后会按照物体的 Z 轴坐标进行遮挡渲染（可参考范例 2d-rendering-in-3d（GitHub | Gitee）。 渲染顺序 上图中整体的渲染顺序则是：A -&gt; a1 -&gt; a2 -&gt; B -&gt; b1 -&gt; C，在屏幕上的呈现状态为：C -&gt; b1 -&gt; B -&gt; a2 -&gt; a1 -&gt; A 即 从上往下。","head":[["meta",{"property":"og:url","content":"https://blog.vipfreevpn.top/posts/%E6%B8%B8%E6%88%8F/Shader/cocos%202d%E6%B8%B2%E6%9F%93.html"}],["meta",{"property":"og:site_name","content":"博客"}],["meta",{"property":"og:title","content":"cocos 2d渲染"}],["meta",{"property":"og:description","content":"2D 渲染节点排序 2D 渲染节点可分为在 Canvas 下的节点和不在 Canvas 下的节点两种： 在 Canvas 下的节点可参考下文 UI 节点排序 部分的内容。 不在 Canvas 下的节点，用户可选择通过 自定义材质 来开启深度检测实现和 3D 物体的遮挡显示，开启后会按照物体的 Z 轴坐标进行遮挡渲染（可参考范例 2d-rendering-in-3d（GitHub | Gitee）。 渲染顺序 上图中整体的渲染顺序则是：A -&gt; a1 -&gt; a2 -&gt; B -&gt; b1 -&gt; C，在屏幕上的呈现状态为：C -&gt; b1 -&gt; B -&gt; a2 -&gt; a1 -&gt; A 即 从上往下。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-10T02:12:50.000Z"}],["meta",{"property":"article:author","content":"HideOne"}],["meta",{"property":"article:published_time","content":"2024-01-05T14:16:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-10T02:12:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"cocos 2d渲染\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-01-05T14:16:00.000Z\\",\\"dateModified\\":\\"2024-01-10T02:12:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"HideOne\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"2D 渲染节点排序","slug":"_2d-渲染节点排序","link":"#_2d-渲染节点排序","children":[{"level":3,"title":"2D 渲染节点可分为在 Canvas 下的节点和不在 Canvas 下的节点两种：","slug":"_2d-渲染节点可分为在-canvas-下的节点和不在-canvas-下的节点两种","link":"#_2d-渲染节点可分为在-canvas-下的节点和不在-canvas-下的节点两种","children":[]}]},{"level":2,"title":"渲染顺序","slug":"渲染顺序","link":"#渲染顺序","children":[]},{"level":2,"title":"相机ClearFlag","slug":"相机clearflag","link":"#相机clearflag","children":[]},{"level":2,"title":"合批","slug":"合批","link":"#合批","children":[{"level":3,"title":"无法合批组件","slug":"无法合批组件","link":"#无法合批组件","children":[]}]},{"level":2,"title":"渲染纹理","slug":"渲染纹理","link":"#渲染纹理","children":[]},{"level":2,"title":"材质属性设置","slug":"材质属性设置","link":"#材质属性设置","children":[]}],"git":{"createdTime":1704702148000,"updatedTime":1704852770000,"contributors":[{"name":"HideOne","email":"844085696@qq.com","commits":2}]},"readingTime":{"minutes":1.16,"words":348},"filePathRelative":"posts/游戏/Shader/cocos 2d渲染.md","localizedDate":"2024年1月5日","excerpt":"<h2> 2D 渲染节点排序</h2>\\n<h3> 2D 渲染节点可分为在 Canvas 下的节点和不在 Canvas 下的节点两种：</h3>\\n<ul>\\n<li>\\n<p>在 Canvas 下的节点可参考下文 UI 节点排序 部分的内容。</p>\\n</li>\\n<li>\\n<p>不在 Canvas 下的节点，用户可选择通过 自定义材质 来开启深度检测实现和 3D 物体的遮挡显示，开启后会按照物体的 Z 轴坐标进行遮挡渲染（可参考范例 2d-rendering-in-3d（GitHub | Gitee）。</p>\\n</li>\\n</ul>\\n<h2> 渲染顺序</h2>\\n<p>\\n上图中整体的渲染顺序则是：A -&gt; a1 -&gt; a2 -&gt; B -&gt; b1 -&gt; C，在屏幕上的呈现状态为：C -&gt; b1 -&gt; B -&gt; a2 -&gt; a1 -&gt; A 即 从上往下。</p>","autoDesc":true}');export{t as data};
