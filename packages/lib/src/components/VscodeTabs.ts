import React from "react";
import { createComponent } from "@lit/react";
import { VscodeTabs as VscodeTabsWebComponent } from "@vscode-elements/elements";

const VscodeTabs = createComponent({
  tagName: "vscode-tabs",
  elementClass: VscodeTabsWebComponent,
  react: React,
  events: {
    onVscTabsSelect: "vsc-tabs-select",
  },
  displayName: "VscodeTabs",
});

export default VscodeTabs;
