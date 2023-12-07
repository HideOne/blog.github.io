---
title: html
category:
  - 语言
date: 2023-12-1 14:16:00
---

## 是什么
- 超文本标记语言（英语：HyperText Markup Language，简称：HTML）是一种用于创建网页的标准标记语言。

## 为什么
- 编写网页


## 首例子
```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>菜鸟教程(runoob.com)</title>
</head>
<body>
    <h1>我的第一个标题</h1>
    <p>我的第一个段落。</p>
</body>
</html>
```

## 标签

|标签 | 描述|
|:-:|-|
|基础 | - |
|\<!DOCTYPE\>  | 定义文档类型。|
|\<html\> | 定义一个 HTML 文档|
|\<title\> | 为文档定义一个标题|
|\<body\> | 定义文档的主体|
|\<h1\> to \<h6\> | 定义 HTML 标题|
|\<p\> | 定义一个段落|
|\<br\> | 定义简单的折行。|
|\<hr\> | 定义水平线。|
|\<!--...--\> | 定义一个注释|
|格式 |  |
|\<acronym\> | HTML5不再支持。 定义只取首字母的缩写。|
|\<abbr\> | 定义一个缩写。|
|\<address\> | 定义文档作者或拥有者的联系信息。|
|\<b\> | 定义粗体文本。|
|\<bdi\> | 允许您设置一段文本，使其脱离其父元素的文本方向设置。|
|\<bdo\> | 定义文本的方向。|
|\<big\> | HTML5不再支持。 定义大号文本。|
|\<blockquote\> | 定义块引用。|
|\<center\> | HTML5不再支持。 HTML 4.01 已废弃。定义居中文本。|
|\<cite\> | 定义引用(citation)。|
|\<code\> | 定义计算机代码文本。|
|\<del\> | 定义被删除文本。|
|\<dfn\> | 定义定义项目。|
|\<em\> | 定义强调文本。 |
|\<font\> | HTML5不再支持。 HTML 4.01 已废弃。 定义文本的字体、尺寸和颜色|
|\<i\> | 定义斜体文本。|
|\<ins\> | 定义被插入文本。|
|\<kbd\> | 定义键盘文本。|
|\<mark\> | 定义带有记号的文本。|
|\<meter\> | 定义度量衡。仅用于已知最大和最小值的度量。|
|\<pre\> | 定义预格式文本|
|\<progress\> | 定义运行中的任务进度（进程）。|
|\<q\> | 定义短的引用。|
|\<rp\> | 定义不支持 ruby 元素的浏览器所显示的内容。|
|\<rt\> | 定义字符（中文注音或字符）的解释或发音。|
|\<ruby\> | 定义 ruby 注释（中文注音或字符）。|
|\<s\> | 定义加删除线的文本。|
|\<samp\> | 定义计算机代码样本。|
|\<small\> | 定义小号文本。|
|\<strike\> | HTML5不再支持。 HTML 4.01 已废弃。 定义加删除线的文本。|
|\<strong\> | 定义语气更为强烈的强调文本。|
|\<sub\> | 定义下标文本。|
|\<sup\> | 定义上标文本。|
|\<time\> | 定义一个日期/时间|
|\<tt\> | HTML5不再支持。 定义打字机文本。|
|\<u\> | 定义下划线文本。|
|\<var\> | 定义文本的变量部分。|
|\<wbr\> | 规定在文本中的何处适合添加换行符。|
|表单 |  |
|\<form\> | 定义一个 HTML 表单，用于用户输入。|
|\<input\> | 定义一个输入控件|
|\<textarea\> | 定义多行的文本输入控件。|
|\<button\> | 定义按钮。|
|\<select\> | 定义选择列表（下拉列表）。|
|\<optgroup\> | 定义选择列表中相关选项的组合。|
|\<option\> | 定义选择列表中的选项。|
|\<label\> | 定义 input 元素的标注。|
|\<fieldset\> | 定义围绕表单中元素的边框。|
|\<legend\> | 定义 fieldset 元素的标题。|
|\<datalist\> | 规定了 input 元素可能的选项列表。|
|\<keygen\> | 规定用于表单的密钥对生成器字段。|
|\<output\> | 定义一个计算的结果|
|框架 | - |
|\<frame\> | HTML5不再支持。 定义框架集的窗口或框架。|
|\<frameset\> | HTML5不再支持。定义框架集。|
|\<noframes\> | HTML5不再支持。 定义针对不支持框架的用户的替代内容。|
|\<iframe\> | 定义内联框架。|
|图像 | - |
|\<img\> | 定义图像。|
|\<map\> | 定义图像映射。|
|\<area\> | 定义图像地图内部的区域。|
|\<canvas\> | 通过脚本（通常是 JavaScript）来绘制图形（比如图表和其他图像）。|
|\<figcaption\> | 定义一个 caption for a \<figure\> element|
|\<figure\> | figure 标签用于对元素进行组合。|
|Audio/Video |  |
|\<audio\> | 定义声音，比如音乐或其他音频流。|
|\<source\> | 定义media元素 (\<video\> 和 \<audio\>)的媒体资源。media|
|\<track\> | 为媒体(\<video\> 和 \<audio\>)元素定义外部文本轨道。|
|\<video\> | 定义一个音频或者视频|
|链接 | - |
|\<a\> | 定义一个链接|
|\<link\> | 定义文档与外部资源的关系。|
|\<main\> | 定义文档的主体部分。|
|\<nav\> | 定义导航链接|
|列表 | - |
|\<ul\> | 定义一个无序列表|
|\<ol\> | 定义一个有序列表|
|\<li\> | 定义一个列表项|
|\<dir\> | HTML5不再支持。 HTML 4.01 已废弃。 定义目录列表。|
|\<dl\> | 定义一个定义列表|
|\<dt\> | 定义一个定义定义列表中的项目。|
|\<dd\> | 定义定义列表中项目的描述。|
|\<menu\> | 定义菜单列表。|
|\<command\> | 定义用户可能调用的命令（比如单选按钮、复选框或按钮）。|
|表格 | - |
|\<table\> | 定义一个表格|
|\<caption\> | 定义表格标题。|
|\<th\> | 定义表格中的表头单元格。|
|\<tr\> | 定义表格中的行。|
|\<td\> | 定义表格中的单元。|
|\<thead\> | 定义表格中的表头内容。|
|\<tbody\> | 定义表格中的主体内容。|
|\<tfoot\> | 定义表格中的表注内容（脚注）。|
|\<col\> | 定义表格中一个或多个列的属性值。|
|\<colgroup\> | 定义表格中供格式化的列组。|
|样式/节 | - |
|\<style\> | 定义文档的样式信息。|
|\<div\> | 定义文档中的节。|
|\<span\> | 定义文档中的节。|
|\<header\> | 定义一个文档头部部分|
|\<footer\> | 定义一个文档底部|
|\<section\> | 定义了文档的某个区域|
|\<article\> | 定义一个文章内容|
|\<aside\> | 定义其所处内容之外的内容。|
|\<details\> | 定义了用户可见的或者隐藏的需求的补充细节。|
|\<dialog\> | 定义一个对话框或者窗口|
|\<summary\> | 定义一个可见的标题。 当用户点击标题时会显示出详细信息。|
|元信息 |-  |
|\<head\> | 定义关于文档的信息|
|\<meta\> | 定义关于 HTML 文档的元信息。|
|\<base\> | 定义页面中所有链接的默认地址或默认目标。|
|\<basefont\> | HTML5不再支持。 HTML 4.01 已废弃。 定义页面中文本的默认字体、颜色或尺寸。|
|程序 | - |
|\<script\> | 定义客户端脚本。|
|\<noscript\> | 定义针对不支持客户端脚本的用户的替代内容。|
|\<applet\> | HTML5不再支持。 HTML 4.01 已废弃。 定义嵌入的 applet。|
|\<embed\> | 定义了一个容器，用来嵌入外部应用或者互动程序（插件）。|
|\<object\> | 定义嵌入的对象。|
|\<param\> | 定义对象的参数。|

