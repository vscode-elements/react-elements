import React from "react";
import { createComponent } from "@lit/react";
import { VscodeTabPanel as VscodeTabPanelWebComponent } from "@vscode-elements/elements";

const VscodeTabPanel = createComponent({
  tagName: "vscode-tab-panel",
  elementClass: VscodeTabPanelWebComponent,
  react: React,
  displayName: "VscodeTabPanel",
});

export default VscodeTabPanel;
