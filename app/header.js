'use strict';
//  Disable eval and Buffer.
window.eval = global.eval = global.Buffer = function() {
    throw new Error("Can't use eval and Buffer.");
}

const Electron = require('electron')
const IpcRenderer = Electron.ipcRenderer;
var Urlin = null;   //  element of input text

window.addEventListener('load', ()=> {
    Urlin = document.getElementById('input-url');
    Urlin.addEventListener("keypress", (event)=>{
        if(13!=event.keyCode) return;
        Urlin.blur();
        IpcRenderer.sendToHost('url-input', Urlin.value);
    }, false);
}, false);

IpcRenderer.on('url-input', (event, s_url)=>{
    Urlin.value = s_url;
});
