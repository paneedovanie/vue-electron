const { ipcMain } = require("electron");

module.exports = (controllers) => {
  Object.keys(controllers).forEach(async (controllerName) => {
    const ControllerObject = new controllers[controllerName]();

    ControllerObject.availMethods.forEach((fn) => {
      if (fn === "constructor") return;
      ipcMain.on(`${controllerName}@${fn}`, async (event, arg) => {
        const result = await ControllerObject[fn](arg);
        event.reply(`${controllerName}@${fn}`, result);
      });
    });
  });

  console.log(ipcMain.eventNames());
};
