'use strict';

const Electron = require('electron');
const App = Electron.app;
const BrowserWindow = Electron.BrowserWindow;

var MainWin = null;

function CreateWindow () {
    MainWin = new BrowserWindow({
        width: 800,
        height: 600
    });
    MainWin.setMenu(null);
    MainWin.loadURL( 'file://' + __dirname + '/window.html');
    MainWin.webContents.openDevTools();

    MainWin.on('closed', ()=> {
        MainWin = null;
    });
}

App.on('ready', CreateWindow);

App.on('window-all-closed', ()=> {
    if (process.platform !== 'darwin') {
        App.quit();
    }
});

App.on('activate', ()=> {
    if (MainWin === null) {
        CreateWindow();
    }
});
