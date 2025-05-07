import React from "react";
import { createComponent } from "@lit/react";
import { VscodeFormGroup as WC } from "@vscode-elements/elements/dist/vscode-form-group/vscode-form-group.js";

const VscodeFormGroup = createComponent({
  tagName: "vscode-form-group",
  elementClass: WC,
  react: React,
  displayName: "VscodeFormGroup",
});

export default VscodeFormGroup;
