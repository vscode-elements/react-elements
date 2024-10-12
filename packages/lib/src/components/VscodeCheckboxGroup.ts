import React from "react";
import { createComponent } from "@lit/react";
import { VscodeCheckboxGroup as VscodeCheckboxGroupWebComponent } from "@vscode-elements/elements";

const VscodeCheckboxGroup = createComponent({
  tagName: "vscode-checkbox-group",
  elementClass: VscodeCheckboxGroupWebComponent,
  react: React,
  displayName: "VscodeCheckboxGroup",
});

export default VscodeCheckboxGroup;
