import React from "react";
import { createComponent } from "@lit/react";
import { VscodeToolbarContainer as WC } from "@vscode-elements/elements/dist/vscode-toolbar-container/vscode-toolbar-container.js";

const VscodeToolbarContainer = createComponent({
  tagName: "vscode-toolbar-container",
  elementClass: WC,
  react: React,
  displayName: "VscodeToolbarContainer",
});

export default VscodeToolbarContainer;
