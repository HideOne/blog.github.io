const e=JSON.parse('{"key":"v-e1bd7378","path":"/posts/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/%E8%A7%82%E5%AF%9F%E8%80%85%E6%A8%A1%E5%BC%8F.html","title":"观察者模式","lang":"zh-CN","frontmatter":{"title":"观察者模式","category":["游戏"],"date":"2023-12-04T13:00:00.000Z","headerDepth":2,"description":"定义 在对象间提供一种一对多的依赖 以便在对象改变时依赖与此对象的对象能收到通知 void Physics::updateEntity(Entity&amp; entity) { bool wasOnSurface = entity.isOnSurface(); entity.accelerate(GRAVITY); entity.update(); if (wasOnSurface &amp;&amp; ! entity.isOnSurface()) { notify(entity, EVENT_START_FALL); } }","head":[["meta",{"property":"og:url","content":"https://blog.vipfreevpn.top/posts/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/%E8%A7%82%E5%AF%9F%E8%80%85%E6%A8%A1%E5%BC%8F.html"}],["meta",{"property":"og:site_name","content":"博客"}],["meta",{"property":"og:title","content":"观察者模式"}],["meta",{"property":"og:description","content":"定义 在对象间提供一种一对多的依赖 以便在对象改变时依赖与此对象的对象能收到通知 void Physics::updateEntity(Entity&amp; entity) { bool wasOnSurface = entity.isOnSurface(); entity.accelerate(GRAVITY); entity.update(); if (wasOnSurface &amp;&amp; ! entity.isOnSurface()) { notify(entity, EVENT_START_FALL); } }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"HideOne"}],["meta",{"property":"article:published_time","content":"2023-12-04T13:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"观察者模式\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-12-04T13:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"HideOne\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"定义","slug":"定义","link":"#定义","children":[{"level":3,"title":"纯在问题","slug":"纯在问题","link":"#纯在问题","children":[]},{"level":3,"title":"链式观察者","slug":"链式观察者","link":"#链式观察者","children":[]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":0.53,"words":158},"filePathRelative":"posts/设计模式/观察者模式.md","localizedDate":"2023年12月4日","excerpt":"<h2> 定义</h2>\\n<p>在对象间提供一种一对多的依赖 以便在对象改变时依赖与此对象的对象能收到通知</p>\\n<div class=\\"language-C++ line-numbers-mode\\" data-ext=\\"C++\\"><pre class=\\"language-C++\\"><code>    void Physics::updateEntity(Entity&amp; entity)\\n    {\\n      bool wasOnSurface = entity.isOnSurface();\\n      entity.accelerate(GRAVITY);\\n      entity.update();\\n      if (wasOnSurface &amp;&amp; ! entity.isOnSurface())\\n      {\\n        notify(entity, EVENT_START_FALL);\\n      }\\n    }\\n\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};
