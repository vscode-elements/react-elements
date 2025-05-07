import React from "react";
import { createComponent } from "@lit/react";
import { VscodeOption as WC } from "@vscode-elements/elements/dist/vscode-option/vscode-option.js";

const VscodeOption = createComponent({
  tagName: "vscode-option",
  elementClass: WC,
  react: React,
  displayName: "VscodeOption",
});

export default VscodeOption;
