const CoreController = require("./core.controller");

module.exports = class extends CoreController {
  constructor() {
    super();
  }

  async index() {
    return this.response(async () => {
      return await this.service.index();
    });
  }

  async create(data) {
    return this.response(async () => {
      await this.validate(data);

      return await this.service.create(data);
    });
  }
};
