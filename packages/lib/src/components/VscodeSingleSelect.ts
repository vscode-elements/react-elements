import React from "react";
import { createComponent, EventName } from "@lit/react";
import { VscodeSingleSelect as WC } from "@vscode-elements/elements";

const VscodeSingleSelect = createComponent({
  tagName: "vscode-single-select",
  elementClass: WC,
  react: React,
  displayName: "VscodeSingleSelect",
  events: {
    onChange: "change" as EventName<Event>,
    onInvalid: "invalid" as EventName<Event>,
  },
});

export default VscodeSingleSelect;
