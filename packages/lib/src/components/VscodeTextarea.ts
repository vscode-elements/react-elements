import React from "react";
import { createComponent, EventName } from "@lit/react";
import { VscodeTextarea as WC } from "@vscode-elements/elements/dist/vscode-textarea/vscode-textarea.js";

const VscodeTextarea = createComponent({
  tagName: "vscode-textarea",
  elementClass: WC,
  react: React,
  displayName: "VscodeTextarea",
  events: {
    onChange: "change" as EventName<Event>,
    onInput: "input" as EventName<InputEvent>,
    onInvalid: "invalid" as EventName<Event>,
  },
});

export default VscodeTextarea;
