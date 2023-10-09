import { app, BrowserWindow } from 'electron'

app.whenReady().then(() => {
  new BrowserWindow({
    width: 1024,
    height: 768,
    minWidth: 800,
    minHeight: 600
  }).loadURL('26.226.100.195:3000')
})