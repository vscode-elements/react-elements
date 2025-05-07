import React from "react";
import { createComponent } from "@lit/react";
import { VscodeTableCell as WC } from "@vscode-elements/elements/dist/vscode-table-cell/vscode-table-cell.js";

const VscodeTableCell = createComponent({
  tagName: "vscode-table-cell",
  elementClass: WC,
  react: React,
  displayName: "VscodeTableCell",
});

export default VscodeTableCell;
