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
| 开始标签                      | 元素内容         | 
| ----------------------------- | ---------------- | 
| \<p\>                           | 这是一个段落     |
| \<a href="default.htm"\>        | 这是一个链接     | 
| \<br\>                          | 换行             |
| \<img\>                          | 图片             |
|         \<table\>                   |        表格      |
|            \<ul\>               |       列表       |
|             \<div\> 和\<span\>              |      区块        |
|\<canvas\> | 标签定义图形，比如图表和其他图像。该标签基于 JavaScript 的绘图 API|
|\<audio\> | 定义音频内容|
|\<video\> | 定义视频（video 或者 movie）|
|\<source\> | 定义多媒体资源 \<video\> 和 \<audio\>|
|\<embed\> | 定义嵌入的内容，比如插件。|
|\<track\> | 为诸如 \<video\> 和 \<audio\> 元素之类的媒介规定外部文本轨道。|
|\<datalist\> | 定义选项列表。请与 input 元素配合使用该元素，来定义 input 可能的值。|
|\<keygen\> | 规定用于表单的密钥对生成器字段。|
|\<output\> | 定义不同类型的输出，比如脚本的输出。|
|\<article\> | 定义页面独立的内容区域。|
|\<aside\> | 定义页面的侧边栏内容。|
|\<bdi\> | 允许您设置一段文本，使其脱离其父元素的文本方向设置。|
|\<command\> | 定义命令按钮，比如单选按钮、复选框或按钮|
|\<details\> | 用于描述文档或文档某个部分的细节|
|\<dialog\> | 定义对话框，比如提示框|
|\<summary\> | 标签包含 details 元素的标题|
|\<figure\> | 规定独立的流内容（图像、图表、照片、代码等等）。|
|\<figcaption\> | 定义 \<figure\> 元素的标题|
|\<footer\> | 定义 section 或 document 的页脚。|
|\<header\> | 定义了文档的头部区域|
|\<mark\> | 定义带有记号的文本。|
|\<meter\> | 定义度量衡。仅用于已知最大和最小值的度量。|
|\<nav\> | 定义导航链接的部分。|
|\<progress\> | 定义任何类型的任务的进度。|
|\<ruby\> | 定义 ruby 注释（中文注音或字符）。|
|\<rt\> | 定义字符（中文注音或字符）的解释或发音。|
|\<rp\> | 在 ruby 注释中使用，定义不支持 ruby 元素的浏览器所显示的内容。|
|\<section\> | 定义文档中的节（section、区段）。|
|\<time\> | 定义日期或时间。|
|\<wbr\> | 规定在文本中的何处适合添加换行符。|

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