import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      fileName: "my-lib",
      formats: ["es"],
    },
    rollupOptions: {
      external: ["react", "@vscode-elements/elements"],
    },
    minify: false,
  },
});
