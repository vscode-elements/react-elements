import React from "react";
import { createComponent } from "@lit/react";
import { VscodeTableRow as WC } from "@vscode-elements/elements/dist/vscode-table-row/vscode-table-row.js";

const VscodeTableRow = createComponent({
  tagName: "vscode-table-row",
  elementClass: WC,
  react: React,
  displayName: "VscodeTableRow",
});

export default VscodeTableRow;