### 表格
```html
<table>
  <thead>
    <tr>
      <th>列标题1</th>
      <th>列标题2</th>
      <th>列标题3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>行1，列1</td>
      <td>行1，列2</td>
      <td>行1，列3</td>
    </tr>
    <tr>
      <td>行2，列1</td>
      <td>行2，列2</td>
      <td>行2，列3</td>
    </tr>
  </tbody>
</table>
```


### 列表
#### 无序列表
```html
<ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>
```
#### 有序列表
```html
<ol start="50">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>
```

### Canvas
#### 什么是 canvas
- 图形绘制  通过脚本 (通常是JavaScript)来完成
#### 简单使用
- canvas 的左上角坐标为 (0,0)
```js
var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
ctx.moveTo(0,0);
ctx.lineTo(200,100);
ctx.stroke();

// 绘制文本
var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
ctx.font="30px Arial";
ctx.fillText("Hello World",10,50);

// 绘制图片
var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
var img=document.getElementById("scream");
ctx.drawImage(img,10,10);
```


### SVG
- SVG 定义为可缩放矢量图形
#### 使用
```html
<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
   <circle cx="100" cy="50" r="50" stroke="black" stroke-width="2" fill="yellow"/>
</svg>

```
<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
   <circle cx="100" cy="50" r="50" stroke="black" stroke-width="2" fill="yellow"/>
</svg>


### canvas 与 SVG 比较
#### canvas
- 依赖分辨率
- 不支持事件处理器
- 弱的文本渲染能力
- 能够以 .png 或 .jpg 格式保存结果图像
- 最适合图像密集型的游戏，其中的许多对象会被频繁重绘

