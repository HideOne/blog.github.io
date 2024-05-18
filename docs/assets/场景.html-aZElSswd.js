import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as e}from"./app-z4bmX-O1.js";const p={},c=e(`<h2 id="加载场景" tabindex="-1"><a class="header-anchor" href="#加载场景" aria-hidden="true">#</a> 加载场景</h2><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">using</span> <span class="token namespace">UnityEngine</span><span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token namespace">UnityEngine<span class="token punctuation">.</span>SceneManagement</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SceneLoader</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">MonoBehaviour</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">LoadSceneByName</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> sceneName<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        SceneManager<span class="token punctuation">.</span><span class="token function">LoadScene</span><span class="token punctuation">(</span>sceneName<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">LoadSceneByIndex</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span></span> sceneIndex<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        SceneManager<span class="token punctuation">.</span><span class="token function">LoadScene</span><span class="token punctuation">(</span>sceneIndex<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="异步加载场景" tabindex="-1"><a class="header-anchor" href="#异步加载场景" aria-hidden="true">#</a> 异步加载场景</h2><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">using</span> <span class="token namespace">UnityEngine</span><span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token namespace">UnityEngine<span class="token punctuation">.</span>SceneManagement</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SceneLoader</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">MonoBehaviour</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">LoadSceneAsyncByName</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> sceneName<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">StartCoroutine</span><span class="token punctuation">(</span><span class="token function">LoadSceneAsyncCoroutine</span><span class="token punctuation">(</span>sceneName<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token return-type class-name">IEnumerator</span> <span class="token function">LoadSceneAsyncCoroutine</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> sceneName<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name">AsyncOperation</span> asyncLoad <span class="token operator">=</span> SceneManager<span class="token punctuation">.</span><span class="token function">LoadSceneAsync</span><span class="token punctuation">(</span>sceneName<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 等待场景加载完成</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>asyncLoad<span class="token punctuation">.</span>isDone<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token class-name"><span class="token keyword">float</span></span> progress <span class="token operator">=</span> Mathf<span class="token punctuation">.</span><span class="token function">Clamp01</span><span class="token punctuation">(</span>asyncLoad<span class="token punctuation">.</span>progress <span class="token operator">/</span> <span class="token number">0.9f</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 此时场景加载进度范围为 0 到 1</span>
            Debug<span class="token punctuation">.</span><span class="token function">Log</span><span class="token punctuation">(</span><span class="token string">&quot;Loading progress: &quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>progress <span class="token operator">*</span> <span class="token number">100</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;%&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">yield</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// 等待一帧</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="场景间传递数据" tabindex="-1"><a class="header-anchor" href="#场景间传递数据" aria-hidden="true">#</a> 场景间传递数据</h2><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">using</span> <span class="token namespace">UnityEngine</span><span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token namespace">UnityEngine<span class="token punctuation">.</span>SceneManagement</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SceneLoader</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">MonoBehaviour</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">LoadSceneWithParameters</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> sceneName<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name">LoadSceneParameters</span> parameters <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">LoadSceneParameters</span><span class="token punctuation">(</span>LoadSceneMode<span class="token punctuation">.</span>Single<span class="token punctuation">,</span> LocalPhysicsMode<span class="token punctuation">.</span>None<span class="token punctuation">)</span><span class="token punctuation">;</span>
        SceneManager<span class="token punctuation">.</span><span class="token function">LoadScene</span><span class="token punctuation">(</span>sceneName<span class="token punctuation">,</span> parameters<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="场景加载的模式" tabindex="-1"><a class="header-anchor" href="#场景加载的模式" aria-hidden="true">#</a> 场景加载的模式</h2><ul><li>Additive：将新场景添加到现有场景中。</li><li>Replace：替换现有场景。</li><li>LoadInBackground：在后台加载场景。</li><li>AdditiveLoadInBackground：在后台加载场景，并将新场景添加到现有场景中。</li><li>ReplaceLoadInBackground：在后台加载场景，并替换现有场景。</li></ul><h2 id="加载场景其他方法" tabindex="-1"><a class="header-anchor" href="#加载场景其他方法" aria-hidden="true">#</a> 加载场景其他方法</h2><p>SceneManager.LoadSceneAsyncWithName()：使用场景名称加载场景。 SceneManager.LoadSceneAsyncWithPath()：使用场景路径加载场景。 SceneManager.LoadSceneAsyncWithObject()：使用游戏对象加载场景。</p><h2 id="dontdestroyonload-保留物体" tabindex="-1"><a class="header-anchor" href="#dontdestroyonload-保留物体" aria-hidden="true">#</a> DontDestroyOnLoad 保留物体</h2><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">using</span> <span class="token namespace">UnityEngine</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">MonoBehaviour</span></span>
<span class="token punctuation">{</span>
    <span class="token comment">// 需要保留的物体</span>
    <span class="token keyword">public</span> <span class="token class-name">GameObject</span> myObject<span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Awake</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 将物体标记为不应在加载场景时被销毁</span>
        myObject<span class="token punctuation">.</span><span class="token function">DontDestroyOnLoad</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),t=[c];function o(i,l){return s(),a("div",null,t)}const r=n(p,[["render",o],["__file","场景.html.vue"]]);export{r as default};
