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

// Create the root route
const rootRoute = createRootRoute();

// Create the individual routes
const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about", // Added leading slash
  component: About,
});

const projectsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/projects",
  component: Projects,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: Contact,
});

// Create the router with the route tree
const router = createRouter({
  routeTree: rootRoute.addChildren([
    homeRoute,
    aboutRoute,
    projectsRoute,
    contactRoute,
  ]),
});

const Routes: React.FC = () => <RouterProvider router={router} />;

export default Routes;
