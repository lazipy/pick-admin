### html 规范

#### 基本设置

- 2 空格缩进

- UTF-8 编码

- 嵌套的节点需要缩进

#### 统一符号

- 属性值一律使用双引号

- 所有标签和属性名称一律小写，属性名称用中划线做分隔符

#### 可省略部分
- 在没有特殊需求的情况下不省略可选的结束标签

- 不省略可选的自结束标签末尾斜杠

```html
<div>
  <img src="analysys.png" alt="易观" />
</div>
```

- 建议自结束标签包含属性时在结束的斜杆前面加空格

```html
<input type="text" />
```

- 建议boolean属性不写等号和值

```html
<input type="checkbox" checked />
<script src="···" async defer></script>
```

- 所有 <a> 必须有 href 属性，如果用不到可以置为 href="javascript:;"

#### 属性部分
1. 属性应该按照特定的顺序出现以保证易读性
- class
- id
- name
- data-*
- src, for, type, href, value , max-length, max, min, pattern
- placeholder, title, alt
- aria-*, role
- required, readonly, disabled

2. class是为高可复用组件设计的，所以应处在第一位

3. id更加具体且应该尽量少使用，所以将它放在第二位

#### 最佳实践

- 不要使用 input （<input type="button"> 、 <input type="submit">）来代替 button

#### 申明相关

1. 使用 <!DOCTYPE html> 作为唯一的 DTD

2. 使用 <meta charset="UTF-8" /> 指定文件编码

3. 所有页面必须有 <title>，并尽可能地在不同页面使用不同的标题

#### 结构相关
1. 尽可能地简化 HTML 结构

2. 严格遵守标签嵌套规则，禁止让标签出现在不正确的地方

```html
<!-- 禁止 -->
<dl>
  <dt>...</dt>
  <ul>
    <li>...</li>
  </ul>
</dl>

<!-- 允许 -->
<dl>
  <dt>...</dt>
  <dd>
    <ul>
      <li>...</li>
    </ul>
  </dd>
</dl>
```

#### DOM相关

1. 不建议使用 Level 0 的事件绑定

```html
<!-- 不建议 -->
<button id="btn" onclick="onBtnClick()">analysys</button>
<script>
var onBtnClick=function() {
// ...
};
// 不建议
btn.onclick = onBtnClick;
</script>
```

但是，addEventListener / attachEvent 需要做兼容处理，推荐使用框架封装

```js
// jQuery 方案
$("#btn").click(function() {
// ...
});
```

2. 不在视图中处理复杂逻辑，事件处理代码过长时做成函数

```html
<!-- 不推荐 -->
<button id="btn" @click="'此处省略100字'">analysys</button>

<!-- 推荐 -->
<button id="btn" @click="onBtnClick()">analysys</button>
```

#### 其他建议
1. 给图片添加 alt 属性

2. 给无文字超连接添加 title 属性

3. 给可视听的替换型元素内添加描述

```html
<audio>这是一段神奇的音效</audio>
<canvas>这是一个神奇的效果</canvas>
<iframe src="https://analysys.cn">这是 易观 的首页</iframe>
```

### css 规范

#### Syntax & Devel kit

1. 样式文件中不要出现大写的标签定义, 不要对 JS 钩子进行样式定义。

2. 避免出现 .a.b 之类的定义, 如果做 hack 使用请注明。 ( ie6 不支持此定义 )

3. 稀奇古怪的 hack 请加注释。

4.避免使用 !important , 如果必须请加注释。

5. 缩进以 2 个空格为基本单位。

6. 样式使用竖排, 不要使用横排以及 n 级缩进等。

7. 对于使用 position:relative; 的样式, 请注明使用原因; ( 此样式在 ie6 下经常出现各种问题, 请尽量避免使用 )。

8. 对于所有 hack 请放到每个样式定义的最后边。

9. class selector 层级尽量控制在 5 层以内。

10. 严格控制 important 关健字的使用场景，尽量少用。

11. 一个模块对应一个 scss 文件，无则上一个模块只允许暴露一个全局样式名称。参考 @at-root 用法.

12. 继承 reset 样式开发，业务模块不允许出现全局性的 reset 样式覆盖。

13. z-index 约定。

14. 禁止在业务模块定义系统全局样式, 如：pre { color: red; }

#### Naming 命名规范

1. 样式类名全部用小写，首字符必须是字母，禁止数字或其他特殊字符。由以字母开头的小写 字母（a-z）、数字（0-9）、中划线 （-）组成。

2. 可以是单个单词，也可以是组合单词，要求能够描述清楚模块和元素的含义，使其具有语义 化。避免使用 123456…,red,blue,left,right之类的（如颜色、字号大小等）矢量命名 ，如class="left-news"、class="2" ，以避免当状态改变时名称失去意义。尽量用单个 单词简单描述class名称。

3. 双单词或多单词组合方式：形容词-名词、命名空间-名次、命名空间-形容词-名词。例如： news-list、m-feeds、m-my-feeds、cell-title

#### 组件化命名 BEM 参考
> Elements are delimited with two (2) underscores (__), and Modifiers are delimited by two (2) hyphens (--).

