import { VscodeCheckbox } from "@vscode-elements/react-elements";
import { useState } from "react";

export default function BadgePage() {
  const [checked, setChecked] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  return (
    <div>
      <h1>Checkbox</h1>
      <p>
        <VscodeCheckbox
          checked={checked}
          onChange={(ev) => {
            console.log(ev);
            setChecked(!checked);
          }}
          onClick={(ev) => {
            console.log(ev);
            setClickCount(clickCount + 1);
          }}
        >
          Checkbox example
        </VscodeCheckbox>
      </p>
      <p>Checkbox is {checked ? "checked" : "unchecked"}</p>
      <p>Click count is {clickCount}</p>
    </div>
  );
}
