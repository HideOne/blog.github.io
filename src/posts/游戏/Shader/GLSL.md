---
title: GLSL
category:
  - 游戏
date: 2024-01-09 14:16:00
headerDepth: 2
---

## 变量类型
|数据类型 | 描述|
|-|-|
|void | 跟C语言的void类似，表示空类型。作为函数的返回类型，表示这个函数不返回值。|
|bool | 布尔类型，可以是true 和false，以及可以产生布尔型的表达式。|
|int | 整型 代表至少包含16位的有符号的整数。可以是十进制的，十六进制的，八进制的。|
|float | 浮点型|
|bvec2 | 包含2个布尔成分的向量|
|bvec3 | 包含3个布尔成分的向量|
|bvec4 | 包含4个布尔成分的向量|
|ivec2 | 包含2个整型成分的向量|
|ivec3 | 包含3个整型成分的向量|
|ivec4 | 包含4个整型成分的向量|
|mat2 或者 mat2x2 | 2×2的浮点数矩阵类型|
|mat3或者mat3x3 | 3×3的浮点数矩阵类型|
|mat4x4 | 4×4的浮点矩阵|
|mat2x3 | 2列3行的浮点矩阵（OpenGL的矩阵是列主顺序的）|
|mat2x4 | 2列4行的浮点矩阵|
|mat3x2 | 3列2行的浮点矩阵|
|mat3x4 | 3列4行的浮点矩阵|
|mat4x2 | 4列2行的浮点矩阵|
|mat4x3 | 4列3行的浮点矩阵|
|sampler1D | 用于内建的纹理函数中引用指定的1D纹理的句柄。只可以作为一致变量或者函数参数使用|
|sampler2D | 二维纹理句柄|
|sampler3D | 三维纹理句柄|
|samplerCube | cube map纹理句柄|
|sampler1DShadow | 一维深度纹理句柄|
|sampler2DShadow | 二维深度纹理句柄|


## 顶点着色器内置变量
|名称 | 类型 | 描述|
|-|-|-|
|gl_Color | vec4 | 输入属性-表示顶点的主颜色|
|gl_SecondaryColor | vec4 | 输入属性-表示顶点的辅助颜色|
|gl_Normal | vec3 | 输入属性-表示顶点的法线值|
|gl_Vertex | vec4 | 输入属性-表示物体空间的顶点位置|
|gl_MultiTexCoordn | vec4 | 输入属性-表示顶点的第n个纹理的坐标|
|gl_FogCoord | float | 输入属性-表示顶点的雾坐标|
|gl_Position | vec4 | 输出属性-变换后的顶点的位置，用于后面的固定的裁剪等操作。所有的顶点着色器都必须写这个值。|
|gl_ClipVertex | vec4 | 输出坐标，用于用户裁剪平面的裁剪|
|gl_PointSize | float | 点的大小|
|gl_FrontColor | vec4 | 正面的主颜色的varying输出|
|gl_BackColor | vec4 | 背面主颜色的varying输出|
|gl_FrontSecondaryColor | vec4 | 正面的辅助颜色的varying输出|
|gl_BackSecondaryColor | vec4 | 背面的辅助颜色的varying输出|
|gl_TexCoord[] | vec4 | 纹理坐标的数组varying输出|
|gl_FogFragCoord | float | 雾坐标的varying输出|

## 片段着色器内置变量
|名称 | 类型 | 描述|
|-|-|-|
|gl_Color | vec4 | 包含主颜色的插值只读输入|
|gl_SecondaryColor | vec4 | 包含辅助颜色的插值只读输入|
|gl_TexCoord[] | vec4 | 包含纹理坐标数组的插值只读输入|
|gl_FogFragCoord | float | 包含雾坐标的插值只读输入|
|gl_FragCoord | vec4 | 只读输入，窗口的x,y,z和1/w|
|gl_FrontFacing | bool | 只读输入，如果是窗口正面图元的一部分，则这个值为true|
|gl_PointCoord | vec2 | 点精灵的二维空间坐标范围在(0.0, 0.0)到(1.0, 1.0)之间，仅用于点图元和点精灵开启的情况下。|
|gl_FragData[] | vec4 | 使用glDrawBuffers输出的数据数组。不能与gl_FragColor结合使用。|
|gl_FragColor | vec4 | 输出的颜色用于随后的像素操作|
|gl_FragDepth | float | 输出的深度用于随后的像素操作，如果这个值没有被写，则使用固定功能管线的深度值代替|

## 变量修饰符
|修饰符 | 描述|
|-|-|
|const | 常量值必须在声明时初始化。它是只读的不可修改的。|
|attribute | 表示只读的顶点数据，只用在顶点着色器中。数据来自当前的顶点状态或者顶点数组。它必须是全局范围声明的，不能在函数内部。一个attribute可以是浮点数类型的标量，向量，或者矩阵。不可以是数组或者结构体|
|uniform | 一致变量。在着色器执行期间一致变量的值是不变的。与const常量不同的是，这个值在编译时期是未知的是由着色器外部初始化的。一致变量在顶点着色器和片段着色器之间是共享的。它也只能在全局范围进行声明。|
|varying | 顶点着色器的输出。例如颜色或者纹理坐标，（插值后的数据）作为片段着色器的只读输入数据。必须是全局范围声明的全局变量。可以是浮点数类型的标量，向量，矩阵。不能是数组或者结构体。|
|centorid varying | 在没有多重采样的情况下，与varying是一样的意思。在多重采样时，centorid varying在光栅化的图形内部进行求值而不是在片段中心的固定位置求值。|
|invariant | (不变量)用于表示顶点着色器的输出和任何匹配片段着色器的输入，在不同的着色器中计算产生的值必须是一致的。所有的数据流和控制流，写入一个invariant变量的是一致的。编译器为了保证结果是完全一致的，需要放弃那些可能会导致不一致值的潜在的优化。除非必要，不要使用这个修饰符。在多通道渲染中避免z-fighting可能会使用到。|
|in | 用在函数的参数中，表示这个参数是输入的，在函数中改变这个值，并不会影响对调用的函数产生副作用。（相当于C语言的传值），这个是函数参数默认的修饰符|
|out | 用在函数的参数中，表示该参数是输出参数，值是会改变的。|
|inout | 用在函数的参数，表示这个参数即是输入参数也是输出参数。|

