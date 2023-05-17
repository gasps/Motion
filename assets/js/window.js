const { BrowserWindow } = require('electron')

class Window extends BrowserWindow {
  constructor ({ file }) {
    super({
      width: 1280,
      height: 720,
      show: false,
      resizable: false,
      autoHideMenuBar: true,
      titleBarStyle: 'hidden',
      webPreferences: {
        devTools: false,
        nodeIntegration: true,
        contextIsolation: false
      }
    })
    this.loadFile(file)
    this.once('ready-to-show', () => {
      this.show()
    })
  }
}

module.exports = Window