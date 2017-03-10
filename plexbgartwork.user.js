// ==UserScript==
// @name         Fix Plex Web Background Art
// @version      0.1
// @author       Benjamin Uzelac
// @match        *://app.plex.tv/*
// @include     /^http(s)?:\/\/(.*):32400\//
// @grant        GM_addStyle
// @grant        GM_getResourceText
// @resource     plexBgCss plexbgartwork.css?v=833f40
// @downloadURL https://github.com/uzegonemad/plexbgartwork/plexbgartwork.user.js
// @updateURL https://github.com/uzegonemad/plexbgartwork/plexbgartwork.user.js
// ==/UserScript==

var newCSS = GM_getResourceText("plexBgCss");
GM_addStyle(newCSS);
