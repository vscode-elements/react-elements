import React from "react";
import { createComponent } from "@lit/react";
import { VscodeCollapsible as WC } from "@vscode-elements/elements";

const VscodeCollapsible = createComponent({
  tagName: "vscode-collapsible",
  elementClass: WC,
  react: React,
  displayName: "VscodeCollapsible",
});

export default VscodeCollapsible;
