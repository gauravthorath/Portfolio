import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

export default defineConfig({
  plugins: [TanStackRouterVite(), viteReact()],
  base: "/Portfolio/", // Base for local dev, overridden by `base` in production
  server: {
    open: true, // Automatically open browser
    // historyApiFallback: true, // Serve index.html for any 404s
  },
});
