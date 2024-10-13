import React from "react";
import { createComponent } from "@lit/react";
import { VscodeSplitLayout as WC } from "@vscode-elements/elements";

const VscodeSplitLayout = createComponent({
  tagName: "vscode-split-layout",
  elementClass: WC,
  react: React,
  displayName: "VscodeSplitLayout",
});

export default VscodeSplitLayout;
