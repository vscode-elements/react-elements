import React from "react";
import { createComponent } from "@lit/react";
import { VscodeButton as WC } from "@vscode-elements/elements/dist/vscode-button/vscode-button.js";

const VscodeButton = createComponent({
  tagName: "vscode-button",
  elementClass: WC,
  react: React,
  displayName: "VscodeButton",
});

export default VscodeButton;
