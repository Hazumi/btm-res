let html = document.querySelectorAll('div.BTMPnl > h1')[0];
let scripts = document.querySelectorAll('div.BTMPnl > h1')[1];
let htmlPos = html.offsetTop;
let scriptsPos = scripts.offsetTop - 20;

document.onkeydown = function (event) {
    event = (event || window.event);
    if (event.keyCode === 49 && event.altKey) {
        htmlPos = html.offsetTop;
        document.documentElement.scrollTop = htmlPos;
        return false;
    } else if (event.keyCode === 50 && event.altKey) {
        scriptsPos = scripts.offsetTop - 20;
        document.documentElement.scrollTop = scriptsPos;
    }
}
