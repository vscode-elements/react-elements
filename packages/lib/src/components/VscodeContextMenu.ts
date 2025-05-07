import React from "react";
import { createComponent, type EventName } from "@lit/react";
import {
  VscodeContextMenu as WC,
  type VscContextMenuSelectEvent,
} from "@vscode-elements/elements/dist/vscode-context-menu/vscode-context-menu.js";

const VscodeContextMenu = createComponent({
  tagName: "vscode-context-menu",
  elementClass: WC,
  react: React,
  displayName: "VscodeContextMenu",
  events: {
    onVscContextMenuSelect:
      "vsc-context-menu-select" as EventName<VscContextMenuSelectEvent>,
  },
});

export default VscodeContextMenu;
