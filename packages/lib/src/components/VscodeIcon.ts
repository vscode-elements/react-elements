import React from "react";
import { createComponent } from "@lit/react";
import { VscodeIcon as WC } from "@vscode-elements/elements/dist/vscode-icon/vscode-icon.js";

const VscodeIcon = createComponent({
  tagName: "vscode-icon",
  elementClass: WC,
  react: React,
  displayName: "VscodeIcon",
});

export default VscodeIcon;
