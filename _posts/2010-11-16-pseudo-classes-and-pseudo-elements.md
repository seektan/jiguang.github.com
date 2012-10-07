---
author: jiguang
title: '伪类(Pseudo-Classes)&伪元素(Pseudo-Elements)详解'
excerpt:
layout: post
category:
  - html-css
tags:
  - 教程
post_format: [ ]
---
对于CSS中的伪类与伪对象，很多同学都不是很清楚，而且非常容易混淆，这里[笔者][1]尝试来解释一下它们的区别以及如何使用等知识。

那么什么是伪类呢？之所以说它是“伪”的，不是为了赶时髦，其实可以理解为，它不是真正的一类对象，而是一类对象的某种状态。比如一类链接<a>的hover状态，就是个“伪”的类。

而伪对象呢，可以理解为本身不是单独的全新的对象，而是将已有的某些对象中划分出来一些，所以是“伪”对象。

下 面引用《CSS权威指南》中的一段话帮助大家理解，伪类和伪元素，它们允许将样式应用于文档中不存在的结构上，或者是通过当前元素状态甚至是文档自身的状 态而推断的东西上。换句话说，可以不依赖于文档结构，而且在不能简单地通过研究文档的标记来推断的情况下，将样式应用于文档的某个部分。

下面看一下伪类和伪对象都有哪些：

**伪类：**

:link :hover :active :visited :focus :first-child :first :left :right :lang

**伪对象:**

:first-letter :first-line :before :after

对于伪类，可能最常用的就是链接的样式，即:hover和:visited，如果需要将样式设置的比较全面，那么:link :hover :active :visited都需要设置，且要特别注意LVHA的顺序，否则在有些浏览器下会有bug。

:link主要可以用来区分定位锚点和链接，因为二者都是<a>标签，而只有:link可以区分出含有href属性的<a>标签，即作为链接的<a>标签。

对于伪对象，上面列出的四个都会用到，相对来说:after伪对象用来清除浮动的应用较多。

下面详细介绍每一个伪类或伪对象的使用方式：

**伪类(Pseudo-Classes)**

**:link**

语法：

Selector : link { sRules }

说明：

设置 a 对象在未被访问前的样式。

默认值由浏览器决定。

对于无 href 属性(特性)的 a 对象，此伪类不发生作用。

请参阅 body 对象的 link 属性(特性)和 document 对象的 linkColor 特性。

示例：

a:link { font-size: 14pt; text-decoration: underline; color: blue; }

**:hover**

语法：

Selector : hover { sRules }

说明：

设置对象在其鼠标悬停时的样式。

在CSS1中此伪类仅可用于 a 对象。对于无 href 属性(特性)的 a 对象，此伪类不发生作用。

在CSS2中此伪类可以应用于任何对象。

示例：

a:hover { font-size: 14pt; text-decoration: underline; color: blue; }

a:hover span{ color:red; }

**:active**

语法：

Selector : active { sRules }

说明：

设置对象在被用户激活(在鼠标点击与释放之间发生的事件)时的样式。

在CSS1中此伪类仅可用于 a 对象。对于无 href 属性(特性)的 a 对象，此伪类不发生作用。

在CSS2中此伪类可以应用于任何对象。

并且 :active 可以和 :link 以及 :visited 状态同时发生。

示例：

a:active { font-size: 14pt; text-decoration: underline; color: blue; }

**:visited**

语法：

Selector : visited { sRules }

说明：

设置 a 对象在其链接地址已被访问过时的样式。

默认值由浏览器决定。定义网页过期时间或用户清空历史记录将影响此伪类的作用。

对于无 href 属性(特性)的 a 对象，此伪类不发生作用。

请参阅 body 对象的 vlink 属性(特性)和 document 对象的 vlinkColor 特性。

示例：

a:visited { font-size: 14pt; text-decoration: underline; color: blue; }

**:first-child**

语法：

Selector : first-child { sRules }

说明：

设置 E 的第一个子对象的样式。

示例：

p a:first-child { color: green }

table td:first-child { width:200px; }

**:first**

语法：

Selector : first { sRules }

说明：

设置页面容器第一页使用的样式。仅用于 @page 规则。

示例：

@page :first { margin: 4cm }

**:left**

语法：

Selector : left { sRules }

说明：

设置页面容器位于装订线左边的所有页面使用的样式。仅用于 @page 规则。

示例：

@page :left { margin: 4cm }

**:right**

语法：

Selector : right { sRules }

说明：

设置页面容器位于装订线右边的所有页面使用的样式。仅用于 @page 规则。

示例：

@page :right { margin: 4cm }

**:lang**

语法：

Selector : lang { sRules }

说明：

设置对象使用特殊语言的内容的样式。

示例：

blockquote:lang(fr) { quotes: ‘?’ ‘ ?’ }

/* 使用法语显示由quotes属性指定的法语的嵌套标记 */

**:focus**

语法：

Selector : focus { sRules }

说明：

设置对象在成为输入焦点(该对象的 onfocus 事件发生)时的样式。

示例：

a:focus { font-size: 14pt; text-decoration: underline; color: blue; }

a:focus img { border: thin solid green }

**伪对象(Pseudo-Elements)**

**:after**

语法：

Selector : after { sRules }

说明：

用来和 content 属性一起使用，设置在对象后(依据对象树的逻辑结构)发生的内容。

示例：

table:after { content: END OF TABLE }

**:first-letter**

语法：

