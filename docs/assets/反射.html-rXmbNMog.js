import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as i,a as s}from"./app-lPatJsT1.js";const d={},l=s(`<h2 id="什么是" tabindex="-1"><a class="header-anchor" href="#什么是" aria-hidden="true">#</a> 什么是</h2><p>反射（Reflection）是允许你在运行时获取并操作程序集、类型、对象的信息</p><h2 id="为什么" tabindex="-1"><a class="header-anchor" href="#为什么" aria-hidden="true">#</a> 为什么</h2><p>使得你可以在运行时了解和操作代码的结构</p><h2 id="怎么用" tabindex="-1"><a class="header-anchor" href="#怎么用" aria-hidden="true">#</a> 怎么用</h2><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>using System;
using System.Reflection;

class Program
{
    static void Main()
    {
        Type myType = typeof(MyClass);

        // 创建类的实例
        object instance = Activator.CreateInstance(myType);

        // 获取方法信息
        MethodInfo methodInfo = myType.GetMethod(&quot;MyMethod&quot;);

        // 调用方法
        methodInfo.Invoke(instance, null);

        // 获取和设置属性值
        PropertyInfo propertyInfo = myType.GetProperty(&quot;MyProperty&quot;); 
        propertyInfo.SetValue(instance, 42);
        Console.WriteLine(&quot;Property Value: &quot; + propertyInfo.GetValue(instance));
    }
}

public class MyClass
{
    public int MyProperty { get; set; }
    public void MyMethod() { Console.WriteLine(&quot;MyMethod called.&quot;); }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),a=[l];function r(t,c){return n(),i("div",null,a)}const u=e(d,[["render",r],["__file","反射.html.vue"]]);export{u as default};
