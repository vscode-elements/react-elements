import { VscodeCheckbox } from "@vscode-elements/react-elements";

function logEvents(ev: unknown) {
  console.log(ev);
}

export default function CheckboxPage() {
  return (
    <div>
      <h1>Checkbox</h1>
      <p>
        <VscodeCheckbox
          onChange={logEvents}
          onClick={logEvents}
          id="checkbox-1"
        >
          Checkbox example
        </VscodeCheckbox>
      </p>
    </div>
  );
}
