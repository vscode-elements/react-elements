import React from "react";
import { createComponent } from "@lit/react";
import { VscodeFormContainer as WC } from "@vscode-elements/elements";

const VscodeFormContainer = createComponent({
  tagName: "vscode-form-container",
  elementClass: WC,
  react: React,
  displayName: "VscodeFormContainer",
});

export default VscodeFormContainer;
