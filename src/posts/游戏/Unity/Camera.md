---
title: Camera
category:
  - Unity
date: 2024-01-24 15:11:48
headerDepth: 2
---

## clear Flag

### 多相机叠加渲染使用注意
- 最底层渲染的相机选择solid color（清除颜色和深度缓冲） 其余相机设置未不清楚缓冲 或清除深度缓冲
- 如果上面层的摄像机设置为solid color 会导致下面层的渲染会被清除掉
