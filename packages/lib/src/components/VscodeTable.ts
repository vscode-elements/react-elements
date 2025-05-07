import React from "react";
import { createComponent } from "@lit/react";
import { VscodeTable as WC } from "@vscode-elements/elements/dist/vscode-table/vscode-table.js";

const VscodeTable = createComponent({
  tagName: "vscode-table",
  elementClass: WC,
  react: React,
  displayName: "VscodeTable",
});

export default VscodeTable;
