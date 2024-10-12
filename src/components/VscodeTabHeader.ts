import React from "react";
import { createComponent } from "@lit/react";
import { VscodeTabHeader as VscodeTabHeaderWebComponent } from "@vscode-elements/elements";

const VscodeTabHeader = createComponent({
  tagName: "vscode-tab-header",
  elementClass: VscodeTabHeaderWebComponent,
  react: React,
  displayName: "VscTabHeader",
});

export default VscodeTabHeader;
