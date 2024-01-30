<<<<<<<< HEAD:docs/assets/CocosShader.html-4iXQo-Z2.js
import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as n,a as e}from"./app-TSzCavvZ.js";const s={},d=e(`<h2 id="cocos-shader组成" tabindex="-1"><a class="header-anchor" href="#cocos-shader组成" aria-hidden="true">#</a> Cocos Shader组成：</h2><ul><li>CCEffect：用于声明渲染技术（Technique）、渲染过程（Pass）、渲染状态、材质参数等属性。</li><li>CCProgram：用于声明顶点着色器（Vertex Shader）和片元着色器（Fragment Shader）代码片段。</li></ul><h3 id="cceffect" tabindex="-1"><a class="header-anchor" href="#cceffect" aria-hidden="true">#</a> CCEffect</h3><p>CCEffect 包裹的部分是由 YAML 语法</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>CCEffect %<span class="token punctuation">{</span>
========
import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as n,a as e}from"./app-pEc7176B.js";const s={},d=e(`<h2 id="cocos-shader组成" tabindex="-1"><a class="header-anchor" href="#cocos-shader组成" aria-hidden="true">#</a> Cocos Shader组成：</h2><ul><li>CCEffect：用于声明渲染技术（Technique）、渲染过程（Pass）、渲染状态、材质参数等属性。</li><li>CCProgram：用于声明顶点着色器（Vertex Shader）和片元着色器（Fragment Shader）代码片段。</li></ul><h3 id="cceffect" tabindex="-1"><a class="header-anchor" href="#cceffect" aria-hidden="true">#</a> CCEffect</h3><p>CCEffect 包裹的部分是由 YAML 语法</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>CCEffect %<span class="token punctuation">{</span>
>>>>>>>> a8de64f7a28eb2cfb5fad9529f60266f57025678:docs/assets/CocosShader.html-Ob-jSKZi.js
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="内置变量" tabindex="-1"><a class="header-anchor" href="#内置变量" aria-hidden="true">#</a> 内置变量</h2><h3 id="cc-local-chunk" tabindex="-1"><a class="header-anchor" href="#cc-local-chunk" aria-hidden="true">#</a> cc-local.chunk</h3><table><thead><tr><th>Name</th><th>Type</th><th>Info</th></tr></thead><tbody><tr><td>cc_matWorld</td><td>mat4</td><td>模型空间转世界空间矩阵</td></tr><tr><td>cc_matWorldIT</td><td>mat4</td><td>模型空间转世界空间逆转置矩阵</td></tr></tbody></table><h3 id="cc-global" tabindex="-1"><a class="header-anchor" href="#cc-global" aria-hidden="true">#</a> cc-global:</h3><ul><li>#include &lt;builtin/uniforms/cc-global&gt;</li></ul><table><thead><tr><th>Name</th><th>Type</th><th>Info</th></tr></thead><tbody><tr><td>cc_time</td><td>vec4</td><td>x：游戏运行时间（秒）y：帧时间（秒）z：游戏运行帧数 w：未使用</td></tr><tr><td>cc_screenSize</td><td>vec4</td><td>xy：屏幕尺寸 zw：屏幕尺寸倒数</td></tr><tr><td>cc_screenScale</td><td>vec4</td><td>xy：屏幕缩放 zw：屏幕缩放倒数</td></tr><tr><td>cc_nativeSize</td><td>vec4</td><td>xy：实际着色缓冲的尺寸 zw：实际着色缓冲的尺寸倒数</td></tr><tr><td>cc_matView</td><td>mat4</td><td>视图矩阵</td></tr><tr><td>cc_matViewInv</td><td>mat4</td><td>视图逆矩阵</td></tr><tr><td>cc_matProj</td><td>mat4</td><td>投影矩阵</td></tr><tr><td>cc_matProjInv</td><td>mat4</td><td>投影逆矩阵</td></tr><tr><td>cc_matViewProj</td><td>mat4</td><td>视图投影矩阵</td></tr><tr><td>cc_matViewProjInv</td><td>mat4</td><td>视图投影逆矩阵</td></tr><tr><td>cc_cameraPos</td><td>vec4</td><td>xyz：相机位置 w：combineSignY</td></tr><tr><td>cc_exposure</td><td>vec4</td><td>x：相机曝光 y：相机曝光倒数 z：是否启用 HDR w：HDR 转 LDR 缩放参数</td></tr><tr><td>cc_mainLitDir</td><td>vec4</td><td>xyz：主方向光源方向 w：是否启用阴影</td></tr><tr><td>cc_mainLitColor</td><td>vec4</td><td>xyz：主方向光颜色 w：主方向光强度</td></tr><tr><td>cc_ambientSky</td><td>vec4</td><td>xyz：天空颜色 w：亮度</td></tr><tr><td>cc_ambientGround</td><td>vec4</td><td>xyz：地面反射光颜色 w：环境贴图 Mipmap 等级</td></tr></tbody></table><h3 id="cc-environment-chunk" tabindex="-1"><a class="header-anchor" href="#cc-environment-chunk" aria-hidden="true">#</a> cc-environment.chunk</h3><table><thead><tr><th>Name</th><th>Type</th><th>Info</th></tr></thead><tbody><tr><td>cc_environment</td><td>samplerCube</td><td>IBL 环境贴图</td></tr></tbody></table><h3 id="cc-forward-light-chunk" tabindex="-1"><a class="header-anchor" href="#cc-forward-light-chunk" aria-hidden="true">#</a> cc-forward-light.chunk</h3><table><thead><tr><th>Name</th><th>Type</th><th>Info</th></tr></thead><tbody><tr><td>cc_sphereLitPos[MAX_LIGHTS]</td><td>vec4</td><td>xyz：球面光位置</td></tr><tr><td>cc_sphereLitSizeRange[MAX_LIGHTS]</td><td>vec4</td><td>x：球光尺寸 y：球光范围</td></tr><tr><td>cc_sphereLitColor[MAX_LIGHTS]</td><td>vec4</td><td>xyz：球光颜色 w：球光强度</td></tr><tr><td>cc_spotLitPos[MAX_LIGHTS]</td><td>vec4</td><td>xyz：聚光灯位置</td></tr><tr><td>cc_spotLitSizeRangeAngle[MAX_LIGHTS]</td><td>vec4</td><td>x：聚光灯尺寸 y：聚光灯范围 z：聚光灯角度</td></tr><tr><td>cc_spotLitDir[MAX_LIGHTS]</td><td>vec4</td><td>xyz：聚光灯方向</td></tr><tr><td>cc_spotLitColor[MAX_LIGHTS]</td><td>vec4</td><td>xyz：聚光灯颜色 w：聚光灯强度</td></tr></tbody></table><h3 id="cc-shadow-chunk" tabindex="-1"><a class="header-anchor" href="#cc-shadow-chunk" aria-hidden="true">#</a> cc-shadow.chunk</h3><table><thead><tr><th>Name</th><th>Type</th><th>Info</th></tr></thead><tbody><tr><td>cc_matLightPlaneProj</td><td>mat4</td><td>平面阴影的变换矩阵</td></tr><tr><td>cc_shadowColor</td><td>vec4</td><td>阴影颜色</td></tr></tbody></table>`,19),c=[d];function r(o,i){return a(),n("div",null,c)}const u=t(s,[["render",r],["__file","CocosShader.html.vue"]]);export{u as default};
