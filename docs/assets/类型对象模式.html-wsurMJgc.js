import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as i,a}from"./app-Me8ec7aA.js";const d={},s=a(`<h2 id="是什么" tabindex="-1"><a class="header-anchor" href="#是什么" aria-hidden="true">#</a> 是什么</h2><p>通过创建一个类来支持新类型的灵活创建，其每个实例都代表一个不同的对象类型</p><h2 id="为什么使用" tabindex="-1"><a class="header-anchor" href="#为什么使用" aria-hidden="true">#</a> 为什么使用</h2><p>当我们有一个需求比如 要创建一大堆不同种类怪物他们都有自己的攻击力 生命值...时 首先想到是的定义怪物基类 其余种类怪物继承至它 这样会导致类随怪物数量增加而增加</p><h2 id="怎么用" tabindex="-1"><a class="header-anchor" href="#怎么用" aria-hidden="true">#</a> 怎么用</h2><p>让两个类的引用组合实现无数种怪物的需求</p><div class="language-C++ line-numbers-mode" data-ext="C++"><pre class="language-C++"><code>    // 每个怪物的属性值
    class Breed
    {
    public:
      Breed(int health, const char* attack)
      : health_(health),
        attack_(attack)
      {}

      int getHealth() { return health_; }
      const char* getAttack() { return attack_; }

    private:
      int health_; // Starting health.
      const char* attack_;
    };

        class Monster
    {
    public:
      Monster(Breed&amp; breed)
      : health_(breed.getHealth()),
        breed_(breed)
      {}

      const char* getAttack()
      {
        return breed_.getAttack();
      }
    private:
      // Current health.
      int health_;
      // 不同种类怪物 拥有不同属性
      Breed&amp; breed_;
    };
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h2><p>如果怪物属性太多 而且又很多一致的属性数据 为每一个怪物再重复配置会增加工作量</p><h2 id="解决" tabindex="-1"><a class="header-anchor" href="#解决" aria-hidden="true">#</a> 解决</h2><p>采用数据集成方式</p><div class="language-C++ line-numbers-mode" data-ext="C++"><pre class="language-C++"><code>    class Breed
    {
    public:
      Breed(Breed* parent, int health,
            const char* attack)
      : parent_(parent),
        health_(health),
        attack_(attack)
      {}

      int          getHealth();
      const char* getAttack();

    private:
      Breed*      parent_;
      int          health_; // Starting health.
      const char* attack_;
    };

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),l=[s];function r(c,v){return n(),i("div",null,l)}const h=e(d,[["render",r],["__file","类型对象模式.html.vue"]]);export{h as default};
