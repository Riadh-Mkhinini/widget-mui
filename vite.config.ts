import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "src/load-widget.tsx",
      formats: ["es"],
      fileName: () => `load-widget.js`,
    },
    rollupOptions: {
      // external: ["react", "react-dom"],
    },
  },
});
