import React from "react";
import { createComponent } from "@lit/react";
import { VscodeTextarea as WC } from "@vscode-elements/elements";

const VscodeTextarea = createComponent({
  tagName: "vscode-textarea",
  elementClass: WC,
  react: React,
  displayName: "VscodeTextarea",
});

export default VscodeTextarea;
