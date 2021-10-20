import UserService from "../core/modules/users/services/user.service";

export default () => {
  let services = {
    userservice: new UserService(),
  };
  // const dirs = [`${__root}src/core/modules`, `${__root}src/modules`];

  // for (const dir of dirs) {
  //   const requireService = requireContext(
  //     // The relative path of the routes folder
  //     dir,
  //     // Whether or not to look in subfolders
  //     true,
  //     // The regular expression used to match base route filenames
  //     /\w+\\(services)\\\w+\.(service)\.js$/
  //   );

  //   requireService.keys().forEach((service) => {
  //     const serviceConfig = requireService(service);
  //     serviceConfig.default.forEach((service) => {
  //       services[generateName(service)] = service;
  //     });
  //   });
  // }

  return services;
};

const generateName = (string) => {
  const array = string.split("/");

  return array[array.length - 1];
};
