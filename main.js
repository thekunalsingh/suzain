const { app, BrowserWindow } = require('electron');
const url = require('url');

let win = null

function boot() {
    win = new BrowserWindow({
        width: 1000,
        height: 500,
        frame: false

    })
    win.loadURL(`file://${__dirname}/index.html`)
    win.on('closed', () => {
        win = null
    })
}

app.on('ready', boot);