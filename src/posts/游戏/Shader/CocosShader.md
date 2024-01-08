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