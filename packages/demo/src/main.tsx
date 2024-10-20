import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./routes/Root.tsx";
import BadgePage from "./routes/BadgePage.tsx";
import CheckboxPage from "./routes/CheckboxPage.tsx";

if (import.meta.env.DEV) {
  await import("@vscode-elements/webview-playground");
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/badge",
        element: <BadgePage />,
      },
      {
        path: "/checkbox",
        element: <CheckboxPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
