---
layout: page
title: Hello cruel world!
tagline: Life is like a box of chocolates, you never know what you're gonna get.
---
{% include JB/setup %}

## What's new?

博客文章已全部迁移到 <a href="http://pages.github.com/" target="_blank" title="Github Pages">Github Pages</a>，拥有更快的访问速度，更稳定的服务，以及版本控制等功能。

## Recent Articles

<ul class="posts">
  {% for post in site.posts limit:10 %}
    <li><h3><a class="tit" href="{{ BASE_PATH }}{{ post.url }}" target="_blank">{{ post.title }}</a></h3> -- <span class="post-sub">{{ post.date | date_to_string }}</span>
        <p class="abstract"><a href="{{ BASE_PATH }}{{ post.url }}"  target="_blank" title="Read more...">{{ post.content | strip_html | truncatewords:50 }}</a></p>
    </li>
  {% endfor %}
</ul>

## Recomend Articles

<ul class="posts">
    <li><a href="/JavaScript/2012/08/21/ember-js-doc-cn/" target="_blank">Ember.js 中文文档</a> -- <span class="post-sub">官方文档中文版</span></li>
    <li><a href="/JavaScript/2012/05/16/basic-javascript-coding-pattern/" target="_blank">JavaScript基本编码模式</a> -- <span class="post-sub">JavaScript编码中的一些基本技巧，仅供参考</span></li>
    <li><a href="/html-css/2012/05/03/high-efficient-css-technical/" target="_blank">高效CSS开发核心要点</a> -- <span class="post-sub">CSS编码中的一些基本技巧，根据 Google规范整理</span></li>
    <li><a href="/DevTools/2012/01/21/git-the-simple-guide/" target="_blank">Git超简洁教程</a> -- <span class="post-sub">简明易懂的Git教程</span></li>
    <li><a href="/LifeStyle/2012/03/26/how-can-you-program-if-youre-blind/" target="_blank">盲人程序员的编程生涯</a> -- <span class="post-sub">看看盲人程序员是如何工作的</span></li>
</ul>

## Tag Cloud

<ul class="tag_box inline">
  {% assign tags_list = site.tags %}
  {% include JB/tags_list %}
</ul>

## Recomend Books

<div class="rec-book">
<a target="_blank" href="http://union.dangdang.com/transfer.php?sys_id=1&ad_type=10&from=P-267863&backurl=http%3A%2F%2Fproduct.dangdang.com%2Fproduct.aspx%3Fproduct_id%3D22785480">《精彩绝伦的CSS》</a>

<a target="_blank" href="http://union.dangdang.com/transfer.php?sys_id=1&ad_type=10&from=P-267863&backurl=http%3A%2F%2Fproduct.dangdang.com%2Fproduct.aspx%3Fproduct_id%3D22628333">《JavaScript高级程序设计》</a>

<a target="_blank" href="http://union.dangdang.com/transfer.php?sys_id=1&ad_type=10&from=P-267863&backurl=http%3A%2F%2Fproduct.dangdang.com%2Fproduct.aspx%3Fproduct_id%3D22722790">《JavaScript权威指南》</a>
</div>

## Subscribe

