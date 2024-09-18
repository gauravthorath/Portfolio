import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

export default defineConfig(({ mode }) => ({
  plugins: [TanStackRouterVite(), viteReact()],
  base: mode === "production" ? "/Portfolio/" : "/", // Ensure correct base path
  server: {
    open: true,
    historyApiFallback: true, // Important for SPA
    mimeTypes: {
      "application/javascript": ["js", "mjs"],
    },
  },
}));
