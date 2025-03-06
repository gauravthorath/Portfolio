import {
	createRootRoute,
	createRoute,
	createRouter,
} from "@tanstack/react-router";
import NavBar from "./components/NavBar/NavBar";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Projects from "./pages/Projects/Projects";
import Login from "./pages/Login/Login";
import ProtectedRoute from "./components/HOCs/ProtectedRoute";
import Admin from "./pages/Admin/Admin";
// const Admin = React.lazy(() => import("./pages/Admin/Admin"));

// Define Suspense Wrapper Component for lazy loading Admin page
// const SuspenseAdmin = () => (
//   <React.Suspense fallback={<div>Loading...</div>}
//     <Admin />
//   </React.Suspense>
// );

// Define the root route using NavBar as the layout
const rootRoute = createRootRoute({
	component: NavBar,
});

// Define child routes
const routes = [
	createRoute({
		getParentRoute: () => rootRoute,
		path: "/Portfolio/",
		component: About, // landing page component
	}),
	createRoute({
		getParentRoute: () => rootRoute,
		path: "/Portfolio",
		component: About, // landing about component
	}),
	createRoute({
		getParentRoute: () => rootRoute,
		path: "/Portfolio/about",
		component: About, // About page component
	}),
	createRoute({
		getParentRoute: () => rootRoute,
		path: "/Portfolio/projects",
		component: Projects, // Project page component
	}),
	createRoute({
		getParentRoute: () => rootRoute,
		path: "/Portfolio/contact",
		component: Contact, // Contact page component
	}),
	createRoute({
		getParentRoute: () => rootRoute,
		path: "/Portfolio/login",
		component: Login, // login page component
	}),
	createRoute({
		getParentRoute: () => rootRoute,
		path: "/Portfolio/restricted-admin-panel",

		component: () => ProtectedRoute({ component: Admin }), // Render SuspenseAdmin as a component instead of passing it as a reference
	}),
	// Add the catch-all route with the '*' path
	createRoute({
		getParentRoute: () => rootRoute,
		path: "/Portfolio/*", // Catch-all route for unmatched paths
		component: About, // Render About page component (or replace with a custom NotFound page)
	}),
];
// Create the router
const router = createRouter({
	routeTree: rootRoute.addChildren(routes),
});

export default router;
