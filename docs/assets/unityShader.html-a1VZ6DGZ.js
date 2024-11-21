const e=JSON.parse('{"key":"v-08e3a746","path":"/posts/%E6%B8%B8%E6%88%8F/Shader/unityShader.html","title":"unityShader","lang":"zh-CN","frontmatter":{"title":"unityShader","category":["游戏"],"date":"2024-03-01T11:18:24.000Z","headerDepth":2,"description":"渲染介绍 ui shader 支持 UGUI 的 Mask 功能 添加一下代码 Shader \\"xxxxxx\\" { Properties { ...... //MASK SUPPORT ADD _StencilComp (\\"Stencil Comparison\\", Float) = 8 _Stencil (\\"Stencil ID\\", Float) = 0 _StencilOp (\\"Stencil Operation\\", Float) = 0 _StencilWriteMask (\\"Stencil Write Mask\\", Float) = 255 _StencilReadMask (\\"Stencil Read Mask\\", Float) = 255 _ColorMask (\\"Color Mask\\", Float) = 15 //MASK SUPPORT END } SubShader { Tags {...} //MASK SUPPORT ADD Stencil { Ref [_Stencil] Comp [_StencilComp] Pass [_StencilOp] ReadMask [_StencilReadMask] WriteMask [_StencilWriteMask] } ColorMask [_ColorMask] //MASK SUPPORT END ...... } }","head":[["meta",{"property":"og:url","content":"https://blog.vipfreevpn.top/posts/%E6%B8%B8%E6%88%8F/Shader/unityShader.html"}],["meta",{"property":"og:site_name","content":"博客"}],["meta",{"property":"og:title","content":"unityShader"}],["meta",{"property":"og:description","content":"渲染介绍 ui shader 支持 UGUI 的 Mask 功能 添加一下代码 Shader \\"xxxxxx\\" { Properties { ...... //MASK SUPPORT ADD _StencilComp (\\"Stencil Comparison\\", Float) = 8 _Stencil (\\"Stencil ID\\", Float) = 0 _StencilOp (\\"Stencil Operation\\", Float) = 0 _StencilWriteMask (\\"Stencil Write Mask\\", Float) = 255 _StencilReadMask (\\"Stencil Read Mask\\", Float) = 255 _ColorMask (\\"Color Mask\\", Float) = 15 //MASK SUPPORT END } SubShader { Tags {...} //MASK SUPPORT ADD Stencil { Ref [_Stencil] Comp [_StencilComp] Pass [_StencilOp] ReadMask [_StencilReadMask] WriteMask [_StencilWriteMask] } ColorMask [_ColorMask] //MASK SUPPORT END ...... } }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-27T07:31:08.000Z"}],["meta",{"property":"article:author","content":"HideOne"}],["meta",{"property":"article:published_time","content":"2024-03-01T11:18:24.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-27T07:31:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"unityShader\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-01T11:18:24.000Z\\",\\"dateModified\\":\\"2024-04-27T07:31:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"HideOne\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"渲染介绍","slug":"渲染介绍","link":"#渲染介绍","children":[{"level":3,"title":"ui shader 支持 UGUI 的 Mask 功能","slug":"ui-shader-支持-ugui-的-mask-功能","link":"#ui-shader-支持-ugui-的-mask-功能","children":[]},{"level":3,"title":"顶点处理 vert","slug":"顶点处理-vert","link":"#顶点处理-vert","children":[]},{"level":3,"title":"光栅化","slug":"光栅化","link":"#光栅化","children":[]},{"level":3,"title":"像素处理 frag","slug":"像素处理-frag","link":"#像素处理-frag","children":[]},{"level":3,"title":"渲染管线四步骤","slug":"渲染管线四步骤","link":"#渲染管线四步骤","children":[]}]},{"level":2,"title":"开发工具","slug":"开发工具","link":"#开发工具","children":[]},{"level":2,"title":"框架","slug":"框架","link":"#框架","children":[]},{"level":2,"title":"Properties 属性","slug":"properties-属性","link":"#properties-属性","children":[]},{"level":2,"title":"SubShader","slug":"subshader","link":"#subshader","children":[{"level":3,"title":"多个SubShader","slug":"多个subshader","link":"#多个subshader","children":[]},{"level":3,"title":"FallBack","slug":"fallback","link":"#fallback","children":[]},{"level":3,"title":"Tags","slug":"tags","link":"#tags","children":[{"level":4,"title":"Queue 渲染顺序","slug":"queue-渲染顺序","link":"#queue-渲染顺序","children":[]},{"level":4,"title":"用法","slug":"用法","link":"#用法","children":[]}]},{"level":3,"title":"renderState","slug":"renderstate","link":"#renderstate","children":[{"level":4,"title":"Blend 混合","slug":"blend-混合","link":"#blend-混合","children":[]}]},{"level":3,"title":"pass (通道)","slug":"pass-通道","link":"#pass-通道","children":[{"level":4,"title":"Tags","slug":"tags-1","link":"#tags-1","children":[]}]}]},{"level":2,"title":"_NameTex_ST(使用 telling offset)","slug":"nametex-st-使用-telling-offset","link":"#nametex-st-使用-telling-offset","children":[]}],"git":{"createdTime":1709263540000,"updatedTime":1714203068000,"contributors":[{"name":"HideOne","email":"844085696@qq.com","commits":3}]},"readingTime":{"minutes":1.77,"words":531},"filePathRelative":"posts/游戏/Shader/unityShader.md","localizedDate":"2024年3月1日","excerpt":"<h2> 渲染介绍</h2>\\n<h3> ui shader 支持 UGUI 的 Mask 功能</h3>\\n<p>添加一下代码</p>\\n<div class=\\"language-GLSL line-numbers-mode\\" data-ext=\\"GLSL\\"><pre class=\\"language-GLSL\\"><code>Shader \\"xxxxxx\\"\\n{\\nProperties\\n{\\n......\\n\\n//MASK SUPPORT ADD\\n_StencilComp (\\"Stencil Comparison\\", Float) = 8\\n_Stencil (\\"Stencil ID\\", Float) = 0\\n_StencilOp (\\"Stencil Operation\\", Float) = 0\\n_StencilWriteMask (\\"Stencil Write Mask\\", Float) = 255\\n_StencilReadMask (\\"Stencil Read Mask\\", Float) = 255\\n_ColorMask (\\"Color Mask\\", Float) = 15\\n//MASK SUPPORT END\\n\\n}\\n\\nSubShader\\n{\\nTags {...}\\n\\n//MASK SUPPORT ADD\\nStencil\\n{\\n    Ref [_Stencil]\\n    Comp [_StencilComp]\\n    Pass [_StencilOp] \\n    ReadMask [_StencilReadMask]\\n    WriteMask [_StencilWriteMask]\\n}\\nColorMask [_ColorMask]\\n//MASK SUPPORT END\\n\\n......\\n}\\n}\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};
