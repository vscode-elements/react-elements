import React from "react";
import { createComponent, EventName } from "@lit/react";
import {
  VscodeMultiSelect as WC,
  type VscMultiSelectCreateOptionEvent,
} from "@vscode-elements/elements/dist/vscode-multi-select/vscode-multi-select.js";

const VscodeMultiSelect = createComponent({
  tagName: "vscode-multi-select",
  elementClass: WC,
  react: React,
  displayName: "VscodeMultiSelect",
  events: {
    onChange: "change" as EventName<Event>,
    onInvalid: "invalid" as EventName<Event>,
    onVscMultiSelectCreateOption:
      "vsc-multi-select-create-option" as EventName<VscMultiSelectCreateOptionEvent>,
  },
});

export default VscodeMultiSelect;
