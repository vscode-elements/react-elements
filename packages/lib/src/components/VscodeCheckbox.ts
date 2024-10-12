import React from "react";
import { createComponent } from "@lit/react";
import { VscodeCheckbox as VscodeCheckboxWebComponent } from "@vscode-elements/elements";

const VscodeCheckbox = createComponent({
  tagName: "vscode-checkbox",
  elementClass: VscodeCheckboxWebComponent,
  react: React,
  displayName: "VscodeCheckbox",
});

export default VscodeCheckbox;
