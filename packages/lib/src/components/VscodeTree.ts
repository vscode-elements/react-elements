import React from "react";
import { createComponent, type EventName } from "@lit/react";
import { VscodeTree as WC } from "@vscode-elements/elements";
import {
  VscTreeActionEvent,
  VscTreeSelectEvent,
} from "@vscode-elements/elements/dist/vscode-tree/vscode-tree";

const VscodeTree = createComponent({
  tagName: "vscode-tree",
  elementClass: WC,
  react: React,
  displayName: "VscodeTree",
  events: {
    onVscTreeAction: "vsc-tree-action" as EventName<VscTreeActionEvent>,
    onVscTreeSelect: "vsc-tree-select" as EventName<VscTreeSelectEvent>,
  },
});

export default VscodeTree;
