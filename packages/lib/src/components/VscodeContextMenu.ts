import React from "react";
import { createComponent, type EventName } from "@lit/react";
import {
  VscodeContextMenu as VscodeContextMenuWebComponent,
  VscContextMenuSelectEvent,
} from "@vscode-elements/elements/dist/vscode-context-menu/vscode-context-menu";

const VscodeContextMenu = createComponent({
  tagName: "vscode-context-menu",
  elementClass: VscodeContextMenuWebComponent,
  react: React,
  displayName: "VscodeContextMenu",
  events: {
    onVscContextMenuSelect:
      "vsc-context-menu-select" as EventName<VscContextMenuSelectEvent>,
  },
});

export default VscodeContextMenu;
