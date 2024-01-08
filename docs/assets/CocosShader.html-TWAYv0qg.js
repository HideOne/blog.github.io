import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as s,a as e}from"./app-jxnfA_tx.js";const t={},c=e(`<h2 id="cocos-shader组成" tabindex="-1"><a class="header-anchor" href="#cocos-shader组成" aria-hidden="true">#</a> Cocos Shader组成：</h2><ul><li>CCEffect：用于声明渲染技术（Technique）、渲染过程（Pass）、渲染状态、材质参数等属性。</li><li>CCProgram：用于声明顶点着色器（Vertex Shader）和片元着色器（Fragment Shader）代码片段。</li></ul><h3 id="cceffect" tabindex="-1"><a class="header-anchor" href="#cceffect" aria-hidden="true">#</a> CCEffect</h3><p>CCEffect 包裹的部分是由 YAML 语法</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>CCEffect %<span class="token punctuation">{</span>
  <span class="token key atrule">techniques</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> opaque <span class="token comment"># 定义一个不透明的渲染技术</span>
    <span class="token key atrule">passes</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">vert</span><span class="token punctuation">:</span> <span class="token key atrule">vs</span><span class="token punctuation">:</span> entry <span class="token comment"># 选择一个 CCProgram 声明的顶点着色器 ‘vs’，入口函数是 ‘entry’</span>
      <span class="token key atrule">frag</span><span class="token punctuation">:</span> <span class="token key atrule">fs</span><span class="token punctuation">:</span> entry <span class="token comment"># 选择一个 CCProgram 声明的片元着色器 ‘fs’，入口函数是 ‘entry’</span>
      <span class="token key atrule">properties</span><span class="token punctuation">:</span>
        <span class="token key atrule">mainTexture</span><span class="token punctuation">:</span> <span class="token punctuation">{</span> <span class="token key atrule">value</span><span class="token punctuation">:</span> grey <span class="token punctuation">}</span> <span class="token comment"># 着色器中需要同步定义一个 ‘uniform mainTexture’，该属性可在编辑器的属性检查器中进行配置</span>
        <span class="token key atrule">colorScale</span><span class="token punctuation">:</span> <span class="token punctuation">{</span> <span class="token key atrule">value</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token key atrule">target</span><span class="token punctuation">:</span> colorScaleAndCutoff.xyz <span class="token punctuation">}</span> <span class="token comment"># 基于 ‘target’ 属性配置机制，着色器中需要同步定义一个 ‘uniform colorScaleAndCutoff’，并选取它的 x、y、z 分量填充 ‘colorScale’ 设置的数据</span>
      <span class="token key atrule">depthStencilState</span><span class="token punctuation">:</span> <span class="token comment"># 配置深度测试、模板测试和写入状态</span>
        <span class="token key atrule">depthTest</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
        <span class="token key atrule">depthWrite</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token punctuation">...</span>
  <span class="token punctuation">...</span>
<span class="token punctuation">}</span>%
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ccprogram" tabindex="-1"><a class="header-anchor" href="#ccprogram" aria-hidden="true">#</a> CCProgram</h3><div class="language-GLSL line-numbers-mode" data-ext="GLSL"><pre class="language-GLSL"><code>CCProgram shader-name %{
  &lt;required: precision settings&gt;
  &lt;optional: include&gt;  
  &lt;optional: ubo&gt;
  &lt;optional: custom attribute&gt;
  &lt;optional: &gt;
  vec4 entry(){
    // 需要返回一个 vec4 类型数据
  }
}%
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),l=[c];function p(o,i){return a(),s("div",null,l)}const d=n(t,[["render",p],["__file","CocosShader.html.vue"]]);export{d as default};
