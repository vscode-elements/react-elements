import React from "react";
import { createComponent } from "@lit/react";
import { VscodeFormHelper as WC } from "@vscode-elements/elements";

const VscodeFormHelper = createComponent({
  tagName: "vscode-form-helper",
  elementClass: WC,
  react: React,
  displayName: "VscodeFormHelper",
});

export default VscodeFormHelper;
