import { lazy } from "react";

export const mainRoutes = [
  {
    name: "authorization",
    path: "/",
    exact: true,
    component: lazy(() => import("../pages/authPage/AuthPage")),
    isPrivat: true,
    restricted: false,
  },
  {
    name: "library",
    path: "/library",
    exact: true,
    component: lazy(() => import("../pages/libraryPage/LibraryPage")),
    isPrivat: true,
    restricted: false,
  },
  {
    name: "training",
    path: "/training",
    exact: true,
    component: lazy(() => import("../pages/trainingPage/TrainingPage")),
    isPrivat: true,
    restricted: false,
  },
];