<div class="feed">
<!-- Feedsky FEED发布代码开始 -->
<!-- FEED自动发现标记开始 -->
<link title="RSS 2.0" type="application/rss+xml" href="http://feed.44ux.com" rel="alternate" />
<!-- FEED自动发现标记结束 -->
<a href="http://www.zhuaxia.com/add_channel.php?url=http://feed.44ux.com" target="_blank"><img border="0" src="http://img.feedsky.com/images/icon_subshot02_zhuaxia.gif" alt="&#25235;&#34430;" vspace="2" style="margin-bottom:3px" ></a>
<a href="http://fusion.google.com/add?feedurl=http://feed.44ux.com" target="_blank"><img border="0" src="http://img.feedsky.com/images/icon_subshot02_google.gif" alt="google reader" vspace="2" style="margin-bottom:3px" ></a>
<a href="http://www.xianguo.com/subscribe.php?url=http://feed.44ux.com" target="_blank"><img border="0" src="http://img.feedsky.com/images/icon_subshot02_xianguo.gif" alt="&#40092;&#26524;" vspace="2" style="margin-bottom:3px" ></a>
<a href="http://inezha.com/add?url=http://feed.44ux.com" target="_blank"><img border="0" src="http://img.feedsky.com/images/icon_subshot02_nazha.gif" alt="&#21738;&#21522;" vspace="2" style="margin-bottom:3px" ></a>
<a href="http://reader.youdao.com/b.do?keyfrom=feedsky&url=http://feed.44ux.com" target="_blank"><img border="0" src="http://img.feedsky.com/images/icon_subshot02_youdao.gif" alt="&#26377;&#36947;" vspace="2" style="margin-bottom:3px" ></a>
<a href="http://mail.qq.com/cgi-bin/feed?u=http://feed.44ux.com" target="_blank"><img border="0" src="http://img.feedsky.com/images/icon_subshot02_qq.gif" alt="QQ&#37038;&#31665;" vspace="2" style="margin-bottom:3px" ></a>
<a href="http://9.douban.com/reader/subscribe?url=http://feed.44ux.com" target="_blank"><img border="0" src="http://img.feedsky.com/images/icon_subshot02_douban.gif" alt="&#20061;&#28857;" vspace="2" style="margin-bottom:3px" ></a>
<!-- Feedsky FEED发布代码结束 -->
</div>

## About & Contact

<div class="contact">
About me: 姬光/男/80后/前端开发/小白 <br>
Find me at:
<a href="http://weibo.com/jiguang1984" title="新浪微博" target="_blank">新浪微博</a> or
<a href="http://t.qq.com/jiguang1984" title="腾讯微博" target="_blank">腾讯微博</a> or
<a href="mailto:jiguang1984@gmail.com" title="Email Me">Email:jiguang1984#gmail.com</a>
, If you're lucky, QQ me: <a target="_blank" href="http://sighttp.qq.com/authd?IDKEY=f8942300d9c8ce7cad4b929faeccf20eb6fc117ed5edb2a8"><img border="0"  src="http://wpa.qq.com/imgd?IDKEY=f8942300d9c8ce7cad4b929faeccf20eb6fc117ed5edb2a8&pic=41" alt="点击这里给我发消息" title="点击这里给我发消息" style="vertical-align:-5px;"></a>
</div>

## Friends Links

<ul class="friends-links">
    <li><a href="http://xiedexu.cn/" target="_blank">DeXu.Xie's Blog</a></li>
    <li><a href="http://www.feelcss.com/" target="_blank">Hey@feelcss</a></li>
    <li><a href="http://www.36ria.com/" target="_blank">ria之家</a></li>
    <li><a href="http://vivienchen.me/" target="_blank">Vivien's blog</a></li>
    <li><a href="http://js8.in/" target="_blank">三水清</a></li>
    <li><a href="http://www.cn-cuckoo.com/" target="_blank">为之漫笔</a></li>
    <li><a href="http://yundanran.com/" target="_blank">云淡然</a></li>
    <li><a href="http://www.w3cfuns.com/" target="_blank">前端开发网</a></li>
    <li><a href="http://yekai.net/" target="_blank">叶落花开</a></li>
    <li><a href="http://hi.baidu.com/vickeychen/home" target="_blank">小鸽子</a></li>
    <li><a href="http://gtalks.net/" target="_blank">极客说</a></li>
    <li><a href="http://isnowe.com/" target="_blank">爱斯诺</a></li>
    <li><a href="http://lison.sinaapp.com/" target="_blank">阿伦的技术博客</a></li>
    <li><a href="http://www.wheattime.com/" target="_blank">麦时</a></li>
    <li><a href="http://www.92app.com/" target="_blank">爱佳软</a></li>
</ul>


