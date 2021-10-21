module.exports = () => {
  let controllers = {
    'user.controller': require("../core/modules/users/controllers/user.controller")
  }

  return controllers;
};
