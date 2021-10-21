const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld(
  'ipc',
  {
    send: (channel, data) => {
      ipcRenderer.send(channel, data);
    },
    on: (channel, data) => {
      // Strip event as it includes `sender` and is a security risk
      ipcRenderer.on(channel, data);
    },
  },
);