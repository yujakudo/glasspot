'use strict';

var HeaderFrame = null; //  element of header frame
var View = null;    //  element of webview
var Urlin = null;   //  element of input text

window.addEventListener('load', ()=> {
    HeaderFrame = document.getElementById('header-frame');
    HeaderFrame.src = 'header.html';
    HeaderFrame.addEventListener('load', Initialize, false);
}, false);

function Initialize() {
    View = document.getElementById('view');
    Urlin = HeaderFrame.contentDocument.getElementById('input-url');
    Urlin.value = 'https://translate.google.com/';
    View.setAttribute('src',
        'data:text/html,<h1>Hello World!</h1> \
        <p>Please enter only <b>reliable</b> URLs.</p> \
        <p>Electron <script>document.write(process.versions.electron)</script></p>');

    Urlin.addEventListener("keypress", (event)=>{
        KeyPressed(event.keyCode);
    }, false);
}

function KeyPressed(key) {
    if( key!=13) return;
    Urlin.blur();
    View.setAttribute('src', Urlin.value );
}
