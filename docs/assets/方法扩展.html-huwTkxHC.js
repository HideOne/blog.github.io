import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as e,c as i,a as s}from"./app-B03mYNCC.js";const l={},a=s(`<hr><p>title: 类方法扩展 category:</p><ul><li>语言 date: 2024-01-30 14:11:44</li></ul><hr><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>using UnityEngine;
using DG.Tweening;

// 命名空间必须与扩展方法的定义所在的命名空间不同
namespace Extensions
{
    // 静态类，用于定义扩展方法
    public static class TransformExtensions
    {
        // 扩展方法，使Transform类具有MoveX方法
        public static Tweener MoveX(this Transform transform, float targetX, float duration)
        {
            // 使用DOTween的DOMoveX方法移动Transform的X位置，并返回Tween对象
            return transform.DOMoveX(targetX, duration);
        }
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),r=[a];function d(c,t){return e(),i("div",null,r)}const u=n(l,[["render",d],["__file","方法扩展.html.vue"]]);export{u as default};
