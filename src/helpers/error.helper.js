module.exports.filterJoiErrors = function(object) {
  return object.map((e) => e.message);
};

const validationError = function(message, details) {
  throw new CustomError("ValidationError", message, details);
};

module.exports.validationError = validationError;

module.exports.formatValidationError = function(obj) {
  let newDetails = {};

  obj.details.forEach((item) => {
    newDetails[item.path[0]] = [item.message];
  });
  validationError("Invalid Input", newDetails);
};

class CustomError extends Error {
  constructor(name = "", message = "", details = {}, params) {
    // Pass remaining arguments (including vendor specific ones) to parent constructor
    super(params);

    // Maintains proper stack trace for where our error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CustomError);
    }

    this.name = name;
    this.message = message;
    this.details = details;
    // Custom debugging information
    // this.date = new Date()
  }
}
