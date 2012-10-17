---
layout: post
title: "understand the browser mode"
description: ""
category:
  - html-css
  - DevTools
published: false
tags: []
---
{% include JB/setup %}

想必你一定知道浏览器有个标准（Standards）模式和一个怪异（Quirks）模式，或许你还听说过有个“几乎标准（Almost Standards）”的模式。当你打开心爱的Internet Explorer 的时候，又看到了什么浏览器模式、文档模式，还有什么兼容性视图，这些都是个啥啊？啥是浏览器模式，啥是文档模式？标准模式和几乎标准的模式有啥区别？IE9兼容性视图和真正的IE9有啥区别？什么情况下会触发这些模式，我又怎么才能检测到浏览器当前处于哪种模式中呢？本文将详细为你解答这些疑问。

首先我们要知道，为什么会有这么多模式。这是历史遗留问题，在[浏览器大战][1]时期，网景浏览器（Netscape Navigator）和微软的IE浏览器（Microsoft Internet Explorer）对网页分别有不同的实现方式，那个时候的网页要针对这两种浏览器分别开发不同的版本。而到了 W3C 制定标准之后，这些浏览器就不能继续使用这种页面，因而会导致大部分现有站点都不能使用。基于这个原因，浏览器才引入两种模式来处理一些遗留的站点。

实际上现在的浏览器布局引擎支持三种模式：怪异（Quirks）模式、几乎标准（Almost Standards）和标准（Standards）模式。在怪异模式中，布局引擎会模拟网景4和Windows中的IE5的行为；在完全标准的模式中，会尽量执行 HTML 和 CSS 规范所指定的行为；在几乎标准的模式中，只包含很少的一部分怪异模式中的行为。

那么所谓标准模式，就一定都“标准”吗？答案当然是否定的，因为各个浏览器厂商实现标准的阶段不同，所以各个浏览器的“标准模式”之间也会有很大的不同。

既然标准模式都不那么标准，那么几乎标准的模式，肯定就更不标准了。[最初的几乎标准模式][2]只会影响表格中的图像，而后来各个浏览器又或多或少地进行了修改，比如表单元素的样式等。

[1]: http://en.wikipedia.org/wiki/Browser_wars
[2]: http://meyerweb.com/eric/thoughts/2008/01/24/almost-target/
