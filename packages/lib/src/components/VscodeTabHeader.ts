import React from "react";
import { createComponent } from "@lit/react";
import { VscodeTabHeader as WC } from "@vscode-elements/elements";

const VscodeTabHeader = createComponent({
  tagName: "vscode-tab-header",
  elementClass: WC,
  react: React,
  displayName: "VscTabHeader",
});

export default VscodeTabHeader;
