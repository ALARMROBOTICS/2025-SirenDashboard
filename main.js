const { app, BrowserWindow } = require('electron')
const path = require('node:path')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
        preload: path.join(__dirname, 'preload.js')
      }
  })

  win.loadFile('index.html')
  win.webContents.openDevTools(); // Opens the Developer Tools
  //let x = win.webContents.getElementById('myButton1');
}

app.whenReady().then(() => {
  createWindow()
})