const databaseLoader = require("./database"),
  controllerLoader = require("./controller"),
  ipcMainLoader = require("./ipcMain");

const init = async () => {
  global.db = databaseLoader();

  const controller = await controllerLoader();
  await ipcMainLoader(controller);

  db.sync();
};

init();
