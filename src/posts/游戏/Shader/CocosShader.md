---
title: Shader
category:
  - 游戏
date: 2024-01-05 14:16:00
headerDepth: 2
---

## Cocos Shader组成：


- CCEffect：用于声明渲染技术（Technique）、渲染过程（Pass）、渲染状态、材质参数等属性。
- CCProgram：用于声明顶点着色器（Vertex Shader）和片元着色器（Fragment Shader）代码片段。

### CCEffect
CCEffect 包裹的部分是由 YAML 语法

```yaml
CCEffect %{
  techniques:
  - name: opaque # 定义一个不透明的渲染技术
    passes:
    - vert: vs: entry # 选择一个 CCProgram 声明的顶点着色器 ‘vs’，入口函数是 ‘entry’
      frag: fs: entry # 选择一个 CCProgram 声明的片元着色器 ‘fs’，入口函数是 ‘entry’
      properties:
        mainTexture: { value: grey } # 着色器中需要同步定义一个 ‘uniform mainTexture’，该属性可在编辑器的属性检查器中进行配置
        colorScale: { value: [1, 1, 1], target: colorScaleAndCutoff.xyz } # 基于 ‘target’ 属性配置机制，着色器中需要同步定义一个 ‘uniform colorScaleAndCutoff’，并选取它的 x、y、z 分量填充 ‘colorScale’ 设置的数据
      depthStencilState: # 配置深度测试、模板测试和写入状态
        depthTest: true
        depthWrite: true
    ...
  ...
}%
```


### CCProgram
```GLSL
CCProgram shader-name %{
  <required: precision settings>
  <optional: include>  
  <optional: ubo>
  <optional: custom attribute>
  <optional: >
  vec4 entry(){
    // 需要返回一个 vec4 类型数据
  }
}%
```

## 内置变量

### cc-local.chunk
|Name | Type | Info|
|-|-|-|
|cc_matWorld | mat4 | 模型空间转世界空间矩阵|
|cc_matWorldIT | mat4 | 模型空间转世界空间逆转置矩阵|


### cc-global:
- #include <builtin/uniforms/cc-global>
  
|Name | Type | Info|
|-|-|-|
|cc_time | vec4 | x：游戏运行时间（秒）y：帧时间（秒）z：游戏运行帧数 w：未使用|
|cc_screenSize | vec4 | xy：屏幕尺寸 zw：屏幕尺寸倒数|
|cc_screenScale | vec4 | xy：屏幕缩放 zw：屏幕缩放倒数|
|cc_nativeSize | vec4 | xy：实际着色缓冲的尺寸 zw：实际着色缓冲的尺寸倒数|
|cc_matView | mat4 | 视图矩阵|
|cc_matViewInv | mat4 | 视图逆矩阵|
|cc_matProj | mat4 | 投影矩阵|
|cc_matProjInv | mat4 | 投影逆矩阵|
|cc_matViewProj | mat4 | 视图投影矩阵|
|cc_matViewProjInv | mat4 | 视图投影逆矩阵|
|cc_cameraPos | vec4 | xyz：相机位置 w：combineSignY|
|cc_exposure | vec4 | x：相机曝光 y：相机曝光倒数 z：是否启用 HDR w：HDR 转 LDR 缩放参数|
|cc_mainLitDir | vec4 | xyz：主方向光源方向 w：是否启用阴影|
|cc_mainLitColor | vec4 | xyz：主方向光颜色 w：主方向光强度|
|cc_ambientSky | vec4 | xyz：天空颜色 w：亮度|
|cc_ambientGround | vec4 | xyz：地面反射光颜色 w：环境贴图 Mipmap 等级|


### cc-environment.chunk
|Name	|Type|	Info|
|-|-|-|
|cc_environment|	samplerCube|	IBL 环境贴图|

### cc-forward-light.chunk
|Name | Type | Info|
|-|-|-|
|cc_sphereLitPos[MAX_LIGHTS] | vec4 | xyz：球面光位置|
|cc_sphereLitSizeRange[MAX_LIGHTS] | vec4 | x：球光尺寸 y：球光范围|
|cc_sphereLitColor[MAX_LIGHTS] | vec4 | xyz：球光颜色   w：球光强度|
|cc_spotLitPos[MAX_LIGHTS] | vec4 | xyz：聚光灯位置|
|cc_spotLitSizeRangeAngle[MAX_LIGHTS] | vec4 | x：聚光灯尺寸   y：聚光灯范围   z：聚光灯角度|
|cc_spotLitDir[MAX_LIGHTS] | vec4 | xyz：聚光灯方向|
|cc_spotLitColor[MAX_LIGHTS] | vec4 | xyz：聚光灯颜色 w：聚光灯强度|

### cc-shadow.chunk
|Name | Type | Info|
|-|-|-|
|cc_matLightPlaneProj | mat4 | 平面阴影的变换矩阵|
|cc_shadowColor | vec4 | 阴影颜色|

## 注意事项
- 在 Cocos Creator 中规定 shader 的所有非 sampler 的 uniform 都应该以 block 形式声明

```GLSL
// 普通 uniform 声明
uniform float dissolveThreshold;

// UBO 形式声明
uniform Dissolve{
    float dissolveThreshold;
};
```


## shader 资源
[2d消融shader](./shaderEffect/dissolve2d.effect)