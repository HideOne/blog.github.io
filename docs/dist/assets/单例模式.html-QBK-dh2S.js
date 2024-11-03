const e=JSON.parse('{"key":"v-05182596","path":"/posts/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/%E5%8D%95%E4%BE%8B%E6%A8%A1%E5%BC%8F.html","title":"单例模式","lang":"zh-CN","frontmatter":{"title":"单例模式","category":["游戏"],"date":"2023-12-25T12:00:00.000Z","headerDepth":2,"order":1,"description":"示例 class FileSystem { public: static FileSystem&amp; instance() { // Lazy initialize. if (instance_ == NULL) { instance_ = new FileSystem(); } return *instance_; } private: FileSystem() {} static FileSystem* instance_; };","head":[["meta",{"property":"og:url","content":"https://blog.vipfreevpn.top/posts/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/%E5%8D%95%E4%BE%8B%E6%A8%A1%E5%BC%8F.html"}],["meta",{"property":"og:site_name","content":"博客"}],["meta",{"property":"og:title","content":"单例模式"}],["meta",{"property":"og:description","content":"示例 class FileSystem { public: static FileSystem&amp; instance() { // Lazy initialize. if (instance_ == NULL) { instance_ = new FileSystem(); } return *instance_; } private: FileSystem() {} static FileSystem* instance_; };"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-27T06:27:01.000Z"}],["meta",{"property":"article:author","content":"HideOne"}],["meta",{"property":"article:published_time","content":"2023-12-25T12:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-12-27T06:27:01.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"单例模式\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-12-25T12:00:00.000Z\\",\\"dateModified\\":\\"2023-12-27T06:27:01.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"HideOne\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"示例","slug":"示例","link":"#示例","children":[]},{"level":2,"title":"缺点","slug":"缺点","link":"#缺点","children":[]},{"level":2,"title":"为实例提供便捷的访问方式","slug":"为实例提供便捷的访问方式","link":"#为实例提供便捷的访问方式","children":[]}],"git":{"createdTime":1703508540000,"updatedTime":1703658421000,"contributors":[{"name":"HideOne","email":"844085696@qq.com","commits":2}]},"readingTime":{"minutes":0.5,"words":150},"filePathRelative":"posts/设计模式/单例模式.md","localizedDate":"2023年12月25日","excerpt":"<h2> 示例</h2>\\n<div class=\\"language-c++ line-numbers-mode\\" data-ext=\\"c++\\"><pre class=\\"language-c++\\"><code>class FileSystem\\n{\\npublic:\\n    static FileSystem&amp; instance()\\n    {\\n    // Lazy initialize.\\n    if (instance_ == NULL)\\n    {\\n        instance_ = new FileSystem();\\n    }\\n    return *instance_;\\n    }\\n\\nprivate:\\n    FileSystem() {}\\n\\n    static FileSystem* instance_;\\n};\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};
