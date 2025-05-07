import React from "react";
import { createComponent } from "@lit/react";
import { VscodeTableHeader as WC } from "@vscode-elements/elements/dist/vscode-table-header/vscode-table-header.js";

const VscodeTableHeader = createComponent({
  tagName: "vscode-table-header",
  elementClass: WC,
  react: React,
  displayName: "VscodeTableHeader",
});

export default VscodeTableHeader;
