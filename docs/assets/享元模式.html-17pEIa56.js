import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as e,a as s}from"./app-iTvMBDiJ.js";const l="/assets/image-1-I2lJiA9y.png",d="/assets/image-2-ZinCj8W5.png",r="/assets/image-3-p_tfDSUB.png",a={},v=s('<h2 id="定义" tabindex="-1"><a class="header-anchor" href="#定义" aria-hidden="true">#</a> 定义</h2><p>使用共享高效地支持大量的细粒度对象</p><h2 id="使用场景" tabindex="-1"><a class="header-anchor" href="#使用场景" aria-hidden="true">#</a> 使用场景</h2><p>广袤的森林树木 如果所有树木都单独享有数据内存占用无比巨大 并且这些数据在一帧内传入gpu完全不可能</p><p>小方框内的数据为同一份数据 <img src="'+l+`" alt="Alt text" loading="lazy"></p><p>我们可以把树木通用数据放到一个单独的类中</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>    class TreeModel
    { 
    private:
      Mesh mesh_;
      Texture bark_;
      Texture leaves_;
    };


    class Tree
    {
    private:
      TreeModel* model_;

      Vector position_;
      double height_;
      double thickness_;
      Color barkTint_;
      Color leafTint_;
    };
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>整个游戏只需要一份这个数据所有的实例树都指向它</p><p>看起来非常像类型对象模式。两者都是把部分状态给另一个由大量实例所共享的对象 但是两个模式背后的意图不同: 类型对象是减少定义新类型的数量 而享元是更注重执行效率</p><p>图例展示 <img src="`+d+`" alt="Alt text" loading="lazy"></p><h3 id="地形例子" tabindex="-1"><a class="header-anchor" href="#地形例子" aria-hidden="true">#</a> 地形例子</h3><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>    class Terrain
    {
    public:
      Terrain(int movementCost, bool isWater,
             Texture texture)
      : moveCost_(moveCost),
        isWater_(isWater),
        texture_(texture)
      {}

      int getMoveCost() const { return moveCost_; }
      bool isWater() const { return isWater_; }
      const Texture&amp; getTexture() const
      {
      return texture_;
      }

    private:
      int moveCost_;
      bool isWater_;
      Texture texture_;
    };

    class World
    {
        public:
        World()
        : grassTerrain_(1, false, GRASS_TEXTURE),
            hillTerrain_(3, false, HILL_TEXTURE),
            riverTerrain_(2, true, RIVER_TEXTURE)
        {}  
        
        // 地形生成
        void World::generateTerrain()
        {
            // Fill the ground with grass.
            for (int x = 0; x &lt; WIDTH; x++)
            {
                for (int y = 0; y &lt; HEIGHT; y++)
                {
                    // Sprinkle some hills.
                    if (random(10) == 0)
                    {
                        tiles_[x][y] = &amp;hillTerrain_;
                    }
                    else
                    {
                    tiles_[x][y] = &amp;grassTerrain_;
                    }
                }
            }

        // Lay a river.
        int x = random(WIDTH);
        for (int y = 0; y &lt; HEIGHT; y++) {
        tiles_[x][y] = &amp;riverTerrain_;
        }
    }

    const Terrain&amp; World::getTile(int x, int y) const
    {
      return *tiles_[x][y];
    }

        private:
        Terrain grassTerrain_;
        Terrain hillTerrain_;
        Terrain riverTerrain_;
        // Other stuff...

        
    };

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+r+'" alt="Alt text" tabindex="0" loading="lazy"><figcaption>Alt text</figcaption></figure>',13),c=[v];function u(t,m){return n(),e("div",null,c)}const _=i(a,[["render",u],["__file","享元模式.html.vue"]]);export{_ as default};
