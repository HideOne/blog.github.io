---
title: unityShader
category:
  - 游戏
date: 2024-03-01 11:18:24
headerDepth: 2
---

## 渲染介绍

### ui shader 支持 UGUI 的 Mask 功能
添加一下代码 
``` GLSL
Shader "xxxxxx"
{
Properties
{
......

//MASK SUPPORT ADD
_StencilComp ("Stencil Comparison", Float) = 8
_Stencil ("Stencil ID", Float) = 0
_StencilOp ("Stencil Operation", Float) = 0
_StencilWriteMask ("Stencil Write Mask", Float) = 255
_StencilReadMask ("Stencil Read Mask", Float) = 255
_ColorMask ("Color Mask", Float) = 15
//MASK SUPPORT END

}

SubShader
{
Tags {...}

//MASK SUPPORT ADD
Stencil
{
    Ref [_Stencil]
    Comp [_StencilComp]
    Pass [_StencilOp] 
    ReadMask [_StencilReadMask]
    WriteMask [_StencilWriteMask]
}
ColorMask [_ColorMask]
//MASK SUPPORT END

......
}
}
```

### 顶点处理 vert

### 光栅化
将面转化为像素
![alt text](res/image-6.png)


### 像素处理 frag
![alt text](res/image-7.png)

### 渲染管线四步骤
![alt text](res/image-8.png) 


## 开发工具 

- FX Composer
- Render Monkey
- MonoDevelop
- vs

## 框架
![alt text](res/image-15.png)
  
## Properties 属性
![alt text](res/image-9.png)
![ ](res/image-10.png)

- Color
- Range
- 2D
- Rect
- Cube
- Float
- Vector 
![alt text](res/image-12.png)

![alt text](res/image-11.png)

![alt text](res/image-13.png)


## SubShader
- shader的代码实现
- 必须至少有一个subshader

### pass (通道)
SubShader下必须有pass
可以包含多个pass
每个pass都会运行



###  多个SubShader
- 多个SubShader下 会按顺序执行其中能执行的一个 有且仅有一个

### FallBack
![alt text](res/image-14.png)

### Tags
#### Queue 渲染顺序
![alt text](res/image-16.png)
- Background 第一个渲染
- Geometry 几何体 第二个渲染
- Transparent 第三个渲染
- Overlay 第四个渲染

![alt text](res/image-17.png)
#### 用法
![alt text](res/image-18.png)

### renderState
![alt text](res/image-19.png)
![alt text](res/image-23.png)
![alt text](res/image-20.png)


#### Blend 混合
One 值为1 让源或目标颜色完全通过
Zero 删除源或目标颜色
SrcColor 乘以源颜色的值
SrcAlpha 乘以源颜色的alpha值
DstColor 乘以帧缓冲区源颜色的值
  
![alt text](res/image-21.png)
![alt text](res/image-22.png)