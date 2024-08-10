import React from 'react';
import { RouterProvider, Route, RootRoute, createRouter } from '@tanstack/react-router';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

// Create the root route
const rootRoute = new RootRoute();

// Create the individual routes
const homeRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
});

const aboutRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: About,
});

const projectsRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/projects',
  component: Projects,
});

const contactRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/contact',
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

const Routes: React.FC = () => (
  <RouterProvider router={router} />
);

export default Routes;
