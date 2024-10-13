import React from "react";
import { createComponent } from "@lit/react";
import { VscodeCheckboxGroup as WC } from "@vscode-elements/elements";

const VscodeCheckboxGroup = createComponent({
  tagName: "vscode-checkbox-group",
  elementClass: WC,
  react: React,
  displayName: "VscodeCheckboxGroup",
});

export default VscodeCheckboxGroup;
