import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as e,c as n,a as d}from"./app-0fW7japb.js";const l={},s=d(`<h2 id="什么是" tabindex="-1"><a class="header-anchor" href="#什么是" aria-hidden="true">#</a> 什么是</h2><p>沙盒模式是运用在多数代码库里、甚至游戏之外的一种非常简单通用的模式。如果你正在部署一个非虚的受保护方法，那么你很有可能正在使用与之相类似的模式。</p><h2 id="使用场景" tabindex="-1"><a class="header-anchor" href="#使用场景" aria-hidden="true">#</a> 使用场景</h2><ul><li>你有一个带有大量子类的基类。</li><li>基类能够提供所有子类可能需要执行的操作集合。</li><li>在子类之间有重叠的代码，你希望在它们之间更简便地共享代码。</li><li>你希望使这些继承类与程序其他代码之间的耦合最小化。</li></ul><h2 id="为什么使用" tabindex="-1"><a class="header-anchor" href="#为什么使用" aria-hidden="true">#</a> 为什么使用</h2><p>近些年“继承”一词被部分程序圈所诟病，原因之一是基类会衍生越来越多的代码。这个模式尤其受这个因素的影响</p><h2 id="怎么用" tabindex="-1"><a class="header-anchor" href="#怎么用" aria-hidden="true">#</a> 怎么用</h2><p>把所有与外界耦合的操作都封装到基类里</p><div class="language-C++ line-numbers-mode" data-ext="C++"><pre class="language-C++"><code>    class Superpower
    {
    public:
      virtual ～Superpower() {}

    protected:
    // 沙盒函数 子类必须要重写它。这是为了让子类实现者能够明确它们该对power子类做些什么
      virtual void activate() = 0;

      void move(double x, double y, double z)
      {
      // Code here...
      }

      void playSound(SoundId sound)
      {
        // Code here...
      }

      void spawnParticles(ParticleType type, int count)
      {
        // Code here...
      }
    };


        class SkyLaunch : public Superpower
    {
    protected:
      virtual void activate()
      {
        move(0, 0, 20);      // Spring into the air.
        playSound(SOUND_SPROING);
        spawnParticles(PARTICLE_DUST, 10);
      }
    };

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),a=[s];function r(v,c){return e(),n("div",null,a)}const m=i(l,[["render",r],["__file","沙盒模式.html.vue"]]);export{m as default};
