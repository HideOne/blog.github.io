import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as s,o as l,c as a,b as e,d,e as r,a as v}from"./app-Tri3Iytk.js";const t="/assets/image-8-ApfKDpRC.png",c="/assets/image-9-5XX3sIG5.png",u={},o={href:"https://zhuanlan.zhihu.com/p/351279020",target:"_blank",rel:"noopener noreferrer"},m=v('<h2 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h2><p>计算下面式子 (1 + 2) * (3 - 4)</p><figure><img src="'+t+'" alt="Alt text" tabindex="0" loading="lazy"><figcaption>Alt text</figcaption></figure><figure><img src="'+c+`" alt="Alt text" tabindex="0" loading="lazy"><figcaption>Alt text</figcaption></figure><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>    class Expression
    {
    public:
      virtual ～Expression() {}
      virtual double evaluate() = 0;
    };

    // 数字解析器
        class NumberExpression : public Expression
    {
    public:
      NumberExpression(double value)
      : value_(value)
      {}

      virtual double evaluate()   { return value_;   }

    private:
      double value_;
    };

    // 加法解析器
        class AdditionExpression : public Expression
    {
    public:
      AdditionExpression(Expression* left,
                          Expression* right)
      : left_(left),
        right_(right)
      {}

      virtual double evaluate()
      {
        // Evaluate the operands.
        double left = left_-&gt;evaluate();
        double right = right_-&gt;evaluate();

        // Add them.
        return left + right;
      }

    private:
      Expression* left_;
      Expression* right_;
    };

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点" aria-hidden="true">#</a> 缺点</h2><p>慢！大部分广泛使用的编程语言没有基于解释器模式也正因于此。它太慢了，并且占用了大量的内存。</p>`,7);function b(p,_){const i=s("ExternalLinkIcon");return l(),a("div",null,[e("p",null,[e("a",o,[d("显示器工作原理"),r(i)])]),m])}const f=n(u,[["render",b],["__file","解释器模式.html.vue"]]);export{f as default};
