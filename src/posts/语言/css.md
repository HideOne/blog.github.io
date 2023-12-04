---
title: css
category:
  - 语言
date: 2023-12-4 14:16:00
headerDepth: 3
---

## 什么是
- CSS 是层叠样式表 (Cascading Style Sheets)
- CSS 描述了如何在屏幕、纸张或其他媒体上显示 HTML 元素

## 为何使用
- CSS 用于定义网页的样式，包括针对不同设备和屏幕尺寸的设计和布局。
  

## 选择器
### 种类
- 简单选择器（根据名称、id、类来选取元素）
- 组合器选择器（根据它们之间的特定关系来选取元素）
- 伪类选择器（根据特定状态选取元素）
- 伪元素选择器（选取元素的一部分并设置其样式）
- 属性选择器（根据属性或属性值来选取元素）

#### 元素选择器
- 根据元素名称来选择 HTML 元素
  
```css
/* 页面上的所有 <p> 元素都将居中对齐，并带有红色文本颜色 */
p {
  text-align: center;
  color: red;
}
```

#### id选择器
- 使用id属性来选择元素
  
```css
/* id="para1" 的 HTML 元素 */
#para1 {
  text-align: center;
  color: red;
}
```

#### 类选择器
- 用类名来选择元素

```css
/* class="center" 的 HTML 元素 */
.center {
  text-align: center;
  color: red;
}
```

#### 通用选择器
- 所有的 HTML 元素

```css
* {
  text-align: center;
  color: blue;
}
```