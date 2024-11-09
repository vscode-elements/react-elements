import React from "react";
import { createComponent, EventName } from "@lit/react";
import { VscodeSplitLayout as WC } from "@vscode-elements/elements";
import { VscSplitLayoutChangeEvent } from "@vscode-elements/elements/dist/vscode-split-layout/vscode-split-layout";

const VscodeSplitLayout = createComponent({
  tagName: "vscode-split-layout",
  elementClass: WC,
  react: React,
  displayName: "VscodeSplitLayout",
  events: {
    onVscSplitLayoutChange:
      "vsc-split-layout-change" as EventName<VscSplitLayoutChangeEvent>,
  },
});

export default VscodeSplitLayout;
