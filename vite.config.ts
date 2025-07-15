import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
  },
  build: {
    lib: {
      entry: "src/load-widget.tsx",
      formats: ["es"],
      fileName: () => `load-widget.js`,
    },
    // rollupOptions: {
    // external: ["react", "react-dom"],
    // },
  },
});
