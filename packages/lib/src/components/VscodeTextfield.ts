import React from "react";
import { createComponent, EventName } from "@lit/react";
import { VscodeTextfield as WC } from "@vscode-elements/elements";

const VscodeTextfield = createComponent({
  tagName: "vscode-textfield",
  elementClass: WC,
  react: React,
  displayName: "VscodeTextfield",
  events: {
    onChange: "change" as EventName<Event>,
    onInput: "input" as EventName<InputEvent>,
    onInvalid: "invalid" as EventName<Event>,
  },
});

export default VscodeTextfield;
