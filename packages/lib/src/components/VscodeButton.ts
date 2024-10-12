import React from "react";
import { createComponent } from "@lit/react";
import { VscodeButton as VscodeButtonWebComponent } from "@vscode-elements/elements";

const VscodeButton = createComponent({
  tagName: "vscode-button",
  elementClass: VscodeButtonWebComponent,
  react: React,
  displayName: "VscodeButton",
});

export default VscodeButton;
