import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as e,c as a,a as n}from"./app-iTvMBDiJ.js";const t="/assets/image-6-hDD5dtBT.png",s="/assets/image-7-i36Aaj90.png",l="/assets/image-8-AXAcw6rC.png",d="/assets/image-15-qVpj-3F3.png",r="/assets/image-9-psmNSCIO.png",c="/assets/image-10-ZzhIcEkE.png",u="/assets/image-12-XAFIjiJ6.png",o="/assets/image-11-TAh1lGgN.png",v="/assets/image-13-EF05XEHr.png",m="/assets/image-14-NXAXf_ts.png",h="/assets/image-16-bonZ7AYr.png",g="/assets/image-17-EuaZj8vV.png",b="/assets/image-18-eH6zdEh9.png",p="/assets/image-19-Z9Q1ccrU.png",f="/assets/image-23-XqRhAxaK.png",x="/assets/image-20-ka5WIVC6.png",_="/assets/image-21-J5NLv1vL.png",S="/assets/image-22-a4wq_BQh.png",q="/assets/image-24-J0V68gzF.png",C="/assets/image-25-AS8ZPd2u.png",y={},M=n(`<h2 id="渲染介绍" tabindex="-1"><a class="header-anchor" href="#渲染介绍" aria-hidden="true">#</a> 渲染介绍</h2><h3 id="ui-shader-支持-ugui-的-mask-功能" tabindex="-1"><a class="header-anchor" href="#ui-shader-支持-ugui-的-mask-功能" aria-hidden="true">#</a> ui shader 支持 UGUI 的 Mask 功能</h3><p>添加一下代码</p><div class="language-GLSL line-numbers-mode" data-ext="GLSL"><pre class="language-GLSL"><code>Shader &quot;xxxxxx&quot;
{
Properties
{
......

//MASK SUPPORT ADD
_StencilComp (&quot;Stencil Comparison&quot;, Float) = 8
_Stencil (&quot;Stencil ID&quot;, Float) = 0
_StencilOp (&quot;Stencil Operation&quot;, Float) = 0
_StencilWriteMask (&quot;Stencil Write Mask&quot;, Float) = 255
_StencilReadMask (&quot;Stencil Read Mask&quot;, Float) = 255
_ColorMask (&quot;Color Mask&quot;, Float) = 15
//MASK SUPPORT END

}

SubShader
{
Tags {...}

//MASK SUPPORT ADD
Stencil
{
    Ref [_Stencil]
    Comp [_StencilComp]
    Pass [_StencilOp] 
    ReadMask [_StencilReadMask]
    WriteMask [_StencilWriteMask]
}
ColorMask [_ColorMask]
//MASK SUPPORT END

......
}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="顶点处理-vert" tabindex="-1"><a class="header-anchor" href="#顶点处理-vert" aria-hidden="true">#</a> 顶点处理 vert</h3><h3 id="光栅化" tabindex="-1"><a class="header-anchor" href="#光栅化" aria-hidden="true">#</a> 光栅化</h3><p>将面转化为像素 <img src="`+t+'" alt="alt text" loading="lazy"></p><h3 id="像素处理-frag" tabindex="-1"><a class="header-anchor" href="#像素处理-frag" aria-hidden="true">#</a> 像素处理 frag</h3><figure><img src="'+s+'" alt="alt text" tabindex="0" loading="lazy"><figcaption>alt text</figcaption></figure><h3 id="渲染管线四步骤" tabindex="-1"><a class="header-anchor" href="#渲染管线四步骤" aria-hidden="true">#</a> 渲染管线四步骤</h3><figure><img src="'+l+'" alt="alt text" tabindex="0" loading="lazy"><figcaption>alt text</figcaption></figure><h2 id="开发工具" tabindex="-1"><a class="header-anchor" href="#开发工具" aria-hidden="true">#</a> 开发工具</h2><ul><li>FX Composer</li><li>Render Monkey</li><li>MonoDevelop</li><li>vs</li></ul><h2 id="框架" tabindex="-1"><a class="header-anchor" href="#框架" aria-hidden="true">#</a> 框架</h2><figure><img src="'+d+'" alt="alt text" tabindex="0" loading="lazy"><figcaption>alt text</figcaption></figure><h2 id="properties-属性" tabindex="-1"><a class="header-anchor" href="#properties-属性" aria-hidden="true">#</a> Properties 属性</h2><p><img src="'+r+'" alt="alt text" loading="lazy"><img src="'+c+'" alt=" " loading="lazy"></p><ul><li>Color</li><li>Range</li><li>2D</li><li>Rect</li><li>Cube</li><li>Float</li><li>Vector <img src="'+u+'" alt="alt text" loading="lazy"></li></ul><figure><img src="'+o+'" alt="alt text" tabindex="0" loading="lazy"><figcaption>alt text</figcaption></figure><figure><img src="'+v+'" alt="alt text" tabindex="0" loading="lazy"><figcaption>alt text</figcaption></figure><h2 id="subshader" tabindex="-1"><a class="header-anchor" href="#subshader" aria-hidden="true">#</a> SubShader</h2><ul><li>shader的代码实现</li><li>必须至少有一个subshader</li></ul><h3 id="多个subshader" tabindex="-1"><a class="header-anchor" href="#多个subshader" aria-hidden="true">#</a> 多个SubShader</h3><ul><li>多个SubShader下 会按顺序执行其中能执行的一个 有且仅有一个</li></ul><h3 id="fallback" tabindex="-1"><a class="header-anchor" href="#fallback" aria-hidden="true">#</a> FallBack</h3><figure><img src="'+m+'" alt="alt text" tabindex="0" loading="lazy"><figcaption>alt text</figcaption></figure><h3 id="tags" tabindex="-1"><a class="header-anchor" href="#tags" aria-hidden="true">#</a> Tags</h3><h4 id="queue-渲染顺序" tabindex="-1"><a class="header-anchor" href="#queue-渲染顺序" aria-hidden="true">#</a> Queue 渲染顺序</h4><figure><img src="'+h+'" alt="alt text" tabindex="0" loading="lazy"><figcaption>alt text</figcaption></figure><ul><li>Background 第一个渲染</li><li>Geometry 几何体 第二个渲染</li><li>Transparent 第三个渲染</li><li>Overlay 第四个渲染</li></ul><figure><img src="'+g+'" alt="alt text" tabindex="0" loading="lazy"><figcaption>alt text</figcaption></figure><h4 id="用法" tabindex="-1"><a class="header-anchor" href="#用法" aria-hidden="true">#</a> 用法</h4><figure><img src="'+b+'" alt="alt text" tabindex="0" loading="lazy"><figcaption>alt text</figcaption></figure><h3 id="renderstate" tabindex="-1"><a class="header-anchor" href="#renderstate" aria-hidden="true">#</a> renderState</h3><p><img src="'+p+'" alt="alt text" loading="lazy"><img src="'+f+'" alt="alt text" loading="lazy"><img src="'+x+'" alt="alt text" loading="lazy"></p><h4 id="blend-混合" tabindex="-1"><a class="header-anchor" href="#blend-混合" aria-hidden="true">#</a> Blend 混合</h4><p>One 值为1 让源或目标颜色完全通过 Zero 删除源或目标颜色 SrcColor 乘以源颜色的值 SrcAlpha 乘以源颜色的alpha值 DstColor 乘以帧缓冲区源颜色的值</p><p><img src="'+_+'" alt="alt text" loading="lazy"><img src="'+S+`" alt="alt text" loading="lazy"></p><div class="language-GLSL line-numbers-mode" data-ext="GLSL"><pre class="language-GLSL"><code>Shader &quot;MyShader/RenderPipeline&quot; {
	
	Properties {
		_Color (&quot;Main Color&quot;, Color) = (1, 1, 1, 1)
		_RangeValue(&quot;RangeValue&quot;, Range(0, 1)) = 0.5
		_CutOut(&quot;Cutout&quot;, Range(0,1)) = 0.4
		_MainTex (&quot;Base (RGB)&quot;, 2D) = &quot;white&quot; {}
		_CubeMap (&quot;Cube Map&quot;, Cube) = &quot;&quot; {}
		_FloatValue ( &quot;FloatValue&quot;, float) = 100 
		_VectorValue( &quot;VectorValue&quot;, vector) = (1,1,1,1)
	}
	SubShader {
		tags{&quot;Queue&quot; = &quot;Transparent&quot; }
		
		Cull off
		ColorMask RGB
		//AlphaTest Less[_CutOut]
		Pass{
		// Dont write to the depth buffer
		ZWrite off

		// Set up alpha blending
		//Blend SrcAlpha OneMinusSrcAlpha

		CGPROGRAM
		#pragma vertex vert
		#pragma fragment frag
		#include &quot;UnityCG.cginc&quot;

		sampler2D _MainTex;
		float4 _Color;

		struct v2f{
			float4 pos:SV_POSITION;
			float4 texcoord : TEXCOORD0;
		};

		v2f vert(appdata_base v)
		{
			v2f o;
			o.pos = mul(UNITY_MATRIX_MVP, v.vertex);
			o.texcoord = v.texcoord;
			return o;
		}

		half4 frag(v2f i):COLOR0
		{
			half4 col = _Color * tex2D(_MainTex, i.texcoord.xy);
			return col;
		}

		ENDCG
		}
		

	} 

	
	FallBack &quot;Diffuse&quot;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="pass-通道" tabindex="-1"><a class="header-anchor" href="#pass-通道" aria-hidden="true">#</a> pass (通道)</h3><p>SubShader下必须有pass 可以包含多个pass 每个pass都会运行</p><h4 id="tags-1" tabindex="-1"><a class="header-anchor" href="#tags-1" aria-hidden="true">#</a> Tags</h4><figure><img src="`+q+'" alt="alt text" tabindex="0" loading="lazy"><figcaption>alt text</figcaption></figure><h2 id="nametex-st-使用-telling-offset" tabindex="-1"><a class="header-anchor" href="#nametex-st-使用-telling-offset" aria-hidden="true">#</a> _NameTex_ST(使用 telling offset)</h2><figure><img src="'+C+`" alt="alt text" tabindex="0" loading="lazy"><figcaption>alt text</figcaption></figure><div class="language-Shader line-numbers-mode" data-ext="Shader"><pre class="language-Shader"><code>// Transforms 2D UV by scale/bias property
#define TRANSFORM_TEX(tex,name) (tex.xy * name##_ST.xy + name##_ST.zw)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,46),R=[M];function k(T,z){return e(),a("div",null,R)}const D=i(y,[["render",k],["__file","unityShader.html.vue"]]);export{D as default};
