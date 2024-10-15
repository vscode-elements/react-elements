import React from "react";
import { createComponent } from "@lit/react";
import { VscodeLabel as WC } from "@vscode-elements/elements";

const VscodeLabel = createComponent({
  tagName: "vscode-label",
  elementClass: WC,
  react: React,
  displayName: "VscodeLabel",
});

export default VscodeLabel;
