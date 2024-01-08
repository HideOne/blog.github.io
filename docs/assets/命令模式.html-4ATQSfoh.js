import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as i,c as e,a as d}from"./app-fLi6lZ3q.js";const s="/assets/image-tLzaefCU.png",l={},a=d(`<h2 id="定义" tabindex="-1"><a class="header-anchor" href="#定义" aria-hidden="true">#</a> 定义</h2><p>将一个请求（request）封装成一个对象，从而允许你使用不同的请求、队列或日志将客户端参数化，同时支持请求操作的撤销与恢复。</p><p>简单概括就是: 把调用方法对象化(实例化)</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>    class Command
    {
    public:
      virtual ～Command() {}
      virtual void execute(GameActor&amp; actor) = 0;

        Command* InputHandler::handleInput()
        {
            if (isPressed(BUTTON_X)) return buttonX_;
            if (isPressed(BUTTON_Y)) return buttonY_;
            if (isPressed(BUTTON_A)) return buttonA_;
            if (isPressed(BUTTON_B)) return buttonB_;

            // Nothing pressed, so do nothing.
            return NULL;
        }
    };


    class JumpCommand : public Command
    {
    public:
      virtual void execute(GameActor&amp; actor)
      {
        actor.jump();
      }
    };


    Command* command = inputHandler.handleInput();
    if (command)
    {
      command-&gt;execute(actor);
    }

   

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="撤销和重做" tabindex="-1"><a class="header-anchor" href="#撤销和重做" aria-hidden="true">#</a> 撤销和重做</h2><ul><li>命令模式的经典应用</li></ul><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>    class MoveUnitCommand : public Command
    {
    public:
      MoveUnitCommand(Unit* unit, int x, int y)
      : unit_(unit), x_(x), y_(y)
        xBefore_(0), yBefore_(0),
      {}

      virtual void execute()
      {
        // Remember the unit&#39;s position before the move
        // so we can restore it.
        xBefore_ = unit_-&gt;x();
        yBefore_ = unit_-&gt;y();
        unit_-&gt;moveTo(x_, y_);
      }

      // 取消指令 撤回
      virtual void undo()
      {
        unit_-&gt;moveTo(xBefore_, yBefore_);
      }

    private:
      Unit* unit_;
      int x_, y_;
      // 保存上一次操作
      int xBefore_, yBefore_;
    };

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="多次撤回" tabindex="-1"><a class="header-anchor" href="#多次撤回" aria-hidden="true">#</a> 多次撤回</h3><p>只需要维护一个命令列表 按列表顺序撤回 <img src="`+s+'" alt="Alt text" loading="lazy"></p>',9),v=[a];function r(c,u){return i(),e("div",null,v)}const b=n(l,[["render",r],["__file","命令模式.html.vue"]]);export{b as default};
