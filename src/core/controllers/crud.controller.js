const CoreController = require("./core.controller")

module.exports = class extends CoreController {
  constructor() {
    super()
  }

  async index() {
    return this.h.response(async () => {
      return await this.service.index()
    })
  }

  async create(data) {
    return this.h.response(async () => {
      return await this.service.create(data)
    })
  }

  trashed() {
    return 'we'
  }
};
