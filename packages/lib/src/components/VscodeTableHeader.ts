import React from "react";
import { createComponent } from "@lit/react";
import { VscodeTableHeader as WC } from "@vscode-elements/elements";

const VscodeTableHeader = createComponent({
  tagName: "vscode-table-header",
  elementClass: WC,
  react: React,
  displayName: "VscodeTableHeader",
});

export default VscodeTableHeader;
