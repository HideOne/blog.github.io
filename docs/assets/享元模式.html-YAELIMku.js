const e=JSON.parse('{"key":"v-30346c0f","path":"/posts/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/%E4%BA%AB%E5%85%83%E6%A8%A1%E5%BC%8F.html","title":"享元模式","lang":"zh-CN","frontmatter":{"title":"享元模式","category":["游戏"],"date":"2023-12-04T14:30:00.000Z","headerDepth":2,"description":"定义 使用共享高效地支持大量的细粒度对象 使用场景 广袤的森林树木 如果所有树木都单独享有数据内存占用无比巨大 并且这些数据在一帧内传入gpu完全不可能 小方框内的数据为同一份数据 我们可以把树木通用数据放到一个单独的类中 class TreeModel { private: Mesh mesh_; Texture bark_; Texture leaves_; }; class Tree { private: TreeModel* model_; Vector position_; double height_; double thickness_; Color barkTint_; Color leafTint_; };","head":[["meta",{"property":"og:url","content":"https://blog.vipfreevpn.top/posts/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/%E4%BA%AB%E5%85%83%E6%A8%A1%E5%BC%8F.html"}],["meta",{"property":"og:site_name","content":"博客"}],["meta",{"property":"og:title","content":"享元模式"}],["meta",{"property":"og:description","content":"定义 使用共享高效地支持大量的细粒度对象 使用场景 广袤的森林树木 如果所有树木都单独享有数据内存占用无比巨大 并且这些数据在一帧内传入gpu完全不可能 小方框内的数据为同一份数据 我们可以把树木通用数据放到一个单独的类中 class TreeModel { private: Mesh mesh_; Texture bark_; Texture leaves_; }; class Tree { private: TreeModel* model_; Vector position_; double height_; double thickness_; Color barkTint_; Color leafTint_; };"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"HideOne"}],["meta",{"property":"article:published_time","content":"2023-12-04T14:30:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"享元模式\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-12-04T14:30:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"HideOne\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"定义","slug":"定义","link":"#定义","children":[]},{"level":2,"title":"使用场景","slug":"使用场景","link":"#使用场景","children":[{"level":3,"title":"地形例子","slug":"地形例子","link":"#地形例子","children":[]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":1.35,"words":405},"filePathRelative":"posts/设计模式/享元模式.md","localizedDate":"2023年12月4日","excerpt":"<h2> 定义</h2>\\n<p>使用共享高效地支持大量的细粒度对象</p>\\n<h2> 使用场景</h2>\\n<p>广袤的森林树木 如果所有树木都单独享有数据内存占用无比巨大 并且这些数据在一帧内传入gpu完全不可能</p>\\n<p>小方框内的数据为同一份数据\\n</p>\\n<p>我们可以把树木通用数据放到一个单独的类中</p>\\n<div class=\\"language-c++ line-numbers-mode\\" data-ext=\\"c++\\"><pre class=\\"language-c++\\"><code>    class TreeModel\\n    {\\n    private:\\n      Mesh mesh_;\\n      Texture bark_;\\n      Texture leaves_;\\n    };\\n\\n\\n    class Tree\\n    {\\n    private:\\n      TreeModel* model_;\\n\\n      Vector position_;\\n      double height_;\\n      double thickness_;\\n      Color barkTint_;\\n      Color leafTint_;\\n    };\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};
