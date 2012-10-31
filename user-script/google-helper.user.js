// ==UserScript==
// @name        google-helper
// @namespace   google
// @description help somebody visit google search results
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