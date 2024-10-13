import React from "react";
import { createComponent } from "@lit/react";
import { VscodeTableHeaderCell as WC } from "@vscode-elements/elements";

const VscodeTableHeaderCell = createComponent({
  tagName: "vscode-table-header-cell",
  elementClass: WC,
  react: React,
  displayName: "VscodeTableHeaderCell",
});

export default VscodeTableHeaderCell;
