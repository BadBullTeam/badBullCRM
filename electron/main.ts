import { app, BrowserWindow, Notification, ipcRenderer } from 'electron'

class AppEvents{
  showNotification (title : string, body : string) {
      new Notification({ title: title, body: body }).show()
  }
}


app.whenReady().then(() => {
  new BrowserWindow({
    width: 1024,
    height: 768,
    minWidth: 800,
    minHeight: 600
  }).loadURL(process.env.VITE_DEV_SERVER_URL)
})

export default new AppEvents();