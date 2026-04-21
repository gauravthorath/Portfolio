import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react";

export default defineConfig(() => ({
	plugins: [viteReact()],
	base: process.env.VITE_BASE_PATH ?? "/",
	server: {
		open: true,
		historyApiFallback: true,
		mimeTypes: {
			"application/javascript": ["js", "mjs"],
		},
	},
	build: {
		chunkSizeWarningLimit: 1500,
		rollupOptions: {
			output: {
				manualChunks: {
					vendor: ["react", "react-dom"],
				},
			},
		},
	},
}));
