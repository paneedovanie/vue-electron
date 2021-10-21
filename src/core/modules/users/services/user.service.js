module.exports = class {
  constructor() {
    this.model = require("../models/User");
  }

  index() {
    return this.model.findAll()
  }
};
