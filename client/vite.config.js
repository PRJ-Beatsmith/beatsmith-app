import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    emptyOutDir: true,
  },
  esbuild: {
    loader: "jsx",
  },
  server: {
    port: 8080,
    host: true,
    open: true,
    proxy: {
      "/api": "http://localhost:3000/",
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
