---
layout: post
title: "Insert iframe into Markdown"
description: "在 Markdown 中插入 iframe"
category:
  - html-css
tags: [Markdown]
---
{% include JB/setup %} 

[Markdown][1] 是一种非常简洁的标记语言，目前已经非常流行，并且获得了许多大网站的支持。关于 Markdown 的简介，可以查看[这篇文章][2]，网上也有很多教程，这里不再赘述。

Markdown 虽然很简洁，但也有一些小瑕疵，比如不支持 "target='_blank'" 的链接等，不过这些都可以用原生的 html 来解决，因为 Markdown 中可以直接嵌入 html。

Markdown 中解析 html 相对比较严格，如果不合规矩就可能会遇到问题。

例如我们要在 Markdown 格式的文章中插入 [SlideShare][3] 中的 PPT， SlideShare 网站给出的代码如下：

{% highlight html linenos %}
<iframe src="http://www.slideshare.net/slideshow/embed_code/8911052" width="427" height="356" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC;border-width:1px 1px 0;margin-bottom:5px" allowfullscreen> </iframe> <div style="margin-bottom:5px"> <strong> <a href="http://www.slideshare.net/jiguang/javascript-8911052" title="Javascript正则表达式" target="_blank">Javascript正则表达式</a> </strong> from <strong><a href="http://www.slideshare.net/jiguang" target="_blank">ji guang</a></strong> </div>
{% endhighlight %}

这段内容发布之后就会出现解析错误：

{% highlight html linenos %}
REXML could not parse this XML/HTML:
<iframe src="http://www.slideshare.net/slideshow/embed_code/8911052" width="427" height="356" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC;border-width:1px 1px 0;margin-bottom:5px" allowfullscreen> </iframe> <div style="margin-bottom:5px"> <strong> <a href="http://www.slideshare.net/jiguang/javascript-8911052" title="Javascript正则表达式" target="_blank">Javascript正则表达式</a> </strong> from <strong><a href="http://www.slideshare.net/jiguang" target="_blank">ji guang</a></strong> </div>
{% endhighlight %}

那么解决办法就是，让代码符合 XHTML 的规范，即将代码中的 allowfullscreen 属性修改为：

{% highlight html linenos %}
allowfullscreen="allowfullscreen"
{% endhighlight %}

即可。同样，如果要嵌入其他网站的代码，比如 Youtube 等，也会有类似的问题，解决办法相同。

[1]: http://en.wikipedia.org/wiki/Markdown
[2]: http://ued.taobao.com/blog/2012/07/03/getting-started-with-markdown/
[3]: http://www.slideshare.net


