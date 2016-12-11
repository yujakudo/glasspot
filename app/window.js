'use strict';
window.eval = global.eval = function() {
    throw new Error("Can't use eval().");
}

var HeaderFrame = null; //  element of header frame
var View = null;    //  element of webview

window.addEventListener('load', ()=> {
    HeaderFrame = document.getElementById('header-frame');
    HeaderFrame.preload = 'header.js';
    HeaderFrame.src = 'header.html';
    HeaderFrame.addEventListener( 'did-finish-load', Initialize, false );
}, false);

function Initialize() {
    View = document.getElementById('view');
    View.setAttribute('src',
        'data:text/html,<h1>Hello World!</h1> \
        <p>Please enter only <b>reliable</b> URLs.</p> \
        <p>Electron <script>document.write(process.versions.electron)</script></p>');
//    HeaderFrame.openDevTools();
    HeaderFrame.addEventListener('ipc-message', (event) => {
        if('url-input'===event.channel) {
            View.setAttribute('src', event.args[0]);
        }
    });
    HeaderFrame.send('url-input', 'https://translate.google.com');
}