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
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor"; // Split node_modules into a separate chunk
          }
        },
      },
      chunkSizeWarningLimit: 600, // Adjust size limit if necessary
    },
  },
}));
