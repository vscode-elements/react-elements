import React from "react";
import { createComponent, EventName } from "@lit/react";
import { VscodeRadioGroup as WC } from "@vscode-elements/elements/dist/vscode-radio-group/vscode-radio-group.js";

const VscodeRadioGroup = createComponent({
  tagName: "vscode-radio-group",
  elementClass: WC,
  react: React,
  displayName: "VscodeRadioGroup",
  events: {
    onChange: "change" as EventName<Event>,
  },
});

export default VscodeRadioGroup;
