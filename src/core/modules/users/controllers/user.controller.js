const
  UserService = require("../services/user.service"),
  CrudController = require("../../../controllers/crud.controller")

module.exports = class extends CrudController {
  constructor() {
    super()
    this.service = new UserService;
  }
};
