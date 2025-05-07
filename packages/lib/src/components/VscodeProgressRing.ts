import React from "react";
import { createComponent } from "@lit/react";
import { VscodeProgressRing as WC } from "@vscode-elements/elements/dist/vscode-progress-ring/vscode-progress-ring.js";

const VscodeProgressRing = createComponent({
  tagName: "vscode-progress-ring",
  elementClass: WC,
  react: React,
  displayName: "VscodeProgressRing",
});

export default VscodeProgressRing;
