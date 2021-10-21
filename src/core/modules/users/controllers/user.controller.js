const
  UserService = require("../services/user.service"),
  { response } = require(`../../../../helpers/controller.helper`)

module.exports = class {
  constructor() {
    this.service = new UserService;
  }

  async index() {
    return response(async () => {
      return await this.service.index()
    })
  }
};
