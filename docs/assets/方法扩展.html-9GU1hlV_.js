const e=JSON.parse('{"key":"v-75c49f16","path":"/posts/%E8%AF%AD%E8%A8%80/CNet/%E6%96%B9%E6%B3%95%E6%89%A9%E5%B1%95.html","title":"","lang":"zh-CN","frontmatter":{"description":"title: 类方法扩展 category: 语言 date: 2024-01-30 14:11:44 using UnityEngine; using DG.Tweening; // 命名空间必须与扩展方法的定义所在的命名空间不同 namespace Extensions { // 静态类，用于定义扩展方法 public static class TransformExtensions { // 扩展方法，使Transform类具有MoveX方法 public static Tweener MoveX(this Transform transform, float targetX, float duration) { // 使用DOTween的DOMoveX方法移动Transform的X位置，并返回Tween对象 return transform.DOMoveX(targetX, duration); } } }","head":[["meta",{"property":"og:url","content":"https://blog.vipfreevpn.top/posts/%E8%AF%AD%E8%A8%80/CNet/%E6%96%B9%E6%B3%95%E6%89%A9%E5%B1%95.html"}],["meta",{"property":"og:site_name","content":"博客"}],["meta",{"property":"og:description","content":"title: 类方法扩展 category: 语言 date: 2024-01-30 14:11:44 using UnityEngine; using DG.Tweening; // 命名空间必须与扩展方法的定义所在的命名空间不同 namespace Extensions { // 静态类，用于定义扩展方法 public static class TransformExtensions { // 扩展方法，使Transform类具有MoveX方法 public static Tweener MoveX(this Transform transform, float targetX, float duration) { // 使用DOTween的DOMoveX方法移动Transform的X位置，并返回Tween对象 return transform.DOMoveX(targetX, duration); } } }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-25T12:41:20.000Z"}],["meta",{"property":"article:author","content":"HideOne"}],["meta",{"property":"article:modified_time","content":"2024-03-25T12:41:20.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-25T12:41:20.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"HideOne\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[],"git":{"createdTime":1711370480000,"updatedTime":1711370480000,"contributors":[{"name":"HideOne","email":"844085696@qq.com","commits":1}]},"readingTime":{"minutes":0.37,"words":112},"filePathRelative":"posts/语言/CNet/方法扩展.md","localizedDate":"2024年3月25日","excerpt":"<hr>\\n<p>title: 类方法扩展\\ncategory:</p>\\n<ul>\\n<li>语言\\ndate: 2024-01-30 14:11:44</li>\\n</ul>\\n<hr>\\n<div class=\\"language-C# line-numbers-mode\\" data-ext=\\"C#\\"><pre class=\\"language-C#\\"><code>using UnityEngine;\\nusing DG.Tweening;\\n\\n// 命名空间必须与扩展方法的定义所在的命名空间不同\\nnamespace Extensions\\n{\\n    // 静态类，用于定义扩展方法\\n    public static class TransformExtensions\\n    {\\n        // 扩展方法，使Transform类具有MoveX方法\\n        public static Tweener MoveX(this Transform transform, float targetX, float duration)\\n        {\\n            // 使用DOTween的DOMoveX方法移动Transform的X位置，并返回Tween对象\\n            return transform.DOMoveX(targetX, duration);\\n        }\\n    }\\n}\\n\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};
