import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as e}from"./app-LVxgzjHO.js";const t={},c=e(`<h2 id="进程" tabindex="-1"><a class="header-anchor" href="#进程" aria-hidden="true">#</a> 进程</h2><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">using</span> <span class="token namespace">System<span class="token punctuation">.</span>Diagnostics</span><span class="token punctuation">;</span>

<span class="token class-name">Process</span> myProcess <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Process</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
myProcess<span class="token punctuation">.</span>StartInfo<span class="token punctuation">.</span>FileName <span class="token operator">=</span> <span class="token string">&quot;notepad.exe&quot;</span><span class="token punctuation">;</span>
myProcess<span class="token punctuation">.</span><span class="token function">Start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="线程" tabindex="-1"><a class="header-anchor" href="#线程" aria-hidden="true">#</a> 线程</h2><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">using</span> <span class="token namespace">System<span class="token punctuation">.</span>Threading</span><span class="token punctuation">;</span>

<span class="token class-name">Thread</span> myThread <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Thread</span><span class="token punctuation">(</span>MyThreadMethod<span class="token punctuation">)</span><span class="token punctuation">;</span>
myThread<span class="token punctuation">.</span><span class="token function">Start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">static</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">MyThreadMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">// 线程执行的代码</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="线程同步机制" tabindex="-1"><a class="header-anchor" href="#线程同步机制" aria-hidden="true">#</a> 线程同步机制</h3><h4 id="锁-locks" tabindex="-1"><a class="header-anchor" href="#锁-locks" aria-hidden="true">#</a> 锁 Locks</h4><ul><li>lock</li></ul><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">object</span></span> lockObject <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name"><span class="token keyword">object</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">lock</span> <span class="token punctuation">(</span>lockObject<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">// 临界区代码</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="信号量-semaphore" tabindex="-1"><a class="header-anchor" href="#信号量-semaphore" aria-hidden="true">#</a> 信号量 Semaphore</h4><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">using</span> <span class="token namespace">System<span class="token punctuation">.</span>Threading</span><span class="token punctuation">;</span>

<span class="token class-name">Semaphore</span> semaphore <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Semaphore</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 允许3个线程同时访问</span>

semaphore<span class="token punctuation">.</span><span class="token function">WaitOne</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 进入临界区</span>
<span class="token comment">// 临界区代码</span>
semaphore<span class="token punctuation">.</span><span class="token function">Release</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 离开临界区</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="互斥体-mutex" tabindex="-1"><a class="header-anchor" href="#互斥体-mutex" aria-hidden="true">#</a> 互斥体 Mutex</h4><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">using</span> <span class="token namespace">System<span class="token punctuation">.</span>Threading</span><span class="token punctuation">;</span>

<span class="token class-name">Mutex</span> mutex <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Mutex</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
mutex<span class="token punctuation">.</span><span class="token function">WaitOne</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 进入临界区</span>
<span class="token comment">// 临界区代码</span>
mutex<span class="token punctuation">.</span><span class="token function">ReleaseMutex</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 离开临界区</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="事件-event" tabindex="-1"><a class="header-anchor" href="#事件-event" aria-hidden="true">#</a> 事件（Event）</h4><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">using</span> <span class="token namespace">System<span class="token punctuation">.</span>Threading</span><span class="token punctuation">;</span>

<span class="token class-name">AutoResetEvent</span> autoEvent <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">AutoResetEvent</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Thread 1</span>
autoEvent<span class="token punctuation">.</span><span class="token function">WaitOne</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 阻塞线程，直到事件被设置</span>
<span class="token comment">// 执行一些操作</span>

<span class="token comment">// Thread 2</span>
<span class="token comment">// 执行一些操作</span>
autoEvent<span class="token punctuation">.</span><span class="token function">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 设置事件，释放 Thread 1</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="读写锁-readerwriterlock" tabindex="-1"><a class="header-anchor" href="#读写锁-readerwriterlock" aria-hidden="true">#</a> 读写锁（ReaderWriterLock）</h4><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">using</span> <span class="token namespace">System<span class="token punctuation">.</span>Threading</span><span class="token punctuation">;</span>

<span class="token class-name">ReaderWriterLock</span> rwLock <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">ReaderWriterLock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 读取操作</span>
rwLock<span class="token punctuation">.</span><span class="token function">AcquireReaderLock</span><span class="token punctuation">(</span>timeout<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 读取共享资源</span>
rwLock<span class="token punctuation">.</span><span class="token function">ReleaseReaderLock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 写入操作</span>
rwLock<span class="token punctuation">.</span><span class="token function">AcquireWriterLock</span><span class="token punctuation">(</span>timeout<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 写入共享资源</span>
rwLock<span class="token punctuation">.</span><span class="token function">ReleaseWriterLock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="monitor-类" tabindex="-1"><a class="header-anchor" href="#monitor-类" aria-hidden="true">#</a> Monitor 类</h4><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">using</span> <span class="token namespace">System<span class="token punctuation">.</span>Threading</span><span class="token punctuation">;</span>

<span class="token class-name"><span class="token keyword">object</span></span> lockObject <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name"><span class="token keyword">object</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

Monitor<span class="token punctuation">.</span><span class="token function">Enter</span><span class="token punctuation">(</span>lockObject<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 进入临界区</span>
<span class="token comment">// 临界区代码</span>
Monitor<span class="token punctuation">.</span><span class="token function">Exit</span><span class="token punctuation">(</span>lockObject<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 离开临界区</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="线程池" tabindex="-1"><a class="header-anchor" href="#线程池" aria-hidden="true">#</a> 线程池</h3><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">using</span> <span class="token namespace">System</span><span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token namespace">System<span class="token punctuation">.</span>Threading</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Example</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Main</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> args<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 获取线程池</span>
        <span class="token class-name">ThreadPool</span> pool <span class="token operator">=</span> ThreadPool<span class="token punctuation">.</span>CurrentThreadPool<span class="token punctuation">;</span>

        <span class="token comment">// 设置线程池的最大线程数</span>
        pool<span class="token punctuation">.</span><span class="token function">SetMaxThreads</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 创建任务</span>
        <span class="token class-name">Action</span> task <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
        <span class="token punctuation">{</span>
            <span class="token comment">// 执行任务</span>
            Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;Hello, world!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>

        <span class="token comment">// 将任务添加到线程池</span>
        pool<span class="token punctuation">.</span><span class="token function">QueueUserWorkItem</span><span class="token punctuation">(</span>task<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 等待任务完成</span>
        task<span class="token punctuation">.</span><span class="token function">Wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20),p=[c];function o(i,l){return s(),a("div",null,p)}const r=n(t,[["render",o],["__file","并发.html.vue"]]);export{r as default};
