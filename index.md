---
layout: page
title: A New Start!
tagline: My blog has been changed to Github Page
---
{% include JB/setup %}

## 博客文章已全部迁移到 Github Page

更快的访问速度，更稳定的服务，源代码管理，像Geek一样写博客！

## Recent Posts

<ul class="posts">
  {% for post in site.posts limit:5 %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>

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
</ul>


