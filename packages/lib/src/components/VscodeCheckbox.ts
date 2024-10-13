import React from "react";
import { createComponent } from "@lit/react";
import { VscodeCheckbox as WC } from "@vscode-elements/elements";

const VscodeCheckbox = createComponent({
  tagName: "vscode-checkbox",
  elementClass: WC,
  react: React,
  displayName: "VscodeCheckbox",
});

export default VscodeCheckbox;
