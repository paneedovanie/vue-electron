const UserService = require("../services/user.service"),
  CrudController = require("../../../controllers/crud.controller");

module.exports = class extends CrudController {
  constructor() {
    super();
    this.service = new UserService();
    this.availMethods = ["index", "create"];
  }

  rules(v) {
    return {
      image: v.alternatives().try(v.string(), v.object()),
      firstName: v
        .string()
        .required()
        .max(255),
      lastName: v
        .string()
        .required()
        .max(255),
      username: v
        .string()
        .required()
        .min(6)
        .max(255),
      email: v
        .string()
        .required()
        .email()
        .max(255),
      password: v
        .string()
        .required()
        .min(6)
        .max(255),
      // metadata: v.object(),
    };
  }
};
