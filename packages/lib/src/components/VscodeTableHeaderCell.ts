import React from "react";
import { createComponent } from "@lit/react";
import { VscodeTableHeaderCell as WC } from "@vscode-elements/elements/dist/vscode-table-header-cell/vscode-table-header-cell.js";

const VscodeTableHeaderCell = createComponent({
  tagName: "vscode-table-header-cell",
  elementClass: WC,
  react: React,
  displayName: "VscodeTableHeaderCell",
});

export default VscodeTableHeaderCell;
