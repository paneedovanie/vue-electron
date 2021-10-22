const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("ipc", {
  send: (channel, args) => {
    ipcRenderer.send(channel, args);
  },
  on: (channel, func) => {
    console.log();
    ipcRenderer.on(channel, (event, args) => {
      func(args);
    });
  },
});
