import React from "react";
import { createComponent } from "@lit/react";
import { VscodeContextMenuItem as WC } from "@vscode-elements/elements/dist/vscode-context-menu-item/vscode-context-menu-item.js";

const VscodeContextMenuItem = createComponent({
  tagName: "vscode-context-menu-item",
  elementClass: WC,
  react: React,
  displayName: "VscodeContextMenuItem",
});

export default VscodeContextMenuItem;
