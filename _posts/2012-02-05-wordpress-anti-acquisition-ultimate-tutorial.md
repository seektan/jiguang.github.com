---
author: jiguang
title: Wordpress防采集的几种方法
excerpt:
layout: post
category:
  - Wordpress
  - 奇技淫巧

tags:
  - 教程
post_format: [ ]
---
*小提示：本文提供的方法只能一定程度上防止通过feed采集的程序，对于直接采集文章页面的程序没有作用。*

相信经常写博客的人都知道采集是怎么回事，网上有很多免费的或者付费的各种采集程序，可以采集文章、图片、下载内容等等，甚至还有各种明目张胆的小偷程序。做这种网站的目的很明显，就是不劳而获，通过采集文章，经过一定的[伪原创][1]处理将内容二次发布。其实现在很多门户网站也会这么做，只不多很多时候是靠人工的将文章“编译”一下，就作为原创了。

那么，对于那些坚持产出原创文章的博主，应该怎样防止被采集呢？ 目前大部分的博客都是通过[WordPress][2]建立的，而Wordpress本身就可以安装各种采集插件（这里就不做介绍了），因而就有很多人直接用Wordpress来做采集站。当然，也有用其它博客程序或者[CMS][3]程序来做采集站的。 不过，一般的采集站都是以订阅feed为基础的，那么通过对feed进行一定的处理，就可以在某种程度上防止被采集程序强暴。

网上已经有一些Wordpress的防采集插件，有判断User-Agent的，有增加干扰文字的，这里就不做讨论了，有兴趣的同学可以[搜一搜][4]。这里有一篇[水煮鱼的文章][5]，年代久远了，不知是否还可用。

下面主要介绍几种对feed的处理办法：

**将博客的feed设置只显示摘要，并增加“阅读全文”链接**

通过这样的方法，采集程序只能采集到摘要部分，并含有“阅读全文”的链接。但是对于普通的订阅者，也只能看到这些了，那么这会不会造成不便呢？其实，让访问者打开你的网站阅读文章是可以提升用户体验的，你自己的排版设计等在阅读器中不一定能很好的展现，[笔者][6]就习惯在订阅器中看到好的文章时直接转到网站继续阅读。

**具体做法：**

1. 在Wordpress面板中，选择Settings（设置）- Reading Settings（阅读设置），选择下图中所示位置的 Summary（摘要），然后点击 Save Changes即可（中文版Wordpress可参照对应位置进行操作）：

[![][8]][8]

图1：将feed输出设置成只显示摘要

2. 在feed中加入”阅读全文“链接，找到你的模版文件中的functions.php，在<?php 和 ?> 之间添加以下代码：

    /* RSS 中添加查看全文链接 @44ux.com */
    function feed_read_more($content) {
        return $content . '<p><a rel="bookmark" href="'.get_permalink().'" target="_blank">阅读全文</a></p>';
    }
    add_filter ('the_excerpt_rss', 'feed_read_more');

保存后上传到服务器，覆盖原来的文件即可，这样在feed中就会显示”阅读全文“链接了。其实通过这种方式可以向feed中增添很多信息，甚至可以将Google Adsense的广告放进去，不过要小心，这样可能会引起订阅者的反感。

3. 还可以在feed中增添版权信息，让你的版权更加突出。同样是在functions.php中，增添以下代码（将版权信息改成你自己的）即可：

    /* RSS 中添加版权信息 @44ux.com */
    function feed_copyright($content) {
         if(is_single() or is_feed()) {
              $content.= "<p class='copyright'>";
              $content.= '版权所有：<a title="Hi.[laser][8]! @44ux.com" href="http://jiguang.github.com/">Hi,laser! @44ux.com</a> <a rel="bookmark" title="'.get_the_title().'" href="'.get_permalink().'">《'.get_the_title().'》</a><br />';
              $content.= '本文链接：<a rel="bookmark" title="'.get_the_title().'" href="'.get_permalink().'">'.get_permalink().'</a><br />';
              $content.= '特别声明：除特别标注，本站文章均为原创，遵循<a href="http://creativecommons.org/licenses/by-nc/3.0/deed.zh_HK" target="_blank">CC BY-NC 3.0</a>，转载请注明出处';
              $content.= "</p><br />";
         }
         return $content;
    }
    //add_filter ('the_content', 'feed_copyright'); //此句可像文章内容中添加版权
    add_filter ('the_excerpt_rss', 'feed_copyright');

另外，顺便提一下，还有一些防止采集的方法，都各有利弊，这里简单列一下：

1、限制IP地址单位时间的访问次数

2、屏蔽ip

3、利用js加密网页内容

4、网页里隐藏网站版权或者一些随机垃圾文字，这些文字样式写在css中

5、用户登录才能访问网站内容

6、利用脚本语言做分页(隐藏分页)

7、防盗链措施(只允许通过本站页面连接查看，如：Request.ServerVariables(“HTTP_REFERER“)

8、全flash、图片或者pdf来呈现网站内容

9、网站随机采用不同模版

10、采用动态不规则的html标签

关于这几种方法，网上有[相关文章][9]详细讲解，这里不再赘述。

PS：关于采集一事要从两面来看，坚持产出原创文章确实很辛苦，但被人采集也说明文章还不错，我们只求能够拥有一个署名权而已。对于做垃圾站的人，也希望能够稍微保留一些原作者的权益。而对于专心经营博客的人来说，如果你不尊重别人文章的版权，如何能让别人来尊重你的呢？想要建立长久的影响的话，还是坚持原创吧。

 [1]: http://baike.baidu.com/view/2064849.htm
 [2]: http://wordpress.org/
 [3]: http://baike.baidu.com/view/15867.htm
 [4]: http://www.google.com.hk/search?sourceid=chrome&ie=UTF-8&q=wordpress%E9%98%B2%E9%87%87%E9%9B%86%E6%8F%92%E4%BB%B6
 [5]: http://fairyfish.net/2007/04/24/antileech/
 [6]: http://jiguang.github.com "笔者"
 []: http://44ux.com/wp-content/uploads/2012/02/summary.png
 [8]: http://jiguang.github.com "姬光"
 [9]: http://bbs.dedecms.com/196185.html