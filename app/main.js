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
    //  MainWin.webContents.openDevTools();

    MainWin.on('closed', function() {
        MainWin = null;
    });
}

App.on('ready', CreateWindow);

App.on('window-all-closed', function() {
    if (process.platform !== 'darwin') {
        App.quit();
    }
});

App.on('activate', function() {
    if (MainWin === null) {
        CreateWindow();
    }
});
