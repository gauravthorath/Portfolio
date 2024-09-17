import {
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import NavBar from "./components/NavBar";
import { Home } from "@mui/icons-material";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import CV from "./pages/CV";

// Define the root route using NavBar as the layout
const rootRoute = createRootRoute({
  component: NavBar, // NavBar as the root layout component
});

// Define child routes
const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home, // Home page component
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: About, // About page component
});

const projectsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/projects",
  component: Projects, // About page component
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: Contact, // About page component
});

const cvRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/cv",
  component: CV, // About page component
});

// Create the router
const router = createRouter({
  routeTree: rootRoute.addChildren([
    homeRoute,
    aboutRoute,
    projectsRoute,
    contactRoute,
    cvRoute,
  ]),
});

export default router;
