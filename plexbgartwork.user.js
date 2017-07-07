// ==UserScript==
// @name         Fix Plex Web Background Art
// @version      0.1
// @author       Benjamin Uzelac
// @match        *://app.plex.tv/*
// @include     /^http(s)?:\/\/(.*):32400\//
// @grant        GM_addStyle
// @grant        GM_getResourceText
// @resource     plexBgCss plexbgartwork.css?v=0c724b
// @downloadURL https://raw.githubusercontent.com/uzegonemad/plexbgartwork/master/plexbgartwork.user.js
// @updateURL https://raw.githubusercontent.com/uzegonemad/plexbgartwork/master/plexbgartwork.user.js
// ==/UserScript==

var newCSS = GM_getResourceText("plexBgCss");
GM_addStyle(newCSS);
