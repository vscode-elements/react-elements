import React from "react";
import { createComponent, EventName } from "@lit/react";
import {
  type VscSingleSelectCreateOptionEvent,
  VscodeSingleSelect as WC,
} from "@vscode-elements/elements/dist/vscode-single-select/vscode-single-select.js";

const VscodeSingleSelect = createComponent({
  tagName: "vscode-single-select",
  elementClass: WC,
  react: React,
  displayName: "VscodeSingleSelect",
  events: {
    onChange: "change" as EventName<Event>,
    onInvalid: "invalid" as EventName<Event>,
    onVscSingleSelectCreateOption:
      "vsc-single-select-create-option" as EventName<VscSingleSelectCreateOptionEvent>,
  },
});

export default VscodeSingleSelect;
