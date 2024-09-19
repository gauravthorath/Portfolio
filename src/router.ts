import {
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import NavBar from "./components/NavBar/NavBar";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Projects from "./pages/Projects/Projects";
import CVPage from "./pages/CV/CV";

// Define the root route using NavBar as the layout
const rootRoute = createRootRoute({
  component: NavBar,
});

// Define child routes
const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/Portfolio/",
  component: About, // Home page component
});

const home2Route = createRoute({
  getParentRoute: () => rootRoute,
  path: "/Portfolio",
  component: About, // Home page component
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/Portfolio/about",
  component: About, // About page component
});

const projectsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/Portfolio/projects",
  component: Projects, // About page component
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/Portfolio/contact",
  component: Contact, // About page component
});

const cvRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/Portfolio/cv",
  component: CVPage, // About page component
});

const anyOtherRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "*",
  component: About, // About page component
});

// Create the router
const router = createRouter({
  routeTree: rootRoute.addChildren([
    homeRoute,
    home2Route,
    aboutRoute,
    projectsRoute,
    contactRoute,
    cvRoute,
    anyOtherRoute,
  ]),
});

export default router;
