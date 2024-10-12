import React from "react";
import { createComponent } from "@lit/react";
import { VscodeCollapsible as VscodeCollapsibleWebComponent } from "@vscode-elements/elements";

const VscodeCollapsible = createComponent({
  tagName: "vscode-collapsible",
  elementClass: VscodeCollapsibleWebComponent,
  react: React,
  displayName: "VscodeCollapsible",
});

export default VscodeCollapsible;
