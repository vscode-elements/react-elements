import React from "react";
import { createComponent } from "@lit/react";
import { VscodeBadge as WC } from "@vscode-elements/elements";

const VscodeBadge = createComponent({
  tagName: "vscode-badge",
  elementClass: WC,
  react: React,
  displayName: "VscodeBadge",
});

export default VscodeBadge;
