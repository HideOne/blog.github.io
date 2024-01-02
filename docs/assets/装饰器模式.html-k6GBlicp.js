import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as d,a as e}from"./app-0fW7japb.js";const s={},l=e(`<h2 id="定义" tabindex="-1"><a class="header-anchor" href="#定义" aria-hidden="true">#</a> 定义</h2><p>许向一个现有的对象添加新的功能，同时又不改变其结构</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>
    class Audio
    {
    public:
      virtual ～Audio() {}
      virtual void playSound(int soundID) = 0;
      virtual void stopSound(int soundID) = 0;
      virtual void stopAllSounds() = 0;
    };

  // 为音频类添加日志装饰器
  class LoggedAudio : public Audio
  {
  public:
    LoggedAudio(Audio &amp;wrapped) : wrapped_(wrapped) {}

    Virtual void playSound(int soundID)
    {
      log(&quot;play sound&quot;);
      wrapped_.playSound(soundID);
    }

    virtual void stopSound(int soundID)
    {
      log(&quot;stop sound&quot;);
      wrapped_.stopSound(soundID);
    }

    virtual void stopAllSounds()
    {
      log(&quot;stop all sounds&quot;);
      wrapped_.stopAllSounds();
    }

  private:
    void log(const char* message)
    {
      // Code to log message...
    }

    Audio &amp;wrapped_;
  };



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),v=[l];function a(u,r){return n(),d("div",null,v)}const m=i(s,[["render",a],["__file","装饰器模式.html.vue"]]);export{m as default};
