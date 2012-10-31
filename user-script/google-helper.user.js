// ==UserScript==
// @name        Google Search Helper (& Fuck GFW!)
// @namespace   google
// @description 当你的网络环境只能访问Google首页或者搜索结果页时，可以用该脚本去掉跳转链接，使搜索结果直接链接到目标网页
// @author      jiguang
// @mail        jiguang1984#gmail.com
// @include     http://www.google.com/*
// @include     http://www.google.com.hk/*
// @include     http://www.g.cn/*
// @grant       none
// @version     1.0
// ==/UserScript==

// get all links in search results
var links = document.getElementById('ires').getElementsByTagName('a');

// add target _blank and remove event handler
for(var i = 0, j = links.length; i<j; i++){
    links[i].setAttribute('target', '_blank');  // depends on your need
    links[i].removeAttribute('onmousedown');
}