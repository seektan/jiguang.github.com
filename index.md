---
layout: page
title: Life is like an Undefined Fucking Object
tagline: is that an UFO?
---
{% include JB/setup %}

## What's new?

博客文章已全部迁移到 <a href="http://pages.github.com/" target="_blank" title="Github Pages">Github Pages</a>，拥有更快的访问速度，更稳定的服务，以及版本控制等功能。您可以通过[44ux.com](http://www.44ux.com) 和 [jiguang.github.com](http://jiguang.github.com) 访问本站。订阅地址仍然不变：<a href="http://feed.44ux.com" title="feed.44ux.com" target="_blank">feed.44ux.com</a>，欢迎订阅本站 ;)

## Recent Articles

<ul class="posts index_posts">
  {% for post in site.posts limit:10 %}
    <li><h3><a class="tit" href="{{ BASE_PATH }}{{ post.url }}" target="_blank" title="{{ post.title }}">{{ post.title }}</a></h3> -- <span class="post-sub">{{ post.date | date_to_string }}</span> <a class="comment" href="{{ BASE_PATH }}{{ post.url }}#disqus_thread">link</a>
        <p class="abstract">{{ post.content | strip_html | truncatewords:50 }}</p>
        <p class="more"><a href="{{ BASE_PATH }}{{ post.url }}"  target="_blank" title="Read more...">Continue Reading ...</a></p>
    </li>
  {% endfor %}
</ul>

## Tag Cloud

<ul class="tag_box inline">
  {% assign tags_list = site.tags %}
  {% include JB/tags_list %}
</ul>

## Recomend Books

<div class="rec-book">
<a target="_blank" href="http://union.dangdang.com/transfer.php?sys_id=1&ad_type=10&from=P-267863&backurl=http%3A%2F%2Fproduct.dangdang.com%2Fproduct.aspx%3Fproduct_id%3D22785480">精彩绝伦的CSS</a>

<a target="_blank" href="http://union.dangdang.com/transfer.php?sys_id=1&ad_type=10&from=P-267863&backurl=http%3A%2F%2Fproduct.dangdang.com%2Fproduct.aspx%3Fproduct_id%3D22628333">JavaScript高级程序设计</a>

<a target="_blank" href="http://union.dangdang.com/transfer.php?sys_id=1&ad_type=10&from=P-267863&backurl=http%3A%2F%2Fproduct.dangdang.com%2Fproduct.aspx%3Fproduct_id%3D22722790">JavaScript权威指南</a>
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
<p>
<a href="http://weibo.com/u/1541312947?s=6uyXnP" target="_blank"><img border="0" src="http://service.t.sina.com.cn/widget/qmd/1541312947/c6926a93/1.png"/></a> </p>
姬光/男/80后/前端开发/小白 @
<a href="http://weibo.com/jiguang1984" title="新浪微博" target="_blank">新浪微博</a> /
<a href="http://t.qq.com/jiguang1984" title="腾讯微博" target="_blank">腾讯微博</a> /
<a href="mailto:jiguang1984@gmail.com" title="Email Me">EMAIL</a>
, If you're lucky, QQ me:  <a target="_blank" href="http://sighttp.qq.com/authd?IDKEY=f8942300d9c8ce7cad4b929faeccf20eb6fc117ed5edb2a8"><img border="0"  src="http://wpa.qq.com/imgd?IDKEY=f8942300d9c8ce7cad4b929faeccf20eb6fc117ed5edb2a8&pic=41" alt="点击这里给我发消息" title="点击这里给我发消息" style="vertical-align:-5px;"></a>
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
    <li><a href="http://www.feimos.com/" target="_blank">费墨</a></li>
    <li><a href="http://haipi8.com/" target="_blank" title="坤哥">嗨皮吧</a></li>
    <li><a href="http://www.hohoo.me/" target="_blank">豪豪</a></li>
</ul>


