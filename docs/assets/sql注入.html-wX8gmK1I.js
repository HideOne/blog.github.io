import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as l,c as a,a as e}from"./app-0fW7japb.js";const r={},n=e('<h2 id="注入原理" tabindex="-1"><a class="header-anchor" href="#注入原理" aria-hidden="true">#</a> 注入原理</h2><h3 id="产生原因" tabindex="-1"><a class="header-anchor" href="#产生原因" aria-hidden="true">#</a> 产生原因</h3><ul><li>没有检查用户参数 到账不合规参数 被当作sql语句执行</li></ul><h3 id="本质" tabindex="-1"><a class="header-anchor" href="#本质" aria-hidden="true">#</a> 本质</h3><ul><li>违背了数据与代码分离原则</li></ul><h2 id="注入常用数据库函数" tabindex="-1"><a class="header-anchor" href="#注入常用数据库函数" aria-hidden="true">#</a> 注入常用数据库函数</h2><ul><li>user()返回当前使用的用户</li><li>version() 返回当前数据库的版本</li><li>database() 返回当前使用的数据库</li><li>group_concat() 把数据库中的某列数据或某几列数据合并为一个字符串</li><li>@@datadir 数据库路径</li><li>@@version_compile_os 操作系统版本</li></ul><h2 id="按照执行效果来分类" tabindex="-1"><a class="header-anchor" href="#按照执行效果来分类" aria-hidden="true">#</a> 按照执行效果来分类：</h2><ol><li><p>基于布尔的盲注：根据页面返回判断条件真假注入。</p></li><li><p>基于时间的盲注：即不能根据页面返回内容判断任何信息，用条件语句查看时间延迟语句是否执行（即页面返回时间是否增加）来判断。</p></li><li><p>基于报错的注入：即页面会返回错误信息，或者把注入的语句的结果直接返回在页面中。</p></li></ol><ul><li>单引号</li><li>双引号</li><li>基于数字型注入</li></ul><ol start="4"><li>联合查询注入：可以使用union情况下注入。</li></ol><h2 id="sql注入常见的绕过方法" tabindex="-1"><a class="header-anchor" href="#sql注入常见的绕过方法" aria-hidden="true">#</a> SQL注入常见的绕过方法</h2><ol><li>大小写关键词绕过(UNiOn)</li><li>双写关键词绕过(ununionion)</li><li>编码绕过（base64、url）</li><li>内联注释绕过（/*! Union */）</li></ol>',13),h=[n];function d(o,s){return l(),a("div",null,h)}const u=i(r,[["render",d],["__file","sql注入.html.vue"]]);export{u as default};
