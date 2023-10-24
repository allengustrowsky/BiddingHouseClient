const { app, BrowserWindow } = require("electron")
// code in this file heavily adapted from ViolaterZ: https://www.youtube.com/watch?v=yUg2iXb-NCc

const createWindow = () => {
    const window = new BrowserWindow({
        width: 1400,
        height: 900
    })

    window.loadURL("http://localhost:5180/")
}

app.whenReady().then(() => {
    createWindow()
})

app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit
    }
})

