import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      react: path.resolve(__dirname, "./node_modules/react"),
      "react-dom": path.resolve(__dirname, "./node_modules/react-dom"),
    },
    dedupe: ["react-spring", "@react-spring/web", "@react-spring/core"],
  },
  optimizeDeps: {
    esbuildOptions: {
      keepNames: true, // This can help with initialization order issues
    },
  },
  build: {
    minify: "terser", // Switch to terser
    terserOptions: {
      compress: {
        keep_infinity: true,
        pure_getters: true,
        passes: 2,
      },
      mangle: {
        // Don't mangle react-spring variables
        reserved: ["un", "is", "to", "get", "set", "run", "key", "ref"],
      },
      format: {
        comments: false,
        preserve_annotations: true,
      },
    },
  },
});
