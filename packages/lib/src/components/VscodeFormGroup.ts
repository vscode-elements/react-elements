import React from "react";
import { createComponent } from "@lit/react";
import { VscodeFormGroup as WC } from "@vscode-elements/elements";

const VscodeFormGroup = createComponent({
  tagName: "vscode-form-group",
  elementClass: WC,
  react: React,
  displayName: "VscodeFormGroup",
});

export default VscodeFormGroup;
