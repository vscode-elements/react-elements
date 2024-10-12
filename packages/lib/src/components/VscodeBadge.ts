import React from "react";
import { createComponent } from "@lit/react";
import { VscodeBadge as VscodeBadgeWebComponent } from "@vscode-elements/elements";

const VscodeBadge = createComponent({
  tagName: "vscode-badge",
  elementClass: VscodeBadgeWebComponent,
  react: React,
  displayName: "VscodeBadge",
});

export default VscodeBadge;
