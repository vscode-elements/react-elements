import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
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
      <div>
        <VscodeBadge variant="counter">10</VscodeBadge>
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
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
