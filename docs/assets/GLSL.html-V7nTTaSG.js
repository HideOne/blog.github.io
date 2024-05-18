import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as d,c as e,a as r}from"./app-vVBRcJiJ.js";const a={},n=r('<h2 id="变量类型" tabindex="-1"><a class="header-anchor" href="#变量类型" aria-hidden="true">#</a> 变量类型</h2><table><thead><tr><th>数据类型</th><th>描述</th></tr></thead><tbody><tr><td>void</td><td>跟C语言的void类似，表示空类型。作为函数的返回类型，表示这个函数不返回值。</td></tr><tr><td>bool</td><td>布尔类型，可以是true 和false，以及可以产生布尔型的表达式。</td></tr><tr><td>int</td><td>整型 代表至少包含16位的有符号的整数。可以是十进制的，十六进制的，八进制的。</td></tr><tr><td>float</td><td>浮点型</td></tr><tr><td>bvec2</td><td>包含2个布尔成分的向量</td></tr><tr><td>bvec3</td><td>包含3个布尔成分的向量</td></tr><tr><td>bvec4</td><td>包含4个布尔成分的向量</td></tr><tr><td>ivec2</td><td>包含2个整型成分的向量</td></tr><tr><td>ivec3</td><td>包含3个整型成分的向量</td></tr><tr><td>ivec4</td><td>包含4个整型成分的向量</td></tr><tr><td>mat2 或者 mat2x2</td><td>2×2的浮点数矩阵类型</td></tr><tr><td>mat3或者mat3x3</td><td>3×3的浮点数矩阵类型</td></tr><tr><td>mat4x4</td><td>4×4的浮点矩阵</td></tr><tr><td>mat2x3</td><td>2列3行的浮点矩阵（OpenGL的矩阵是列主顺序的）</td></tr><tr><td>mat2x4</td><td>2列4行的浮点矩阵</td></tr><tr><td>mat3x2</td><td>3列2行的浮点矩阵</td></tr><tr><td>mat3x4</td><td>3列4行的浮点矩阵</td></tr><tr><td>mat4x2</td><td>4列2行的浮点矩阵</td></tr><tr><td>mat4x3</td><td>4列3行的浮点矩阵</td></tr><tr><td>sampler1D</td><td>用于内建的纹理函数中引用指定的1D纹理的句柄。只可以作为一致变量或者函数参数使用</td></tr><tr><td>sampler2D</td><td>二维纹理句柄</td></tr><tr><td>sampler3D</td><td>三维纹理句柄</td></tr><tr><td>samplerCube</td><td>cube map纹理句柄</td></tr><tr><td>sampler1DShadow</td><td>一维深度纹理句柄</td></tr><tr><td>sampler2DShadow</td><td>二维深度纹理句柄</td></tr></tbody></table><h2 id="顶点着色器内置变量" tabindex="-1"><a class="header-anchor" href="#顶点着色器内置变量" aria-hidden="true">#</a> 顶点着色器内置变量</h2><table><thead><tr><th>名称</th><th>类型</th><th>描述</th></tr></thead><tbody><tr><td>gl_Color</td><td>vec4</td><td>输入属性-表示顶点的主颜色</td></tr><tr><td>gl_SecondaryColor</td><td>vec4</td><td>输入属性-表示顶点的辅助颜色</td></tr><tr><td>gl_Normal</td><td>vec3</td><td>输入属性-表示顶点的法线值</td></tr><tr><td>gl_Vertex</td><td>vec4</td><td>输入属性-表示物体空间的顶点位置</td></tr><tr><td>gl_MultiTexCoordn</td><td>vec4</td><td>输入属性-表示顶点的第n个纹理的坐标</td></tr><tr><td>gl_FogCoord</td><td>float</td><td>输入属性-表示顶点的雾坐标</td></tr><tr><td>gl_Position</td><td>vec4</td><td>输出属性-变换后的顶点的位置，用于后面的固定的裁剪等操作。所有的顶点着色器都必须写这个值。</td></tr><tr><td>gl_ClipVertex</td><td>vec4</td><td>输出坐标，用于用户裁剪平面的裁剪</td></tr><tr><td>gl_PointSize</td><td>float</td><td>点的大小</td></tr><tr><td>gl_FrontColor</td><td>vec4</td><td>正面的主颜色的varying输出</td></tr><tr><td>gl_BackColor</td><td>vec4</td><td>背面主颜色的varying输出</td></tr><tr><td>gl_FrontSecondaryColor</td><td>vec4</td><td>正面的辅助颜色的varying输出</td></tr><tr><td>gl_BackSecondaryColor</td><td>vec4</td><td>背面的辅助颜色的varying输出</td></tr><tr><td>gl_TexCoord[]</td><td>vec4</td><td>纹理坐标的数组varying输出</td></tr><tr><td>gl_FogFragCoord</td><td>float</td><td>雾坐标的varying输出</td></tr></tbody></table><h2 id="片段着色器内置变量" tabindex="-1"><a class="header-anchor" href="#片段着色器内置变量" aria-hidden="true">#</a> 片段着色器内置变量</h2><table><thead><tr><th>名称</th><th>类型</th><th>描述</th></tr></thead><tbody><tr><td>gl_Color</td><td>vec4</td><td>包含主颜色的插值只读输入</td></tr><tr><td>gl_SecondaryColor</td><td>vec4</td><td>包含辅助颜色的插值只读输入</td></tr><tr><td>gl_TexCoord[]</td><td>vec4</td><td>包含纹理坐标数组的插值只读输入</td></tr><tr><td>gl_FogFragCoord</td><td>float</td><td>包含雾坐标的插值只读输入</td></tr><tr><td>gl_FragCoord</td><td>vec4</td><td>只读输入，窗口的x,y,z和1/w</td></tr><tr><td>gl_FrontFacing</td><td>bool</td><td>只读输入，如果是窗口正面图元的一部分，则这个值为true</td></tr><tr><td>gl_PointCoord</td><td>vec2</td><td>点精灵的二维空间坐标范围在(0.0, 0.0)到(1.0, 1.0)之间，仅用于点图元和点精灵开启的情况下。</td></tr><tr><td>gl_FragData[]</td><td>vec4</td><td>使用glDrawBuffers输出的数据数组。不能与gl_FragColor结合使用。</td></tr><tr><td>gl_FragColor</td><td>vec4</td><td>输出的颜色用于随后的像素操作</td></tr><tr><td>gl_FragDepth</td><td>float</td><td>输出的深度用于随后的像素操作，如果这个值没有被写，则使用固定功能管线的深度值代替</td></tr></tbody></table><h2 id="变量修饰符" tabindex="-1"><a class="header-anchor" href="#变量修饰符" aria-hidden="true">#</a> 变量修饰符</h2><table><thead><tr><th>修饰符</th><th>描述</th></tr></thead><tbody><tr><td>const</td><td>常量值必须在声明时初始化。它是只读的不可修改的。</td></tr><tr><td>attribute</td><td>表示只读的顶点数据，只用在顶点着色器中。数据来自当前的顶点状态或者顶点数组。它必须是全局范围声明的，不能在函数内部。一个attribute可以是浮点数类型的标量，向量，或者矩阵。不可以是数组或者结构体</td></tr><tr><td>uniform</td><td>一致变量。在着色器执行期间一致变量的值是不变的。与const常量不同的是，这个值在编译时期是未知的是由着色器外部初始化的。一致变量在顶点着色器和片段着色器之间是共享的。它也只能在全局范围进行声明。</td></tr><tr><td>varying</td><td>顶点着色器的输出。例如颜色或者纹理坐标，（插值后的数据）作为片段着色器的只读输入数据。必须是全局范围声明的全局变量。可以是浮点数类型的标量，向量，矩阵。不能是数组或者结构体。</td></tr><tr><td>centorid varying</td><td>在没有多重采样的情况下，与varying是一样的意思。在多重采样时，centorid varying在光栅化的图形内部进行求值而不是在片段中心的固定位置求值。</td></tr><tr><td>invariant</td><td>(不变量)用于表示顶点着色器的输出和任何匹配片段着色器的输入，在不同的着色器中计算产生的值必须是一致的。所有的数据流和控制流，写入一个invariant变量的是一致的。编译器为了保证结果是完全一致的，需要放弃那些可能会导致不一致值的潜在的优化。除非必要，不要使用这个修饰符。在多通道渲染中避免z-fighting可能会使用到。</td></tr><tr><td>in</td><td>用在函数的参数中，表示这个参数是输入的，在函数中改变这个值，并不会影响对调用的函数产生副作用。（相当于C语言的传值），这个是函数参数默认的修饰符</td></tr><tr><td>out</td><td>用在函数的参数中，表示该参数是输出参数，值是会改变的。</td></tr><tr><td>inout</td><td>用在函数的参数，表示这个参数即是输入参数也是输出参数。</td></tr></tbody></table><h2 id="内置函数" tabindex="-1"><a class="header-anchor" href="#内置函数" aria-hidden="true">#</a> 内置函数</h2><h3 id="三角函数" tabindex="-1"><a class="header-anchor" href="#三角函数" aria-hidden="true">#</a> 三角函数</h3><table><thead><tr><th>语法</th><th>说明</th></tr></thead><tbody><tr><td>genType radians (genType degrees)</td><td>角度转弧度（degrees to radians）</td></tr><tr><td>genType degrees (genType radians)</td><td>弧度转角度（radians to degrees）</td></tr><tr><td>genType sin (genType angle)</td><td>三角函数-正弦sine</td></tr><tr><td>genType cos (genType angle)</td><td>三角函数-余弦cosine</td></tr><tr><td>genType tan (genType angle)</td><td>三角函数-正切tangent</td></tr><tr><td>genType asin (genType x)</td><td>反三角函数-反正弦arc sine</td></tr><tr><td>genType atan (genType y, genType x)</td><td>反三角函数-反余弦arc cosine</td></tr><tr><td>genType atan (genType y_over_x)</td><td>反三角函数-反正切arc tangent</td></tr></tbody></table><h3 id="指数函数" tabindex="-1"><a class="header-anchor" href="#指数函数" aria-hidden="true">#</a> 指数函数</h3><table><thead><tr><th>语法</th><th>说明</th></tr></thead><tbody><tr><td>genType pow (genType x, genType y)</td><td>x的y次方，(x^y)。如果x&lt; 0，则结果是undefined；如果x=0并且y&lt; =0，则结果是undefined</td></tr><tr><td>genType exp (genType x)</td><td>x的自然指数，(e^x)</td></tr><tr><td>genType log (genType x)</td><td>x的自然对数，(\\log_ex)，即(\\ln{x})x&lt; =0时结果是undefined</td></tr><tr><td>genType exp2 (genType x)</td><td>2的x次方，(2^x)</td></tr><tr><td>genType log2 (genType x)</td><td>以2为底，x的自然对数，(log_2x)，x&lt; =0时结果是undefined</td></tr><tr><td>genType sqrt (genType x)</td><td>对x进行开根号，(\\sqrt{x})，x&lt; 0时结果是undefined</td></tr><tr><td>genType inversesqrt (genType x)</td><td>sqrt的倒数，(\\frac{1}{\\sqrt x})，x&lt; =0时结果是undefined</td></tr></tbody></table><h3 id="几何函数" tabindex="-1"><a class="header-anchor" href="#几何函数" aria-hidden="true">#</a> 几何函数</h3><table><thead><tr><th>语法</th><th>说明</th></tr></thead><tbody><tr><td>genType length (genType x)</td><td>计算向量的长度， (\\sqrt{x1<sup>2+x2</sup>2+...})</td></tr><tr><td>genType distance (genType p0, genType p1)</td><td>p0和p1之间的距离，即length(p0-p1)</td></tr><tr><td>genType dot (genType x, genType y)</td><td>向量x与向量y的点积</td></tr><tr><td>genType cross (vec3 x, vec3 y)</td><td>向量x与向量y的叉积</td></tr><tr><td>genType normalize (genType x)</td><td>返回向量x对应的单位向量，即方向相同，长度为1</td></tr><tr><td>genType faceforward(genType N, genType I, genType Nref)</td><td>如果dot(Nref, I) &lt; 0，则返回N，否则返回-N</td></tr><tr><td>genType reflect (genType I, genType N)</td><td>I是入射光的方向，N是反射平面的法线，返回值是反射光的方向。I – 2 * dot(N, I) * N。N必须是单位向量。</td></tr><tr><td>genType refract(genType I, genType N, float eta)</td><td>I是入射光的方向，N是反射平面的法线，折射率是eta，返回值是折射后的光线的向量。I和N必须是单位向量。</td></tr></tbody></table><h3 id="矩阵函数" tabindex="-1"><a class="header-anchor" href="#矩阵函数" aria-hidden="true">#</a> 矩阵函数</h3><table><thead><tr><th>语法</th><th>说明</th></tr></thead><tbody><tr><td>mat matrixCompMult (mat x, mat y)</td><td>返回矩阵x乘以矩阵y的结果。例如result[i][j] 等于 x[i][j] * y[i][j]。注意：如果想进行线性代数里的乘法，请使用符号“*”。</td></tr></tbody></table><h3 id="向量关系函数" tabindex="-1"><a class="header-anchor" href="#向量关系函数" aria-hidden="true">#</a> 向量关系函数</h3><table><thead><tr><th>语法</th><th>说明</th></tr></thead><tbody><tr><td>bvec lessThan(vec x, vec y) bvec lessThan(ivec x, ivec y)</td><td>判断x&lt; y</td></tr><tr><td>bvec lessThanEqual(vec x, vec y) bvec lessThanEqual(ivec x, ivec y)</td><td>判断x&lt; =y</td></tr><tr><td>bvec greaterThan(vec x, vec y) bvec greaterThan(ivec x, ivec y)</td><td>判断x &gt;y</td></tr><tr><td>bvec greaterThanEqual(vec x, vec y) bvec greaterThanEqual(ivec x, ivec y)</td><td>判断x &gt;=y</td></tr><tr><td>bvec equal(vec x, vec y) bvec equal(ivec x, ivec y) bvec equal(bvec x, bvec y)</td><td>判断x==y</td></tr><tr><td>bvec notEqual(vec x, vec y) bvec notEqual(ivec x, ivec y) bvec notEqual(bvec x, bvec y)</td><td>判断x!=y</td></tr><tr><td>bool any(bvec x)</td><td>判断x的元素是否有true</td></tr><tr><td>bool all(bvec x)</td><td>判断x的元素是否全部为true</td></tr><tr><td>bool not(bvec x)</td><td>&lt; !--TOTO-- &gt;</td></tr></tbody></table><h3 id="常用函数" tabindex="-1"><a class="header-anchor" href="#常用函数" aria-hidden="true">#</a> 常用函数</h3><table><thead><tr><th>语法</th><th>说明</th></tr></thead><tbody><tr><td>genType abs (genType x)</td><td>x的绝对值</td></tr><tr><td>genType sign (genType x)</td><td>判断x是正数、负数，还是零</td></tr><tr><td>genType floor (genType x)</td><td>返回不大于x的最大整数</td></tr><tr><td>genType ceil (genType x)</td><td>返回不小于x的最小整数</td></tr><tr><td>genType fract (genType x)</td><td>返回x的小数部分，即x-floor(x)</td></tr><tr><td>genType mod (genType x, genType y)</td><td>返回x – y * floor (x/y)</td></tr><tr><td>genType min (genType x, genType y)</td><td>返回x和y的较小值</td></tr><tr><td>genType max (genType x, genType y)</td><td>返回x和y的较大值</td></tr><tr><td>genType clamp (genType x, genType minVal, genType maxVal)</td><td>min (max (x, minVal), maxVal)，如果minVal &gt; maxVal，则返回undefined</td></tr><tr><td>genType mix (genType x, genType y, genType a)</td><td>返回x * (1−a) + y * a</td></tr></tbody></table>',21),y=[n];function o(g,l){return d(),e("div",null,y)}const i=t(a,[["render",o],["__file","GLSL.html.vue"]]);export{i as default};
