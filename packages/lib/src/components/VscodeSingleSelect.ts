import React from "react";
import { createComponent } from "@lit/react";
import { VscodeSingleSelect as WC } from "@vscode-elements/elements";

const VscodeSingleSelect = createComponent({
  tagName: "vscode-single-select",
  elementClass: WC,
  react: React,
  displayName: "VscodeSingleSelect",
});

export default VscodeSingleSelect;
