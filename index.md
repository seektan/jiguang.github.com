---
layout: page
title: Welcome!
tagline: Front-end Development / HTML(5) / CSS(3) / JavaScript / NodeJs
---
{% include JB/setup %}

## What's new?

博客文章已全部迁移到 Github Pages，拥有更快的访问速度，更稳定的服务，源代码管理，像Geek一样写博客！

## Recomend Articles

<ul class="posts">
    <li><a href="/JavaScript/2012/08/21/ember-js-doc-cn.html">Ember.js 中文文档</a></li>
    <li><a href="/JavaScript/2012/05/16/basic-javascript-coding-pattern.html">JavaScript基本编码模式</a></li>
    <li><a href="/html-css/Tricks/2012/05/03/high-efficient-css-technical.html">高效CSS开发核心要点</a></li>
    <li><a href="/DevTools/2012/01/21/git-the-simple-guide.html">Git超简洁教程</a></li>
    <li><a href="/LifeStyle/2012/03/26/how-can-you-program-if-youre-blind.html">盲人程序员的编程生涯</a></li>
</ul>

## Recent Articles

<ul class="posts">
  {% for post in site.posts limit:10 %}
    <li><a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a> -- <span class="post-date">{{ post.date | date_to_string }}</span></li>
  {% endfor %}
</ul>

## Recomend Books

<a target="_blank" href="http://union.dangdang.com/transfer.php?sys_id=1&ad_type=10&from=P-267863&backurl=http%3A%2F%2Fproduct.dangdang.com%2Fproduct.aspx%3Fproduct_id%3D22785480">《精彩绝伦的CSS》</a>

## Friend Links

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


