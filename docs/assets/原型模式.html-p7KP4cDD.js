import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as i,c as e,a as s}from"./app-bnkBo40B.js";const l="/assets/image-5-tGWKNsQG.png",u={},d=s('<h2 id="定义" tabindex="-1"><a class="header-anchor" href="#定义" aria-hidden="true">#</a> 定义</h2><p>使用特定原型实例来创建特定种类的对象，并且通过拷贝原型来创建新的对象</p><h2 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h2><p>假设要创建怪物 一般结构图如下 <img src="'+l+`" alt="Alt text" loading="lazy"></p><p>如图所示 每一种类型怪物都需要一个生成器</p><p>使用原型模式</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>class Monster
{
public:
    virtual ～Monster() {}
    virtual Monster* clone() = 0;

    // Other stuff...
};

class Ghost : public Monster {
public:
    Ghost(int health, int speed)
    : health_(health),
    speed_(speed)
    {}

    virtual Monster* clone()
    {
    return new Ghost(health_, speed_);
    }

private:
    int health_;
    int speed_;
};

// 生成器
class Spawner
{
public:
    Spawner(Monster* prototype)
    : prototype_(prototype)
    {}

    Monster* spawnMonster()
    {
    return prototype_-&gt;clone();
    }
private:
    Monster* prototype_;
};

// 实例化怪物生成器 可以创建多种生成器 虚弱 强壮 ...
Monster* ghostPrototype = new Ghost(15, 3);
Spawner* ghostSpawner = new Spawner(ghostPrototype);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h3><ul><li>虽然我们不用再为每一种怪物类型创建单独的生成器了,但是我们需要为每一个怪物类实现clone()方法</li><li>深浅拷贝问题</li></ul><h2 id="json数据配置中采用原型模式" tabindex="-1"><a class="header-anchor" href="#json数据配置中采用原型模式" aria-hidden="true">#</a> json数据配置中采用原型模式</h2><ul><li>降低数据量 降低数据大小</li></ul><div class="language-JSON line-numbers-mode" data-ext="JSON"><pre class="language-JSON"><code>// 没使用原型模式:
{
    &quot;name&quot;: &quot;goblin grunt&quot;,
    &quot;minHealth&quot;: 20,
    &quot;maxHealth&quot;: 30,
    &quot;resists&quot;: [&quot;cold&quot;, &quot;poison&quot;],
    &quot;weaknesses&quot;: [&quot;fire&quot;, &quot;light&quot;]
}

    {
    &quot;name&quot;: &quot;goblin wizard&quot;,
    &quot;minHealth&quot;: 20,
    &quot;maxHealth&quot;: 30,
    &quot;resists&quot;: [&quot;cold&quot;, &quot;poison&quot;],
    &quot;weaknesses&quot;: [&quot;fire&quot;, &quot;light&quot;],
    &quot;spells&quot;: [&quot;fire ball&quot;, &quot;lightning bolt&quot;]
}

{
    &quot;name&quot;: &quot;goblin archer&quot;,
    &quot;minHealth&quot;: 20,
    &quot;maxHealth&quot;: 30,
    &quot;resists&quot;: [&quot;cold&quot;, &quot;poison&quot;],
    &quot;weaknesses&quot;: [&quot;fire&quot;, &quot;light&quot;],
    &quot;attacks&quot;: [&quot;short bow&quot;]
}

// 使用原型模式: 
{
    &quot;name&quot;: &quot;goblin grunt&quot;,
    &quot;minHealth&quot;: 20,
    &quot;maxHealth&quot;: 30,
    &quot;resists&quot;: [&quot;cold&quot;, &quot;poison&quot;],
    &quot;weaknesses&quot;: [&quot;fire&quot;, &quot;light&quot;]
}

{
    &quot;name&quot;: &quot;goblin wizard&quot;,
    &quot;prototype&quot;: &quot;goblin grunt&quot;,
    &quot;spells&quot;: [&quot;fire ball&quot;, &quot;lightning bolt&quot;]
}

{
    &quot;name&quot;: &quot;goblin archer&quot;,
    &quot;prototype&quot;: &quot;goblin grunt&quot;,
    &quot;attacks&quot;: [&quot;short bow&quot;]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),t=[d];function o(a,v){return i(),e("div",null,t)}const m=n(u,[["render",o],["__file","原型模式.html.vue"]]);export{m as default};
