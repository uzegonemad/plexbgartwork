# What is this?
Plex Web 3.0.0 altered the way that artwork is displayed. Many people find this change underwhelming, so this script aims to restore the previous functionality.

# How does it work?
This script uses your web browser to add some styles on top of the Plex web interface. Right now, it will work if you access app.plex.tv or any URL that uses port 32400. (Plex's default port)

**Custom ports are not supported.**

# How to install and use
1. Follow the steps below
2. Refresh Plex
3. Use the toggle atwork button to show/hide the bg art

Note: I've only tested this in Chrome and Firefox but it should work in all of the browsers listed.

## Chrome / Safari / Opera / Edge
1. [Install Tampermonkey](https://tampermonkey.net)
1. [Click here](https://raw.githubusercontent.com/uzegonemad/plexbgartwork/master/plexbgartwork.user.js)

## Firefox
1. [Install Greasemonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/) or [Install Tampermonkey](https://tampermonkey.net)
1. [Click here](https://raw.githubusercontent.com/uzegonemad/plexbgartwork/master/plexbgartwork.user.js)

## Internet Explorer
IE doesn't support userscripts. However you can use a bookmarklet (special URL in your bookmarks) to load the styles. This method only supports app.plex.tv. Unfortunately you have to click this link *every* time you want to load Plex.

Drag [this link](javascript:(window.open("https://app.plex.tv/"),function(){var e=document.createElement("link");e.setAttribute("href","https://github.com/uzegonemad/plexbgartwork/plexbgartwork.css"),e.setAttribute("rel","stylesheet"),e.setAttribute("type","text/css"),document.getElementsByTagName("head")[0].appendChild(e)}());) into your bookmarks bar.

# Examples

## Movies
![Movies](https://raw.githubusercontent.com/uzegonemad/plexbgartwork/master/screenshots/movie.jpg)

## TV
![TV](https://raw.githubusercontent.com/uzegonemad/plexbgartwork/master/screenshots/tv.jpg)

## Music
![TV](https://raw.githubusercontent.com/uzegonemad/plexbgartwork/master/screenshots/music.jpg)
