---
title: unityShader
category:
  - 游戏
date: 2024-03-01 11:18:24
headerDepth: 2
---

## ui shader 支持 UGUI 的 Mask 功能
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

```