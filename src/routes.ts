import React, { ReactElement } from "react";

const Home = React.lazy(() => import("Home"));
const About = React.lazy(() => import("About"));

interface RouteObject {
  path: string;
  exact?: boolean;
  pathName: string;
  icon: string;
  component: React.LazyExoticComponent<() => ReactElement>;
}

export const routes: RouteObject[] = [
  {
    path: "/",
    exact: true,
    pathName: "HOME",
    icon: "Icon",
    component: Home
  },
  {
    path: "/rooms",
    exact: true,
    icon: "Icon",
    pathName: "ROOM_MANAGEMENT",
    component: About
  },
  {
    path: "/about",
    exact: true,
    icon: "Icon",
    pathName: "ABOUT",
    component: About
  }
];
