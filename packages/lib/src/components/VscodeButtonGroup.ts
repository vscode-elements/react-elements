import React from "react";
import { createComponent } from "@lit/react";
import { VscodeButtonGroup as WC } from "@vscode-elements/elements/dist/vscode-button-group/vscode-button-group.js";

const VscodeButtonGroup = createComponent({
  tagName: "vscode-button-group",
  elementClass: WC,
  react: React,
  displayName: "VscodeButtonGroup",
});

export default VscodeButtonGroup;
