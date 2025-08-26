import React from "react";
import { createComponent } from "@lit/react";
import { VscodeProgressBar as WC } from "@vscode-elements/elements/dist/vscode-progress-bar/vscode-progress-bar.js";

const VscodeProgressBar = createComponent({
  tagName: "vscode-progress-bar",
  elementClass: WC,
  react: React,
  displayName: "VscodeProgressBar",
});

export default VscodeProgressBar;
