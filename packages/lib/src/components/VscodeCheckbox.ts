import React from "react";
import { createComponent, EventName } from "@lit/react";
import { VscodeCheckbox as WC } from "@vscode-elements/elements/dist/vscode-checkbox/vscode-checkbox.js";

const VscodeCheckbox = createComponent({
  tagName: "vscode-checkbox",
  elementClass: WC,
  react: React,
  displayName: "VscodeCheckbox",
  events: {
    onChange: "change" as EventName<Event>,
  },
});

export default VscodeCheckbox;
