import React from "react";
import { createComponent, type EventName } from "@lit/react";
import { VscodeTabs as WC } from "@vscode-elements/elements";
import { VscTabsSelectEvent } from "@vscode-elements/elements/dist/vscode-tabs/vscode-tabs";

const VscodeTabs = createComponent({
  tagName: "vscode-tabs",
  elementClass: WC,
  react: React,
  events: {
    onVscTabsSelect: "vsc-tabs-select" as EventName<VscTabsSelectEvent>,
  },
  displayName: "VscodeTabs",
});

export default VscodeTabs;
