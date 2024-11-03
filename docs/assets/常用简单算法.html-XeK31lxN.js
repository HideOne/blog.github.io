import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as p}from"./app-iTvMBDiJ.js";const t={},o=p(`<h2 id="字符串相似度" tabindex="-1"><a class="header-anchor" href="#字符串相似度" aria-hidden="true">#</a> 字符串相似度</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/** 字符串相似度（编辑距离算法） */</span>
    <span class="token keyword">private</span> <span class="token function">_similarityEditDist</span><span class="token punctuation">(</span>vS_<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> v2S_<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> vLenN <span class="token operator">=</span> vS_<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
        <span class="token keyword">let</span> v2LenN <span class="token operator">=</span> v2S_<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
        <span class="token comment">// 安检</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>vLenN <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> v2LenN<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>v2LenN <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> vLenN<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">let</span> distNss<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token comment">// 二维距离表格</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> kN <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> kN <span class="token operator">&lt;=</span> vLenN<span class="token punctuation">;</span> kN<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            distNss<span class="token punctuation">[</span>kN<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            distNss<span class="token punctuation">[</span>kN<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> kN<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> kN <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> kN <span class="token operator">&lt;=</span> v2LenN<span class="token punctuation">;</span> kN<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            distNss<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span>kN<span class="token punctuation">]</span> <span class="token operator">=</span> kN<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 计算每个格子距离</span>
        <span class="token keyword">let</span> vCurrS<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> v2CurrS<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> kN <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> kN <span class="token operator">&lt;=</span> vLenN<span class="token punctuation">;</span> kN<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            vCurrS <span class="token operator">=</span> vS_<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>kN <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> k2N <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> k2N <span class="token operator">&lt;=</span> v2LenN<span class="token punctuation">;</span> k2N<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                v2CurrS <span class="token operator">=</span> v2S_<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>k2N <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                distNss<span class="token punctuation">[</span>kN<span class="token punctuation">]</span><span class="token punctuation">[</span>k2N<span class="token punctuation">]</span> <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>
                    distNss<span class="token punctuation">[</span>kN <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>k2N<span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    distNss<span class="token punctuation">[</span>kN<span class="token punctuation">]</span><span class="token punctuation">[</span>k2N <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    distNss<span class="token punctuation">[</span>kN <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>k2N <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token punctuation">(</span>vCurrS <span class="token operator">===</span> v2CurrS <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">)</span>
                <span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 返回右下角距离的比例</span>
        <span class="token keyword">return</span> <span class="token function">Number</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">-</span> distNss<span class="token punctuation">[</span>vLenN<span class="token punctuation">]</span><span class="token punctuation">[</span>v2LenN<span class="token punctuation">]</span> <span class="token operator">/</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>vS_<span class="token punctuation">.</span>length<span class="token punctuation">,</span> v2S_<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token doc-comment comment">/** 模糊匹配（多个源字符串时返回相识度最高的字符串） */</span>
    <span class="token keyword">private</span> <span class="token function">_fuzzyMatch</span><span class="token punctuation">(</span>args_<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> keyS_<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> minSimileN_ <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> sourceSS<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> args_ <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            sourceSS <span class="token operator">=</span> <span class="token punctuation">[</span>args_<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            sourceSS <span class="token operator">=</span> args_<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">let</span> matchResultSS<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> keySS <span class="token operator">=</span> keyS_<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> indexN<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
        sourceSS<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>vS<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            indexN <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> k2N <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> k2N <span class="token operator">&lt;</span> keySS<span class="token punctuation">.</span>length<span class="token punctuation">;</span> <span class="token operator">++</span>k2N<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// 有一个关键字都没匹配到，则没有匹配到数据</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>vS<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>keySS<span class="token punctuation">[</span>k2N<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">break</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                    <span class="token keyword">const</span> reg <span class="token operator">=</span> <span class="token function">RegExp</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>keySS<span class="token punctuation">[</span>k2N<span class="token punctuation">]</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> <span class="token string">&#39;g&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">let</span> execResult<span class="token operator">:</span> RegExpExecArray <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
                    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>execResult <span class="token operator">=</span> reg<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>vS<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        <span class="token keyword">if</span> <span class="token punctuation">(</span>execResult<span class="token punctuation">.</span>index <span class="token operator">&gt;</span> indexN<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                            indexN <span class="token operator">=</span> execResult<span class="token punctuation">.</span>index<span class="token punctuation">;</span>
                            <span class="token keyword">if</span> <span class="token punctuation">(</span>k2N <span class="token operator">===</span> keySS<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                                matchResultSS<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>vS<span class="token punctuation">)</span><span class="token punctuation">;</span>
                                <span class="token keyword">return</span><span class="token punctuation">;</span>
                            <span class="token punctuation">}</span>
                            <span class="token keyword">break</span><span class="token punctuation">;</span>
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>matchResultSS<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 返回相识度最高的字符串</span>
        <span class="token keyword">else</span> <span class="token punctuation">{</span>
            matchResultSS<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span>vaS<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> vbS<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_similarityEditDist</span><span class="token punctuation">(</span>vbS<span class="token punctuation">,</span> keyS_<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_similarityEditDist</span><span class="token punctuation">(</span>vaS<span class="token punctuation">,</span> keyS_<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_similarityEditDist</span><span class="token punctuation">(</span>matchResultSS<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> keyS_<span class="token punctuation">)</span> <span class="token operator">&gt;=</span> minSimileN_ <span class="token operator">?</span> matchResultSS<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">:</span> keyS_<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),e=[o];function c(l,u){return s(),a("div",null,e)}const r=n(t,[["render",c],["__file","常用简单算法.html.vue"]]);export{r as default};
