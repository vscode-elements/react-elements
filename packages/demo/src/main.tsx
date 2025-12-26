import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./routes/Root.tsx";
import BadgePage from "./routes/BadgePage.tsx";
import ButtonPage from "./routes/ButtonPage.tsx";
import CheckboxPage from "./routes/CheckboxPage.tsx";
import MultiSelectPage from "./routes/MultiSelectPage.tsx";
import RadioPage from "./routes/RadioPage.tsx";
import SingleSelectPage from "./routes/SingleSelectPage.tsx";
import SplitLayoutPage from "./routes/SplitLayout.tsx";
import TablePage from "./routes/TablePage.tsx";
import TextareaPage from "./routes/Textarea.tsx";
import TextfieldPage from "./routes/Textfield.tsx";
import TreePage from "./routes/Tree.tsx";

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
        path: "/button",
        element: <ButtonPage />,
      },
      {
        path: "/checkbox",
        element: <CheckboxPage />,
      },
      {
        path: "/multi-select",
        element: <MultiSelectPage />,
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
      {
        path: "/tree",
        element: <TreePage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
