import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: "html-transform",
      apply: "build",
      transformIndexHtml(html) {
        return html.replace(
          '<script type="module" src="node_modules/@vscode-elements/webview-playground/dist/index.js"></script>',
          ""
        );
      },
    },
  ],
});
