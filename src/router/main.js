let routes = [];

const requireRoute = require.context(
  // The relative path of the components folder
  "@/",
  // Whether or not to look in subfolders
  true,
  // The regular expression used to match base component filenames
  /routes\/main\.js$/
);

requireRoute.keys().forEach((fileName) => {
  const routeConfig = requireRoute(fileName);
  routes = [...routes, ...routeConfig.default];
});

export default {
  path: "/main",
  name: "main",
  redirect: { name: "dashboard" },
  component: () => import("@/App"),
  children: routes,
};
