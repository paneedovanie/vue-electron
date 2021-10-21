import { ipcMain } from "electron";

export default (controllers) => {
  Object.keys(controllers).forEach(async controllerName => {
    const
      ControllerObject = new controllers[controllerName],
      functions = Object.getOwnPropertyNames(ControllerObject.__proto__)

    functions.forEach(fn => {
      if (fn === 'constructor') return
      ipcMain.on(`${controllerName}@${fn}`, async (event, arg) => {
        const result = await ControllerObject[fn](arg)
        event.reply(`${controllerName}@${fn}`, result)
      })
    })
  });
}