Selector : first-letter { sRules }

说明：

设置对象内的第一个字符的样式。

此伪对象仅作用于块对象。内联要素要使用该属性，必须先设定对象的 height 或 width 属性，或者设定 position 属性为 absolute ，或者设定 display 属性为 block 。

在此伪对象中配合使用 font-size 属性和 float 属性可以制作首字下沉效果。

示例：

p a:first-letter { color: green }

div:first-letter { color:red;font-size:16px;float:left; }

**:first-line**

语法：

Selector : first-line { sRules }

说明：

设置对象内的第一行的样式。

此伪对象仅作用于块对象。内联要素要使用该属性，必须先设定对象的 height 或 width 属性，或者设定 position 属性为 absolute ，或者设定 display 属性为 block 。

如果未强制指定对象的 width 属性， 首行的内容长度可能不是固定的。

示例：

p a:first-line { color: green }

div:first-line { color:red;font-size:16px; }

**:before**

语法：

Selector : before { sRules }

说明：

用来和 content 属性一起使用，设置在对象前(依据对象树的逻辑结构)发生的内容。

示例：

em:before { content: url(“ding.wav”); }

对于上面的这些伪类与伪元素，最容易混淆的就是:first-child了，看上去貌似是个伪元素，因为是“第一个孩子”嘛，跟:first-letter和:first-line看上去很像，但后两者确实是伪元素，而:first-child却是伪类。

我觉得这里可以这样理解：

:first- child是第一个子对象，这个对象可以是任何元素，所以可以当做一“类”来处理，所以是伪类；而:first-letter和:first-line是 第一个字母和第一行，都是特定的文本元素，是前面选择器选取的元素中的一部分，而文档中并未单独存在“首字母”或者“首行”这样的元素，所以它们为伪元 素。

这里再插入一段权威指南中的说明：之所以:first-line和:first-letter被当做伪元素引用，是因为它们在效果上使文档中产生了一个临时的元素。这是应用“虚构标记”的一个最典型的实例，正如CSS规范中所描述的那样。

这里还有个例子可以帮助理解，假设有如下标记：

P:first-line { color: gray; }

<p>This is a paragraph of text which has only one style applied to it. That style causes the first line to be gray. No other text in the paragraph is affected by this rule (at least, it shouldn’t be).</p>

进而假设用户代理显示的文本如下：

This is a paragraph of text which has only

one style applied to it. That style causes

the first line to be gray. No other …

等等。既然从“This”到“only”的文本应该是灰色，那么用户代理就可以使用类似于下面的虚构标记：

<p><p:first-line>This is a paragraph of text which has only</p:first-line>

one style applied to it. That style causes the first line to be gray. No other …

上面展示了从理论上来讲，伪元素选择符:first-line是如何工作的。

而<p:first- line>元素并没有出现在源文档中，甚至于它根本就不是一个有效的元素。它的存在是建筑在用户代理之上的，其作用是将:first-line样式 应用于合适的文本块上。换句话说，<p:first-line>不是一个真正意义上的元素，而是一个伪元素。记住，不必再添加任何新标签，用 户代理会完成余下的工作。

**能用于伪对象的属性**

所有font属性</p> 
所有color和background属性

text-decoration

vertical-align（如果float属性设置成none）

text-transform

line-height

所有margin属性

所有padding属性

所有border属性

float属性

clear</td> 
所有font属性</p> 
所有color和background属性

word-spacing

letter-spacing

text-decoration

vertical-align

text-transform

line-height

clear</td> </tr> </tbody> </table> 
这里还有一点需要注意的是，形如下面的例子：

div > p:first-child { text-indent: 0 }

给人感觉似乎是div里面的p的第一个子元素，但事实上它选择的是，作为所有div的第一个子元素且是P的元素。

它将匹配如下代码中的P元素：

<P> The last P before the note.  
<DIV>  
<P> The first P inside the note.  
</DIV>

而不会匹配下列代码中的第二个P元素：

<P> The last P before the note.  
<DIV>  
<H2>Note</H2>  
<P> The first P inside the note.  
</DIV>

下面的代码将匹配作为P元素的第一个子元素的EM元素：

p:first-child em { font-weight : bold }

注意：既然匿名的盒子（anonymous boxes）不是文档树（document tree）的一部分，那么当计算first-child时，它们也不计算在内。

例如下列代码中的EM：

<P>abc <EM>default</EM>

是P元素的第一个子元素。

下面的两个选择器是等效的：

* > a:first-child /* A is first child of any element */  
a:first-child /* Same */

伪类和伪对象很容易混淆，如果记不准的话很容易出现错误。[css3][2]（[CSS 3 Selectors Working draft][3]）中对此作出了改进，将伪对象用两个冒号表示，即::first-letter的这种形式来表示伪对象，这样就可以很直观地区分伪类和伪对象了。

element:after  { *style properties* }  /* CSS2 syntax */

element::after { *style properties* }  /* CSS3 syntax, not supported by IE8 */

关于伪类(Pseudo-Classes)与伪对象(Pseudo-Elements)的更多信息，可以查看[官方文档][4]，这里就不再赘述了。如果有什么建议或者疑问，可以留言与我交流。

 [1]: http://jiguang.github.com
 [2]: http://jiguang.github.com/index.php/tag/css3/ "css3"
 [3]: http://www.w3.org/TR/css3-selectors/
 [4]: http://www.w3.org/TR/CSS2/selector.html#pseudo-elements