```
.person__eye--blue { }
```

#### Module 模块划分

> 结合 html 结构来规划模块组装方式, 采用业务模块 + ui 组件 + 功能组件等 DIY 方式拆分

- 资源类型划分

1. 布局（grid）（.g-）：将页面分割为几个大块，通常有头部、主体、主栏、侧栏、尾部等！

2. 模块（module）（.m-）：功能性的模块，通常是按页面业务结构划分出来功能性的较强, 不能进一步拆分的模块整体！比如导航、登录、注册、各种列表、评论、搜索等！

3. 功能（function）（.f-）：为方便一些常用样式的使用，我们将这些使用率较高的样式剥离出来，按需使用，通常这些选择器具有固定样式表现，比如清除浮动等！不可滥用！

4. 组件 (component) (.ui-, .v-, .vi-)

    - 通用性ui组件 (如: .v-btn, .ui-botton)
    - 项目内部业务性公用组件 (如: .vi-data-list)
    - 三方组件库（如 bootstrap ）需保留原始全名规范，不冲突。(.btn, .tab etc,.)

- 业务功能模块划分

- 原子模块结构，不可再次拆分的模块整体。

```css
.m-foo {
  .hd { ... }
  .bd { ... }
  .ft { ... }
}
```

#### 通用命名

(1) 页面框架命名，一般具有唯一性，推荐用ID命名


ID名称 | 命名 | ID名称 | 命名
---|---|---|---
头部 | header | 主体 | main
脚部 | footer | 容器 | wrapper
侧栏 | sideBar | 栏目 | column
布局 | layout


(2) 模块结构命名

Class名称称 | 命名 | Class名称 | 命名
---|---|---|---
模块(如：新闻模块) | mod (m-news) | 标题栏 | title
内容 | content | 次级内容 | sub-content

(3) 一般元素命名

Class名称 | 命名 | Class名称 | 命名
---|---|---|---
二级 | sub | 面包屑 | breadcrumb
标志 | logo | 广告 | bner(禁用banner或ad)
登陆 | login | 注册 | register/reg
搜索 | search | 加入 | join
状态 | status | 按钮 | btn
滚动 | scroll | 标签页 | tab
文章列表 | list | 短消息 | msg/message
当前的 | current | 提示小技巧 | tips
图标 | icon | 注释 | note
指南 | guide | 服务 | service
热点 | hot | 新闻 | news
下载 | download | 投票 | vote
合作伙伴 | partner | 友情链接 | link
版权 | copyright | 演示 | demo
下拉框 | select | 摘要 | summary
翻页 | pages | 主题风格 | themes
设置 | set | 成功 | suc
按钮 | btn | 文本 | txt
颜色 | color/c | 背景 | bg
边框 | border/bor | 居中 | center
上 | top/t | 下 | bottom/b
左 | left/l | 右 | right/r
添加 | add | 删除 | del
间隔 | sp | 段落 | p
弹出层 | pop | 公共 | global/gb
操作 | op | 密码 | pwd
透明 | tran | 信息 | info
重点 | hit | 预览 | pvw
单行输入框 | input | 首页 | index
日志 | blog | 相册 | photo
留言板 | guestbook | 用户 | user
确认 | confirm | 取消 | cancel
报错 | error	

#### 属性使用

- z-index
    - 右侧导航: 100-109 弹窗: 110-119 顶部: 90-99 搜索: 80-89 导航: 70-79 主内容: 50-59 底部: 40-49

- css属性使用缩写。
(╳)

```
padding-top: 1px;
padding-right: 2px;
padding-bottom: 3px;
padding-left: 4px;
```
(√)

```
padding: 1px 2px 3px 4px;
```
- 0不带单位 (动画0%除外)。
(√)

```
margin: 0;
font-size: 0;
```
(╳)

```
margin: 0px;  
font-size: 0px; 
```
- 使用简写的十六进制值。
(√)

```
color: #edf;
```
(╳)

```
color: #eeddff;  
```
- border: 以 width, style, color 的顺序书写, width 单位使用 px, 例如:
  
```css
border: 1px solid #000;  
border-top: 1px solide #000;  
border-top-color: red;  
border: 0;
```

- background: 以 color, image, repeat, position 的顺序来书写, url 省略引号, 例如:
  
```css
background:#003 url(http://www.taobao.com/loading.png) no-repeat 0 0;
background-color:red;
```

- 尽量不使用 CSS expression, 大量使用时性能较差, 应尽量避免使用。

- CSS属性书写顺序参考:

    - 位置属性(position, top, right, z-index, display, float等)
    - 大小(width, height, padding, margin)
    - 文字系列(font, line-height, letter-spacing, color- text-align等)
    - 背景(background, border等)
    - 其他(animation, transition等)
 
```css
/* * display * float * position * z-index * width * height * overflow * left(right) * top(bottom) * text-xxx * font-xxx * color * border * background * cursor */
```

- 为了节省图片的开销，有时候小三角形可以用css border来生成

#### 注释规范

- 文件头注释:

