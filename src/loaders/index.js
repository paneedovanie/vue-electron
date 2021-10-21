import databaseLoader from "./database";
import controllerLoader from "./controller";
import ipcMainLoader from "./ipcMain";

const init = async () => {
  global.db = databaseLoader();

  const controller = await controllerLoader();
  await ipcMainLoader(controller);

  db.sync()
}

init()