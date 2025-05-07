import React from "react";
import { createComponent, EventName } from "@lit/react";
import { VscodeToolbarButton as WC } from "@vscode-elements/elements/dist/vscode-toolbar-button/vscode-toolbar-button.js";

const VscodeToolbarButton = createComponent({
  tagName: "vscode-toolbar-button",
  elementClass: WC,
  react: React,
  displayName: "VscodeToolbarButton",
  events: {
    onChange: "change" as EventName<Event>,
  },
});

export default VscodeToolbarButton;