```css
/** * Style for module header. * @author allex_wang * @version 1.0.0 build 2010-12-8 * @modified shiran 2011-2-18 */
```

- 对于html模块需要加注释。

- 奇葩点的 hack 要加注释。

```css
background-color: transparent; /* flexible background gradient */
font-family: serif; /* text floating bug in ie6 */
```

- 修改别人的 CSS 请添加注释

```css
/* modified by allex 2011-03-03 */
```

#### CSS Module (模块定义)

通常我们的页面模块html结构可以写成这样(.hd, .bd, .ft):

通过语义化含义判断我们的结构具体怎么分配到这三个基本结构。

html:

```html
<div id="m-xxx" class="m-xxx">
  <div class="hd">Module Title</div>
  <div class="bd">
     Module body inner html constructs
  </div>
  <div class="ft">just a footer</div>
</div>
```

scss

```css
.m-xxx {
  border: 1px solid #ccc;
  .hd { font-weight: bold; }
  .bd { paddinig: 3px; }
  .ft { margin-botto: 3px; }
}
```

css:

```css
.m-xxx { border: 1px solid #ccc; }
.m-xxx .hd { font-weight: bold; }
.m-xxx .bd { paddinig: 3px; }
.m-xxx .ft { margin-botto: 3px; }
```

### js 规范

#### 基本原则

1. 所有的代码都要符合可维护性原则 —— 简单、便于阅读。

2. 部分编码原则是与性能原则相悖的, 如果遇到这种情况, 请优先遵守语法规范。 (注: 如果确实有不确定的 情况或者性能影响很大, 请联系你的主管或者我, 我们共同来商量最佳的解决方案)

#### 文件属性

1. 所有 js 文件均以 UTF-8 作为默认编码, 不能含有 BOM(Byte Order Mark, 是 UTF 编码方案里用于标识编 码的标准标记)头。

2. 文件命名, 必须是有意义的文件名; 建议使用英文或数字组合; 文件名中严禁出现中文; 多个英文单词请用驼峰 命名法，如：historyManager.js

3. 请不要在文件名后加数字, 来实现相同功能的多个版本, 如:drag1.js、drag2.js、drag3.js是禁止的。

4. 上线到公网的文件名及文件路径, 避免一些特殊字符, 如:ad、64, 免被某些浏览器或者防火墙屏蔽。

5. 所有上线代码及源代码必须纳入到 git 管理, 避免离职或者变动岗位, 造成代码丢失后期不可维护。

6. (建议) 不使用(汉语拼音/拼音英文数字组合/不规范的英文缩写)作为文件名。例如: jubao.js, MseEvtHdlr.js, mendian-address.js。

7. (建议) 尽量使用英文小写作为文件名, 免某些系统不区分文件名大小写。

8. (建议) 文件的目录规划及归属, 遵守各项目的具体规定。如果是新项目, 请参照主站的目录结构管理办法。

#### 代码格式化

**换行原则**

1. (建议)每行代码不要超过 80 字符。当一条语句一行写不下时, 折行。

2. 折行位置:在运算符号后面换行。在运算符后换行可以减少因为复制粘贴产生的错误被分号掩盖的几率。

3. 每行代码只允许一个有效语句, 止为了减少代码行数, 多个语句放在一行代码中。

4. 多行字符串使用 + 拼接形式换行(打包工具会优化它, 用担心性能问题), 不要使用 \ 拼接(它不是 ECMA 的 标准规范)。 例如, 下面的代码是错误的(在编译时, 不能忽略行起始位置的空白字符):

```
var wrongString = 'The string is so long, \ we need split \ in multi-line.';
```

正解处理长串:

```js
var wrongString = '<div>' +
                    '<header>title text</header>' +
                    '<p>some description text</p>' +
                  '</div>';
```

5. "{}" (大括号)前面不需要换行, 例如函数定义、if 语句、while 语句、switch 等。

**缩进原则**

强制沿用项目 .editconfig 配置 

```conf
editorconfig.org 
root = true

[*]
charset = utf-8
insert_final_newline = true
trim_trailing_whitespace = true
end_of_line = lf
indent_style = space
indent_size = 2
```

1. 代码需要保持适当的缩进。

2. 缩进请使用Tab缩进（1 tab = 2 spaces，可以在编辑器设置）空格缩进显示以兼容不同IDE, 不同操作平台的差异。

3. 复合语句(被包含在 “{}”(大括号)的语句序列, 包括函数定义)需要保持缩进。

4. 初始化数组和 JSON 对象时, 如果初始值较长, 需要换行并保持缩进。

5. 函数调用时, 如果传递的是匿名函数, 匿名函数的内容需要换行并保持缩进, 让匿名函数更加易读。

**空格**

需要保留空格的情况:

