import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as e,c as n,a as s}from"./app-vVBRcJiJ.js";const l={},d=s(`<h2 id="什么是" tabindex="-1"><a class="header-anchor" href="#什么是" aria-hidden="true">#</a> 什么是</h2><p>类似函数指针</p><h2 id="怎么用" tabindex="-1"><a class="header-anchor" href="#怎么用" aria-hidden="true">#</a> 怎么用</h2><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>using System;

public delegate void MyDelegate(string message);

public class MyClass
{
    public MyDelegate myDelegate;

    public void MyMethod(string message)
    {
        Console.WriteLine(message);
    }
}

class Program
{
    static void Main()
    {
        MyClass obj = new MyClass();
        obj.myDelegate = new MyDelegate(obj.MyMethod);
        obj.myDelegate = obj.MyMethod

        // 调用委托
        obj.myDelegate(&quot;Hello, Delegate!&quot;);
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="action委托" tabindex="-1"><a class="header-anchor" href="#action委托" aria-hidden="true">#</a> Action委托</h2><p>Action 是 C# 中的一个内置委托类型，用于表示不返回值的方法。</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>using System;

public class MyClass
{
    public static void MyMethod()
    {
        Console.WriteLine(&quot;Hello from MyMethod!&quot;);
    }
}

class Program
{
    static void Main()
    {
        // 创建 Action 委托实例并将方法绑定到委托
        Action myAction = new Action(MyClass.MyMethod);

        // 调用 Action 委托
        myAction(); // 输出: Hello from MyMethod!
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="带参数action委托" tabindex="-1"><a class="header-anchor" href="#带参数action委托" aria-hidden="true">#</a> 带参数Action委托</h3><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>using System;

public class MyClass
{
    public static void MyMethod(string message)
    {
        Console.WriteLine(&quot;Message: &quot; + message);
    }
}

class Program
{
    static void Main()
    {
        // 创建 Action 委托实例并将带有参数的方法绑定到委托
        Action&lt;string&gt; myAction = new Action&lt;string&gt;(MyClass.MyMethod);

        // 调用 Action 委托并传递参数
        myAction(&quot;Hello, Action!&quot;); // 输出: Message: Hello, Action!
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="func-委托" tabindex="-1"><a class="header-anchor" href="#func-委托" aria-hidden="true">#</a> func 委托</h2><p>Func 是一个泛型委托类型，用于表示带有返回值的方法。 Func 委托可以用于引用接受指定参数并返回指定类型结果的方法。 Func 的最后一个类型参数表示返回值的类型，前面的类型参数表示方法的参数类型</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>using System;

class Program
{
    static void Main()
    {
        // 使用 Func 委托定义一个接受两个整数并返回它们的和的方法
        Func&lt;int, int, int&gt; addFunc = (a, b) =&gt; a + b;

        // 使用 Func 委托定义一个接受字符串并返回其长度的方法
        Func&lt;string, int&gt; lengthFunc = s =&gt; s.Length;

        // 调用这些方法
        int sum = addFunc(5, 3);
        int length = lengthFunc(&quot;Hello, Func!&quot;);

        Console.WriteLine($&quot;Sum: {sum}&quot;);
        Console.WriteLine($&quot;Length: {length}&quot;);
    }
}


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="多播-广播-委托" tabindex="-1"><a class="header-anchor" href="#多播-广播-委托" aria-hidden="true">#</a> 多播（广播）委托</h2><p>可以指向多个方法</p><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>using System;

public delegate void MyDelegate(string message);

public class MyClass
{
    public void Method1(string message)
    {
        Console.WriteLine(&quot;Method1: &quot; + message);
    }

    public void Method2(string message)
    {
        Console.WriteLine(&quot;Method2: &quot; + message);
    }
}

class Program
{
    static void Main()
    {
        MyClass obj = new MyClass();

        // 创建委托实例，并将两个方法绑定到委托
        MyDelegate myDelegate = obj.Method1;
        myDelegate += obj.Method2;

        // 调用多播委托，将依次调用 Method1 和 Method2
        myDelegate(&quot;Hello, Multicast Delegate!&quot;);
    }
}


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="事件" tabindex="-1"><a class="header-anchor" href="#事件" aria-hidden="true">#</a> 事件</h2><p>事件是一种特殊的委托，用于实现观察者设计模式。事件允许一个对象通知其他对象发生的特定动作</p><p>在委托类型前面加上一个event关键字</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>using System;

// 定义事件发布者类
public class EventPublisher
{
    // 声明一个委托类型的事件
    public event EventHandler MyEvent;

    // 触发事件的方法
    public void RaiseEvent(string message)
    {
        Console.WriteLine(&quot;EventPublisher is raising an event.&quot;);
        OnMyEvent(message);
    }

    // 调用事件的方法
    protected virtual void OnMyEvent(string message)
    {
        MyEvent?.Invoke(this, new MyEventArgs(message));
    }
}

// 定义事件参数类
public class MyEventArgs : EventArgs
{
    public string Message { get; }

    public MyEventArgs(string message)
    {
        Message = message;
    }
}

// 定义事件订阅者类
public class EventSubscriber
{
    // 事件处理方法
    public void HandleEvent(object sender, MyEventArgs e)
    {
        Console.WriteLine($&quot;EventSubscriber received a message: {e.Message}&quot;);
    }
}

class Program
{
    static void Main()
    {
        EventPublisher publisher = new EventPublisher();
        EventSubscriber subscriber = new EventSubscriber();

        // 订阅事件
        publisher.MyEvent += subscriber.HandleEvent;

        // 触发事件
        publisher.RaiseEvent(&quot;Hello, Event!&quot;);

        // 取消订阅事件
        publisher.MyEvent -= subscriber.HandleEvent;
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="匿名函数-和-lambda" tabindex="-1"><a class="header-anchor" href="#匿名函数-和-lambda" aria-hidden="true">#</a> 匿名函数 和 lambda</h2><h3 id="delegate" tabindex="-1"><a class="header-anchor" href="#delegate" aria-hidden="true">#</a> delegate</h3><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>using System;

public delegate void MyDelegate(string message);

class Program
{
    static void Main()
    {
        // 使用 delegate 关键字创建匿名函数
        MyDelegate myDelegate = delegate (string message)
        {
            Console.WriteLine(&quot;Anonymous Function: &quot; + message);
        };

        myDelegate(&quot;Hello, Anonymous Function!&quot;);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="lambda" tabindex="-1"><a class="header-anchor" href="#lambda" aria-hidden="true">#</a> lambda</h3><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>using System;

public delegate void MyDelegate(string message);

class Program
{
    static void Main()
    {
        // 使用 Lambda 表达式创建匿名函数
        MyDelegate myDelegate = (message) =&gt;
        {
            Console.WriteLine(&quot;Anonymous Function: &quot; + message);
        };

        myDelegate(&quot;Hello, Anonymous Function!&quot;);
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24),a=[d];function v(c,r){return e(),n("div",null,a)}const b=i(l,[["render",v],["__file","CNet.html.vue"]]);export{b as default};
