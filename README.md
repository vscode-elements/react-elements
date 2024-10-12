# VSCode Elements React Wrapper

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
  const [count, setCount] = useState(0);

  return (
    <>
      <VscodeTabs
          onVscTabsSelect={(e) => {
            console.log(e);
          }}
        >
        <VscodeTabHeader>
          Lorem
          <span slot="content-after">
            <VscodeBadge variant="counter">10</VscodeBadge>
          </span>
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


> [!WARNING]
> The package is not complete yet; only a subset of components is covered.