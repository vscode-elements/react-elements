import { VscodeTextfield } from "@vscode-elements/react-elements";

function logEvents(ev: unknown) {
  console.log(ev);
}

export default function TextfieldPage() {
  return (
    <div>
      <h1>Textfield</h1>
      <h2>Change event</h2>
      <p>
        <VscodeTextfield
          onChange={logEvents}
          onInput={logEvents}
        ></VscodeTextfield>
      </p>
      <h2>Invalid event</h2>
      <form action="#">
        <p>
          <VscodeTextfield required onInvalid={logEvents}></VscodeTextfield>
          <button type="submit">Submit</button>
        </p>
      </form>
    </div>
  );
}
