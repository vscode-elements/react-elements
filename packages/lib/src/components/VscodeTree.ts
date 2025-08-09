import React from "react";
import { createComponent, type EventName } from "@lit/react";
import {
  type VscTreeSelectEvent,
  VscodeTree as WC,
} from "@vscode-elements/elements/dist/vscode-tree/vscode-tree.js";

const VscodeTree = createComponent({
  tagName: "vscode-tree",
  elementClass: WC,
  react: React,
  displayName: "VscodeTree",
  events: {
    onVscTreeSelect: "vsc-tree-select" as EventName<VscTreeSelectEvent>,
  },
});

export default VscodeTree;
