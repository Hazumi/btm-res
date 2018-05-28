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
    } else if (event.keyCode === 97 && event.altKey) {
        // Alt + NumPad 1 -> Query Tester
        window.open('http://admin.bluetonemedia.com/admin/btmqs/db/', '_blank');
    } else if (event.keyCode === 98 && event.altKey) {
        // Alt + NumPad 2 -> Time Logger
        window.open('http://admin.bluetonemedia.com/admin/btmtime/', '_blank');
    } else if (event.keyCode === 99 && event.altKey) {
        // Alt + NumPad 3 -> Time Report
        window.open('http://admin.bluetonemedia.com/admin/btmtime/select.aspx', '_blank');
    } else if (event.keyCode === 100 && event.altKey) {
        // Alt + NumPad 4 -> Query Tester
        window.open('http://admin.bluetonemedia.com/admin/btmqs/db/', '_blank');
    } else if (event.keyCode === 100 && event.altKey) {
        // Alt + NumPad 5 -> Training Docs
        window.open('http://codes.bluetonemedia.com/docs-home', '_blank');
    } else if (event.keyCode === 101 && event.altKey) {
        // Alt + NumPad 6 -> Teamwork Hours
        window.open('http://todo.mysiteserver.net/teamwork-dev-design', '_blank');
    }

}