1. 各种运算符, 包括数值操作符(例如:+、-、*、/、%等)、位运算符、比较运算符、三元运算符、复合赋值运算 符、赋值运算符前后, 保留一个空格。 “.”(点) 和“(”(左括号)和 “[”(左方括号)例外。

2. for 循环条件中, 分号后保留一个空格。

3. 所有的逗号后保留一个空格, 例如: 变量声明语句、数组值、JSON 对象值、函数参数值等等。

4. 冒号前后都加空格。

不需要保留空格的情况:

1. 一元操作符与其操作数之间不应有空格, 如: i++。除非操作符是个单词, 例如: typeof window。

2. 点号前后不要出现空格。

3. 空行不要有空格, 尾不要有空格。

4. 空对象和数组不需要填入空格。[], {}

5. 函数调用的括号“(”前, 要出现空格。

6. 注释符前后要有空格。

**空行**

1. 逻辑上独立的代码块, 对象方法，函数前后使用空行分隔。尽量使用空行将逻辑相关的代码块分割开, 以提高程序的可读性。

2. 连续空行数控制在 1 ~ 2 行（根据代码块层次来控制空行数）, 拒绝 2 行以上的空行。

3. (建议) 文件末尾留 1 个空行。

**语句行**

1. 语句必须以分号作为结束符, 不能忽略分号。除了 for, function, if, switch, try, while 结束的花括号后无需分号。

> js 的语句以分号作为结束符, 除非可以非常准确推断某结束位置才会省略分号。上面的几个例子产出错误, 均是在语句中声明了函数/对象/数组直接量, 但闭括号 ( '}' 或 ']' ) 并不足以表示该语句的结束。 在js 中, 只有当语句后的下一个符号是后缀或括号运算符时, 才会认为该语句的结束

有的情况下, 漏掉分号会有大麻烦, 例如：

情况一: 语句会解释成, 一个函数带一匿名函数作为参数而被调用, 返回 42 后, 又一次被调用, 这就导致了错误

```js
MyClass.prototype.myMethod = function() {
   return 42;
} // 缺分号

(function() {
   // Some initialization code wrapped in a function to create a scope for locals.
})();
```

情况二: 在运行时遇到 'no such property in undefined' 错误, 原因是代码试图这样 x[ffVersion][isIE]() 执行

```js
var x = {
   'i': 1,
   'j': 2
} // 缺分号
[ffVersion][isIE]();
```
   
情况三: 当 resultOfOperation() 返回非 0 时, 就会调用 die, 其结果也会赋给 arrResult

```js
var arrResult = ['1', '2', '3'] // 缺分号

// conditional execution a la bash
-1 === resultOfOperation() || die();
```

1. 对于复合语句, if, for, while, do, switch, try ... catch 等代码体, 数定义的函数体, 对象的定义等 都需要放在花括号 “{}” 里面。
    - “{” 应在行末, 标志代码块的开始。
    - “}” 应在一行开头, 标志代码块的结束, 同时需和“{”所在行的开始对齐, 以表明是一个完整的复合语句。这 样可极大地提高代码的可阅读性, 控制逻辑能清晰地表现出来。
    - 被包含的代码段应该保持缩进。
    - 即使被包含的代码段只有一句, 也应该用“{}”包含。尽管不用花括号代码也不会错, 但如若需要增加语句的 话, 则较容易因花括号遗漏而引起的编译错误或逻辑错误。

2. return 语句在使用时也需慎重,如果用表达式的执行作为返回值, 请把表达式和 return 放在同一行中, 以 免换行符被误解析为语句的结束而引起返回错误。 例如:

```js
function unexpectedReturn() {
   var valueA = 1, valueB = 2;
   return
       valueA + valueB;
}
console.log(unexpectedReturn()); // ouput: undefined
```

代码格式示例

```js
function walk(holder, key) {

    // The walk method is used to recursively walk the resulting structure so
    // that modifications can be made.

    var k, v, value = holder[key];
    if (value && typeof value === 'object') {
        for (k in value) {
            if (Object.prototype.hasOwnProperty.call(value, k)) {
                v = walk(value, k);
                if (v !== undefined) {
                    value[k] = v;
                } else {
                    delete value[k];
                }
            }
        }
    }

    return reviver.call(holder, key, value);
}
```

#### 代码注释

> 注释，给以后需要理解你的代码的人(或许就是你自己)留下信息是非常有用的。注释应该和它们所注释的代 码一样是书写良好且清晰明了。 避免冗长或者情绪化的注释。

**文件头部注释**

1. 所有 js, css 文件头部, 必须有文件注释, 用于简要说明: 文件的主要功能(含模块信息)、作者(含作者邮箱)、版权等信息。 文件头注释格式如下:

```js
/** * Basic lang utilities functions ... * * @author Allex Wang * @module clib/lang */
define('lang', function(require, exports, module) {
  ...
});
```
2. 注释需要简洁明了, 从已解决的方案到未开发的功能, 注释必须与代码相关。

3. 及时地更新注释, 错误的注释会让程序更加难以阅读和理解。

4. (建议) 公用模块文件，请添加范例代码。

5. (建议) 所有的注释请尽量使用英文(跨平台编辑)。

6. (建议) // 用作代码行注释, /* ... */ 形式用作对整个代码段的注销,或较正式的声明中, 如函数参数、功能、文件功能等的描述中。

7. (建议) 如果可能, 文件头部的注释, 还要包含文件依赖关系、版本号、第三方代码来源url信息等。

**代码内部注释**

1. 大量的变量声明后面须添加注释, 说明变量用途。

2. 每个对外暴露的 API 方法, 需要加注释说明其用途。注释需要包括: 函数的用途、参数、返回值等, 此三项为强制要求。

3. 生涩的代码就没有必要添加注释了, 首先您需要重写它们。

4. 注释没有必要每行都添加, 只在重要的逻辑、或者较复杂的逻辑处, 增加必要的注释。

5. 通俗易懂的语句压根儿不需要添加注释，合理的变量命名其实是最直接的注释。

6. 删除注释掉的代码块, 只要提交了 git, 代码可以随时找回, 无需保留被注释的废弃代码。

**模块注释规范**

1. 类注释
每个类的定义都要附带一份注释, 描述类的功能和用法. 也需要说明构造器参数. 如果该类继承自其它类, 应该使用 @extends 标记. 如果该类是对接口的实现, 应该使用 @implements 标记.

```js
/**
 * Class making something fun and easy.
 * @param {String} arg1 An argument that makes this more interesting.
 * @param {Array} arg2 List of numbers to be processed.
 * @constructor
 * @extends {goog.Disposable}
 */
project.MyClass = function(arg1, arg2) {
    // ...
};
goog.inherits(project.MyClass, goog.Disposable);
```
2. 方法与函数的注释
提供参数的说明. 使用完整的句子, 并用第三人称来书写方法说明.

```js
/**
 * Converts text to some completely different text.
 * @param {String} arg1 An argument that makes this more interesting.
 * @return {String} Some return value.
 */
MyClass.prototype.someMethod = function(arg1) {
    // ...
};

/**
 * Operates on an instance of MyClass and returns something.
 * @param {project.MyClass} obj Instance of MyClass which leads to a long
 *     comment that needs to be wrapped to two lines.
 * @return {boolean} Whether something occured.
 */
function PR_someMethod(obj) {
    // ...
}
```
3. 对于一些简单的, 不带参数的 getters, 说明可以忽略.

```js
/**
 * @return {Element} The element for the component.
 */
Component.prototype.getElement = function() {
    return this._element;
};
```
4. 属性注释

/** * Maximum number of things per pane. * @type {Number} */
project.MyClass.prototype.someProperty = 4;

5. 类型转换的注释

有时, 类型检查不能很准确地推断出表达式的类型, 所以应该给它添加类型标记注释来明确之, 并且必须在表达式和类型标签外面包裹括号.

```js
function setFoo(x) (/* @type {Number} */ x) { ... }
```
枚举

```
/** * Enum for tri-state values. * @enum {Number} */
project.TriState = {
    TRUE: 1,
    FALSE: -1,
    MAYBE: 0
};
```
注意一下, 枚举也具有有效类型, 所以可以当成参数类型来用.

```js
/**
 * Sets project state.
 * @param {project.TriState} state New project state.
 */
project.setState = function(state) {
    // ...
};
```

6. JSDoc 缩进

如果你在 @param, @return, @supported, @this 或 @deprecated 中断行, 需要像在代码中一样, 使用4个空格作为一个缩进层次.

```js
/**
 * Illustrates line wrapping for long param/return descriptions.
 * @param {String} foo This is a param with a description too long to fit in
 *     one line.
 * @return {Number} This returns something that has a description too long to
 *     fit in one line.
 */
project.MyClass.prototype.method = function(foo) {
    return 5;
};
```
- 模块使用范例注释:

```js
/** * @example * var bleeper = makeBleep(3); * bleeper.flop(); */
Typedefs:
```

- 有时类型会很复杂. 比如下面的函数, 接收 Element 参数

```js
/**
 * @param {String} tagName
 * @param {String|Element|Text|Array} contents
 * @return {Element}
 */
goog.createElement = function(tagName, contents) {
    ...
};
```
你可以使用 @typedef 标记来定义个常用的类型表达式

```js
/** @typedef {String|Element|Text|Array} */
goog.ElementContent;

/**
 * @param {String} tagName
 * @param {goog.ElementContent} contents
 * @return {Element}
 */
goog.createElement = function(tagName, contents) {
    ...
};
```

#### 命名规范

**变量命名**

1. 声明变量必须加上关键字 var, 避免使用未声明的变量。
当你没有写 var, 变量就会暴露在全局上下文中, 这样很可能会和现有变量冲突。另外, 如果没有加上, 很难明确该变量的作用域是什么, 变量也很可能看起来像在局部作用域中, 但实际上, 已经泄漏到 window 中, 所以务必用var 去声明变量 (批量定义变量一定要注意结束符逗号 "," 不能漏掉)。

2. 精简短小, 见名知意。变量名使用英文大小写和数字命名, 使用驼峰命名规则, 例如: getStyle、addEvent。

3. 变量的命名, 不得使用 js 保留字。 js 保留字列表:

```
abstract boolean break byte case catch char class const continue default do
double else extends false final finally float for function goto if implements
import in instanceof int interface long native new null package private
protected public return short static super switch synchronized this throw throws
transient true try var void while with
```
4. 不能使用没有任何意义的变量名 (循环的指针变量除外, 见下文 15), 例如: var a = 1; var xx = true; 避免无意义的简写, 例如: MouseEventHandler 写作 MseEvtHdlr。

5. 常量、枚举量使用全大写作为变量名, 多个单词之间用下划线()分隔。例如: NAMELIKE_THIS。

6. 除非必要, 请不要使用全局变量, 避免出现全局变量污染。(特殊情况需要经项目前端技术负责人审批)

7. 函数内部的变量, 请在函数定义的头部声明。出于避免造成不必要消耗的考虑, 复杂类型的变量可以只声明不赋值。唯一特殊的情况, 是 for 循环的下标变量, 可以使用的时候实时声明。

8. 函数内保存 DOM 引用和定时器的变量, 使用完后必须显式销毁, 从而可以及时的执行内存回收。例如设置该变量为 null; 定时器变量销毁, 请执行 clearInterval 或者 clearTimeout。

9. 函数内两次以上使用到的同一全局变量或者外部对象, 定义为一个局部变量, 以保证程序性能最优, 例如: var doc = document, win = window;

10. 私有化变量和方法名应该以下划线 _ 开头 (仅限有跨作用域的变量或方法等).

11. (建议) 不在变量名前加下划线 _ 表示私有变量。

12. (建议) this 命名, 尽量以能表达当前实例意义的名称, 通用命名为 self;

```js
Pager.protoype.goto = function() {
  var pager = this, index = page.currentIndex + 1;
  setTimeout(function() { page.doRequest(index); });
};
function foo1(){
  var self = this;
  setTimeout(function() { console.log(self.name); }, 1);
}
function foo2(name){
  var self = this;
  self.name = name;
  foo1.call(self);
}
```

1. (建议) 布尔变量、返回值为 boolean 的函数/方法前可以添加前缀 is/has/can/should。

2. (建议) 避免产生歧义的命名, 例如: isNotError, isNotFound。

3. (建议) 表示错误的变量, 建 for 循环中的临时重复变量建议以 i, j, k, m, n ... 命名。

4. (建议) 多个变量声明时, 适当换行表示, 参照 var 关键字位置保持缩进。

**自定义对象(类)命名**

- 自定义对象(类)

命名, 每个单词首字母均需要大写, 例如: ModuleDialog。 内部对象  (不会导出的构造器或静态对象), 使用 _ 开头来定义, 例如: _BaseTab;

- 对象的方法

驼峰命名方式, 必须是动词或者动词短语, 例如: obj.getSomeValue()。 函数的参数个数不固定时, 应该添加最后一个取名为 args 的参数. 可选和可变参数应该在 @param (Optional) 标记中说明清楚.

**变量赋值及定义**

1. 下面类型的对象不建议用 new 构造,而是使用直接量赋值: new Number, new String, new Boolean, new Object (用{}代替), new Array(用[]代替)。

2. 禁止数组或者 JSON 中出现冗余的逗号, IE 下会抛出语法错误。 例如: var testArray = [1,2,3,]; 或者 var jsonExample = { 'key1': value1, 'key2': value2,};

3. 禁止污染内置对象的原型, 例如 Object.prototye、Array.prototype、Function.prototype。

4. 不要使用连等进行赋值。例如:

```js
(function () {
  var numberA = numberB = 3; // 这里产生的 numberB 是全局变量
})();
alert(numberB); // return 3
```

1. 如果一个赋值语句是用函数和对象来赋值, 可能需要跨多行, 一定切记要在赋值语句末加上分号。

2. (建议) 数组和对象初始化时, 如果初始值不是很长, 尽量保持写在单行上; JSON 对象中, 比较长的 key/value, 不必为了美观以冒号对齐。

3. (建议) 没必要在每次声明变量时就将其初始化, 但使用变量之前一定要确保变量已经初始化。

4. (建议) 字符串变量赋值的时候, 优先使用单引号, 而不是双引号, 尤其是你创建的是 HTML 字符串。

```js
var s = 'hello world';
var html = '<div class="header"></div>';
console.log(s + ', my name is cat');
console.log(html);
```

#### 条件语句/循环

**条件语句**

1. if 语句, 即使只有单行, 也要用花括号括起来, 例如:
  
```js
// (错误)
if (condition) statement;

// (正确)
if (condition) {
    statement;
}
```

2. 使用三元运算符, 替代单一的 if else 语句。例如:

```js
if (val != 0) {
   return foo();
} else {
  return bar();
}

// 可以写作:
return val ? foo() : bar();
```

3. if/else/while/for 条件表达式必须有小括号, 且自占一行。

4. (建议) 利用 && 和 || 短路来简化代码:

```js
function foo(opt_win) {
  var win;
  if (opt_win) {
      win = opt_win;
  } else {
      win = window;
  }
  // ...
}

// 可以写作:
function foo(opt_win) {
  var win = opt_win || window;
  // ...
}
```

&& 短路:

```js
if (node) {
  if (node.kids) {
      if (node.kids[index]) {
          foo(node.kids[index]);
      }
  }
}

// 可以写作:
if (node && node.kids && node.kids[index]) {
  foo(node.kids[index]);
}

// 或者
var kid = node && node.kids && node.kids[index];
if (kid) {
  foo(kid);
}
```

(建议) 使用严格的条件判断符。用 === 代替 ==, 用!== 代替 !=。

**循环**

1. 尽量避免 for-in 循环, 只用于 object/hash 的遍历, 数组的遍历使用 for 循环。

2. for-in 循环体中必须用 hasOwnProperty 方法检查成员是否为自身成员, 避免来自原型链上的污染。

3. 避免在 if 和 while 语句的条件部分进行赋值。例如:

```
// (错误)
var i = 10;
while (i = i - 2) {
  statement;
}
// 应该写作: (正确)
var i = 10;
while (i > 0) {
  statement;
  i = i - 2;
}
```

#### 函数/闭包

**函数**

1. 一个函数的内容不宜太长, 较复杂的逻辑, 需拆分成多个函数来实现, 使代码逻辑清晰。

2. 对外暴露的 API 型函数, 尽量保持输入输出的稳定, 减小调用者修改代码的成本和风险。

3. 可以嵌套函数, 用于减少重复代码, 隐藏一些局部函数等, 但不要在块内声明一个函数。因为 JS 并不支持块级作用域, 虽然很多 js 引擎都支持块内声明函数, 但它不属于 ECMAScript 规范 (见 ECMA-262, 第 13 和 14 条)。各个浏览器糟糕的实现相互不兼容, 有些也与未来 ECMAScript 草案相违背。ECMAScript 只允 许在脚本的根语句或函数中声明函数. 如果确实需要在块中定义函数, 建议使用函数表达式来初始化变量。例如:

```js
// (错误)
if (x){
  function foo () {}
}
// 应该写作: (正确)
if (x) {
  var foo = function () {};
}
```

- 有很多方法可以给构造器添加方法或成员, 我们更倾向于使用如下的形式:

```js
Foo.prototype.bar = function() {
  /* ... */
};
```

1. 仅在对象构造器、方法、闭包中使用 this 对象, 避免 this 乱用出现的指代不明。 this 的语义很特别。有时它引用一个全局对象(大多数情况下), 调用者的作用域(使用 eval 时), DOM 树中的节点(添加事件处理函数时), 新创建的对象(使用一个构造器), 或者其他对象(如果函数被 call() 或 apply())。

2. 引用对象成员用 obj.propName 代替 obj['propName'], 除非属性名是变量或是接口数据的引用。

**函数参数**

1. 函数的必选参数, 必须检查是否传递了合法的参数, 避免参数类型不对带来的异常。

2. 函数参数写在同一行上。如果一行超过 80 字符, 请按照缩进原则进行换行, 并保持适当缩进。

**闭包**

- 由于闭包保留了一个指向它封闭作用于的指针, 所以在给 DOM 元素附加闭包时候, 要避免产生循环引用, 从而导致内存泄露。例如:

```js
// (错误)
function foo(element, a, b) {
  element.onclick = function () { /* 使用变量 a 和 b */ }
}
```

这里, 即使没有使用 element, 闭包也保留了 element, a 和 b 的引用, 由于 element 也保留了对闭包的引用, 这就产生了循环引用, 这就不能被 GC 回收. 这种情况下, 可将代码重构为:

```js
function foo(element, a, b) {
  element.onclick = handle(a, b);
}
function handle(a, b) {
  return function() { /* 使用变量 a 和 b */ };
}
```

通常我们需要给模块提供 destroy 接口方法，在这个方法做好模块的善后工作，防止内存开销过大, 如。

```js
/** * var loader = ImageLoader(...); * loader.load(); * loader.destroy(); */
var ImageLoader = functiono(images) {
// binding onload event etc,.
...

return {
  load: function() {
    ...
  },
  destory: function() {
    images.forEach(functiono() {
      img.onload = null;
      img = null;
    });
    images = null;
  }
};
};
```

#### 其他

1. 禁止使用 void、eval, with, 只在将 ajax 响应的文本解析为 json 时使用 eval()。

2. 不要使用 function 构造器。

3. 不要滥用括号, 在必要的时候使用它。

- 对于一元操作符(如 delete, typeof 和 void ), 或是在某些关键词(如 return, throw, case, new )之后, 不要使用括号。

1. 代码中调试用的 alert、console.log、console.dir、debugger 等代码, 在提交到 git 之前, 必须完全清理掉。

2. 尽量使用严格模式

> 'use strict';

- 模块代码AMD方式组织。define(), 模块依赖用 commonjs require()

```
define(function(require, exports, module) {
  'use strict';

  var _ = require('underscore');

  var queue = [];

  var initModule = function() {
      _.each(queue, function(v, i) {
          // do something
      });
  };

  module.exports = {
      init: initModule
  };
});
```

### Vue 规范

#### 组件名

组件名采用大驼峰命名，避免与 HTML 标签冲突，并且结构更加清晰。

```js
// 反例
export default {
    name: 'page-article-item'
}

// 正例
export default {
    name: 'PageArticleItem'
}
```

#### 组件文件

组件的名字应该始终是大驼峰命名，一方面可与组件名一致，使项目更加清晰，另一方面这样的写法对编辑器引入也很友好。

```
// 反例
├── index.html
├── main.js
└── components
    ├── pageheader
    ├── pagearticle
    └── pageheader

// 正例
├── index.html
├── main.js
└── components
    ├── PageHeader
    ├── PageArticle
    └── PageHeader
```

#### 组件的使用

组件在父组件中使用，始终使用连接线（-）。并且尽量使用单标签。

```html
// 反例
<childComponent></childComponent>

// 正例
<child-component />
```

#### Prop

定义 Prop 的时候应该始终以驼峰格式（camelCase）命名，在父组件赋值的时候使用连接线（-）。这里遵循每个语言的特性，因为在 HTML 标记中对大小写是不敏感的，使用连接线更加友好；而在 JavaScript 中更自然的是驼峰命名。

```js
// 反例
// Vue
props: {
    article-status: Boolean
}
// HTML
<article-item :articleStatus="true"></article-item>

// 正例
// Vue
props: {
    articleStatus: Boolean
}
// HTML
<article-item :article-status="true"></article-item>
```

Prop 的定义应该尽量详细的指定其类型、默认值和验证。

```
// 反例
props: ['attrM', 'attrA', 'attrZ']

// 正例
props: {
    attrM: Number,
    attrA: {
        type: String,
        required: true
    },
    attrZ: {
        type: Object,
        // 数组/对象的默认值应该由一个工厂函数返回
        default: function () {
            return {
                msg: '成就你我'
            }
        }
    },
    attrE: {
        type: String,
        validator: function (v) {
            return !(['success', 'fail'].indexOf(v) === -1) 
        }
    }
}
```

#### v-for

在执行 v-for 遍历的时候，总是应该带上 key 值使更新 DOM 时渲染效率更高。

```html
// 反例
<ul>
    <li v-for="item in list">
        {{ item.title }}
    </li>
</ul>

// 正例
<ul>
    <li v-for="item in list" :key="item.id">
        {{ item.title }}
    </li>
</ul>
```

v-for 应该避免与 v-if 在同一个元素（例如：<li>）上使用，因为 v-for 的优先级比 v-if 更高，为了避免无效计算和渲染，应该尽量将 v-if 放到容器的父元素之上。

```html
// 反例
<ul>
    <li v-for="item in list" :key="item.id" v-if="showList">
        {{ item.title }}
    </li>
</ul>

// 正例
<ul v-if="showList">
    <li v-for="item in list" :key="item.id">
        {{ item.title }}
    </li>
</ul>
```

#### v-if / v-else-if / v-else

若同一组 v-if 逻辑控制中的元素逻辑相同，Vue 为了更高效的元素切换，会复用相同的部分，例如：value。为了避免复用带来的不合理效果，应该在同种元素上加上 key 做标识。

```html
// 反例
<div v-if="hasData">
    <span>{{ mazeyData }}</span>
</div>
<div v-else>
    <span>无数据</span>
</div>

// 正例
<div v-if="hasData" key="mazey-data">
    <span>{{ mazeyData }}</span>
</div>
<div v-else key="mazey-none">
    <span>无数据</span>
</div>
```

#### 指令缩写

为了统一规范始终使用指令缩写，使用v-bind，v-on并没有什么不好，这里仅为了统一规范。

```html
<input :value="mazeyUser" @click="verifyUser">
```

#### 样式

为了避免样式冲突，整个项目要么全都使用 scoped 特性，要么使用 BEM 约定。

```
// 反例
<template>
    <button class="btn btn-sure">确认</button>
</template>
<style>
    .btn{
        border: 1px solid #F1F1F1;
    }
    .btn-sure{
        background-color: blue;
    }
</style>

// 正例
<!-- 使用 scoped 特性 -->
<template>
    <button class="btn btn-sure">确认</button>
</template>
<style scoped>
    .btn{
        border: 1px solid #F1F1F1;
    }
    .btn-sure{
        background-color: blue;
    }
</style>

<!-- 使用 BEM（Block Element Modifier） 特性 -->
<template>
    <button class="menu-btn menu-btn-sure">确认</button>
</template>
<style>
    .menu-btn{
        border: 1px solid #F1F1F1;
    }
    .menu-btn-sure{
        background-color: blue;
    }
</style>
```

#### 单文件组件的顶级元素顺序

为了统一和便于阅读，应该按 <template>、<script>、<style>的顺序放置。

```
// 反例
<style>
/* CSS */
</style>
<script>
/* JavaScript */
</script>
<template>
<!-- HTML -->
</template>

// 正例
<template>
<!-- HTML -->
</template>
<script>
/* JavaScript */
</script>
<style>
/* CSS */
</style>
```

#### 组件属性顺序

一定是按照下面例子的顺序来编写组件属性

```
export default {
    name: '',
    components: {},
    mixins: [],
    props: {},
    data() {
        return {}
    },
    computed: {},
    watch: {},
    created() {},
    ...
    methods: {}
}
```
