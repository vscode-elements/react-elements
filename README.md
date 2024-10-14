# React Elements

React wrapper components for [VSCode Elements](https://vscode-elements.github.io).

## Install

```bash
npm i @vscode-elements/react-elements
```

## A minimal working example

```typescript
import {
  VscodeBadge,
  VscodeTabHeader,
  VscodeTabPanel,
  VscodeTabs,
} from "@vscode-elements/react-elements";

function App() {
  return (
    <>
      <VscodeTabs
          onVscTabsSelect={(e) => {
            console.log(e);
          }}
        >
        <VscodeTabHeader>
          Lorem
          <VscodeBadge variant="counter" slot="content-after">10</VscodeBadge>
        </VscodeTabHeader>
        <VscodeTabPanel>panel content 1</VscodeTabPanel>
        <VscodeTabHeader>Ipsum</VscodeTabHeader>
        <VscodeTabPanel>panel content 2</VscodeTabPanel>
      </VscodeTabs>
    </>
  );
}

export default App;
```
