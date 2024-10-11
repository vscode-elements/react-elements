import React from "react";
import { createComponent, type EventName } from "@lit/react";
import {
  VscodeBadge as VscodeBadgeWC,
  VscodeTabs as VscodeTabsWC,
  VscodeTabHeader as VscodeTabHeaderWC,
  VscodeTabPanel as VscodeTabPanelWC
} from "@vscode-elements/elements";
import {VscTabsSelectEvent} from '@vscode-elements/elements/dist/vscode-tabs/vscode-tabs';

export const VscodeBadge = createComponent({
  tagName: "vscode-badge",
  elementClass: VscodeBadgeWC,
  react: React,
});

export const VscodeTabs = createComponent({
  tagName: "vscode-tabs",
  elementClass: VscodeTabsWC,
  react: React,
  events: {
    onVscTabsSelect: 'vsc-tabs-select',
  }
});

export const VscodeTabHeader = createComponent({
  tagName: "vscode-tab-header",
  elementClass: VscodeTabHeaderWC,
  react: React,
});

export const VscodeTabPanel = createComponent({
  tagName: "vscode-tab-panel",
  elementClass: VscodeTabPanelWC,
  react: React,
});
