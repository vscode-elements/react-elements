import React from "react";
import { createComponent } from "@lit/react";
import { VscodeTreeItem as WC } from "@vscode-elements/elements/dist/vscode-tree-item/vscode-tree-item.js";

const VscodeTree = createComponent({
  tagName: "vscode-tree-item",
  elementClass: WC,
  react: React,
  displayName: "VscodeTreeItem",
});

export default VscodeTree;
