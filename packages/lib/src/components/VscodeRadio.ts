import React from "react";
import { createComponent, EventName } from "@lit/react";
import { VscodeRadio as WC } from "@vscode-elements/elements/dist/vscode-radio/vscode-radio.js";

const VscodeRadio = createComponent({
  tagName: "vscode-radio",
  elementClass: WC,
  react: React,
  displayName: "VscodeRadio",
  events: {
    onChange: "change" as EventName<Event>,
    onInvalid: "invalid" as EventName<Event>,
  },
});

export default VscodeRadio;
