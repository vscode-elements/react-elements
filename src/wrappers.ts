import React from "react";
import { createComponent } from "@lit/react";
import {
  VscodeBadge,
  VscodeTabs,
  VscodeTabHeader,
  VscodeTabPanel,
} from "@vscode-elements/elements";

export const VscBadge = createComponent({
  tagName: "vscode-badge",
  elementClass: VscodeBadge,
  react: React,
  displayName: "VscBadge",
});

export const VscTabs = createComponent({
  tagName: "vscode-tabs",
  elementClass: VscodeTabs,
  react: React,
  events: {
    onVscTabsSelect: "vsc-tabs-select",
  },
  displayName: "VscTabs",
});

export const VscTabHeader = createComponent({
  tagName: "vscode-tab-header",
  elementClass: VscodeTabHeader,
  react: React,
  displayName: "VscTabHeader",
});

export const VscTabPanel = createComponent({
  tagName: "vscode-tab-panel",
  elementClass: VscodeTabPanel,
  react: React,
  displayName: "VscTabPanel",
});
