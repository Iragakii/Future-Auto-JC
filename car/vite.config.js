import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Removed resolve.alias for react and react-dom to avoid potential conflicts
  optimizeDeps: {
    include: ["react", "react-dom"],
    exclude: ["@react-three/drei"],
    dedupe: ["react", "react-dom"],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("react") || id.includes("react-dom")) {
              return "vendor";
            }
            return (
              "vendor_" + id.toString().split("node_modules/")[1].split("/")[0]
            );
          }
        },
      },
    },
  },
});
