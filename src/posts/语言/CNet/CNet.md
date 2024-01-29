---
title: C#
category:
  - 语言
date: 2024-01-29 22:13:21
---

## 什么是
类似函数指针

 
## 怎么用

```c#
using System;

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
        obj.myDelegate("Hello, Delegate!");
    }
}

```

## Action委托
Action 是 C# 中的一个内置委托类型，用于表示不返回值的方法。

```c#
using System;

public class MyClass
{
    public static void MyMethod()
    {
        Console.WriteLine("Hello from MyMethod!");
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

```

### 带参数Action委托
```c#
using System;

public class MyClass
{
    public static void MyMethod(string message)
    {
        Console.WriteLine("Message: " + message);
    }
}

class Program
{
    static void Main()
    {
        // 创建 Action 委托实例并将带有参数的方法绑定到委托
        Action<string> myAction = new Action<string>(MyClass.MyMethod);

        // 调用 Action 委托并传递参数
        myAction("Hello, Action!"); // 输出: Message: Hello, Action!
    }
}

```


## func 委托
Func 是一个泛型委托类型，用于表示带有返回值的方法。
Func 委托可以用于引用接受指定参数并返回指定类型结果的方法。
Func 的最后一个类型参数表示返回值的类型，前面的类型参数表示方法的参数类型
```c#
using System;

class Program
{
    static void Main()
    {
        // 使用 Func 委托定义一个接受两个整数并返回它们的和的方法
        Func<int, int, int> addFunc = (a, b) => a + b;

        // 使用 Func 委托定义一个接受字符串并返回其长度的方法
        Func<string, int> lengthFunc = s => s.Length;

        // 调用这些方法
        int sum = addFunc(5, 3);
        int length = lengthFunc("Hello, Func!");

        Console.WriteLine($"Sum: {sum}");
        Console.WriteLine($"Length: {length}");
    }
}


```

## 多播（广播）委托
可以指向多个方法
```C#
using System;

public delegate void MyDelegate(string message);

public class MyClass
{
    public void Method1(string message)
    {
        Console.WriteLine("Method1: " + message);
    }

    public void Method2(string message)
    {
        Console.WriteLine("Method2: " + message);
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
        myDelegate("Hello, Multicast Delegate!");
    }
}


```

## 事件
事件是一种特殊的委托，用于实现观察者设计模式。事件允许一个对象通知其他对象发生的特定动作

在委托类型前面加上一个event关键字
```
using System;

// 定义事件发布者类
public class EventPublisher
{
    // 声明一个委托类型的事件
    public event EventHandler MyEvent;

    // 触发事件的方法
    public void RaiseEvent(string message)
    {
        Console.WriteLine("EventPublisher is raising an event.");
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
        Console.WriteLine($"EventSubscriber received a message: {e.Message}");
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
        publisher.RaiseEvent("Hello, Event!");

        // 取消订阅事件
        publisher.MyEvent -= subscriber.HandleEvent;
    }
}

```


## 匿名函数 和 lambda

### delegate
```C#
using System;

public delegate void MyDelegate(string message);

class Program
{
    static void Main()
    {
        // 使用 delegate 关键字创建匿名函数
        MyDelegate myDelegate = delegate (string message)
        {
            Console.WriteLine("Anonymous Function: " + message);
        };

        myDelegate("Hello, Anonymous Function!");
    }
}
```

### lambda
```c#
using System;

public delegate void MyDelegate(string message);

class Program
{
    static void Main()
    {
        // 使用 Lambda 表达式创建匿名函数
        MyDelegate myDelegate = (message) =>
        {
            Console.WriteLine("Anonymous Function: " + message);
        };

        myDelegate("Hello, Anonymous Function!");
    }
}

```