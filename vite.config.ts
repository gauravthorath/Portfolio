// import { defineConfig } from "vite";
// import viteReact from "@vitejs/plugin-react";
// import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

// export default defineConfig(({ mode }) => ({
//   plugins: [TanStackRouterVite(), viteReact()],
//   base: mode === "production" ? "/Portfolio/" : "/Portfolio/", // Ensure correct base path
//   server: {
//     open: true,
//     historyApiFallback: true, // Important for SPA
//     mimeTypes: {
//       "application/javascript": ["js", "mjs"],
//     },
//   },
// }));

import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => ({
  plugins: [viteReact()],
  base: mode === "production" ? "/Portfolio/" : "/Portfolio/",
  server: {
    open: true,
    historyApiFallback: true,
    mimeTypes: {
      "application/javascript": ["js", "mjs"],
    },
  },
  build: {
    chunkSizeWarningLimit: 1500, // Adjust to a higher limit if needed
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"], // Example of splitting large vendor chunks
        },
      },
    },
  },
}));
