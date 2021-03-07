const DEFAULT_HEIGHT = 600
const DEFAULT_WIDTH = 1024
const MIN_HEIGHT = 600
const MIN_WIDTH = 900

const {app, BrowserWindow } = require('electron')

const createWin = () => {
  const win = new BrowserWindow({
    width: DEFAULT_WIDTH,
    icon: __dirname + '/icon.ico',
    height: DEFAULT_HEIGHT,
    minHeight: MIN_HEIGHT,
    minWidth: MIN_WIDTH,
    titleBarStyle: "hiddenInset",
    webPreferences: {
      nodeIntegration: true,
      plugins: true,
    }
  })
  win.removeMenu()
  win.loadURL('URL_FOR_SERVER')
}

// Loading window
app.whenReady().then(createWin)

// Close Window
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0){
    createWin()
  }
})
