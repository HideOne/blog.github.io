import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as e,c as n,a}from"./app-bnkBo40B.js";const s={},l=a(`<h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>class FileSystem
{
public:
    static FileSystem&amp; instance()
    {
    // Lazy initialize.
    if (instance_ == NULL)
    {
        instance_ = new FileSystem();
    }
    return *instance_;
    }

private:
    FileSystem() {}

    static FileSystem* instance_;
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点" aria-hidden="true">#</a> 缺点</h2><ul><li>单例为全局变量 代码晦涩 需要全局查看其状态的改变</li><li>多线程中并发问题</li></ul><h2 id="为实例提供便捷的访问方式" tabindex="-1"><a class="header-anchor" href="#为实例提供便捷的访问方式" aria-hidden="true">#</a> 为实例提供便捷的访问方式</h2><ul><li>作为参数传递: 如渲染函数中的content</li><li>在基类中获取: 通常游戏引擎类都继承至一个基类 如Unity GameObject</li><li>通过其他全局类访问: 全局访问的类 如cocos中的存储cc.game类</li></ul>`,6),d=[l];function c(r,t){return e(),n("div",null,d)}const u=i(s,[["render",c],["__file","单例模式.html.vue"]]);export{u as default};
