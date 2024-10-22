import React from "react";
import { createComponent, EventName } from "@lit/react";
import { VscodeMultiSelect as WC } from "@vscode-elements/elements";

const VscodeMultiSelect = createComponent({
  tagName: "vscode-multi-select",
  elementClass: WC,
  react: React,
  displayName: "VscodeMultiSelect",
  events: {
    onChange: "change" as EventName<Event>,
    onInvalid: "invalid" as EventName<Event>,
  },
});

export default VscodeMultiSelect;
