import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as i,c as a,a as t}from"./app-oEtxkI-I.js";const s="/assets/image-25-uBrzgnqp.png",d="/assets/image-26-Dg_cMeQ8.png",l="/assets/image-27-g67oEpz_.png",n="/assets/image-28-tYRh27QU.png",r={},o=t('<h2 id="支持unity版本" tabindex="-1"><a class="header-anchor" href="#支持unity版本" aria-hidden="true">#</a> 支持unity版本</h2><ul><li>2019.4.40、2020.3.26+、 2021.3.0+、2022.3.0+</li></ul><h2 id="使用步骤" tabindex="-1"><a class="header-anchor" href="#使用步骤" aria-hidden="true">#</a> 使用步骤</h2><h3 id="安装il2cpp" tabindex="-1"><a class="header-anchor" href="#安装il2cpp" aria-hidden="true">#</a> 安装IL2CPP</h3><figure><img src="'+s+'" alt="alt text" tabindex="0" loading="lazy"><figcaption>alt text</figcaption></figure><h3 id="安装-com-code-philosophy-hybridclr-包" tabindex="-1"><a class="header-anchor" href="#安装-com-code-philosophy-hybridclr-包" aria-hidden="true">#</a> 安装 com.code-philosophy.hybridclr 包</h3><ul><li>https://gitee.com/focus-creative-games/hybridclr_unity.git 或 https://github.com/focus-creative-games/hybridclr_unity.git <img src="'+d+'" alt="alt text" loading="lazy"></li></ul><h3 id="初始化-com-code-philosophy-hybridclr" tabindex="-1"><a class="header-anchor" href="#初始化-com-code-philosophy-hybridclr" aria-hidden="true">#</a> 初始化 com.code-philosophy.hybridclr</h3><ul><li>打开菜单HybridCLR/Installer...</li></ul><h3 id="配置hybridclr" tabindex="-1"><a class="header-anchor" href="#配置hybridclr" aria-hidden="true">#</a> 配置HybridCLR</h3><figure><img src="'+l+'" alt="alt text" tabindex="0" loading="lazy"><figcaption>alt text</figcaption></figure><h3 id="配置playersettings" tabindex="-1"><a class="header-anchor" href="#配置playersettings" aria-hidden="true">#</a> 配置PlayerSettings</h3><figure><img src="'+n+`" alt="alt text" tabindex="0" loading="lazy"><figcaption>alt text</figcaption></figure><h3 id="调用热更新代码" tabindex="-1"><a class="header-anchor" href="#调用热更新代码" aria-hidden="true">#</a> 调用热更新代码</h3><div class="language-Csharp line-numbers-mode" data-ext="Csharp"><pre class="language-Csharp"><code>void Start()
{
    // Editor环境下，HotUpdate.dll.bytes已经被自动加载，不需要加载，重复加载反而会出问题。
#if !UNITY_EDITOR
    Assembly hotUpdateAss = Assembly.Load(File.ReadAllBytes($&quot;{Application.streamingAssetsPath}/HotUpdate.dll.bytes&quot;));
#else
    // Editor下无需加载，直接查找获得HotUpdate程序集
    Assembly hotUpdateAss = System.AppDomain.CurrentDomain.GetAssemblies().First(a =&gt; a.GetName().Name == &quot;HotUpdate&quot;);
#endif

    Type type = hotUpdateAss.GetType(&quot;Hello&quot;);
    type.GetMethod(&quot;Run&quot;).Invoke(null, null);
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="打包运行" tabindex="-1"><a class="header-anchor" href="#打包运行" aria-hidden="true">#</a> 打包运行</h3><ul><li>运行菜单 HybridCLR/Generate/All 进行必要的生成操作。这一步不可遗漏!!!</li><li>将{proj}/HybridCLRData/HotUpdateDlls/StandaloneWindows64(MacOS下为StandaloneMacXxx)目录下的HotUpdate.dll复制到Assets/StreamingAssets/HotUpdate.dll.bytes，注意，要加.bytes后缀！！！</li><li>打开Build Settings对话框，点击Build And Run，打包并且运行热更新示例工程。</li></ul>`,17),c=[o];function h(u,p){return i(),a("div",null,c)}const g=e(r,[["render",h],["__file","HybridCLR热更.html.vue"]]);export{g as default};
