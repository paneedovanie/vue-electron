const CoreService = require("./core.service");

module.exports = class extends CoreService {
  constructor() {
    super();
    this.model = null;
  }

  index(data) {
    return this.model.findAll();
  }

  create(data) {
    return this.model.create(data);
  }
};
