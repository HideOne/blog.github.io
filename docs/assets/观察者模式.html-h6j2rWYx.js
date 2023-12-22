import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as i,c as n,a}from"./app-Z8xSIflg.js";const d={},s=a(`<h2 id="定义" tabindex="-1"><a class="header-anchor" href="#定义" aria-hidden="true">#</a> 定义</h2><p>在对象间提供一种一对多的依赖 以便在对象改变时依赖与此对象的对象能收到通知</p><div class="language-C++ line-numbers-mode" data-ext="C++"><pre class="language-C++"><code>    void Physics::updateEntity(Entity&amp; entity)
    {
      bool wasOnSurface = entity.isOnSurface();
      entity.accelerate(GRAVITY);
      entity.update();
      if (wasOnSurface &amp;&amp; ! entity.isOnSurface())
      {
        notify(entity, EVENT_START_FALL);
      }
    }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="纯在问题" tabindex="-1"><a class="header-anchor" href="#纯在问题" aria-hidden="true">#</a> 纯在问题</h3><ul><li>在多线程模式下 可能引起线程间的冲突</li><li>如果采用数组来存储观察者 容易产生 内存碎片化问题 影响超长时间游戏运行的效率</li></ul><h3 id="链式观察者" tabindex="-1"><a class="header-anchor" href="#链式观察者" aria-hidden="true">#</a> 链式观察者</h3><p>解决内存碎片问题</p><p>将存储观察者的数组替换为 链表</p>`,8),r=[s];function t(l,c){return i(),n("div",null,r)}const o=e(d,[["render",t],["__file","观察者模式.html.vue"]]);export{o as default};
