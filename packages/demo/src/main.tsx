import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./routes/Root.tsx";
import BadgePage from "./routes/BadgePage.tsx";
import CheckboxPage from "./routes/CheckboxPage.tsx";
import RadioPage from "./routes/RadioPage.tsx";
import SingleSelectPage from "./routes/SingleSelectPage.tsx";
import SplitLayoutPage from "./routes/SplitLayout.tsx";
import TablePage from "./routes/TablePage.tsx";
import TextareaPage from "./routes/Textarea.tsx";
import TextfieldPage from "./routes/Textfield.tsx";

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
      {
        path: "/radio",
        element: <RadioPage />,
      },
      {
        path: "/single-select",
        element: <SingleSelectPage />,
      },
      {
        path: "/split-layout",
        element: <SplitLayoutPage />,
      },
      {
        path: "/table",
        element: <TablePage />,
      },
      {
        path: "/textarea",
        element: <TextareaPage />,
      },
      {
        path: "/textfield",
        element: <TextfieldPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