#### 	SVG
- 不依赖分辨率
- 支持事件处理器
- 最适合带有大型渲染区域的应用程序（比如谷歌地图）
- 复杂度高会减慢渲染速度（任何过度使用 DOM 的应用都不快）
- 不适合游戏应用

### Video
#### 支持格式
|浏览器 | MP4 | WebM | Ogg|
|--- | --- | --- | ---|
|Internet Explorer | YES | NO | NO|
|Chrome | YES | YES | YES|
|Firefox | YES | YES | YES|
|Safari | YES | NO | NO|
|Opera | YES (从 Opera 25 起) | YES | YES|
```html
<video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
</video>
```

### Audio
```html
<audio controls>
  <source src="horse.ogg" type="audio/ogg">
  <source src="horse.mp3" type="audio/mpeg">
</audio>
```

#### 支持格式
|浏览器 | MP3 | Wav | Ogg|
|-|-|-|-|
|Internet Explorer 9+ | YES | NO | NO|
|Chrome 6+ | YES | YES | YES|
|Firefox 3.6+ | YES | YES | YES|
|Safari 5+ | YES | YES | NO|
|Opera 10+ | YES | YES | YES| 


### Input
#### 输入类型
- color
- date
- datetime
- datetime-local
- email
- month
- number
- range
- search
- tel
- time
- url
- week

#### 例子
```html
<input type="color" name="favcolor">
<br>
<input type="date" name="favcolor">
```
<input type="color" name="favcolor">
<br>
<input type="date" name="favcolor">



## 地理位置
- 需要用户同意，否则用户位置信息不可用
```js
var x=document.getElementById("demo");
function getLocation()
{
    if (navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else
    {
        x.innerHTML="该浏览器不支持获取地理位置。";
    }
}
 
function showPosition(position)
{
    x.innerHTML="纬度: " + position.coords.latitude + 
    "<br>经度: " + position.coords.longitude;    
}
```


## 存储
### localStorage
- 用于长久保存数据，保存的数据没有时效，直到手动去除。

#### 检查是否支持
```js
if(typeof(Storage)!=="undefined")
{
    // 是的! 支持 localStorage  sessionStorage 对象!
    // 一些代码.....
} else {
    // 抱歉! 不支持 web 存储。
}
```

####  使用
```js
// 存储
localStorage.setItem("sitename", "菜鸟教程");
// 查找
document.getElementById("result").innerHTML = "网站名：" +  localStorage.getItem("sitename");

// 写法2.
// 存储
localStorage.sitename = "菜鸟教程";
// 查找
document.getElementById("result").innerHTML = localStorage.sitename;
```

#### sessionStorage
- 临时保存数据 关闭浏览器窗口数据会被清除掉
  
```js
if (sessionStorage.clickcount)
{
    sessionStorage.clickcount=Number(sessionStorage.clickcount)+1;
}
else
{
    sessionStorage.clickcount=1;
}
document.getElementById("result").innerHTML="在这个会话中你已经点击了该按钮 " + sessionStorage.clickcount + " 次 ";
```


## WebSocket 
### 连接状态
- 0 - 表示连接尚未建立。
- 1 - 表示连接已建立，可以进行通信。
- 2 - 表示连接正在进行关闭。
- 3 - 表示连接已经关闭或者连接不能打开。


### 事件
|事件 | 回调函数 | 描述|
|-|-|-|
|open | Socket.onopen | 连接建立时触发|
|message | Socket.onmessage | 客户端接收服务端数据时触发|
|error | Socket.onerror | 通信发生错误时触发|
|close | Socket.onclose | 连接关闭时触发|

### 方法
|方法 | 描述|
|-|-|
|Socket.send() | 使用连接发送数据|
|Socket.close() | 关闭连接|


## URL编码
|ASCII 字符 | 描述 | URL-编码|
|:-:|-|-|
|NUL | null character | %00|
|SOH | start of header | %01|
|STX | start of text | %02|
|ETX | end of text | %03|
|EOT | end of transmission | %04|
|ENQ | enquiry | %05|
|ACK | acknowledge | %06|
|BEL | bell (ring) | %07|
|BS | backspace | %08|
|HT | horizontal tab | %09|
|LF | line feed | %0A|
|VT | vertical tab | %0B|
|FF | form feed | %0C|
|CR | carriage return | %0D|
|SO | shift out | %0E|
|SI | shift in | %0F|
|DLE | data link escape | %10|
|DC1 | device control 1 | %11|
|DC2 | device control 2 | %12|
|DC3 | device control 3 | %13|
|DC4 | device control 4 | %14|
|NAK | negative acknowledge | %15|
|SYN | synchronize | %16|
|ETB | end transmission block | %17|
|CAN | cancel | %18|
|EM | end of medium | %19|
|SUB | substitute | %1A|
|ESC | escape | %1B|
|FS | file separator | %1C|
|GS | group separator | %1D|
|RS | record separator | %1E|
|US | unit separator | %1F|
