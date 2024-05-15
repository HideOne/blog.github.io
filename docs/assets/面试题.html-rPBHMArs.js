import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as e,c as r,a as c}from"./app-zuUK87JD.js";const s={},t=c('<h2 id="一-什么是drawcall-怎么优化drawcall" tabindex="-1"><a class="header-anchor" href="#一-什么是drawcall-怎么优化drawcall" aria-hidden="true">#</a> 一.什么是drawcall 怎么优化drawcall</h2><p>drawcall是cpu向gpu发起的渲染绘制命令 每一次绘制指令都会在cpu和gpu中间传递数据和状态 因此消耗性能:</p><p>2.开启动态合批 会创建2048*2048的图 最多5张</p><p>3.减少材质切换 将使用相同材质的对象安排在一起渲染</p><p>4.使用图集 渲染时减少纹理切换次数</p><p>3d:</p><p>1.合并mesh 将多个小的网格合并成一个大网格 静态合批: BatchingUtility.batchStaticModel 动态合批: 材质中对应勾选 USE_INSTANCING</p><ol start="2"><li><p>对大量相同的物体 树 草... 采用实例化渲染技术 一次绘制多个相同物体</p></li><li><p>使用LOD(细节等级) 对远处物体可减少需要渲染的顶点和像素</p></li><li><p>遮挡剔除 对被遮挡的物体不经行渲染</p></li></ol><h2 id="二-mesh是什么-为什么合并mesh能减少drawcall" tabindex="-1"><a class="header-anchor" href="#二-mesh是什么-为什么合并mesh能减少drawcall" aria-hidden="true">#</a> 二.mesh是什么 为什么合并Mesh能减少drawcall</h2><p>mesh是什么: mesh是3维中的集合结构 由顶点 边 面组成 包含: 顶点位置 法线 uv坐标等数据</p><p>合并Mesh能减少drawcall: 如果有很多小的Mesh，每个Mesh可能需要单独设置状态并发出Drawcall 合并Mesh后，可以一次性设置状态和资源，减少了状态切换的次数 就和合并2d sprite类似</p><h2 id="三-请讲解一下在cocos-creator中如何优化内存和fps" tabindex="-1"><a class="header-anchor" href="#三-请讲解一下在cocos-creator中如何优化内存和fps" aria-hidden="true">#</a> 三.请讲解一下在Cocos Creator中如何优化内存和FPS</h2><p>1.资源管理: 按需加载资源 比如在子游戏中或者子场景中加载对应资源 在退出子游戏或 子场景时释放资源 频繁切换的可以使用延迟释放</p><p>2.纹理压缩 ETC1 和 ETC2 ETC2需要openGL3.0 部分低端手机不支持</p><p>3.使用对象池 对频繁出现的对象使用对象池 避免反复创建和销毁</p><p>减少FPS: 1.减少Drawcall 2.只渲染屏幕内可见对象 3. 优化计算的复杂度 比如物理引擎和碰撞检测 适当减少物理世界更新频率 尽量减少每帧的计算量</p><p>解决手机发烫: 1.降低cpu负载 优化游戏逻辑: 尽量避免每帧进行复杂计算和大量检测(检测可以用事件代替触发) 优化碰撞检测逻辑(如果对象比较多可以使用四叉树和八叉树) 降低物理刷新频率 2.降低gpu负载 降低drawcall</p><p>3.降低内存使用频率 安需要加载资源 不需要就释放资源 使用对象池避免重复创建 压缩纹理减少内存占用</p><ol start="4"><li>降低帧率</li></ol><h2 id="四-你在使用cocos-creator过程中遇到过什么难解决的问题-你是怎么解决的" tabindex="-1"><a class="header-anchor" href="#四-你在使用cocos-creator过程中遇到过什么难解决的问题-你是怎么解决的" aria-hidden="true">#</a> 四. 你在使用cocos creator过程中遇到过什么难解决的问题 你是怎么解决的</h2><p>1.台球物理引擎问题 碰撞穿透 和 物理表现效果 解决: 自定义台球的物理系统和碰撞检测</p><p>2.捕鱼游戏手机卡顿问题 解决: 1.降低drawcall: 通过对怪按id 合批 以及把 大量出现的特效如金币特效 合在一个p处理中 2.优化物理检测 把所有的碰撞形状都统一为矩形</p><h2 id="五-websocket和tcp的区别-以及项目如何在这两个中选用" tabindex="-1"><a class="header-anchor" href="#五-websocket和tcp的区别-以及项目如何在这两个中选用" aria-hidden="true">#</a> 五.websocket和tcp的区别 以及项目如何在这两个中选用</h2><p>websocket在tcp基础上封装的一个应用层协议 自带心跳和数据包拆分</p><p>tcp有粘包问题 websocket解决了这个问题</p><h2 id="六-如何优化cocos-creator-包体体积" tabindex="-1"><a class="header-anchor" href="#六-如何优化cocos-creator-包体体积" aria-hidden="true">#</a> 六. 如何优化Cocos Creator 包体体积</h2><p>压缩纹理 音频压缩 剔除不必要的引擎功能</p><h2 id="热更流程" tabindex="-1"><a class="header-anchor" href="#热更流程" aria-hidden="true">#</a> 热更流程</h2><h2 id="请说一下promise-async-await" tabindex="-1"><a class="header-anchor" href="#请说一下promise-async-await" aria-hidden="true">#</a> 请说一下promise async await</h2><p>Promise 是一种表示异步操作的对象。它代表了一个异步操作的最终完成或失败 async 函数用于声明一个异步函数，该函数内部可以使用 await 关键字来等待 Promise 对象的状态变化。</p>',30),p=[t];function o(h,d){return e(),r("div",null,p)}const n=a(s,[["render",o],["__file","面试题.html.vue"]]);export{n as default};
