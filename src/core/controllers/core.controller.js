const joi = require("joi"),
  {
    validationError,
    formatValidationError,
  } = require(`../../helpers/error.helper`);

module.exports = class {
  constructor() {
    this.service = null;
    this.availMethods = [];
  }

  async response(fun) {
    try {
      return {
        status: "success",
        data: {
          data: await fun(),
        },
      };
    } catch (error) {
      return {
        status: "failed",
        error: {
          name: error.name,
          message: error.message,
          details: error.details,
        },
      };
    }
  }

  async validate(data, id = null) {
    try {
      await joi
        .object(this.rules(joi))
        .custom(this.customRules.bind(this, data, id, validationError))
        .options({ abortEarly: false })
        .validateAsync(data);
    } catch (err) {
      if (err._original) formatValidationError(err);
      validationError(err.message, err.details);
    }
  }

  rules(v) {
    return {};
  }

  customRules() {}
};
