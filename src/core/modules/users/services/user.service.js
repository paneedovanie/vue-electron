const CrudService = require("../../../services/crud.service");

module.exports = class extends CrudService {
  constructor() {
    super();
    this.model = require("../models/User");
  }
};
