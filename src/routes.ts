import React, { ReactElement } from "react";

const Home = React.lazy(() => import("Home"));
const About = React.lazy(() => import("About"));

interface RouteObject {
  path: string;
  exact?: boolean;
  pathName: string;
  component: React.LazyExoticComponent<() => ReactElement>;
}

export const routes: RouteObject[] = [
  {
    path: "/",
    exact: true,
    pathName: "HOME",
    component: Home
  },
  {
    path: "/about",
    exact: true,
    pathName: "ABOUT",
    component: About
  }
];
