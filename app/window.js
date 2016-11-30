'use strict';
var View = null;    //  element of webview
var Urlin = null;   //  element of input text

window.addEventListener( 'load', function() {
    View = document.getElementById('view');
    Urlin = document.getElementById('urlin');
    Urlin.value = 'https://translate.google.com/';
    View.setAttribute('src',
        'data:text/html,<h1>Hello World!</h1> \
        <p>Please enter only <b>reliable</b> URLs.</p> \
        <p>Electron <script>document.write(process.versions.electron)</script></p>');
}, false);

function KeyPressed(key) {
    if( key!=13) return;
    Urlin.blur();
    View.setAttribute('src', Urlin.value );
//    View.loadURL(Urlin.value);
}
