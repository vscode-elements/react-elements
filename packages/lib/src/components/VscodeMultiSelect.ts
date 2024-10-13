import React from "react";
import { createComponent } from "@lit/react";
import { VscodeMultiSelect as WC } from "@vscode-elements/elements";

const VscodeMultiSelect = createComponent({
  tagName: "vscode-multi-select",
  elementClass: WC,
  react: React,
  displayName: "VscodeMultiSelect",
});

export default VscodeMultiSelect;
