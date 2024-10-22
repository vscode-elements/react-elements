import { VscodeTextarea } from "@vscode-elements/react-elements";

function logEvents(ev: unknown) {
  console.log(ev);
}

export default function TextareaPage() {
  return (
    <div>
      <h1>Textarea</h1>
      <h2>Change event</h2>
      <p>
        <VscodeTextarea
          onChange={logEvents}
          onInput={logEvents}
        ></VscodeTextarea>
      </p>
      <h2>Invalid event</h2>
      <form action="#">
        <p>
          <VscodeTextarea required onInvalid={logEvents}></VscodeTextarea>
          <button type="submit">Submit</button>
        </p>
      </form>
    </div>
  );
}
