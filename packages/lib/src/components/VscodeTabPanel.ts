import React from "react";
import { createComponent } from "@lit/react";
import { VscodeTabPanel as WC } from "@vscode-elements/elements/dist/vscode-tab-panel/vscode-tab-panel.js";

const VscodeTabPanel = createComponent({
  tagName: "vscode-tab-panel",
  elementClass: WC,
  react: React,
  displayName: "VscodeTabPanel",
});

export default VscodeTabPanel;
