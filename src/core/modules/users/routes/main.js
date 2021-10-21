export default [
  {
    path: "users",
    name: "users",
    component: () => import("../Module"),
    redirect: { name: 'users.index' },
    children: [
      {
        path: '',
        name: 'users.index',
        component: () => import("../views/Index")
      }
    ]
  },
];
