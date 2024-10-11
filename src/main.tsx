import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@vscode-elements/webview-playground/dist/index.js";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
