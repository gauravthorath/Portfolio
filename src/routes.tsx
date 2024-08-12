import React from "react";
import {
  RouterProvider,
  createRouter,
  createRoute,
  createRootRoute,
} from "@tanstack/react-router";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Create the root route
const rootRoute = createRootRoute({
  notFoundComponent: NotFound,
});

// Create the individual routes
const routes = [
  createRoute({
    getParentRoute: () => rootRoute,
    path: "Portfolio/",
    component: Home,
  }),
  createRoute({
    getParentRoute: () => rootRoute,
    path: "Portfolio/About",
    component: About,
  }),
  createRoute({
    getParentRoute: () => rootRoute,
    path: "Portfolio/Projects",
    component: Projects,
  }),
  createRoute({
    getParentRoute: () => rootRoute,
    path: "Portfolio/Contact",
    component: Contact,
  }),
];

// Create the router with the route tree - used to show not url found page
const catchAllRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "*", // Catch-all route
  component: NotFound,
});

const router = createRouter({
  routeTree: rootRoute.addChildren([...routes, catchAllRoute]),
});

const Routes: React.FC = () => <RouterProvider router={router} />;

export default Routes;
