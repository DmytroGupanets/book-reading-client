import { lazy } from "react";

export const mainRoutes = [
  {
    name: "home",
    path: "/",
    exact: true,
    component: lazy(() => import("../pages/homePage/HomePage")),
    isPrivat: true,
    restricted: true,
  },
  {
    name: "auth",
    path: "/auth",
    exact: true,
    component: lazy(() => import("../pages/authPage/AuthPage")),
    isPrivat: false,
    restricted: true,
  },
  {
    name: "login",
    path: "/auth/login",
    exact: true,
    component: lazy(() => import("../pages/authPage/AuthPage")),
    isPrivat: false,
    restricted: true,
  },
  {
    name: "registration",
    path: "/auth/register",
    exact: true,
    component: lazy(() => import("../pages/authPage/AuthPage")),
    isPrivat: false,
    restricted: true,
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
